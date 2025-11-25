import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { clsx } from 'clsx';

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('Introduction');

  // Simple scroll spy to update active section name
  useEffect(() => {
    const handleScroll = () => {
       // Logic to determine section could be added here
       // For now we keep it minimal
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gold-500 origin-left z-[100]" 
        style={{ scaleX }} 
      />
      
      <nav className="fixed top-0 left-0 w-full z-50 p-6 pointer-events-none">
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div className="flex items-center gap-3 pointer-events-auto">
              <div className="w-10 h-10 bg-luxury-black border border-gold-500/30 rounded-sm rotate-45 flex items-center justify-center shadow-2xl shadow-gold-500/10 backdrop-blur-md">
                  <div className="w-5 h-5 bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-white tracking-tight leading-none drop-shadow-lg">
                  Smart<span className="text-gold-500">Profile</span>
                </span>
                <span className="text-[10px] text-gold-500/80 uppercase tracking-[0.2em] font-medium">
                  Presentation Deck
                </span>
              </div>
          </div>

          {/* Section Indicator (Optional, nice for presentation feel) */}
          <div className="hidden md:flex flex-col items-end text-right">
             <div className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-1">
                Real Advancement
             </div>
             <div className="text-sm font-bold text-gray-400">
                {new Date().getFullYear()} Collection
             </div>
          </div>
        </div>
      </nav>
    </>
  );
};
