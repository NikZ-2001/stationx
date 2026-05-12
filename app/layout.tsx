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
  title: "StationX — Printing Service in Ambattur, Chennai",
  description: "StationX offers premium printing services in Ambattur, Chennai. Xerox, printout, photo print, color printing and sticker printing with home delivery. Serving Thirumullaivoyal, Pudur, Oragadam, Kallikuppam, Ayyapakkam, Annanur, Vaishnavi Nagar, Vijayalakshmi Puram, Ambattur OT, Cholambedu, Manikandapuram and nearby areas.",
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
    "Oragadam printing",
    "Kallikuppam printout",
    "Ayyapakkam xerox",
    "Annanur printing",
    "Vaishnavi Nagar printout",
    "Vijayalakshmi Puram xerox",
    "Ambattur OT printing",
    "Cholambedu printout",
    "Manikandapuram xerox",
    "StationX",
    "stationx chennai",
    "home delivery printing Chennai",
    "photo print delivery Chennai",
    "color printing Ambattur",
    "sticker printing Ambattur",
  ],
  authors: [{ name: "StationX", url: "https://stationx.vercel.app" }],
  creator: "StationX",
  publisher: "StationX",
  metadataBase: new URL("https://stationx.vercel.app"),
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="HdTwFivZv758U8A6OKslG5jtdre3TGg3CEAwNvdHR5o" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="StationX" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Ambattur, Chennai" />
        <meta name="geo.position" content="13.1143;80.1548" />
        <meta name="ICBM" content="13.1143, 80.1548" />
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