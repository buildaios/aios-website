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
  title: "BuildAIOS — The AI-First Operating System Platform",
  description:
    "BuildAIOS is an independent open-source project building an AI-first operating system platform on Fedora Linux. Pre-Alpha. Architecture complete. Implementation in progress.",
  keywords: [
    "BuildAIOS",
    "AIOS",
    "AI operating system",
    "Fedora",
    "Linux",
    "open source",
    "AI agents",
    "MCP gateway",
    "governed agents",
    "operating system research",
  ],
  openGraph: {
    title: "BuildAIOS — The AI-First Operating System Platform",
    description:
      "An independent open-source project exploring how AI agents can become secure, governed, and recoverable parts of the operating system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#080808] text-[#fafafa] antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
