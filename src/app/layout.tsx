import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$FONK - The Ultimate Farting Bonk Meme Coin",
  description: "FONK is the ultimate meme coin that combines the power of farting with the energy of bonking! Join the FONK community and let's make some noise in the crypto space.",
  keywords: ["FONK", "memecoin", "Solana", "cryptocurrency", "farting bonk", "meme token"],
  authors: [{ name: "FONK Team" }],
  creator: "FONK Team",
  publisher: "FONK Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "$FONK - The Ultimate Farting Bonk Meme Coin",
    description: "FONK is the ultimate meme coin that combines the power of farting with the energy of bonking!",
    url: "https://fonk.wtf",
    siteName: "$FONK",
    images: [
      {
        url: "/fonk.jpg",
        width: 1200,
        height: 630,
        alt: "FONK Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "$FONK - The Ultimate Farting Bonk Meme Coin",
    description: "FONK is the ultimate meme coin that combines the power of farting with the energy of bonking!",
    images: ["/fonk.jpg"],
    creator: "@fonktoken",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
