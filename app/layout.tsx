import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-six-livid-46.vercel.app"), // Update after deployment

  title: {
    default: "Subash | AI Engineer",
    template: "%s | Subash",
  },

  description:
    "AI Engineer specializing in Generative AI, Hybrid RAG, Machine Learning, Computer Vision, and intelligent software applications.",

  keywords: [
    "Subash",
    "AI Engineer",
    "Machine Learning",
    "Generative AI",
    "Hybrid RAG",
    "LangChain",
    "Python",
    "FAISS",
    "ChromaDB",
    "Computer Vision",
    "Portfolio",
    "Software Engineer",
    "LLM",
  ],

  authors: [
    {
      name: "Subash",
    },
  ],

  creator: "Subash",

  openGraph: {
    title: "Subash | AI Engineer",
    description:
      "Portfolio showcasing AI, Machine Learning, Hybrid RAG, Generative AI, and Software Engineering projects.",
    url: "https://portfolio-six-livid-46.vercel.app",
    siteName: "Subash Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Subash | AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, Machine Learning, and Hybrid RAG applications.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}