import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Calculator, DollarSign, Home } from 'lucide-react';
import { clsx } from 'clsx';

// Mockup components for the calculators
const NetSheetPreview = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm h-full flex flex-col">
    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Seller Net Sheet</h4>
    <div className="space-y-4 flex-1">
      <div>
        <label className="block text-xs font-medium text-gray-500 uppercase">Sale Price</label>
        <div className="text-2xl font-bold text-gray-900">$500,000</div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Mortgage Payoff</span>
          <span className="text-red-500">-$210,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Est. Closing Costs</span>
          <span className="text-red-500">-$15,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Agent Commissions</span>
          <span className="text-red-500">-$30,000</span>
        </div>
      </div>
    </div>
    <div className="mt-6 pt-4 border-t bg-gold-50 rounded-lg p-4">
      <div className="text-sm text-gold-800 font-medium uppercase">Estimated Net Proceeds</div>
      <div className="text-3xl font-bold text-gold-600">$245,000</div>
    </div>
  </div>
);

const MortgagePreview = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm h-full flex flex-col">
    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Monthly Payment</h4>
    <div className="flex items-center justify-center mb-6">
      <div className="w-32 h-32 rounded-full border-8 border-gold-100 border-l-gold-500 border-t-gold-500 rotate-45 flex items-center justify-center bg-white shadow-inner">
         <div className="text-center -rotate-45">
            <div className="text-xs text-gray-500">Total</div>
            <div className="text-lg font-bold text-gray-900">$3,240</div>
         </div>
      </div>
    </div>
    <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold-500"></span>Principal & Interest</span> <span>$2,450</span></div>
        <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-300"></span>Taxes</span> <span>$550</span></div>
        <div className="flex justify-between items-center"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-200"></span>Insurance</span> <span>$240</span></div>
    </div>
  </div>
);

const ClosingCostPreview = () => (
  <div className="p-6 bg-white rounded-xl shadow-sm h-full flex flex-col">
    <h4 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Smart Closing Costs</h4>
    <div className="mb-4">
        <div className="flex gap-2 mb-2">
            <span className="px-2 py-1 bg-gold-100 text-gold-800 text-xs font-bold rounded">BUYER</span>
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded">SELLER</span>
        </div>
        <div className="text-xs text-gray-500">State-specific calculations (NY Example)</div>
    </div>
    <div className="space-y-3 text-sm flex-1">
        <div className="flex justify-between border-b border-dashed border-gray-200 pb-1"><span>NYS Mortgage Tax</span> <span>$5,200</span></div>
        <div className="flex justify-between border-b border-dashed border-gray-200 pb-1"><span>Mansion Tax</span> <span>$0</span></div>
        <div className="flex justify-between border-b border-dashed border-gray-200 pb-1"><span>Title Insurance</span> <span>$2,100</span></div>
        <div className="flex justify-between border-b border-dashed border-gray-200 pb-1"><span>Recording Fees</span> <span>$450</span></div>
    </div>
    <div className="mt-4 flex justify-between items-center pt-3 border-t border-gray-200">
        <span className="font-bold text-gray-900">Total Est. Costs</span>
        <span className="font-bold text-gold-600">$7,750</span>
    </div>
  </div>
);

const tools = [
  {
    id: 'net-sheet',
    title: 'Seller Net Sheet',
    icon: DollarSign,
    description: "Show sellers exactly what they'll walk away with. Builds trust through transparency.",
    component: NetSheetPreview
  },
  {
    id: 'mortgage',
    title: 'Mortgage Payment',
    icon: Home,
    description: "Help buyers understand true affordability including taxes and insurance.",
    component: MortgagePreview
  },
  {
    id: 'closing',
    title: 'Closing Costs',
    icon: Calculator,
    description: "State-specific accuracy for transfer taxes, title fees, and more.",
    component: ClosingCostPreview
  }
];

export const CalculatorShowcase = () => {
  const [activeTool, setActiveTool] = useState(0);

  return (
    <Section className="bg-luxury-charcoal" id="tools">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Tools That <span className="text-gold-500">Close Deals</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            While your brand draws them in, these powerful interactive tools give them the data they need to say "Yes".
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Navigation */}
          <div className="w-full lg:w-1/3 space-y-4">
            {tools.map((tool, idx) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(idx)}
                className={clsx(
                  "w-full text-left p-6 rounded-xl transition-all duration-300 border flex items-start gap-4 group",
                  activeTool === idx 
                    ? "bg-white/10 border-gold-500" 
                    : "bg-transparent border-white/10 hover:bg-white/5 hover:border-white/20"
                )}
              >
                <div className={clsx(
                  "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                  activeTool === idx ? "bg-gold-500 text-luxury-black" : "bg-white/10 text-gray-400 group-hover:text-white"
                )}>
                  <tool.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={clsx(
                    "text-lg font-bold mb-1 transition-colors",
                    activeTool === idx ? "text-white" : "text-gray-400 group-hover:text-white"
                  )}>{tool.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug">{tool.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Preview Area */}
          <div className="w-full lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTool}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900 rounded-2xl p-8 h-full border border-white/10 relative overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
                
                {/* Mock Device Frame */}
                <div className="relative w-full max-w-md mx-auto aspect-[9/16] md:aspect-[4/3] bg-white rounded-xl overflow-hidden shadow-2xl ring-8 ring-gray-800">
                    {/* Header Bar */}
                    <div className="bg-luxury-black h-12 flex items-center justify-between px-4">
                        <div className="text-white text-xs font-bold tracking-widest">SMARTPROFILE</div>
                        <div className="w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-gold-500"></div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-4 h-[calc(100%-3rem)] bg-gray-50 overflow-y-auto">
                        {React.createElement(tools[activeTool].component)}
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};

