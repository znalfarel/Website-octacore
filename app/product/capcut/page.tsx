"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Shield, Video, ChevronRight, Star, Scissors, Wand2, Zap } from 'lucide-react';

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

export default function CapCutPricingPage() {
  
  // --- Data (Sesuai Image CapCut) ---
  const categories: Category[] = [
    {
      id: "cat_capcut_share",
      name: "Sharing Plan",
      subName: "1 Device • 3 User",
      description: "Paket hemat untuk editor pemula. Akun sharing (1 akun dipakai 3 orang), dilarang ubah data.",
      isPopular: true, // (Popular karena termurah 6k)
      status: "ready", 
      features: ["Hapus Watermark", "Efek & Filter Pro", "Login 1 Device", "Garansi Aktif"],
      options: [
        { duration: "1 Bulan (3 User)", price: "Rp 15.000", bestValue: true }, //
      ]
    },
    {
      id: "cat_capcut_priv",
      name: "Private Pro",
      subName: "Full Access",
      description: "Edit video tanpa batas dengan privasi penuh. Bisa upgrade email sendiri atau akun baru dari seller.",
      isPopular: false,
      status: "ready", 
      features: ["Unlock Semua Fitur Pro", "Cloud Storage Aman", "Bebas Watermark", "Support 4K Export"],
      options: [
        { duration: "7 Hari (Private)", price: "Rp 15.000" }, //
        { duration: "1 Bulan (Email Sendiri)", price: "Rp 25.000", bestValue: true }, //
        { duration: "1 Bulan (Akun Seller)", price: "Rp 22.000" }, // "priv acc b" diasumsikan Akun Baru/Seller
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
    const message = `Halo Admin, saya ingin order CapCut Pro.\n\n *Paket*: ${category.name} (${category.subName})\n *Opsi*: ${option.duration}\n *Harga*: ${option.price}\n\nMohon info pembayarannya. Terima kasih!`;
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
    <div className="min-h-screen bg-[#000000] text-slate-200 font-sans antialiased pb-24 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-hidden">
      
      {/* --- Ambient Background Effects (CapCut Cyan/Pink) --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Header Section */}
      <header className="pt-20 pb-16 px-6 relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
          Edit Video Viral, <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">Sekelas Profesional.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Unlock CapCut Pro. Hapus watermark, akses ribuan template premium, efek, dan filter tanpa batas.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {categories.map((cat) => {
            const selectedIdx = selections[cat.id] ?? 0;
            const isOutOfStock = cat.status === 'empty';
            const isActiveStock = !isOutOfStock;

            return (
              <div 
                key={cat.id} 
                className={`group relative flex flex-col h-full rounded-3xl transition-all duration-300 hover:-translate-y-1
                  ${cat.isPopular 
                    ? 'bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#162032] border border-cyan-500/40 shadow-2xl shadow-cyan-900/20 z-10 scale-100' 
                    : 'bg-[#0a0a0a]/80 border border-white/5 hover:bg-[#121212] hover:border-white/10 backdrop-blur-sm'
                  }
                  ${isOutOfStock ? 'opacity-50 grayscale' : ''}
                `}
              >
                {/* Popular Badge */}
                {cat.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-cyan-600/40 tracking-wider">
                      <Star className="w-3 h-3 fill-white" />
                      TERLARIS
                    </span>
                  </div>
                )}

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  
                  {/* Header Card */}
                  <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl ${cat.isPopular ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/5 text-slate-400'}`}>
                         {cat.id === 'cat_capcut_share' ? <Scissors className="w-6 h-6"/> : <Wand2 className="w-6 h-6"/>}
                      </div>
                      <StockIndicator status={cat.status} />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{cat.name}</h3>
                    <p className={`text-sm font-medium mb-3 ${cat.isPopular ? 'text-cyan-400' : 'text-slate-500'}`}>
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
                        <div className={`mt-0.5 p-0.5 rounded-full ${cat.isPopular ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
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
                                    ? 'bg-cyan-500/10 border-cyan-500/50 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                                    : 'bg-white/10 border-white/30 text-white')
                               : 'bg-transparent border-white/5 text-slate-400 hover:border-white/10 hover:bg-white/5'
                            }
                            ${isOutOfStock ? 'cursor-not-allowed' : 'cursor-pointer'}
                          `}
                        >
                          {/* Selection Indicator Dot */}
                          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full transition-all
                              ${isSelected ? (cat.isPopular ? 'bg-cyan-500' : 'bg-slate-200') : 'bg-transparent'}
                          `}></div>

                          <div className="flex flex-col items-start ml-2">
                             <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-400 group-hover/opt:text-slate-300'}`}>
                                {opt.duration}
                             </span>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            {opt.bestValue && isActiveStock && (
                                <span className="text-[9px] font-bold text-cyan-400 mb-0.5">BEST VALUE</span>
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
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-cyan-600/20 active:scale-[0.98]'
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