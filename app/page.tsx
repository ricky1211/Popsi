"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import {
  GitBranch, Briefcase, Mail, Phone,
  Code2, Award, Layers,
  Server, BarChart2, Wifi, Globe,
  Star, ArrowRight, Database
} from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { projectsData, ProjectItem } from "@/components/projectsData";
import ProjectCard from "@/components/ProjectCard";
import ProjectTvModal from "@/components/ProjectTvModal";

const GlobeCanvas = dynamic(() => import("@/components/GlobeCanvas"), { ssr: false });

const emptySubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

const skills = [
  { icon: <Wifi size={18} />, label: "Industrial & IoT", items: ["MQTT", "WebSockets", "ESP32", "InfluxDB"] },
  { icon: <BarChart2 size={18} />, label: "AI & Telemetry", items: ["Python", "Machine Learning", "FFT", "Grafana"] },
  { icon: <Code2 size={18} />, label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: <Server size={18} />, label: "Backend", items: ["FastAPI", "Node.js", "PHP", "Java"] },
  { icon: <Database size={18} />, label: "Database", items: ["PostgreSQL", "MySQL", "Firebase", "Prisma"] },
  { icon: <Globe size={18} />, label: "DevOps & Cloud", items: ["Docker", "Git", "Vercel", "REST API"] },
];

