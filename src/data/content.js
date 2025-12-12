// src/data/content.js
import { TrendingUp, Globe, ShieldCheck, Zap } from 'lucide-react';

// Dữ liệu hiển thị trên Quả địa cầu (Tọa độ các nước)
export const GLOBE_DATA = {
  points: [
    {
      id: 'vn',
      lat: 14.0583,
      lng: 108.2772,
      name: "Việt Nam",
      color: "#facc15", // Vàng (Tâm điểm)
      desc: "Hội nhập sâu rộng nhưng đối mặt nguy cơ 'hòa tan' văn hóa."
    },
    {
      id: 'us',
      lat: 37.0902,
      lng: -95.7129,
      name: "Mỹ (USA)",
      color: "#38bdf8", // Xanh dương
      desc: "Netflix, Hollywood, Halloween, Black Friday. Sự áp đảo của văn hóa phương Tây."
    },
    {
      id: 'kr',
      lat: 35.9078,
      lng: 127.7669,
      name: "Hàn Quốc",
      color: "#f472b6", // Hồng (K-Pop)
      desc: "K-Pop, Phim ảnh. Bài học thành công về 'Sức mạnh mềm' xuất khẩu văn hóa."
    },
    {
      id: 'cn',
      lat: 35.8617,
      lng: 104.1954,
      name: "Trung Quốc",
      color: "#ef4444", // Đỏ
      desc: "TikTok, Shopee. Ảnh hưởng mạnh mẽ qua nền tảng số và thương mại điện tử."
    }
  ],
  // Các đường kết nối (Dòng chảy văn hóa/kinh tế) đổ về Việt Nam
  arcs: [
    { startLat: 37.0902, startLng: -95.7129, endLat: 14.0583, endLng: 108.2772, color: ['#38bdf8', '#facc15'] }, // US -> VN
    { startLat: 35.9078, startLng: 127.7669, endLat: 14.0583, endLng: 108.2772, color: ['#f472b6', '#facc15'] }, // KR -> VN
    { startLat: 35.8617, startLng: 104.1954, endLat: 14.0583, endLng: 108.2772, color: ['#ef4444', '#facc15'] }, // CN -> VN
  ]
};

// Nội dung chi tiết cho các phần (Section)
export const SECTIONS = [
  {
    id: 'thuc-trang',
    title: "Thực Trạng: Hội Nhập Hay Xâm Lăng?",
    icon: Globe,
    content: "Giới trẻ Việt Nam hiện nay 'ăn cơm Việt nhưng xem phim Netflix, nghe nhạc K-Pop, lướt TikTok Trung Quốc'. Các ngày lễ ngoại nhập (Halloween, Black Friday) lấn át lễ hội truyền thống.",
    highlight: "Phải chăng chúng ta hội nhập kinh tế thành công nhưng lại đang thất bại trong việc giữ gìn bản sắc?",
    stats: [
      { label: "Nền tảng xuyên biên giới", value: "Netflix, TikTok" },
      { label: "Thương mại điện tử", value: "Shopee, Taobao" },
      { label: "Văn hóa phẩm", value: "K-Pop, Hollywood" }
    ]
  },
  {
    id: 'ly-luan',
    title: "Góc Nhìn Triết Học Mác - Lênin",
    icon: TrendingUp,
    content: "Mối quan hệ biện chứng giữa Kinh tế (Cơ sở hạ tầng) và Văn hóa (Kiến trúc thượng tầng).",
    details: [
      "Kinh tế quyết định văn hóa: Khi mở cửa thị trường, văn hóa ngoại lai chắc chắn sẽ du nhập theo hàng hóa và vốn.",
      "Văn hóa tác động trở lại: Nếu bản sắc văn hóa yếu, kinh tế sẽ bị lệ thuộc. Mất văn hóa là mất khả năng tự chủ về tư tưởng."
    ],
    highlight: "Hòa nhập nhưng không hòa tan: Tiếp thu tinh hoa nhân loại nhưng phải giữ vững 'cốt cách' dân tộc."
  },
  {
    id: 'giai-phap',
    title: "Giải Pháp: Xây Dựng 'Sức Mạnh Mềm'",
    icon: Zap,
    content: "Học tập cách Hàn Quốc xuất khẩu văn hóa. Biến di sản thành tài sản.",
    actionPlan: [
      { title: "Làm mới di sản", desc: "Kết hợp chất liệu dân gian với công nghệ hiện đại (MV nhạc, Game sử Việt, Phim ảnh)." },
      { title: "Xuất khẩu văn hóa", desc: "Đưa Áo Dài, Phở, Cà phê, VinFast ra thế giới để định vị thương hiệu quốc gia." },
      { title: "Chủ động trên không gian mạng", desc: "Tạo ra các nền tảng số và nội dung số của người Việt, cho người Việt." }
    ]
  }
];