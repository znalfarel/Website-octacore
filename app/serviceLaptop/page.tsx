"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  HardDrive, 
  Cpu, 
  Wind, 
  Thermometer, 
  Monitor, 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2,
  GraduationCap,
  PackagePlus,
  Sparkles
} from "lucide-react";

// --- DATA BUNDLE (PAKET HEMAT) ---
const bundles = [
  {
    title: "Refresh Maintenance",
    subtitle: "Deep Cleaning + Premium Repaste",
    price: "Rp 150.000",
    saving: "Hemat Rp 50.000",
    desc: "Solusi terbaik untuk laptop panas, berisik, dan performa menurun karena throttle.",
    features: ["Pembersihan Total Debu", "Ganti Pasta Arctic MX-4", "Cek Kesehatan Hardware"],
    highlight: true
  },
  {
    title: "Super Speed Upgrade",
    subtitle: "Upgrade SSD + Install Ulang",
    price: "Mulai Rp 550.000",
    saving: "Gratis Biaya Install",
    desc: "Paket lengkap migrasi ke SSD. Laptop langsung ngebut, data aman, siap pakai.",
    features: ["SSD Baru Garansi 1 Bulan", "Install Windows 10/11", "Free Office & Driver"],
    highlight: true
  }
];

// --- DATA LAYANAN SATUAN ---
const services = [
  {
    title: "Upgrade SSD",
    price: "Mulai Rp 400.000",
    desc: "Tingkatkan kecepatan boot dan loading aplikasi hingga 10x lipat.",
    icon: <HardDrive className="w-6 h-6 text-purple-500" />,
    features: ["Termasuk instalasi OS", "Backup data gratis", "Garansi 3 tahun"],
    popular: false,
  },
  {
    title: "Upgrade RAM",
    price: "Mulai Rp 350.000",
    desc: "Multitasking lebih lancar tanpa lag saat membuka banyak tab.",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    features: ["DDR4 / DDR5 High Speed", "Dual Channel Config", "Lifetime Warranty"],
    popular: false,
  },
  {
    title: "Deep Cleaning",
    price: "Rp 100.000",
    desc: "Membersihkan debu mikro yang menyumbat sirkulasi udara laptop.",
    icon: <Wind className="w-6 h-6 text-purple-500" />,
    features: ["Pembersihan Kipas", "Pembersihan Motherboard", "Poles Body Luar"],
    popular: false,
  },
  {
    title: "Premium Repaste",
    price: "Rp 100.000",
    desc: "Mengganti thermal paste kering dengan thermal paste high-end.",
    icon: <Thermometer className="w-6 h-6 text-purple-500" />,
    features: ["Arctic MX-4 / Grizzly", "Turunkan suhu 10-15°C", "Cegah Overheat"],
    popular: false,
  },
  {
    title: "Aktivasi Windows & Office",
    price: "Mulai dari Rp 25.000",
    desc: "Aktivasi Windows dan Office aman tanpa virus.",
    icon: <Monitor className="w-6 h-6 text-purple-500" />,
    features: ["Panel IPS / OLED", "Garansi Layar", "Pengerjaan Cepat"],
    popular: false,
  },
  {
    title: "Install ulang",
    price: "Rp 150.000",
    desc: "Instal ulang Windows/Linux, Office, dan software produktivitas.",
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    features: ["Windows 10/11 Pro", "Driver Lengkap", "Bebas Virus"],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ServiceLaptopPage() {

  // --- FUNGSI DIRECT WA ---
  const handleWhatsApp = (serviceName: string, price: string, isConsultation = false) => {
    const phoneNumber = "6287882923273";
    let message = "";

    if (isConsultation) {
      // Format pesan untuk konsultasi umum
      message = `Halo Admin Mincore,

Saya mengalami kendala pada laptop saya dan ingin melakukan konsultasi terlebih dahulu.

Mohon bantuannya. Terima kasih.`;
    } else {
      // Format pesan untuk order layanan spesifik
      message = `Halo Mincore,

Saya tertarik untuk melakukan pemesanan layanan berikut:

Layanan: ${serviceName}
Estimasi Harga: ${price}

Mohon konfirmasi mengenai ketersediaan slot dan jadwal pengerjaan. Terima kasih.`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-purple-500/30">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <h1 className="mt-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Rawat Laptopmu <br className="hidden sm:block" /> Tanpa Drama.
            </h1>

            {/* Alert Khusus UMSIDA */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm font-medium">
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Special Offer: Diskon Khusus Mahasiswa UMSIDA (Tunjukkan KTM)</span>
              </div>
            </div>
            
            <p className="text-slate-400 max-w-xl md:max-w-2xl mx-auto text-base md:text-lg px-4">
              Layanan perbaikan dan upgrade laptop profesional dengan standar industri. 
              Transparan, cepat, dan bergaransi.
            </p>
          </motion.div>
        </div>

        {/* --- BAGIAN BUNDLING (PAKET HEMAT) --- */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">Paket Spesial Hemat</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {bundles.map((bundle, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-purple-500 transition-colors shadow-lg shadow-purple-900/10"
              >
                {/* Badge Hemat */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  {bundle.saving}
                </div>

                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                   <div className="p-4 bg-purple-900/20 rounded-xl">
                      <PackagePlus className="w-8 h-8 text-purple-400" />
                   </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{bundle.title}</h3>
                  <p className="text-purple-400 font-medium text-sm mb-3">{bundle.subtitle}</p>
                  <p className="text-slate-400 text-sm mb-4">{bundle.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                     {bundle.features.map((feat, i) => (
                       <div key={i} className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-300">
                         <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                         <span>{feat}</span>
                       </div>
                     ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                    <div className="text-2xl font-bold text-white">{bundle.price}</div>
                    
                    {/* BUTTON ACTION PAKET */}
                    <button 
                      onClick={() => handleWhatsApp(bundle.title + " (" + bundle.subtitle + ")", bundle.price)}
                      className="w-full sm:w-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      Ambil Promo
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* --- BAGIAN LIST LAYANAN SATUAN --- */}
        <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-slate-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">Daftar Layanan Satuan</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 md:mb-32"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group flex flex-col relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                service.popular 
                  ? "bg-slate-800 border-purple-600 shadow-xl shadow-purple-900/10" 
                  : "bg-slate-800 border-slate-700 hover:border-purple-500/50"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl z-10">
                  POPULAR
                </div>
              )}
              
              <div className="mb-6 p-3 bg-slate-900 rounded-xl w-fit border border-slate-700">
                {service.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{service.title}</h3>
              
              <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{service.desc}</p>
              
              <div className="text-xl md:text-2xl font-bold text-white mb-6">
                {service.price}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-500 mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON ACTION SATUAN */}
              <button 
                onClick={() => handleWhatsApp(service.title, service.price)}
                className={`w-full mt-auto py-3 rounded-lg font-medium text-sm transition-all ${
                service.popular
                ? "bg-purple-600 hover:bg-purple-700 text-white border border-transparent"
                : "bg-transparent border border-slate-600 hover:border-purple-500 hover:text-purple-400 text-slate-300"
              }`}>
                Pilih Layanan
              </button>

            </motion.div>
          ))}
        </motion.div>

        {/* Consultation CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700"
        >
          <div className="relative z-10 p-8 md:p-16 lg:p-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Laptop Bermasalah? <br className="hidden sm:block"/> Jangan Asal Bongkar.
            </h2>
            <p className="text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-lg">
              Diskusikan keluhan laptopmu dengan teknisi ahli kami. Diagnosa awal gratis 
              dan estimasi biaya transparan sebelum pengerjaan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              {/* BUTTON ACTION KONSULTASI UMUM */}
              <button 
                onClick={() => handleWhatsApp("Konsultasi Umum", "-", true)}
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors flex justify-center items-center gap-2 group shadow-lg shadow-purple-900/20"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link href="https://maps.app.goo.gl/nqfMK3ZQ1p2yR2hE7">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors">
                  Lihat Lokasi
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <div className="text-center mt-12 md:mt-20 text-slate-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Laptop Service Center. Professional Grade Repair.
        </div>

      </div>
    </div>
  );
}