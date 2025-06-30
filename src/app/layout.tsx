import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soléane - Institut de beauté et bien-être à Paris",
  description: "Découvrez Soléane, votre institut de beauté et de bien-être à Paris. Sophro-massage, soins relaxants et rituels personnalisés pour votre détente.",
  keywords: "institut beauté, massage, sophrologie, soins relaxants, bien-être, Paris, Soléane",
  authors: [{ name: "Soléane Institut" }],
  openGraph: {
    title: "Soléane - Institut de beauté et bien-être",
    description: "Votre oasis de détente au cœur de Paris. Découvrez nos soins signature et notre approche holistique du bien-être.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
