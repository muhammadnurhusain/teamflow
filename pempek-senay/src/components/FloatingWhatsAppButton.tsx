"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <>
      {/* Desktop Floating Button */}
      <motion.a
        href="https://wa.me/6282299693525"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl items-center gap-2"
        aria-label="Order via WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="font-semibold">Order via WhatsApp</span>
      </motion.a>

      {/* Mobile Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-card border-t border-border p-4 shadow-lg"
      >
        <a
          href="https://wa.me/6282299693525"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-full font-bold text-lg transition-colors duration-200"
        >
          <MessageCircle size={24} />
          Order Sekarang
        </a>
      </motion.div>
    </>
  );
}
