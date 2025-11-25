import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { BookOpen, Presentation, Share2, MessageCircle, Handshake, Globe } from 'lucide-react';

const UseCase = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20, rotateY: 15 }}
    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
    className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-gold-500/30 hover:bg-gold-50/30 transition-all duration-500 group perspective-1000 shadow-sm hover:shadow-xl"
  >
    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-500 text-gold-600 shadow-sm group-hover:shadow-gold-500/20 group-hover:rotate-3">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-serif font-bold text-luxury-black mb-4 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
  </motion.div>
);

export const VersatilityGrid = () => {
  const useCases = [
    {
      icon: BookOpen,
      title: "Educational Resource",
      description: "Comprehensive guides and FAQs that position you as the educator, building trust before you even meet."
    },
    {
      icon: Presentation,
      title: "Presentation Tool",
      description: "Use interactive calculators during listing appointments to demonstrate numbers in real-time."
    },
    {
      icon: Share2,
      title: "Shareable Asset",
      description: "Your digital business card. Share via text, email, social media, or QR code instantly."
    },
    {
      icon: MessageCircle,
      title: "Client Communication",
      description: "Send specific sections to buyers or sellers to answer their exact questions without overwhelming them."
    },
    {
      icon: Handshake,
      title: "Deal-Closing Tool",
      description: "Demonstrate pricing scenarios, ROI, and net sheets to overcome objections and close the deal."
    },
    {
      icon: Globe,
      title: "Primary Website",
      description: "Replace your current site with a mobile-first experience. Plus, seamless BuyingBuddy IDX integration for live listings."
    }
  ];

  return (
    <Section className="bg-luxury-cream py-32">
      <Container>
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-gold-600 font-medium uppercase text-sm block mb-4"
          >
            Versatility
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-8"
          >
            One Profile. <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Infinite Uses.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
          >
            Adaptable to every stage of your client relationship, from first impression to closing table.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => (
            <UseCase key={idx} {...useCase} index={idx} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
