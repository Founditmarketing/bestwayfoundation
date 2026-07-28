import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Seamless Gutters in ${site.city}, ${site.state} & the Coastal Bend`,
    template: `%s | ${site.name} — ${site.city}, ${site.state}`,
  },
  description: `Custom seamless gutters roll-formed on site for homes in ${site.serviceAreaLabel}. Installation, replacement, gutter guards, repair & downspouts. Get a free estimate.`,
  metadataBase: new URL("https://jseamlessgutters.com"), // TODO: set the real production domain
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="pb-[60px] md:pb-0">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
