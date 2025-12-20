'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wrench,
  Video,
  Code,
  Edit3,
  ChevronRight,
  LucideIcon
} from 'lucide-react';

// --- TIPE DATA ---
interface ServiceItem {
  id: number;
  title: string;
  icon: LucideIcon;
  label: string;
  color: 'blue' | 'green' | 'red' | 'purple';
  href: string;
}

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
}

// Update Interface: Menambahkan slug, price opsional (tidak ditampilkan)
interface PremiumService {
  id: number;
  name: string;
  price?: string; 
  period?: string;
  icon: string;
  logo?: string;
  inStock: boolean;
  slug: string; // Properti baru untuk link
}

// --- DATA BANNER CAROUSEL ---
const BANNER_ITEMS: BannerItem[] = [
  {
    id: 1,
    title: 'Solusi Digital Terlengkap',
    subtitle: 'Apapun masalah teknologinya, Octacore punya solusinya.',
    image: '/net.png',
    buttonText: 'Mulai Sekarang',
  },
  {
    id: 2,
    title: 'Hemat Biaya Langganan',
    subtitle: 'Nikmati aplikasi premium favorit tanpa bikin dompet menjerit.',
    image: '/spo.avif',
    buttonText: 'Lihat Promo',
  },
  {
    id: 3,
    title: 'Garansi Kepuasan',
    subtitle: 'Layanan profesional dengan jaminan kualitas terbaik.',
    image: '/net.png',
    buttonText: 'Hubungi Kami',
  },
];

// --- DATA LAYANAN ---
const FEATURED_SERVICES: ServiceItem[] = [
  { id: 1, title: 'Service Laptop', icon: Wrench, label: 'BERGARANSI', color: 'blue', href: '/serviceLaptop' },
  { id: 2, title: 'Edit Video & Foto', icon: Video, label: 'UNLIMITED REVISI', color: 'green', href: '/services/editing' },
  { id: 3, title: 'Bikin Website', icon: Code, label: 'FREE HOSTING', color: 'purple', href: '/services/website' },
  { id: 4, title: 'Joki Tugas', icon: Edit3, label: 'KILAT', color: 'red', href: '/services/joki' },
];

// --- DATA PREMIUM (Updated dengan slug) ---
const PREMIUM_SERVICES: PremiumService[] = [
  { id: 1, name: 'Netflix 4K', price: 'Rp 35rb', period: '/bln', icon: '🎬', logo: '/netflix.png', inStock: true, slug: 'netflix-4k' },
  { id: 2, name: 'Spotify Ind', price: 'Rp 20rb', period: '/bln', icon: '🎵', logo: '/spotify.png', inStock: true, slug: 'spotify' },
  { id: 3, name: 'Canva Pro', price: 'Rp 15rb', period: '/bln', icon: '🎨', logo: '/canva.webp', inStock: false, slug: 'canva' },
  { id: 4, name: 'HBO Go', price: 'Rp 25rb', period: '/bln', icon: '📺', logo: '/hbo.png', inStock: true, slug: 'hbo' },
  { id: 5, name: 'Youtube Prem', price: 'Rp 10rb', period: '/bln', icon: '▶️', logo: '/yt.png', inStock: false, slug: 'youtube' },
  { id: 6, name: 'CapCut Pro', price: 'Rp 15rb', period: '/bln', icon: '✂️', logo: '/Capcut.png', inStock: true, slug: 'capcut' },
  { id: 7, name: 'Viu Private', price: 'Rp 12rb', period: '/bln', icon: '🎭', logo: '/viu.png', inStock: true, slug: 'viu' },
  { id: 8, name: 'iQIYI VIP', price: 'Rp 15rb', period: '/bln', icon: '🎞️', logo: '/iqiyi.webp', inStock: true, slug: 'iqiyi' },
];

// --- COMPONENTS ---

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-6 sm:mb-8 px-1">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
      <span className="w-1 h-6 sm:h-8 bg-purple-500 rounded-full block"></span>
      {title}
    </h2>
    <p className="text-slate-400 text-sm sm:text-base mt-2 ml-3 max-w-2xl">
      {subtitle}
    </p>
  </div>
);

const BannerCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNER_ITEMS.length);
        }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = BANNER_ITEMS[currentIndex];

  return (
    <section className="relative w-full aspect-[4/5] sm:aspect-[21/9] md:h-[450px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl mx-auto mt-4 group">
      {BANNER_ITEMS.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
            priority={index === currentIndex}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent sm:bg-gradient-to-r sm:from-slate-900 sm:via-slate-900/40" />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-12 pb-10 sm:justify-center sm:items-start sm:max-w-xl">
        <div className="animate-fade-in-up">
           <span className="inline-block px-3 py-1 mb-3 text-[10px] sm:text-xs font-bold tracking-wider text-purple-300 uppercase bg-purple-500/20 rounded-full border border-purple-500/30 backdrop-blur-md">
             Promo Spesial
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 sm:mb-4 leading-tight drop-shadow-lg">
            {currentBanner.title}
          </h1>
          <p className="text-sm sm:text-lg text-slate-200 mb-6 font-medium leading-relaxed drop-shadow-md">
            {currentBanner.subtitle}
          </p>
          <button className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 active:scale-95">
            {currentBanner.buttonText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute top-4 right-4 sm:bottom-8 sm:top-auto sm:right-8 flex gap-2 z-30">
        {BANNER_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-purple-500 w-8' : 'bg-slate-500/50 w-2'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceItem> = ({ title, icon: Icon, label, color, href }) => {
  const styles = {
    blue:   'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:border-blue-400/50',
    green:  'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 group-hover:border-emerald-400/50',
    red:    'bg-rose-500/10 text-rose-400 border-rose-500/20 group-hover:border-rose-400/50',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:border-purple-400/50',
  }[color];

  return (
    <Link href={href} className="group block h-full w-full">
      <div className={`relative h-full flex flex-row sm:flex-col items-center sm:items-start p-4 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 transition-all duration-300 active:scale-[0.98]`}>
        <div className={`p-3 rounded-xl mr-4 sm:mr-0 sm:mb-4 ${styles}`}>
          <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
             <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 uppercase tracking-wide border border-slate-700/50">
               {label}
             </span>
             <ChevronRight className="w-4 h-4 text-slate-600 sm:hidden" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-slate-500 mt-1 hidden sm:block">Klik untuk detail layanan</p>
        </div>
      </div>
    </Link>
  );
};

// --- MODIFIED PREMIUM CARD ---
// Harga dihapus, Tombol diganti Link
const PremiumCard: React.FC<PremiumService> = ({ name, logo, icon, inStock, slug }) => {
  return (
    <div className={`relative flex flex-col p-4 bg-slate-900 rounded-2xl border border-slate-800 transition-all duration-300 hover:border-slate-600 hover:shadow-xl group`}>
      
      {/* Header: Logo & Status */}
      <div className="flex justify-between items-start mb-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700 group-hover:border-purple-500/50 transition-colors">
          {logo ? (
            <div className="relative w-full h-full">
                <Image src={logo} alt={name} fill className="object-cover" />
            </div>
          ) : (
            <span className="text-xl">{icon}</span>
          )}
        </div>
        
        {/* Status Badge */}
        {inStock ? (
             <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-400">READY</span>
             </div>
        ) : (
            <div className="flex items-center gap-1 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-red-400 tracking-wider">HABIS</span>
            </div>
        )}
      </div>

      {/* Content: Nama App & Teaser */}
      <div className="flex-1 mb-4">
        <h3 className="text-sm sm:text-base font-bold text-slate-100 line-clamp-1 group-hover:text-purple-400 transition-colors">
            {name}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          Cek detail paket, varian durasi, dan promo terbaru disini.
        </p>
      </div>

      {/* Button Action: Link ke Halaman Detail */}
      <Link 
        href={`/product/${slug}`} 
        className="w-full py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95 bg-slate-800 text-slate-300 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 border border-slate-700 hover:border-purple-500"
      >
        Selengkapnya
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
      </Link>

    </div>
  );
};

// --- HALAMAN UTAMA ---
export default function HomePage() {
  const paddingTop = 'pt-[70px] sm:pt-[90px]'; 

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-200 font-sans ${paddingTop} pb-20`}>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-purple-900/10 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-pink-900/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        <BannerCarousel />

        <section className="mt-12 sm:mt-16">
            <SectionHeader 
                title="Layanan Kami" 
                subtitle="Pilih layanan profesional yang siap membantu produktivitas Anda hari ini."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {FEATURED_SERVICES.map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </section>

        <div className="my-12 sm:my-16 border-t border-slate-800/50 flex justify-center">
            <div className="bg-slate-900 px-4 py-1 -mt-3.5 rounded-full border border-slate-800 text-[10px] text-slate-500 tracking-widest uppercase">
                Octacore Store
            </div>
        </div>
        
        <section>
            <div className="flex flex-row justify-between items-end mb-6 sm:mb-8 px-1">
                 <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 flex items-center gap-2">
                        <span className="w-1 h-6 sm:h-8 bg-purple-500 rounded-full block"></span>
                        Premium Apps
                    </h2>
                    <p className="text-slate-400 text-sm mt-1 max-w-md hidden sm:block">
                        Harga pelajar, kualitas sultan. Legal dan bergaransi.
                    </p>
                 </div>
            </div>
         
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {PREMIUM_SERVICES.map((service) => (
                    <PremiumCard key={service.id} {...service} />
                ))}
            </div>
        </section>

        <div className="mt-20 text-center text-slate-600 text-xs sm:text-sm">
            <p>&copy; 2025 Octacore. All rights reserved.</p>
        </div>

      </main>
    </div>
  );
}