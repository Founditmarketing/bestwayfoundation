import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SitePhoto from "@/components/SitePhoto";
import CtaBanner from "@/components/CtaBanner";
import { posts, postBySlug, type Block } from "@/lib/blog";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { type: "article", publishedTime: post.date },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-10 text-2xl font-extrabold text-ink-900">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-5 leading-relaxed text-slate-700">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-slate-700">
              <span aria-hidden className="mt-0.5 font-black text-amber-450">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/blog" className="font-semibold text-ink-700 hover:underline">
            ← All articles
          </Link>
        </nav>
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
          <span className="rounded-full bg-ink-50 px-2.5 py-0.5 font-semibold text-ink-700">
            {post.category}
          </span>
          <time dateTime={post.date}>{post.dateDisplay}</time>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
          {post.title}
        </h1>
        <SitePhoto
          src={post.image}
          alt={post.imageAlt}
          width={768}
          height={432}
          priority
          className="mt-8 aspect-video w-full rounded-lg object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />
        <div>{post.body.map(renderBlock)}</div>
      </article>
      <CtaBanner />
    </>
  );
}
