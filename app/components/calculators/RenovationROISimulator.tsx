import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { Hammer, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const UPGRADES = [
  { id: 'kitchen', label: 'Minor Kitchen Update (Hardware, Paint)', score: 15 },
  { id: 'paint', label: 'Fresh Neutral Paint', score: 20 },
  { id: 'flooring', label: 'Refinish/Replace Flooring', score: 15 },
  { id: 'curb_appeal', label: 'Curb Appeal (Landscaping, Door)', score: 10 },
  { id: 'lighting', label: 'Modern Lighting Fixtures', score: 10 },
  { id: 'bathroom', label: 'Bathroom Vanity/Mirror Update', score: 10 },
  { id: 'declutter', label: 'Professional Decluttering', score: 10 },
  { id: 'cleaning', label: 'Deep Cleaning', score: 10 },
];

export const RenovationROISimulator = () => {
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>([]);

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const totalScore = selectedUpgrades.reduce((acc, id) => {
    const upgrade = UPGRADES.find(u => u.id === id);
    return acc + (upgrade?.score || 0);
  }, 0);

  const getReturnLabel = (score: number) => {
    if (score >= 80) return { label: 'High', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 50) return { label: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Low', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const returnStatus = getReturnLabel(totalScore);

  return (
    <CalculatorSection
      id="renovation-roi"
      title="Renovation ROI Simulator"
      subtitle="Smart Improvements, Better Returns"
      description="Sellers are often paralyzed by: 'Should I redo the kitchen before I list?' This visual tool helps users select potential upgrades and see a 'Likely Return' rating based on local market trends, avoiding specific dollar promises while guiding strategic decisions."
      icon={Hammer}
      isDark={false}
      features={[
        "Interactive upgrade checklist",
        "Visual 'Marketability Score' progress bar",
        "Likely Return rating (High/Medium/Low)",
        "Helps prioritize pre-listing budget"
      ]}
    >
      <div className="space-y-8 font-sans text-luxury-black">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-luxury-black">Select Potential Upgrades</h3>
          <div className="grid grid-cols-1 gap-3">
            {UPGRADES.map((upgrade) => (
              <div 
                key={upgrade.id}
                onClick={() => toggleUpgrade(upgrade.id)}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                  selectedUpgrades.includes(upgrade.id) 
                    ? 'bg-gold-50 border-gold-500 shadow-sm' 
                    : 'bg-white border-gray-200 hover:border-gold-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                  selectedUpgrades.includes(upgrade.id) ? 'bg-gold-500 border-gold-500' : 'border-gray-300'
                }`}>
                  {selectedUpgrades.includes(upgrade.id) && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                </div>
                <span className={`text-sm font-medium ${selectedUpgrades.includes(upgrade.id) ? 'text-luxury-black' : 'text-gray-600'}`}>
                  {upgrade.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-luxury-black rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-gold-500" />
            <h4 className="font-bold text-lg">Projected Impact</h4>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Marketability Score</span>
                <span className="text-gold-500 font-bold">{totalScore}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gold-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${totalScore}%` }}
                  transition={{ type: "spring", stiffness: 50 }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-800">
              <span className="text-sm text-gray-400">Likely ROI Rating</span>
              <span className={`px-4 py-1 rounded-full text-sm font-bold ${returnStatus.bg} ${returnStatus.color}`}>
                {returnStatus.label} Return
              </span>
            </div>
          </div>
        </div>
      </div>
    </CalculatorSection>
  );
};

