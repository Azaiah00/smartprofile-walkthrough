import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Home, Key } from 'lucide-react';

export const DualStrategySection = () => {
  return (
    <Section className="bg-luxury-cream relative overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-600 font-medium uppercase tracking-widest text-sm"
          >
            Choose Your Path
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mt-4 mb-6"
          >
            Two Profiles. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">One Goal.</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Whether you're guiding a first-time buyer or strategizing a luxury sale, SmartProfile adapts to the mission at hand.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Buyer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 relative z-10">
              <Key className="w-8 h-8 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-luxury-black mb-2">Homebuyer Consultation</h3>
            <p className="text-gold-600 font-medium mb-4 uppercase text-sm tracking-wide">"Home Buying Made Simple"</p>
            <p className="text-gray-500 leading-relaxed">
              A guided journey from pre-approval to keys in hand. Educate buyers on the process, costs, and market reality before you even unlock a door.
            </p>
          </motion.div>

          {/* Seller Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="flex-1 bg-luxury-black rounded-3xl p-8 shadow-xl border border-gray-800 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />
            
            <div className="w-16 h-16 rounded-2xl bg-gold-500/20 flex items-center justify-center mb-6 relative z-10">
              <Home className="w-8 h-8 text-gold-500" />
            </div>
            
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Seller Consultation</h3>
            <p className="text-gold-500 font-medium mb-4 uppercase text-sm tracking-wide">"Sell With Confidence"</p>
            <p className="text-gray-400 leading-relaxed">
              A strategic roadmap to maximum ROI. Demonstrate your marketing prowess, pricing strategy, and staging value to win the listing every time.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

