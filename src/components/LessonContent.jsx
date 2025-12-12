import React from 'react';
import { motion } from 'framer-motion';
import { SECTIONS } from '../data/content';

const LessonContent = () => {
  return (
    // THAY ĐỔI QUAN TRỌNG: Thêm pointer-events-auto ở đây
    <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32 space-y-24 pointer-events-auto">
      {SECTIONS.map((section, index) => (
        <motion.section 
          key={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-3xl bg-slate-800/60 backdrop-blur-md border border-white/10 shadow-xl"
        >
          {/* ... (Phần nội dung bên trong giữ nguyên) ... */}
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-slate-900 rounded-lg text-cyan-400 border border-cyan-500/30">
              <section.icon size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif">{section.title}</h2>
          </div>

          <p className="text-lg text-slate-300 mb-8 leading-relaxed text-justify">{section.content}</p>

          {section.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {section.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-cyan-400 font-bold text-lg">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          {section.details && (
            <ul className="space-y-3 mb-8 pl-4 border-l-2 border-yellow-500/50">
              {section.details.map((detail, idx) => (
                <li key={idx} className="text-slate-300">{detail}</li>
              ))}
            </ul>
          )}
          
          {section.actionPlan && (
             <div className="grid gap-4">
               {section.actionPlan.map((action, idx) => (
                 <div key={idx} className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="font-bold text-yellow-400 mb-1">{action.title}</div>
                    <div className="text-slate-400 text-sm">{action.desc}</div>
                 </div>
               ))}
             </div>
          )}

          {section.highlight && (
            <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20 text-yellow-200 italic text-center">
              "{section.highlight}"
            </div>
          )}
        </motion.section>
      ))}

      <footer className="text-center text-slate-500 text-sm pt-20 pb-10">
        <p>© 2025 Dự án Nhóm CQ14 - Kinh Tế Chính Trị Mác - Lênin</p>
      </footer>
    </div>
  );
};

export default LessonContent;