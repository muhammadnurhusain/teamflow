import { MessageCircle, Camera, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted dark:bg-card border-t border-border pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Pempek Senay
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Pempek frozen asli Palembang yang lezat, praktis, dan siap kirim
              ke rumahmu. Homemade, tanpa pengawet, dengan resep turun-temurun.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/pempeksenay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-background rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Camera size={20} />
              </a>
              <a
                href="https://wa.me/6282299693525"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-background rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#cara-order"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Cara Order
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircle
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-muted-foreground">
                  Palembang, Sumatera Selatan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Senin - Sabtu: 08.00 - 17.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} Pempek Senay. All rights
            reserved. Homemade with ❤️ from Palembang.
          </p>
        </div>
      </div>
    </footer>
  );
}
