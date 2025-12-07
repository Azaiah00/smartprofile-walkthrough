import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Check, Star } from 'lucide-react';

const Step = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="relative pl-12 pb-12 border-l border-gold-500/30 last:border-l-0 last:pb-0">
    <div className="absolute top-0 left-0 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-gold-500 text-gold-600 font-bold flex items-center justify-center z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
      {number}
    </div>
    <h4 className="text-xl font-bold text-luxury-black mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PricingCard = ({ 
  title, 
  priceSetup, 
  priceMonthly, 
  description, 
  features, 
  isPopular = false,
  isEnterprise = false,
  delay = 0
}: { 
  title: string, 
  priceSetup: string, 
  priceMonthly: string, 
  description: string, 
  features: string[],
  isPopular?: boolean,
  isEnterprise?: boolean,
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, type: "spring" }}
    className={`bg-luxury-black border ${isPopular ? 'border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : isEnterprise ? 'border-gold-500/60 shadow-[0_0_40px_rgba(212,175,55,0.25)]' : 'border-gray-800'} rounded-[2.5rem] p-8 relative overflow-hidden flex-1 ${isEnterprise ? 'ring-2 ring-gold-500/30' : ''}`}
  >
    {isPopular && (
      <div className="absolute top-0 right-0 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider z-20">
        Best Value
      </div>
    )}
    {isEnterprise && (
      <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider z-20 shadow-lg">
        Elite
      </div>
    )}
    <div className={`absolute top-0 right-0 w-80 h-80 ${isEnterprise ? 'bg-gold-500/10' : 'bg-gold-500/5'} rounded-full blur-[80px]`} />
    
    <div className="relative z-10 flex flex-col h-full">
      <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
      
      <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gold-500 font-serif">${priceSetup}</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">setup</span>
          </div>
          <div className="flex items-baseline gap-2 pl-1">
              <span className="text-xl font-bold text-white font-serif">+ ${priceMonthly}</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">/ month</span>
          </div>
      </div>
      
      <p className="text-gray-400 mb-6 pb-6 border-b border-gray-800 text-sm leading-relaxed min-h-[60px]">
          {description}
      </p>

      <ul className="space-y-3 mb-8 flex-grow">
          {features.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
              <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                   <Check className="w-3 h-3 text-gold-500" />
              </div>
              <span>{item}</span>
          </li>
          ))}
      </ul>

      <div className="p-3 bg-gold-500/10 rounded-xl border border-gold-500/20 text-center mt-auto">
          <p className="text-gold-500 text-xs font-medium uppercase tracking-wider">Limited availability</p>
      </div>
    </div>
  </motion.div>
);

export const PricingAndProcess = () => {
  return (
    <Section className="bg-luxury-cream border-t border-gray-100 py-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 mb-24">
          
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

          {/* Pricing Intro / Context (Optional or spacer) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
             <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
               <h3 className="text-3xl font-serif font-bold text-luxury-black mb-6">
                 An Investment in <span className="text-gold-600">Excellence</span>
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed mb-8">
                 Choose the package that fits your business model. Whether you're a solo top-producer or looking to expand your brand footprint, we have a SmartProfile solution for you.
               </p>
               <div className="flex items-center gap-4 text-gold-600 font-medium">
                  <Star className="w-5 h-5 fill-current" />
                  <span>No Long-term Contracts</span>
               </div>
             </motion.div>
          </div>

        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <PricingCard 
                title="Enterprise"
                priceSetup="4,999"
                priceMonthly="50"
                description="The complete digital presence solution for top producers and teams. Premium features and dedicated support."
                features={[
                    "Everything in Double Profile",
                    "Up to 5 SmartProfiles Included",
                    "100 Free Virtual Staging Photos (included)",
                    "Dedicated Account Manager",
                    "Custom Feature Development",
                    "White-Label Options",
                    "Advanced Analytics & Conversion Tracking",
                    "Exclusive Beta Feature Access",
                    "Quarterly Strategy Sessions",
                    "Custom Integrations (CRM, tools, etc.)",
                    "Unlimited Custom SmartCards",
                    "Professional Copywriting & Content",
                    "Conversion Optimization"
                ]}
                isEnterprise={true}
                delay={0.1}
            />
            <PricingCard 
                title="Single Profile"
                priceSetup="500"
                priceMonthly="50"
                description="Perfect for the individual agent ready to elevate their personal brand. Choice of 1 profile design."
                features={[
                    "Custom Design & Build",
                    "Hosting & Domain Connection",
                    "Lead Capture Integration",
                    "Monthly Performance Reports",
                    "All Interactive Calculators",
                    "Mobile & SEO Optimization"
                ]}
                delay={0.2}
            />
            <PricingCard 
                title="Double Profile"
                priceSetup="900"
                priceMonthly="50"
                description="Ideal for partners or agents wanting distinct profiles for different niches. 2 Profiles included."
                features={[
                    "Everything in Single Profile",
                    "2 Complete SmartProfiles",
                    "2-for-1 Monthly Maintenance",
                    "50 Custom 'SmartCards' (Free)",
                    "Unified Brand Strategy",
                    "Priority Support"
                ]}
                isPopular={true}
                delay={0.3}
            />
        </div>

      </Container>
    </Section>
  );
};
