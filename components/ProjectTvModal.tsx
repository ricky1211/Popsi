"use client";

import { useEffect, useState, useCallback } from "react";
import { ProjectItem } from "./projectsData";
import { playTvSound } from "./tvAudio";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tv,
  Volume2,
  VolumeX,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  TrendingUp,
  Power,
} from "lucide-react";

interface ProjectTvModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

export default function ProjectTvModal({
  project,
  projects,
  onClose,
  onSelectProject,
}: ProjectTvModalProps) {
  const [animStage, setAnimStage] = useState<"power-on" | "active" | "power-off">("power-on");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);

  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : 0;
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const navigateChannel = useCallback(
    (dir: "prev" | "next") => {
      const target = dir === "next" ? nextProject : prevProject;
      if (soundEnabled) {
        playTvSound("switch");
      }
      onSelectProject(target);
    },
    [nextProject, prevProject, onSelectProject, soundEnabled]
  );

  const handleClose = useCallback(() => {
    if (animStage === "power-off") return;
    setAnimStage("power-off");
    if (soundEnabled) {
      playTvSound("off");
    }
    setTimeout(() => {
      onClose();
    }, 380);
  }, [animStage, onClose, soundEnabled]);

  // Handle power-on sequence on mount
  useEffect(() => {
    if (!project) return;

    if (soundEnabled) {
      playTvSound("on");
    }

    const timer = setTimeout(() => {
      setAnimStage("active");
    }, 600);

    return () => clearTimeout(timer);
  }, [project, soundEnabled]);

  // Keyboard navigation (Esc to close, Left/Right arrow to change channel)
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        navigateChannel("prev");
      } else if (e.key === "ArrowRight") {
        navigateChannel("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose, navigateChannel]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(5, 7, 15, 0.94)",
        backdropFilter: "blur(18px)",
        padding: "16px",
        overflowY: "auto",
        transition: "opacity 0.25s ease",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* TV CATHODE RAY HORIZONTAL BEAM (Turn On Flash) */}
      {animStage === "power-on" && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "50%",
            height: "4px",
            background: "#ffffff",
            boxShadow: "0 0 45px 12px rgba(255, 255, 255, 0.95), 0 0 100px 30px rgba(56, 189, 248, 0.8)",
            zIndex: 10002,
            pointerEvents: "none",
            animation: "tvCathodeBeam 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        />
      )}

      {/* TV CATHODE BEAM COLLAPSE (Turn Off Flash) */}
      {animStage === "power-off" && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "50%",
            height: "3px",
            background: "#ffffff",
            boxShadow: "0 0 40px 10px #ffffff, 0 0 90px 25px rgba(239, 68, 68, 0.8)",
            zIndex: 10002,
            pointerEvents: "none",
            animation: "tvCathodeCollapse 0.35s ease-in forwards",
          }}
        />
      )}

      {/* TV RETRO HOUSING & SCREEN CHASSIS */}
      <div
        className={`tv-chassis ${animStage === "power-on" ? "tv-turn-on" : animStage === "power-off" ? "tv-turn-off" : "tv-stable"}`}
        style={{
          width: "100%",
          maxWidth: "1060px",
          maxHeight: "92vh",
          background: "linear-gradient(145deg, #181926 0%, #0e0f17 100%)",
          borderRadius: "26px",
          border: "2px solid #2d3047",
          boxShadow: `0 25px 80px rgba(0, 0, 0, 0.85), 0 0 40px ${project.color}33`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          color: "#f1f5f9",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* TV TOP CONTROL BAR */}
        <div
          style={{
            padding: "12px 20px",
            background: "rgba(10, 11, 18, 0.95)",
            borderBottom: "1px solid #23253a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            zIndex: 10,
          }}
        >
          {/* Left: TV Channel Info & Live Signal */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: project.color + "25",
                border: `1px solid ${project.color}66`,
                borderRadius: 8,
                padding: "4px 10px",
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: project.color,
                fontFamily: "monospace",
              }}
            >
              <Tv size={14} />
              <span>{project.channel}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.78rem", color: "#94a3b8" }}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  boxShadow: "0 0 10px #22c55e",
                  animation: "pulse 1.5s infinite",
                }}
              />
              <span style={{ fontWeight: 600, letterSpacing: "0.06em", fontFamily: "monospace" }}>
                LIVE BROADCAST
              </span>
            </div>

            <span
              style={{
                background: "#1e293b",
                color: "#cbd5e1",
                padding: "3px 8px",
                borderRadius: 6,
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Right: Sound toggle, Scanlines toggle, Channel navigation, Close */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Prev Channel */}
            <button
              onClick={() => navigateChannel("prev")}
              title="Channel Sebelumnya (Panah Kiri)"
              style={{
                background: "#1e2235",
                border: "1px solid #333852",
                color: "#cbd5e1",
                borderRadius: 8,
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.75rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333852")}
            >
              <ChevronLeft size={14} />
              <span className="hidden-mobile">CH Sebelumnya</span>
            </button>

            {/* Next Channel */}
            <button
              onClick={() => navigateChannel("next")}
              title="Channel Berikutnya (Panah Kanan)"
              style={{
                background: "#1e2235",
                border: "1px solid #333852",
                color: "#cbd5e1",
                borderRadius: 8,
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.75rem",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#333852")}
            >
              <span className="hidden-mobile">CH Berikutnya</span>
              <ChevronRight size={14} />
            </button>

            {/* Scanlines Toggle */}
            <button
              onClick={() => setScanlinesEnabled(!scanlinesEnabled)}
              title={scanlinesEnabled ? "Matikan Garis CRT" : "Nyalakan Garis CRT"}
              style={{
                background: scanlinesEnabled ? "#232d42" : "#1e2235",
                border: `1px solid ${scanlinesEnabled ? "#3b82f6" : "#333852"}`,
                color: scanlinesEnabled ? "#60a5fa" : "#94a3b8",
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Sparkles size={13} />
              <span className="hidden-mobile">CRT Scan</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute Suara TV" : "Nyalakan Suara TV"}
              style={{
                background: "#1e2235",
                border: "1px solid #333852",
                color: soundEnabled ? "#22c55e" : "#94a3b8",
                borderRadius: 8,
                padding: "6px 8px",
                cursor: "pointer",
              }}
            >
              {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Power OFF / Close */}
            <button
              onClick={handleClose}
              title="Matikan TV & Keluar (Esc)"
              style={{
                background: "#dc2626",
                border: "none",
                color: "#ffffff",
                borderRadius: 8,
                padding: "6px 12px",
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.78rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(220, 38, 38, 0.4)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b91c1c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#dc2626")}
            >
              <Power size={14} />
              <span>Matikan TV</span>
            </button>
          </div>
        </div>

        {/* TV SCREEN TUBE (Interactive Content Area) */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            position: "relative",
            background: "#080911",
          }}
        >
          {/* OPTIONAL RETRO SCANLINES & PHOSPHOR GLOW OVERLAY */}
          {scanlinesEnabled && <div className="crt-scanline-layer" />}
          <div className="crt-vignette-layer" />

          {/* PROJECT HEADER HERO BANNER */}
          <div style={{ position: "relative", minHeight: "260px", overflow: "hidden" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.72) contrast(1.1)",
              }}
            />
            {/* Gradient Mask */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(8,9,17,0.2) 0%, rgba(8,9,17,0.85) 70%, #080911 100%)",
              }}
            />

            {/* Header Content on Banner */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 28,
                right: 28,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div style={{ maxWidth: 650 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span
                    style={{
                      background: project.color,
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "3px 10px",
                      borderRadius: 100,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {project.status}
                  </span>
                  <span style={{ color: "#94a3b8", fontSize: "0.85rem", fontWeight: 500 }}>
                    {project.subtitle}
                  </span>
                </div>
                <h1
                  style={{
                    fontFamily: "var(--font-dm-serif), serif",
                    fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                    margin: 0,
                    lineHeight: 1.15,
                    color: "#ffffff",
                    textShadow: "0 2px 14px rgba(0,0,0,0.6)",
                  }}
                >
                  {project.title}
                </h1>
              </div>

              {/* Key Metric Badge */}
              {project.metrics && (
                <div
                  style={{
                    background: "rgba(15, 23, 42, 0.85)",
                    border: `1px solid ${project.color}55`,
                    borderRadius: 16,
                    padding: "12px 18px",
                    backdropFilter: "blur(12px)",
                    boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 20px ${project.color}22`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
                    {project.metrics.label}
                  </span>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: project.color,
                      marginTop: 2,
                    }}
                  >
                    {project.metrics.value}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* MAIN BODY OF THE CARD DETAIL */}
          <div style={{ padding: "28px 32px 40px", display: "flex", flexDirection: "column", gap: 32 }}>
            {/* OVERVIEW SECTION */}
            <div>
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Cpu size={18} style={{ color: project.color }} />
                Ringkasan Solusi
              </h2>
              <p style={{ color: "#cbd5e1", lineHeight: 1.75, fontSize: "0.98rem", margin: 0 }}>
                {project.fullDesc}
              </p>
            </div>

            {/* PROBLEM VS SOLUTION DUAL GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {/* Problem Card */}
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.25)",
                  borderRadius: 18,
                  padding: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "#f87171" }}>
                  <AlertTriangle size={17} />
                  <span style={{ fontWeight: 700, fontSize: "0.92rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Tantangan & Permasalahan
                  </span>
                </div>
                <p style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {project.problem}
                </p>
              </div>

              {/* Solution Card */}
              <div
                style={{
                  background: "rgba(34, 197, 94, 0.08)",
                  border: "1px solid rgba(34, 197, 94, 0.25)",
                  borderRadius: 18,
                  padding: "20px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, color: "#4ade80" }}>
                  <Lightbulb size={17} />
                  <span style={{ fontWeight: 700, fontSize: "0.92rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Pendekatan & Solusi
                  </span>
                </div>
                <p style={{ color: "#e2e8f0", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {project.solution}
                </p>
              </div>
            </div>

            {/* KEY FEATURES & CAPABILITIES */}
            <div>
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Layers size={18} style={{ color: project.color }} />
                Fitur Unggulan & Kapabilitas Sistem
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 12,
                }}
              >
                {project.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#121422",
                      border: "1px solid #23273e",
                      borderRadius: 14,
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: project.color, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "#cbd5e1", fontSize: "0.88rem", lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECH STACK & ARCHITECTURE PILLS */}
            <div>
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#f8fafc",
                  marginBottom: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <TrendingUp size={17} style={{ color: project.color }} />
                Teknologi yang Digunakan
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#181a2c",
                      border: "1px solid #2e334f",
                      color: "#e2e8f0",
                      padding: "6px 14px",
                      borderRadius: 100,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: project.color }} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS & FOOTER LINK */}
            <div
              style={{
                borderTop: "1px solid #1f2237",
                paddingTop: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      background: project.color,
                      color: "#ffffff",
                      boxShadow: `0 8px 24px ${project.color}44`,
                      fontSize: "0.92rem",
                      padding: "12px 24px",
                    }}
                  >
                    Kunjungi Website / Live Demo <ExternalLink size={15} />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={handleClose}
                    className="btn-primary"
                    style={{
                      background: project.color,
                      color: "#ffffff",
                      fontSize: "0.92rem",
                      padding: "12px 24px",
                    }}
                  >
                    Hubungi untuk Demo Project <ChevronRight size={15} />
                  </a>
                )}

                <a
                  href="https://github.com/ricky1211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    color: "#cbd5e1",
                    borderColor: "#333852",
                    fontSize: "0.92rem",
                    padding: "12px 22px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.color;
                    e.currentTarget.style.color = project.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#333852";
                    e.currentTarget.style.color = "#cbd5e1";
                  }}
                >
                  GitHub Repository
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: "0.78rem", color: "#64748b" }}>
                  Gunakan tombol <kbd style={{ background: "#1e293b", padding: "2px 6px", borderRadius: 4 }}>◄</kbd>{" "}
                  <kbd style={{ background: "#1e293b", padding: "2px 6px", borderRadius: 4 }}>►</kbd> untuk ganti saluran TV
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Cathode Ray Tube Turn On */
        @keyframes tvCathodeBeam {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          20% {
            transform: scaleX(0.4);
            opacity: 1;
            filter: brightness(25);
          }
          60% {
            transform: scaleX(1);
            opacity: 1;
            filter: brightness(15);
          }
          100% {
            transform: scaleX(1);
            opacity: 0;
          }
        }

        /* Cathode Ray Tube Collapse (Turn Off) */
        @keyframes tvCathodeCollapse {
          0% {
            transform: scaleX(1);
            opacity: 0;
          }
          30% {
            transform: scaleX(1);
            opacity: 1;
            filter: brightness(30);
          }
          80% {
            transform: scaleX(0.04);
            opacity: 1;
            filter: brightness(40);
          }
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
        }

        /* TV Screen Pop Open & Zoom In (Dibawa masuk ke dalam card) */
        .tv-turn-on {
          animation: tvTurnOnZoom 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center center;
        }

        @keyframes tvTurnOnZoom {
          0% {
            transform: scale(0.65, 0.005) translateY(0);
            filter: brightness(18) contrast(2);
            opacity: 0.8;
          }
          40% {
            transform: scale(0.85, 0.02);
            filter: brightness(10) contrast(1.8);
            opacity: 0.95;
          }
          70% {
            transform: scale(1.04, 1.05);
            filter: brightness(2) contrast(1.1);
            opacity: 1;
          }
          85% {
            transform: scale(0.99, 0.99);
            filter: brightness(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1, 1);
            filter: brightness(1);
            opacity: 1;
          }
        }

        /* TV Turn Off Collapse */
        .tv-turn-off {
          animation: tvTurnOffCollapse 0.35s ease-in forwards;
          transform-origin: center center;
        }

        @keyframes tvTurnOffCollapse {
          0% {
            transform: scale(1, 1);
            filter: brightness(1);
            opacity: 1;
          }
          40% {
            transform: scale(1, 0.008);
            filter: brightness(15);
            opacity: 1;
          }
          80% {
            transform: scale(0.08, 0.008);
            filter: brightness(25);
            opacity: 0.9;
          }
          100% {
            transform: scale(0, 0);
            filter: brightness(40);
            opacity: 0;
          }
        }

        /* CRT SCANLINES LAYER */
        .crt-scanline-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.24) 50%
          ), linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.02),
            rgba(0, 255, 0, 0.01),
            rgba(0, 0, 255, 0.02)
          );
          background-size: 100% 4px, 6px 100%;
          pointer-events: none;
          z-index: 5;
          opacity: 0.8;
        }

        /* CRT VIGNETTE TUBE CURVATURE LAYER */
        .crt-vignette-layer {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.85);
          pointer-events: none;
          z-index: 6;
        }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
