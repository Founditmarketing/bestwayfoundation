import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { localBusinessSchema, jsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Seamless Gutters & Siding in Nederland, TX | ${site.name}`,
    template: `%s | ${site.shortName} Gutters & Siding`,
  },
  description:
    "Owner-operated seamless gutter and siding contractor serving Nederland, Port Arthur, Beaumont & Southeast Texas since 2009. Licensed & insured. Free estimates.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema())}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-amber-450 focus:px-4 focus:py-2 focus:font-bold focus:text-ink-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
