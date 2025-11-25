import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const RealtorProfilePreview = () => {
  return (
    <Section className="bg-luxury-black relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-900/10 to-transparent" />
      
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-12 bg-gold-500"></div>
                <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">The Core Philosophy</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                Your Personal Brand <br />
                <span className="text-gold-500 italic">Center Stage</span>
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                In a world of generic portals, SmartProfile™ brings the focus back to where it belongs: <strong>YOU</strong>. 
                Before clients see a single calculator or market stat, they see your expertise, your achievements, and your story.
              </p>

              <div className="space-y-6">
                {[
                  "Professional Biography & Story",
                  "Awards, Certifications & Credentials",
                  "Client Testimonials & Success Stories",
                  "Unique Value Proposition Showcase",
                  "Direct Contact & Availability"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-gold-500 flex-shrink-0" />
                    <span className="text-white text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Preview */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white rounded-2xl overflow-hidden shadow-2xl shadow-gold-500/20 transform rotate-1 hover:rotate-0 transition-transform duration-500"
            >
              {/* Mock Profile Card */}
              <div className="bg-luxury-black p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/10" />
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full border-4 border-gold-500 mb-4 relative overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80" alt="Realtor" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Sarah Anderson</h3>
                <p className="text-gold-400 font-medium">Luxury Real Estate Specialist</p>
                
                <div className="flex justify-center gap-1 mt-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
                </div>
              </div>
              
              <div className="p-8 bg-white text-luxury-black">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gold-600">15+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Years Exp.</div>
                  </div>
                  <div className="flex-1 text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gold-600">$120M</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Sold Volume</div>
                  </div>
                </div>
                
                <div className="relative pl-6 border-l-2 border-gold-500 italic text-gray-600">
                  <Quote className="w-4 h-4 text-gold-300 absolute -top-2 -left-1" />
                  "Sarah didn't just sell our home; she crafted a strategy that set a record price for our neighborhood. Her expertise is unmatched."
                  <div className="mt-2 font-bold text-sm not-italic">- The Mitchell Family</div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                   <div className="text-sm font-bold text-luxury-black mb-2">SPECIALIZATIONS</div>
                   <div className="flex flex-wrap gap-2">
                      {['Luxury Homes', 'Waterfront', 'Investments'].map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-600">{tag}</span>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

        </div>
      </Container>
    </Section>
  );
};

