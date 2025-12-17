'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Import Link
import {
  Wrench,
  Video,
  Code,
  Smartphone,
  LucideIcon,
  Edit3,
} from 'lucide-react';

// --- TIPE DATA ---
interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  label: string;
  color: 'blue' | 'green' | 'red' | 'purple';
  href: string; // 2. Menambahkan properti href untuk link tujuan
}

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
}

// --- DATA BANNER CAROUSEL ---
const BANNER_ITEMS: BannerItem[] = [
  {
    id: 1,
    title: 'Octacore Siap Melayani Anda Kapanpun.',
    subtitle: 'Jempol kecelup santen, menawi luput kulo nyuwun santen',
    image: '/net.png',
    buttonText: 'Cek Layanan Lengkap',
  },
  {
    id: 2,
    title: 'Layanan Terbaik dengan Harga Terjangkau',
    subtitle: 'Dapatkan solusi teknologi terpercaya untuk kebutuhan Anda',
    image: '/spo.avif',
    buttonText: 'Lihat Penawaran',
  },
  {
    id: 3,
    title: 'Kepuasan Pelanggan Adalah Prioritas Kami',
    subtitle: 'Ribuan pengguna telah merasakan manfaatnya',
    image: '/net.png',
    buttonText: 'Hubungi Kami',
  },
];

// --- DATA LAYANAN (UPDATED) ---
// 3. Menambahkan href (ganti url sesuai route halaman Anda)
const FEATURED_SERVICES: ServiceItem[] = [
  { id: 1, title: 'Service Laptop', icon: Wrench, label: 'BERGARANSI', color: 'blue', href: '/serviceLaptop' },
  { id: 2, title: 'Editing Video & Foto', icon: Video, label: 'REVISI UNLIMITED', color: 'green', href: '/services/editing' },
  { id: 3, title: 'Pembuatan Website', icon: Code, label: 'GRATIS HOSTING', color: 'purple', href: '/services/website' },
  { id: 4, title: 'Joki Word & Excel', icon: Edit3, label: 'TERMURAH', color: 'red', href: '/services/joki' },
];

// --- DATA HARGA LAYANAN PREMIUM ---
interface PremiumService {
  id: number;
  name: string;
  price: string;
  period: string;
  icon: string;
  logo?: string;
  inStock: boolean;
}

const PREMIUM_SERVICES: PremiumService[] = [
  { id: 1, name: 'Netflix', price: 'Rp 54.000', period: '/bulan', icon: '🎬', logo: '/netflix.png', inStock: true },
  { id: 2, name: 'Spotify', price: 'Rp 54.900', period: '/bulan', icon: '🎵', logo: '/spotify.png', inStock: true },
  { id: 3, name: 'Canva Pro', price: 'Rp 119.000', period: '/bulan', icon: '🎨', logo: '/canva.webp', inStock: false },
  { id: 4, name: 'HBO Max', price: 'Rp 54.000', period: '/bulan', icon: '📺', logo: '/hbo.png', inStock: true },
  { id: 5, name: 'YouTube Premium', price: 'Rp 119.000', period: '/bulan', icon: '▶️', logo: '/yt.png', inStock: false },
  { id: 6, name: 'CapCut Pro', price: 'Rp 49.900', period: '/bulan', icon: '✂️', logo: '/Capcut.png', inStock: true },
  { id: 7, name: 'Viu Premium', price: 'Rp 49.900', period: '/bulan', icon: '🎭', logo: '/viu.png', inStock: true },
  { id: 8, name: 'iQIYI Premium', price: 'Rp 39.900', period: '/bulan', icon: '🎞️', logo: '/iqiyi.webp', inStock: true },
];

