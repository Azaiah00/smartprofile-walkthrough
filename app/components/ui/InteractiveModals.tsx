import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Calculator, DollarSign, TrendingUp, MessageSquare, BookOpen, Home, ArrowRight, Phone, Mail } from 'lucide-react';

// Presentation Tool Modal
export const PresentationToolModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [salePrice, setSalePrice] = useState(500000);
  const commission = salePrice * 0.06;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-luxury-black text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold">Presentation Tool</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg">During Listing Appointment</h4>
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-gold-500/20">
                    <label className="block text-sm font-bold mb-2">Estimated Sale Price</label>
                    <input
                      type="number"
                      value={salePrice}
                      onChange={(e) => setSalePrice(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none text-lg font-bold"
                    />
                    <input
                      type="range"
                      min="200000"
                      max="2000000"
                      step="10000"
                      value={salePrice}
                      onChange={(e) => setSalePrice(Number(e.target.value))}
                      className="w-full mt-4 accent-gold-500"
                    />
                  </div>
                </div>
                
                <div className="bg-luxury-black rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-gold-500" />
                    Real-Time Calculation
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sale Price</span>
                      <span className="font-bold">${salePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Commission (6%)</span>
                      <span className="font-bold text-gold-500">${commission.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-700 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg">Your Earnings</span>
                        <span className="text-2xl font-bold text-gold-500">${(commission / 2).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Deal-Closing Tool Modal
export const DealClosingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [scenario, setScenario] = useState<'current' | 'optimized'>('current');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-luxury-black text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold">Deal-Closing Tool</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setScenario('current')}
                  className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                    scenario === 'current' ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Current Offer
                </button>
                <button
                  onClick={() => setScenario('optimized')}
                  className={`px-6 py-2 rounded-lg font-bold transition-colors ${
                    scenario === 'optimized' ? 'bg-gold-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  Optimized Scenario
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  key={scenario}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200"
                >
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-gold-500" />
                    Net Sheet Comparison
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Sale Price</span>
                      <span className="font-bold">${scenario === 'current' ? '475,000' : '495,000'}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Commission</span>
                      <span>-${scenario === 'current' ? '28,500' : '29,700'}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Closing Costs</span>
                      <span>-${scenario === 'current' ? '9,500' : '9,900'}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Net Proceeds</span>
                        <span className={`text-2xl font-bold ${scenario === 'optimized' ? 'text-green-600' : 'text-gray-900'}`}>
                          ${scenario === 'current' ? '437,000' : '455,400'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="bg-luxury-black rounded-xl p-6 text-white">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-gold-500" />
                    Impact Analysis
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Additional Net Proceeds</p>
                      <p className="text-3xl font-bold text-gold-500">+$18,400</p>
                    </div>
                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20">
                      <p className="text-sm text-gray-300">
                        By optimizing the listing price and staging, you increase your net proceeds by <strong className="text-gold-500">$18,400</strong> while still closing faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Client Communication Modal
export const ClientCommunicationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(0);

  const steps = [
    { type: 'text', content: 'Hey Sarah! Here\'s the Net Sheet calculator for your property: smartprofile.io/fredsales/seller#net-sheet' },
    { type: 'email', subject: 'Buyer Resources', content: 'I\'ve shared the pre-approval guide and mortgage calculator with you. Check it out here: smartprofile.io/fredsales/buyer' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-luxury-black text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold">Client Communication</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="p-2 rounded-full bg-white/10 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
                  disabled={step === steps.length - 1}
                  className="p-2 rounded-full bg-white/10 hover:bg-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={onClose} className="text-gray-400 hover:text-white ml-2">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {steps[step].type === 'text' ? (
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="w-6 h-6 text-gold-500" />
                        <h4 className="font-bold">Text Message</h4>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white font-bold text-sm">FS</div>
                          <span className="font-bold text-sm">Fred Sales</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{steps[step].content}</p>
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-xs text-blue-600 font-medium">🔗 Link Preview</p>
                          <p className="text-xs text-blue-800 mt-1">Net Sheet Calculator</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Mail className="w-6 h-6 text-gold-500" />
                        <h4 className="font-bold">Email</h4>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="border-b pb-3 mb-3">
                          <p className="text-xs text-gray-500">To: sarah@email.com</p>
                          <p className="text-xs text-gray-500">From: fred@realadvancement.com</p>
                          <p className="font-bold text-sm mt-1">Subject: {steps[step].subject}</p>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{steps[step].content}</p>
                        <div className="p-3 bg-gold-50 rounded-lg border border-gold-200">
                          <p className="text-xs text-gold-600 font-medium">📎 SmartProfile Link</p>
                          <p className="text-xs text-gold-800 mt-1">Buyer Resources & Calculators</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Educational Resource Modal
export const EducationalResourceModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const sections = [
    { title: 'Pre-Approval vs Pre-Qualification', icon: '📋' },
    { title: 'Understanding Closing Costs', icon: '💰' },
    { title: 'First-Time Buyer Guide', icon: '🏠' },
    { title: 'Market Trends & Timing', icon: '📈' },
    { title: 'Negotiation Strategies', icon: '🤝' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-luxury-black text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-serif font-bold">Educational Resource</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-gold-500" />
                <h4 className="font-bold text-lg">Comprehensive Guides & FAQs</h4>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 max-h-[500px] overflow-y-auto">
                <div className="space-y-4">
                  {sections.map((section, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-gold-500 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{section.icon}</span>
                        <div className="flex-1">
                          <h5 className="font-bold text-gray-900">{section.title}</h5>
                          <p className="text-xs text-gray-500 mt-1">Click to read full guide →</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold-500" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                All guides are accessible 24/7 and updated with current market data
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Primary Website Modal
export const PrimaryWebsiteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'listings' | 'about'>('home');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-luxury-black text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Home className="w-6 h-6 text-gold-500" />
                <h3 className="text-xl font-serif font-bold">SmartProfile Website</h3>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="bg-gray-100 border-b flex gap-2 p-2">
              {['home', 'listings', 'about'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-colors ${
                    activeTab === tab ? 'bg-gold-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <div className="p-8 bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {activeTab === 'home' && (
                    <div>
                      <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-8 text-white mb-6">
                        <h4 className="text-3xl font-serif font-bold mb-2">Fred Sales</h4>
                        <p className="text-gold-100">Luxury Real Estate Specialist</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-gold-600">$120M+</p>
                          <p className="text-xs text-gray-500">Sold Volume</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-gold-600">250+</p>
                          <p className="text-xs text-gray-500">Happy Clients</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <p className="text-2xl font-bold text-gold-600">7</p>
                          <p className="text-xs text-gray-500">Years Experience</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'listings' && (
                    <div>
                      <h4 className="text-2xl font-bold mb-4">Live Listings (IDX Integration)</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                            <div className="p-4">
                              <p className="font-bold">123 Main Street</p>
                              <p className="text-sm text-gray-600">$495,000 • 3 bed • 2 bath</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'about' && (
                    <div>
                      <h4 className="text-2xl font-bold mb-4">About Fred Sales</h4>
                      <div className="space-y-4 text-gray-700">
                        <p>With over 7 years of experience in luxury real estate, I've helped hundreds of families find their dream homes and maximize their property values.</p>
                        <div className="bg-gold-50 rounded-lg p-4 border border-gold-200">
                          <p className="font-bold text-gold-800 mb-2">Interactive Tools Available:</p>
                          <ul className="text-sm text-gold-700 space-y-1">
                            <li>• Net Sheet Calculator</li>
                            <li>• Mortgage Calculator</li>
                            <li>• Closing Cost Calculator</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

