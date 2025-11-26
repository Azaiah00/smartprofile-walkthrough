import React, { useState } from 'react';
import { CalculatorSection } from './CalculatorSection';
import { Calendar, Flag, Camera, Paintbrush, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SmartSellReverseTimeline = () => {
  const [closingDate, setClosingDate] = useState<string>('');

  const calculateTimeline = (dateStr: string) => {
    if (!dateStr) return [];
    const target = new Date(dateStr);
    
    const addDays = (date: Date, days: number) => {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    };

    const formatDate = (date: Date) => {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return [
      { 
        label: 'Strategy Consultation', 
        date: formatDate(addDays(target, -65)), 
        icon: ClipboardCheck,
        desc: 'Initial meeting to set price & game plan.'
      },
      { 
        label: 'Repairs & Deep Clean', 
        date: formatDate(addDays(target, -60)), 
        icon: Paintbrush,
        desc: 'Decluttering and fixing minor issues.'
      },
      { 
        label: 'Staging & Final Prep', 
        date: formatDate(addDays(target, -55)), 
        icon: Flag,
        desc: 'Setting the stage for buyers.'
      },
      { 
        label: 'Professional Photography', 
        date: formatDate(addDays(target, -50)), 
        icon: Camera,
        desc: 'Capturing your home in its best light.'
      },
      { 
        label: 'LISTING DAY (Go Live)', 
        date: formatDate(addDays(target, -45)), 
        icon: Calendar,
        isHighlight: true,
        desc: 'Your home hits the market!'
      },
      { 
        label: 'Under Contract (Est.)', 
        date: formatDate(addDays(target, -30)), 
        icon: Flag,
        desc: 'Accepting the best offer.'
      },
      { 
        label: 'Target Closing Date', 
        date: formatDate(target), 
        icon: Flag,
        isHighlight: true,
        desc: 'Keys handed over, funds transferred.'
      }
    ];
  };

  const timeline = calculateTimeline(closingDate);

  return (
    <CalculatorSection
      id="smart-sell-timeline"
      title="Smart-Sell Reverse Timeline"
      subtitle="Your Roadmap from 'Thinking' to 'Sold'"
      description="Instead of asking 'When do you want to list?', we ask 'When do you want to move?' This logic-based calendar works backward from your target closing date to generate a realistic, step-by-step checklist, reducing overwhelm and managing expectations."
      icon={Calendar}
      isDark={true}
      features={[
        "Generates a custom step-by-step schedule",
        "Works backward from your goal date",
        "Visualizes the prep time needed for top dollar",
        "Exportable plan for your fridge",
        "Downloadable (PDF) and printable"
      ]}
    >
      <div className="space-y-6 font-sans text-luxury-black h-full flex flex-col">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            When do you want to close/move?
          </label>
          <input 
            type="date" 
            value={closingDate}
            onChange={(e) => setClosingDate(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none transition-all text-gray-700"
          />
          {!closingDate && (
            <p className="text-sm text-gray-500 mt-2 italic">
              Select a date to see your custom roadmap.
            </p>
          )}
        </div>

        <div className="flex-grow overflow-y-auto pr-2 space-y-0 relative">
            {/* Vertical Line */}
            {timeline.length > 0 && (
                 <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-200 z-0" />
            )}

            <AnimatePresence>
                {timeline.map((item, index) => (
                    <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative z-10 flex items-start gap-4 pb-6 last:pb-0 ${item.isHighlight ? 'mt-2 mb-2' : ''}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border-4 border-white ${item.isHighlight ? 'bg-gold-500 text-white' : 'bg-white text-gold-600 border-gray-100'}`}>
                            <item.icon className="w-6 h-6" />
                        </div>
                        <div className={`flex-grow p-4 rounded-xl border ${item.isHighlight ? 'bg-gold-50 border-gold-200' : 'bg-white border-gray-100'}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className={`font-bold text-sm ${item.isHighlight ? 'text-luxury-black' : 'text-gray-700'}`}>
                                    {item.label}
                                </h4>
                                <span className={`text-xs font-bold uppercase tracking-wider ${item.isHighlight ? 'text-gold-600' : 'text-gray-400'}`}>
                                    {item.date}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
      </div>
    </CalculatorSection>
  );
};

