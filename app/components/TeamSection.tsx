"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";

// --- Tipe Data ---
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

// --- Data Dummy (8 Orang) ---
const teamMembers: TeamMember[] = [
  { id: 1, name: "Zackaria Noza A", role: "Founder & CEO", image: "/team/frl.jpg" },
  { id: 2, name: "Khoirul Ikhsan R", role: "COO", image: "/team/ikhsanz.jpg" },
  { id: 3, name: "Atta Arrafi P", role: "CHRO", image: "/team/atta.png" },
  { id: 4, name: "M Sobahus Sururin", role: "CTO", image: "/team/niamz.jpg" },
  { id: 5, name: "Bayu Adi C", role: "CFO", image: "/team/bayu.png" },
  { id: 6, name: "Insan Nur R", role: "CMO", image: "/team/insan.png" },
  { id: 7, name: "Jakfan Adbar F", role: "VP Marketing", image: "/team/jakfan.png" },
  { id: 8, name: "Andhika Nuril A", role: "VP CS", image: "/team/dhika.jpg" },
];

// --- Variabel Animasi ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 bg-slate-900 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20 space-y-3 sm:space-y-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Team&nbsp;
                <span className=" bg-purple-600 bg-clip-text text-transparent">
                  Kami
                </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Project ini dibangun oleh 8 Mahasiswa Teknik Informatika UMSIDA
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 font-roboto gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16 max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <TeamMemberItem key={member.id} member={member} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// --- Komponen Item Individual ---
function TeamMemberItem({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center text-center group"
    >
    
      <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 mb-3 md:mb-6">
        
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="rounded-full object-cover shadow-sm group-hover:shadow-md transition-all duration-300"
          />
        ) : (
          // Placeholder
          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-gray-300 shadow-inner">
            <User className="w-8 h-8 md:w-16 md:h-16" /> 
          </div>
        )}

      </div>

      {/* Nama: Text lebih kecil di mobile (text-base) */}
      <h3 className="text-base md:text-xl font-bold text-purple-600 mb-1 leading-tight">
        {member.name}
      </h3>
      
      {/* Role: Text lebih kecil di mobile (text-xs) */}
      <p className="text-xs md:text-sm font-medium text-white-500 tracking-wide px-1">
        {member.role}
      </p>
    </motion.div>
  );
}