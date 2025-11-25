import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

const steps = [
  "Strategic Consultation",
  "Property Prep & Staging",
  "Pricing Strategy",
  "The \"Coming Soon\" Launch",
  "Live on Market",
  "Offers & Negotiations",
  "Escrow & Closing"
];

export const SellerRoadmap = () => {
  return (
    <Section className="bg-luxury-cream overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <span className="text-gold-600 font-medium uppercase tracking-widest text-sm mb-2 block">Seller Journey</span>
            <h2 className="text-4xl font-serif font-bold text-luxury-black mb-6">
              7 Steps to a <br />
              <span className="text-gold-600">Sold Sign</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We don't just list homes; we launch products. Our proven 7-step system is designed to minimize stress and maximize your net proceeds.
            </p>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="space-y-4 relative">
              {/* Vertical Line */}
              <div className="absolute top-4 bottom-4 left-4 w-0.5 bg-gray-200" />

              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-gold-500 flex items-center justify-center z-10 shadow-md">
                    <span className="text-[10px] font-bold text-luxury-black">{idx + 1}</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <h4 className="font-bold text-luxury-black text-lg">{step}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

