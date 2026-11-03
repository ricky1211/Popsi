export interface ProjectItem {
  id: string;
  channel: string;
  title: string;
  subtitle: string;
  category: "Industrial & IoT" | "Web & App" | "Data & AI";
  desc: string;
  problem: string;
  solution: string;
  highlights: string[];
  metrics: { label: string; value: string };
  tags: string[];
  image: string;
  link?: string;
  status: "Live" | "Enterprise" | "In Dev";
  color: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "predictive-maintenance",
    channel: "CH 01",
    title: "Predictive Maintenance",
    subtitle: "IoT Telemetry · ML Failure Prediction",
    category: "Industrial & IoT",
    desc: "Monitoring sensor getaran & suhu mesin via ML untuk mencegah kerusakan mendadak.",
    problem: "Unplanned downtime mesin menyebabkan kerugian puluhan juta rupiah per jam.",
    solution: "Model Random Forest & FFT memprediksi sisa umur mesin (RUL) sebelum rusak.",
    highlights: [
      "Vibration spectrum FFT",
      "Alert bot Telegram real-time",
      "Sensor MQTT < 300ms latency",
      "InfluxDB & Grafana dashboard"
    ],
    metrics: { label: "Downtime", value: "-38% Unplanned" },
    tags: ["IoT ESP32", "Python ML", "FastAPI", "InfluxDB"],
    image: "/projects/predictive-maintenance.jpg",
    status: "Enterprise",
    color: "#f97316"
  },
  {
    id: "preventive-maintenance",
    channel: "CH 02",
    title: "Preventive Maintenance",
    subtitle: "Digital Work Orders · MTBF / MTTR",
    category: "Industrial & IoT",
    desc: "Digitalisasi checklist inspeksi fisik & otomasi jadwal servis mesin berkala.",
    problem: "Servis mesin sering terlewat akibat pencatatan manual kertas yang berserakan.",
    solution: "Verifikasi fisik via QR-Code mesin dan perhitungan otomatis MTBF & MTTR.",
    highlights: [
      "QR-code tag verifikasi teknisi",
      "Auto calendar PM generator",
      "Kalkulasi MTBF/MTTR live",
      "Logbook digital export PDF"
    ],
    metrics: { label: "Kepatuhan PM", value: "99.4% On-Time" },
    tags: ["Next.js", "PostgreSQL", "Node.js", "Docker"],
    image: "/projects/preventive-maintenance.jpg",
    status: "Enterprise",
    color: "#0284c7"
  },
  {
    id: "andon-quality",
    channel: "CH 03",
    title: "Andon Quality Display",
    subtitle: "Real-time Shopfloor Stop & Alert",
    category: "Industrial & IoT",
    desc: "Display visual lantai pabrik real-time untuk sinyal abnormalitas dan line stop.",
    problem: "Keterlambatan respon supervisor saat terjadi defect berujung produk cacat lolos.",
    solution: "Andon visual berbasis WebSockets instan dengan notifikasi darurat < 500ms.",
    highlights: [
      "Board visual 3 warna standar pabrik",
      "Push alert leader smartwatch",
      "Auto-timer stoppage duration",
      "Analisa Pareto defect shift"
    ],
    metrics: { label: "Respon Leader", value: "< 45 Detik" },
    tags: ["WebSockets", "React", "MQTT", "Node.js"],
    image: "/projects/andon-quality.jpg",
    status: "Enterprise",
    color: "#ef4444"
  },
  {
    id: "claim-customers",
    channel: "CH 04",
    title: "Claim Customers 8D",
    subtitle: "Complaint Workflow · Root Cause Analysis",
    category: "Web & App",
    desc: "Portal terpadu penanganan komplain kualitas customer dengan alur investigasi 8D.",
    problem: "Penanganan klaim lambat di email membuat customer kecewa dan defect berulang.",
    solution: "Sistem tiket klaim terstandarisasi, countdown SLA, dan generator 8D Report.",
    highlights: [
      "Generator 8D Report otomatis",
      "Fishbone & 5-Why digital",
      "Upload bukti foto & video cacat",
      "SLA alert & counter kompensasi"
    ],
    metrics: { label: "Resolusi Klaim", value: "3x Lebih Cepat" },
    tags: ["React", "Express.js", "PostgreSQL", "Tailwind"],
    image: "/projects/claim-customers.jpg",
    status: "Enterprise",
    color: "#8b5cf6"
  },
  {
    id: "capex",
    channel: "CH 05",
    title: "Capex Management",
    subtitle: "Capital Budget · Feasibility & Approval",
    category: "Web & App",
    desc: "Evaluasi proposal investasi mesin bernilai miliaran, analisa ROI & approval berjenjang.",
    problem: "Pengajuan anggaran modal rawan salah hitung kelayakan dan sulit dikontrol.",
    solution: "Kalkulator otomatis ROI/NPV/Payback Period dan alur persetujuan multi-level.",
    highlights: [
      "Kalkulator kelayakan finansial ROI/NPV",
      "Multi-tier approval workflow",
      "Budget lock per department",
      "Komparasi tender vendor"
    ],
    metrics: { label: "Akurasi Budget", value: "100% Terkontrol" },
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL"],
    image: "/projects/capex.jpg",
    status: "Enterprise",
    color: "#10b981"
  },
  {
    id: "absensi-seminar",
    channel: "CH 06",
    title: "Absensi Seminar Live",
    subtitle: "QR Code Pass · Live Counter & Certificate",
    category: "Web & App",
    desc: "Sistem absensi event kilat via QR-Code tiket dengan auto-generate e-sertifikat.",
    problem: "Antrean registrasi seminar manual menggunakan kertas memakan waktu lama.",
    solution: "Validasi kehadiran < 2 detik via Firebase Realtime dan ekspor data ke Excel.",
    highlights: [
      "Scan QR Code kilat < 2 detik",
      "Live counter kapasitas ruangan",
      "Export Excel peserta 1 klik",
      "Kirim e-sertifikat otomatis"
    ],
    metrics: { label: "Kapasitas Event", value: "500+ Peserta" },
    tags: ["Firebase", "React", "QR Code", "Vercel"],
    image: "/projects/absensi-seminar.jpg",
    link: "https://absensi-seminar.vercel.app/",
    status: "Live",
    color: "#e8673a"
  },
  {
    id: "landing-seo",
    channel: "CH 07",
    title: "Landing Page SEO",
    subtitle: "Core Web Vitals · High Conversion",
    category: "Web & App",
    desc: "Landing page promosi teroptimasi SEO teknis dengan skor performa Google 98+.",
    problem: "Website bisnis lambat dimuat dan sulit bersaing di halaman pencarian Google.",
    solution: "Next.js Static Site Generation dengan struktur metadata JSON-LD super cepat.",
    highlights: [
      "Lighthouse 98/100 Mobile",
      "Schema JSON-LD rich snippets",
      "Integrasi direct WhatsApp CTA",
      "Mobile responsive adaptif"
    ],
    metrics: { label: "Lighthouse", value: "98/100 Mobile" },
    tags: ["Next.js", "SEO", "Tailwind", "Vercel"],
    image: "/projects/landing-seo.jpg",
    link: "https://project-uas-digital-marketing-klmpk.vercel.app/",
    status: "Live",
    color: "#3a7be8"
  },
  {
    id: "nlp-project",
    channel: "CH 08",
    title: "NLP Text Analytics",
    subtitle: "Indonesian Sentiment · Slang Normalizer",
    category: "Data & AI",
    desc: "Analisis sentimen ulasan publik berbahasa Indonesia dengan visualisasi grafis.",
    problem: "Bahasa ulasan konsumen sarat singkatan dan slang yang sukar dianalisis.",
    solution: "Pipeline preprocessing kustom dengan stemming Sastrawi dan model SVM.",
    highlights: [
      "Stemming & slang normalizer",
      "Distribusi sentimen 3 kelas",
      "Visualisasi Word Cloud interaktif",
      "Batch CSV upload analyzer"
    ],
    metrics: { label: "Akurasi Model", value: "89.2% Test" },
    tags: ["Python", "NLP", "Streamlit", "Scikit-Learn"],
    image: "/projects/nlp-project.jpg",
    link: "https://project-uas-nlp.vercel.app/",
    status: "Live",
    color: "#5a3ae8"
  },
  {
    id: "data-science",
    channel: "CH 09",
    title: "Data Science Dashboard",
    subtitle: "EDA Analytics · Trend Forecasting",
    category: "Data & AI",
    desc: "Dashboard eksplorasi data multi-variat dengan chart interaktif dan deteksi anomali.",
    problem: "Data spreadsheet mentah sulit dipahami tanpa visualisasi tren yang jelas.",
    solution: "Visualisasi interaktif Plotly dengan korelasi matriks dan deteksi outlier.",
    highlights: [
      "EDA multi-filter dinamis",
      "Heatmap matriks korelasi",
      "Outlier detector otomatis",
      "Ringkasan statistik instan"
    ],
    metrics: { label: "Data Volume", value: "100k+ Records" },
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    image: "/projects/data-science.jpg",
    link: "https://data-science-xi.vercel.app/",
    status: "Live",
    color: "#e83a7b"
  },
  {
    id: "mcgoo-guide",
    channel: "CH 10",
    title: "MCGOO Strategy Guide",
    subtitle: "Gaming Tier-List · Synergy Builder",
    category: "Web & App",
    desc: "Portal panduan strategi game mobile dengan kalkulator sinergi meta terkini.",
    problem: "Gamer kesulitan mencari kombinasi strategi terbaik saat bermain cepat.",
    solution: "Aplikasi web responsif dengan tier-list live dan kalkulator sinergi instan.",
    highlights: [
      "Kalkulator sinergi live",
      "Tier-list patch meta update",
      "Pencarian hero & item instan",
      "Dark mode gaming aesthetic"
    ],
    metrics: { label: "Readers", value: "Ribuan Gamers" },
    tags: ["React", "Vite", "Tailwind", "Gaming UI"],
    image: "/projects/mcgoo-guide.jpg",
    link: "https://magicchestguide.vercel.app/",
    status: "Live",
    color: "#e8a03a"
  },
  {
    id: "berita-live",
    channel: "CH 11",
    title: "Portal Berita Mandiri",
    subtitle: "REST API Feed · Distraction-Free",
    category: "Web & App",
    desc: "Agregator berita dinamis dengan filter kategori dan mode baca bebas distraksi.",
    problem: "Situs berita konvensional dipenuhi iklan yang mengganggu kenyamanan baca.",
    solution: "Antarmuka bersih, update live REST API, dan fitur simpan bacaan lokal.",
    highlights: [
      "Live REST API news update",
      "Instant debounced search",
      "Bookmark baca nanti",
      "Clean distraction-free view"
    ],
    metrics: { label: "Sync Speed", value: "Live REST API" },
    tags: ["React", "REST API", "Tailwind", "Vercel"],
    image: "/projects/berita-live.jpg",
    link: "https://fe-berita-mandiri-seal.vercel.app/",
    status: "Live",
    color: "#22c55e"
  },
  {
    id: "warga-rt",
    channel: "CH 12",
    title: "WargaRT02 Smart App",
    subtitle: "Civic Governance · IoT Barrier Gate",
    category: "Industrial & IoT",
    desc: "Aplikasi rukun tetangga terintegrasi: iuran digital, pengumuman & gerbang IoT.",
    problem: "Pengelolaan iuran warga manual rawan selisih dan gerbang komplek belum otomatis.",
    solution: "Portal kas RT transparan dan pembuka barrier gate komplek berbasis ESP32.",
    highlights: [
      "Iuran digital & bukti bayar",
      "Buka palang gerbang via HP",
      "Tombol SOS darurat pos satpam",
      "Broadcast pengumuman warga"
    ],
    metrics: { label: "Komunitas", value: "RT 02 Cikarang" },
    tags: ["Flutter", "Firebase", "ESP32 IoT", "Dart"],
    image: "/projects/warga-rt.jpg",
    status: "In Dev",
    color: "#6366f1"
  }
];
