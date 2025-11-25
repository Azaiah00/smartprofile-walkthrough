import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Award, Phone, Mail } from 'lucide-react';
import { Button } from './ui/Button';

const Stat = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center px-6 py-4 border-r border-gold-500/20 last:border-0">
    <div className="text-3xl md:text-4xl font-serif font-bold text-gold-600 mb-1">{value}</div>
    <div className="text-xs text-gray-500 uppercase tracking-widest font-medium">{label}</div>
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-600 text-xs font-bold uppercase tracking-wide">
    {text}
  </span>
);

export const ExpandedRealtorProfile = () => {
  return (
    <Section className="bg-luxury-cream py-0 relative">
      {/* Hero / Intro Part */}
      <div className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream via-luxury-cream/90 to-transparent"></div>
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
                    <Badge text="Founder" />
                    <Badge text="7 Years Experience" />
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-6 leading-none">
                    Fred <br /> <span className="text-gold-600">Sales</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                    Built by a realtor, for realtors. No fluff. Just results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="gap-2 shadow-lg shadow-gold-500/10">
                        <Phone className="w-4 h-4" /> Schedule Consultation
                    </Button>
                    <Button variant="outline" size="lg" className="gap-2 bg-white/50 hover:bg-white text-luxury-black border-gray-200">
                        <Mail className="w-4 h-4" /> Contact Me
                    </Button>
                </div>
            </motion.div>
        </Container>
      </div>

      {/* Stats Bar - REMOVED EXTRA STATS AS REQUESTED */}
      <div className="border-y border-gold-500/10 bg-luxury-beige">
        <Container>
            <div className="flex flex-wrap justify-center divide-x divide-gold-500/10">
                <Stat value="3x" label="GCI Growth" />
                <Stat value="7" label="Years Experience" />
            </div>
        </Container>
      </div>

      {/* Bio & Story */}
      <div className="py-12 bg-luxury-cream">
        <Container>
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10 border border-white shadow-2xl shadow-gold-500/10">
                        {/* Updated to use local asset */}
                        <img src="/fred-sales.jpg" alt="Fred Sales" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl z-0" />
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl z-0" />
                </div>
                
                <div className="w-full lg:w-1/2">
                    <h3 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-4">The Person Behind The Brand</h3>
                    <h2 className="text-4xl font-serif font-bold text-luxury-black mb-8">Fred Sales</h2>
                    <h4 className="text-xl text-gold-600 font-serif mb-6">Founder, Real Advancement</h4>
                    
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Hey there. I'm Fred, and I've been in your shoes. For 7 years, I've been grinding in real estate, facing the same frustrations you probably deal with every day.
                        </p>
                        <p>
                            You know what I'm talking about—those expensive websites that don't convert. Those business cards that end up in the trash. The marketing tools that promise the world but deliver nothing. I was spending thousands on solutions that weren't actually solving my problems.
                        </p>
                        <p>
                            So I did something about it. I reached out to a team of developers who actually listen, and together we built exactly what I needed: SmartProfile™ and Virtual Staging. Not because some marketing team told me to, but because these are the tools I wish I'd had from day one.
                        </p>
                        <p>
                             These aren't theoretical products built in a boardroom. They're the exact systems I used to triple my own GCI. Real solutions for real realtors, built by someone who's been in the trenches with you.
                        </p>
                    </div>

                    <div className="mt-10 pt-10 border-t border-gold-500/10">
                        <h4 className="text-luxury-black font-bold mb-6 flex items-center gap-2"><Award className="text-gold-600" /> Milestones</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                7 Years Industry Experience
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                Founder of Real Advancement
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                Tripled Personal GCI
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                                Solutions Built for Realtors
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
