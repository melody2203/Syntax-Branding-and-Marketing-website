import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syntax | Premium Software Development",
  description: "Modern, high-end software development company specializing in digital transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-[#050505] text-white selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}
