import React from 'react';
import Globe3D from './components/Globe3D';
import HeroOverlay from './components/HeroOverlay';
import VietnamMap from './components/VietnamMap'; 
import VideoSection from './components/VideoSection';
import LessonContent from './components/LessonContent';
import Appendix from './components/Appendix';

function App() {
  return (
    // 1. THÊM class: bg-grid-pattern
    <div className="relative min-h-screen font-sans text-slate-200 bg-[#0B1120] selection:bg-yellow-600 selection:text-white overflow-x-hidden">
      
      {/* 2. THÊM: Lớp lưới toạ độ phủ lên toàn trang */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern"></div>

      <div className="fixed inset-0 z-0 pointer-events-none">
         <Globe3D onPointClick={() => {}} /> 
      </div>

      <div className="relative z-10">
        <HeroOverlay />
        <VietnamMap />
        <VideoSection />
        <LessonContent />
        <Appendix />
        
        {/* 3. THÊM: Footer phong cách mới */}
        <footer className="border-t border-white/10 bg-black/80 backdrop-blur-md py-8 text-center mt-20">
            <p className="font-serif text-yellow-500/60 tracking-widest text-sm uppercase">Giáo trình kinh tế chính trị Mác - Lênin</p>
            <p className="text-slate-500 text-xs mt-2">© 2025 Dự án Nhóm 9 - CQ14</p>
        </footer>
      </div>
    </div>
  );
}

export default App;