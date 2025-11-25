import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Sofa, XCircle } from 'lucide-react';

export const StagingComparison = () => {
  return (
    <Section className="bg-luxury-cream">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-luxury-black mb-4">The Visual Edge</h2>
          <p className="text-gray-600">Why we include premium Virtual Staging with every listing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Traditional */}
          <div className="p-8 bg-white rounded-2xl border border-gray-200 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-gray-400" />
              <h3 className="text-xl font-bold text-gray-700">Traditional Staging</h3>
            </div>
            <ul className="space-y-4 text-gray-500">
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Cost</span>
                <span className="font-bold">$2,000 - $5,000+</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Setup Time</span>
                <span className="font-bold">3-7 Days</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Risk</span>
                <span className="font-bold">Property Damage</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Flexibility</span>
                <span className="font-bold">Single Style</span>
              </li>
            </ul>
          </div>

          {/* Virtual */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white rounded-2xl shadow-xl border-2 border-gold-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase">Included</div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gold-100 rounded-lg">
                <Sofa className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-luxury-black">SmartProfile Staging</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Cost to You</span>
                <span className="font-bold text-green-600">$0 (Included)</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Turnaround</span>
                <span className="font-bold">24 Hours</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 pb-2">
                <span>Risk</span>
                <span className="font-bold">Zero (Digital)</span>
              </li>
              <li className="flex justify-between pt-2">
                <span>Flexibility</span>
                <span className="font-bold">Unlimited Styles</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};

