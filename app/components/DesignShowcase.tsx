import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Palette, Smartphone, Zap, Search } from 'lucide-react';

const ThemeCard = ({ name, colors, index }: { name: string, colors: string[], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, rotate: -10, y: 50 }}
    whileInView={{ opacity: 1, rotate: (index % 2 === 0 ? -2 : 2) + (index * 2), y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
    className="bg-white p-4 rounded-xl shadow-2xl hover:shadow-xl transition-all cursor-pointer group origin-bottom"
    style={{ zIndex: 4 - index }}
  >
    <div className="h-40 rounded-lg mb-4 relative overflow-hidden flex shadow-inner">
      {colors.map((color, i) => (
        <div key={i} className="h-full flex-1" style={{ backgroundColor: color }} />
      ))}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
        <span className="text-white font-bold text-sm tracking-widest uppercase">Preview</span>
      </div>
    </div>
    <h3 className="text-center font-serif font-bold text-gray-900 text-lg">{name}</h3>
  </motion.div>
);

export const DesignShowcase = () => {
  const themes = [
    { name: "Luxury Gold", colors: ["#0A0A0A", "#D4AF37", "#FFFFFF"] },
    { name: "Classic Navy", colors: ["#0F172A", "#FFFFFF", "#94A3B8"] },
    { name: "Modern Sage", colors: ["#F0FDF4", "#166534", "#14532D"] },
    { name: "Urban Charcoal", colors: ["#18181B", "#E4E4E7", "#A1A1AA"] },
  ];

  return (
    <Section className="bg-white text-luxury-black py-32 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative z-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <span className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4 block">Aesthetic Excellence</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                  Designed to Match <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Your Brand Identity</span>
                </h2>
                <p className="text-gray-600 text-xl mb-12 leading-relaxed font-light">
                  Your SmartProfile™ isn't a template—it's a tailored experience. We customize every pixel to align with your brokerage's branding, your personal style, and the luxury standard your clients expect.
                </p>
    
                <div className="space-y-8">
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Palette className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 font-serif">Premium Color Palettes</h4>
                      <p className="text-gray-600 leading-relaxed">Choose from our curated luxury themes or let us implement your specific brand colors perfectly.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Smartphone className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 font-serif">Mobile-First Architecture</h4>
                      <p className="text-gray-600 leading-relaxed">Over 70% of real estate searches happen on mobile. Your profile is engineered to perform flawlessly on any device.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 font-serif">Lightning Fast Performance</h4>
                      <p className="text-gray-600 leading-relaxed">Built with cutting-edge tech (React & TypeScript) for instant loading and buttery smooth animations.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Search className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 font-serif">Seamless IDX Integration</h4>
                      <p className="text-gray-600 leading-relaxed">Already have a BuyingBuddy subscription? We can integrate your live listings search directly into your SmartProfile for a complete website solution.</p>
                    </div>
                  </div>
                </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-tr from-gold-100/50 to-transparent rounded-full blur-3xl opacity-50" />
             <div className="relative w-full max-w-md grid grid-cols-2 gap-8 rotate-y-12">
                {themes.map((theme, idx) => (
                  <ThemeCard key={idx} {...theme} index={idx} />
                ))}
             </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
