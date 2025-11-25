import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { Home } from 'lucide-react';

export const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(650000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  
  const downPayment = homePrice * (downPaymentPercent / 100);
  const loanAmount = homePrice - downPayment;
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = 30 * 12;
  
  const principalAndInterest = 
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
    (Math.pow(1 + monthlyInterest, numberOfPayments) - 1);
    
  const taxes = homePrice * 0.012 / 12; // Est. 1.2% annual tax
  const insurance = 1200 / 12; // Est. $1200 annual insurance
  
  const totalMonthly = principalAndInterest + taxes + insurance;

  return (
    <CalculatorSection
      id="mortgage-calc"
      title="Monthly Payment Estimator"
      subtitle="Clarity for Buyers"
      description="Move beyond simple P&I calculations. This comprehensive tool factors in taxes, insurance, and current rates to give buyers a realistic picture of their monthly obligation, helping them make confident offers."
      icon={Home}
      isDark={true}
      features={[
        "Includes Principal, Interest, Taxes, and Insurance (PITI)",
        "Adjustable down payment and interest rates",
        "Visual payment breakdown",
        "Real-time updates"
      ]}
    >
      <div className="space-y-6 font-sans text-luxury-black">
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Home Price</label>
            <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input 
                    type="number" 
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-gold-500 text-lg font-bold"
                />
            </div>
            <input 
                type="range" min="200000" max="2000000" step="10000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full mt-2 accent-gold-500"
            />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Down Payment ({downPaymentPercent}%)</label>
                <input 
                    type="number" 
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded outline-none focus:border-gold-500"
                />
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Interest Rate (%)</label>
                <input 
                    type="number" step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded outline-none focus:border-gold-500"
                />
            </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-center mb-6">
                <div className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Estimated Monthly Payment</div>
                <div className="text-4xl font-serif font-bold text-luxury-black">
                    ${Math.round(totalMonthly).toLocaleString()}
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                        <span className="text-gray-600">Principal & Interest</span>
                    </div>
                    <span className="font-bold text-gray-900">${Math.round(principalAndInterest).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span className="text-gray-600">Property Taxes (Est.)</span>
                    </div>
                    <span className="font-bold text-gray-900">${Math.round(taxes).toLocaleString()}</span>
                </div>
                 <div className="flex justify-between text-sm items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <span className="text-gray-600">Home Insurance (Est.)</span>
                    </div>
                    <span className="font-bold text-gray-900">${Math.round(insurance).toLocaleString()}</span>
                </div>
            </div>
        </div>
      </div>
    </CalculatorSection>
  );
};

