import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { BookOpen, FileText, HelpCircle, ChevronRight, Download } from 'lucide-react';
import { Button } from './ui/Button';

const ResourceCard = ({ title, description, category }: { title: string, description: string, category: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-gold-500 group"
  >
    <div className="flex justify-between items-start mb-4">
      <span className="text-xs font-bold tracking-widest text-gold-600 uppercase bg-gold-50 px-2 py-1 rounded">{category}</span>
      <FileText className="w-5 h-5 text-gray-300 group-hover:text-gold-500 transition-colors" />
    </div>
    <h3 className="text-xl font-serif font-bold text-luxury-black mb-2 group-hover:text-gold-600 transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm mb-6">{description}</p>
    <button className="text-sm font-bold text-luxury-black flex items-center gap-2 group-hover:gap-3 transition-all">
      Read Guide <ChevronRight className="w-4 h-4 text-gold-500" />
    </button>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-gold-500 transition-colors"
            >
                <span className="font-serif font-bold text-lg text-white">{question}</span>
                <ChevronRight className={`w-5 h-5 text-gold-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <motion.div 
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
            >
                <p className="text-gray-400 pb-6 leading-relaxed">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

export const EducationalResources = () => {
  const guides = [
    { title: "First-Time Homebuyer's Roadmap", category: "For Buyers", description: "A step-by-step journey from pre-approval to keys in hand." },
    { title: "Maximizing Home Value", category: "For Sellers", description: "Strategic improvements that yield the highest returns in our current market." },
    { title: "Understanding Closing Costs", category: "Process", description: "A transparent breakdown of where every penny goes at the closing table." }
  ];

  return (
    <Section className="bg-luxury-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold-500 font-medium uppercase tracking-widest text-sm"
          >
            Expert Knowledge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mt-4 mb-6"
          >
            Educate to <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Empower</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Position yourself as the trusted advisor. SmartProfile includes a comprehensive library of guides and resources that answer client questions before they're even asked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {guides.map((guide, idx) => (
                <ResourceCard key={idx} {...guide} />
            ))}
        </div>

        <div className="bg-luxury-black rounded-3xl p-8 md:p-12 border border-white/5">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                        <HelpCircle className="w-6 h-6 text-gold-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">Answer Questions,<br />Build Trust</h3>
                    <p className="text-gray-400 mb-8">
                        Your profile works for you 24/7, fielding common inquiries and demonstrating your expertise.
                    </p>
                    <Button variant="outline">View Full Library</Button>
                </div>
                <div className="lg:w-2/3">
                    <FAQItem 
                        question="How does the home buying process work?" 
                        answer="We break it down into 5 simple steps: Consultation, Pre-approval, House Hunting, Offer & Negotiation, and Closing. Each step is detailed in our interactive guides."
                    />
                    <FAQItem 
                        question="What are closing costs?" 
                        answer="Closing costs are fees paid at the closing of a real estate transaction. Our Smart Closing Cost Calculator gives you a state-specific breakdown so there are no surprises."
                    />
                    <FAQItem 
                        question="Is now a good time to sell?" 
                        answer="Market conditions vary. We provide real-time market data and a Seller Net Sheet to help you understand exactly what you stand to gain."
                    />
                </div>
            </div>
        </div>

      </Container>
    </Section>
  );
};

