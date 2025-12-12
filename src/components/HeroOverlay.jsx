// src/components/HeroOverlay.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown } from 'lucide-react';

const HeroOverlay = () => {
  return (
    // pointer-events-none ở cha để click xuyên qua phần trống
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pointer-events-none">
      
      {/* pointer-events-auto ở con để vẫn bôi đen được chữ */}
      <div className="pointer-events-auto max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-primary text-xs font-bold uppercase tracking-[0.2em]"
        >
          <BookOpen size={14} /> Bài tập nhóm CQ14
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 drop-shadow-xl"
        >
          Hội Nhập <br /> <span className="text-secondary">Kinh Tế Quốc Tế</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-300 mx-auto mb-10 leading-relaxed font-light"
        >
          "Hòa nhập nhưng không hòa tan". Làm thế nào để Việt Nam giữ vững bản sắc trước làn sóng văn hóa ngoại nhập?
        </motion.p>
      </div>

      {/* Mũi tên chỉ xuống */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 opacity-70"
      >
        <ChevronDown size={32} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroOverlay;