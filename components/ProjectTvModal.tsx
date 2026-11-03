"use client";

import { useEffect, useState, useCallback } from "react";
import { ProjectItem } from "./projectsData";
import { playTvSound } from "./tvAudio";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Sparkles,
  Power,
  Maximize2,
  X,
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevProjectId, setPrevProjectId] = useState<string | undefined>(project?.id);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync state reset when project prop changes without triggering cascading effect renders
  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setActiveImageIndex(0);
  }

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
    }, 340);
  }, [animStage, onClose, soundEnabled]);

  useEffect(() => {
    if (!project) return;
    const timer = setTimeout(() => {
      setAnimStage("active");
    }, 450);
    return () => clearTimeout(timer);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else {
          handleClose();
        }
      } else if (e.key === "ArrowLeft") {
        navigateChannel("prev");
      } else if (e.key === "ArrowRight") {
        navigateChannel("next");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose, navigateChannel, isZoomed]);

  if (!project) return null;

  const galleryList = project.gallery && project.gallery.length > 0 ? project.gallery : null;
  const currentImage = galleryList ? galleryList[activeImageIndex]?.image || project.image : project.image;
  const currentImageTitle = galleryList ? galleryList[activeImageIndex]?.title || project.title : project.title;

  return (
    <div
      className={`modal-backdrop-fade ${animStage === "power-off" ? "modal-backdrop-exit" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(3, 5, 12, 0.94)",
        backdropFilter: "blur(20px)",
        padding: "16px",
        overflowY: "auto",
        perspective: "1200px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* FULLSCREEN VORTEX SUCTION TUNNEL */}
      {animStage === "power-on" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div className="vortex-ring ring-1" style={{ borderColor: project.color }} />
          <div className="vortex-ring ring-2" style={{ borderColor: "#38bdf8" }} />
          <div className="vortex-ring ring-3" style={{ borderColor: "#ffffff" }} />
          <div
            style={{
              position: "absolute",
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: `0 0 50px #ffffff, 0 0 100px ${project.color}`,
              animation: "suctionSingularity 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
          <div
            className="vortex-warp-burst"
            style={{
              background: `radial-gradient(circle, transparent 20%, ${project.color}33 60%, rgba(5,8,18,0.95) 90%)`,
            }}
          />
        </div>
      )}

      {/* REVERSE SUCTION BLACK HOLE COLLAPSE */}
      {animStage === "power-off" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: `4px solid ${project.color}`,
              boxShadow: `0 0 60px ${project.color}, inset 0 0 40px #ffffff`,
              animation: "reverseSuctionHole 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards",
            }}
          />
        </div>
      )}

      {/* RETRO TELEVISION CHASSIS (AUTHENTIC CRT CABINET) */}
      <div
        className={`tv-chassis ${animStage === "power-on" ? "tv-suction-enter" : animStage === "power-off" ? "tv-suction-exit" : "tv-stable"}`}
        style={{
          width: "100%",
          maxWidth: 1040,
          background: "linear-gradient(175deg, #181b28 0%, #0e101a 50%, #080a12 100%)",
          borderRadius: 26,
          border: `2px solid ${project.color}77`,
          boxShadow: `0 25px 80px rgba(0,0,0,0.95), 0 0 50px ${project.color}33, inset 0 1px 1px rgba(255,255,255,0.15)`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          color: "#f8fafc",
          transformOrigin: "center center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* RETRO TV TOP BEZEL: ANTENNA PIVOT & BRAND BADGE */}
        <div
          style={{
            padding: "8px 20px",
            background: "linear-gradient(180deg, #222638 0%, #161926 100%)",
            borderBottom: "1px solid #2a3148",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Badge Vintage */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ display: "flex", gap: 4 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ef4444" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f59e0b" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />
            </div>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                fontWeight: 800,
                color: "#94a3b8",
                textTransform: "uppercase",
              }}
            >
              TRINITRON CRT · POPSI-VISION 4K
            </span>
          </div>

          {/* Quick Exit / ESC button */}
          <button
            onClick={handleClose}
            title="Matikan TV (Esc)"
            style={{
              background: "#dc2626",
              border: "1px solid #ef4444",
              color: "#ffffff",
              borderRadius: 6,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: "0.72rem",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 0 12px rgba(220, 38, 38, 0.4)",
            }}
          >
            <Power size={12} />
            <span>POWER OFF</span>
          </button>
        </div>

        {/* TV MAIN INTERFACE: CRT SCREEN TUBE (LEFT) + RETRO PHYSICAL CONTROL PANEL (RIGHT) */}
        <div
          className="tv-layout-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 140px",
            gap: 0,
            background: "#080a14",
            position: "relative",
          }}
        >
          {/* LEFT: THE CLEAR CRT SCREEN TUBE (100% CLEAR - ZERO TEXT OVERLAY) */}
          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              background: "#070912",
              borderRight: "2px solid #1c2236",
            }}
          >
            {/* Curved CRT Screen Tube Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 480,
                background: "#000000",
                borderRadius: 20,
                overflow: "hidden",
                border: "4px solid #191e30",
                boxShadow: "inset 0 0 45px rgba(0, 0, 0, 0.95), 0 0 25px rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-in",
              }}
              onClick={() => setIsZoomed(true)}
              title="Klik layar untuk memperbesar tampilan (Zoom HD)"
            >
              {/* Scanline CRT Phosphor Layer */}
              {scanlinesEnabled && <div className="crt-scanline-layer" />}
              {/* Glass Tube Curvature & Reflection */}
              <div className="crt-glass-reflection" />
              <div className="crt-vignette-layer" />

              {/* PURE CLEAR SCREENSHOT IMAGE (NO TEXT, NO DARKENING GRADIENT) */}
              <img
                key={currentImage}
                src={currentImage}
                alt={currentImageTitle}
                className={animStage === "power-on" ? "crt-screen-turn-on" : animStage === "power-off" ? "crt-screen-turn-off" : ""}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  background: "#020308",
                  filter: "brightness(0.98) contrast(1.04)",
                  display: "block",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              {/* Minimal CRT Phosphor OSD (Top Right Corner - Unobtrusive) */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.75)",
                    border: `1px solid ${project.color}66`,
                    color: project.color,
                    borderRadius: 4,
                    padding: "2px 7px",
                    fontFamily: "monospace",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    boxShadow: `0 0 10px ${project.color}44`,
                    textShadow: `0 0 6px ${project.color}`,
                  }}
                >
                  {project.channel}
                </div>
                {galleryList && (
                  <div
                    style={{
                      background: "rgba(0, 0, 0, 0.75)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#38bdf8",
                      borderRadius: 4,
                      padding: "2px 6px",
                      fontFamily: "monospace",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                    }}
                  >
                    PROG {activeImageIndex + 1}/{galleryList.length}
                  </div>
                )}
              </div>

              {/* Live Signal Indicator (Top Left Corner) */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 14,
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  background: "rgba(0, 0, 0, 0.75)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: 4,
                  padding: "2px 7px",
                  fontSize: "0.65rem",
                  fontFamily: "monospace",
                  color: "#22c55e",
                  fontWeight: 700,
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 6px #22c55e",
                  }}
                />
                LIVE BROADCAST
              </div>
            </div>

            {/* TV CHANNEL / PROGRAM SWITCHER PRESET (BELOW THE CRT TUBE) */}
            {galleryList && galleryList.length > 1 && (
              <div
                style={{
                  marginTop: 12,
                  padding: "10px 14px",
                  background: "#0c0f1d",
                  borderRadius: 12,
                  border: "1px solid #1c223a",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  overflowX: "auto",
                }}
                className="no-scrollbar"
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    color: "#94a3b8",
                    letterSpacing: "0.08em",
                    fontFamily: "monospace",
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}
                >
                  PROGRAM ACARA:
                </span>

                <div style={{ display: "flex", gap: 6, flex: 1, overflowX: "auto" }} className="no-scrollbar">
                  {galleryList.map((item, idx) => {
                    const isSel = idx === activeImageIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (soundEnabled) playTvSound("switch");
                          setActiveImageIndex(idx);
                        }}
                        style={{
                          background: isSel ? project.color : "#141829",
                          color: isSel ? "#ffffff" : "#cbd5e1",
                          border: isSel ? `1px solid ${project.color}` : "1px solid #232a42",
                          borderRadius: 6,
                          padding: "5px 10px",
                          fontSize: "0.72rem",
                          fontWeight: isSel ? 800 : 600,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          whiteSpace: "nowrap",
                          boxShadow: isSel ? `0 0 14px ${project.color}66` : "none",
                          transition: "all 0.18s ease",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "0.65rem",
                            opacity: isSel ? 1 : 0.6,
                          }}
                        >
                          P-{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{item.badge || item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* MINIMAL ONE-LINE TV OSD BAR (BOTTOM OF SCREEN) */}
            <div
              style={{
                marginTop: 8,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#94a3b8",
                fontSize: "0.76rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: project.color, fontWeight: 800, fontFamily: "monospace" }}>
                  {project.channel}
                </span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>
                  {project.title}
                </span>
                <span style={{ color: "#64748b" }}>—</span>
                <span style={{ color: "#cbd5e1" }}>
                  {currentImageTitle}
                </span>
              </div>

              <div style={{ fontSize: "0.68rem", color: "#64748b", fontFamily: "monospace" }}>
                Klik layar untuk perbesar HD
              </div>
            </div>
          </div>

          {/* RIGHT: RETRO PHYSICAL TV CONTROL PANEL */}
          <div
            style={{
              padding: "18px 12px",
              background: "linear-gradient(180deg, #131624 0%, #0d0f1a 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            {/* Top Control: LED Glow Indicator */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                width: "100%",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 12px #22c55e, 0 0 20px #22c55e",
                  border: "2px solid #14532d",
                  animation: "pulse 2s infinite",
                }}
              />
              <span style={{ fontSize: "0.6rem", color: "#64748b", fontFamily: "monospace", letterSpacing: "0.08em" }}>
                POWER ON
              </span>
            </div>

            {/* Channel Up / Down Physical Dial Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                width: "100%",
                padding: "8px 0",
                borderTop: "1px solid #1c2236",
                borderBottom: "1px solid #1c2236",
              }}
            >
              <span style={{ fontSize: "0.62rem", color: "#94a3b8", fontWeight: 700, fontFamily: "monospace" }}>
                CHANNEL
              </span>

              <button
                onClick={() => navigateChannel("prev")}
                title="Channel Sebelumnya (◄)"
                style={{
                  width: "100%",
                  background: "#1e2438",
                  border: "1px solid #323b56",
                  color: "#ffffff",
                  borderRadius: 6,
                  padding: "8px 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={14} />
                <span>CH ▼</span>
              </button>

              <button
                onClick={() => navigateChannel("next")}
                title="Channel Berikutnya (►)"
                style={{
                  width: "100%",
                  background: "#1e2438",
                  border: "1px solid #323b56",
                  color: "#ffffff",
                  borderRadius: 6,
                  padding: "8px 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 4,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                <span>CH ▲</span>
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Audio Toggle / Volume Knob */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute Suara TV" : "Nyalakan Suara TV"}
              style={{
                width: "100%",
                background: soundEnabled ? "#192238" : "#141724",
                border: `1px solid ${soundEnabled ? "#38bdf8" : "#22273c"}`,
                color: soundEnabled ? "#38bdf8" : "#64748b",
                borderRadius: 8,
                padding: "8px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
              }}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span style={{ fontSize: "0.62rem", fontWeight: 700, fontFamily: "monospace" }}>
                {soundEnabled ? "VOL ON" : "MUTED"}
              </span>
            </button>

            {/* Scanlines CRT Toggle */}
            <button
              onClick={() => setScanlinesEnabled(!scanlinesEnabled)}
              title="Toggle Garis Tabung CRT"
              style={{
                width: "100%",
                background: scanlinesEnabled ? "#162035" : "#141724",
                border: `1px solid ${scanlinesEnabled ? "#38bdf8" : "#22273c"}`,
                color: scanlinesEnabled ? "#38bdf8" : "#64748b",
                borderRadius: 8,
                padding: "8px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
              }}
            >
              <Sparkles size={14} />
              <span style={{ fontSize: "0.62rem", fontWeight: 700, fontFamily: "monospace" }}>
                CRT LINE
              </span>
            </button>

            {/* Zoom Screen Button */}
            <button
              onClick={() => setIsZoomed(true)}
              title="Perbesar Layar Penuh (Zoom HD)"
              style={{
                width: "100%",
                background: "#1e2438",
                border: "1px solid #323b56",
                color: "#ffffff",
                borderRadius: 8,
                padding: "8px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
              }}
            >
              <Maximize2 size={14} />
              <span style={{ fontSize: "0.62rem", fontWeight: 700, fontFamily: "monospace" }}>
                ZOOM HD
              </span>
            </button>

            {/* External Live Link (If available) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Website Asli"
                style={{
                  width: "100%",
                  background: project.color,
                  color: "#ffffff",
                  borderRadius: 8,
                  padding: "8px 4px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                  textDecoration: "none",
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  fontFamily: "monospace",
                  boxShadow: `0 0 12px ${project.color}55`,
                }}
              >
                <ExternalLink size={14} />
                <span>EXT LINK</span>
              </a>
            )}

            {/* Vintage Speaker Grille */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                padding: "6px 0",
              }}
            >
              <div style={{ height: 2, background: "#1f253a", borderRadius: 1 }} />
              <div style={{ height: 2, background: "#1f253a", borderRadius: 1 }} />
              <div style={{ height: 2, background: "#1f253a", borderRadius: 1 }} />
              <div style={{ height: 2, background: "#1f253a", borderRadius: 1 }} />
              <div style={{ height: 2, background: "#1f253a", borderRadius: 1 }} />
            </div>

            {/* Big Red Power Switch */}
            <button
              onClick={handleClose}
              title="Matikan TV & Keluar"
              style={{
                width: "100%",
                background: "linear-gradient(180deg, #ef4444 0%, #b91c1c 100%)",
                border: "1px solid #f87171",
                color: "#ffffff",
                borderRadius: 8,
                padding: "10px 4px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(239, 68, 68, 0.4)",
              }}
            >
              <Power size={16} />
              <span style={{ fontSize: "0.62rem", fontWeight: 800, fontFamily: "monospace" }}>
                POWER OFF
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN HIGH-RES ZOOM OVERLAY */}
      {isZoomed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10005,
            background: "rgba(2, 4, 10, 0.96)",
            backdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setIsZoomed(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "96vw",
              maxHeight: "92vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                color: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    background: project.color,
                    padding: "3px 9px",
                    borderRadius: 4,
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    fontFamily: "monospace",
                  }}
                >
                  {project.channel}
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#f8fafc" }}>
                  {currentImageTitle}
                </span>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                title="Tutup Zoom"
                style={{
                  background: "#dc2626",
                  border: "none",
                  color: "#ffffff",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={currentImage}
              alt={currentImageTitle}
              style={{
                maxWidth: "100%",
                maxHeight: "84vh",
                borderRadius: 10,
                border: "2px solid #334155",
                boxShadow: "0 25px 70px rgba(0,0,0,0.9)",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}

      <style>{`
        /* MODAL BACKDROP SMOOTH FADE */
        .modal-backdrop-fade {
          animation: backdropFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity;
        }

        .modal-backdrop-exit {
          animation: backdropFadeOut 0.32s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: opacity;
        }

        @keyframes backdropFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes backdropFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* VORTEX GRAVITY RINGS */
        .vortex-ring {
          position: absolute;
          border-radius: 50%;
          border-style: dashed;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .ring-1 {
          width: 80vw;
          height: 80vw;
          border-width: 2px;
          animation: ringSmoothSpin 0.42s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        .ring-2 {
          width: 52vw;
          height: 52vw;
          border-width: 2px;
          animation: ringSmoothSpin 0.38s 0.04s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        .ring-3 {
          width: 32vw;
          height: 32vw;
          border-width: 2px;
          animation: ringSmoothSpin 0.34s 0.08s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        @keyframes ringSmoothSpin {
          0% {
            transform: scale(1.3) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.15) rotate(160deg);
            opacity: 0;
          }
        }

        @keyframes suctionSingularity {
          0% {
            transform: scale(0.2);
            opacity: 0.4;
          }
          50% {
            transform: scale(2.2);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.01);
            opacity: 0;
          }
        }

        .vortex-warp-burst {
          position: absolute;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          animation: smoothWarpBurst 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes smoothWarpBurst {
          0% {
            transform: scale(0.4);
            opacity: 0;
          }
          40% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        /* TV CHASSIS WARP-IN: SMOOTH CINEMATIC SPRING ZOOM */
        .tv-suction-enter {
          animation: tvSmoothEnter 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes tvSmoothEnter {
          0% {
            transform: scale(0.72) translate3d(0, 35px, 0);
            opacity: 0;
          }
          70% {
            transform: scale(1.015) translate3d(0, -3px, 0);
            opacity: 1;
          }
          100% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: 1;
          }
        }

        /* TV CHASSIS WARP-OUT: SMOOTH EXPEDIENT RETREAT */
        .tv-suction-exit {
          animation: tvSmoothExit 0.32s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes tvSmoothExit {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: 1;
          }
          30% {
            transform: scale(1.02) translate3d(0, -3px, 0);
            opacity: 1;
          }
          100% {
            transform: scale(0.65) translate3d(0, 30px, 0);
            opacity: 0;
          }
        }

        /* CRT TUBE BEAM EXPANSION (ORGANIC RETRO TURN-ON EFFECT) */
        .crt-screen-turn-on {
          animation: crtBeamExpand 0.44s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        @keyframes crtBeamExpand {
          0% {
            transform: scaleY(0.005) scaleX(0.2);
            opacity: 0;
          }
          22% {
            transform: scaleY(0.005) scaleX(1);
            opacity: 1;
          }
          65% {
            transform: scaleY(0.75) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
        }

        /* CRT TUBE BEAM COLLAPSE (VINTAGE TURN-OFF FLICKER) */
        .crt-screen-turn-off {
          animation: crtBeamCollapse 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        @keyframes crtBeamCollapse {
          0% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
          35% {
            transform: scaleY(0.008) scaleX(1);
            opacity: 1;
          }
          70% {
            transform: scaleY(0.008) scaleX(0.03);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes reverseSuctionHole {
          0% {
            transform: scale(1.4) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: scale(0.05) rotate(-180deg);
            opacity: 0;
          }
        }

        /* CRT SCANLINES LAYER */
        .crt-scanline-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%,
            rgba(0, 0, 0, 0.25) 50%
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

        /* CRT GLASS CORNER REFLECTION (REAL VINTAGE TUBE) */
        .crt-glass-reflection {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 40%, transparent 60%);
          pointer-events: none;
          z-index: 6;
          border-top-left-radius: 18px;
          border-top-right-radius: 18px;
        }

        /* CRT VIGNETTE TUBE CURVATURE LAYER */
        .crt-vignette-layer {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.9);
          pointer-events: none;
          z-index: 6;
        }

        @media (max-width: 768px) {
          .tv-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
