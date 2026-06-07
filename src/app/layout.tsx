import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd, localBusinessSchema } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: {
    default: "UCBS Ltd | Enterprise Business Solutions & Cost Management",
    template: "%s | UCBS Ltd"
  },
  description:
    "Utility Concepts Business Solutions (UCBS) provides expert cost-saving analysis for UK businesses. Compare business energy, card terminals, telecoms, and more.",
  metadataBase: new URL("https://www.ucbsltd.co.uk"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "UCBS Ltd | Enterprise Business Solutions & Cost Management",
    description: "Compare business utilities, merchant solutions, broadband, Ev charging, and finance options to optimize your operations.",
    url: "https://www.ucbsltd.co.uk",
    siteName: "UCBS Ltd",
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Inject Local Business SEO Schema */}
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Header />
        {/* Main content wrapper with skip-to ID */}
        <main id="main-content" className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
