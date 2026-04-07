"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara penyimpanan pempek frozen?",
    answer:
      "Simpan pempek di dalam freezer dengan suhu -18°C atau lebih rendah. Pastikan pempek tertutup rapat dengan plastik atau wadah kedap udara untuk menjaga kualitas. Jangan mencairkan dan membekukan kembali pempek yang sudah dicairkan.",
  },
  {
    question: "Berapa lama pempek frozen bisa tahan?",
    answer:
      "Pempek frozen kami dapat bertahan hingga 3 bulan dalam freezer dengan suhu optimal -18°C. Namun untuk rasa terbaik, kami sarankan dikonsumsi dalam 1 bulan pertama.",
  },
  {
    question: "Bagaimana cara menggoreng pempek yang baik?",
    answer:
      "1. Jangan perlu mencairkan pempek sebelum digoreng.\n2. Panaskan minyak dengan api sedang.\n3. Goreng pempek hingga keemasan (sekitar 3-5 menit).\n4. Tiriskan dan sajikan dengan kuah cuko.",
  },
  {
    question: "Apakah pengiriman aman untuk pempek frozen?",
    answer:
      "Ya! Kami menggunakan packing khusus dengan ice gel dan styrofoam untuk menjaga suhu tetap dingin selama pengiriman. Pengiriman menggunakan same day atau next day service untuk menjamin kualitas sampai di tangan Anda.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Umum
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan umum seputar Pempek Senay
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card dark:bg-muted rounded-2xl border border-border overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 dark:hover:bg-muted/80 transition-colors duration-200"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-primary flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
