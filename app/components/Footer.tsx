import React from 'react';
import { Container } from './ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-luxury-black py-12 border-t border-white/5 text-gray-500 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            &copy; 2023 Real Advancement Real Estate. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Contact Support</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

