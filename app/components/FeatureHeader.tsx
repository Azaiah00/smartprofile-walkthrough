import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

export const FeatureHeader = ({ title, subtitle, type }: { title: string, subtitle: string, type: 'buyer' | 'seller' }) => (
  <Section className={type === 'buyer' ? 'bg-blue-50/30 pb-0 pt-24' : 'bg-gold-50/30 pb-0 pt-24'}>
    <Container>
        <div className="text-center">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 inline-block ${type === 'buyer' ? 'bg-luxury-black text-gold-500' : 'bg-gold-100 text-gold-600'}`}
            >
                {type === 'buyer' ? 'Included in Buyer Profile' : 'Included in Seller Profile'}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-black mb-2">{title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </Container>
  </Section>
);

