// src/components/VideoSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, MonitorPlay } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="relative z-10 w-full py-20 px-4 md:px-8 bg-slate-900/95 backdrop-blur-sm border-t border-white/5">
      
      <div className="max-w-6xl mx-auto">
        
        {/* 1. Header: Tiêu đề Video */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/20 mb-4"
          >
            <Youtube size={16} /> Video Nổi Bật
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
          >
            Hội nhập kinh tế trong không gian văn hóa toàn cầu: 
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Giữ bản sắc hay đánh mất chính mình?
            </span>
          </motion.h2>
          
        </div>

        {/* 2. Khung Video (Cinematic Frame) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-yellow-600/30 group"
        >
          {/* Hiệu ứng nền sáng sau video (Glow effect) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-full h-full bg-slate-900 rounded-2xl overflow-hidden">
    
            {/* --- CÁCH 2: DÙNG FILE VIDEO RIÊNG (Nếu bạn có file mp4) ---        
            */}
            <video 
              className="w-full h-full object-cover"
              controls 
              poster="/video-thumbnail.png" // Ảnh bìa video
            >
              <source src="/Group9.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video> 
           
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoSection;