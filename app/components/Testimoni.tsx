"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Star } from "lucide-react";

export default function Testimoni() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jakfan Abdur",
      role: "Hacker Sidoarjo",
      image: "/testimonial-1.jpg",
      content: "Layanan website development dari OctaCore sangat profesional. Website saya jadi lebih menarik dan penjualan meningkat 50%!",
      rating: 5,
    },
    {
      id: 2,
      name: "Lek Hin",
      role: "Dosen Teknik Nuklir",
      image: "/testimonial-2.jpg",
      content: "Tim editing video mereka luar biasa cepat dan hasilnya sangat memuaskan. Saya sangat merekomendasikan layanan ini!",
      rating: 5,
    },
    {
      id: 3,
      name: "Bulek Kantin",
      role: "Penjual gacoan",
      image: "/testimonial-3.jpg",
      content: "Service laptop mereka responsif dan profesional. Laptop saya kembali seperti baru. Terima kasih OctaCore!",
      rating: 5,
    },
    {
      id: 4,
      name: "Hildan Admin",
      role: "Cosplayer",
      image: "/testimonial-4.jpg",
      content: "Aplikasi premium yang dijual original dan tidak bajakan. 100% trusted deh",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

    return (
      <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Apa Kata Mereka
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Beberapa klien telah merasakan manfaat dan benefit dari layanan kami
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="overflow-hidden">
              <div
                className="transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 border border-blue-500/30 hover:border-blue-500/60 transition duration-300 backdrop-blur-sm">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        {/* Content */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 leading-relaxed italic">
                          "{testimonial.content}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-sm sm:text-base">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-bold text-sm sm:text-base">{testimonial.name}</p>
                            <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 sm:p-3 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/70 transition duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-500 w-8 sm:w-10"
                        : "bg-blue-500/40 hover:bg-blue-500/60"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 sm:p-3 rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30 hover:border-blue-500/70 transition duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }