// components/Portfolio.tsx
"use client"

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'; // Import keen-slider styles

// --- 1. Data Dummy Proyek (Ditingkatkan menjadi 6) ---
interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string // path relatif mulai dengan '/'
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'None',
    description: 'None',
    tags: ['None'],
    image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
    link: '#',
  },
];

// --- 2. Komponen Kartu Proyek (ubah supaya menggunakan image dan onError aman) ---
const ProjectCard: React.FC<Project> = ({ title, description, tags, link, image }) => {
  const fallback = '/images/placeholder.png' // pastikan file ini ada
  return (
    <div className="keen-slider__slide p-4 md:p-6 group h-full cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl h-full border border-gray-100 dark:border-gray-700">
        
        <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e: any) => {
              const img = e.currentTarget as HTMLImageElement
              // hindari loop: jika sudah fallback, jangan set lagi
              if (!img.src.endsWith('/placeholder.png')) {
                img.src = fallback
              }
            }}
          />
        </div>

        <div className="p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium bg-indigo-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
};


// --- 3. Komponen Utama Portfolio (Tidak Berubah) ---
const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  // Konfigurasi Keen Slider (perbaikan: pindahkan `spacing` ke dalam `slides`)
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
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul & Deskripsi */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Portofolio Kami
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Berbagai macam project unggulan kami tersedia disini
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {/* Memastikan keen-slider merender 6 item atau lebih */}
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
              {/* Dots akan otomatis disesuaikan dengan jumlah slide */}
              {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={`dot w-3 h-3 mx-1 rounded-full transition-all ${
                      currentSlide === idx ? 'bg-pink-600 w-6' : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --- 4. Komponen Panah Navigasi (Tidak Berubah) ---
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
      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 p-2 rounded-full bg-pink-600 text-white shadow-lg transition-colors ${
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