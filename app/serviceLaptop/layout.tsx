import type { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jasa Service Laptop Terpercaya",
  description: "Tempat service laptop terbaik untuk perawatan laptop anda. Pengerjaan cepat, transparan, dan bergaransi.",
  keywords: [
    "service laptop surabaya", 
    "service laptop sidoarjo", 
    "service laptop candi", 
    "service laptop candi murah", 
    "service laptop sidoarjo murah", 
    "service laptop sidoarjo candi", 
    "jasa install ulang", 
    "jasa install ulang murah", 
    "jasa install ulang sidoarjo", 
    "jasa install ulang candi", 
    "jasa install ulang terdekat", 
    "upgrade ssd laptop", 
    "ganti thermal paste", 
    "service laptop overheat",
    "ganti baterai laptop"
  ],
  openGraph: {
    title: "Jasa Service Laptop Terpecaya - OctaCore",
    description: "Laptop lemot atau rusak? Service di OctaCore aja. Murah dan bergaransi.",
    images: ['/octacore.svg'],
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}