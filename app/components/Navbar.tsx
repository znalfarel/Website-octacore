"use client"

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Portofolio", href: "#portfolio" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/octacore.svg" alt="Octacore Logo" width={34} height={34} />
            <p className="font-bold text-base md:text-lg lg:text-xl">OCTACORE</p>
          </Link>

          {/* Desktop Menu */}
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

          {/* Desktop Sign Up & Login Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Login Button */}
            <button className="hidden lg:block px-6 py-2 rounded-lg bg-transparent backdrop-blur-md  text-white font-semibold text-sm hover:bg-white/20 hover:border-white/50 transition duration-300">
              Sign In
            </button>

            {/* Desktop Sign Up */}
            <button className="hidden lg:block px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105">
              Sign Up
            </button>

            {/* Mobile Menu Toggle */}
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

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="absolute top-16 sm:top-20 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-white/10">
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

              {/* Divider */}
              <div
                className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4 transition-all duration-500"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: isOpen ? `${menuItems.length * 40}ms` : "0ms",
                }}
              ></div>

              {/* Mobile Auth Buttons */}
              <div className="space-y-3">
                <button
                  className="w-full px-4 py-3 rounded-lg bg-transparent backdrop-blur-md text-white font-semibold text-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: isOpen ? `${(menuItems.length + 1) * 40}ms` : "0ms",
                    transition: `all 300ms ease-out ${isOpen ? `${(menuItems.length + 1) * 40}ms` : "0ms"}`,
                  }}
                >
                  Sign In
                </button>
                <button
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform active:scale-95"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: isOpen ? `${(menuItems.length + 2) * 40}ms` : "0ms",
                    transition: `all 300ms ease-out ${isOpen ? `${(menuItems.length + 2) * 40}ms` : "0ms"}`,
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}