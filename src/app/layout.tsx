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
  title: "Tic-Tac-Toe Game | Professional Interactive Game",
  description: "Play an engaging tic-tac-toe game with customizable race-to-points scoring. Features professional UI, series tracking, and responsive design. Perfect for competitive gameplay.",
  keywords: ["tic-tac-toe", "game", "interactive", "web game", "strategy", "two player"],
  authors: [{ name: "Game Developer" }],
  openGraph: {
    title: "Tic-Tac-Toe Game | Professional Interactive Game",
    description: "Play an engaging tic-tac-toe game with customizable race-to-points scoring.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tic-Tac-Toe Game | Professional Interactive Game",
    description: "Play an engaging tic-tac-toe game with customizable race-to-points scoring.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
