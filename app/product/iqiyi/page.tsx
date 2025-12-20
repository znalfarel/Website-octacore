"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Shield, Play, ChevronRight, Star, MonitorPlay, Zap, Crown } from 'lucide-react';

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

export default function IQiyiPricingPage() {
  
  // --- Data (Sesuai Image iQIYI) ---
  const categories: Category[] = [
    {
      id: "cat_iqiyi_share_std",
      name: "Sharing Standard",
      subName: "VIP Standard • Hemat",
      description: "Paket paling ekonomis untuk streaming drama Asia. Akun sharing seller, max login 1 device.",
      isPopular: true, // (Harga sangat murah biasanya populer)
      status: "ready", 
      features: ["VIP Standard Content", "Max Login 1 Device", "Resolusi 1080P", "Akun dari Seller"],
      options: [
        { duration: "1 Bulan", price: "Rp 12.000" }, //
        { duration: "3 Bulan", price: "Rp 25.000" }, //
        { duration: "1 Tahun", price: "Rp 40.000", bestValue: true }, //
      ]
    },
    {
      id: "cat_iqiyi_share_prem",
      name: "Sharing Premium",
      subName: "4K & Anti-Limit",
      description: "Upgrade pengalaman nonton dengan kualitas Premium. Tersedia opsi Anti-Limit agar tidak terganggu user lain.",
      isPopular: false,
      status: "ready", 
      features: ["VIP Premium (4K/Dolby)", "Max Login 1 Device", "Akun dari Seller", "Opsi Anti-Limit Tersedia"],
      options: [
        { duration: "1 Bulan (Premium)", price: "Rp 20.000", bestValue: true }, //
        { duration: "1 Bulan (Anti-Limit)", price: "Rp 25.000" }, //
      ]
    },
    {
      id: "cat_iqiyi_private",
      name: "Private Account",
      subName: "Full Access • Sultan",
      description: "Akun privat khusus Anda. Bebas pilih paket Standard atau Premium. Privasi total.",
      isPopular: false,
      status: "ready", 
      features: ["Private Account (No Sharing)", "Support Multi Device", "Download Offline", "Akun dari Seller"],
      options: [
        { duration: "1 Bulan (Standard)", price: "Rp 50.000" }, //
        { duration: "1 Bulan (Premium)", price: "Rp 60.000", bestValue: true }, //
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
    const message = `Halo Admin, saya ingin order iQIYI VIP.\n\n *Paket*: ${category.name} (${category.subName})\n *Opsi*: ${option.duration}\n *Harga*: ${option.price}\n\nMohon info pembayarannya. Terima kasih!`;
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
    <div className="min-h-screen bg-[#0d1610] text-slate-200 font-sans antialiased pb-24 selection:bg-[#00CC33]/30 selection:text-green-200 relative overflow-hidden">
      
      {/* --- Ambient Background Effects (iQIYI Green) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00CC33]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Drama Asia Terbaik, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CC33] to-emerald-400">Hanya di iQIYI.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Nikmati ribuan konten C-Drama, K-Drama, dan Anime populer. Kualitas hingga 4K dengan Dolby Audio.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {categories.map((cat) => {
            const selectedIdx = selections[cat.id] ?? 0;
            const isOutOfStock = cat.status === 'empty';
            const isActiveStock = !isOutOfStock;

            // Icon Logic
            let Icon = Play;
            if (cat.id.includes('std')) Icon = MonitorPlay;
            if (cat.id.includes('prem')) Icon = Zap;
            if (cat.id.includes('private')) Icon = Crown;

            return (
              <div 
                key={cat.id} 
                className={`group relative flex flex-col h-full rounded-3xl transition-all duration-300 hover:-translate-y-1
                  ${cat.isPopular 
                    ? 'bg-gradient-to-b from-[#0f2e16] via-[#0f2e16] to-[#142e1b] border border-[#00CC33]/40 shadow-2xl shadow-green-900/20 z-10 scale-100 lg:scale-105' 
                    : 'bg-[#121c15]/80 border border-white/5 hover:bg-[#1a261e] hover:border-white/10 backdrop-blur-sm'
                  }
                  ${isOutOfStock ? 'opacity-50 grayscale' : ''}
                `}
              >
                {/* Popular Badge */}
                {cat.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="flex items-center gap-1 bg-[#00CC33] text-black text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-green-600/40 tracking-wider">
                      <Star className="w-3 h-3 fill-black" />
                      BEST DEAL
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  
                  {/* Header Card */}
                  <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl ${cat.isPopular ? 'bg-[#00CC33]/10 text-[#00CC33]' : 'bg-white/5 text-slate-400'}`}>
                         <Icon className="w-6 h-6"/>
                      </div>
                      <StockIndicator status={cat.status} />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                    <p className={`text-sm font-medium mb-3 ${cat.isPopular ? 'text-[#00CC33]' : 'text-slate-500'}`}>
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
                        <div className={`mt-0.5 p-0.5 rounded-full ${cat.isPopular ? 'bg-[#00CC33]/20 text-[#00CC33]' : 'bg-slate-800 text-slate-500'}`}>
                            <Check className="w-3 h-3" strokeWidth={3} />
                        </div>
                        <span className="text-xs text-slate-300 font-medium">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto space-y-3">
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
                          className={`group/opt w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm border transition-all duration-200 relative overflow-hidden
                            ${isSelected 
                               ? (cat.isPopular 
                                    ? 'bg-[#00CC33]/10 border-[#00CC33]/50 text-white shadow-[0_0_15px_rgba(0,204,51,0.1)]' 
                                    : 'bg-white/10 border-white/30 text-white')
                               : 'bg-transparent border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/5'
                            }
                            ${isOutOfStock ? 'cursor-not-allowed' : 'cursor-pointer'}
                          `}
                        >
                          {/* Selection Indicator Dot */}
                          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full transition-all
                              ${isSelected ? (cat.isPopular ? 'bg-[#00CC33]' : 'bg-slate-200') : 'bg-transparent'}
                          `}></div>

                          <div className="flex flex-col items-start ml-2">
                             <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-300'}`}>
                                {opt.duration}
                             </span>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            {opt.bestValue && isActiveStock && (
                                <span className="text-[9px] font-bold text-emerald-400 mb-0.5">BEST DEAL</span>
                            )}
                            <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-500 group-hover/opt:text-slate-400'}`}>
                                {opt.price}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>

                  {/* Note Sharing Plan */}
                  {cat.id.includes('share') && (
                    <div className="mt-4 p-2.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-400 leading-tight">
                        <strong>Perhatian:</strong> Paket sharing memiliki batas login <strong>Maksimal 1 Device</strong> saja per akun.
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
                            : 'bg-[#00CC33] text-black hover:bg-[#12e346] hover:shadow-green-600/20 active:scale-[0.98]'
                          }
                        `}>
                          {isOutOfStock ? 'Stok Habis' : 'Order via WhatsApp'}
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