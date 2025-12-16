// src/components/Globe3D.jsx
import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

const Globe3D = () => {
  const globeEl = useRef();
  // State để lưu kích thước màn hình
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [ready, setReady] = useState(false);

  // --- VỊ TRÍ CỦA useEffect ---
  // Nhiệm vụ: Lắng nghe sự kiện "Kéo to/thu nhỏ" trình duyệt
  useEffect(() => {
    setReady(true);
    
    // Hàm cập nhật chiều rộng/cao khi người dùng kéo cửa sổ trình duyệt
    const handleResize = () => setDimensions({ 
      width: window.innerWidth, 
      height: window.innerHeight 
    });

    // Gắn sự kiện lắng nghe vào cửa sổ (Window)
    window.addEventListener('resize', handleResize);
    
    // Dọn dẹp sự kiện khi thoát trang (Cleanup function)
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  // -----------------------------

  if (!ready) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60"
      style={{ filter: 'brightness(1.4) contrast(1.2)' }} 
    >
      <Globe
        ref={globeEl}
        width={dimensions.width}   // Nhận kích thước từ state (do useEffect cập nhật)
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        atmosphereColor="#3b82f6" 
        atmosphereAltitude={0.2}

        // --- NHIỆM VỤ MỚI: XỬ LÝ XOAY Ở ĐÂY ---
        // Thay vì dùng useEffect, ta dùng sự kiện "Sẵn sàng" của chính thư viện
        onGlobeReady={() => {
          if (globeEl.current) {
            // 1. Góc nhìn
            globeEl.current.pointOfView({ lat: 15, lng: 105, altitude: 2.0 });

            // 2. Lệnh xoay (Đặt ở đây đảm bảo 100% chạy được)
            const controls = globeEl.current.controls();
            controls.autoRotate = true;     // Bật xoay
            controls.autoRotateSpeed = 0.5; // Tốc độ
            
            // 3. Tắt tương tác chuột
            controls.enableZoom = false;
            controls.enablePan = false;
            
            controls.update(); 
          }
        }}
      />
    </div>
  );
};

export default Globe3D;