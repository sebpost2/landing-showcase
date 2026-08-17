import type { Metadata } from "next";
import { Bitter, Karla, Space_Mono } from "next/font/google";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "Sillar — Cocina arequipeña con alma",
  description:
    "Reservá tu mesa por WhatsApp en minutos. Cocina arequipeña tradicional en el Centro Histórico de Arequipa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bitter.variable} ${karla.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone text-ink font-body">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
