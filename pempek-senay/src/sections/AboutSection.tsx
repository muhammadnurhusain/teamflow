"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-muted dark:bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-2xl">
              <span className="text-9xl">👨‍🍳</span>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Award className="text-primary" size={32} />
                <div>
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm text-muted-foreground">
                    Tahun Pengalaman
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pempek Senay
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <p>
                Bermula dari dapur kecil di Palembang, Pempek Senay hadir dengan
                misi sederhana: membawa cita rasa autentik pempek Palembang ke
                lebih banyak rumah.
              </p>
              <p>
                Dengan resep turun-temurun yang dijaga ketat, kami menggunakan
                ikan tenggiri premium dan bahan-bahan berkualitas untuk
                menghasilkan pempek dengan rasa yang konsisten dan berkualitas.
              </p>
              <p>
                Setiap piece dibuat dengan cinta dan perhatian penuh terhadap
                detail. Dari dapur kami, untuk keluarga Indonesia.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Homemade dengan Cinta</h4>
                  <p className="text-sm text-muted-foreground">
                    Setiap piece dibuat manual dengan perhatian penuh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Untuk Keluarga</h4>
                  <p className="text-sm text-muted-foreground">
                    Diprioritaskan kesehatan dan kepuasan pelanggan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
