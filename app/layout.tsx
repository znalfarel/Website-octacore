import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OctaCore",
  description: "Layanan Jasa",
  icons: "/octacore.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`bg-linear-120 from-purple-950 to-blue-800 ${sora.variable} ${montserrat.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
