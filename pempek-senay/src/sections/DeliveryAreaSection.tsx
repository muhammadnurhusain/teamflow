"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Truck } from "lucide-react";

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Area Jabodetabek",
    description:
      "Pengiriman mencakup seluruh wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi",
  },
  {
    icon: Package,
    title: "Frozen Packing",
    description:
      "Dikemas dengan packing frozen khusus untuk menjaga kualitas selama pengiriman",
  },
  {
    icon: Truck,
    title: "Same Day / Next Day",
    description:
      "Pilihan pengiriman cepat same day atau next day sesuai kebutuhanmu",
  },
];

export default function DeliveryAreaSection() {
  return (
    <section className="py-20 bg-white dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Area{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pengiriman
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kami melayani pengiriman ke seluruh wilayah Jabodetabek dengan
            packing frozen yang aman
          </p>
        </motion.div>

        {/* Delivery Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliveryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card dark:bg-muted p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center border border-border"
        >
          <MapPin size={64} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Jabodetabek & Sekitarnya</h3>
          <p className="text-muted-foreground">
            Jakarta • Bogor • Depok • Tangerang • Bekasi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