const publications = [
  { title: "Keamanan Sistem Operasi dalam Era Internet of Things", journal: "JATI – Sinta 4", year: "2025" },
  { title: "Implementasi Aplikasi Toolkit Data Mining", journal: "Publikasi Jurnal Ilmiah", year: "2025" },
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
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`, ...style }}>
      {children}
    </div>
  );
}

function SectionHeader({ label, title, sub }: { label: string; title: string; sub?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} style={{ marginBottom: 36, textAlign: "center", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.5s, transform 0.5s" }}>
      <span className="section-label" style={{ fontSize: "0.75rem", letterSpacing: "0.15em" }}>{label}</span>
      <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.75rem,3.5vw,2.4rem)", margin: "8px 0 10px", lineHeight: 1.2 }}>{title}</h2>
      {sub && <p style={{ color: "var(--fg-muted)", maxWidth: 540, margin: "0 auto", fontSize: "0.92rem", lineHeight: 1.55 }}>{sub}</p>}
    </div>
  );
}

export default function Home() {
  const mounted = useMounted();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const ticker = [
    "Predictive Maintenance", "Preventive Maintenance", "Andon Quality", "8D Customer Claims",
    "Capex System", "IoT Sensors", "PT Menara Terus Makmur", "Next.js", "Python ML", "PostgreSQL", "WebSockets", "FastAPI"
  ];

  const categories = [
    { label: "Semua", count: projectsData.length },
    { label: "Industrial & IoT", count: projectsData.filter(p => p.category === "Industrial & IoT").length },
    { label: "Web & App", count: projectsData.filter(p => p.category === "Web & App").length },
    { label: "Data & AI", count: projectsData.filter(p => p.category === "Data & AI").length },
  ];

  const filteredProjects = activeCategory === "Semua"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />

      {/* HERO SECTION */}
      <div style={{ minHeight: "92vh", display: "flex", alignItems: "center", paddingTop: 76, paddingBottom: 40 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gap: 48, alignItems: "center" }}>
            <div>
              {/* Status Pill */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 100, padding: "5px 14px", marginBottom: 20,
                boxShadow: "0 2px 10px var(--shadow)",
                opacity: mounted ? 1 : 0, transition: "opacity 0.4s"
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 0 3px rgba(34,197,94,0.2)" }} />
                <span style={{ fontSize: "0.78rem", color: "var(--fg-muted)", fontWeight: 600 }}>Available for Hire · Cikarang, ID</span>
              </div>

              {/* Punchy Title */}
              <h1 style={{
                fontFamily: "var(--font-dm-serif)", fontSize: "clamp(2.4rem,5vw,3.5rem)",
                lineHeight: 1.1, margin: "0 0 14px",
                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s 0.1s, transform 0.6s 0.1s"
              }}>
                Ricky Alfian<br />
                <span style={{ background: "linear-gradient(135deg,var(--accent),var(--accent2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Saputra
                </span>
              </h1>

              {/* Compact 1-liner Intro */}
              <p style={{
                fontSize: "1.02rem", color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 26, maxWidth: 460,
                opacity: mounted ? 1 : 0, transition: "opacity 0.6s 0.2s"
              }}>
                Membangun <strong style={{ color: "var(--fg)" }}>Smart Industrial Systems</strong>, telemetri IoT, arsitektur web modern, dan analitik berbasis data presisi.
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28, opacity: mounted ? 1 : 0, transition: "opacity 0.6s 0.3s" }}>
                <a href="#projects" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
                  Eksplorasi Project <ArrowRight size={15} />
                </a>
                <a href="#contact" className="btn-outline" style={{ padding: "10px 20px", fontSize: "0.9rem" }}>
                  Kontak Langsung
                </a>
              </div>

              {/* Compact Social Badges */}
              <div style={{ display: "flex", gap: 10, opacity: mounted ? 1 : 0, transition: "opacity 0.6s 0.4s" }}>
                {[
                  { icon: <GitBranch size={16} />, href: "https://github.com/ricky1211", label: "GitHub" },
                  { icon: <Briefcase size={16} />, href: "https://www.linkedin.com/in/rkyalfnsptr", label: "LinkedIn" },
                  { icon: <Mail size={16} />, href: "mailto:rickyalfian751@gmail.com", label: "Email" },
                  { icon: <Phone size={16} />, href: "tel:+6285215784866", label: "Phone" },
                ].map(s => (
                  <a key={s.label} href={s.href} title={s.label} target="_blank" rel="noopener noreferrer" style={{
                    width: 38, height: 38, borderRadius: 10, background: "var(--bg-card)",
                    border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--fg-muted)", textDecoration: "none", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-muted)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Globe Canvas with Clean Floating Badges */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "min(350px, 80vw)", aspectRatio: "1" }}>
                <div className="animate-float" style={{
                  position: "absolute", top: "4%", right: "-4%", zIndex: 2,
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
                  padding: "8px 12px", boxShadow: "0 6px 20px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}><Code2 size={14} /></div>
                  <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontWeight: 500 }}>Prodi</div><div style={{ fontSize: "0.78rem", fontWeight: 700 }}>Informatika</div></div>
                </div>

                <div className="animate-float delay-200" style={{
                  position: "absolute", bottom: "8%", left: "-6%", zIndex: 2,
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
                  padding: "8px 12px", boxShadow: "0 6px 20px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "#f0f5ff", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent2)" }}><Star size={14} /></div>
                  <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontWeight: 500 }}>IPK</div><div style={{ fontSize: "0.78rem", fontWeight: 700 }}>3.55 / 4.00</div></div>
                </div>

                <div className="animate-float delay-400" style={{
                  position: "absolute", top: "48%", right: "-10%", zIndex: 2, transform: "translateY(-50%)",
                  background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12,
                  padding: "8px 12px", boxShadow: "0 6px 20px var(--shadow)",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: "#f0fff5", display: "flex", alignItems: "center", justifyContent: "center", color: "#22c55e" }}><Award size={14} /></div>
                  <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontWeight: 500 }}>Publikasi</div><div style={{ fontSize: "0.78rem", fontWeight: 700 }}>Sinta 4</div></div>
                </div>

                <div style={{ width: "100%", height: "100%", padding: 18 }}><GlobeCanvas /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TICKER */}
      <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden", padding: "10px 0", background: "var(--bg-card)" }}>
        <div className="animate-marquee" style={{ display: "flex", gap: 0, width: "max-content" }}>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} style={{ padding: "0 20px", color: "var(--fg-muted)", fontWeight: 600, fontSize: "0.8rem", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />{t}
            </span>
          ))}
        </div>
      </div>

      {/* PROJECTS SECTION WITH INTERACTIVE TV SHOWCASE */}
      <section id="projects" style={{ padding: "70px 24px", maxWidth: 1140, margin: "0 auto" }}>
        <SectionHeader
          label="Portfolio Showcase"
          title="Karya & Project Pilihan"
          sub="Klik salah satu card untuk menyalakan siaran TV interaktif dan melihat detail sistem."
        />

        {/* COMPACT CATEGORY FILTER TABS */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap", marginBottom: 28 }}>
          {categories.map(cat => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                style={{
                  background: isActive ? "var(--accent)" : "var(--bg-card)",
                  color: isActive ? "#ffffff" : "var(--fg-muted)",
                  border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                  borderRadius: 100,
                  padding: "6px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "all 0.2s ease",
                  boxShadow: isActive ? "0 3px 12px rgba(232, 103, 58, 0.25)" : "none",
                }}
              >
                <span>{cat.label}</span>
                <span style={{
                  background: isActive ? "rgba(255,255,255,0.25)" : "#ece7e1",
                  color: isActive ? "#ffffff" : "var(--fg)",
                  borderRadius: 100,
                  padding: "1px 6px",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                }}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* COMPACT & NEAT PROJECTS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(265px,1fr))", gap: 18 }}>
          {filteredProjects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.04}>
              <ProjectCard project={p} onOpenTv={(proj) => setSelectedProject(proj)} />
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="https://github.com/ricky1211" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.85rem", padding: "10px 20px" }}>
            <GitBranch size={15} /> Semua Repositori di GitHub
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <div style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <section id="skills" style={{ padding: "70px 24px", maxWidth: 1060, margin: "0 auto" }}>
          <SectionHeader label="Skillset" title="Keahlian & Teknologi" sub="Teknologi inti yang saya gunakan untuk merancang solusi digital terintegrasi." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
            {skills.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="card" style={{ padding: "16px 18px", height: "100%", borderRadius: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>{s.icon}</div>
                    <h3 style={{ margin: 0, fontSize: "0.88rem", fontWeight: 700 }}>{s.label}</h3>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {s.items.map(it => (
                      <span key={it} style={{ background: "#f3efe9", color: "var(--fg-muted)", fontSize: "0.72rem", padding: "3px 8px", borderRadius: 4, fontWeight: 500 }}>
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* ABOUT & EXPERIENCE COMPACT SECTION */}
      <section id="about" style={{ padding: "70px 24px", maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 40, alignItems: "start" }} className="two-col">
          {/* Left: About Card */}
          <Reveal>
            <div className="card" style={{ padding: "24px", borderRadius: 18 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                <img
                  src="/profile.jpg"
                  alt="Ricky Alfian"
                  style={{ width: 64, height: 64, borderRadius: 14, objectFit: "cover" }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>Ricky Alfian Saputra</h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600 }}>Teknik Informatika · Cikarang</span>
                </div>
              </div>
              <p style={{ color: "var(--fg-muted)", fontSize: "0.86rem", lineHeight: 1.6, margin: "0 0 16px" }}>
                Pengembang sistem cerdas manufaktur dengan pengalaman internship di <strong>PT Menara Terus Makmur (Astra Otoparts)</strong> dalam digitalisasi pemeliharaan mesin, Andon Quality, dan alur operasional.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)" }}>Lokasi</div><div style={{ fontSize: "0.82rem", fontWeight: 600 }}>Cikarang, ID</div></div>
                <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)" }}>Kampus</div><div style={{ fontSize: "0.82rem", fontWeight: 600 }}>Pelita Bangsa</div></div>
                <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)" }}>IPK</div><div style={{ fontSize: "0.82rem", fontWeight: 600 }}>3.55 / 4.00</div></div>
                <div><div style={{ fontSize: "0.68rem", color: "var(--fg-muted)" }}>Status</div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#16a34a" }}>Siap Kerja</div></div>
              </div>
            </div>
          </Reveal>

          {/* Right: Experience & Publications */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Reveal delay={0.1}>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
                <Layers size={16} style={{ color: "var(--accent)" }} /> Riwayat Pengalaman
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  {
                    role: "IT & System Development Intern",
                    company: "PT Menara Terus Makmur (Astra Otoparts Group)",
                    period: "Internship",
                    desc: "Digitalisasi sistem manufaktur: Predictive/Preventive Maintenance, display Andon Quality, penanganan Customer Claim 8D, dan Capex tracking.",
                    highlight: true
                  },
                  {
                    role: "Full-Stack Web Developer",
                    company: "Freelance",
                    period: "2023 – Sekarang",
                    desc: "Membangun sistem web enterprise manufaktur, API backend, dan dashboard visual."
                  },
                  {
                    role: "Project Leader – IoT Penyiraman",
                    company: "Perum Graha Cikarang",
                    period: "2025",
                    desc: "Perancangan sistem otomasi penyiraman berbasis sensor ESP32."
                  },
                  {
                    role: "Staff Divisi PDD",
                    company: "Seminar Universitas Pelita Bangsa",
                    period: "2025",
                    desc: "Dokumentasi & implementasi sistem absensi digital seminar."
                  },
                ].map((exp, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--bg-card)",
                      border: exp.highlight ? "1px solid var(--accent)" : "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "10px 14px",
                      position: "relative",
                      boxShadow: exp.highlight ? "0 2px 12px rgba(232, 103, 58, 0.12)" : "none"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.85rem", color: exp.highlight ? "var(--accent)" : "var(--fg)" }}>
                        {exp.role}
                      </span>
                      <span style={{
                        fontSize: "0.7rem",
                        color: exp.highlight ? "#ffffff" : "var(--fg-muted)",
                        background: exp.highlight ? "var(--accent)" : "transparent",
                        padding: exp.highlight ? "2px 8px" : "0",
                        borderRadius: exp.highlight ? 100 : 0,
                        fontWeight: exp.highlight ? 700 : 500
                      }}>
                        {exp.period}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "var(--fg)", fontWeight: 600, marginBottom: 3 }}>
                      {exp.company}
                    </div>
                    <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--fg-muted)", lineHeight: 1.45 }}>
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Compact Publications */}
            <Reveal delay={0.15}>
              <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                <Award size={16} style={{ color: "var(--accent2)" }} /> Publikasi Ilmiah
              </h3>
              <div style={{ display: "grid", gap: 8 }}>
                {publications.map((pub, i) => (
                  <div key={i} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{pub.title}</span>
                    <span style={{ fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, flexShrink: 0, marginLeft: 10 }}>{pub.journal}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT COMPACT */}
      <section id="contact" style={{ padding: "60px 24px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <Reveal>
          <span className="section-label" style={{ fontSize: "0.75rem" }}>Contact</span>
          <h2 style={{ fontFamily: "var(--font-dm-serif)", fontSize: "clamp(1.75rem,3.5vw,2.3rem)", margin: "8px 0 10px" }}>Mari Berkolaborasi</h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "0.92rem", marginBottom: 24 }}>
            Terbuka untuk peluang kerja sama, project freelance, maupun diskusi sistem IoT & web.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
            {[
              { icon: <Mail size={16} />, label: "Email", value: "rickyalfian751@gmail.com", href: "mailto:rickyalfian751@gmail.com" },
              { icon: <Phone size={16} />, label: "WhatsApp", value: "+62 852-1578-4866", href: "https://wa.me/6285215784866" },
              { icon: <GitBranch size={16} />, label: "GitHub", value: "github.com/ricky1211", href: "https://github.com/ricky1211" },
              { icon: <Briefcase size={16} />, label: "LinkedIn", value: "rkyalfnsptr", href: "https://www.linkedin.com/in/rkyalfnsptr" },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="card"
                style={{ padding: "12px 14px", display: "flex", gap: 10, alignItems: "center", textDecoration: "none", color: "inherit", textAlign: "left", borderRadius: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fff5f0", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>{c.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontWeight: 500 }}>{c.label}</div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <a href="mailto:rickyalfian751@gmail.com" className="btn-primary" style={{ fontSize: "0.92rem", padding: "10px 28px" }}>
            <Mail size={15} /> Kirim Pesan Cepat
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>Ricky Alfian Saputra</span>
          <span style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}>© 2025 · Built with Next.js & React</span>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://github.com/ricky1211" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-muted)" }}><GitBranch size={15} /></a>
            <a href="https://www.linkedin.com/in/rkyalfnsptr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--fg-muted)" }}><Briefcase size={15} /></a>
            <a href="mailto:rickyalfian751@gmail.com" style={{ color: "var(--fg-muted)" }}><Mail size={15} /></a>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE TV MODAL */}
      {selectedProject && (
        <ProjectTvModal
          project={selectedProject}
          projects={projectsData}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

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
