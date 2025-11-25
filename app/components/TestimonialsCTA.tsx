import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Star, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const Testimonial = ({ quote, author, role, delay }: { quote: string, author: string, role: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="p-10 bg-white rounded-[2rem] relative border border-gray-100 hover:border-gold-500/30 transition-all duration-500 group shadow-lg shadow-black/5"
  >
    <div className="flex gap-1 mb-6">
      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
    </div>
    <p className="text-gray-600 text-xl italic mb-8 leading-relaxed font-light">"{quote}"</p>
    <div>
      <div className="font-bold text-luxury-black text-lg group-hover:text-gold-600 transition-colors">{author}</div>
      <div className="text-gray-400 text-sm uppercase tracking-wider mt-1">{role}</div>
    </div>
  </motion.div>
);

export const TestimonialsCTA = () => {
  return (
    <>
      <Section className="bg-luxury-beige py-32">
        <Container>
          <div className="text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-6"
            >
              Trusted by Top Producers
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="The Seller Net Sheet calculator alone has won me three listings this month. Clients love the transparency."
              author="Michael Roberts"
              role="Senior Broker, Douglas Elliman"
              delay={0}
            />
            <Testimonial 
              quote="Finally, a website that actually represents my brand. It's elegant, fast, and my clients are constantly impressed."
              author="Jennifer Wu"
              role="Luxury Specialist, Sotheby's"
              delay={0.2}
            />
            <Testimonial 
              quote="SmartProfile represents the future of agent marketing. It's not just a bio, it's a closing tool."
              author="David Sterling"
              role="Team Leader, Keller Williams"
              delay={0.4}
            />
          </div>
        </Container>
      </Section>

      {/* Final Presentation CTA */}
      <Section className="bg-luxury-cream py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="lg:w-2/3">
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-serif font-bold text-luxury-black mb-8 leading-tight"
                  >
                    Ready to Elevate <br />
                    <span className="text-gold-600">Your Business?</span>
                  </motion.h2>
                  <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                    Join the elite group of realtors using SmartProfile to build their brand and close more deals. Let's discuss how we can tailor this to your market.
                  </p>
              </div>

              <div className="lg:w-1/3 flex flex-col gap-6 w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 text-luxury-black p-8 rounded-3xl shadow-2xl shadow-gold-500/10"
                  >
                      <div className="text-gold-600 uppercase tracking-widest text-xs font-bold mb-6">Contact For Access</div>
                      
                      <div className="space-y-6">
                          <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors text-gold-600">
                                  <Phone className="w-5 h-5" />
                              </div>
                              <div>
                                  <div className="text-xs text-gray-400 uppercase">Call Us</div>
                                  <div className="text-xl font-serif font-bold">+1 (888) 555-0123</div>
                              </div>
                          </div>
                          
                          <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors text-gold-600">
                                  <Mail className="w-5 h-5" />
                              </div>
                              <div>
                                  <div className="text-xs text-gray-400 uppercase">Email Us</div>
                                  <div className="text-xl font-serif font-bold">hello@realadvancement.com</div>
                              </div>
                          </div>

                           <div className="flex items-center gap-4 group cursor-pointer">
                              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-colors text-gold-600">
                                  <Calendar className="w-5 h-5" />
                              </div>
                              <div>
                                  <div className="text-xs text-gray-400 uppercase">Book Consultation</div>
                                  <div className="text-xl font-serif font-bold">Schedule Online</div>
                              </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </div>
        </Container>
      </Section>
    </>
  );
};
