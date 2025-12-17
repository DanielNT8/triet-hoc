// src/components/VietnamMap.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MAP_POINTS, MILESTONES } from '../data/content';
import { MousePointer2, Navigation, Plane, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. CONFIG LABEL CHỮ (CẬP NHẬT: THÊM OFFSET ĐỂ CHỈNH VỊ TRÍ) ---
// Thêm tham số 'offsetY': Giá trị càng lớn thì chữ càng tụt xuống dưới
const createTextLabel = (text, size = '10px', color = '#64748b', weight = 'bold', rotation = 0, offsetY = 0) => {
  return L.divIcon({
    className: 'bg-transparent border-none',
    html: `<div style="
      color: ${color}; font-size: ${size}; font-weight: ${weight}; 
      text-transform: uppercase; text-shadow: 0 1px 3px rgba(0,0,0,0.9); 
      white-space: nowrap; text-align: center; font-family: 'Inter', sans-serif; 
      transform: rotate(${rotation}deg); opacity: 0.9; letter-spacing: 0.5px;
    ">${text}</div>`,
    iconSize: [120, 20], 
    
    // --- MẤU CHỐT SỬA LỖI ĐÈ CHỮ Ở ĐÂY ---
    // [60, 10] là tâm. 
    // Trừ đi offsetY (ví dụ 25) -> [60, -15] -> Điểm neo nằm phía trên -> Icon bị đẩy xuống dưới
    iconAnchor: [60, 10 - offsetY] 
  });
};

const createCustomIcon = (isActive) => {
  const mainColor = isActive ? '#00ff9d' : '#ffaa00'; 
  const coreColor = isActive ? '#ccffeb' : '#ffdd99'; 

  const glowEffect = isActive 
    ? `0 0 5px ${mainColor}, 0 0 15px ${mainColor}, 0 0 30px ${mainColor}` 
    : `0 0 4px ${mainColor}, 0 0 10px ${mainColor}`; 

  return L.divIcon({
    className: 'custom-marker-icon',
    html: `
      <div style="
        position: relative;
        display: flex; align-items: center; justify-content: center; 
        width: 16px; height: 16px; 
        background: radial-gradient(circle, ${coreColor} 20%, ${mainColor} 100%); 
        border-radius: 50%; 
        box-shadow: ${glowEffect}; 
        transition: all 0.3s ease;
      ">
        ${isActive ? `<span style="position: absolute; width: 200%; height: 200%; border-radius: 50%; background: ${mainColor}; opacity: 0.2; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>` : ''}
      </div>
    `,
    iconSize: [16, 16], iconAnchor: [8, 8],
  });
};

const INTERNATIONAL_LABELS = [
  { text: "VIỆT NAM", pos: [19.0, 105.0], color: "#e2e8f0", size: "14px" },
  { text: "TRUNG QUỐC", pos: [35.0, 105.0], color: "#64748b" },
  { text: "NHẬT BẢN", pos: [36.0, 138.0], color: "#64748b" },
  { text: "HÀN QUỐC", pos: [36.5, 127.5], color: "#64748b" },
  { text: "NGA", pos: [62.0, 90.0], color: "#64748b" },
  { text: "KAZAKHSTAN", pos: [48.0, 68.0], color: "#64748b" },
  { text: "THÁI LAN", pos: [15.0, 101.0], color: "#64748b" },
  { text: "MALAYSIA", pos: [4.0, 102.0], color: "#64748b" },
  { text: "BRUNEI", pos: [4.5, 114.7], color: "#64748b" },
  { text: "ÚC", pos: [-25.0, 135.0], color: "#64748b" },
  { text: "THỤY SĨ", pos: [46.8, 8.2], color: "#64748b" },
  { text: "HOA KỲ", pos: [39.0, -98.0], color: "#64748b" },
  { text: "CHILE", pos: [-30.0, -71.0], color: "#64748b" },
  { text: "ANH", pos: [54.0, -2.0], color: "#64748b" },
  { text: "PHÁP", pos: [47.0, 2.0], color: "#64748b" },
  { text: "UAE", pos: [24.0, 54.0], color: "#64748b" },
  { text: "ISRAEL", pos: [31.5, 35.0], color: "#64748b" },
];

const MapController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, { duration: 2.0, easeLinearity: 0.25 }); 
    }
  }, [center, zoom, map]);
  return null;
};

const VietnamMap = () => {
  const [activePoint, setActivePoint] = useState(MAP_POINTS[0]);
  const [mapCenter, setMapCenter] = useState([16.0, 107.0]);
  const [mapZoom, setMapZoom] = useState(5);

  // --- 1. ĐÂY LÀ PHẦN XỬ LÝ MỚI (useMemo) MÀ BẠN HỎI ---
  const cityLabels = useMemo(() => {
    const unique = new Map();
    MILESTONES.forEach(m => {
      const key = `${m.coordinates[0]},${m.coordinates[1]}`;
      // Chỉ thêm nếu chưa có (tránh trùng lắp)
      if (!unique.has(key)) {
        const cityName = m.location.split(',')[0].trim();
        unique.set(key, {
          pos: [m.coordinates[1], m.coordinates[0]],
          text: cityName
        });
      }
    });
    return Array.from(unique.values());
  }, []); // [] đảm bảo chỉ tính toán 1 lần khi load trang
  // -----------------------------------------------------

  const handleSelectMilestone = (milestone) => {
    const pointData = {
      id: milestone.id,
      name: milestone.location, 
      desc: `${milestone.title} (${milestone.duration})`,
      details: milestone.desc,
      image: milestone.image,
      coordinates: milestone.coordinates
    };
    setActivePoint(pointData);
    setMapCenter([milestone.coordinates[1], milestone.coordinates[0]]);
    setMapZoom(6); 
  };

  const handleSelectFixedPoint = (point) => {
     setActivePoint(point);
     setMapCenter([point.coordinates[1], point.coordinates[0]]); 
     setMapZoom(6);
  };

  const resetMap = () => {
    setActivePoint(MAP_POINTS[0]);
    setMapCenter([16.0, 107.0]);
    setMapZoom(5);
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center py-10 px-4 md:px-8 bg-slate-900/95 backdrop-blur-sm">
      <style>{`
        .leaflet-container { background: #111827; font-family: 'Inter', sans-serif; }
        .leaflet-control-attribution { display: none; }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl w-full mb-8 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-2">
          Bản Đồ Hội Nhập & Chủ Quyền
        </h2>
        <p className="text-slate-400 text-sm md:text-base flex items-center justify-center gap-2">
          <MousePointer2 size={16} /> Khám phá hành trình vươn ra biển lớn của Việt Nam
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-800/40 rounded-3xl border border-white/5 overflow-hidden shadow-2xl h-[85vh]">
        
        {/* CỘT 1: DANH SÁCH SỰ KIỆN */}
        <div className="lg:col-span-3 bg-slate-900/80 border-r border-white/5 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-slate-800/50">
            <h3 className="font-bold text-white flex items-center gap-2">
              <Plane size={18} className="text-yellow-400" /> Cột Mốc Hội Nhập
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
            <button onClick={resetMap} className="w-full p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-sm font-bold flex items-center justify-center gap-2 transition-colors">
              <RotateCcw size={14} /> Về Việt Nam
            </button>
            
            {MILESTONES.map((m) => (
              <button
                key={m.id}
                onClick={() => handleSelectMilestone(m)}
                className={`w-full text-left p-3 rounded-xl border transition-all duration-300 group
                  ${activePoint.id === m.id 
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                    : 'bg-slate-800/40 border-transparent hover:bg-slate-700/50'
                  }`}
              >
                <div className={`text-xs font-bold mb-1 ${activePoint.id === m.id ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {m.year}
                </div>
                <div className={`font-medium text-sm ${activePoint.id === m.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {m.title}
                </div>
                <div className="text-[10px] text-slate-500 mt-1 truncate">{m.location}</div>
              </button>
            ))}
          </div>
        </div>

        {/* CỘT 2: BẢN ĐỒ */}
        <div className="lg:col-span-6 relative w-full h-full z-0 border-r border-white/5">
          <MapContainer center={mapCenter} zoom={mapZoom} className="w-full h-full" minZoom={2} maxZoom={8}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />

            {/* NHÃN CHỦ QUYỀN */}
            <Marker position={[14.5, 112.5]} icon={createTextLabel("BIỂN ĐÔNG", "16px", "#0ea5e9", "900")} interactive={false} />
            <Marker position={[16.3, 111.8]} icon={createTextLabel("QĐ. HOÀNG SA (VN)", "10px", "#e2e8f0", "bold")} interactive={false} />
            <Marker position={[9.0, 113.5]} icon={createTextLabel("QĐ. TRƯỜNG SA (VN)", "10px", "#e2e8f0", "bold")} interactive={false} />
            
            {/* NHÃN QUỐC GIA */}
            {INTERNATIONAL_LABELS.map((label, idx) => (
               <Marker 
                 key={`lbl-country-${idx}`} 
                 position={label.pos} 
                 icon={createTextLabel(label.text, label.size || "10px", label.color)} 
                 interactive={false} 
               />
            ))}

            {/* --- 2. HIỂN THỊ NHÃN THÀNH PHỐ VỚI OFFSET --- */}
            {cityLabels.map((l, idx) => (
               <Marker 
                 key={`lbl-city-${idx}`} 
                 position={l.pos} 
                 // offsetY = 25: Đẩy chữ xuống dưới Marker khoảng 25px
                 icon={createTextLabel(l.text, "11px", "#94a3b8", "bold", 0, 25)} 
                 interactive={false} 
               />
            ))}

            {/* ĐIỂM CỐ ĐỊNH */}
            {MAP_POINTS.map((point) => (
              <Marker 
                key={point.id} 
                position={[point.coordinates[1], point.coordinates[0]]} 
                icon={createCustomIcon(activePoint.id === point.id)} 
                eventHandlers={{ click: () => handleSelectFixedPoint(point) }}
              />
            ))}

            {/* ĐIỂM SỰ KIỆN */}
            {MILESTONES.map((m) => (
               <Marker 
                key={m.id} 
                position={[m.coordinates[1], m.coordinates[0]]} 
                icon={createCustomIcon(activePoint.id === m.id)} 
                eventHandlers={{ click: () => handleSelectMilestone(m) }} 
              />
            ))}
            
            <MapController center={mapCenter} zoom={mapZoom} />
          </MapContainer>
        </div>

        {/* CỘT 3: THÔNG TIN CHI TIẾT */}
        <div className="lg:col-span-3 relative p-6 flex flex-col bg-slate-800/20">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activePoint.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-full flex flex-col"
            >
               <div className="mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-yellow-500/20 mb-3">
                    <Navigation size={14} /> {activePoint.name} 
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {activePoint.desc}
                  </h3>
               </div>

               <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 mb-4 group shrink-0">
                  <img 
                    src={activePoint.image} 
                    alt={activePoint.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      e.target.parentNode.style.backgroundColor = '#1e293b'; 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               </div>

               <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 flex-grow overflow-y-auto custom-scrollbar">
                 <p className="text-slate-300 text-sm leading-relaxed text-justify">
                   {activePoint.details}
                 </p>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default VietnamMap;