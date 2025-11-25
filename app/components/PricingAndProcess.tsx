import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Check } from 'lucide-react';

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative pl-12 pb-12 border-l border-gold-500/30 last:border-l-0 last:pb-0">
    <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-gold-500 text-gold-600 font-bold flex items-center justify-center z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
      {number}
    </div>
    <h4 className="text-xl font-bold text-luxury-black mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const PricingAndProcess = () => {
  return (
    <Section className="bg-luxury-cream border-t border-gray-100 py-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Process Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold-600 font-medium uppercase tracking-widest text-sm mb-4 block">The Roadmap</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black mb-12">
                How We Build Your <br />
                <span className="text-gold-600">Digital Legacy</span>
              </h2>
              
              <div className="mt-10">
                <Step 
                  number="01" 
                  title="Discovery & Brand Strategy" 
                  description="We start by understanding YOU. Your niche, your story, your unique value proposition. We map out how to translate your in-person charisma to digital form."
                />
                <Step 
                  number="02" 
                  title="Custom Design & Development" 
                  description="Our team builds your profile from scratch, integrating your branding, photography, and configuring the interactive calculators to your specific market."
                />
                <Step 
                  number="03" 
                  title="Launch & Training" 
                  description="We launch your SmartProfile™ and provide a dedicated walkthrough on how to use it during listing presentations and client meetings to close more deals."
                />
              </div>
            </motion.div>
          </div>

          {/* Pricing Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-luxury-black border border-gray-800 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-2">The Investment</h3>
                
                <div className="flex flex-col gap-1 mb-8">
                    <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-bold text-gold-500 font-serif">$500</span>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">one-time setup</span>
                    </div>
                    <div className="flex items-baseline gap-3 pl-1">
                        <span className="text-2xl font-bold text-white font-serif">+ $50</span>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">/ month maintenance</span>
                    </div>
                </div>
                
                <p className="text-gray-400 mb-8 pb-8 border-b border-gray-800 text-base leading-relaxed">
                    Your complete digital ecosystem. Includes hosting, domain management, updates, and dedicated support.
                </p>

                <ul className="space-y-4 mb-8">
                    {[
                    "Custom Design & Build",
                    "Hosting & Domain Connection",
                    "Lead Capture Integration (CRM)",
                    "Monthly Performance Reports",
                    "All Interactive Calculators",
                    "Mobile & SEO Optimization",
                    "BuyingBuddy IDX Integration (Add-on)"
                    ].map((item, i) => (
                    <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.05) }}
                        className="flex items-center gap-4 text-gray-300 text-lg"
                    >
                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                             <Check className="w-3.5 h-3.5 text-gold-500" />
                        </div>
                        <span>{item}</span>
                    </motion.li>
                    ))}
                </ul>

                <div className="p-4 bg-gold-500/10 rounded-xl border border-gold-500/20 text-center">
                    <p className="text-gold-500 text-sm font-medium uppercase tracking-wider">Limited availability per month</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
