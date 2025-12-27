"use client"
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Icon SVG */}
        <svg 
          className="mx-auto h-24 w-24 text-slate-600 mb-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <h2 className="text-4xl font-bold text-white mb-2">Oops!</h2>
        <p className="text-xl text-slate-300 font-medium mb-4">Halaman tidak ditemukan</p>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Sepertinya Anda tersesat. Tautan yang Anda ikuti mungkin rusak atau halaman telah dihapus.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-200 transition-colors duration-200"
          >
            Beranda
          </Link>
          {/* Tombol sekunder opsional */}
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors duration-200"
          >
            Kembali Sebelumnya
          </button>
        </div>
      </div>
    </div>
  )
}