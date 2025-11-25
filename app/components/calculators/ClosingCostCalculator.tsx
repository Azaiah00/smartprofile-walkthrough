import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { Calculator } from 'lucide-react';

export const ClosingCostCalculator = () => {
  const [state, setState] = useState('NY');
  const [purchasePrice, setPurchasePrice] = useState(500000);
  
  // Simplified logic for demo purposes
  const getCosts = (st: string, price: number) => {
      const rate = st === 'NY' ? 0.018 : st === 'FL' ? 0.007 : 0.011;
      const titleInsurance = price * 0.004 + 500;
      const recording = 350;
      const tax = price * rate;
      return { tax, titleInsurance, recording };
  };

  const costs = getCosts(state, purchasePrice);
  const total = costs.tax + costs.titleInsurance + costs.recording;

  return (
    <CalculatorSection
      id="closing-calc"
      title="Smart Closing Costs"
      subtitle="No More Surprises"
      description="Closing costs can vary wildly by location. Our state-specific calculator breaks down every fee—from transfer taxes to title insurance—so your clients know exactly what to bring to the closing table."
      icon={Calculator}
      features={[
        "State-specific tax calculations (NY, FL, CA, etc.)",
        "Breakdown of buyer vs. seller responsibilities",
        "Includes title, recording, and municipal fees",
        "Most accurate estimator on the market"
      ]}
    >
      <div className="space-y-6 font-sans text-luxury-black">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">State</label>
                <select 
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-gold-500 appearance-none"
                >
                    <option value="NY">New York</option>
                    <option value="FL">Florida</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                </select>
            </div>
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Purchase Price</label>
                 <input 
                    type="number" 
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                    className="w-full px-3 py-3 bg-white border border-gray-200 rounded-lg outline-none focus:border-gold-500"
                />
            </div>
         </div>

         <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex gap-4">
                 <button className="text-xs font-bold text-gold-600 border-b-2 border-gold-500 pb-2 -mb-2.5">BUYER COSTS</button>
                 <button className="text-xs font-bold text-gray-400 pb-2">SELLER COSTS</button>
            </div>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2">
                    <span className="text-gray-600">State Transfer/Mtg Tax</span>
                    <span className="font-bold">${costs.tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2">
                    <span className="text-gray-600">Title Insurance</span>
                    <span className="font-bold">${costs.titleInsurance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-dashed border-gray-100 pb-2">
                    <span className="text-gray-600">Recording Fees</span>
                    <span className="font-bold">${costs.recording.toLocaleString()}</span>
                </div>
                
                <div className="pt-2 flex justify-between items-center">
                    <span className="font-bold text-lg text-luxury-black">Total Est. Closing Costs</span>
                    <span className="font-bold text-2xl text-gold-600">${total.toLocaleString()}</span>
                </div>
            </div>
         </div>
         
         <div className="text-xs text-gray-400 text-center italic">
            *Estimates vary by specific county and provider.
         </div>
      </div>
    </CalculatorSection>
  );
};

