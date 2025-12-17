// src/data/content.js
import { Globe, TrendingUp, Zap, MapPin } from 'lucide-react';

// 1. ĐỊA ĐIỂM CỐ ĐỊNH VIỆT NAM (Giữ nguyên)
export const MAP_POINTS = [
  {
    id: 'hoang-sa',
    name: "QĐ. Hoàng Sa",
    coordinates: [111.2, 16.5],
    image: "/HoangSa.jpg", 
    desc: "Đà Nẵng - Chủ quyền biển đảo",
    details: "Vùng lãnh thổ thiêng liêng. Phát triển kinh tế biển phải gắn liền với bảo vệ an ninh quốc phòng."
  },
  {
    id: 'truong-sa',
    name: "QĐ. Trường Sa",
    coordinates: [114.5, 10.0],
    image: "/truongsa.jpg", 
    desc: "Khánh Hòa - Pháo đài tiền tiêu",
    details: "Biểu tượng của ý chí Việt Nam giữa biển khơi. Nơi khẳng định chủ quyền thông qua sự hiện diện dân sự và kinh tế."
  }
];

// 2. DANH SÁCH CỘT MỐC SỰ KIỆN QUỐC TẾ (Cập nhật từ file Excel)
export const MILESTONES = [
  {
    id: 'm1', year: '1986',
    title: 'Đại hội Đảng VI (Đổi Mới)',
    location: 'Hà Nội, Việt Nam',
    duration: '15-18/12/1986',
    coordinates: [105.85, 21.02],
    desc: 'Khởi xướng "Đổi mới", chuyển sang kinh tế hàng hóa nhiều thành phần.',
    image: '/dhvi.jpg'
  },
  {
    id: 'm2', year: '1987',
    title: 'Luật Đầu tư nước ngoài',
    location: 'Hà Nội, Việt Nam',
    duration: '29/12/1987',
    coordinates: [105.85, 21.02],
    desc: 'Ban hành luật đầu tiên cho phép người nước ngoài đầu tư kinh doanh tại Việt Nam.',
    image: '/luat-dau-tu-nuoc-ngoai.webp'
  },
  {
    id: 'm3', year: '1994',
    title: 'Mỹ bỏ cấm vận',
    location: 'Washington D.C, Mỹ',
    duration: '03/02/1994',
    coordinates: [-77.03, 38.90],
    desc: 'Tổng thống B.Clinton tuyên bố bãi bỏ hoàn toàn cấm vận thương mại đối với Việt Nam.',
    image: '/My-bo-cam-van.jpg'
  },
  {
    id: 'm4', year: '1995',
    title: 'Gia nhập ASEAN',
    location: 'B.S.Begawan, Brunei',
    duration: '28/7/1995',
    coordinates: [114.9, 4.9],
    desc: 'Trở thành thành viên thứ 7 của Hiệp hội các quốc gia Đông Nam Á.',
    image: '/asean.jpg'
  },
  {
    id: 'm5', year: '1995',
    title: 'Tham gia AFTA',
    location: 'Bangkok, Thái Lan',
    duration: '15/12/1995',
    coordinates: [100.50, 13.75],
    desc: 'Ký Nghị định thư gia nhập CEPT/AFTA (Bắt đầu giảm thuế quan).',
    image: '/AFTA.jpeg'
  },
  {
    id: 'm6', year: '1996',
    title: 'Sáng lập ASEM',
    location: 'Bangkok, Thái Lan',
    duration: '1/3/1996',
    coordinates: [100.50, 13.75],
    desc: 'Hội nghị Cấp cao ASEM lần I, VN là thành viên sáng lập.',
    image: '/asem.jpg'
  },
  {
    id: 'm7', year: '1998',
    title: 'Gia nhập APEC',
    location: 'Kuala Lumpur, Malaysia',
    duration: '14/11/1998',
    coordinates: [101.68, 3.13],
    desc: 'Kết nạp tại Hội nghị Bộ trưởng APEC lần 10.',
    image: '/APEC.jpg'
  },
  {
    id: 'm8', year: '2000',
    title: 'Ký BTA Việt - Mỹ',
    location: 'Washington D.C, Mỹ',
    duration: '13/07/2000',
    coordinates: [-77.03, 38.90],
    desc: 'Hiệp định Thương mại song phương (Độ trưởng Vũ Khoan ký).',
    image: '/BTA.jpg'
  },
  {
    id: 'm9', year: '2007',
    title: 'Gia nhập WTO',
    location: 'Geneva, Thụy Sĩ',
    duration: '07/11/2006',
    coordinates: [6.14, 46.20],
    desc: 'Lễ kết nạp thành viên thứ 150 (Chính thức hoạt động từ 1/2007).',
    image: '/WTO.jpg'
  },
  {
    id: 'm10', year: '2008',
    title: 'ĐTCL Toàn Diện Trung Quốc',
    location: 'Bắc Kinh, Trung Quốc',
    duration: '30/05/2008',
    coordinates: [116.40, 39.90],
    desc: 'Chuyến thăm hữu nghị chính thức nước Cộng hòa Nhân dân Trung Hoa của Tổng Bí thư Nông Đức Mạnh. Đưa ra tuyên bố chung về nâng cấp quan hệ ĐTCL Toàn Diện.',
    image: '/DTCL-toan-dien-trung-quoc.jpg'
  },
  {
    id: 'm11', year: '2008',
    title: 'VJEPA (VN - Nhật)',
    location: 'Tokyo, Nhật Bản',
    duration: '25/12/2008',
    coordinates: [139.69, 35.68],
    desc: 'Ký Hiệp định Đối tác Kinh tế song phương đầu tiên.',
    image: '/VJEPA.jpg'
  },
  {
    id: 'm12', year: '2012',
    title: 'ĐTCL Toàn Diện Nga',
    location: 'Moscow, Nga',
    duration: '27/7/2012',
    coordinates: [37.61, 55.75],
    desc: 'Trong khuôn khổ chuyến thăm chính thức Liên bang Nga của Chủ tịch nước Trương Tấn Sang. Đưa ra tuyên bố chung về nâng cấp quan hệ ĐTCL Toàn Diện.',
    image: '/DTCL-Nga.jpg'
  },
  {
    id: 'm13', year: '2014',
    title: 'VCFTA (VN - Chile)',
    location: 'Hawaii, Mỹ',
    duration: '11/11/2011',
    coordinates: [-157.85, 21.30],
    desc: 'Ký bên lề APEC (Hiệu lực từ 2014).',
    image: '/VCFTA-(VN - Chile).gif'
  },
  {
    id: 'm14', year: '2015',
    title: 'VKFTA (VN - Hàn)',
    location: 'Hà Nội, Việt Nam',
    duration: '05/05/2015',
    coordinates: [105.85, 21.02],
    desc: 'Ký kết tại Phủ Chủ tịch (Thúc đẩy FDI Hàn Quốc).',
    image: '/VKFTA-(VN - Hàn).jpg'
  },
  {
    id: 'm15', year: '2015',
    title: 'VN-EAEU FTA',
    location: 'Burabay, Kazakhstan',
    duration: '29/05/2015',
    coordinates: [70.29, 53.08],
    desc: 'Ký Hiệp định với Liên minh Kinh tế Á - Âu.',
    image: '/VN-EAEU-FTA-1.png'
  },
  {
    id: 'm16', year: '2015',
    title: 'AEC (Cộng đồng ASEAN)',
    location: 'Kuala Lumpur, Malaysia',
    duration: '22/11/2015',
    coordinates: [101.68, 3.13],
    desc: 'Ký Tuyên bố hình thành AEC (Hiệu lực 31/12/2015).',
    image: '/AEC.webp'
  },
  {
    id: 'm17', year: '2016',
    title: 'ĐTCL Toàn Diện Ấn Độ',
    location: 'Hà Nội, Việt Nam',
    duration: '3/9/2016',
    coordinates: [105.85, 21.02],
    desc: 'Thủ tướng Ấn Độ Narendra Modi thăm chính thức Việt Nam theo lời mời của Thủ tướng Nguyễn Xuân Phúc. Đưa ra tuyên bố chung về nâng cấp quan hệ ĐTCL Toàn Diện.',
    image: '/DTCL-ANDO.jpg'
  },
  {
    id: 'm18', year: '2019',
    title: 'CPTPP',
    location: 'Santiago, Chile',
    duration: '08/03/2018',
    coordinates: [-70.66, -33.44],
    desc: 'Ký Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương.',
    image: '/CPTPP.webp'
  },
  {
    id: 'm19', year: '2020',
    title: 'EVFTA (VN - EU)',
    location: 'Hà Nội, Việt Nam',
    duration: '30/06/2019',
    coordinates: [105.85, 21.02],
    desc: 'Ký Hiệp định Thương mại Tự do Việt Nam - EU.',
    image: '/EVFTA.jpg'
  },
  {
    id: 'm20', year: '2021',
    title: 'UKVFTA (VN - Anh)',
    location: 'London, Anh',
    duration: '29/12/2020',
    coordinates: [-0.12, 51.50],
    desc: 'Ký kết để duy trì thương mại sau Brexit.',
    image: '/UKVFTA-(VN - Anh).jpg'
  },
  {
    id: 'm21', year: '2022',
    title: 'RCEP',
    location: 'Hà Nội, Việt Nam',
    duration: '02/11/2021',
    coordinates: [105.85, 21.02],
    desc: 'Ký trong năm VN làm chủ tịch ASEAN (Hiệu lực 2022).',
    image: '/rcep.jpg'
  },
  {
    id: 'm22', year: '2023',
    title: 'VIFTA (VN - Israel)',
    location: 'Tel Aviv, Israel',
    duration: '25/07/2023',
    coordinates: [34.78, 32.08],
    desc: 'Ký Hiệp định thương mại tự do Việt Nam - Israel.',
    image: '/VIFTA.jpeg'
  },
  {
    id: 'm23', year: '2023',
    title: 'ĐTCL Toàn diện Mỹ',
    location: 'Hà Nội, Việt Nam',
    duration: '10/09/2023',
    coordinates: [105.85, 21.02],
    desc: 'Tuyên bố chung nâng cấp quan hệ (Tổng thống Joe Biden thăm VN).',
    image: '/DTCL-My.jpg'
  },
  {
    id: 'm24', year: '2023',
    title: 'ĐTCL Toàn diện Nhật',
    location: 'Tokyo, Nhật Bản',
    duration: '27/11/2023',
    coordinates: [139.69, 35.68],
    desc: 'Tuyên bố chung nâng cấp quan hệ (CTN Võ Văn Thưởng thăm Nhật).',
    image: '/DTCL-Nhat.jpg'
  },
  {
    id: 'm25', year: '2024',
    title: 'ĐTCL Toàn diện Úc',
    location: 'Canberra, Úc',
    duration: '07/03/2024',
    coordinates: [149.13, -35.28],
    desc: 'Nâng cấp quan hệ (Thủ tướng Phạm Minh Chính thăm Úc).',
    image: '/DTCL-Uc.jpg'
  },
  {
    id: 'm26', year: '2024',
    title: 'ĐTCL Toàn diện Pháp',
    location: 'Paris, Pháp',
    duration: '07/10/2024',
    coordinates: [2.35, 48.85],
    desc: 'Nâng cấp quan hệ (TBT, CTN Tô Lâm thăm Pháp).',
    image: '/DTCL-Phap.jpg'
  },
  {
    id: 'm27', year: '2024',
    title: 'CEPA (VN - UAE)',
    location: 'Dubai, UAE',
    duration: '28/10/2024',
    coordinates: [55.27, 25.20],
    desc: 'Ký Hiệp định Đối tác Kinh tế Toàn diện với UAE.',
    image: '/UAE.jpeg'
  }
];

