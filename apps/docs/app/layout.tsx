import type { Metadata } from "next";
import { Inter, JetBrains_Mono, DynaPuff } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "trink-ui — Design that resonates.",
    template: "%s | trink-ui",
  },
  description:
    "Open-source React component library. Accessible, fast, and stunning components built on Tailwind CSS and TypeScript.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${dynaPuff.variable} font-sans antialiased bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]`}
      >
        {children}
      </body>
    </html>
  );
}
