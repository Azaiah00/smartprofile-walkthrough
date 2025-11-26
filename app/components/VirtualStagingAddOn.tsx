import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Check, Zap, Home, Building2, Sparkles } from 'lucide-react';

const StagingPackage = ({
  name,
  pricePerPhoto,
  photos,
  turnaround,
  features,
  isPopular = false,
  delay = 0
}: {
  name: string;
  pricePerPhoto: string;
  photos: string;
  turnaround: string;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, type: "spring" }}
    className={`bg-white border-2 ${isPopular ? 'border-gold-500 shadow-lg' : 'border-gray-200'} rounded-2xl p-6 relative flex-1`}
  >
    {isPopular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        Most Popular
      </div>
    )}
    <div className="text-center mb-6">
      <h4 className="text-xl font-serif font-bold text-luxury-black mb-2">{name}</h4>
      <div className="flex items-baseline justify-center gap-2">
        <span className="text-3xl font-bold text-gold-600">${pricePerPhoto}</span>
        <span className="text-gray-500 text-sm">/ photo</span>
      </div>
      <p className="text-gray-600 text-sm mt-2">{photos} photos</p>
    </div>
    
    <div className="border-t border-gray-200 pt-4 mb-4">
      <div className="flex items-center justify-center gap-2 text-gold-600 mb-3">
        <Zap className="w-4 h-4" />
        <span className="text-sm font-bold">{turnaround} Turnaround</span>
      </div>
    </div>

    <ul className="space-y-2 mb-6">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
          <Check className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export const VirtualStagingAddOn = () => {
  return (
    <Section className="bg-gray-50 border-t border-gray-200 py-16">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header - Smaller and less prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
              Add-On Service
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-luxury-black mb-3">
              Virtual Staging by Our <span className="text-gold-600">Digital Interior Design Firm</span>
            </h3>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
              You send empty photos. We return magazine-quality interiors using advanced rendering technology. 
              <strong className="text-luxury-black"> Indistinguishable from reality.</strong>
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-luxury-black rounded-xl p-6 mb-8 text-white"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Zap className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gold-500 mb-1">6-12 Hours</p>
                <p className="text-xs text-gray-400">Industry standard: 24-48 hours</p>
              </div>
              <div>
                <Sparkles className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gold-500 mb-1">100% Realistic</p>
                <p className="text-xs text-gray-400">Advanced rendering technology</p>
              </div>
              <div>
                <Check className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gold-500 mb-1">Human QC</p>
                <p className="text-xs text-gray-400">Quality control & curation</p>
              </div>
            </div>
          </motion.div>

          {/* Target Audiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <Home className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Realtors</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Developers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Development Companies</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <Home className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Property Managers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
              <Home className="w-4 h-4 text-gold-500" />
              <span className="text-sm font-medium text-gray-700">Home Stagers</span>
            </div>
          </motion.div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StagingPackage
              name="Starter"
              pricePerPhoto="35"
              photos="1-5"
              turnaround="6-12 Hours"
              features={[
                "Single room staging",
                "Standard style selection",
                "Basic revisions (1 round)",
                "Email support"
              ]}
            />
            <StagingPackage
              name="Professional"
              pricePerPhoto="32"
              photos="6-15"
              turnaround="6-12 Hours"
              features={[
                "Multi-room staging",
                "Premium style selection",
                "Unlimited revisions",
                "Priority support",
                "Rush delivery available"
              ]}
              isPopular={true}
              delay={0.1}
            />
            <StagingPackage
              name="Enterprise"
              pricePerPhoto="29"
              photos="16+"
              turnaround="6-12 Hours"
              features={[
                "Unlimited rooms",
                "Custom design consultation",
                "Unlimited revisions",
                "Dedicated account manager",
                "Volume discounts",
                "White-label options"
              ]}
              delay={0.2}
            />
          </div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              <strong className="text-luxury-black">Save thousands per listing</strong> compared to physical staging. 
              Our advanced rendering accounts for lighting, shadows, and perspective—most clients cannot tell the difference. 
              <strong className="text-luxury-black"> No rush fees.</strong> Fast delivery is built into every package.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

