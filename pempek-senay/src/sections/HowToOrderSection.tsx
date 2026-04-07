"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    step: "1",
    title: "Pilih Menu",
    description: "Pilih pempek favorit dari berbagai varian yang tersedia",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    step: "2",
    title: "Checkout Online",
    description: "Proses pembayaran mudah via WhatsApp atau transfer bank",
    color: "from-primary to-secondary",
  },
  {
    icon: Truck,
    step: "3",
    title: "Kirim ke Rumah",
    description: "Pesanan dikirim dengan packing frozen yang aman",
    color: "from-green-500 to-emerald-500",
  },
];

export default function HowToOrderSection() {
  return (
    <section id="cara-order" className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cara{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Order
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hanya 3 langkah mudah untuk menikmati pempek lezat di rumahmu
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-green-500 -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-card dark:bg-muted p-8 rounded-2xl shadow-lg border border-border relative z-10">
                  {/* Step Number */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <step.icon className="text-white" size={32} />
                  </div>

                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
