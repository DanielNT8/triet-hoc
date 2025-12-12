import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Dùng export default function ngay đầu dòng
export default function PointPopup({ selectedPoint, onClose }) {
  return (
    <AnimatePresence>
      {selectedPoint && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="fixed top-24 right-4 md:right-10 z-50 w-full max-w-sm pointer-events-auto px-4"
        >
          <div className="bg-slate-800/90 backdrop-blur-md border border-yellow-500/30 p-6 rounded-2xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-yellow-500"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold text-yellow-400 mb-3 font-serif">
              {selectedPoint.name}
            </h3>

            <p className="text-slate-200 leading-relaxed text-sm">
              {selectedPoint.desc}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}