"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import {
  GitBranch, Briefcase, Mail, Phone, ExternalLink, MapPin,
  Code2, BookOpen, Award, Users, Layers, Clock, ChevronRight,
  Braces, Server, BarChart2, Smartphone, Wifi, Lock, Globe,
  Star, ArrowRight, Database
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GlobeCanvas = dynamic(() => import("@/components/GlobeCanvas"), { ssr: false });

const skills = [
  { icon: <Code2 size={20} />, label: "Frontend", items: ["HTML", "CSS", "React", "Next.js"] },
  { icon: <Server size={20} />, label: "Backend", items: ["PHP", "Python", "Java", "Dart"] },
  { icon: <Database size={20} />, label: "Database", items: ["MySQL", "PostgreSQL", "Firebase"] },
  { icon: <BarChart2 size={20} />, label: "Data", items: ["Data Analysis", "NLP", "Data Science"] },
  { icon: <Wifi size={20} />, label: "IoT", items: ["Arduino", "Sensor", "Mikrokontroler"] },
  { icon: <Globe size={20} />, label: "Deploy", items: ["Vercel", "Git", "GitHub"] },
];

const projects = [
  {
    title: "Absensi Seminar",
    desc: "Sistem absensi seminar real-time berbasis Firebase Database dengan fitur export Excel dan manajemen sertifikat.",
    tags: ["Firebase", "React", "Vercel"],
    link: "https://absensi-seminar.vercel.app/",
    icon: <Users size={24} />,
    color: "#e8673a",
    bg: "linear-gradient(135deg, #fff5f0 0%, #ffe0d0 100%)",
    soon: false,
  },
  {
    title: "Landing Page SEO",
    desc: "Landing page teroptimasi SEO untuk kampanye digital marketing dengan performa tinggi.",
    tags: ["Next.js", "SEO", "Marketing"],
    link: "https://project-uas-digital-marketing-klmpk.vercel.app/",
    icon: <Globe size={24} />,
    color: "#3a7be8",
    bg: "linear-gradient(135deg, #f0f5ff 0%, #d0e0ff 100%)",
    soon: false,
  },
  {
    title: "NLP Project",
    desc: "Aplikasi Natural Language Processing untuk analisis teks berbahasa Indonesia dengan visualisasi interaktif.",
    tags: ["Python", "NLP", "ML"],
    link: "https://project-uas-nlp.vercel.app/",
    icon: <Braces size={24} />,
    color: "#5a3ae8",
    bg: "linear-gradient(135deg, #f5f0ff 0%, #ddd0ff 100%)",
    soon: false,
  },
  {
    title: "MCGOO Guide",
    desc: "Landing page panduan Magic Chest untuk game mobile dengan UI yang menarik dan informatif.",
    tags: ["React", "Tailwind", "Landing Page"],
    link: "https://magicchestguide.vercel.app/",
    icon: <Star size={24} />,
    color: "#e8a03a",
    bg: "linear-gradient(135deg, #fffbf0 0%, #ffe8c0 100%)",
    soon: false,
  },
  {
    title: "Website Berita Live",
    desc: "Portal berita dengan konten dinamis, kategori berita, dan fitur pencarian artikel real-time.",
    tags: ["React", "REST API", "Frontend"],
    link: "https://fe-berita-mandiri-seal.vercel.app/",
    icon: <BookOpen size={24} />,
    color: "#22c55e",
    bg: "linear-gradient(135deg, #f0fff5 0%, #c8ffd8 100%)",
    soon: false,
  },
  {
    title: "Data Science Dashboard",
    desc: "Dashboard analisis data dengan visualisasi chart interaktif dan exploratory data analysis.",
    tags: ["Python", "Data Science", "Visualization"],
    link: "https://data-science-xi.vercel.app/",
    icon: <BarChart2 size={24} />,
    color: "#e83a7b",
    bg: "linear-gradient(135deg, #fff0f5 0%, #ffc8dc 100%)",
    soon: false,
  },
  {
    title: "WargaRT02 App",
    desc: "Aplikasi manajemen warga RT 02 dengan fitur iuran, pengumuman, dan data kependudukan berbasis IoT.",
    tags: ["Coming Soon", "Flutter", "Firebase"],
    link: "#",
    icon: <Smartphone size={24} />,
    color: "#94a3b8",
    bg: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
    soon: true,
  },
];

