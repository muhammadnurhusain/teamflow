"use client";

import { motion } from "framer-motion";
import { MessageCircle, Gift } from "lucide-react";

export default function PromoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐟</div>
        <div className="absolute bottom-10 right-10 text-8xl">📦</div>
        <div className="absolute top-1/2 left-1/4 text-6xl">⭐</div>
        <div className="absolute top-1/4 right-1/3 text-6xl">🎉</div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold mb-8"
          >
            <Gift size={24} />
            Promo Spesial
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Diskon Opening 20%!
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Penawaran terbatas! Dapatkan diskon 20% untuk pesanan pertamamu.
            Jangan sampai kelewatan!
          </p>

          <motion.a
            href="https://wa.me/6282299693525"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg shadow-2xl transition-all duration-200"
          >
            <MessageCircle size={24} />
            👉 Pesan Sekarang via WhatsApp
          </motion.a>

          <p className="text-white/80 mt-6 text-sm">
            *Promo berlaku hingga akhir bulan ini
          </p>
        </motion.div>
      </div>
    </section>
  );
}
