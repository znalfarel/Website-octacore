"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll detection state
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu ketika klik diluar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close menu saat window di-resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY <= 50) {
            setVisible(true);
          } else if (currentY > lastScrollY.current) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Beranda", href: "/#home" },
    { label: "Layanan", href: "/dashboard" },
    { label: "Portofolio", href: "/#portfolio" },
    { label: "Kontak", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/10 transform transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* --- BAGIAN KIRI: LOGO --- */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/octacore.svg" alt="Octacore Logo" width={34} height={34} />
            <p className="font-bold text-base md:text-lg lg:text-xl text-white">OCTACORE</p>
          </Link>

          {/* --- BAGIAN KANAN: MENU DESKTOP & TOGGLE MOBILE --- */}
          {/* Kita bungkus dalam satu div agar mereka berkelompok di kanan */}
          <div className="flex items-center gap-8">
            
            {/* Desktop Menu (Pindah ke sini, hidden di mobile, muncul di large screen) */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle (Hanya muncul di layar kecil < lg) */}
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 text-white transition-transform duration-300" />
              )}
            </button>
            
          </div>

        </div>

        {/* Mobile Menu Wrapper */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute left-0 right-0 top-full overflow-hidden transition-all duration-500 ease-out bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl ${
            isOpen 
              ? "max-h-screen opacity-100 pointer-events-auto visible" 
              : "max-h-0 opacity-0 pointer-events-none invisible"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium transform origin-left"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateX(0)" : "translateX(-10px)",
                    transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    transition: `all 300ms ease-out ${isOpen ? `${index * 40}ms` : "0ms"}`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}