import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PORTFOLIO_DATA } from "@/data/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personalInfo.name} - ${PORTFOLIO_DATA.personalInfo.role}`,
  description: PORTFOLIO_DATA.personalInfo.summary,
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Portfolio"
  ],
  authors: [{ name: PORTFOLIO_DATA.personalInfo.name }],
  creator: PORTFOLIO_DATA.personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${PORTFOLIO_DATA.personalInfo.name} - ${PORTFOLIO_DATA.personalInfo.role}`,
    description: PORTFOLIO_DATA.personalInfo.summary,
    siteName: `${PORTFOLIO_DATA.personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personalInfo.name} - ${PORTFOLIO_DATA.personalInfo.role}`,
    description: PORTFOLIO_DATA.personalInfo.summary,
    creator: "@SonuShivcharan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div className="min-h-screen text-foreground">
          <main className="max-w-3xl mx-auto px-4 space-y-12 relative md:px-4 ">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
