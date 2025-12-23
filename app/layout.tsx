import type { Metadata, Viewport } from "next";
import { Sora, Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

// Konfigurasi Font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2e1065", 
};

// 2. Metadata SEO Lengkap
export const metadata: Metadata = {
  // GANTI URL INI dengan domain asli Anda saat deploy (misal: https://octacore.id)
  metadataBase: new URL('https://octacore.web.id'), 

  title: {
    default: "OctaCore | Jasa Service Laptop, Pembuatan Website & Video Editing",
    template: "%s | OctaCore Solutions", // Ini template otomatis untuk halaman lain
  },

  icons: "/octacore.svg",
  
  description: "Solusi digital terlengkap: Jasa service laptop, pembuatan website profesional, editing video kreatif, dan penjualan aplikasi premium terpercaya.",
  
  keywords: [
    "Service Laptop Sidoarjo", 
    "Service Laptop", 
    "Service Laptop Murah",
    "Service Laptop Candi", 
    "Service Laptop Terdekat", 
    "Service Laptop Umsida", 
    "Perbaikan Komputer",
    "Jasa Pembuatan Website Terpercaya", 
    "Jasa Pembuatan Website Murah", 
    "Jasa Pembuatan Website Sidoarjo", 
    "Jasa Pembuatan Website Termurah", 
    "Jasa Pembuatan Website Terpercaya", 
    "Web Developer Wordpress", 
    "Jasa Video Editing", 
    "Jasa Editing Video", 
    "Jasa Editing Video Termurah", 
    "Jasa Editing Video Terpercaya", 
    "Jasa Editing Video Amanah", 
    "Jual Aplikasi Premium",
    "Jual Aplikasi Premium terpercya",
    "Jual Aplikasi Premium termurah",
    "App prem",
    "App prem murah",
    "App prem terpercaya",
    "Aplikasi premium",
    "OctaCore"
  ],

  authors: [{ name: "OctaCore Team" }],

  

  // Tampilan saat link dishare di WhatsApp/Sosmed
  openGraph: {
    title: "OctaCore - Solusi Digital & IT Service",
    description: "Melayani service laptop, bikin website, edit video, dan aplikasi premium.",
    siteName: "OctaCore",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Pastikan buat gambar 1200x630px di folder public
        width: 1200,
        height: 630,
        alt: "OctaCore Services",
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Mengubah lang ke 'id' karena target pasar Indonesia
    <html lang="id">
      <head>
        <link rel="apple-touch-icon" href="/octacore.svg" />
      </head>
      {/* HAPUS <head> manual. Next.js mengurusnya otomatis via Metadata API di atas */}
      <body
        className={`bg-linear-120 from-purple-950 to-blue-800 ${sora.variable} ${roboto_slab.variable} ${montserrat.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}