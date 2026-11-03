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
  AlertCircle,
  Lightbulb,
  Power,
  Radio,
  Share2,
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
    }, 360);
  }, [animStage, onClose, soundEnabled]);

  useEffect(() => {
    if (!project) return;
    if (soundEnabled) {
      playTvSound("on");
    }
    const timer = setTimeout(() => {
      setAnimStage("active");
    }, 550);
    return () => clearTimeout(timer);
  }, [project, soundEnabled]);

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
        background: "rgba(4, 7, 16, 0.94)",
        backdropFilter: "blur(20px)",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* TV CATHODE RAY HORIZONTAL BEAM */}
      {animStage === "power-on" && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "50%",
            height: 4,
            background: "#ffffff",
            boxShadow: "0 0 50px 14px rgba(255,255,255,0.9), 0 0 100px 30px rgba(56,189,248,0.8)",
            zIndex: 10002,
            pointerEvents: "none",
            animation: "tvCathodeBeam 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        />
      )}

      {/* TV CATHODE COLLAPSE */}
      {animStage === "power-off" && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            top: "50%",
            height: 3,
            background: "#ffffff",
            boxShadow: "0 0 40px 10px #ffffff, 0 0 90px 25px rgba(239, 68, 68, 0.8)",
            zIndex: 10002,
            pointerEvents: "none",
            animation: "tvCathodeCollapse 0.35s ease-in forwards",
          }}
        />
      )}

      {/* TV CYBER CONSOLE HOUSING */}
      <div
        className={`tv-chassis ${animStage === "power-on" ? "tv-turn-on" : animStage === "power-off" ? "tv-turn-off" : "tv-stable"}`}
        style={{
          width: "100%",
          maxWidth: 960,
          background: "linear-gradient(160deg, #121422 0%, #0b0d18 100%)",
          borderRadius: 22,
          border: `2px solid ${project.color}55`,
          boxShadow: `0 20px 70px rgba(0,0,0,0.9), 0 0 45px ${project.color}30`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          color: "#f8fafc",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* RETRO TV TOP DECK */}
        <div
          style={{
            padding: "10px 18px",
            background: "rgba(10, 12, 20, 0.98)",
            borderBottom: "1px solid #1f2338",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {/* Channel Dial & Status */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: project.color + "25",
                border: `1px solid ${project.color}88`,
                borderRadius: 6,
                padding: "3px 8px",
                fontSize: "0.74rem",
                fontWeight: 800,
                color: project.color,
                fontFamily: "monospace",
              }}
            >
              <Tv size={12} />
              <span>{project.channel}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.72rem", color: "#94a3b8" }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                  boxShadow: "0 0 8px #22c55e",
                  animation: "pulse 1.5s infinite",
                }}
              />
              <span style={{ fontWeight: 600, fontFamily: "monospace", letterSpacing: "0.04em" }}>
                LIVE FEED · 4K CRT
              </span>
            </div>

            <span
              style={{
                background: "#1e2438",
                color: "#94a3b8",
                padding: "2px 6px",
                borderRadius: 4,
                fontSize: "0.68rem",
                fontWeight: 600,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Controls: Audio, Scanlines, Switchers, Power Off */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => navigateChannel("prev")}
              title="Channel Sebelumnya"
              style={{
                background: "#191d2e",
                border: "1px solid #2e3550",
                color: "#cbd5e1",
                borderRadius: 6,
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: 3,
                fontSize: "0.72rem",
                cursor: "pointer",
              }}
            >
              <ChevronLeft size={13} />
              <span className="hidden-mobile">Prev</span>
            </button>

            <button
              onClick={() => navigateChannel("next")}
              title="Channel Berikutnya"
              style={{
                background: "#191d2e",
                border: "1px solid #2e3550",
                color: "#cbd5e1",
                borderRadius: 6,
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: 3,
                fontSize: "0.72rem",
                cursor: "pointer",
              }}
            >
              <span className="hidden-mobile">Next</span>
              <ChevronRight size={13} />
            </button>

            <button
              onClick={() => setScanlinesEnabled(!scanlinesEnabled)}
              title="Toggle Garis CRT"
              style={{
                background: scanlinesEnabled ? "#1e293b" : "#141724",
                border: `1px solid ${scanlinesEnabled ? "#38bdf8" : "#2a3048"}`,
                color: scanlinesEnabled ? "#38bdf8" : "#64748b",
                borderRadius: 6,
                padding: "4px 7px",
                fontSize: "0.7rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Sparkles size={11} />
              <span className="hidden-mobile">CRT</span>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title="Toggle Audio TV"
              style={{
                background: "#191d2e",
                border: "1px solid #2e3550",
                color: soundEnabled ? "#22c55e" : "#64748b",
                borderRadius: 6,
                padding: "4px 7px",
                cursor: "pointer",
              }}
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
            </button>

            <button
              onClick={handleClose}
              title="Matikan TV & Keluar (Esc)"
              style={{
                background: "#dc2626",
                border: "none",
                color: "#ffffff",
                borderRadius: 6,
                padding: "4px 10px",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.74rem",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              <Power size={12} />
              <span>Tutup TV</span>
            </button>
          </div>
        </div>

        {/* TV MAIN INTERACTIVE CONSOLE (COMPACT DUAL-PANE) */}
        <div
          className="tv-modal-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            position: "relative",
            background: "#080a12",
          }}
        >
          {scanlinesEnabled && <div className="crt-scanline-layer" />}
          <div className="crt-vignette-layer" />

          {/* LEFT: CRT SCREEN WITH TV GLOW & TELEMETRY */}
          <div
            style={{
              position: "relative",
              borderRight: "1px solid #1f2338",
              display: "flex",
              flexDirection: "column",
              background: "#05070e",
            }}
          >
            {/* Screen Picture */}
            <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.85) contrast(1.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(5,7,14,0.1) 0%, rgba(5,7,14,0.9) 100%)",
                }}
              />

              {/* HUD Screen Overlay Badges */}
              <div style={{ position: "absolute", top: 10, left: 12, right: 12, display: "flex", justifyContent: "space-between" }}>
                <div style={{ background: "rgba(0,0,0,0.75)", padding: "2px 6px", borderRadius: 4, fontSize: "0.68rem", color: "#38bdf8", fontFamily: "monospace" }}>
                  REC [00:14:82]
                </div>
                <div style={{ background: "rgba(0,0,0,0.75)", padding: "2px 6px", borderRadius: 4, fontSize: "0.68rem", color: project.color, fontFamily: "monospace", fontWeight: 700 }}>
                  CH: {project.channel}
                </div>
              </div>

              {/* Title & Tagline On Screen */}
              <div style={{ position: "absolute", bottom: 12, left: 16, right: 16 }}>
                <span
                  style={{
                    background: project.color,
                    color: "#ffffff",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    padding: "2px 6px",
                    borderRadius: 4,
                    textTransform: "uppercase",
                  }}
                >
                  {project.status}
                </span>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 700, margin: "6px 0 2px", color: "#ffffff", lineHeight: 1.2 }}>
                  {project.title}
                </h2>
                <p style={{ color: "#94a3b8", fontSize: "0.78rem", margin: 0, fontWeight: 500 }}>
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Quick Telemetry Strip */}
            <div
              style={{
                padding: "12px 16px",
                background: "#0c0e1a",
                borderTop: "1px solid #1b2034",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              <div style={{ background: "#121524", border: "1px solid #232840", borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ fontSize: "0.65rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
                  {project.metrics.label}
                </span>
                <div style={{ fontSize: "0.95rem", fontWeight: 800, color: project.color, marginTop: 1 }}>
                  {project.metrics.value}
                </div>
              </div>

              <div style={{ background: "#121524", border: "1px solid #232840", borderRadius: 8, padding: "8px 10px" }}>
                <span style={{ fontSize: "0.65rem", color: "#64748b", textTransform: "uppercase", fontWeight: 600 }}>
                  Signal Telemetri
                </span>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#22c55e", marginTop: 1, display: "flex", alignItems: "center", gap: 4 }}>
                  <Radio size={12} /> Terhubung Live
                </div>
              </div>
            </div>

            {/* Action Buttons on Left */}
            <div style={{ padding: "12px 16px", display: "flex", gap: 8, marginTop: "auto" }}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: project.color,
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    padding: "8px 16px",
                    flex: 1,
                    justifyContent: "center",
                    boxShadow: `0 4px 16px ${project.color}40`,
                  }}
                >
                  Buka Live Demo <ExternalLink size={13} />
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={handleClose}
                  className="btn-primary"
                  style={{
                    background: project.color,
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    padding: "8px 16px",
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  Hubungi untuk Demo
                </a>
              )}

              <a
                href="https://github.com/ricky1211"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  color: "#cbd5e1",
                  borderColor: "#2e3550",
                  fontSize: "0.82rem",
                  padding: "8px 14px",
                }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT: COMPACT MISSION BRIEF & SYSTEM SPECS */}
          <div
            style={{
              padding: "18px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              background: "#0a0c16",
              overflowY: "auto",
              maxHeight: 460,
            }}
          >
            {/* Description 1-liner */}
            <div style={{ background: "#111422", border: "1px solid #232840", borderRadius: 10, padding: "10px 14px" }}>
              <div style={{ fontSize: "0.7rem", color: project.color, fontWeight: 700, textTransform: "uppercase", marginBottom: 3, letterSpacing: "0.04em" }}>
                Fokus Sistem
              </div>
              <p style={{ margin: 0, color: "#e2e8f0", fontSize: "0.85rem", lineHeight: 1.5 }}>
                {project.desc}
              </p>
            </div>

            {/* Problem & Solution Mini Deck */}
            <div style={{ display: "grid", gap: 8 }}>
              <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "8px 12px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                <AlertCircle size={14} style={{ color: "#f87171", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#f87171", textTransform: "uppercase" }}>Tantangan: </span>
                  <span style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>{project.problem}</span>
                </div>
              </div>

              <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 8, padding: "8px 12px", display: "flex", gap: 8, alignItems: "flex-start" }}>
                <Lightbulb size={14} style={{ color: "#4ade80", marginTop: 2, flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#4ade80", textTransform: "uppercase" }}>Solusi: </span>
                  <span style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>{project.solution}</span>
                </div>
              </div>
            </div>

            {/* Key Capabilities Chips */}
            <div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 6, letterSpacing: "0.04em" }}>
                Fitur & Kapabilitas Kunci
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                {project.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#131626",
                      border: "1px solid #232840",
                      borderRadius: 6,
                      padding: "6px 8px",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <CheckCircle2 size={12} style={{ color: project.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "0.74rem", color: "#cbd5e1", lineHeight: 1.3 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", marginBottom: 6, letterSpacing: "0.04em" }}>
                Teknologi
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#181c2e",
                      border: "1px solid #2a3250",
                      color: "#e2e8f0",
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Keyboard shortcut tip */}
            <div style={{ marginTop: "auto", borderTop: "1px solid #1a1e32", paddingTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "#64748b" }}>
                Ganti saluran: <kbd style={{ background: "#1a1e32", padding: "1px 5px", borderRadius: 3 }}>◄</kbd> <kbd style={{ background: "#1a1e32", padding: "1px 5px", borderRadius: 3 }}>►</kbd> · Keluar: <kbd style={{ background: "#1a1e32", padding: "1px 5px", borderRadius: 3 }}>Esc</kbd>
              </span>
              <Share2 size={12} style={{ color: "#64748b" }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes tvCathodeBeam {
          0% { transform: scaleX(0); opacity: 0; }
          25% { transform: scaleX(0.5); opacity: 1; filter: brightness(25); }
          60% { transform: scaleX(1); opacity: 1; filter: brightness(15); }
          100% { transform: scaleX(1); opacity: 0; }
        }

        @keyframes tvCathodeCollapse {
          0% { transform: scaleX(1); opacity: 0; }
          30% { transform: scaleX(1); opacity: 1; filter: brightness(25); }
          80% { transform: scaleX(0.04); opacity: 1; filter: brightness(35); }
          100% { transform: scaleX(0); opacity: 0; }
        }

        .tv-turn-on {
          animation: tvTurnOnZoom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center center;
        }

        @keyframes tvTurnOnZoom {
          0% { transform: scale(0.75, 0.005); filter: brightness(16); opacity: 0.8; }
          40% { transform: scale(0.9, 0.04); filter: brightness(8); opacity: 0.95; }
          75% { transform: scale(1.02, 1.02); filter: brightness(1.8); opacity: 1; }
          100% { transform: scale(1, 1); filter: brightness(1); opacity: 1; }
        }

        .tv-turn-off {
          animation: tvTurnOffCollapse 0.35s ease-in forwards;
          transform-origin: center center;
        }

        @keyframes tvTurnOffCollapse {
          0% { transform: scale(1, 1); filter: brightness(1); opacity: 1; }
          40% { transform: scale(1, 0.01); filter: brightness(14); opacity: 1; }
          85% { transform: scale(0.08, 0.01); filter: brightness(24); opacity: 0.9; }
          100% { transform: scale(0, 0); filter: brightness(35); opacity: 0; }
        }

        .crt-scanline-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.22) 50%
          ), linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.02),
            rgba(0, 255, 0, 0.01),
            rgba(0, 0, 255, 0.02)
          );
          background-size: 100% 3px, 6px 100%;
          pointer-events: none;
          z-index: 5;
          opacity: 0.85;
        }

        .crt-vignette-layer {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.85);
          pointer-events: none;
          z-index: 6;
        }

        @media (max-width: 768px) {
          .tv-modal-grid {
            grid-template-columns: 1fr !important;
          }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </div>
  );
}
