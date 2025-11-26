import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { DollarSign, ShieldCheck, AlertTriangle } from 'lucide-react';

const CostItem = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="font-bold text-luxury-black">{value}</span>
  </div>
);

export const MoneyTalkSection = () => {
  return (
    <Section className="bg-luxury-beige">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block bg-luxury-black px-3 py-1 rounded-full mb-4">
             <span className="text-xs font-bold text-gold-500 uppercase tracking-wide">Included with Buyer Profile</span>
          </div>
          <h2 className="text-4xl font-serif font-bold text-luxury-black mb-4">Money Talk: Financial Clarity</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don't just open doors; we open the books. Understanding the true cost of purchase is the first step to a successful transaction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Pre-Qual vs Pre-Approval */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-luxury-black mb-2">Know Your Strength</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-gray-300">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-gray-400" />
                <h4 className="font-bold text-gray-700">Pre-Qualified</h4>
              </div>
              <p className="text-gray-500 text-sm mb-2">~7 Minutes | "Comfort Zone" Check</p>
              <p className="text-gray-600">
                A basic review of what you <em>tell</em> a lender. Good for an idea, but holds little weight with sellers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gold-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Recommended</div>
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-gold-600" />
                <h4 className="font-bold text-luxury-black">Pre-Approved</h4>
              </div>
              <p className="text-gold-600 text-sm mb-2 font-medium">The "Real Deal" | Document Verified</p>
              <p className="text-gray-600">
                Lender has verified your income, assets, and credit. Gives you a massive competitive edge in negotiations.
              </p>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-luxury-black">The Cash You Need</h3>
            </div>

            <div className="space-y-1">
              <CostItem label="Down Payment" value="3% - 20%+" />
              <CostItem label="Earnest Money" value="1% - 3%" />
              <CostItem label="Closing Costs" value="~2% - 3%" />
              <CostItem label="Home Inspection" value="$350 - $750" />
              <CostItem label="Appraisal" value="$400 - $600" />
              <CostItem label="Admin/Broker Fee" value="$495" />
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 p-6 text-center">
              <p className="text-sm text-gray-500">
                *These are estimates. Use our <strong>Smart Calculators</strong> below for precise figures.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};
