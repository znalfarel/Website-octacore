import React from 'react';
import Link from 'next/link';

export default function SpotifyPricingPage() {
  // Data Paket Spotify (Silakan sesuaikan harga)
  const categories = [
    {
      name: "Fam Plan",
      description: "Via Invite Link (Email Sendiri)",
      isPopular: true, // Highlight Best Seller
      options: [
        { duration: "1 Bulan", price: "Rp 15.000" },
        { duration: "2 Bulan", price: "Rp 28.000" },
        { duration: "3 Bulan", price: "Rp 40.000" },
      ]
    },
    {
      name: "Indiv Plan",
      description: "Akun Private (Baru/Siap Pakai)",
      isPopular: false,
      options: [
        { duration: "1 Bulan", price: "Rp 30.000" },
        { duration: "3 Bulan", price: "Rp 85.000" },
        { duration: "1 Tahun", price: "Rp 300.000" },
      ]
    },
    {
      name: "Perpanjang",
      description: "Perpanjang Akun Lama (Fam Plan)",
      isPopular: false,
      options: [
        { duration: "1 Bulan", price: "Rp 18.000" },
        { duration: "3 Bulan", price: "Rp 50.000" },
      ]
    },
    {
      name: "Lifetime",
      description: "Sekali Bayar (Garansi 6 Bulan)",
      isPopular: false,
      options: [
        { duration: "Akun Baru", price: "Rp 50.000" },
        { duration: "Akun Lama", price: "Rp 60.000" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-green-500 selection:text-white pb-20">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto pt-16 pb-10 px-6 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-slate-800 rounded-full mb-6 shadow-lg border border-slate-700">
           {/* Logo Spotify SVG */}
           <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#1DB954"/>
              <path d="M16.438 15.688C16.281 15.938 15.969 16.031 15.719 15.875C13.688 14.625 11.125 14.344 8.219 15.031C7.938 15.094 7.656 14.906 7.594 14.625C7.531 14.344 7.719 14.063 8 14C11.188 13.25 14.031 13.563 16.313 14.969C16.563 15.094 16.625 15.438 16.438 15.688ZM17.656 12.656C17.438 13 17.031 13.125 16.688 12.906C14.063 11.281 10.094 10.813 6.969 11.75C6.594 11.875 6.219 11.656 6.094 11.281C5.969 10.906 6.188 10.531 6.563 10.406C10.094 9.344 14.531 9.875 17.531 11.719C17.875 11.906 17.969 12.344 17.656 12.656ZM17.781 9.625C14.156 7.469 8.938 7.281 5.938 8.188C5.469 8.344 4.969 8.063 4.813 7.594C4.656 7.125 4.938 6.625 5.406 6.469C8.906 5.406 14.656 5.625 18.813 8.094C19.25 8.344 19.375 8.906 19.125 9.313C18.875 9.75 18.25 9.875 17.781 9.625Z" fill="white"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Spotify <span className="text-green-500">Premium</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Dengarkan musik tanpa iklan. Tersedia paket Family (Invite) dan Individual dengan garansi penuh.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className={`relative bg-slate-800 rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group
                ${cat.isPopular 
                  ? 'border-green-500 shadow-2xl shadow-green-900/20 z-10' 
                  : 'border-slate-700 hover:border-green-500/50 hover:shadow-xl'
                }
              `}
            >
              {/* Badge Popular */}
              {cat.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wider">
                  TERLARIS
                </div>
              )}

              {/* Header Card */}
              <div className="text-center mb-6 border-b border-slate-700 pb-4">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{cat.name}</h3>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{cat.description}</p>
              </div>

              {/* Price List Table */}
              <div className="space-y-3 mb-8 flex-1">
                {cat.options.map((opt, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-green-500/30 transition-colors cursor-default">
                    <span className="text-sm text-slate-300 font-medium">
                      {opt.duration}
                    </span>
                    <span className="text-sm font-bold text-green-500">
                      {opt.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button Action */}
              <Link href="#" className="mt-auto">
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
                  ${cat.isPopular 
                    ? 'bg-green-500 hover:bg-green-400 text-slate-900 shadow-lg shadow-green-900/30' 
                    : 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600'
                  }
                `}>
                  Pesan Sekarang
                </button>
              </Link>

            </div>
          ))}

        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-slate-500 text-xs px-6">
        <p>Proses 1-5 Menit. Garansi Full sesuai durasi paket.</p>
      </div>

    </div>
  );
}