import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Smartphone, Share2 } from 'lucide-react';

export const QRCodeModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateX: -90 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative z-10 w-full max-w-md"
          >
            {/* Business Card Visual */}
            <div className="bg-luxury-black rounded-2xl shadow-2xl overflow-hidden border border-gold-500/30 aspect-[1.58/1] relative group perspective-1000">
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

            {/* Close Button */}
            <button 
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-gold-500 transition-colors"
            >
                <X className="w-8 h-8" />
            </button>
            
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                delay={0.3}
                className="text-center text-white mt-6 font-light"
            >
                Instant sharing via Text, Email, or QR. <br />
                <span className="text-gold-500">Your digital business card, evolved.</span>
            </motion.p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

