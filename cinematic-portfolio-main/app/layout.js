import { Geist, Geist_Mono, Baloo_2, Dancing_Script } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";
import { SITE_URL } from '@/lib/siteConfig';
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const description =
  'Software Engineer specializing in AI-driven automation and modern web development. Building high-performance, visually immersive digital experiences with React, Node.js, and Three.js.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Muhammad Maaz | Software Engineer',
    template: '%s | Muhammad Maaz',
  },
  description,
  keywords: [
    'Muhammad Maaz',
    'Software Engineer',
    'React Developer',
    'AI Automation',
    '3D Web Animation',
    'Full-Stack Developer',
    'Web Development',
    'AI Integration',
    'LLM',
    'RAG Systems',
    'Node.js',
    'Three.js',
    'Pakistan',
  ],
  authors: [{ name: 'Jyoti Sinha', url: SITE_URL }],
  creator: 'Jyoti Sinha',
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: SITE_URL,
    siteName: 'Jyoti Sinha',
    title: 'Jyoti Sinha | Control-M SME',
    description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Jyoti Sinha | Control-M SME Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jyoti Sinha | Control-M SME',
    description,
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicons/maaz-favicon.png',
      type: 'image/png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/favicons/maaz-favicon.png',
      type: 'image/png',
    },
  ],
  manifest: '/favicons/manifest.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${baloo.variable} ${dancing.variable} h-full antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jyoti Sinha',
              url: SITE_URL,
              email: 'jyotisinha0526@gmail.com',
              jobTitle: 'Control-M SME',
              sameAs: [
                'https://ctm-log-analyzer.netlify.app/',
                'https://www.linkedin.com/feed/update/urn:li:activity:7453443679396003840/',
              ],
            }),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
