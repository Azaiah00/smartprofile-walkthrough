import React from 'react';
import { cn } from './Button';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export const Section = ({ className, children, id, ...props }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn("py-20 md:py-32 relative overflow-hidden", className)} 
      {...props}
    >
      {children}
    </section>
  );
};

