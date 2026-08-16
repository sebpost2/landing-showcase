import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mesa — AI mastering for independent musicians",
  description:
    "Studio-grade mastering in under a minute. Upload a track, get a master tuned like a real engineer did it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-cream font-body">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
