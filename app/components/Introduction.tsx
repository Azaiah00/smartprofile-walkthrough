import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { User, Layers, Award } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.8, type: "spring", bounce: 0.3 }}
    className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-2xl hover:border-gold-500/50 hover:bg-white transition-colors shadow-sm hover:shadow-lg group cursor-default"
  >
    <div className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
      <Icon className="w-10 h-10 text-gold-600" />
    </div>
    <h3 className="text-2xl font-serif font-bold text-luxury-black mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg font-light">{description}</p>
  </motion.div>
);

export const Introduction = () => {
  return (
    <Section className="bg-luxury-beige py-32">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-8 leading-tight"
          >
            More Than a Tool. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">It's Your Digital Headquarters.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl text-gray-600 font-light leading-relaxed"
          >
            SmartProfile™ fundamentally reimagines the realtor's digital presence. 
            It starts with your personal brand, your story, and your value—then supercharges it with 
            interactive tools that position you as the undisputed expert in your market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <FeatureItem 
            icon={User}
            title="You Come First"
            description="Your bio, your photo, your story. We build the experience around your personal brand, ensuring clients connect with YOU before anything else."
            delay={0.1}
          />
          <FeatureItem 
            icon={Award}
            title="Expert Positioning"
            description="Establish immediate credibility with professional presentation and high-end design that rivals luxury agency sites."
            delay={0.3}
          />
          <FeatureItem 
            icon={Layers}
            title="Interactive Power"
            description="Equipped with powerful calculators and tools that answer client questions in real-time, making you an indispensable resource."
            delay={0.5}
          />
        </div>
      </Container>
    </Section>
  );
};
