"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Shield, Tv, ChevronRight, Star, Film, Users, Zap, Crown, Info } from 'lucide-react';

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

export default function HBOPricingPage() {
  
  // --- Data ---
  const categories: Category[] = [
    {
      id: "cat_hbo_std",
      name: "Sharing Standard",
      subName: "Hemat • HD Quality",
      description: "Paket ekonomis untuk streaming harian. Kualitas HD jernih, cocok untuk akses via HP/Laptop.",
      isPopular: false,
      status: "ready", 
      features: ["Kualitas HD", "1 Device Streaming", "Akun dari Seller", "Garansi Full Durasi"],
      options: [
        { duration: "1 Bulan", price: "Rp 15.000" }, //
      ]
    },
    {
      id: "cat_hbo_ulti",
      name: "Sharing Ultimate",
      subName: "4K UHD • Best Value",
      description: "Pengalaman nonton terbaik. Kualitas 4K UHD dengan Dolby Atmos. Server lebih kencang.",
      isPopular: true,
      status: "ready", 
      features: ["Kualitas 4K UHD", "Dolby Atmos Audio", "Prioritas Login", "Login TV (2 Slot)"],
      options: [
        { duration: "1 Bulan", price: "Rp 18.000", bestValue: true }, //
      ]
    },
    {
      id: "cat_hbo_priv_reg",
      name: "Private Account",
      subName: "Full Access • Private",
      description: "Akun privat standar. Bebas atur profil sendiri tanpa gangguan user lain.",
      isPopular: false,
      status: "ready", 
      features: ["Privasi Total", "Support Smart TV", "Bebas Atur Profil", "Akun dari Seller"],
      options: [
        { duration: "1 Bulan", price: "Rp 56.000" }, //
      ]
    },
    {
      id: "cat_hbo_priv_ulti",
      name: "Private Ultimate",
      subName: "Sultan • 4K HDR",
      description: "Tier tertinggi HBO Max. Akun private dengan kualitas 4K HDR Ultimate dan download terbanyak.",
      isPopular: false,
      status: "low", 
      features: ["4K UHD & Dolby Vision", "100 Downloads", "Privasi Total", "Support All Devices"],
      options: [
        { duration: "1 Bulan", price: "Rp 90.000", bestValue: true }, //
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
    const phone = "6287882923273"; // Nomor WhatsApp Anda
    const message = `Halo Admin, saya ingin order HBO GO/Max.\n\n *Paket*: ${category.name} (${category.subName})\n *Durasi*: ${option.duration}\n *Harga*: ${option.price}\n\nMohon info pembayarannya. Terima kasih!`;
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
    <div className="min-h-screen bg-[#0f0b1e] text-slate-200 font-sans antialiased pb-24 selection:bg-violet-500/30 selection:text-violet-200 relative overflow-hidden">
      
      {/* --- Ambient Background Effects --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Box Office di <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">Genggaman Anda.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Nonton ribuan film hits dan series original HBO. Pilih paket Standard hemat, Ultimate 4K, atau Private eksklusif.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {categories.map((cat) => {
            const selectedIdx = selections[cat.id] ?? 0;
            const isOutOfStock = cat.status === 'empty';
            const isActiveStock = !isOutOfStock;

            // Icon Selection
            let Icon = Film;
            if (cat.id.includes('std')) Icon = Users;
            if (cat.id.includes('ulti')) Icon = Zap;
            if (cat.id.includes('priv')) Icon = Shield;
            if (cat.id.includes('priv_ulti')) Icon = Crown;

            return (
              <div 
                key={cat.id} 
                className={`group relative flex flex-col h-full rounded-3xl transition-all duration-300 hover:-translate-y-1
                  ${cat.isPopular 
                    ? 'bg-gradient-to-b from-[#1a162e] via-[#1a162e] to-[#241e3d] border border-violet-500/40 shadow-2xl shadow-violet-900/20 z-10 scale-100 lg:scale-105' 
                    : 'bg-[#151226]/80 border border-white/5 hover:bg-[#1e1a33] hover:border-white/10 backdrop-blur-sm'
                  }
                  ${isOutOfStock ? 'opacity-50 grayscale' : ''}
                `}
              >
                {/* Popular Badge */}
                {cat.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="flex items-center gap-1 bg-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-violet-600/40 tracking-wider">
                      <Star className="w-3 h-3 fill-white" />
                      BEST SELLER
                    </span>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  
                  {/* Header Card */}
                  <div className="flex justify-between items-start mb-4">
                      <div className={`p-2.5 rounded-xl ${cat.isPopular ? 'bg-violet-500/10 text-violet-400' : 'bg-white/5 text-slate-400'}`}>
                         <Icon className="w-6 h-6"/>
                      </div>
                      <StockIndicator status={cat.status} />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${cat.isPopular ? 'text-violet-400' : 'text-slate-500'}`}>
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
                        <div className={`mt-0.5 p-0.5 rounded-full ${cat.isPopular ? 'bg-violet-500/20 text-violet-400' : 'bg-slate-800 text-slate-500'}`}>
                             {feat.includes('TV') ? <Tv className="w-3 h-3" strokeWidth={3} /> : <Check className="w-3 h-3" strokeWidth={3} />}
                        </div>
                        <span className="text-xs text-slate-300 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-2.5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-px bg-white/10 flex-1"></div>
                        <span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Pilih Paket</span>
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
                                    ? 'bg-violet-500/10 border-violet-500/50 text-white shadow-[0_0_15px_rgba(139,92,246,0.1)]' 
                                    : 'bg-white/10 border-white/30 text-white')
                               : 'bg-transparent border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/5'
                            }
                            ${isOutOfStock ? 'cursor-not-allowed' : 'cursor-pointer'}
                          `}
                        >
                          {/* Selection Indicator Dot */}
                          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full transition-all
                              ${isSelected ? (cat.isPopular ? 'bg-violet-500' : 'bg-slate-200') : 'bg-transparent'}
                          `}></div>

                          <span className={`font-medium ml-2 ${isSelected ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-300'}`}>
                            {opt.duration}
                          </span>
                          
                          <div className="flex flex-col items-end">
                            {opt.bestValue && isActiveStock && (
                                <span className="text-[9px] font-bold text-violet-400 mb-0.5">BEST DEAL</span>
                            )}
                            <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-500 group-hover/opt:text-slate-400'}`}>
                                {opt.price}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Warning Note for TV Login (Sharing Only) */}
                  {(cat.id === 'cat_hbo_std' || cat.id === 'cat_hbo_ulti') && (
                    <div className="mt-4 flex items-start gap-2 p-2.5 rounded-lg bg-blue-900/20 border border-blue-800/50 text-[10px] text-blue-200 leading-tight">
                        <Info className="w-3 h-3 mt-0.5 shrink-0" />
                        <span>
                            Login Smart TV = <strong>2 Slot Device</strong>. Harap perhatikan sisa slot.
                        </span>
                    </div>
                  )}

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
                            : 'bg-violet-600 text-white hover:bg-violet-700 hover:shadow-violet-600/20 active:scale-[0.98]'
                          }
                        `}>
                          {isOutOfStock ? 'Stok Habis' : 'Order Sekarang'}
                          {isActiveStock && <ChevronRight className="w-4 h-4" />}
                        </div>
                      </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center text-slate-600 text-xs sm:text-sm">
            <p>&copy; 2025 Octacore. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}