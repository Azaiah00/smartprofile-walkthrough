import React from 'react';
import { Container } from './ui/Container';
import { Section } from './ui/Section';

export const FeatureHeader = ({ title, subtitle, type }: { title: string, subtitle: string, type: 'buyer' | 'seller' }) => (
  <Section className={type === 'buyer' ? 'bg-blue-50/30 pb-0 pt-24' : 'bg-gold-50/30 pb-0 pt-24'}>
    <Container>
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-black mb-2">{title}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </Container>
  </Section>
);

