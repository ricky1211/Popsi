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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevProjectId, setPrevProjectId] = useState<string | undefined>(project?.id);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync state reset when project prop changes
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
    }, 320);
  }, [animStage, onClose, soundEnabled]);

  useEffect(() => {
    if (!project) return;
    const timer = setTimeout(() => {
      setAnimStage("active");
    }, 420);
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
        background: "rgba(3, 5, 12, 0.92)",
        backdropFilter: "blur(16px)",
        padding: "16px",
        overflowY: "auto",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* VORTEX GRAVITY RINGS */}
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
          <div
            style={{
              position: "absolute",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: `0 0 35px #ffffff, 0 0 70px ${project.color}`,
              animation: "suctionSingularity 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          />
        </div>
      )}

      {/* TELEVISION CABINET CONTAINER (CLEAN, PROPORTIONAL & CENTERED) */}
      <div
        className={`tv-chassis ${animStage === "power-on" ? "tv-suction-enter" : animStage === "power-off" ? "tv-suction-exit" : "tv-stable"}`}
        style={{
          width: "100%",
          maxWidth: 1020,
          background: "linear-gradient(180deg, #161928 0%, #0d0f1b 100%)",
          borderRadius: 22,
          border: `2px solid ${project.color}66`,
          boxShadow: `0 20px 70px rgba(0,0,0,0.9), 0 0 40px ${project.color}25`,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          color: "#f8fafc",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER BAR: CHANNEL, TITLE, & TOP CONTROLS */}
        <div
          style={{
            padding: "10px 18px",
            background: "#111422",
            borderBottom: "1px solid #232840",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {/* Channel & Project Title */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                background: project.color,
                color: "#ffffff",
                padding: "3px 9px",
                borderRadius: 6,
                fontSize: "0.76rem",
                fontWeight: 800,
                fontFamily: "monospace",
                letterSpacing: "0.06em",
              }}
            >
              {project.channel}
            </span>
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>
              {project.title}
            </span>
            <span style={{ color: "#64748b", fontSize: "0.8rem" }}>·</span>
            <span style={{ color: "#94a3b8", fontSize: "0.8rem", fontWeight: 500 }}>
              {project.category}
            </span>
          </div>

          {/* Quick TV Control Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {/* Prev Channel */}
            <button
              onClick={() => navigateChannel("prev")}
              title="Channel Sebelumnya"
              style={{
                background: "#1a1f33",
                border: "1px solid #2e3654",
                color: "#e2e8f0",
                borderRadius: 6,
                padding: "5px 10px",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <ChevronLeft size={13} />
              <span>Prev</span>
            </button>

            {/* Next Channel */}
            <button
              onClick={() => navigateChannel("next")}
              title="Channel Berikutnya"
              style={{
                background: "#1a1f33",
                border: "1px solid #2e3654",
                color: "#e2e8f0",
                borderRadius: 6,
                padding: "5px 10px",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span>Next</span>
              <ChevronRight size={13} />
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Mute Suara" : "Nyalakan Suara"}
              style={{
                background: "#1a1f33",
                border: "1px solid #2e3654",
                color: soundEnabled ? "#22c55e" : "#64748b",
                borderRadius: 6,
                padding: "6px 8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </button>

            {/* Zoom Button */}
            <button
              onClick={() => setIsZoomed(true)}
              title="Perbesar Tampilan HD"
              style={{
                background: "#1a1f33",
                border: "1px solid #2e3654",
                color: "#38bdf8",
                borderRadius: 6,
                padding: "5px 10px",
                fontSize: "0.75rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Maximize2 size={13} />
              <span>Zoom</span>
            </button>

            {/* Live Link Button (if available) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: project.color,
                  color: "#ffffff",
                  borderRadius: 6,
                  padding: "5px 12px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <span>Live Link</span>
                <ExternalLink size={12} />
              </a>
            )}

            {/* Power Off Button */}
            <button
              onClick={handleClose}
              title="Tutup (Esc)"
              style={{
                background: "#dc2626",
                border: "none",
                color: "#ffffff",
                borderRadius: 6,
                padding: "5px 12px",
                fontSize: "0.75rem",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginLeft: 4,
              }}
            >
              <Power size={13} />
              <span>Tutup</span>
            </button>
          </div>
        </div>

        {/* SCREEN SECTION: 100% CRYSTAL CLEAR IMAGE (NO SCANLINE ARTIFACTS, NO BLOCKING BADGES) */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 520,
            background: "#04060c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            cursor: "zoom-in",
          }}
          onClick={() => setIsZoomed(true)}
        >
          {/* Subtle Outer Bezel Curvature */}
          <div className="crt-vignette-layer" />

          {/* 100% CLEAR SCREENSHOT IMAGE */}
          <img
            key={currentImage}
            src={currentImage}
            alt={currentImageTitle}
            className={animStage === "power-on" ? "crt-screen-turn-on" : animStage === "power-off" ? "crt-screen-turn-off" : ""}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              position: "relative",
              zIndex: 2,
            }}
          />
        </div>

        {/* BOTTOM SECTION: SCREENSHOT MODULE SELECTOR TABS (CLEAN & COMPACT) */}
        {galleryList && galleryList.length > 1 && (
          <div
            style={{
              padding: "10px 16px",
              background: "#101322",
              borderTop: "1px solid #1f253a",
              display: "flex",
              alignItems: "center",
              gap: 8,
              overflowX: "auto",
            }}
            className="no-scrollbar"
          >
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
                      background: isSel ? project.color : "#171c2e",
                      color: isSel ? "#ffffff" : "#94a3b8",
                      border: isSel ? `1px solid ${project.color}` : "1px solid #262e48",
                      borderRadius: 6,
                      padding: "6px 12px",
                      fontSize: "0.74rem",
                      fontWeight: isSel ? 700 : 500,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      whiteSpace: "nowrap",
                      boxShadow: isSel ? `0 0 12px ${project.color}55` : "none",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ opacity: isSel ? 1 : 0.6, fontFamily: "monospace", fontSize: "0.68rem" }}>
                      {idx + 1}.
                    </span>
                    <span>{item.badge || item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
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
          animation: backdropFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: opacity;
        }

        .modal-backdrop-exit {
          animation: backdropFadeOut 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
          width: 75vw;
          height: 75vw;
          border-width: 2px;
          animation: ringSmoothSpin 0.4s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }

        .ring-2 {
          width: 48vw;
          height: 48vw;
          border-width: 2px;
          animation: ringSmoothSpin 0.36s 0.04s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
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

        /* TV CHASSIS WARP-IN: SMOOTH CINEMATIC SPRING ZOOM */
        .tv-suction-enter {
          animation: tvSmoothEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes tvSmoothEnter {
          0% {
            transform: scale(0.75) translate3d(0, 30px, 0);
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
          animation: tvSmoothExit 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          will-change: transform, opacity;
        }

        @keyframes tvSmoothExit {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: 1;
          }
          30% {
            transform: scale(1.02) translate3d(0, -2px, 0);
            opacity: 1;
          }
          100% {
            transform: scale(0.7) translate3d(0, 25px, 0);
            opacity: 0;
          }
        }

        /* CRT TUBE BEAM EXPANSION (ORGANIC TURN-ON EFFECT) */
        .crt-screen-turn-on {
          animation: crtBeamExpand 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
            transform: scaleY(0.8) scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleY(1) scaleX(1);
            opacity: 1;
          }
        }

        /* CRT TUBE BEAM COLLAPSE */
        .crt-screen-turn-off {
          animation: crtBeamCollapse 0.28s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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

        /* CRT VIGNETTE TUBE CURVATURE LAYER (SUBTLE & CLEAN) */
        .crt-vignette-layer {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 35px rgba(0, 0, 0, 0.8);
          pointer-events: none;
          z-index: 4;
        }
      `}</style>
    </div>
  );
}
