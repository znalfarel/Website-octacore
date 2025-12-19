"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Shield, Zap, ChevronRight, Info, Star } from 'lucide-react';

// --- Types & Interfaces ---

type StockStatus = 'ready' | 'low' | 'empty';

interface PricingOption {
  duration: string;
  price: string;
  bestValue?: boolean;
}

interface Category {
  id: string;
  name: string;
  subName: string;
  description: string;
  isPopular: boolean;
  status: StockStatus;
  features: string[];
  options: PricingOption[];
}

type SelectionState = Record<string, number>;

export default function NetflixPricingPage() {
  
  // --- Data ---
  const categories: Category[] = [
    {
      id: "cat_1p1u",
      name: "Personal",
      subName: "1 Profil • 1 User",
      description: "Privasi total. Profil khusus milik Anda sendiri, history aman.",
      isPopular: true,
      status: "ready", 
      features: ["4K UHD Quality", "Download Offline", "Support Semua Device", "Garansi Full Durasi"],
      options: [
        { duration: "1 Hari", price: "Rp 4.000" },
        { duration: "3 Hari", price: "Rp 7.000" },
        { duration: "7 Hari", price: "Rp 13.000" },
        { duration: "1 Bulan", price: "Rp 33.000", bestValue: true },
      ]
    },
    {
      id: "cat_1p2u",
      name: "Sharing",
      subName: "1 Profil • 2 User",
      description: "Solusi hemat budget. Satu profil digunakan bersama user lain.",
      isPopular: false,
      status: "ready", 
      features: ["HD/UHD Quality", "Stream Only", "Support HP & Laptop", "Garansi Aktif"],
      options: [
        { duration: "1 Hari", price: "Rp 3.000" },
        { duration: "3 Hari", price: "Rp 6.000" },
        { duration: "7 Hari", price: "Rp 10.000" },
        { duration: "1 Bulan", price: "Rp 20.000", bestValue: true },
      ]
    },
    {
      id: "cat_semi",
      name: "Semi Private",
      subName: "High Security",
      description: "Akun sharing proteksi lebih. Resiko screen limit sangat minim.",
      isPopular: false,
      status: "ready",
      features: ["4K UHD Quality", "Anti Screen Limit", "Login 1 Device", "Priority Support"],
      options: [
        { duration: "7 Hari", price: "Rp 20.000" },
        { duration: "1 Bulan", price: "Rp 40.000", bestValue: true },
      ]
    },
    {
      id: "cat_priv",
      name: "Private Account",
      subName: "Full Access",
      description: "Akun utuh milik Anda. Bisa buat 5 profil, atur PIN, kontrol penuh.",
      isPopular: false,
      status: "ready", 
      features: ["Email & Password Pribadi", "Bisa Ganti Password", "5 Profil (4K)", "Garansi Uang Kembali"],
      options: [
        { duration: "1 Minggu", price: "Rp 70.000" },
        { duration: "1 Bulan", price: "Rp 150.000", bestValue: true },
      ]
    }
  ];

  // --- Logic ---
  const [selections, setSelections] = useState<SelectionState>(() => {
    const defaults: SelectionState = {};
    categories.forEach(cat => {
      const defaultIndex = cat.options.findIndex(opt => opt.bestValue);
      defaults[cat.id] = defaultIndex !== -1 ? defaultIndex : 0;
    });
    return defaults;
  });

  const handleSelect = (categoryId: string, optionIndex: number) => {
    setSelections(prev => ({ ...prev, [categoryId]: optionIndex }));
  };

  const getWhatsappLink = (category: Category, selectedOptionIndex: number) => {
    const option = category.options[selectedOptionIndex];
    const phone = "6287882923273";
    const message = `Halo Admin, saya ingin order Netflix Premium.\n\n *Paket*: ${category.name} (${category.subName})\n *Durasi*: ${option.duration}\n *Harga*: ${option.price}\n\nMohon info pembayarannya. Terima kasih!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // --- Components ---
  const StockIndicator = ({ status }: { status: StockStatus }) => {
    const config = {
      ready: { color: 'bg-emerald-500', text: 'Tersedia', bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' },
      low: { color: 'bg-amber-500', text: 'Menipis', bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
      empty: { color: 'bg-red-500', text: 'Habis', bg: 'bg-red-500/10 border-red-500/20 text-red-400' },
    };
    const current = config[status];

    return (
      <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${current.bg}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${current.color} ${status === 'ready' ? 'animate-pulse' : ''}`} />
        {current.text}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-slate-200 font-sans antialiased pb-24 selection:bg-red-500/30 selection:text-red-200 relative overflow-hidden">
      
      {/* --- Ambient Background Effects (Spotlight) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 relative z-10 max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Nonton Puas, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Tanpa Batas.</span>
        </h1>
        
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Layanan premium legal bergaransi. Pilih paketmu, bayar mudah, langsung nonton dalam hitungan menit.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {categories.map((cat) => {
            const selectedIdx = selections[cat.id] ?? 0;
            const isOutOfStock = cat.status === 'empty';
            const isActiveStock = !isOutOfStock;

            return (
              <div 
                key={cat.id} 
                className={`group relative flex flex-col h-full rounded-3xl transition-all duration-300 hover:-translate-y-1
                  ${cat.isPopular 
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-red-500/40 shadow-2xl shadow-red-900/10 z-10 scale-100 lg:scale-105' 
                    : 'bg-slate-900/40 border border-white/5 hover:bg-slate-900/60 hover:border-white/10 backdrop-blur-sm'
                  }
                  ${isOutOfStock ? 'opacity-50 grayscale' : ''}
                `}
              >
                {/* Popular Badge */}
                {cat.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-red-600/40 tracking-wider">
                      <Star className="w-3 h-3 fill-white" />
                      TERLARIS
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  
                  {/* Header Card */}
                  <div className="flex justify-between items-start mb-4">
                     <div className={`p-2.5 rounded-xl ${cat.isPopular ? 'bg-red-500/10 text-red-500' : 'bg-white/5 text-slate-400'}`}>
                        {cat.name.includes('Sharing') ? <Zap className="w-6 h-6"/> : <Shield className="w-6 h-6"/>}
                     </div>
                     <StockIndicator status={cat.status} />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-1">{cat.name}</h3>
                    <p className={`text-sm font-medium mb-3 ${cat.isPopular ? 'text-red-400' : 'text-slate-500'}`}>
                        {cat.subName}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed min-h-[40px]">
                        {cat.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {cat.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-0.5 p-0.5 rounded-full ${cat.isPopular ? 'bg-red-500/20 text-red-500' : 'bg-slate-800 text-slate-500'}`}>
                            <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-xs text-slate-300 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-2.5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Pilih Durasi</span>
                        <div className="h-px bg-white/10 flex-1"></div>
                    </div>

                    {cat.options.map((opt, idx) => {
                      const isSelected = selectedIdx === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => isActiveStock && handleSelect(cat.id, idx)}
                          disabled={isOutOfStock}
                          className={`group/opt w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm border transition-all duration-200 relative overflow-hidden
                            ${isSelected 
                               ? (cat.isPopular 
                                    ? 'bg-red-600/10 border-red-500/50 text-white shadow-[0_0_15px_rgba(220,38,38,0.1)]' 
                                    : 'bg-white/10 border-white/30 text-white')
                               : 'bg-transparent border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/5'
                            }
                            ${isOutOfStock ? 'cursor-not-allowed' : 'cursor-pointer'}
                          `}
                        >
                          {/* Selection Indicator Dot */}
                          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full transition-all
                              ${isSelected ? (cat.isPopular ? 'bg-red-500' : 'bg-slate-200') : 'bg-transparent'}
                          `}></div>

                          <span className={`font-medium ml-2 ${isSelected ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-300'}`}>
                            {opt.duration}
                          </span>
                          
                          <div className="flex flex-col items-end">
                            {opt.bestValue && isActiveStock && (
                                <span className="text-[9px] font-bold text-green-400 mb-0.5">HEMAT</span>
                            )}
                            <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-500 group-hover/opt:text-slate-400'}`}>
                                {opt.price}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                     <Link 
                        href={isOutOfStock ? '#' : getWhatsappLink(cat, selectedIdx)}
                        target={isOutOfStock ? '_self' : '_blank'}
                        className={`block w-full ${isOutOfStock ? 'pointer-events-none' : ''}`}
                     >
                       <div className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg
                          ${isOutOfStock 
                            ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed' 
                            : 'bg-[#E50914] text-white hover:bg-[#c10811] hover:shadow-red-600/20 active:scale-[0.98]'
                          }
                        `}>
                          {isOutOfStock ? 'Stok Habis' : 'Beli Sekarang'}
                          {isActiveStock && <ChevronRight className="w-4 h-4" />}
                       </div>
                     </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Trust Indicators */}
        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
             {[
                { icon: Shield, text: "Transaksi Aman" },
                { icon: Zap, text: "Proses 5 Menit" },
                { icon: Info, text: "Garansi Penuh" }
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-default">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        <item.icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    </div>
                    <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{item.text}</span>
                </div>
             ))}
          </div>
          <p className="mt-8 text-slate-600 text-[10px]">© 2024 Netflix Premium Reseller. Not affiliated with Netflix Inc.</p>
        </div>

      </div>
    </div>
  );
}