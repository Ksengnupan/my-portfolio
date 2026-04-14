import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const siteUrl = "https://ksengnupan.info";
const siteName = "Seng Nu Pan Kumgyi — AI Engineer";
const description =
  "Portfolio of Seng Nu Pan Kumgyi (Pan), an AI Engineer based in Bangkok. Building production LLM systems, RAG pipelines, and GenAI products for the enterprise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: "%s | Seng Nu Pan Kumgyi",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Seng Nu Pan Kumgyi", url: siteUrl }],
  creator: "Seng Nu Pan Kumgyi",
  publisher: "Seng Nu Pan Kumgyi",
  keywords: [
    "Seng Nu Pan",
    "Seng Nu Pan Kumgyi",
    "AI Engineer",
    "LLM Engineer",
    "Machine Learning Engineer",
    "RAG",
    "GenAI",
    "LangChain",
    "Neo4j",
    "Python",
    "Next.js",
    "ArcFusion",
    "Bangkok",
    "Thailand",
    "Myanmar",
    "SIIT",
    "Thammasat University",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@sengnupan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Seng Nu Pan Kumgyi",
  alternateName: "Pan",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "ArcFusion",
    url: "https://www.arcfusion.ai/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "SIIT, Thammasat University",
      url: "https://www.siit.tu.ac.th/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Institute of Science and Technology (Tokyo Tech)",
      url: "https://www.titech.ac.jp/english",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Technology, Yatanarpon Cyber City",
      url: "https://utycc.org/",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangkok",
    addressCountry: "TH",
  },
  sameAs: [
    "https://linkedin.com/in/sengnupankumgyi/",
    "https://github.com/Ksengnupan",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "Python",
    "Next.js",
    "Neo4j",
    "AWS Bedrock",
  ],
  email: "mailto:sengnupan.kumgyi@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
