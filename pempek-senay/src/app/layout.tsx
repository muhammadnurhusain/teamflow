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
  metadataBase: new URL("https://pempeksenay.com"),
  title: "Pempek Senay — Pempek Frozen Asli Palembang | Order Online",
  description:
    "Pempek Senay menawarkan pempek frozen asli Palembang yang lezat, praktis, dan siap kirim ke rumahmu. Homemade, tanpa pengawet, fresh frozen quality. Diskon opening 20%!",
  keywords: [
    "pempek",
    "pempek palembang",
    "pempek frozen",
    "pempek online",
    "makanan beku",
    "pempek kapal selam",
    "pempek lenjer",
  ],
  authors: [{ name: "Pempek Senay" }],
  openGraph: {
    title: "Pempek Senay — Pempek Frozen Asli Palembang",
    description:
      "Lezat, Praktis, dan Siap Kirim ke Rumahmu. Diskon Opening 20%!",
    type: "website",
    locale: "id_ID",
    siteName: "Pempek Senay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pempek Senay - Pempek Frozen Asli Palembang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pempek Senay — Pempek Frozen Asli Palembang",
    description:
      "Lezat, Praktis, dan Siap Kirim ke Rumahmu. Diskon Opening 20%!",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
