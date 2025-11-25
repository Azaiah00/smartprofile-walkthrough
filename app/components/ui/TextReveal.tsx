import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clsx } from 'clsx';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const TextReveal = ({ text, className, delay = 0, as: Component = 'h2' }: TextRevealProps) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          style={{ marginRight: "0.25em" }} 
          key={index}
          className={clsx(
            Component === 'h1' ? "inline-block" : "inline-block"
          )}
        >
          {Component === 'h1' || Component === 'h2' ? (
             // Handle gradient text specifically if passed in className, 
             // but here we just render the word.
             // If word needs specific coloring (e.g. gold), we might need a more complex parser.
             // For now, simple word split.
             word
          ) : word}
        </motion.span>
      ))}
    </motion.div>
  );
};

