"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dina Rahmawati",
    role: "Ibu Rumah Tangga",
    avatar: "👩",
    rating: 5,
    text: "Pempek Senay benar-benar enak! Anak-anak suka banget, tinggal goreng saja sudah bisa dinikmati. Packingnya juga rapi dan aman.",
  },
  {
    name: "Budi Santoso",
    role: "Karyawan Swasta",
    avatar: "👨",
    rating: 5,
    text: "Praktis banget buat saya yang sibuk kerja. Pesen via WhatsApp, barang sampai dengan cepat. Rasanya otentik Palembang!",
  },
  {
    name: "Sari Melinda",
    role: "Food Blogger",
    avatar: "👩‍🍳",
    rating: 5,
    text: "Sebagai food blogger, saya appreciate banget sama kualitas Pempek Senay. Ikan tenggirinya terasa, bumbu cuko nya juga pas!",
  },
  {
    name: "Ahmad Hidayat",
    role: "Pengusaha",
    avatar: "🧑",
    rating: 5,
    text: "Sudah langganan disini. Family Box nya selalu jadi pilihan buat acara keluarga. Semua suka, semua puas!",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 bg-muted dark:bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pelanggan
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ribuan pelanggan puas dengan kualitas Pempek Senay
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-card dark:bg-muted p-8 md:p-12 rounded-2xl shadow-lg border border-border"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: testimonials[currentIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="text-primary fill-primary"
                      />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-center mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-background rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-background rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
