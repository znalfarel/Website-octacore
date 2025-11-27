import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";
import Hero from "./page";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "OctaCore",
  description: "BERHENTII JANGAN LANJUTT!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${sora.variable} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
