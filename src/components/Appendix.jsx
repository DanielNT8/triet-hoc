// src/components/Appendix.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';

const Appendix = () => {
  // Thay link Google Docs của bạn vào đây
  const DOC_LINK = "https://docs.google.com/spreadsheets/d/10QO4VudHMK7PbFrXOxLjJ86FMJJ80i9IDqnwZfCD5kg/edit?usp=sharing"; 

  return (
    <section className="relative z-10 w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Đường kẻ trang trí */}
        <div className="flex items-center gap-4 justify-center mb-8 opacity-50">
          <div className="h-[1px] w-12 bg-yellow-600"></div>
          <div className="w-2 h-2 rotate-45 bg-yellow-600"></div>
          <div className="h-[1px] w-12 bg-yellow-600"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/80 backdrop-blur-md border border-yellow-600/30 p-8 rounded-2xl shadow-2xl relative group overflow-hidden"
        >
          {/* Họa tiết nền chéo */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(234,179,8,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] pointer-events-none"></div>

          <h3 className="text-2xl font-serif font-bold text-white mb-2 pb-5 pt-3">
            PHỤ LỤC & TÀI LIỆU NGHIÊN CỨU
          </h3>

          {/* NÚT BẤM LIÊN KẾT */}
          <a 
            href={DOC_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-slate-900 font-bold uppercase tracking-widest rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]"
          >
            <FileText size={20} />
            <span>Xem Văn Bản Chi Tiết</span>
            <ExternalLink size={16} className="opacity-70" />
          </a>


        </motion.div>
      </div>
    </section>
  );
};

export default Appendix;