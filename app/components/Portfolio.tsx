'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'None',
      category: 'web',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
    {
      id: 2,
      title: 'None',
      category: 'editing',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
    {
      id: 3,
      title: 'None',
      category: 'design',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
    {
      id: 4,
      title: 'None',
      category: 'web',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
    {
      id: 5,
      title: 'None',
      category: 'design',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
    {
      id: 6,
      title: 'None',
      category: 'web',
      image: 'https://i.redd.it/b5epmdzoy9l81.jpg',
      description: 'None',
    },
  ];

  const categories = ['all', 'web', 'editing', 'design'];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 320;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Handle mouse down
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  // Handle mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiply by 1.5 untuk sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle touch end
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="portfolio" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-8 bg-gradient-to-b from-slate-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Koleksi project dan karya terbaik kami yang menampilkan kemampuan
            dalam berbagai industri
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 flex-wrap px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative group px-0 sm:px-2 md:px-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-10 bg-pink-500 hover:bg-pink-600 text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex gap-3 sm:gap-4 md:gap-6 overflow-x-hidden scroll-smooth pb-2 sm:pb-3 md:pb-4 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 group/card select-none"
              >
                {/* Card */}
                <div className="bg-slate-800 rounded-lg sm:rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 sm:hover:-translate-y-2 pointer-events-none">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      draggable="false"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <span className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 sm:px-3 py-0.5 sm:py-1 bg-pink-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Link Button */}
                    <button
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 pointer-events-auto"
                      onClick={() => {
                        // Button click handler
                      }}
                    >
                      Lihat Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-10 bg-pink-500 hover:bg-pink-600 text-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Item Counter */}
        <div className="text-center mt-6 sm:mt-8 text-gray-400 text-xs sm:text-sm">
          Menampilkan {filteredItems.length} dari {portfolioItems.length} project
        </div>
      </div>
    </section>
  );
};

export default Portfolio;