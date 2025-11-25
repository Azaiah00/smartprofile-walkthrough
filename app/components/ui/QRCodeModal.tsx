import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Smartphone, Share2, ChevronRight, ChevronLeft, Mail, Link as LinkIcon, Instagram } from 'lucide-react';

const BusinessCardSlide = () => (
  <div className="bg-luxury-black rounded-2xl shadow-2xl overflow-hidden border border-gold-500/30 aspect-[1.58/1] relative group perspective-1000 w-full">
    {/* Front Design */}
    <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-bl-full" />
        
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-2xl font-serif font-bold text-white">Fred Sales</h3>
                <p className="text-gold-500 text-sm uppercase tracking-widest">Real Advancement</p>
            </div>
            <QrCode className="w-8 h-8 text-gold-500 opacity-50" />
        </div>

        <div className="flex gap-8 items-end">
            <div className="bg-white p-3 rounded-xl shadow-lg border-2 border-gold-500 transform transition-transform hover:scale-105 cursor-pointer">
                <QrCode className="w-24 h-24 text-black" />
            </div>
            <div className="pb-2">
                <p className="text-gray-400 text-xs mb-1">Scan to view profile</p>
                <div className="flex gap-2 text-white">
                    <Smartphone className="w-4 h-4" />
                    <Share2 className="w-4 h-4" />
                </div>
            </div>
        </div>
    </div>
    {/* Shine Effect */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

const InstagramSlide = () => (
  <div className="bg-black rounded-[3rem] shadow-2xl overflow-hidden border border-gray-800 aspect-[9/19] w-full max-w-[300px] mx-auto relative flex flex-col">
    {/* Status Bar */}
    <div className="h-8 bg-black flex justify-between items-center px-6 pt-2">
        <span className="text-white text-xs font-bold">9:41</span>
        <div className="flex gap-1">
            <div className="w-4 h-2 bg-white rounded-sm"></div>
        </div>
    </div>

    {/* Header */}
    <div className="bg-black p-4 flex items-center gap-4 border-b border-gray-800">
        <ChevronLeft className="text-white w-6 h-6" />
        <div className="flex-1">
            <h4 className="text-white font-bold text-sm">fred_sales_realtor</h4>
        </div>
        <div className="w-6" />
    </div>

    {/* Profile Area */}
    <div className="p-4 text-white">
        <div className="flex justify-between items-center mb-4">
            <div className="w-20 h-20 rounded-full border-2 border-gray-800 overflow-hidden">
                <img src="/fred-sales.jpg" className="w-full h-full object-cover" alt="Profile" />
            </div>
            <div className="flex gap-4 text-center flex-1 justify-center">
                <div>
                    <div className="font-bold">1.2K</div>
                    <div className="text-xs text-gray-400">Posts</div>
                </div>
                <div>
                    <div className="font-bold">15.4K</div>
                    <div className="text-xs text-gray-400">Followers</div>
                </div>
                <div>
                    <div className="font-bold">892</div>
                    <div className="text-xs text-gray-400">Following</div>
                </div>
            </div>
        </div>
        <div className="mb-4">
            <h3 className="font-bold">Fred Sales | Luxury Real Estate</h3>
            <p className="text-sm text-gray-300">Helping you find your dream home in the DMV area. <br />Founder @RealAdvancement</p>
            <p className="text-sm text-blue-400 mt-1">smartprofile.io/fredsales</p>
        </div>
        
        <div className="flex gap-2 mb-6">
            <button className="flex-1 bg-blue-500 text-white py-1.5 rounded-lg text-sm font-bold">Follow</button>
            <button className="flex-1 bg-gray-800 text-white py-1.5 rounded-lg text-sm font-bold">Message</button>
        </div>
    </div>

    {/* Link Pop-up Sheet */}
    <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-[#1C1C1E] rounded-t-3xl p-6 pb-10 shadow-2xl z-20 border-t border-gray-700"
    >
        <div className="w-12 h-1 bg-gray-600 rounded-full mx-auto mb-6" />
        <h3 className="text-white font-bold text-center mb-6 text-lg">Links</h3>
        
        <div className="space-y-3">
            <div className="bg-[#2C2C2E] p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-[#3A3A3C] transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <span className="text-black font-bold text-xs">SP</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-sm">View SmartProfile</span>
                        <span className="text-gray-400 text-xs">smartprofile.io/fredsales</span>
                    </div>
                </div>
                <Share2 className="text-gray-500 w-4 h-4" />
            </div>
            
            <div className="bg-[#2C2C2E] p-4 rounded-xl flex items-center justify-between opacity-50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                       <Globe className="w-5 h-5 text-gray-400" />
                    </div>
                    <span className="text-white font-bold text-sm">Latest Listing</span>
                </div>
            </div>
        </div>
    </motion.div>
    
    {/* Dim Background */}
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="absolute inset-0 bg-black z-10 pointer-events-none"
    />
  </div>
);

const EmailSignatureSlide = () => (
  <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 w-full max-w-lg">
      <div className="flex gap-4 items-start border-b border-gray-100 pb-6 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 flex-shrink-0">
              <img src="/fred-sales.jpg" className="w-full h-full object-cover" alt="Profile" />
          </div>
          <div>
              <h3 className="text-lg font-serif font-bold text-gray-900">Fred Sales</h3>
              <p className="text-gray-600 text-sm">Founder | Real Advancement</p>
              <div className="mt-2 space-y-1 text-xs text-gray-500">
                  <p className="flex items-center gap-2"><Smartphone className="w-3 h-3" /> (555) 123-4567</p>
                  <p className="flex items-center gap-2"><Mail className="w-3 h-3" /> fred@realadvancement.com</p>
              </div>
          </div>
      </div>
      
      {/* The SmartProfile Banner */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="bg-luxury-black rounded-lg p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow group"
      >
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold-500 rounded flex items-center justify-center text-black font-bold">SP</div>
              <div>
                  <p className="text-gold-500 text-xs font-bold uppercase tracking-wider">View My Full Profile</p>
                  <p className="text-white text-sm font-medium">Calculators, Guides & Listings</p>
              </div>
          </div>
          <div className="bg-white/10 p-2 rounded-full group-hover:bg-gold-500 group-hover:text-black transition-colors text-white">
              <ChevronRight className="w-4 h-4" />
          </div>
      </motion.div>
  </div>
);

const slides = [
    { component: BusinessCardSlide, title: "Digital Business Card", desc: "Instant sharing via Text, Email, or QR." },
    { component: InstagramSlide, title: "Social Bio Link", desc: "Seamless integration with Instagram & TikTok." },
    { component: EmailSignatureSlide, title: "Email Signature", desc: "Professional banner for every email you send." }
];

import { Globe } from 'lucide-react';

export const QRCodeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentSlide, setCurrentStep] = useState(0);

  const nextSlide = () => setCurrentStep((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentStep((prev) => (prev - 1 + slides.length) % slides.length);

  const CurrentComponent = slides[currentSlide].component;

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
            className="relative z-10 w-full max-w-4xl flex flex-col items-center"
          >
            {/* Controls */}
            <div className="flex items-center justify-between w-full mb-8 px-4 md:px-12">
                <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-all">
                    <ChevronLeft className="w-8 h-8" />
                </button>
                
                <div className="text-center">
                    <motion.h3 
                        key={currentSlide}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-serif font-bold text-white mb-1"
                    >
                        {slides[currentSlide].title}
                    </motion.h3>
                    <motion.p 
                        key={`desc-${currentSlide}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gold-500 text-sm"
                    >
                        {slides[currentSlide].desc}
                    </motion.p>
                </div>

                <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-black text-white transition-all">
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>

            {/* Slide Content */}
            <div className="h-[500px] w-full flex items-center justify-center">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", bounce: 0.2 }}
                    className="w-full flex justify-center"
                >
                    <CurrentComponent />
                </motion.div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-8">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? 'bg-gold-500 w-6' : 'bg-gray-600'}`}
                    />
                ))}
            </div>

            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute -top-12 right-4 md:right-0 text-gray-400 hover:text-white transition-colors"
            >
                <X className="w-8 h-8" />
            </button>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
