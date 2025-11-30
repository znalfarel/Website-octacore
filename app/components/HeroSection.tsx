import Image from "next/image";
import { Code, Zap, Layout, Award, PenTool, ShoppingCart } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* MAIN HERO */}
      <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center py-16 sm:py-20 md:py-12 lg:py-24 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">

              {/* Main Heading */}
              <div className="">
                <h1 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-1">
                  Jempol kecelup santen
                </h1>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg leading-relaxed">
                Buat harimu menjadi mudah dengan menggunakan layanan kami
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 md:px-8 md:py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 transform hover:scale-105">
                  Mulai Sekarang
                </button>
                <button className="w-full sm:w-auto px-6 py-2.5 sm:py-3 md:px-8 md:py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition duration-300">
                  Pelajari Selengkapnya
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE / ILLUSTRATION */}
            <div className="flex justify-center items-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full">
                {/* Glowing border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

                <Image
                  src="/hero.png"
                  alt="Hero image"
                  width={500}
                  height={500}
                  className="relative drop-shadow-2xl rounded-3xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY PROFILE SECTION */}
      <section id="about" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-slate-800/50 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Tentang&nbsp;
                <span className=" bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kami
                </span>
              </h2>

              <p className="text-justify text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                Kami adalah perusahaan digital yang menghadirkan solusi lengkap untuk kebutuhan teknologi dan kreatif Anda. Mulai dari jasa pembuatan website yang responsif, layanan perbaikan laptop terpercaya, editing foto dan video berkualitas tinggi, hingga bantuan tugas Word dan Excel yang efisien. Kami juga menyediakan aplikasi premium pilihan untuk mendukung produktivitas dan gaya hidup modern. Dengan tim ahli yang berdedikasi, kami berkomitmen memberikan layanan terbaik yang cepat, aman, dan berorientasi pada hasil.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div>
                  <h4 className="font-bold text-blue-400 mb-1 sm:mb-2 text-sm sm:text-base">Inovasi</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Selalu mencari cara baru dan lebih baik
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400 mb-1 sm:mb-2 text-sm sm:text-base">Integritas</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Jujur dan transparan dalam setiap langkah
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-pink-400 mb-1 sm:mb-2 text-sm sm:text-base">Kualitas</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Standar tinggi dalam setiap jasa dan produk
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-cyan-400 mb-1 sm:mb-2 text-sm sm:text-base">Kolaborasi</h4>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Bekerja sama untuk hasil terbaik
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Stat Box 1 */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-900/30 border border-blue-500/30 text-center hover:border-blue-500/60 transition">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">
                  3+
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">Tahun Pengalaman</p>
              </div>

              {/* Stat Box 2 */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 text-center hover:border-purple-500/60 transition">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">
                  0
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">Klien Puas</p>
              </div>

              {/* Stat Box 3 */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-900/30 to-slate-900/30 border border-pink-500/30 text-center hover:border-pink-500/60 transition">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400 mb-1 sm:mb-2">
                  0
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">Proyek Sukses</p>
              </div>

              {/* Stat Box 4 */}
              <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 text-center hover:border-cyan-500/60 transition">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 mb-1 sm:mb-2">
                  8
                </p>
                <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base">Expert Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISI MISI SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-slate-800/50 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* VISI */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-500/30 hover:border-blue-500/60 transition duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center group-hover:bg-blue-500/30 transition">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Visi Kami</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Menjadi penyedia layanan digital terpercaya yang mendukung produktivitas dan kreativitas masyarakat Indonesia melalui solusi teknologi yang inovatif, efisien, dan berkelanjutan
              </p>
            </div>

            {/* MISI */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 hover:border-purple-500/60 transition duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center group-hover:bg-purple-500/30 transition">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Misi Kami</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Memberikan solusi digital terbaik dengan harga terjangkau
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Memberdayakan UMKM melalui teknologi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>
                    Memberikan layanan terbaik dengan support 24/7
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section id="services" className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Layanan Unggulan Kami
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Solusi komprehensif untuk semua kebutuhan digital Anda
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Service Card 1 */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-900/30 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Website Development
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Buat website profesional yang mengkonversi pengunjung menjadi
                pelanggan
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-900/20 to-slate-900/50 border border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-900/30 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-6 h-6 text-pink-400" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Service Laptop
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Layanan maintenance dan support teknis tersedia 24/7 untuk laptop
                Anda
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-slate-900/50 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-900/30 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <PenTool className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">
                Editing Foto dan Video
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Solusi editing visual yang responsif dan mudah digunakan, lengkap dengan filter, efek, dan alat kreatif.
              </p>
            </div>


            {/* Service Card 4 */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-slate-900/50 border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-900/30 transition duration-300 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <ShoppingCart className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2">Penjualan Aplikasi Premium</h4>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                Platform penjualan produk premium dengan tampilan elegan, fitur eksklusif, dan pengalaman belanja terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
