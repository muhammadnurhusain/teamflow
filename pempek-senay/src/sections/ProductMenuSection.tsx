"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const products = [
  {
    name: "Pempek Kapal Selam",
    description: "Pempek isi telur dengan rasa yang gurih dan lezat",
    price: "Rp 35.000",
    per: "/5 pcs",
    image: "🥚",
    popular: true,
  },
  {
    name: "Pempek Lenjer",
    description: "Pempek panjang klasik dengan tekstur kenyal sempurna",
    price: "Rp 30.000",
    per: "/10 pcs",
    image: "🐟",
    popular: false,
  },
  {
    name: "Pempek Adaan",
    description: "Pempek bulat renyah di luar, lembut di dalam",
    price: "Rp 28.000",
    per: "/10 pcs",
    image: "⚫",
    popular: false,
  },
  {
    name: "Paket Family Box",
    description: "Paket lengkap isi campuran untuk keluarga",
    price: "Rp 85.000",
    per: "/paket",
    image: "📦",
    popular: true,
  },
];

export default function ProductMenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted dark:bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Menu{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Produk
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilih pempek favoritmu, semua dibuat fresh dengan bahan berkualitas
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card dark:bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Terlaris
                </div>
              )}

              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <motion.span
                  whileHover={{ scale: 1.2 }}
                  className="text-7xl"
                >
                  {product.image}
                </motion.span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {product.per}
                  </span>
                </div>
                <motion.a
                  href="https://wa.me/6282299693525"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-full font-semibold transition-colors duration-200"
                >
                  <MessageCircle size={18} />
                  Order
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
