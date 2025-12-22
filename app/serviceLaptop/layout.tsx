import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Service Laptop & Upgrade SSD Terpercaya",
  description: "Tempat service laptop terbaik untuk ganti LCD, baterai, keyboard, dan install ulang. Pengerjaan cepat, transparan, dan bergaransi.",
  keywords: [
    "service laptop surabaya", 
    "jasa install ulang", 
    "upgrade ssd laptop", 
    "ganti thermal paste", 
    "service laptop overheat",
    "ganti baterai laptop"
  ],
  openGraph: {
    title: "Jasa Service Laptop & Upgrade SSD - OctaCore",
    description: "Laptop lemot atau rusak? Service di OctaCore aja. Transparan dan bergaransi.",
    images: ['/og-service.jpg'], // Pastikan gambar ini ada atau gunakan default
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}