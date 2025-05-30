import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/utils/JsonLd";
import WebVitals from "@/components/utils/WebVitals";
import GoogleAnalytics from "@/components/utils/GoogleAnalytics";
import GoogleTagManager from "@/components/utils/GoogleTagManager";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RTN Global | Web Development & Design Agency",
    template: "%s | RTN Global"
  },
  description: "Professional web development, design, Wix development, bug fixes, performance optimization, and UI/UX design services by RTN Global",
  metadataBase: new URL('https://rtnglobal.co'),
  applicationName: 'RTN Global',
  authors: [{ name: 'Muhammad Tayyab', url: 'https://rtnglobal.co' }],
  creator: 'Muhammad Tayyab',
  publisher: 'RTN Global',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  keywords: [
    'web development',
    'web design',
    'Wix development',
    'bug fixes',
    'performance optimization',
    'UI/UX design',
    'digital agency',
    'RTN Global'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google03e42604abdd544c',
    other: {
      'msvalidate.01': '9f21e93909e646e0a2f3218d1afeb53c',
      'wot-verification': 'd225e0e4ff8e770182408ec60e8d8c24',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rtnglobal.co',
    siteName: 'RTN Global',
    title: 'RTN Global | Web Development & Design Agency',
    description: 'Professional web development, design, Wix development, bug fixes, performance optimization, and UI/UX design services',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'RTN Global - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RTN Global | Web Development & Design Agency',
    description: 'Professional web development, design, Wix development, bug fixes, performance optimization, and UI/UX design services',
    images: ['/images/twitter-card.jpg'],
    creator: '@rtnglobalofficial',
  },
  alternates: {
    canonical: 'https://rtnglobal.co',
    languages: {
      'en-US': 'https://rtnglobal.co',
    },
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msvalidate.01" content="F66AEC2AF2F1CBA957BC9D6C29772D43" />
        <meta name="theme-color" content="#8a5cf5" />
        <meta name="p:domain_verify" content="6c9e1d4660a4bad3a1f0c1774e2ba384"/>
        <meta name="ahrefs-site-verification" content="fc5564f188b5d48186cc06ead93d2a6d027520f02c48c284a5ea262445867278"/>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebVitals />
        <GoogleAnalytics />
        <GoogleTagManager />
        {/* TrustBox script */}
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        {/* End TrustBox script */}
           <Script
  src="https://analytics.ahrefs.com/analytics.js"
  data-key="FFa8Z3C/KRpbr+emCAUycA"
  strategy="afterInteractive"
/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <Breadcrumbs />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
