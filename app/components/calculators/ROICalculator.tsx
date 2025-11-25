import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const ImprovementOption = ({ label, cost, roi, selected, onClick }: { label: string, cost: number, roi: number, selected: boolean, onClick: () => void }) => (
    <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all duration-200 ${selected ? 'bg-gold-50 border-gold-500 ring-1 ring-gold-500' : 'bg-white border-gray-200 hover:border-gold-300'}`}
    >
        <div className="text-left">
            <div className="font-bold text-luxury-black">{label}</div>
            <div className="text-xs text-gray-500">Avg. Cost: ${cost.toLocaleString()}</div>
        </div>
        <div className="text-right">
             <div className="text-sm font-bold text-green-600">+{roi}% ROI</div>
             <div className="text-xs text-gray-400">Return</div>
        </div>
    </button>
);

export const ROICalculator = () => {
  const [selectedImprovement, setSelectedImprovement] = useState(0);
  
  const improvements = [
      { label: "Minor Kitchen Remodel", cost: 26000, roi: 85, valueAdd: 22100 },
      { label: "Garage Door Replacement", cost: 3900, roi: 93, valueAdd: 3627 },
      { label: "Manufactured Stone Veneer", cost: 10000, roi: 91, valueAdd: 9100 },
      { label: "Wood Deck Addition", cost: 17000, roi: 65, valueAdd: 11050 },
  ];

  const current = improvements[selectedImprovement];

  return (
    <CalculatorSection
      id="roi-calc"
      title="Home Improvement ROI"
      subtitle="Invest Smart, Sell High"
      description="Help your sellers decide where to spend their pre-listing budget. This data-backed tool compares the cost vs. value of common renovations, positioning you as a strategic advisor who maximizes their profit."
      icon={TrendingUp}
      features={[
        "Compares multiple improvement types",
        "Visual ROI indicators",
        "Based on regional market data",
        "Helps prevent over-improvement"
      ]}
    >
      <div className="space-y-6">
         <div className="grid gap-3">
            {improvements.map((imp, idx) => (
                <ImprovementOption 
                    key={idx} 
                    {...imp} 
                    selected={selectedImprovement === idx} 
                    onClick={() => setSelectedImprovement(idx)}
                />
            ))}
         </div>

         <div className="bg-luxury-charcoal rounded-xl p-6 text-white mt-6">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-gold-500 font-bold text-sm uppercase tracking-wider">Projected Outcome</h4>
                    <div className="text-2xl font-serif font-bold mt-1">{current.label}</div>
                </div>
                <ArrowUpRight className="text-green-400 w-8 h-8" />
            </div>
            
            <div className="flex gap-4">
                <div className="flex-1 p-3 bg-white/10 rounded-lg">
                    <div className="text-xs text-gray-400 uppercase">Cost</div>
                    <div className="text-lg font-bold">${current.cost.toLocaleString()}</div>
                </div>
                <div className="flex-1 p-3 bg-gold-500/20 border border-gold-500/30 rounded-lg">
                    <div className="text-xs text-gold-400 uppercase">Value Added</div>
                    <div className="text-lg font-bold text-gold-400">+${current.valueAdd.toLocaleString()}</div>
                </div>
            </div>
         </div>
      </div>
    </CalculatorSection>
  );
};

