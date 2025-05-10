import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
// import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Home() {
  return (
    <div className="bg-white text-gray-800 w-full min-h-screen overflow-x-hidden">
      <motion.div {...fadeInUp}>
        <Analytics />
      </motion.div>
      <motion.div {...fadeInUp}>
        <ServicesSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <FeaturesSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <TestimonialsSection />
      </motion.div>
      <motion.div {...fadeInUp}>
        <PricingSection />
      </motion.div>{" "}
      <motion.div {...fadeInUp}>
        <Newsletter />
      </motion.div>
      <motion.div {...fadeInUp}>
        <Footer />
      </motion.div>
    </div>
  );
}
