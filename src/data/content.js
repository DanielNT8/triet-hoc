// src/data/content.js
import { Globe, TrendingUp, Zap, MapPin } from 'lucide-react';

// 1. ĐỊA ĐIỂM CỐ ĐỊNH VIỆT NAM (Giữ nguyên)
export const MAP_POINTS = [
  {
    id: 'hoang-sa',
    name: "QĐ. Hoàng Sa",
    coordinates: [111.2, 16.5],
    image: "", 
    desc: "Đà Nẵng - Chủ quyền biển đảo",
    details: "Vùng lãnh thổ thiêng liêng. Phát triển kinh tế biển phải gắn liền với bảo vệ an ninh quốc phòng."
  },
  {
    id: 'truong-sa',
    name: "QĐ. Trường Sa",
    coordinates: [114.5, 10.0],
    image: "", 
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
    image: ''
  },
  {
    id: 'm13', year: '2014',
    title: 'VCFTA (VN - Chile)',
    location: 'Hawaii, Mỹ',
    duration: '11/11/2011',
    coordinates: [-157.85, 21.30],
    desc: 'Ký bên lề APEC (Hiệu lực từ 2014).',
    image: ''
  },
  {
    id: 'm14', year: '2015',
    title: 'VKFTA (VN - Hàn)',
    location: 'Hà Nội, Việt Nam',
    duration: '05/05/2015',
    coordinates: [105.85, 21.02],
    desc: 'Ký kết tại Phủ Chủ tịch (Thúc đẩy FDI Hàn Quốc).',
    image: ''
  },
  {
    id: 'm15', year: '2015',
    title: 'VN-EAEU FTA',
    location: 'Burabay, Kazakhstan',
    duration: '29/05/2015',
    coordinates: [70.29, 53.08],
    desc: 'Ký Hiệp định với Liên minh Kinh tế Á - Âu.',
    image: ''
  },
  {
    id: 'm16', year: '2015',
    title: 'AEC (Cộng đồng ASEAN)',
    location: 'Kuala Lumpur, Malaysia',
    duration: '22/11/2015',
    coordinates: [101.68, 3.13],
    desc: 'Ký Tuyên bố hình thành AEC (Hiệu lực 31/12/2015).',
    image: ''
  },
  {
    id: 'm17', year: '2016',
    title: 'ĐTCL Toàn Diện Ấn Độ',
    location: 'Hà Nội, Việt Nam',
    duration: '3/9/2016',
    coordinates: [105.85, 21.02],
    desc: 'Thủ tướng Ấn Độ Narendra Modi thăm chính thức Việt Nam theo lời mời của Thủ tướng Nguyễn Xuân Phúc. Đưa ra tuyên bố chung về nâng cấp quan hệ ĐTCL Toàn Diện.',
    image: ''
  },
  {
    id: 'm18', year: '2019',
    title: 'CPTPP',
    location: 'Santiago, Chile',
    duration: '08/03/2018',
    coordinates: [-70.66, -33.44],
    desc: 'Ký Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương.',
    image: ''
  },
  {
    id: 'm19', year: '2020',
    title: 'EVFTA (VN - EU)',
    location: 'Hà Nội, Việt Nam',
    duration: '30/06/2019',
    coordinates: [105.85, 21.02],
    desc: 'Ký Hiệp định Thương mại Tự do Việt Nam - EU.',
    image: ''
  },
  {
    id: 'm20', year: '2021',
    title: 'UKVFTA (VN - Anh)',
    location: 'London, Anh',
    duration: '29/12/2020',
    coordinates: [-0.12, 51.50],
    desc: 'Ký kết để duy trì thương mại sau Brexit.',
    image: ''
  },
  {
    id: 'm21', year: '2022',
    title: 'RCEP',
    location: 'Hà Nội, Việt Nam',
    duration: '02/11/2021',
    coordinates: [105.85, 21.02],
    desc: 'Ký trong năm VN làm chủ tịch ASEAN (Hiệu lực 2022).',
    image: ''
  },
  {
    id: 'm22', year: '2023',
    title: 'VIFTA (VN - Israel)',
    location: 'Tel Aviv, Israel',
    duration: '25/07/2023',
    coordinates: [34.78, 32.08],
    desc: 'Ký Hiệp định thương mại tự do Việt Nam - Israel.',
    image: ''
  },
  {
    id: 'm23', year: '2023',
    title: 'ĐTCL Toàn diện Mỹ',
    location: 'Hà Nội, Việt Nam',
    duration: '10/09/2023',
    coordinates: [105.85, 21.02],
    desc: 'Tuyên bố chung nâng cấp quan hệ (Tổng thống Joe Biden thăm VN).',
    image: ''
  },
  {
    id: 'm24', year: '2023',
    title: 'ĐTCL Toàn diện Nhật',
    location: 'Tokyo, Nhật Bản',
    duration: '27/11/2023',
    coordinates: [139.69, 35.68],
    desc: 'Tuyên bố chung nâng cấp quan hệ (CTN Võ Văn Thưởng thăm Nhật).',
    image: ''
  },
  {
    id: 'm25', year: '2024',
    title: 'ĐTCL Toàn diện Úc',
    location: 'Canberra, Úc',
    duration: '07/03/2024',
    coordinates: [149.13, -35.28],
    desc: 'Nâng cấp quan hệ (Thủ tướng Phạm Minh Chính thăm Úc).',
    image: ''
  },
  {
    id: 'm26', year: '2024',
    title: 'ĐTCL Toàn diện Pháp',
    location: 'Paris, Pháp',
    duration: '07/10/2024',
    coordinates: [2.35, 48.85],
    desc: 'Nâng cấp quan hệ (TBT, CTN Tô Lâm thăm Pháp).',
    image: ''
  },
  {
    id: 'm27', year: '2024',
    title: 'CEPA (VN - UAE)',
    location: 'Dubai, UAE',
    duration: '28/10/2024',
    coordinates: [55.27, 25.20],
    desc: 'Ký Hiệp định Đối tác Kinh tế Toàn diện với UAE.',
    image: ''
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
    id: 'thuc-trang',
    title: "1. Thực Trạng: 'Ăn cơm Việt, xem Netflix'",
    icon: Globe,
    content: "Giới trẻ Việt Nam hiện nay chịu ảnh hưởng sâu sắc bởi các nền tảng xuyên biên giới. Các ngày lễ ngoại nhập (Black Friday, Halloween) được tổ chức rầm rộ, kích cầu mạnh mẽ, trong khi các sản phẩm văn hóa Việt Nam đang phải 'chật vật tìm chỗ đứng trên chính sân nhà'.",
    highlight: "Câu hỏi đặt ra: Phải chăng chúng ta hội nhập kinh tế thành công nhưng lại đang bị 'xâm lăng văn hóa'?",
    stats: [
      { label: "Giải trí", value: "Netflix, K-Pop" },
      { label: "Mua sắm", value: "Shopee, Taobao" },
      { label: "Mạng XH", value: "TikTok, Facebook" }
    ]
  },
  {
    id: 'ly-luan',
    title: "2. Phân Tích Dưới Góc Nhìn Triết Học",
    icon: TrendingUp,
    content: "Mối quan hệ biện chứng giữa Kinh tế và Văn hóa trong hội nhập:",
    details: [
      "Kinh tế là cơ sở: Khi mở cửa thị trường (kinh tế), sự du nhập của văn hóa ngoại lai là tất yếu khách quan.",
      "Văn hóa là động lực: Nếu đánh mất bản sắc (hòa tan), quốc gia sẽ mất đi 'kháng thể' trước các thế lực bên ngoài, dẫn đến lệ thuộc kinh tế lâu dài."
    ],
    highlight: "Nghị quyết ĐH XIII: 'Hòa nhập nhưng không hòa tan'. Tiếp thu tinh hoa nhân loại để làm giàu văn hóa dân tộc."
  },
  {
    id: 'giai-phap',
    title: "3. Giải Pháp: Xây Dựng 'Sức Mạnh Mềm'",
    icon: Zap,
    content: "Làm thế nào để xuất khẩu văn hóa ngược lại thế giới?",
    actionPlan: [
      { title: "Làm mới di sản", desc: "Dùng công nghệ (AI, 3D) để kể lại các câu chuyện lịch sử, văn hóa." },
      { title: "Thương hiệu Quốc gia", desc: "Gắn văn hóa vào sản phẩm xuất khẩu (VinFast, Phở, Áo dài)." }
    ]
  }
];