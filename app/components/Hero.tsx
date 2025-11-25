import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from './ui/Container';
import { ChevronDown } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black perspective-1000">
      {/* Background Effects with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]" />
        <motion.div 
            animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[100px]" 
        />
      </motion.div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="inline-block py-1 px-3 text-gold-500 text-xs md:text-sm font-medium mb-8 uppercase border-b border-gold-500/30 pb-2"
          >
            The Future of Real Estate Marketing
          </motion.span>
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white leading-[0.9] tracking-tight">
               Your Digital
            </h1>
            <div className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-500 to-gold-300 leading-[1.1] pb-4">
               Identity
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mb-16">
              <TextReveal 
                text="SmartProfile™ is not just a website. It's a premium digital portfolio that puts YOU first, enhanced with powerful tools to close more deals."
                className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed justify-center"
                delay={5}
              />
          </div>
        </motion.div>
      </Container>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500">Begin Presentation</span>
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};
