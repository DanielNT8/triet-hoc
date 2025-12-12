import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { GLOBE_DATA } from '../data/content';

const Globe3D = ({ onPointClick }) => {
  const globeEl = useRef();
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 16, lng: 108, altitude: 2.0 }, 1000);
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
    }
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!ready) return null;

  return (
    // THAY ĐỔI Ở ĐÂY: Dùng z-0 thay vì -z-10, thêm pointer-events-auto
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-auto cursor-move">
      {/* Fallback background */}
      <div className="absolute inset-0 bg-slate-900 -z-10"></div>
      
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        pointsData={GLOBE_DATA.points}
        pointAltitude={0.15}
        pointColor="color"
        pointRadius={0.8}
        pointLabel="name"
        onPointClick={onPointClick} 

        arcsData={GLOBE_DATA.arcs}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        
        labelsData={GLOBE_DATA.points}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.5}
        labelColor={() => '#facc15'}
      />
      
      {/* Lớp phủ mờ chân trang - pointer-events-none để click xuyên qua */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Globe3D;