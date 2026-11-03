"use client";

import { useState, useEffect } from "react";
import { withBasePath } from "./basePath";
import { Sparkles, Briefcase, Flame } from "lucide-react";

export default function CosmicHeroShowcase() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const photos = [
    { id: "cosmic", name: "Cosmic Immersive", src: "/Profile/cosmic-hero.jpg", tag: "Highlight Kosmik" },
    { id: "suit", name: "Executive Suit", src: "/Profile/Foto-Profil.jpg", tag: "Jas Hitam Formal" },
    { id: "1", name: "Profile 1", src: "/Profile/1.jpeg", tag: "Gallery #1" },
    { id: "2", name: "Profile 2", src: "/Profile/2.jpeg", tag: "Gallery #2" },
    { id: "3", name: "Profile 3", src: "/Profile/3.jpeg", tag: "Gallery #3" },
    { id: "4", name: "Profile 4", src: "/Profile/4.jpeg", tag: "Gallery #4" },
    { id: "5", name: "Profile 5", src: "/Profile/5.jpeg", tag: "Gallery #5" },
  ] as const;

  // AUTO-SLIDE FOTO BERUBAH SENDIRI (SETIAP 3.6 DETIK)
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3600);

    return () => clearInterval(timer);
  }, [photos.length]);

  const currentPhoto = photos[activePhotoIndex];
  const isSuitActive = currentPhoto.id === "suit";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D CELESTIAL ORBITS & COMET CONTAINERS (HIGHLY LUMINOUS ON DARK BG) */}
      <div
        style={{
          position: "absolute",
          inset: "-60px -60px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        {/* DEEP NEBULA AMBIENT GLOW */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            width: "420px",
            height: "420px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.42) 0%, rgba(56, 189, 248, 0.28) 40%, rgba(249, 115, 22, 0.15) 60%, rgba(0, 0, 0, 0) 75%)",
            filter: "blur(32px)",
            borderRadius: "50%",
            animation: "nebulaPulse 6s ease-in-out infinite alternate",
          }}
        />

        {/* ORBIT TRACK 1: OUTER ELLIPSE WITH BRIGHT CYAN COMET */}
        <div
          className="orbit-track track-1"
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            width: "450px",
            height: "230px",
            transform: "translate(-50%, -50%) rotate(-18deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.25), inset 0 0 20px rgba(56, 189, 248, 0.12)",
          }}
        >
          {/* COMET 1 (CYAN HYPER-SPEED) */}
          <div className="comet comet-cyan">
            <div className="comet-head comet-head-cyan" />
            <div className="comet-tail comet-tail-cyan" />
          </div>
        </div>

        {/* ORBIT TRACK 2: INCLINED ELLIPSE WITH LUMINOUS MAGENTA/PURPLE COMET */}
        <div
          className="orbit-track track-2"
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            width: "400px",
            height: "280px",
            transform: "translate(-50%, -50%) rotate(34deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(216, 70, 239, 0.45)",
            boxShadow: "0 0 25px rgba(216, 70, 239, 0.25), inset 0 0 20px rgba(216, 70, 239, 0.12)",
          }}
        >
          {/* COMET 2 (MAGENTA AURORA) */}
          <div className="comet comet-magenta">
            <div className="comet-head comet-head-magenta" />
            <div className="comet-tail comet-tail-magenta" />
          </div>
        </div>

        {/* ORBIT TRACK 3: INNER FAST GOLD/ORANGE FIRE COMET */}
        <div
          className="orbit-track track-3"
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            width: "340px",
            height: "180px",
            transform: "translate(-50%, -50%) rotate(-48deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(249, 115, 22, 0.5)",
            boxShadow: "0 0 25px rgba(249, 115, 22, 0.3), inset 0 0 20px rgba(249, 115, 22, 0.15)",
          }}
        >
          {/* COMET 3 (ASTRA ORANGE FIRE) */}
          <div className="comet comet-orange">
            <div className="comet-head comet-head-orange" />
            <div className="comet-tail comet-tail-orange" />
          </div>
        </div>

        {/* FLOATING STARLIGHT SPARKLES */}
        <div className="starlight star-1" />
        <div className="starlight star-2" />
        <div className="starlight star-3" />
        <div className="starlight star-4" />
        <div className="starlight star-5" />
      </div>

      {/* CENTERPIECE: MAIN COSMIC HIGHLIGHT PORTAL (CLEAN PHOTO ONLY - NO TEXT INSIDE) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 310,
          aspectRatio: "3 / 4",
          borderRadius: 24,
          padding: 3,
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.95), rgba(56, 189, 248, 0.85), rgba(249, 115, 22, 0.9))",
          boxShadow: isHovered
            ? "0 20px 60px rgba(168, 85, 247, 0.55), 0 0 45px rgba(56, 189, 248, 0.45)"
            : "0 18px 50px rgba(0, 0, 0, 0.85), 0 0 35px rgba(168, 85, 247, 0.3)",
          transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: 21,
            overflow: "hidden",
            background: "#05070d",
          }}
        >
          {/* MAIN PHOTO WITH AUTO-ROTATE CROSS-FADE TRANSITION */}
          <img
            key={currentPhoto.src}
            src={withBasePath(currentPhoto.src)}
            alt={currentPhoto.name}
            className="photo-slide-fade"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = withBasePath("/profile.jpg");
            }}
          />

          {/* TOP TAG PILL */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "rgba(5, 8, 18, 0.82)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: 100,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#f8fafc",
              boxShadow: "0 4px 14px rgba(0,0,0,0.6)",
            }}
          >
            <Sparkles size={12} style={{ color: "#38bdf8" }} />
            <span>{currentPhoto.tag}</span>
          </div>

          {/* AUTO-SLIDE PROGRESS INDICATOR BAR */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: "rgba(255, 255, 255, 0.15)",
              overflow: "hidden",
            }}
          >
            <div
              key={activePhotoIndex}
              className="slide-progress-bar"
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #38bdf8, #f97316)",
              }}
            />
          </div>
        </div>
      </div>

      {/* HIGHLIGHT FLOATING BADGE: WAJAH BERJAS HITAM FORMAL */}
      <div
        className="animate-float"
        onClick={() => {
          const suitIdx = photos.findIndex((p) => p.id === "suit");
          if (suitIdx !== -1) setActivePhotoIndex(suitIdx);
        }}
        style={{
          position: "absolute",
          top: "-12px",
          right: "-18px",
          zIndex: 4,
          background: "rgba(11, 16, 28, 0.94)",
          backdropFilter: "blur(12px)",
          border: isSuitActive ? "2px solid #f97316" : "1px solid rgba(249, 115, 22, 0.5)",
          borderRadius: 16,
          padding: "8px 12px 8px 8px",
          boxShadow: isSuitActive
            ? "0 12px 35px rgba(249, 115, 22, 0.5), 0 0 25px rgba(249, 115, 22, 0.4)"
            : "0 8px 26px rgba(0, 0, 0, 0.7), 0 0 15px rgba(249, 115, 22, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          transition: "all 0.25s ease",
          transform: isSuitActive ? "scale(1.06)" : "scale(1)",
        }}
        title="Klik untuk melihat foto profil berjas hitam formal"
      >
        {/* AVATAR WAJAH BERJAS HITAM */}
        <div
          style={{
            position: "relative",
            width: 44,
            height: 44,
            borderRadius: 12,
            overflow: "hidden",
            border: "2px solid #ffffff",
            boxShadow: "0 0 14px rgba(249, 115, 22, 0.7)",
            flexShrink: 0,
          }}
        >
          <img
            src={withBasePath("/Profile/Foto-Profil.jpg")}
            alt="Ricky Alfian Jas Hitam"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
              border: "1.5px solid #0b101c",
            }}
          />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#ffffff" }}>
              Jas Hitam
            </span>
            <span
              style={{
                background: "#f97316",
                color: "#ffffff",
                fontSize: "0.6rem",
                fontWeight: 700,
                padding: "1px 5px",
                borderRadius: 4,
              }}
            >
              VIP
            </span>
          </div>
          <div style={{ fontSize: "0.68rem", color: "#94a3b8", fontWeight: 500 }}>
            {isSuitActive ? "✓ Sedang Ditampilkan" : "Klik untuk Fokus"}
          </div>
        </div>
      </div>

      {/* SECOND FLOATING BADGE: ASTRA MTM INTERN BADGE */}
      <div
        className="animate-float delay-300"
        style={{
          position: "absolute",
          bottom: "75px",
          left: "-22px",
          zIndex: 4,
          background: "rgba(11, 16, 28, 0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(56, 189, 248, 0.45)",
          borderRadius: 14,
          padding: "7px 12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.7), 0 0 15px rgba(56, 189, 248, 0.2)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: 8,
            background: "rgba(56, 189, 248, 0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#38bdf8",
          }}
        >
          <Briefcase size={14} />
        </div>
        <div>
          <div style={{ fontSize: "0.65rem", color: "#94a3b8", fontWeight: 500 }}>
            Internship
          </div>
          <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#ffffff" }}>
            Astra Otoparts Group
          </div>
        </div>
      </div>

      {/* NAMA BERADA DI BAWAH FOTO (SESUAI REQUEST USER) */}
      <div
        style={{
          marginTop: 16,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <span>Ricky Alfian Saputra</span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 12px #22c55e",
              display: "inline-block",
            }}
            title="Available for Work"
          />
        </div>
        <div
          style={{
            fontSize: "0.82rem",
            color: "#94a3b8",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span>Teknik Informatika</span>
          <span>·</span>
          <span style={{ color: "var(--accent)" }}>Full-Stack & Industrial IoT</span>
        </div>
      </div>

      {/* QUICK THUMBNAIL SELECTOR BAR (FOLDER PROFILE ASSETS) */}
      <div
        style={{
          marginTop: 14,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: 100,
          padding: "5px 10px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.6)",
          maxWidth: "100%",
          overflowX: "auto",
        }}
        className="no-scrollbar"
      >
        <span style={{ fontSize: "0.68rem", color: "#94a3b8", fontWeight: 600, paddingLeft: 4, paddingRight: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <Flame size={12} style={{ color: "#f97316" }} /> Auto-Slide:
        </span>
        {photos.map((p, idx) => {
          const isSel = idx === activePhotoIndex;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhotoIndex(idx)}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                padding: 0,
                border: isSel ? "2px solid #f97316" : "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: isSel ? "0 0 12px rgba(249, 115, 22, 0.7)" : "none",
                transform: isSel ? "scale(1.18)" : "scale(1)",
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 0.2s ease",
                background: "#080b14",
                flexShrink: 0,
              }}
              title={p.name}
            >
              <img
                src={withBasePath(p.src)}
                alt={p.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          );
        })}
      </div>

      {/* CSS STYLING FOR LUMINOUS COMETS, ORBITS, AND AUTO-SLIDE ANIMATION */}
      <style>{`
        /* ORBIT REVOLUTION KEYFRAMES */
        .orbit-track {
          pointer-events: none;
        }

        .track-1 {
          animation: orbitRotate1 9s linear infinite;
        }

        .track-2 {
          animation: orbitRotate2 7s linear infinite reverse;
        }

        .track-3 {
          animation: orbitRotate3 5s linear infinite;
        }

        @keyframes orbitRotate1 {
          0% { transform: translate(-50%, -50%) rotate(-18deg) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-18deg) rotate(360deg); }
        }

        @keyframes orbitRotate2 {
          0% { transform: translate(-50%, -50%) rotate(34deg) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(34deg) rotate(360deg); }
        }

        @keyframes orbitRotate3 {
          0% { transform: translate(-50%, -50%) rotate(-48deg) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-48deg) rotate(360deg); }
        }

        /* LUMINOUS COMETS */
        .comet {
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .comet-head {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ffffff;
        }

        .comet-head-cyan {
          box-shadow: 0 0 12px #ffffff, 0 0 25px #38bdf8, 0 0 40px #0284c7;
        }

        .comet-head-magenta {
          box-shadow: 0 0 12px #ffffff, 0 0 25px #d946ef, 0 0 40px #a855f7;
        }

        .comet-head-orange {
          box-shadow: 0 0 12px #ffffff, 0 0 25px #f97316, 0 0 40px #ea580c;
        }

        .comet-tail {
          width: 65px;
          height: 4px;
          border-radius: 100px;
          margin-left: -3px;
        }

        .comet-tail-cyan {
          background: linear-gradient(90deg, #38bdf8 0%, rgba(56, 189, 248, 0.6) 40%, rgba(56, 189, 248, 0) 100%);
          box-shadow: 0 0 14px rgba(56, 189, 248, 0.7);
        }

        .comet-tail-magenta {
          background: linear-gradient(90deg, #d946ef 0%, rgba(217, 70, 239, 0.6) 40%, rgba(217, 70, 239, 0) 100%);
          box-shadow: 0 0 14px rgba(217, 70, 239, 0.7);
        }

        .comet-tail-orange {
          background: linear-gradient(90deg, #f97316 0%, rgba(249, 115, 22, 0.6) 40%, rgba(249, 115, 22, 0) 100%);
          box-shadow: 0 0 14px rgba(249, 115, 22, 0.7);
        }

        /* NEBULA PULSE */
        @keyframes nebulaPulse {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 0.95; transform: translate(-50%, -50%) scale(1.15); }
        }

        /* STARLIGHT SPARKLES */
        .starlight {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 10px #ffffff, 0 0 18px #38bdf8;
          animation: starTwinkle 2.5s ease-in-out infinite alternate;
        }

        .star-1 { top: 15%; left: 12%; animation-delay: 0.2s; }
        .star-2 { top: 80%; right: 14%; animation-delay: 0.8s; }
        .star-3 { top: 25%; right: 18%; animation-delay: 1.4s; }
        .star-4 { bottom: 15%; left: 20%; animation-delay: 1.9s; }
        .star-5 { top: 50%; left: 6%; animation-delay: 1.1s; }

        @keyframes starTwinkle {
          0% { opacity: 0.25; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1.4); }
        }

        /* AUTO-SLIDE PROGRESS BAR */
        .slide-progress-bar {
          animation: slideProgress 3.6s linear forwards;
        }

        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        /* PHOTO CROSS-FADE */
        .photo-slide-fade {
          animation: photoFadeIn 0.5s ease-out;
        }

        @keyframes photoFadeIn {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
