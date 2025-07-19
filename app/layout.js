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

export const metadata = {
  title: "Game Developer Portfolio | Shaoyu Fan - Junior Unreal & SDL2 Developer",
  description: "Interactive 8-bit themed portfolio showcasing game development projects, skills in Unity & Unreal Engine, and passion for creating immersive gaming experiences. Available for junior developer positions.",
  keywords: "game developer, Unity, Unreal Engine, C++, indie games, portfolio, junior developer, game programming, 8-bit, retro games",
  authors: [{ name: "Shaoyu Fan" }],
  creator: "Shaoyu Fan",
  publisher: "Shaoyu Fan",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoursite.dev",
    title: "Game Developer Portfolio | Shaoyu Fan",
    description: "Interactive 8-bit portfolio of a passionate junior game developer specializing in Unity & Unreal Engine development.",
    siteName: "Shaoyu Fan - Game Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Game Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Developer Portfolio | Your Name",
    description: "Interactive 8-bit portfolio showcasing game development projects and skills",
    creator: "@yourtag",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00ff00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00ff00" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
