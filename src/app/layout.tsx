import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/Shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ILSians Delhi | Where Excellence Meets Legacy",
  description: "Join a distinguished community of alumni who are shaping the future. Connect, collaborate, and celebrate our shared journey of excellence.",
  keywords: ["alumni", "network", "community", "university", "graduates", "professional network"],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Link manifest and icons for PWA install */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        {/* Apple/iOS support */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ILSians Delhi" />
        <link rel="apple-touch-icon" href="/images/testImg.jpg" />
        {/* Android support */}
        <meta name="application-name" content="ILSians Delhi" />
        {/* Favicon */}
        <link rel="icon" sizes="192x192" href="/images/testImg.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
