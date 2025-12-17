// components/Portfolio.tsx
"use client"

import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; // Import keen-slider styles

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

// --- 2. Data Dummy Proyek ---
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce App',
    description: 'Platform belanja online dengan fitur pembayaran lengkap.',
    tags: ['Next.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 2,
    title: 'Company Profile',
    description: 'Website profil perusahaan konstruksi modern.',
    tags: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 3,
    title: 'Sistem Absensi',
    description: 'Aplikasi manajemen kehadiran karyawan berbasis QR.',
    tags: ['Laravel', 'Vue'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 4,
    title: 'Dashboard Admin',
    description: 'Panel admin interaktif untuk monitoring data realtime.',
    tags: ['React', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 5,
    title: 'Landing Page Event',
    description: 'Halaman promosi event musik dengan animasi menarik.',
    tags: ['HTML', 'GSAP'],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 6,
    title: 'Mobile Banking UI',
    description: 'Desain antarmuka aplikasi perbankan yang user-friendly.',
    tags: ['Figma', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

// --- 3. Komponen Kartu Proyek ---
const ProjectCard: React.FC<Project> = ({ title, description, tags, link, image }) => {
  const fallback = '/images/placeholder.png' 
  return (
    <div className="keen-slider__slide p-4 md:p-6 group h-full cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full border border-gray-100 dark:border-gray-700">
        
        <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
          {/* Menggunakan <img> standar sesuai request Anda sebelumnya */}
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e: any) => {
              const img = e.currentTarget as HTMLImageElement
              if (!img.src.endsWith('/placeholder.png')) {
                img.src = fallback
              }
            }}
          />
        </div>

        <div className="p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-indigo-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
};

// --- 4. Komponen Utama Portfolio ---
const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  // Konfigurasi Keen Slider
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.5, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 2.5, spacing: 30 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3, spacing: 30 },
      },
    },
    slides: { perView: 1.2, spacing: 20 },
  });

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul & Deskripsi (Dianimasikan) */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Portofolio&nbsp;
                <span className="bg-purple-600 bg-clip-text text-transparent">
                  Kami
                </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Berbagai macam project unggulan kami tersedia disini
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel Slider (Dianimasikan Container-nya) */}
        <ScrollReveal delay={400} className="relative">
          <div ref={sliderRef} className="keen-slider">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          {/* Navigasi (Panah Kiri/Kanan) */}
          {loaded && instanceRef.current && (
            <div className="hidden lg:block">
              {/* Panah Kiri */}
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0 && !instanceRef.current.options.loop}
              />
              {/* Panah Kanan */}
              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={currentSlide === instanceRef.current.track.details.slides.length - 1 && !instanceRef.current.options.loop}
              />
            </div>
          )}
          
          {/* Dots/Indikator */}
          {loaded && instanceRef.current && (
            <div className="dots flex justify-center mt-8">
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`dot w-3 h-3 mx-1 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-purple-600 w-6' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  ></button>
                );
              })}
            </div>
          )}
        </ScrollReveal>

      </div>
    </section>
  );
};

// --- 5. Komponen Panah Navigasi ---
function Arrow(props: {
  disabled?: boolean
  left?: boolean
  onClick?: (e: any) => void
}) {
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500';

  return (
    <svg
      onClick={(e) => {
        if (props.disabled) return;
        props.onClick?.(e);
      }}
      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 p-2 rounded-full bg-purple-600 text-white shadow-lg transition-colors cursor-pointer z-10 ${
        props.left ? '-left-5' : '-right-5'
      } ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="currentColor"/>
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" fill="currentColor"/>
      )}
    </svg>
  );
}

export default Portfolio;