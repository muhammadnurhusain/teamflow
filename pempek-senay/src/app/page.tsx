import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import HeroSection from "@/sections/HeroSection";
import WhySection from "@/sections/WhySection";
import ProductMenuSection from "@/sections/ProductMenuSection";
import HowToOrderSection from "@/sections/HowToOrderSection";
import TestimonialSection from "@/sections/TestimonialSection";
import PromoSection from "@/sections/PromoSection";
import DeliveryAreaSection from "@/sections/DeliveryAreaSection";
import AboutSection from "@/sections/AboutSection";
import FAQSection from "@/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <WhySection />
        <ProductMenuSection />
        <HowToOrderSection />
        <TestimonialSection />
        <PromoSection />
        <DeliveryAreaSection />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
