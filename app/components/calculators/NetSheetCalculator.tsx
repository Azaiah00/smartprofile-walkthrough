import React, { useState, useEffect } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { DollarSign, RefreshCw, PieChart } from 'lucide-react';
import { clsx } from 'clsx';

export const NetSheetCalculator = () => {
  const [salePrice, setSalePrice] = useState(500000);
  const [mortgagePayoff, setMortgagePayoff] = useState(250000);
  const [commissionRate, setCommissionRate] = useState(6);
  const [closingCostRate, setClosingCostRate] = useState(2);
  
  const commission = salePrice * (commissionRate / 100);
  const closingCosts = salePrice * (closingCostRate / 100);
  const netProceeds = salePrice - mortgagePayoff - commission - closingCosts;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <CalculatorSection
      id="net-sheet"
      title="Seller Net Sheet Calculator"
      subtitle="Transparency Wins Listings"
      description="Eliminate the guesswork for your sellers. This tool provides a precise, real-time breakdown of their estimated proceeds, building trust and helping you set realistic expectations from the very first meeting."
      icon={DollarSign}
      isDark={true}
      features={[
        "Instant, real-time calculations as you adjust parameters",
        "Customizable commission and closing cost rates",
        "Visual breakdown of expenses vs. profit",
        "Printable format for listing presentations"
      ]}
    >
      <div className="space-y-6 font-sans text-luxury-black">
        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Sale Price</label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input 
                    type="number" 
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none text-lg font-semibold"
                />
            </div>
            <input 
                type="range" min="100000" max="2000000" step="5000"
                value={salePrice}
                onChange={(e) => setSalePrice(Number(e.target.value))}
                className="w-full mt-2 accent-gold-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Mortgage Payoff</label>
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                    <input 
                        type="number" 
                        value={mortgagePayoff}
                        onChange={(e) => setMortgagePayoff(Number(e.target.value))}
                        className="w-full pl-6 pr-3 py-2 bg-gray-50 border border-gray-200 rounded outline-none focus:border-gold-500"
                    />
                </div>
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Commission (%)</label>
                <input 
                    type="number" 
                    value={commissionRate}
                    onChange={(e) => setCommissionRate(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded outline-none focus:border-gold-500"
                />
             </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">Est. Commission</span>
                <span className="font-medium text-gray-900">-{formatCurrency(commission)}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-gray-600">Est. Closing Costs ({closingCostRate}%)</span>
                <span className="font-medium text-gray-900">-{formatCurrency(closingCosts)}</span>
            </div>
             <div className="flex justify-between text-sm">
                <span className="text-gray-600">Mortgage Payoff</span>
                <span className="font-medium text-gray-900">-{formatCurrency(mortgagePayoff)}</span>
            </div>
            <div className="h-px bg-gray-200 my-2" />
            <div className="flex justify-between items-end">
                <span className="text-gold-600 font-bold uppercase text-sm">Net Proceeds</span>
                <span className="text-3xl font-serif font-bold text-luxury-black">{formatCurrency(netProceeds)}</span>
            </div>
        </div>
      </div>
    </CalculatorSection>
  );
};

