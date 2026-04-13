import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Seng Nu Pan — AI Engineer | LLM Specialist",
  description:
    "Portfolio of Seng Nu Pan, AI Engineer specializing in LLM systems, RAG pipelines, and production AI solutions.",
  keywords: [
    "AI Engineer",
    "LLM",
    "Machine Learning",
    "RAG",
    "Python",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Seng Nu Pan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
