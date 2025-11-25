import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Star, Quote, MapPin, Award, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

const Stat = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center px-6 py-4 border-r border-gray-800 last:border-0">
    <div className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-1">{value}</div>
    <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-500 text-xs font-bold uppercase tracking-wide">
    {text}
  </span>
);

export const ExpandedRealtorProfile = () => {
  return (
    <Section className="bg-luxury-black py-0 relative">
      {/* Hero / Intro Part */}
      <div className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent"></div>
        </div>
        
        <Container className="relative z-10">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
            >
                <div className="flex gap-3 mb-6">
                    <Badge text="Luxury Specialist" />
                    <Badge text="Top 1% Producer" />
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-none">
                    Sarah <br /> <span className="text-gold-500">Anderson</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                    Redefining the real estate experience through integrity, market intelligence, and an unwavering commitment to your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="gap-2">
                        <Phone className="w-4 h-4" /> Schedule Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2">
                        <Mail className="w-4 h-4" /> Contact Me
                    </Button>
                </div>
            </motion.div>
        </Container>
      </div>

      {/* Stats Bar */}
      <div className="border-y border-white/10 bg-luxury-charcoal">
        <Container>
            <div className="flex flex-wrap justify-center divide-x divide-white/10">
                <Stat value="$120M+" label="Sales Volume" />
                <Stat value="15" label="Years Experience" />
                <Stat value="450+" label="Families Served" />
                <Stat value="24" label="Days on Market" />
            </div>
        </Container>
      </div>

      {/* Bio & Story */}
      <div className="py-24 bg-luxury-black">
        <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white/10">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Sarah Anderson" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl z-0" />
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0" />
                </div>
                
                <div className="w-full lg:w-1/2">
                    <h3 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-4">The Person Behind The Brand</h3>
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">More Than Just An Agent</h2>
                    
                    <div className="space-y-6 text-gray-400 leading-relaxed">
                        <p>
                            My journey in real estate began with a simple belief: that every client deserves not just a salesperson, but a strategic partner. With a background in finance and interior design, I bring a unique dual perspective to every transaction.
                        </p>
                        <p>
                            For sellers, I curate a marketing narrative that highlights the soul of your home, not just its specs. For buyers, I analyze long-term value and lifestyle fit with brutal honesty.
                        </p>
                        <p>
                            I don't measure success by deal volume, but by the trust I earn. When you work with me, you get my personal cell number, my undivided attention, and my relentless negotiation skills working in your corner.
                        </p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10">
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2"><Award className="text-gold-500" /> Awards & Recognition</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                President's Circle 2023, 2024
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                Luxury Home Specialist Certified
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                Top 100 Agents Regional
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                5-Star Client Satisfaction Award
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
      </div>
    </Section>
  );
};

