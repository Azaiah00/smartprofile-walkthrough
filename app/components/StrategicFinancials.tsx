import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { ChevronDown, Info, MessageSquareQuote, Check, X } from 'lucide-react';

export const StrategicFinancials = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="bg-white border-t border-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          {/* Intro / Value Prop for the Realtor */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
             <div className="inline-block bg-luxury-black px-3 py-1 rounded-full mb-4">
                <span className="text-xs font-bold text-gold-500 uppercase tracking-wide">Included Seller Profile</span>
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
                  className="overflow-hidden bg-white text-left"
                >
                  <div className="p-8 pt-0 border-t border-gray-100">
                    <div className="pt-8 space-y-8">
                        
                        {/* Context Section */}
                        <div>
                            <h3 className="text-xl font-serif font-bold text-luxury-black mb-4">Understanding Buyer's Agent Compensation</h3>
                            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                                <p>
                                    The NAR lawsuit was filed by home sellers who claimed that the traditional practice of sellers paying both the listing agent and buyer's agent commission was anti-competitive and kept commission rates artificially high. The lawsuit alleged that the requirement to offer buyer's agent compensation (which was previously mandatory in many MLS systems) limited sellers' ability to negotiate commission structures.
                                </p>
                                <p>
                                    As part of the settlement, the NAR agreed to change its rules, making it clear that sellers are no longer required to offer compensation to buyer's agents. This gives sellers more flexibility, but it's important to understand the implications of this change.
                                </p>
                                <p className="font-bold text-luxury-black">
                                    However, offering compensation to the buyer's agent remains the industry standard and is highly recommended for several strategic reasons.
                                </p>
                                <div className="p-4 bg-gold-50 border-l-4 border-gold-500 text-gold-800 font-medium">
                                    Important: You are NOT required to compensate the buyer's agent, but doing so significantly increases your chances of selling quickly and for top dollar.
                                </div>
                            </div>
                        </div>

                        {/* Pros & Cons Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
                                <h4 className="font-bold text-green-800 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Pros of Compensating
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Maximum Exposure: More buyer agents will show your home",
                                        "Faster Sales: More showings lead to quicker offers",
                                        "Higher Sale Prices: Competition drives price up",
                                        "Industry Standard: Matches buyer expectations",
                                        "Better Qualified Buyers: Agents vet their clients",
                                        "Professional Representation: Ensures smooth transactions"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                                            <span className="font-bold mt-1">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50/50 p-6 rounded-xl border border-red-100">
                                <h4 className="font-bold text-red-800 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                                    <X className="w-4 h-4" /> Cons of Not Compensating
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        "Limited Showings: Agents may skip your home",
                                        "Longer Time on Market: Fewer offers, longer wait",
                                        "Lower Offers: Less competition reduces final price",
                                        "Buyer Pays Commission: Reduces buyer's purchasing power",
                                        "Fewer Qualified Buyers: Some can't afford agent fees",
                                        "Market Disadvantage: Competitors offer compensation"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                                            <span className="font-bold mt-1">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Recommendation */}
                        <div className="border-t border-gray-100 pt-8">
                            <h4 className="font-bold text-luxury-black mb-4 flex items-center gap-2 text-lg">
                                <Info className="w-5 h-5 text-gold-600" /> Our Recommendation
                            </h4>
                            <p className="text-gray-600 text-sm mb-4">
                                We strongly recommend offering buyer's agent compensation (typically <strong>2.5-3%</strong> of the sale price) because:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 mb-6">
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-gold-500 font-bold">•</span> It's the industry standard in the DMV market
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-gold-500 font-bold">•</span> Cost is offset by higher offers/faster sale
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-gold-500 font-bold">•</span> Maximizes exposure to qualified buyers
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600">
                                    <span className="text-gold-500 font-bold">•</span> Makes your home more competitive
                                </li>
                            </ul>
                            <p className="text-gray-500 text-sm italic border-l-2 border-gray-200 pl-4">
                                "The goal is to maximize your NET proceeds. While compensating the buyer's agent is an expense, it typically results in a higher sale price and faster sale, which benefits you overall."
                            </p>
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
