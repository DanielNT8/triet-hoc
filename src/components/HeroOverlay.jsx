import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronDown, TrendingUp, Globe, Activity } from 'lucide-react';

// Component con: Dải băng chạy chữ tin tức
const NewsTicker = () => (
  <div className="absolute bottom-0 w-full bg-yellow-500/10 border-y border-yellow-500/20 py-2 backdrop-blur-sm overflow-hidden flex z-20">
    <motion.div 
      className="flex gap-12 whitespace-nowrap text-yellow-500/80 text-xs font-mono font-bold uppercase tracking-widest"
      animate={{ x: [0, -1000] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {[...Array(3)].map((_, i) => (
        <React.Fragment key={i}>
          <span className="flex items-center gap-2"><Globe size={12}/> HỘI NHẬP TOÀN CẦU</span>
          <span className="flex items-center gap-2"><TrendingUp size={12}/> PHÁT TRIỂN BỀN VỮNG</span>
          <span className="flex items-center gap-2"><Activity size={12}/> GIỮ GÌN BẢN SẮC</span>
          <span className="flex items-center gap-2">★ NGHỊ QUYẾT ĐẠI HỘI XIII</span>
          <span className="flex items-center gap-2">★ CÔNG NGHIỆP VĂN HÓA 4.0</span>
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const HeroOverlay = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pointer-events-none">
      
      <div className="pointer-events-auto max-w-5xl z-10">
        {/* Badge trang trí kiểu Tem thư/Dấu mộc */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 inline-flex items-center gap-3 px-5 py-2 rounded-sm border-l-4 border-r-4 border-yellow-600 bg-black/40 backdrop-blur-md text-yellow-500 text-xs font-bold uppercase tracking-[0.3em]"
        >
          <BookOpen size={14} /> Bài tập nhóm 9
        </motion.div>
        
        {/* Tiêu đề hiệu ứng Vàng Kim Loại */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif font-black mb-8 leading-tight drop-shadow-2xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-400">
            Hội Nhập 
          </span>
          <span className=" block mt-8 text-gold-gradient drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] pb-2 pt-3 px-4">
            Kinh Tế Quốc Tế
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-300 mx-auto mb-10 max-w-2xl font-light italic border-t border-b border-white/10 py-6"
        >
          "Hòa nhập nhưng không hòa tan". Làm thế nào để Việt Nam giữ vững bản sắc trước làn sóng văn hóa ngoại nhập?
        </motion.p>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-24 opacity-50"
      >
        <ChevronDown size={32} className="text-yellow-500" />
      </motion.div>

      {/* Gọi NewsTicker ở đây */}
      <NewsTicker />
    </section>
  );
};

export default HeroOverlay;