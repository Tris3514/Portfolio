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
  title: "Tris Giles - Graphic Designer & Multimedia Artist",
  description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling, branding, and digital art.",
  keywords: "portfolio,graphic designer,multimedia artist,visual design,branding,digital art,creative",
  authors: [{ name: "Tris Giles" }],
  creator: "Tris Giles",
  openGraph: {
    title: "Tris Giles - Graphic Designer & Multimedia Artist",
    description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling and digital art.",
    url: "https://trisgiles.dev/",
    siteName: "Tris Giles Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@trisgiles",
    title: "Tris Giles - Graphic Designer & Multimedia Artist",
    description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling and digital art.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
