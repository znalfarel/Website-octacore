"use client";

import React from "react";
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
  CheckCircle2 
} from "lucide-react";

// Data Layanan
const services = [
  {
    title: "SSD Upgrade",
    price: "Mulai Rp 350.000",
    desc: "Tingkatkan kecepatan boot dan loading aplikasi hingga 10x lipat.",
    icon: <HardDrive className="w-6 h-6 text-purple-500" />,
    features: ["Termasuk instalasi OS", "Backup data gratis", "Garansi 3 tahun"],
    popular: true,
  },
  {
    title: "RAM Expansion",
    price: "Mulai Rp 250.000",
    desc: "Multitasking lebih lancar tanpa lag saat membuka banyak tab.",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    features: ["DDR4 / DDR5 High Speed", "Dual Channel Config", "Lifetime Warranty"],
    popular: false,
  },
  {
    title: "Deep Cleaning",
    price: "Rp 150.000",
    desc: "Membersihkan debu mikro yang menyumbat sirkulasi udara laptop.",
    icon: <Wind className="w-6 h-6 text-purple-500" />,
    features: ["Pembersihan Kipas", "Pembersihan Motherboard", "Poles Body Luar"],
    popular: false,
  },
  {
    title: "Premium Repaste",
    price: "Rp 200.000",
    desc: "Mengganti thermal paste kering dengan thermal paste high-end.",
    icon: <Thermometer className="w-6 h-6 text-purple-500" />,
    features: ["Arctic MX-4 / Grizzly", "Turunkan suhu 10-15°C", "Cegah Overheat"],
    popular: true,
  },
  {
    title: "LCD Replacement",
    price: "Ask for Price",
    desc: "Ganti layar pecah, dead pixel, atau bergaris dengan panel original.",
    icon: <Monitor className="w-6 h-6 text-purple-500" />,
    features: ["Panel IPS / OLED", "Garansi Layar", "Pengerjaan Cepat"],
    popular: false,
  },
  {
    title: "Software & OS",
    price: "Rp 100.000",
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
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-purple-500/30">
      
      {/* Container Utama dengan Responsive Padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 text-xs md:text-sm font-medium mb-4">
              KHUSUS UMSIDA
            </span>
            
            {/* Responsive Font Size untuk Judul */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white">
              Performa Maksimal. <br className="hidden sm:block" /> Tanpa Kompromi.
            </h1>
            
            <p className="text-slate-400 max-w-xl md:max-w-2xl mx-auto text-base md:text-lg px-4">
              Layanan perbaikan dan upgrade laptop profesional dengan standar industri. 
              Transparan, cepat, dan bergaransi.
            </p>
          </motion.div>
        </div>

        {/* Pricing Grid - Responsive Columns */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
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
              
              {/* Deskripsi flexible height */}
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

              {/* Tombol akan selalu ada di bawah (mt-auto) */}
              <button className={`w-full mt-auto py-3 rounded-lg font-medium text-sm transition-all ${
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
          {/* Padding CTA Responsive */}
          <div className="relative z-10 p-8 md:p-16 lg:p-20 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Laptop Bermasalah? <br className="hidden sm:block"/> Jangan Asal Bongkar.
            </h2>
            <p className="text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-lg">
              Diskusikan keluhan laptopmu dengan teknisi ahli kami. Diagnosa awal gratis 
              dan estimasi biaya transparan sebelum pengerjaan.
            </p>
            
            {/* Tombol Stack di Mobile, Row di Tablet/Desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-colors flex justify-center items-center gap-2 group shadow-lg shadow-purple-900/20">
                <MessageCircle className="w-5 h-5" />
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-600 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors">
                Lihat Lokasi Workshop
              </button>
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