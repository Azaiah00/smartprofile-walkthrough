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
        </div>
      </Container>
    </footer>
  );
};