// --- KOMPONEN BANNER CAROUSEL ---
const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_ITEMS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = BANNER_ITEMS[currentIndex];

  const handleBannerClick = () => {
    console.log('Banner diklik:', currentBanner.title);
  };

  return (
    <section className="p-4 sm:p-8 pt-0">
      <div className="relative rounded-2xl shadow-2xl overflow-hidden h-64 sm:h-72 lg:h-80 cursor-pointer group">
        {BANNER_ITEMS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {BANNER_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-pink-500 w-6' : 'bg-gray-400 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

// --- KOMPONEN KARTU LAYANAN (UPDATED) ---
const ServiceCard: React.FC<ServiceItem & { isFeatured?: boolean }> = ({
  title,
  icon: Icon,
  label,
  color,
  href, // Menerima props href
  isFeatured = false,
}) => {
  // Pindahkan cursor-pointer ke Link atau biarkan di sini, 
  // tapi Link membutuhkan struktur block agar area klik luas.
  const baseClasses = 'relative rounded-xl transition duration-300 transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer h-full w-full';
  
  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', tagBg: 'bg-blue-500' },
    green: { bg: 'bg-green-50', text: 'text-green-600', tagBg: 'bg-green-500' },
    red: { bg: 'bg-red-50', text: 'text-red-600', tagBg: 'bg-red-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', tagBg: 'bg-purple-500' },
  };
  const styles = colorMap[color];

  const cardClasses = isFeatured
    ? `bg-white shadow-xl ring-1 ring-gray-100 p-4 flex flex-col items-center justify-center text-center ${baseClasses}`
    : `bg-white shadow-md p-3 flex flex-col items-center justify-center text-center ${baseClasses}`;

  return (
    // 4. Membungkus seluruh kartu dengan Link
    <Link href={href} className="block w-full h-full">
      <div className={cardClasses}>
        <div className="absolute top-0 left-0 -mt-1 -ml-1">
          <span className={`${styles.tagBg} text-white text-[10px] font-bold px-2 py-0.5 rounded-br-lg rounded-tl-xl shadow-md uppercase tracking-wider`}>
            {label}
          </span>
        </div>
        
        <div className={`${styles.bg} p-3 rounded-full mb-2`}>
          <Icon className={`h-7 w-7 ${styles.text}`} />
        </div>

        <p className={`text-sm font-semibold mt-1 text-gray-800 ${isFeatured ? 'text-base' : 'text-sm'}`}>{title}</p>
      </div>
    </Link>
  );
};

// --- KOMPONEN SEKSI LAYANAN ---
const ServiceSection: React.FC<{ title: string; subtitle: string; services: ServiceItem[]; isFeatured?: boolean }> = ({ 
    title, 
    subtitle, 
    services, 
    isFeatured = false 
}) => {
  const gridClasses = isFeatured
    ? 'grid grid-cols-2 sm:grid-cols-4 gap-4'
    : 'grid grid-cols-3 sm:grid-cols-6 gap-3';

  return (
    <section className="mt-8 px-4 sm:px-8">
      <h2 className="text-2xl font-extrabold text-pink-600">{title}</h2>
      <p className="text-sm text-gray-200 mb-4">{subtitle}</p>
      <div className={gridClasses}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isFeatured={isFeatured}
          />
        ))}
      </div>
    </section>
  );
};

// --- KOMPONEN KARTU HARGA PREMIUM ---
const PremiumCard: React.FC<PremiumService> = ({ name, price, period, icon, logo, inStock }) => {
  
  const stockText = inStock ? 'Stok Ada' : 'Stok Habis';
  const badgeBg = inStock ? 'bg-green-600' : 'bg-red-600';
  
  const buttonClass = inStock
    ? 'bg-pink-700 hover:bg-pink-800 text-white'
    : 'bg-gray-400 cursor-not-allowed text-gray-100';
  const buttonText = inStock ? 'Pesan Sekarang' : 'Stok Habis';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4 border border-gray-200 flex flex-col items-center text-center relative">
      
      <div className={`absolute top-2 right-2 flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-black shadow-sm ${badgeBg}`}>
        <span className="h-2 w-2 rounded-full animate-pulse bg-white"></span>
        <span className="text-[10px] font-bold text-white uppercase tracking-wide">
          {stockText}
        </span>
      </div>

      {logo ? (
        <div className="relative w-16 h-16 mb-3 mt-4"> 
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div className="text-4xl mb-3 mt-4">{icon}</div>
      )}
      
      <h3 className="text-gray-800 font-semibold text-sm mb-2">{name}</h3>
      <p className="text-pink-600 font-bold text-lg">{price}</p>
      <p className="text-gray-500 text-xs">{period}</p>
      <button 
        disabled={!inStock}
        className={`mt-3 w-full text-sm font-semibold py-2 rounded-lg transition ${buttonClass}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

// --- HALAMAN UTAMA (Main Export) ---
export default function HomePage() {
  
  const paddingTopClass = 'pt-[64px] sm:pt-[72px]'; 

  return (
    <div className={`min-h-screen bg-slate-800 ${paddingTopClass}`}> 

      <main className="max-w-7xl mx-auto">
        
        <BannerCarousel />

        <ServiceSection
          title="Layanan Jasa"
          subtitle="Pilihan layanan jasa unggulan kami"
          services={FEATURED_SERVICES}
          isFeatured={true}
        />

        <section className="px-4 sm:px-8 mt-8">
            <div className="border-t border-b border-gray-400 py-3 flex justify-between items-center text-white text-sm font-medium">
                <span></span>
            </div>
        </section>
        
        <section className="mt-8 px-4 sm:px-8">
          <h2 className="text-2xl font-extrabold text-purple-500">Aplikasi Premium</h2>
          <p className="text-sm text-gray-200 mb-4">Dapatkan akses premium dengan harga terjangkau</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {PREMIUM_SERVICES.map((service) => (
              <PremiumCard
                key={service.id}
                {...service}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}