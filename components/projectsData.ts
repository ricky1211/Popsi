export interface ProjectItem {
  id: string;
  channel: string;
  title: string;
  subtitle: string;
  category: "Industrial & IoT" | "Web & App" | "Data & AI";
  desc: string;
  fullDesc: string;
  problem: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string };
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  status: "Live" | "Enterprise" | "In Development";
  color: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "predictive-maintenance",
    channel: "CH 01",
    title: "Predictive Maintenance (PdM)",
    subtitle: "AI-Powered Industrial Telemetry & Failure Prediction",
    category: "Industrial & IoT",
    desc: "Sistem monitoring kondisi mesin berbasis sensor vibrasi & temperatur dengan Machine Learning untuk prediksi kerusakan.",
    fullDesc: "Platform Predictive Maintenance cerdas yang mengintegrasikan sensor vibrasi, temperatur, dan arus listrik pada mesin industri. Data dikirim secara real-time via MQTT ke server analitik untuk memprediksi potensi kegagalan komponen (bearing failure, unbalance, overheating) jauh sebelum mesin mengalami kerusakan fatal.",
    problem: "Kerusakan mesin yang mendadak (unplanned downtime) di lini produksi manufaktur menyebabkan kerugian finansial puluhan juta rupiah per jam dan mengganggu target delivery.",
    solution: "Menerapkan model Machine Learning Random Forest & LSTM untuk menghitung Remaining Useful Life (RUL) mesin serta memberikan rekomendasi tindakan pemeliharaan preventif secara otomatis.",
    highlights: [
      "Real-time sensor telemetry via MQTT & WebSockets (< 300ms latency)",
      "Deteksi anomali vibrasi dengan algoritma FFT (Fast Fourier Transform)",
      "Automated alert notification via Telegram Bot & Email darurat",
      "Interactive vibration spectrum & temperature trend visualization"
    ],
    metrics: { label: "Unplanned Downtime", value: "Turun 38%" },
    tags: ["IoT Sensors", "Python", "Machine Learning", "FastAPI", "InfluxDB", "Grafana"],
    image: "/projects/predictive-maintenance.jpg",
    status: "Enterprise",
    color: "#f97316"
  },
  {
    id: "preventive-maintenance",
    channel: "CH 02",
    title: "Preventive Maintenance System",
    subtitle: "Automated Digital Work Orders & Machine Health Tracking",
    category: "Industrial & IoT",
    desc: "Platform digitalisasi jadwal servis berkala, checklist inspeksi teknisi, dan pelacakan metrik MTBF & MTTR mesin.",
    fullDesc: "Aplikasi manajemen pemeliharaan terencana (PM) terpusat untuk industri manufaktur modern. Menggantikan checklist kertas konvensional dengan sistem verifikasi fisik QR-Code pada mesin, penjadwalan otomatis berbasis jam operasional (running hours), dan kalkulasi otomatis MTBF/MTTR.",
    problem: "Jadwal servis mesin sering terlewat karena pencatatan manual di kertas, riwayat kerusakan sulit dilacak, dan audit pemeliharaan memakan waktu berhari-hari.",
    solution: "Sistem inspeksi digital berbasis QR-Code di tiap mesin, delegasi work order otomatis kepada teknisi piket, dan dashboard KPI performa mesin secara transparan.",
    highlights: [
      "Dynamic calendar & automated PM schedule generator",
      "QR code machine tagging untuk verifikasi fisik kehadiran teknisi",
      "Otomatisasi kalkulasi MTBF (Mean Time Between Failures) & MTTR",
      "Digital audit logbook & export PDF laporan pemeliharaan lengkap"
    ],
    metrics: { label: "Kepatuhan Jadwal PM", value: "99.4% On-Time" },
    tags: ["Next.js", "PostgreSQL", "Node.js", "Docker", "Prisma", "Tailwind CSS"],
    image: "/projects/preventive-maintenance.jpg",
    status: "Enterprise",
    color: "#0284c7"
  },
  {
    id: "andon-quality",
    channel: "CH 03",
    title: "Andon Quality Display",
    subtitle: "Real-time Shopfloor Stop & Defect Alert System",
    category: "Industrial & IoT",
    desc: "Sistem display visual lantai produksi real-time untuk sinyal abnormalitas kualitas dan alert line stop.",
    fullDesc: "Sistem Andon digital modern yang menghubungkan switch operator lantai produksi dengan layar display utama pabrik. Ketika terjadi deviasi kualitas atau bottle-neck material, operator dapat memicu sinyal lampu Andon secara instan, memanggil leader/QC, dan mencatat waktu response stoppage.",
    problem: "Keterlambatan respon tim support saat terjadi defect di assembly line mengakibatkan produk cacat terlanjur lolos dan jalur terhenti berlarut-larut.",
    solution: "Display Andon visual berbasis WebSockets dengan update latency < 500ms, integrasi push notification ke smartwatch/ponsel supervisor, dan pencatatan Pareto alasan stop.",
    highlights: [
      "Ultra low-latency WebSocket shopfloor digital board",
      "3-Color visual status (Hijau: Normal, Kuning: Bantuan, Merah: Line Stop)",
      "Automatic timer stoppage duration logging & SLA escalation",
      "Analisa Pareto defect harian dan per shift kerja produksi"
    ],
    metrics: { label: "Response Time Leader", value: "< 45 Detik" },
    tags: ["WebSockets", "React", "MQTT", "ESP32", "Node.js", "PostgreSQL"],
    image: "/projects/andon-quality.jpg",
    status: "Enterprise",
    color: "#ef4444"
  },
  {
    id: "claim-customers",
    channel: "CH 04",
    title: "Claim Customers & 8D Portal",
    subtitle: "Quality Complaints, RMA Tracking & 8D Investigation",
    category: "Web & App",
    desc: "Portal manajemen klaim garansi & komplain kualitas pelanggan dengan alur investigasi 8D Report terintegrasi.",
    fullDesc: "Sistem informasi komprehensif untuk menangani feedback dan keluhan kualitas dari customer (OEM & Distributor). Meliputi pencatatan tiket klaim, pengunggahan bukti cacat foto/video, alur investigasi tim QA, penerbitan laporan 8D (Eight Disciplines of Problem Solving), hingga kompensasi / RMA.",
    problem: "Proses penanganan klaim customer lambat dan berserakan di email, menyebabkan hilangnya kepuasan pelanggan dan lambatnya identifikasi akar masalah (root cause).",
    solution: "Standarisasi tiket klaim terintegrasi dengan workflow 8D Report digital, SLA tracking, dan analisa penyebab menggunakan 5-Why Analysis & Fishbone.",
    highlights: [
      "End-to-end customer complaint ticketing & SLA countdown",
      "Built-in 8D Report generator dengan ekspor PDF siap kirim ke customer",
      "Root cause analysis tool (Ishikawa Fishbone & 5-Why digital)",
      "Customer satisfaction survey & warranty claim approval matrix"
    ],
    metrics: { label: "Resolusi Komplain", value: "3x Lebih Cepat" },
    tags: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "PDF Generator"],
    image: "/projects/claim-customers.jpg",
    status: "Enterprise",
    color: "#8b5cf6"
  },
  {
    id: "capex",
    channel: "CH 05",
    title: "Capex Management System",
    subtitle: "Capital Expenditure Feasibility & Multi-Tier Approval",
    category: "Web & App",
    desc: "Sistem evaluasi proposal investasi modal perusahaan, analisa ROI & Payback Period, serta approval matrix bertingkat.",
    fullDesc: "Aplikasi enterprise untuk mengelola siklus pengajuan belanja modal (Capital Expenditure) perusahaan manufaktur bernilai miliaran rupiah. Memfasilitasi pengajuan proposal mesin baru, perhitungan kelayakan finansial (ROI, NPV, Payback Period), hierarki approval berjenjang (Manager -> GM -> Direksi), dan pelacakan serapan anggaran.",
    problem: "Pengajuan pembelian mesin & investasi modal masih menggunakan dokumen fisik yang rawan terselip, perhitungan ROI manual, dan realisasi anggaran sulit dikontrol.",
    solution: "Otomasi workflow approval CAPEX dengan kalkulator kelayakan investasi otomatis, budget lock prevention, dan monitoring realisasi vs budget secara presisi.",
    highlights: [
      "Automated Financial Feasibility Calculator (ROI, NPV, IRR, Payback Period)",
      "Multi-level approval workflow with email OTP verification",
      "Budget allocation tracker per department & cost center",
      "Comparative vendor quotation bidding analyzer"
    ],
    metrics: { label: "Akurasi Realisasi Budget", value: "100% Terkontrol" },
    tags: ["Next.js", "TypeScript", "Prisma", "Chart.js", "MySQL", "Excel Export"],
    image: "/projects/capex.jpg",
    status: "Enterprise",
    color: "#10b981"
  },
  {
    id: "absensi-seminar",
    channel: "CH 06",
    title: "Absensi Seminar Realtime",
    subtitle: "High-Speed QR Ticket Validation & Certificate Distribution",
    category: "Web & App",
    desc: "Sistem absensi seminar real-time berbasis Firebase Database dengan fitur export Excel dan manajemen sertifikat.",
    fullDesc: "Aplikasi absensi peserta seminar dan event kampus secara instan. Menggunakan scan QR Code tiket peserta, validasi kehadiran real-time pada Firebase Realtime Database, dashboard pantauan kuota hadir, dan sistem penerbitan e-certificate otomatis pasca seminar.",
    problem: "Antrean registrasi seminar manual menggunakan kertas memakan waktu lama dan data kehadiran sering tidak sinkron.",
    solution: "Pindai tiket QR Code dalam 2 detik per peserta, sinkronisasi kehadiran live, dan rekap data instan ke Excel.",
    highlights: [
      "Scan QR Code kehadiran kilat < 2 detik per orang",
      "Live counter peserta hadir dan persentase kuota ruangan",
      "Export data peserta lengkap ke format Excel/CSV sekali klik",
      "Integrasi pengiriman e-certificate otomatis ke email peserta"
    ],
    metrics: { label: "Kapasitas Event", value: "500+ Peserta/Sesi" },
    tags: ["Firebase", "React", "Vercel", "QR Code", "Excel Export"],
    image: "/projects/absensi-seminar.jpg",
    link: "https://absensi-seminar.vercel.app/",
    status: "Live",
    color: "#e8673a"
  },
  {
    id: "landing-seo",
    channel: "CH 07",
    title: "Landing Page SEO & Campaign",
    subtitle: "Conversion-Focused High Performance Web Architecture",
    category: "Web & App",
    desc: "Landing page teroptimasi SEO untuk kampanye digital marketing dengan performa tinggi (Lighthouse 98+).",
    fullDesc: "Landing page pemasaran digital yang dibangun dengan fokus pada Core Web Vitals, semantic schema markup (JSON-LD), dan arsitektur konten yang ramah mesin pencari. Menghasilkan konversi prospek tinggi serta loading kilat di semua perangkat mobile.",
    problem: "Website promosi sering lambat dimuat dan tidak terindeks dengan baik di Google, sehingga biaya akuisisi iklan membengkak.",
    solution: "Next.js Static Site Generation (SSG) dengan kompresi aset gambar otomatis dan struktur SEO on-page yang ketat.",
    highlights: [
      "Google Lighthouse Score 98/100 pada Mobile & Desktop",
      "Structured data JSON-LD rich snippets untuk Google SERP",
      "High conversion Call-to-Action section terintegrasi WhatsApp",
      "Responsive design adaptif di semua resolusi layar perangkat"
    ],
    metrics: { label: "Lighthouse Performance", value: "98/100 Mobile" },
    tags: ["Next.js", "SEO", "Marketing", "Tailwind CSS", "Vercel"],
    image: "/projects/landing-seo.jpg",
    link: "https://project-uas-digital-marketing-klmpk.vercel.app/",
    status: "Live",
    color: "#3a7be8"
  },
  {
    id: "nlp-project",
    channel: "CH 08",
    title: "NLP Indonesian Text Analytics",
    subtitle: "Indonesian Sentiment Analysis & Semantic Keyword Mining",
    category: "Data & AI",
    desc: "Aplikasi Natural Language Processing untuk analisis sentimen teks berbahasa Indonesia dengan visualisasi interaktif.",
    fullDesc: "Sistem analitik pemrosesan bahasa alami (NLP) yang dikembangkan khusus untuk teks bahasa Indonesia. Memproses ulasan pengguna dari media sosial dan e-commerce melalui pipeline text preprocessing (tokenizing, filtering stopword, stemming Sastrawi) hingga klasifikasi sentimen positif, netral, atau negatif.",
    problem: "Teks ulasan pelanggan di Indonesia penuh dengan bahasa gaul, singkatan, dan imbuhan kompleks yang sulit diproses model standar.",
    solution: "Pipeline preprocessing kustom dengan kamus normalisasi slang Indo dan model klasifikasi Naive Bayes / SVM berakurasi tinggi.",
    highlights: [
      "Indonesian text stemming & slang words normalizer pipeline",
      "Interactive sentiment breakdown (Positif, Netral, Negatif)",
      "Word Cloud & N-gram frequent term visualizer",
      "Batch processing upload file dataset CSV secara instan"
    ],
    metrics: { label: "Akurasi Klasifikasi", value: "89.2% Accuracy" },
    tags: ["Python", "NLP", "Machine Learning", "Streamlit", "NLTK", "Sastrawi"],
    image: "/projects/nlp-project.jpg",
    link: "https://project-uas-nlp.vercel.app/",
    status: "Live",
    color: "#5a3ae8"
  },
  {
    id: "data-science",
    channel: "CH 09",
    title: "Data Science & BI Dashboard",
    subtitle: "Exploratory Analytics, Outlier Detection & Trend Insights",
    category: "Data & AI",
    desc: "Dashboard analisis data interaktif dengan visualisasi exploratory data analysis (EDA) dan forecasting tren.",
    fullDesc: "Dashboard Business Intelligence interaktif untuk menganalisis tren data besar, mendeteksi korelasi variabel, serta memprediksi pola masa depan. Dilengkapi filter multi-dimensi, heat map korelasi, dan ekspor insight otomatis untuk menunjang keputusan bisnis.",
    problem: "Eksplorasi data mentah dalam spreadsheet membingungkan pengambil keputusan dan lambat dalam menemukan pola penting.",
    solution: "Visualisasi interaktif Plotly dengan agregasi otomatis, outlier detection, dan ringkasan statistik komprehensif.",
    highlights: [
      "Exploratory Data Analysis (EDA) interaktif multi-filter",
      "Correlation matrix heatmap & distribution histograms",
      "Automated outlier & missing values detection",
      "Dynamic trend projection & summary metric cards"
    ],
    metrics: { label: "Volume Data", value: "100k+ Records" },
    tags: ["Python", "Data Science", "Pandas", "Plotly", "Streamlit", "Scikit-Learn"],
    image: "/projects/data-science.jpg",
    link: "https://data-science-xi.vercel.app/",
    status: "Live",
    color: "#e83a7b"
  },
  {
    id: "mcgoo-guide",
    channel: "CH 10",
    title: "MCGOO Gaming Strategy Guide",
    subtitle: "Interactive Esports Tier-List & Synergy Meta Builder",
    category: "Web & App",
    desc: "Landing page panduan strategi game mobile dengan kalkulator sinergi, tier-list dinamis, dan UI interaktif.",
    fullDesc: "Platform web komunitas gaming yang menyajikan panduan strategi, sinergi commander, tier-list hero, dan rekomendasi kombinasi item. Memiliki antarmuka visual yang terinspirasi dari game modern dengan animasi dinamis.",
    problem: "Pemain kesulitan memantau update meta yang sering berubah setiap patch dan membutuhkan kalkulator sinergi cepat saat bermain.",
    solution: "Web app responsif dengan database strategi terlengkap, kalkulator sinergi live, dan tampilan cepat dibuka di smartphone.",
    highlights: [
      "Interactive synergy calculator & composition builder",
      "Meta tier-list filter berdasarkan patch update terbaru",
      "Pencarian cepat hero & item database",
      "Dark mode gaming aesthetic dengan animasi smooth"
    ],
    metrics: { label: "Komunitas Pembaca", value: "Ribuan Gamers" },
    tags: ["React", "Tailwind CSS", "Vite", "Gaming UI", "Tier List"],
    image: "/projects/mcgoo-guide.jpg",
    link: "https://magicchestguide.vercel.app/",
    status: "Live",
    color: "#e8a03a"
  },
  {
    id: "berita-live",
    channel: "CH 11",
    title: "Portal Berita Live Mandiri",
    subtitle: "Realtime News Feed Aggregator & Clean Reader Experience",
    category: "Web & App",
    desc: "Portal berita dengan konten dinamis, kategori berita, pencarian artikel real-time, dan pembacaan bebas distraksi.",
    fullDesc: "Aplikasi portal berita modern dengan update konten secara real-time melalui integrasi REST API. Dilengkapi sistem navigasi kategori berita, pencarian artikel instan, pembacaan artikel bebas iklan yang bersih, dan mode simpan bacaan.",
    problem: "Situs berita konvensional sering penuh dengan pop-up iklan yang mengganggu dan proses pencarian berita lama.",
    solution: "Antarmuka minimalis modern yang cepat dimuat, layout typography yang nyaman dibaca, dan fitur search real-time.",
    highlights: [
      "Live REST API news integration with category filtering",
      "Instant debounced search bar",
      "Bookmark & read-later local storage synchronization",
      "Clean reader view & social share integration"
    ],
    metrics: { label: "Sinkronisasi Berita", value: "Live REST API" },
    tags: ["React", "REST API", "Tailwind CSS", "News API", "Vercel"],
    image: "/projects/berita-live.jpg",
    link: "https://fe-berita-mandiri-seal.vercel.app/",
    status: "Live",
    color: "#22c55e"
  },
  {
    id: "warga-rt",
    channel: "CH 12",
    title: "WargaRT02 Smart App & IoT",
    subtitle: "Connected Neighborhood Governance & Smart Barrier Gate",
    category: "Industrial & IoT",
    desc: "Aplikasi manajemen warga RT 02 dengan fitur iuran, pengumuman, dan data kependudukan berbasis IoT.",
    fullDesc: "Aplikasi seluler dan web terpadu untuk pengelolaan rukun tetangga (RT 02 Graha Cikarang). Mengintegrasikan pencatatan iuran transparan dengan mutasi otomatis, pelaporan keluhan warga, dan kontrol barrier gate masuk komplek berbasis mikrokontroler IoT.",
    problem: "Pungutan iuran warga masih menggunakan kupon manual yang rawan selisih, dan pengumuman keamanan sering tidak sampai merata.",
    solution: "Platform digital terpadu untuk warga: cek status iuran, notifikasi broadcast darurat, dan akses portal gerbang perumahan.",
    highlights: [
      "Digital citizen dues (iuran bulanan) tracker with payment proof",
      "Smart gate barrier control integration via mobile authentication",
      "Emergency SOS alert button to security post",
      "Pengumuman digital & broadcast pesan RT terverifikasi"
    ],
    metrics: { label: "Implementasi", value: "Komunitas RT 02" },
    tags: ["Flutter", "Firebase", "IoT ESP32", "Dart", "Smart City"],
    image: "/projects/warga-rt.jpg",
    status: "In Development",
    color: "#6366f1"
  }
];

