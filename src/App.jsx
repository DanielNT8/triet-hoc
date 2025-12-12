import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Globe3D from './components/Globe3D';
import HeroOverlay from './components/HeroOverlay';
import PointPopup from './components/PointPopup';
import LessonContent from './components/LessonContent';

function App() {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isUIVisible, setIsUIVisible] = useState(true);

  return (
    // THAY ĐỔI QUAN TRỌNG: pointer-events-none ở div cha
    <div className="relative min-h-screen font-sans text-slate-200 pointer-events-none">
      
      {/* Nút bấm cần pointer-events-auto để click được */}
      <button
        onClick={() => setIsUIVisible(!isUIVisible)}
        className="fixed top-6 left-6 z-50 pointer-events-auto flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-md border border-white/10 rounded-full hover:bg-slate-700 transition-all shadow-lg group cursor-pointer"
      >
        {isUIVisible ? <EyeOff size={20} className="text-slate-400 group-hover:text-white"/> : <Eye size={20} className="text-yellow-400"/>}
        <span className={`text-sm font-bold ${isUIVisible ? 'text-slate-400 group-hover:text-white' : 'text-yellow-400'}`}>
          {isUIVisible ? 'Ẩn Giao Diện' : 'Xem Bài Học'}
        </span>
      </button>

      {/* Globe3D tự xử lý pointer-events bên trong nó rồi */}
      <Globe3D onPointClick={(point) => {
        setSelectedPoint(point);
        setIsUIVisible(true);
      }} />

      <PointPopup 
        selectedPoint={selectedPoint} 
        onClose={() => setSelectedPoint(null)} 
      />

      {/* Container chứa nội dung chính */}
      <div 
        className={`relative z-10 transition-opacity duration-700 ease-in-out ${isUIVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <HeroOverlay />
        {/* LessonContent cần thêm prop hoặc wrapper để click được văn bản */}
        <LessonContent />
      </div>

    </div>
  );
}

export default App;