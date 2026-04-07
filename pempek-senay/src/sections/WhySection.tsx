"use client";

import { motion } from "framer-motion";
import { Fish, Snowflake, Flame, Award } from "lucide-react";

const features = [
  {
    icon: Fish,
    title: "Ikan Tenggiri Premium",
    description:
      "Menggunakan ikan tenggiri pilihan berkualitas tinggi untuk rasa yang optimal",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Snowflake,
    title: "Fresh Frozen Quality",
    description:
      "Teknologi frozen modern menjaga kesegaran dan kualitas pempek",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Flame,
    title: "Praktis Tinggal Goreng",
    description:
      "Tinggal goreng dan nikmati pempek lezat tanpa ribet di rumah",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Award,
    title: "Rasa Otentik Palembang",
    description:
      "Resep turun-temurun menjaga cita rasa asli pempek Palembang",
    color: "from-primary to-secondary",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mengapa{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pempek Senay
            </span>
            ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kualitas dan kepuasan pelanggan adalah prioritasitas utama kami
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card dark:bg-muted p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
