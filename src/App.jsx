// src/App.jsx
import React from 'react';
import Globe3D from './components/Globe3D';
import HeroOverlay from './components/HeroOverlay';
import VietnamMap from './components/VietnamMap'; 
import VideoSection from './components/VideoSection';
import LessonContent from './components/LessonContent';

function App() {
  return (
    <div className="relative min-h-screen font-sans text-slate-200 bg-slate-900 selection:bg-yellow-500 selection:text-black">
      
      {/* Nền Quả địa cầu */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <Globe3D onPointClick={() => {}} /> 
      </div>

      <div className="relative z-10">
        <HeroOverlay />
        
        {/* Bản đồ Việt Nam */}
        <VietnamMap />
        
        {/* --- 2. Thêm VideoSection vào đây --- */}
        <VideoSection />

        <LessonContent />
      </div>
    </div>
  );
}

export default App;