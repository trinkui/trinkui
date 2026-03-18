import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TrinkUI — Landing pages, beautifully crafted.",
    template: "%s | TrinkUI",
  },
  description:
    "Open-source React UI library focused on landing pages. Beautiful, accessible, and production-ready components.",
  keywords: ["react", "ui", "landing-page", "components", "tailwind", "open-source"],
  authors: [{ name: "TrinkUI Contributors" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "TrinkUI",
    description: "Landing pages, beautifully crafted.",
    siteName: "TrinkUI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
