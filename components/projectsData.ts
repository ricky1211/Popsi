export interface ProjectGalleryItem {
  title: string;
  image: string;
  badge?: string;
}

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
  gallery?: ProjectGalleryItem[];
  link?: string;
  status: "Live" | "Enterprise" | "In Dev";
  color: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "predictive-maintenance",
    channel: "CH 01",
    title: "Predictive Maintenance",
    subtitle: "Astra MTM · IoT Telemetry & Sensor Alert",
    category: "Industrial & IoT",
    desc: "Sistem pemantauan prediktif getaran (RMS vibration) & suhu bearing/bushing mesin Jingduan 630T real-time dengan ambang batas alarm ISO otomatis.",
    problem: "Kerusakan mendadak pada bearing & bushing mesin press/forging beresiko fatal dan menghentikan seluruh lini produksi tanpa peringatan dini.",
    solution: "Telemetri multi-sensor live (Mode TV & Web Dashboard), tren getaran sumbu Z, serta auto-alert saat suhu/getaran melewati set point bahaya.",
    highlights: [
      "Live TV Mode: Telemetri 6 titik sensor Jingduan 630T",
      "Tren getaran sumbu Z Crown Frame & Suhu Bushing",
      "Pengaturan Set Point Warning & Danger berbasis ISO",
      "Alarm audio instan & notifikasi pop-up saat deviasi"
    ],
    metrics: { label: "Telemetry Live", value: "Real-Time Sensor" },
    tags: ["IoT Sensor", "Real-Time Telemetry", "ISO Vibration", "Dashboard TV"],
    image: "/projects/maintenance/predictive-tv-monitoring.png",
    gallery: [
      {
        title: "Monitoring Real-Time (Mode TV JINGDUAN-630T)",
        image: "/projects/maintenance/predictive-tv-monitoring.png",
        badge: "Live Telemetry"
      },
      {
        title: "Dashboard Sensor (Tren Suhu & Getaran RMS)",
        image: "/projects/maintenance/predictive-sensor-dashboard.png",
        badge: "Sensor Analytics"
      },
      {
        title: "Pengaturan Set Point Warning & Danger Sensor",
        image: "/projects/maintenance/predictive-setpoint-config.png",
        badge: "ISO Threshold"
      },
      {
        title: "Portal Maintenance Apps Astra MTM",
        image: "/projects/maintenance/mtm-portal-hub.png",
        badge: "Portal Hub"
      }
    ],
    status: "Enterprise",
    color: "#f97316"
  },
  {
    id: "preventive-maintenance",
    channel: "CH 02",
    title: "Preventive Maintenance",
    subtitle: "Astra MTM · PM Schedule & Machine Accuracy",
    category: "Industrial & IoT",
    desc: "Platform manajemen perawatan mesin berkala (PM), monitoring kepatuhan 96%, kalender jadwal shift, inspeksi akurasi geometri, hingga pelacakan overhaul mesin berat.",
    problem: "Jadwal servis berkala 90 unit mesin sering tercecer, keterlambatan identifikasi deviasi akurasi, dan minimnya rekam jejak overhaul mesin.",
    solution: "Dashboard PM & Accuracy terpusat dengan kalender eksekusi dinamis, evaluasi akurasi CNC/Forging, Pareto Abnormality PICA, dan progress overhaul.",
    highlights: [
      "Dashboard PM 96.0% Achieved & 94.5% Availability",
      "Kalender jadwal PM bulanan interaktif (420 Plan)",
      "Machine Accuracy Check standar deviasi geometris",
      "Pareto Abnormality & Breakdown Management (PICA)",
      "Pelacakan Overhaul Mesin Berat (Spindle & Linier)"
    ],
    metrics: { label: "Pencapaian PM", value: "96.0% (Avail 94.5%)" },
    tags: ["PM Scheduling", "Machine Accuracy", "Pareto PICA", "Overhaul Tracking"],
    image: "/projects/maintenance/preventive-pm-dashboard.png",
    gallery: [
      {
        title: "Dashboard PM & Machine Accuracy (90 Unit)",
        image: "/projects/maintenance/preventive-pm-dashboard.png",
        badge: "Executive PM"
      },
      {
        title: "Kalender Jadwal PM & Eksekusi Shift",
        image: "/projects/maintenance/preventive-calendar-schedule.png",
        badge: "Calendar PM"
      },
      {
        title: "Machine Accuracy Check & Standar Toleransi",
        image: "/projects/maintenance/preventive-accuracy-check.png",
        badge: "Precision Check"
      },
      {
        title: "Abnormality & Breakdown Pareto (PICA)",
        image: "/projects/maintenance/preventive-abnormality-pareto.png",
        badge: "Pareto & RCA"
      },
      {
        title: "Overhaul Schedule & Scope of Work Tracking",
        image: "/projects/maintenance/preventive-overhaul-tracking.png",
        badge: "Overhaul"
      },
      {
        title: "Portal Maintenance Apps Astra MTM",
        image: "/projects/maintenance/mtm-portal-hub.png",
        badge: "Portal Hub"
      }
    ],
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
    title: "Quality Claim Customers",
    subtitle: "Astra MTM · Customer Complaint & Defect Resolution",
    category: "Web & App",
    desc: "Sistem pelacakan dan resolusi komplain mutu pelanggan Astra MTM (AHM, ADM, Hino, Toyota) dengan analisa akar masalah (Root Cause), Pareto cacat produk, dan verifikasi tindakan perbaikan.",
    problem: "Penanganan komplain pelanggan lambat dimonitor, status FMEA/ECN/C.Plan tidak terpantau transparan, dan waktu tanggap melewati batas SLA.",
    solution: "Dashboard QA/QC komprehensif dengan metrik resolusi real-time, register komplain otomatis, matriks harian, dan integrasi persetujuan dokumen mutu.",
    highlights: [
      "Dashboard komplain pelanggan real-time (AHM, ADM, Hino, Toyota)",
      "Pareto analisis defect dominan (Karat, Run-out, Crack Forging)",
      "Form input terstandarisasi dengan Root Cause (DM & DO)",
      "Tracking status dokumen mutu (FMEA, ECN, C.Plan, C.Sheet, MPS)",
      "Matriks komplain harian & rekap laporan tahunan otomatis"
    ],
    metrics: { label: "Resolusi Kasus", value: "66.7% Closed (2.9 Hari)" },
    tags: ["Quality Assurance", "Customer Complaint", "Pareto Defect", "FMEA/ECN Tracking"],
    image: "/projects/claim-customers/dashboard-komplain.png",
    gallery: [
      {
        title: "Dashboard Utama Komplain Pelanggan (Astra MTM)",
        image: "/projects/claim-customers/dashboard-komplain.png",
        badge: "Executive QA"
      },
      {
        title: "Portal Login Quality Complaint System",
        image: "/projects/claim-customers/login-system.png",
        badge: "Login Auth"
      },
      {
        title: "Form Input Registrasi Komplain & Root Cause",
        image: "/projects/claim-customers/form-input-claim.png",
        badge: "Input Claim"
      },
      {
        title: "Daftar Komplain & Otorisasi Approval",
        image: "/projects/claim-customers/daftar-komplain-approval.png",
        badge: "Approval QA"
      },
      {
        title: "Database Arsip & Status Klaim Pelanggan",
        image: "/projects/claim-customers/database-claim.png",
        badge: "Database"
      },
      {
        title: "Matriks Komplain Harian & Trend Defect",
        image: "/projects/claim-customers/matriks-komplain-harian.png",
        badge: "Matriks Harian"
      },
      {
        title: "Laporan Rekap Bulanan & Tahunan",
        image: "/projects/claim-customers/laporan-tahunan.png",
        badge: "Laporan Tahunan"
      },
      {
        title: "Master Data Customer & Nomor Part",
        image: "/projects/claim-customers/master-customer-part.png",
        badge: "Master Part"
      }
    ],
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
