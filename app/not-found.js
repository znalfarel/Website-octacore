import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-4">
      <div className="text-center space-y-6 max-w-lg">
        {/* Angka 404 Besar dengan Gradient */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 animate-pulse">
          404
        </h1>

        {/* Pesan Utama */}
        <h2 className="text-3xl font-bold tracking-tight">
          Halaman tidak ditemukan
        </h2>

        {/* Deskripsi Tambahan */}
        <p className="text-slate-400 text-lg">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
        </p>

        {/* Tombol Kembali */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-purple-400 rounded-full hover:bg-purple-300 transition-all duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(56,189,248,0.5)]"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}