// Dữ liệu cho Quả địa cầu 3D (Giữ nguyên để làm nền)
export const GLOBE_DATA = {
  points: [
    { id: 'vn', lat: 14.0583, lng: 108.2772, name: "Việt Nam", color: "#facc15" },
    { id: 'us', lat: 37.0902, lng: -95.7129, name: "Mỹ", color: "#38bdf8" },
    { id: 'kr', lat: 35.9078, lng: 127.7669, name: "Hàn Quốc", color: "#f472b6" },
    { id: 'cn', lat: 35.8617, lng: 104.1954, name: "Trung Quốc", color: "#ef4444" }
  ],
  arcs: [
    { startLat: 37.0902, startLng: -95.7129, endLat: 14.0583, endLng: 108.2772, color: ['#38bdf8', '#facc15'] },
    { startLat: 35.9078, startLng: 127.7669, endLat: 14.0583, endLng: 108.2772, color: ['#f472b6', '#facc15'] },
    { startLat: 35.8617, startLng: 104.1954, endLat: 14.0583, endLng: 108.2772, color: ['#ef4444', '#facc15'] },
  ]
};

// Nội dung bài học text
export const SECTIONS = [
  {
    id: 'moi-quan-he',
    title: "1. Mối quan hệ giữa Kinh tế và Văn hóa trong hội nhập",
    icon: TrendingUp, // Dùng icon Biểu đồ cho mối quan hệ phát triển
    content: "Mối quan hệ giữa kinh tế và văn hóa là mối quan hệ gắn bó, không thể tách rời trong quá trình phát triển và hội nhập quốc tế. Đảng Cộng sản Việt Nam đã xác định văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là sức mạnh nội sinh, động lực quan trọng để phát triển đất nước.",
    details: [
      "1. Văn hóa là động lực phát triển kinh tế: Văn hóa tạo nền tảng tinh thần và sức cạnh tranh cho nền kinh tế. Kinh tế tương lai là kinh tế văn hóa, cạnh tranh kinh tế là cạnh tranh về văn hóa. Văn hóa tiên tiến thúc đẩy phát triển kinh tế – xã hội bền vững.",
      "2. Kinh tế là nền tảng vật chất của văn hóa: Tăng trưởng kinh tế tạo nguồn lực đầu tư cho phát triển văn hóa. Kinh tế xây dựng văn hóa vật chất, bảo đảm điều kiện cho văn hóa tinh thần phát triển. Phát triển kinh tế tách rời văn hóa → không bền vững.",
      "3. Trong bối cảnh hội nhập quốc tế: Văn hóa và kinh tế ngày càng gắn bó chặt chẽ trong toàn cầu hóa. Hội nhập giúp tiếp thu tinh hoa văn hóa thế giới. Đồng thời đặt ra nguy cơ xói mòn bản sắc văn hóa dân tộc."
    ]
  },
  {
    id: 'y-nghia',
    title: "2. Ý nghĩa phương châm “Hòa nhập nhưng không hòa tan” (ĐH XIII)",
    icon: Globe, // Dùng icon Quả cầu cho bối cảnh toàn cầu hóa
    content: "Là yêu cầu tất yếu trong bối cảnh toàn cầu hóa và CMCN 4.0.",
    details: [
      "Giúp Việt Nam tiếp thu tinh hoa văn hóa nhân loại có chọn lọc, đồng thời giữ vững bản sắc dân tộc.",
      "Tránh nguy cơ sùng ngoại, mai một giá trị văn hóa – đạo đức truyền thống.",
      "Giữ gìn cốt cách, tâm hồn, khí phách con người Việt Nam.",
      "Bảo đảm ổn định chính trị – xã hội và phát triển kinh tế bền vững.",
      "Khẳng định văn hóa là nền tảng tinh thần, nguồn lực nội sinh và động lực phát triển."
    ]
  },
  {
    id: 'giai-phap',
    title: "3. Mở cửa thị trường văn hóa & xây dựng “sức mạnh mềm” Việt Nam",
    icon: Zap, // Dùng icon Tia sét cho sức mạnh/hành động
    content: "Chiến lược phát triển toàn diện để đưa văn hóa Việt Nam ra thế giới.",
    actionPlan: [
      {
        title: "Vai trò của Nhà nước",
        desc: "Nhà nước giữ vai trò định hướng, điều phối và kết nối. Thành lập cơ quan chuyên trách quảng bá văn hóa quốc gia. Học tập mô hình Hàn Quốc, Nhật Bản."
      },
      {
        title: "Chiến lược và chính sách đồng bộ",
        desc: "Xây dựng chiến lược phát triển văn hóa dài hạn. Hoàn thiện khung pháp lý cho công nghiệp văn hóa. Huy động khu vực tư nhân cùng tham gia."
      },
      {
        title: "Phát triển công nghiệp văn hóa & công nghệ",
        desc: "Ứng dụng công nghệ số, mạng xã hội, AI trong quảng bá văn hóa. Phát triển các ngành: điện ảnh, du lịch văn hóa, nghệ thuật biểu diễn. Gia tăng hàm lượng công nghệ để nâng cao sức cạnh tranh."
      },
      {
        title: "Phát huy nội lực – kết nối ngoại lực",
        desc: "Dựa trên giá trị văn hóa nội sinh và tinh thần dân tộc. Đào tạo nguồn nhân lực chất lượng cao. Phát huy vai trò kiều bào, sinh viên như “sứ giả văn hóa”."
      },
      {
        title: "Nguyên tắc bảo tồn",
        desc: "Tiếp thu văn hóa nước ngoài có chọn lọc. Quảng bá văn hóa Việt Nam có định hướng. Ngăn chặn lai căng, giữ phần ổn định cốt lõi của văn hóa dân tộc."
      }
    ]
  }
];