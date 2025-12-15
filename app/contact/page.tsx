"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { User, Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";
import axios from "axios";

// --- 1. KOMPONEN ANIMASI SCROLL (ScrollReveal) ---
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

// --- 2. KOMPONEN UTAMA (CONTACT) ---
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "", 
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post("/api/send-email", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div 
        id="contact"
        className="min-h-screen bg-slate-900 text-zinc-100 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:py-16 lg:px-8 relative overflow-hidden">
      
      {/* Header Section (Dianimasikan) */}
      <div className="text-center mb-10 lg:mb-12 relative z-10">
        <ScrollReveal>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Kontak&nbsp;
                    <span className=" bg-purple-600 bg-clip-text text-transparent">
                    Kami
                    </span>
            </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
            <p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed px-2">
            Hubungi kami untuk pertanyaan dan kerjasama.
            </p>
        </ScrollReveal>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-6xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative z-10">
        
        {/* Peta (Dianimasikan dari kiri/bawah) */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto relative bg-zinc-800 order-1 lg:order-none overflow-hidden">
           <ScrollReveal delay={200} className="w-full h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7624271635345!2d112.70816627508398!3d-7.491462492520734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e1812411a7df%3A0x6f4631d0d1213057!2sUniversitas%20Muhammadiyah%20Sidoarjo%20kampus%202!5e0!3m2!1sid!2sid!4v1765450858952!5m2!1sid!2sid" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Lokasi Kantor"
                className="w-full h-full filter invert-[100%] hue-rotate-[180deg] brightness-[95%] contrast-[90%] grayscale-[20%] hover:opacity-100 transition-opacity duration-500"
              ></iframe>
              
              {/* Map Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-slate-950/90 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 rounded-xl border border-zinc-800 flex items-center gap-3 sm:gap-4 shadow-xl">
                <div className="bg-purple-600 p-2 sm:p-3 rounded-full shadow-[0_0_15px_rgba(147,51,234,0.5)] flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs text-purple-400 font-semibold uppercase tracking-wider truncate">Lokasi Kami</p>
                  <p className="text-sm sm:text-base font-bold text-white truncate">Kampus 2 Umsida, Sidoarjo</p>
                </div>
              </div>
          </ScrollReveal>
        </div>

        {/* Kolom Kanan: Form Kontak (Dianimasikan field-nya satu per satu) */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center bg-zinc-900/80 relative order-2 lg:order-none">
          
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            
            <ScrollReveal delay={300}>
                <InputItem 
                    icon={<User size={18} />} 
                    type="text" 
                    name="name" 
                    placeholder="Nama Lengkap" 
                    value={formData.name}
                    onChange={handleChange}
                />
            </ScrollReveal>

            <ScrollReveal delay={400}>
                <InputItem 
                    icon={<Mail size={18} />} 
                    type="email" 
                    name="email" 
                    placeholder="Alamat Email" 
                    value={formData.email}
                    onChange={handleChange}
                />
            </ScrollReveal>

            <ScrollReveal delay={500}>
                <InputItem 
                    icon={<Phone size={18} />} 
                    type="tel" 
                    name="phone" 
                    placeholder="Nomor WhatsApp / HP" 
                    value={formData.phone}
                    onChange={handleChange}
                />
            </ScrollReveal>

            <ScrollReveal delay={600}>
                <div className="group relative">
                    <div className="absolute top-4 left-0 pl-4 flex pointer-events-none">
                        <div className="text-zinc-500 group-focus-within:text-purple-500 transition-colors duration-300">
                            <MessageSquare size={18} />
                        </div>
                    </div>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tulis pesan Anda di sini..."
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full pl-12 pr-4 py-4 bg-zinc-950/50 border border-zinc-700 text-zinc-200 placeholder-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all duration-300 hover:border-zinc-600 resize-none text-sm sm:text-base"
                    />
                </div>
            </ScrollReveal>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-start sm:items-center gap-2 text-green-400 text-sm bg-green-400/10 p-3 rounded-lg border border-green-400/20 animate-in fade-in slide-in-from-bottom-2">
                <CheckCircle size={16} className="mt-0.5 sm:mt-0 flex-shrink-0" />
                <span>Pesan terkirim! Terimakasih telah menghubungi kami.</span>
              </div>
            )}

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20 animate-in fade-in slide-in-from-bottom-2">
                <AlertCircle size={16} />
                <span>Gagal mengirim pesan. Coba lagi.</span>
              </div>
            )}

            <ScrollReveal delay={700}>
                <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_-5px_rgba(147,51,234,0.5)] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                {status === "loading" ? (
                    <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Mengirim...</span>
                    </>
                ) : (
                    <>
                    <span>Kirim Pesan</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
                </button>
            </ScrollReveal>
          </form>
        </div>
      </div>
    </div>
  );
}

const InputItem = ({ icon, ...props }: any) => (
  <div className="group relative">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <div className="text-zinc-500 group-focus-within:text-purple-500 transition-colors duration-300">
        {icon}
      </div>
    </div>

    <input
      {...props}
      required
      className="block w-full pl-12 pr-4 py-3 sm:py-4 bg-zinc-950/50 border border-zinc-700 text-zinc-200 placeholder-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all duration-300 hover:border-zinc-600 text-sm sm:text-base"
    />
  </div>
);