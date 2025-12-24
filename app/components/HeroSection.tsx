"use client"

import Image from "next/image";
import { Code, Zap, PenTool, ShoppingCart, Target, Binoculars, Wrench } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react"; // Tambahkan ReactNode
import Link from "next/link";


interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, delay = 0, className = "" }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.17,0.55,0.55,1)] transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12" 
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }} 
    >
      {children}
    </div>
  );
};

// --- KOMPONEN UTAMA ---
export default function HeroSection() {
  const [stats, setStats] = useState({
    experience: 0,
    clients: 0,
    projects: 0,
    team: 0,
  });


  const statsRef = useRef<HTMLDivElement>(null); 
  const hasAnimated = useRef(false);

  const handleSmoothScroll = (sectionId: string) => { 
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const animateCounter = (target: number, duration: number = 2000) => {
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      return Math.ceil(current);
    }, stepDuration);

    return timer;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            // Animate each stat
            let expCount = 0;
            let clientCount = 0;
            let projectCount = 0;
            let teamCount = 0;

            const expInterval = setInterval(() => {
              expCount++;
              if (expCount > 3) {
                clearInterval(expInterval);
                expCount = 3;
              }
              setStats((prev) => ({ ...prev, experience: expCount }));
            }, 300);

            const clientInterval = setInterval(() => {
              clientCount++;
              if (clientCount > 5) {
                clearInterval(clientInterval);
                clientCount = 5; 
              }
              setStats((prev) => ({ ...prev, clients: clientCount }));
            }, 300);

            // Fallback value
             setTimeout(() => {
                 setStats({ experience: 3, clients: 5, projects: 5, team: 8 });
            }, 2500);

            const projectInterval = setInterval(() => {
              projectCount++;
              if (projectCount > 5) {
                clearInterval(projectInterval);
                projectCount = 5;
              }
              setStats((prev) => ({ ...prev, projects: projectCount }));
            }, 300);

            const teamInterval = setInterval(() => {
              teamCount++;
              if (teamCount > 8) {
                clearInterval(teamInterval);
                teamCount = 8;
              }
              setStats((prev) => ({ ...prev, team: teamCount }));
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* MAIN HERO */}
      <section id="home" className="w-full min-h-screen bg-slate-900 text-white flex items-center py-12 sm:py-16 md:py-20 lg:py-0 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-16 md:top-20 right-10 sm:right-16 md:right-20 w-64 sm:w-80 md:w-96 lg:w-[500px] h-64 sm:h-80 md:h-96 lg:h-[500px] bg-blue-500/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 sm:w-96 md:w-[500px] lg:w-[600px] h-72 sm:h-96 md:h-[500px] lg:h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="space-y-4 sm:space-y-6 md:space-y-7 lg:space-y-8 order-2 lg:order-1 pt-6 sm:pt-0">

              {/* Main Heading */}
              <ScrollReveal>
                <h1 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight sm:leading-snug md:leading-snug lg:leading-tight mb-2 sm:mb-3 bg-gradient-to-r from-white via-pink-100 to-purple-200 bg-clip-text text-transparent">
                  Satu Platform Berjuta Solusi
                </h1>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal delay={200}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
                    Buat harimu menjadi mudah dengan menggunakan layanan kami yang terpercaya dan inovatif
                </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
                    <Link href="/layanan">
                    <button className="w-full sm:w-auto px-6 sm:px-8 md:px-9 lg:px-10 py-2.5 sm:py-3 md:py-3 lg:py-4 rounded-lg bg-purple-600 text-white font-semibold text-sm sm:text-base md:text-base lg:text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition duration-300 transform hover:scale-105 active:scale-95 sm:active:scale-100 cursor-pointer">
                        Mulai Sekarang
                    </button>
                    </Link>
                    <button 
                    onClick={() => handleSmoothScroll('#about')}
                    className="w-full sm:w-auto px-6 sm:px-8 md:px-9 lg:px-10 py-2.5 sm:py-3 md:py-3 lg:py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base md:text-base lg:text-lg hover:bg-white/20 hover:border-white/50 transition duration-300 active:scale-95 sm:active:scale-100 cursor-pointer"
                    >
                    Pelajari Selengkapnya
                    </button>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT IMAGE  */}
            <div className="flex justify-center items-center order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
               <ScrollReveal delay={200} className="w-full flex justify-center">
                  <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
                    {/* Glowing border */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl opacity-30 sm:opacity-40 animate-pulse"></div>

                    <Image
                      src="/hero.png"
                      alt="Hero image"
                      width={600}
                      height={600}
                      className="relative drop-shadow-2xl rounded-2xl sm:rounded-3xl w-full h-auto object-cover"
                      priority
                    />
                  </div>
               </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
            <svg 
                className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[100px] md:h-[120px]" 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
            >
                <path 
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                    fill="#0f172a"
                    transform="scale(1, -1) translate(0, -120)" 
                ></path>
            </svg>
        </div>
      </section>

      {/* COMPANY PROFILE SECTION */}
      <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-900 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start lg:items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Tentang&nbsp;
                    <span className="bg-gradient-to-r bg-purple-600 bg-clip-text text-transparent">
                    Kami
                    </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-justify text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                    Kami adalah perusahaan digital yang menghadirkan solusi lengkap untuk kebutuhan teknologi dan kreatif Anda. Mulai dari jasa pembuatan website yang responsif, layanan perbaikan laptop terpercaya, editing foto dan video berkualitas tinggi, hingga bantuan tugas Word dan Excel yang efisien. Kami juga menyediakan aplikasi premium pilihan untuk mendukung produktivitas dan gaya hidup modern. Dengan tim ahli yang berdedikasi, kami berkomitmen memberikan layanan terbaik yang cepat, aman, dan berorientasi pada hasil.
                </p>
              </ScrollReveal>

              {/* Values */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-2 sm:pt-3 md:pt-4 lg:pt-4">
                <ScrollReveal delay={300}>
                  <div>
                    <h4 className="font-bold text-blue-400 mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Inovasi</h4>
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 leading-snug">
                      Selalu mencari cara baru dan lebih baik
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                    <div>
                        <h4 className="font-bold text-purple-400 mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Integritas</h4>
                        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 leading-snug">
                        Jujur dan transparan dalam setiap langkah
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                    <div>
                        <h4 className="font-bold text-pink-400 mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Kualitas</h4>
                        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 leading-snug">
                        Standar tinggi dalam setiap jasa dan produk
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                    <div>
                        <h4 className="font-bold text-cyan-400 mb-1 sm:mb-1.5 md:mb-2 text-xs sm:text-sm md:text-base lg:text-lg">Kolaborasi</h4>
                        <p className="text-xs sm:text-sm md:text-sm lg:text-base text-gray-400 leading-snug">
                        Bekerja sama untuk hasil terbaik
                        </p>
                    </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Right Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <ScrollReveal delay={200} className="h-full">
                <div className="h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-900/30 border border-blue-500/30 text-center hover:border-blue-500/60 hover:bg-blue-900/40 transition duration-300">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-1 sm:mb-2">
                    {stats.experience}+
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Tahun Pengalaman</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400} className="h-full">
                <div className="h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 text-center hover:border-purple-500/60 hover:bg-purple-900/40 transition duration-300">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-purple-400 mb-1 sm:mb-2">
                    {stats.clients}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Klien Puas</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600} className="h-full">
                <div className="h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-pink-900/30 to-slate-900/30 border border-pink-500/30 text-center hover:border-pink-500/60 hover:bg-pink-900/40 transition duration-300">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-400 mb-1 sm:mb-2">
                    {stats.projects}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Proyek Sukses</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800} className="h-full">
                <div className="h-full p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-cyan-900/30 to-slate-900/30 border border-cyan-500/30 text-center hover:border-cyan-500/60 hover:bg-cyan-900/40 transition duration-300">
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-1 sm:mb-2">
                    {stats.team}
                    </p>
                    <p className="text-gray-300 font-semibold text-xs sm:text-sm md:text-base lg:text-lg">Expert Team</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* VISI MISI SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-900 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* VISI */}
            <ScrollReveal>
                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4 p-5 sm:p-6 md:p-7 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-pink-900/30 to-pink-900/10 border border-pink-500/30 hover:border-pink-500/60 transition duration-300 group h-full">
                <div className="w-10 sm:w-12 md:w-12 lg:w-14 h-10 sm:h-12 md:h-12 lg:h-14 rounded-lg bg-pink-500/20 border border-pink-500/50 flex items-center justify-center group-hover:bg-pink-500/30 transition">
                    <Binoculars className="w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 text-pink-400" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">Visi</h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                    Menjadi penyedia layanan digital terpercaya yang mendukung produktivitas dan kreativitas masyarakat Indonesia melalui solusi teknologi yang inovatif, efisien, dan berkelanjutan
                </p>
                </div>
            </ScrollReveal>

            {/* MISI */}
            <ScrollReveal delay={200}>
                <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4 p-5 sm:p-6 md:p-7 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-500/30 hover:border-purple-500/60 transition duration-300 group h-full">
                <div className="w-10 sm:w-12 md:w-12 lg:w-14 h-10 sm:h-12 md:h-12 lg:h-14 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center group-hover:bg-purple-500/30 transition">
                    <Target className="w-5 sm:w-6 md:w-6 lg:w-7 h-5 sm:h-6 md:h-6 lg:h-7 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold">Misi</h3>
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-2.5 lg:space-y-3 text-gray-300 text-sm sm:text-base md:text-base lg:text-lg">
                    <li className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                    <span className="text-purple-400 mt-0.5 sm:mt-0.5 font-bold flex-shrink-0">•</span>
                    <span>Memberikan solusi digital terbaik dengan harga terjangkau</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                    <span className="text-purple-400 mt-0.5 sm:mt-0.5 font-bold flex-shrink-0">•</span>
                    <span>Memberdayakan UMKM melalui teknologi</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-2.5 md:gap-2.5 lg:gap-3">
                    <span className="text-purple-400 mt-0.5 sm:mt-0.5 font-bold flex-shrink-0">•</span>
                    <span>Memberikan layanan terbaik dengan support 24/7</span>
                    </li>
                </ul>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section id="services" className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24 space-y-2 sm:space-y-3 md:space-y-4">
            <ScrollReveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Layanan Unggulan&nbsp;
                    <span className="bg-gradient-to-r bg-purple-600 bg-clip-text text-transparent">
                    Kami
                    </span>
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                Solusi komprehensif untuk semua kebutuhan digital Anda
                </p>
            </ScrollReveal>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {/* Service Card 1 */}
            <ScrollReveal delay={0} className="h-full">
                <div className="group h-full p-5 sm:p-6 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-blue-900/20 to-slate-900/50 border border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-900/30 transition duration-300 cursor-pointer">
                <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center mb-4 sm:mb-5 md:mb-5 lg:mb-6 group-hover:scale-110 transition">
                    <Code className="w-5 sm:w-5.5 md:w-6 lg:w-7 h-5 sm:h-5.5 md:h-6 lg:h-7 text-blue-400" />
                </div>
                <h4 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3">
                    Website Development
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-lg leading-relaxed">
                    Buat website profesional yang mengkonversi pengunjung menjadi pelanggan
                </p>
                </div>
            </ScrollReveal>

            {/* Service Card 2 */}
            <ScrollReveal delay={200} className="h-full">
                <div className="group h-full p-5 sm:p-6 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-pink-900/20 to-slate-900/50 border border-pink-500/30 hover:border-pink-500/60 hover:bg-pink-900/30 transition duration-300 cursor-pointer">
                <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg bg-pink-500/20 border border-pink-500/50 flex items-center justify-center mb-4 sm:mb-5 md:mb-5 lg:mb-6 group-hover:scale-110 transition">
                    <Wrench className="w-5 sm:w-5.5 md:w-6 lg:w-7 h-5 sm:h-5.5 md:h-6 lg:h-7 text-pink-400" />
                </div>
                <h4 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3">
                    Service Laptop
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-lg leading-relaxed">
                    Layanan maintenance dan support teknis tersedia 24/7 untuk laptop Anda
                </p>
                </div>
            </ScrollReveal>

            {/* Service Card 3 */}
            <ScrollReveal delay={400} className="h-full">
                <div className="group h-full p-5 sm:p-6 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-linear-to-br from-purple-900/20 to-slate-900/50 border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-900/30 transition duration-300 cursor-pointer">
                <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mb-4 sm:mb-5 md:mb-5 lg:mb-6 group-hover:scale-110 transition">
                    <PenTool className="w-5 sm:w-5.5 md:w-6 lg:w-7 h-5 sm:h-5.5 md:h-6 lg:h-7 text-purple-400" />
                </div>
                <h4 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3">
                    Editing Foto dan Video
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-lg leading-relaxed">
                    Solusi editing visual yang responsif dan mudah digunakan, lengkap dengan filter, efek, dan alat kreatif.
                </p>
                </div>
            </ScrollReveal>

            {/* Service Card 4 */}
            <ScrollReveal delay={600} className="h-full">
                <div className="group h-full p-5 sm:p-6 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl bg-gradient-to-br from-cyan-900/20 to-slate-900/50 border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-900/30 transition duration-300 cursor-pointer">
                <div className="w-10 sm:w-11 md:w-12 lg:w-14 h-10 sm:h-11 md:h-12 lg:h-14 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center mb-4 sm:mb-5 md:mb-5 lg:mb-6 group-hover:scale-110 transition">
                    <ShoppingCart className="w-5 sm:w-5.5 md:w-6 lg:w-7 h-5 sm:h-5.5 md:h-6 lg:h-7 text-cyan-400" />
                </div>
                <h4 className="text-base sm:text-lg md:text-lg lg:text-xl font-bold mb-2 sm:mb-2.5 md:mb-3 lg:mb-3">Penjualan Aplikasi Premium</h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-lg leading-relaxed">
                    Platform penjualan produk premium dengan tampilan elegan, fitur eksklusif, dan pengalaman belanja terbaik.
                </p>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}