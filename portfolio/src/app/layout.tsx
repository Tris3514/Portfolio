import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tris Giles - Graphic Designer & Multimedia Artist",
  description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling, branding, and digital art.",
  keywords: ["portfolio", "graphic designer", "multimedia artist", "visual design", "branding", "digital art", "creative"],
  authors: [{ name: "Tris Giles" }],
  creator: "Tris Giles",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trisgiles.dev",
    title: "Tris Giles - Graphic Designer & Multimedia Artist",
    description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling and digital art.",
    siteName: "Tris Giles Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tris Giles - Graphic Designer & Multimedia Artist",
    description: "Portfolio of Tris Giles, a creative graphic designer and multimedia artist specializing in visual storytelling and digital art.",
    creator: "@trisgiles",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
