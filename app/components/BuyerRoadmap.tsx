import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { CheckCircle2, Search, FileSignature, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: CheckCircle2,
    title: 'Get "Power-Buyer" Ready',
    description: 'Connect with trusted lenders. We explain the difference between a weak Pre-Qual and a "Cash-Like" Pre-Approval.'
  },
  {
    icon: Search,
    title: 'The "Priority Access" Hunt',
    description: 'Stop relying on delayed Zillow data. Get real-time MLS alerts and access to off-market opportunities.'
  },
  {
    icon: FileSignature,
    title: 'Craft the Winning Offer',
    description: 'We analyze comps and seller motivation to write offers that win bidding wars without overpaying.'
  },
  {
    icon: PartyPopper,
    title: 'Close & Party',
    description: 'From contract to closing in ~30 days. We manage inspections, repairs, and paperwork so you can celebrate.'
  }
];

export const BuyerRoadmap = () => {
  return (
    <Section className="bg-white py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-luxury-black mb-4">The Buyer Game Plan</h2>
          <p className="text-gray-600">From "Just Looking" to "Just Moved In"</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }} // Staggered delay
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mb-4 border-4 border-white shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <step.icon className="w-6 h-6 text-gold-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-luxury-black mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