const publications = [
  { title: "Keamanan Sistem Operasi dalam Era Internet of Things", journal: "JATI – Sinta 4", year: "2025", icon: <Lock size={16} /> },
  { title: "Implementasi Aplikasi Toolkit Data Mining", journal: "Publikasi Artikel Jurnal", year: "2025", icon: <BarChart2 size={16} /> },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function SectionHeader({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ marginBottom: 52, textAlign: "center", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.6s, transform 0.6s" }}>
      <span className="section-label">{label}</span>
      <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.9rem,4vw,2.7rem)", margin: "10px 0 12px", lineHeight: 1.15 }}>{title}</h2>
      {sub && <p style={{ color: "var(--fg-muted)", maxWidth: 540, margin: "0 auto", fontSize: "1.02rem", lineHeight: 1.65 }}>{sub}</p>}
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const ticker = ["HTML","CSS","React","Next.js","PHP","Python","MySQL","Firebase","PostgreSQL","NLP","IoT","Data Science","Tailwind","Git","Vercel","Flutter","Java","Dart"];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />

      {/* HERO */}
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 16px", marginBottom: 24,
                opacity: mounted ? 1 : 0, transition: "opacity 0.5s"
              }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
                <span style={{ fontSize: "0.82rem", color: "var(--fg-muted)", fontWeight: 500 }}>Open to work · Cikarang, Indonesia</span>
              </div>
              <h1 style={{
                fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2.6rem,5.5vw,3.8rem)",
                lineHeight: 1.1, margin: "0 0 18px",
                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s 0.15s, transform 0.7s 0.15s"
              }}>
                Ricky Alfian<br />
                <span style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Saputra
                </span>
              </h1>
              <p style={{
                fontSize: "1.08rem", color: "var(--fg-muted)", lineHeight: 1.72, marginBottom: 32, maxWidth: 480,
                opacity: mounted ? 1 : 0, transition: "opacity 0.7s 0.3s"
              }}>
                Mahasiswa Teknik Informatika yang berfokus pada <strong style={{ color: "var(--fg)" }}>Frontend Development</strong>, <strong style={{ color: "var(--fg)" }}>Data Analysis</strong>, dan <strong style={{ color: "var(--fg)" }}>Database Management</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36, opacity: mounted ? 1 : 0, transition: "opacity 0.7s 0.4s" }}>
                <a href="#projects" className="btn-primary">Lihat Projects <ArrowRight size={16} /></a>
                <a href="https://porto-rubykappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline">Portfolio Lama</a>
              </div>
              <div style={{ display: "flex", gap: 12, opacity: mounted ? 1 : 0, transition: "opacity 0.7s 0.5s" }}>
                {[
                  { icon: <GitBranch size={18} />, href: "https://github.com/ricky1211", label: "GitHub" },
                  { icon: <Briefcase size={18} />, href: "https://www.linkedin.com/in/rkyalfnsptr", label: "LinkedIn" },
                  { icon: <Mail size={18} />, href: "mailto:rickyalfian751@gmail.com", label: "Email" },
                  { icon: <Phone size={18} />, href: "tel:+6285215784866", label: "Phone" },
                ].map(s => (
                  <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noopener noreferrer" style={{
                    width: 44, height: 44, borderRadius: 12, background: "var(--bg-card)",
                    border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--fg-muted)", textDecoration: "none", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Globe side */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "min(380px, 85vw)", aspectRatio: "1" }}>
                <div className="animate-float" style={{
                  position: "absolute", top: "5%", right: "-5%", zIndex: 2,
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14,
                  padding: "10px 16px", boxShadow: "0 8px 24px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}><Code2 size={15} /></div>
                  <div><div style={{ fontSize: "0.7rem", color: "var(--fg-muted)", fontWeight: 500 }}>Universitas</div><div style={{ fontSize: "0.82rem", fontWeight: 700 }}>Pelita Bangsa</div></div>
                </div>
                <div className="animate-float delay-200" style={{
                  position: "absolute", bottom: "10%", left: "-8%", zIndex: 2,
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14,
                  padding: "10px 16px", boxShadow: "0 8px 24px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent2)" }}><Star size={15} /></div>
                  <div><div style={{ fontSize: "0.7rem", color: "var(--fg-muted)", fontWeight: 500 }}>IPK</div><div style={{ fontSize: "0.82rem", fontWeight: 700 }}>3.55 / 4.00</div></div>
                </div>
                <div className="animate-float delay-400" style={{
                  position: "absolute", top: "45%", right: "-14%", zIndex: 2, transform: "translateY(-50%)",
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 14,
                  padding: "10px 16px", boxShadow: "0 8px 24px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "#f0fff5", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e" }}><Award size={15} /></div>
                  <div><div style={{ fontSize: "0.7rem", color: "var(--fg-muted)", fontWeight: 500 }}>Publikasi</div><div style={{ fontSize: "0.82rem", fontWeight: 700 }}>Sinta 4</div></div>
                </div>
                <div style={{ width: "100%", height: "100%", padding: 24 }}><GlobeCanvas /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden", padding: "13px 0", background: "var(--bg-card)" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 0, width: "max-content" }}>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} style={{ padding: "0 24px", color: "var(--fg-muted)", fontWeight: 500, fontSize: "0.87rem", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />{t}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "90px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gap: 60, alignItems: "center" }} className="two-col">
          <Reveal>
            <div style={{ position: "relative", maxWidth: 340, margin: "0 auto" }}>
              <div style={{
                borderRadius: 28, overflow: "hidden", border: "1px solid var(--border)",
                boxShadow: "0 20px 60px var(--shadow)", aspectRatio: "3/4",
                background: "linear-gradient(135deg,#f5f0ea,#e8ddd4)",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <img src="/profile.jpg" alt="Ricky Alfian Saputra" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const fb = (e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement;
                    if (fb) fb.style.display = "flex";
                  }} />
                <div style={{ display: "none", flexDirection: "column", alignItems: "center", gap: 10, padding: 32, textAlign: "center" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 32, fontWeight: 700 }}>R</div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "0.82rem" }}>Tambahkan foto:<br />/public/profile.jpg</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: -14, right: -14, zIndex: -1, width: "100%", height: "100%", borderRadius: 28, border: "2px solid var(--border)" }} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="section-label">About Me</span>
              <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.8rem,3.5vw,2.5rem)", margin: "10px 0 18px", lineHeight: 1.2 }}>
                Membangun solusi digital yang bermakna
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ color: "var(--fg-muted)", lineHeight: 1.75, marginBottom: 14 }}>
                Mahasiswa <strong style={{ color: "var(--fg)" }}>Teknik Informatika, Universitas Pelita Bangsa</strong> Cikarang, dengan keahlian utama di bidang frontend web development dan analisis data.
              </p>
              <p style={{ color: "var(--fg-muted)", lineHeight: 1.75, marginBottom: 28 }}>
                Berpengalaman membangun antarmuka web responsif, sistem informasi berbasis data, dan berkontribusi dalam project IoT komunitas. Memiliki 2 publikasi ilmiah di 2025.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
                {[
                  { icon: <MapPin size={15} />, label: "Lokasi", value: "Cikarang, Indonesia" },
                  { icon: <BookOpen size={15} />, label: "Studi", value: "Teknik Informatika" },
                  { icon: <Award size={15} />, label: "IPK", value: "3.55 / 4.00" },
                  { icon: <Clock size={15} />, label: "Freelance", value: "Feb 2023 – Now" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.73rem", color: "var(--fg-muted)", fontWeight: 500 }}>{item.label}</div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 600 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://github.com/ricky1211" target="_blank" rel="noopener noreferrer" className="btn-primary"><GitBranch size={16} /> GitHub</a>
                <a href="https://www.linkedin.com/in/rkyalfnsptr" target="_blank" rel="noopener noreferrer" className="btn-outline"><Briefcase size={16} /> LinkedIn</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <section id="skills" style={{ padding: "90px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader label="Skills" title="Teknologi & Keahlian" sub="Berbagai teknologi yang saya kuasai dalam membangun solusi digital yang lengkap." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="card" style={{ padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>{s.icon}</div>
                    <h3 style={{ margin: 0, fontSize: "0.97rem", fontWeight: 700 }}>{s.label}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.items.map(it => <span key={it} className="tag">{it}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "90px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader label="Projects" title="Karya & Project" sub="Kumpulan project yang telah saya bangun, mulai dari web app, data science, hingga NLP." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 22 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="card" style={{ overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Visual */}
                <div style={{ background: p.bg, height: 148, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  {p.soon ? (
                    <div style={{ textAlign: "center" }}>
                      <div style={{ width: 60, height: 60, borderRadius: 14, background: "#e8e8ec", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", color: "#94a3b8" }}>{p.icon}</div>
                      <span style={{ background: "#e2e8f0", color: "#64748b", padding: "3px 12px", borderRadius: 100, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>Coming Soon</span>
                    </div>
                  ) : (
                    <>
                      <div style={{ width: 64, height: 64, borderRadius: 16, background: p.color + "22", display: "flex", alignItems: "center", justifyContent: "center", color: p.color }}>{p.icon}</div>
                      <div style={{ position: "absolute", right: -16, bottom: -16, width: 90, height: 90, borderRadius: "50%", background: p.color + "18" }} />
                      <div style={{ position: "absolute", left: -10, top: -10, width: 55, height: 55, borderRadius: "50%", background: p.color + "12" }} />
                    </>
                  )}
                </div>
                <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: "1.05rem", fontWeight: 700 }}>{p.title}</h3>
                  <p style={{ color: "var(--fg-muted)", fontSize: "0.88rem", lineHeight: 1.62, margin: "0 0 14px", flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  {!p.soon ? (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: p.color, fontWeight: 600, fontSize: "0.86rem", textDecoration: "none", transition: "gap 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.gap = "10px")} onMouseLeave={e => (e.currentTarget.style.gap = "6px")}>
                      Lihat Project <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: "0.86rem" }}>🚧 Dalam Pengembangan</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://github.com/ricky1211" target="_blank" rel="noopener noreferrer" className="btn-outline"><GitBranch size={16} /> Semua di GitHub</a>
        </div>
      </section>

      {/* EXPERIENCE */}
      <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <section id="experience" style={{ padding: "90px 24px", maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader label="Experience" title="Pengalaman & Riwayat" />
          <div style={{ display: "grid", gap: 48 }} className="two-col">
            <div>
              <Reveal><h3 style={{ fontWeight: 700, marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}><Layers size={18} style={{ color: "var(--accent)" }} /> Pengalaman Kerja</h3></Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                {[
                  { role: "Full-Stack Web Developer", company: "Freelance", period: "Feb 2023 – Sekarang", desc: "Pengembangan aplikasi web end-to-end, manajemen full stack, dan pengujian sistem.", icon: <Code2 size={18} />, color: "#e8673a" },
                  { role: "Project Leader – IoT Penyiraman", company: "PERUM Graha Cikarang RT 02/RW 17", period: "Jun 2025 – Jul 2025", desc: "Memimpin perancangan sistem penyiraman otomatis berbasis IoT dengan sensor kelembapan tanah.", icon: <Wifi size={18} />, color: "#3a7be8" },
                  { role: "Staff Divisi PDD – Seminar", company: "Universitas Pelita Bangsa", period: "Des 2025", desc: "Publikasi, dekorasi, dan dokumentasi acara seminar; mendapat sertifikat editing.", icon: <Users size={18} />, color: "#5a3ae8" },
                ].map((e, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div style={{ display: "flex", gap: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: e.color + "18", display: "flex", alignItems: "center", justifyContent: "center", color: e.color, flexShrink: 0 }}>{e.icon}</div>
                      <div>
                        <div style={{ fontSize: "0.78rem", color: "var(--fg-muted)", marginBottom: 2 }}>{e.period}</div>
                        <div style={{ fontWeight: 700, fontSize: "0.93rem", marginBottom: 3 }}>{e.role}</div>
                        <div style={{ fontSize: "0.83rem", color: "var(--accent)", fontWeight: 600, marginBottom: 6 }}>{e.company}</div>
                        <p style={{ fontSize: "0.86rem", color: "var(--fg-muted)", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal><h3 style={{ fontWeight: 700, marginBottom: 24, display: "flex", alignItems: "center", gap: 8 }}><BookOpen size={18} style={{ color: "var(--accent2)" }} /> Pendidikan</h3></Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36 }}>
                {[
                  { school: "Universitas Pelita Bangsa", degree: "S1 Teknik Informatika, IPK 3.55", period: "Jul 2022 – Sep 2026", color: "var(--accent)" },
                  { school: "SMK Puja Mahardika", degree: "Multimedia · Wakil Ketua OSIS", period: "Jul 2019 – Jun 2022", color: "var(--accent2)" },
                ].map((ed, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div style={{ display: "flex", gap: 14 }}>
                      <div style={{ width: 4, borderRadius: 2, background: ed.color, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: "0.76rem", color: "var(--fg-muted)", marginBottom: 2 }}>{ed.period}</div>
                        <div style={{ fontWeight: 700, fontSize: "0.93rem" }}>{ed.school}</div>
                        <div style={{ fontSize: "0.84rem", color: "var(--fg-muted)" }}>{ed.degree}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1}><h3 style={{ fontWeight: 700, marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}><Award size={18} style={{ color: "#e8a03a" }} /> Publikasi</h3></Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {publications.map((pub, i) => (
                  <Reveal key={i} delay={0.15 + i * 0.08}>
                    <div className="card" style={{ padding: "16px 18px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 34, height: 34, borderRadius: 8, background: "#fffbf0", display: "flex", alignItems: "center", justifyContent: "center", color: "#e8a03a", flexShrink: 0 }}>{pub.icon}</div>
                      <div>
                        <div style={{ fontSize: "0.86rem", fontWeight: 600, lineHeight: 1.4, marginBottom: 3 }}>{pub.title}</div>
                        <div style={{ fontSize: "0.76rem", color: "var(--accent)" }}>{pub.journal} · {pub.year}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "90px 24px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <span className="section-label">Contact</span>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2rem,4vw,2.8rem)", margin: "10px 0 14px" }}>Yuk, Berkolaborasi!</h2>
          <p style={{ color: "var(--fg-muted)", lineHeight: 1.7, marginBottom: 40, fontSize: "1.04rem" }}>
            Saya terbuka untuk peluang freelance, kolaborasi project, atau sekadar diskusi teknologi.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 32 }}>
            {[
              { icon: <Mail size={20} />, label: "Email", value: "rickyalfian751@gmail.com", href: "mailto:rickyalfian751@gmail.com" },
              { icon: <Phone size={20} />, label: "WhatsApp", value: "+62 852-1578-4866", href: "https://wa.me/6285215784866" },
              { icon: <GitBranch size={20} />, label: "GitHub", value: "github.com/ricky1211", href: "https://github.com/ricky1211" },
              { icon: <Briefcase size={20} />, label: "LinkedIn", value: "linkedin.com/in/rkyalfnsptr", href: "https://www.linkedin.com/in/rkyalfnsptr" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="card"
                style={{ padding: "18px", display: "flex", gap: 12, alignItems: "center", textDecoration: "none", color: "inherit", textAlign: "left" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>{c.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.73rem", color: "var(--fg-muted)", fontWeight: 500 }}>{c.label}</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</div>
                </div>
                <ChevronRight size={14} style={{ color: "var(--fg-muted)", marginLeft: "auto", flexShrink: 0 }} />
              </a>
            ))}
          </div>
          <a href="mailto:rickyalfian751@gmail.com" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
            <Mail size={17} /> Kirim Pesan
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "26px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontWeight: 700 }}>Ricky Alfian Saputra</span>
          <span style={{ color: "var(--fg-muted)", fontSize: "0.87rem" }}>© 2025 · Built with Next.js & ❤️</span>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { icon: <GitBranch size={16} />, href: "https://github.com/ricky1211" },
              { icon: <Briefcase size={16} />, href: "https://www.linkedin.com/in/rkyalfnsptr" },
              { icon: <Mail size={16} />, href: "mailto:rickyalfian751@gmail.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--fg-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
              >{s.icon}</a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .two-col { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:last-child { order: -1; }
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
