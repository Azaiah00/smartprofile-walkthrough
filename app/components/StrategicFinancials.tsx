import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { ChevronDown, Info, MessageSquareQuote } from 'lucide-react';

export const StrategicFinancials = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="bg-white border-t border-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Intro / Value Prop for the Realtor */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
             <div className="inline-block bg-gold-50 px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-gold-600 uppercase tracking-wide">Module 2: Market Intelligence</span>
             </div>
             
             <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
             >
                <MessageSquareQuote className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="text-2xl font-serif font-bold text-luxury-black mb-3">
                    We Handle The "Tough Talk" For You
                </h3>
                <p className="text-gray-500 leading-relaxed">
                    The commission conversation is critical, but it doesn't have to be uncomfortable. This module provides a data-backed framework that naturally guides your sellers to the right decision—making you the strategic advisor, not just the salesperson.
                </p>
             </motion.div>
          </div>

          <div className="bg-luxury-beige rounded-2xl overflow-hidden border border-gold-500/20 shadow-lg">
            <div className="p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm mb-4">
                <Info className="w-4 h-4 text-gold-600" />
                <span className="text-xs font-bold text-luxury-black uppercase tracking-wide">Important Market Update</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-luxury-black mb-2">The NAR Verdict & You</h2>
              <p className="text-gray-600 mb-6">Understanding the new landscape of buyer agent compensation.</p>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center gap-2 text-gold-600 font-bold mx-auto hover:text-gold-700 transition-colors"
              >
                {isOpen ? "Close Analysis" : "Read Our Recommendation"}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="p-8 pt-0 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-8 pt-8">
                      <div>
                        <h4 className="font-bold text-luxury-black mb-2">The Context</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Sellers now have complete flexibility regarding buyer agent compensation. It is no longer a requirement to list on MLS, but it remains a powerful strategic tool.
                        </p>
                        <h4 className="font-bold text-luxury-black mb-2">Our Recommendation</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          We strongly recommend offering <strong>2.5% - 3%</strong> to buyer agents. This ensures your property remains attractive to the widest pool of qualified buyers who are represented by professionals.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-3 text-sm uppercase tracking-wide">Risks of NOT Compensating</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2 text-sm text-red-700">
                            <span className="font-bold">•</span> Limited showings from agents
                          </li>
                          <li className="flex items-start gap-2 text-sm text-red-700">
                            <span className="font-bold">•</span> Longer days on market
                          </li>
                          <li className="flex items-start gap-2 text-sm text-red-700">
                            <span className="font-bold">•</span> Lower final sales price due to reduced competition
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};
