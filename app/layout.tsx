import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClosedOverlay from "@/components/ClosedOverlay";
import PWAPrompt from "@/components/PWAPrompt";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://stationx.vercel.app"),
  title: {
    default: "StationX — Printing Service in Ambattur, Chennai",
    template: "%s | StationX Ambattur Chennai",
  },
  description: "StationX offers premium printing services in Ambattur, Chennai. Xerox, printout, photo print, color printing and sticker printing with home delivery. Serving Thirumullaivoyal, Pudur, Kallikuppam, Annanur and nearby areas.",
  keywords: [
    "printing service Ambattur",
    "xerox Ambattur",
    "printout Ambattur",
    "photocopy Ambattur",
    "photo print Ambattur",
    "xerox delivery Chennai",
    "print delivery Ambattur",
    "printing service Chennai",
    "Thirumullaivoyal printing",
    "Pudur xerox",
    "Kallikuppam printout",
    "Annanur printing",
    "Cholambedu xerox",
    "Oragadam printing",
    "home delivery printing Chennai",
    "photo print delivery Chennai",
    "color printing Ambattur",
    "sticker printing Ambattur",
    "StationX",
    "stationx chennai",
    "stationx ambattur",
  ],
  authors: [{ name: "StationX", url: "https://stationx.vercel.app" }],
  creator: "StationX",
  publisher: "StationX",
  alternates: {
    canonical: "https://stationx.vercel.app",
  },
  openGraph: {
    title: "StationX — Printing Service in Ambattur, Chennai",
    description: "Premium xerox, printout, photo print and sticker printing with home delivery in Ambattur, Chennai. Fast, affordable and secure.",
    url: "https://stationx.vercel.app",
    siteName: "StationX",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "StationX Printing Service Ambattur Chennai",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "StationX — Printing Service in Ambattur, Chennai",
    description: "Premium xerox, printout, photo print and sticker printing with home delivery in Ambattur, Chennai.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "StationX",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="StationX" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Ambattur, Chennai" />
        <meta name="geo.position" content="13.1143;80.1548" />
        <meta name="ICBM" content="13.1143, 80.1548" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "StationX",
              "description": "Premium printing service in Ambattur, Chennai offering xerox, color printing, photo printing and sticker printing with home delivery.",
              "url": "https://stationx.vercel.app",
              "telephone": "+919150190729",
              "email": "stationx.chennai@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Thirumullaivoyal Colony",
                "addressLocality": "Ambattur",
                "addressRegion": "Chennai",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 13.1440,
                "longitude": 80.1377,
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "05:00",
                  "closes": "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "18:00",
                  "closes": "23:59",
                },
              ],
              "sameAs": [
                "https://www.instagram.com/stationx.chennai",
              ],
              "priceRange": "₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI",
              "areaServed": "Ambattur, Chennai",
              "serviceType": "Printing Service",
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
        <ClosedOverlay />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <PWAPrompt />
      </body>
    </html>
  );
}