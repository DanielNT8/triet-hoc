import React from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from '../data/content';

const LessonContent = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32 space-y-24 pointer-events-auto mt-20">
      
      {/* Tiêu đề phân cách */}
      <div className="flex items-center gap-4 justify-center mb-10 opacity-70">
        <div className="h-[2px] w-20 bg-yellow-400"></div>
        <span className="md:text-4xl text-yellow-400 font-serif tracking-widest text-sm uppercase">Nội Dung Nghiên Cứu</span>
        <div className="h-[2px] w-20 bg-yellow-400"></div>
      </div>

      {SECTIONS.map((section, index) => (
        <motion.section 
          key={section.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          // Đổi style: Viền trái vàng đậm, nền tối, hiệu ứng kính
          className="relative p-8 md:p-12 rounded-r-2xl border-l-4 border-yellow-600 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden group"
        >
          {/* Họa tiết trang trí nền (số thứ tự mờ) */}
          <div className="absolute -right-4 -top-0 text-[120px] font-serif font-black text-white/5 select-none z-0 group-hover:text-yellow-500/10 transition-colors duration-700">
            {index + 1}
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg text-white shadow-lg">
                <section.icon size={28} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 font-serif border-b border-white/10 pb-2 w-full">
                {section.title}
              </h2>
            </div>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed text-justify font-light">
              {section.content}
            </p>

            {/* Phần Action Plan / Details được đóng khung như tài liệu */}
            {(section.details || section.actionPlan) && (
              <div className="bg-black/30 p-6 rounded-xl border border-white/5 space-y-4">
                {section.details && (
                  <ul className="space-y-3">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300 text-sm md:text-base">
                        <span className="text-yellow-500 mt-1">▸</span> 
                        <span className="text-justify">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {section.actionPlan && (
                   <div className="grid gap-4 md:grid-cols-2">
                     {section.actionPlan.map((action, idx) => (
                       <div key={idx} className="bg-white/5 p-4 rounded border border-white/5 hover:border-yellow-500/30 transition-colors">
                         <div className="font-bold text-yellow-400 mb-2 text-sm uppercase tracking-wide">{action.title}</div>
                         <div className="text-slate-400 text-xs text-justify">{action.desc}</div>
                       </div>
                     ))}
                   </div>
                )}
              </div>
            )}

            {section.stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {section.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded border-t-2 border-cyan-500 text-center">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">{stat.label}</div>
                    <div className="text-cyan-400 font-bold text-lg">{stat.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default LessonContent;