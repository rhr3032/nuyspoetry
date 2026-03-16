import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_Bengali } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "react-quill-new/dist/quill.snow.css";
import "./globals.css";

const titleFont = Cormorant_Garamond({
  variable: "--font-title",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Noto_Serif_Bengali({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nuy's Poetry",
    template: "%s | Nuy's Poetry",
  },
  description: "A personal platform for publishing Bengali poems, English poems, and literary essays.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Nuy's Poetry",
    description: "Read poems and essays by Nuy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${titleFont.variable} ${bodyFont.variable} antialiased`}>
        <div className="min-h-screen bg-[linear-gradient(180deg,#fffaf0_0%,#fff8ee_40%,#fffdf8_100%)] text-stone-900">
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
