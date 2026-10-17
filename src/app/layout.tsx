import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: "ARAMANE DEVELOPERS — Design-led homes, built with intent in Bengaluru",
  description:
    "Aramane Developers crafts low-density, design-led residences across Bengaluru's most coveted addresses.",
  keywords: [
    "Aramane Developers",
    "Bengaluru Real Estate",
    "Luxury Apartments Bengaluru",
    "Sadashivanagar Apartments",
    "Whitefield Villas",
    "Devanahalli Plots",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero-sunny-highrise.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-sand text-ink font-sans antialiased overflow-x-hidden selection:bg-gold selection:text-ink">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
