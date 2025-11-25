import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import type { LucideIcon } from 'lucide-react';

interface CalculatorSectionProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  children: React.ReactNode; // The interactive calculator component
  isDark?: boolean; // Kept for API compatibility, but logic updated for light theme
  id?: string;
}

export const CalculatorSection = ({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  features, 
  children, 
  isDark = false,
  id
}: CalculatorSectionProps) => {
  return (
    <Section id={id} className={isDark ? "bg-luxury-beige" : "bg-luxury-cream"}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 sticky top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gold-500/10">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">{subtitle}</span>
              </div>
              
              <h2 className="text-4xl font-serif font-bold mb-6 text-luxury-black">
                {title}
              </h2>
              
              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                {description}
              </p>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interactive Demo Area */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl shadow-gold-500/5 ring-1 ring-black/5 bg-white"
            >
              <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-between">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                 </div>
                 <div className="text-xs font-medium text-gray-400 uppercase tracking-wide">Interactive Demo</div>
              </div>
              <div className="p-6 md:p-8">
                {children}
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
