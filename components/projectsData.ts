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
    subtitle: "Astra MTM · Quality Control Shopfloor Dashboard",
    category: "Industrial & IoT",
    desc: "Dashboard visual monitoring status lini produksi (40 Line: RUN, IDLE, STOP) real-time di lantai pabrik Astra MTM dengan peringatan instan saat terjadi defect.",
    problem: "Keterlambatan respon leader/supervisor saat terjadi breakdown atau defect berujung pada lolosnya produk reject dan kerugian line stop.",
    solution: "Sistem AndonQC Client terpusat dengan filter area (MPI, Visual, Assy, Machining, Forging), visualisasi composite status, dan deteksi abnormalitas cepat.",
    highlights: [
      "Monitoring 40 Lini Produksi aktif (24 RUN · 10 IDLE · 6 STOP)",
      "Kategori Area: MPI, Visual, Assy, Machining, Forging",
      "Kalkulasi total reject defect (258 pcs) & persentase change",
      "Refresh data real-time dengan status composite alert"
    ],
    metrics: { label: "Monitoring Line", value: "40 Line Aktif" },
    tags: ["Andon QC", "Shopfloor Alert", "Industrial Dashboard", "Line Control"],
    image: "/projects/andon-quality.png",
    gallery: [
      {
        title: "AndonQC Client - Quality Control Dashboard (Astra MTM)",
        image: "/projects/andon-quality.png",
        badge: "Andon Client"
      }
    ],
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
        title: "Form Input Registrasi Komplain & Root Cause Analysis",
        image: "/projects/claim-customers/form-input-claim.png",
        badge: "Input Claim"
      },
      {
        title: "Daftar Komplain & Otorisasi Approval QA",
        image: "/projects/claim-customers/daftar-komplain-approval.png",
        badge: "Approval QA"
      },
      {
        title: "Database Claim: Nilai Klaim FG (Rp 215,7 Juta)",
        image: "/projects/claim-customers/database-claim-nilai.png",
        badge: "Nilai Klaim"
      },
      {
        title: "Matriks Komplain Harian & Reject Monitoring",
        image: "/projects/claim-customers/matriks-komplain-harian.png",
        badge: "Matriks Harian"
      },
      {
        title: "Matriks Daftar OEM Pelanggan Otomotif",
        image: "/projects/claim-customers/matriks-oem-pelanggan.png",
        badge: "OEM Pelanggan"
      },
      {
        title: "Laporan Bulanan & Resume Komplain Pelanggan",
        image: "/projects/claim-customers/laporan-resume-komplain.png",
        badge: "Resume Laporan"
      }
    ],
    status: "Enterprise",
    color: "#8b5cf6"
  },
  {
    id: "qpr-astra",
    channel: "CH 05",
    title: "QPR & Confirmation Letter",
    subtitle: "Astra MTM · Quality Problem Report & Vendor Settlement",
    category: "Web & App",
    desc: "Sistem digital terintegrasi pelacakan Quality Problem Report (QPR) dan penerbitan Confirmation Letter (CL) untuk klaim mutu internal & vendor di PT Menara Terus Makmur (Astra Otoparts Group).",
    problem: "Dokumen klaim kualitas mengendap berhari-hari pada antrean otorisasi (Section Head QA, Dept Head, Div Head, Purchasing, Finance) dan perhitungan klaim vendor belum tersinkronisasi.",
    solution: "Dashboard monitoring lead time dokumen mengendap per peran otorisasi secara real-time, approval multi-tier digital, email reminder otomatis, dan integrasi penagihan SSC Billing & Payment.",
    highlights: [
      "Dashboard lead time & dokumen mengendap per peran otorisasi",
      "Alur approval berjenjang digital: Section Head QA, Dept Head, Div Head",
      "Form pembuatan Confirmation Letter (CL) & perhitungan allowance",
      "Email reminder otomatis & pelacakan status pengiriman vendor",
      "Integrasi SSC Billing & tracking pelunasan SSC Payment"
    ],
    metrics: { label: "Lead Time Status", value: "Real-Time Tracking" },
    tags: ["Quality Problem Report", "Confirmation Letter", "Multi-Tier Approval", "SSC Billing"],
    image: "/projects/qpr/dashboard.png",
    gallery: [
      {
        title: "Dashboard Utama Status Lead Time & QPR/CL",
        image: "/projects/qpr/dashboard.png",
        badge: "Executive QPR"
      },
      {
        title: "Form Pengisian Quality Problem Report (QPR)",
        image: "/projects/qpr/pengisian-qpr.png",
        badge: "Input QPR"
      },
      {
        title: "Approval Dokumen QPR Otorisasi Berjenjang",
        image: "/projects/qpr/approval-qpr.png",
        badge: "Approval QPR"
      },
      {
        title: "Pembuatan Confirmation Letter (CL) Vendor",
        image: "/projects/qpr/buat-cl.png",
        badge: "Buat CL"
      },
      {
        title: "Approval Confirmation Letter & Allowance Klaim",
        image: "/projects/qpr/approval-cl.png",
        badge: "Approval CL"
      },
      {
        title: "Kirim Confirmation Letter (CL) ke Vendor",
        image: "/projects/qpr/kirim-cl-vendor.png",
        badge: "Vendor Dispatch"
      },
      {
        title: "Email Reminder Otomatis Penanganan Klaim",
        image: "/projects/qpr/email-reminder.png",
        badge: "Auto Reminder"
      },
      {
        title: "Integrasi SSC Billing & Settlement Kompensasi",
        image: "/projects/qpr/ssc-billing.png",
        badge: "SSC Billing"
      },
      {
        title: "Tracking Pembayaran & Pelunasan SSC Payment",
        image: "/projects/qpr/ssc-payment.png",
        badge: "SSC Payment"
      },
      {
        title: "Rekapitulasi Daftar Dokumen NCR, QPR & CL",
        image: "/projects/qpr/list-qpr-cl.png",
        badge: "Master List"
      },
      {
        title: "Master Database Parts & Vendor Rekanan",
        image: "/projects/qpr/parts-vendor.png",
        badge: "Parts Vendor"
      }
    ],
    status: "Enterprise",
    color: "#06b6d4"
  },
  {
    id: "capex",
    channel: "CH 06",
    title: "Capex Management & BODR",
    subtitle: "Astra MTM · Capital Expenditure & BOD Resolution",
    category: "Web & App",
    desc: "Sistem otomasi evaluasi proposal investasi modal (Capex), tracking alokasi anggaran, analisa ROI & kelayakan finansial, serta alur otorisasi berjenjang Board of Directors Resolution (BODR) di PT Menara Terus Makmur.",
    problem: "Pengajuan investasi mesin presisi bernilai miliaran rupiah sebelumnya rawan overbudget, kalkulasi ROI lambat, dan pelacakan approval dokumen BODR sulit dimonitor lintas departemen.",
    solution: "Platform digital terpadu untuk pengajuan proposal Capex, kalkulasi otomatis kelayakan finansial, tracking realisasi anggaran vs budget, serta workflow multi-tier approval terintegrasi.",
    highlights: [
      "Dashboard realisasi Capex & alokasi budget per departemen",
      "Pengajuan proposal investasi modal (Marketing, Production, QA, Engineering)",
      "Tracking dokumen BODR (Board of Directors Resolution) multi-tier",
      "Monitoring realisasi vs budget & audit pengadaan aset mesin"
    ],
    metrics: { label: "Pengajuan Terkontrol", value: "Multi-Tier BODR" },
    tags: ["Capital Expenditure", "BODR Approval", "Budget Tracking", "Astra MTM"],
    image: "/projects/capex/01-dashboard.png",
    gallery: [
      {
        title: "Dashboard Utama Capex & Pricing Management",
        image: "/projects/capex/01-dashboard.png",
        badge: "Executive Capex"
      },
      {
        title: "Form Pengajuan Proposal Capex Marketing (Rp 1.000 Juta)",
        image: "/projects/capex/02-pengajuan-marketing.png",
        badge: "Pengajuan Capex"
      },
      {
        title: "Perencanaan & Tracking BODR (Board of Directors)",
        image: "/projects/capex/03-bodr-planning.png",
        badge: "BODR Planning"
      },
      {
        title: "Capex Tracking & Monitoring Real-Time",
        image: "/projects/capex/04-capex-tracking.png",
        badge: "Tracking Capex"
      },
      {
        title: "Alokasi & Kontrol Batas Budget Departemen",
        image: "/projects/capex/05-budget-allocation.png",
        badge: "Alokasi Budget"
      },
      {
        title: "Matriks Approval Otorisasi Multi-Tier Digital",
        image: "/projects/capex/06-approval-matrix.png",
        badge: "Approval Matrix"
      },
      {
        title: "Komparasi Realisasi vs Anggaran Investasi",
        image: "/projects/capex/07-realization-vs-budget.png",
        badge: "Realisasi vs Budget"
      },
      {
        title: "Executive Summary & BOD Dashboard",
        image: "/projects/capex/08-executive-summary.png",
        badge: "BOD Summary"
      },
      {
        title: "Pengadaan Aset & Manajemen Vendor Tender",
        image: "/projects/capex/09-asset-procurement.png",
        badge: "Pengadaan Aset"
      },
      {
        title: "Closing & Audit Investasi Capex Mesin",
        image: "/projects/capex/10-closing-audit.png",
        badge: "Closing Audit"
      }
    ],
    status: "Enterprise",
    color: "#10b981"
  },
  {
    id: "absensi-seminar",
    channel: "CH 07",
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
    channel: "CH 08",
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
    channel: "CH 09",
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
    channel: "CH 10",
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
    channel: "CH 11",
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
    channel: "CH 12",
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
    channel: "CH 13",
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
