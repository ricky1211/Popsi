"use client";

import { useState } from "react";
import { withBasePath } from "./basePath";
import { Sparkles, Briefcase, Eye } from "lucide-react";

export default function CosmicHeroShowcase() {
  const [activePhoto, setActivePhoto] = useState<"cosmic" | "suit" | "1" | "2" | "3" | "4" | "5">("cosmic");
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

  const currentPhoto = photos.find((p) => p.id === activePhoto) || photos[0];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 440,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D CELESTIAL ORBITS & COMET CONTAINERS */}
      <div
        style={{
          position: "absolute",
          inset: "-40px -40px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        {/* NEBULA AMBIENT GLOW */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "360px",
            height: "360px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.28) 0%, rgba(56, 189, 248, 0.18) 45%, rgba(0, 0, 0, 0) 70%)",
            filter: "blur(28px)",
            borderRadius: "50%",
            animation: "nebulaPulse 6s ease-in-out infinite alternate",
          }}
        />

        {/* ORBIT TRACK 1: OUTER ELLIPSE WITH FAST CYAN COMET */}
        <div
          className="orbit-track track-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "420px",
            height: "220px",
            transform: "translate(-50%, -50%) rotate(-18deg)",
            borderRadius: "50%",
            border: "1px dashed rgba(56, 189, 248, 0.22)",
            boxShadow: "0 0 15px rgba(56, 189, 248, 0.08)",
          }}
        >
          {/* COMET 1 */}
          <div className="comet comet-cyan">
            <div className="comet-head" />
            <div className="comet-tail comet-tail-cyan" />
          </div>
        </div>

        {/* ORBIT TRACK 2: INCLINED ELLIPSE WITH PURPLE/MAGENTA COMET */}
        <div
          className="orbit-track track-2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "380px",
            height: "260px",
            transform: "translate(-50%, -50%) rotate(34deg)",
            borderRadius: "50%",
            border: "1px dashed rgba(192, 132, 252, 0.24)",
            boxShadow: "0 0 15px rgba(192, 132, 252, 0.08)",
          }}
        >
          {/* COMET 2 */}
          <div className="comet comet-magenta">
            <div className="comet-head comet-head-magenta" />
            <div className="comet-tail comet-tail-magenta" />
          </div>
        </div>

        {/* ORBIT TRACK 3: INNER FAST GOLD/ORANGE COMET */}
        <div
          className="orbit-track track-3"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "320px",
            height: "170px",
            transform: "translate(-50%, -50%) rotate(-45deg)",
            borderRadius: "50%",
            border: "1px dashed rgba(251, 146, 60, 0.25)",
            boxShadow: "0 0 15px rgba(251, 146, 60, 0.1)",
          }}
        >
          {/* COMET 3 */}
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
      </div>

      {/* CENTERPIECE: MAIN COSMIC HIGHLIGHT PORTAL */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 320,
          aspectRatio: "3 / 4",
          borderRadius: 24,
          padding: 3,
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.8), rgba(56, 189, 248, 0.6), rgba(249, 115, 22, 0.7))",
          boxShadow: isHovered
            ? "0 20px 50px rgba(168, 85, 247, 0.4), 0 0 35px rgba(56, 189, 248, 0.35)"
            : "0 16px 40px rgba(0, 0, 0, 0.35), 0 0 25px rgba(168, 85, 247, 0.2)",
          transform: isHovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)",
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
            background: "#080b14",
          }}
        >
          {/* MAIN PHOTO */}
          <img
            key={currentPhoto.src}
            src={withBasePath(currentPhoto.src)}
            alt={currentPhoto.name}
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

          {/* GRADIENT OVERLAY SCENE */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(8,11,20,0.1) 0%, rgba(8,11,20,0.2) 50%, rgba(8,11,20,0.85) 100%)",
              pointerEvents: "none",
            }}
          />

          {/* TOP TAG PILL */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: "rgba(10, 14, 26, 0.75)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              borderRadius: 100,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#f8fafc",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <Sparkles size={12} style={{ color: "#38bdf8" }} />
            <span>{currentPhoto.tag}</span>
          </div>

          {/* BOTTOM CAPTION */}
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              right: 12,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              color: "#ffffff",
              pointerEvents: "none",
            }}
          >
            <div style={{ fontSize: "0.92rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
              Ricky Alfian Saputra
            </div>
            <div style={{ fontSize: "0.74rem", color: "#cbd5e1", opacity: 0.9 }}>
              Informatika · Full-Stack & Industrial IoT
            </div>
          </div>
        </div>
      </div>

      {/* HIGHLIGHT FLOATING BADGE: WAJAH BERJAS HITAM FORMAL */}
      <div
        className="animate-float"
        onClick={() => setActivePhoto(activePhoto === "suit" ? "cosmic" : "suit")}
        style={{
          position: "absolute",
          top: "-10px",
          right: "-18px",
          zIndex: 4,
          background: "rgba(15, 20, 36, 0.92)",
          backdropFilter: "blur(10px)",
          border: activePhoto === "suit" ? "2px solid #e8673a" : "1px solid rgba(232, 103, 58, 0.45)",
          borderRadius: 16,
          padding: "8px 12px 8px 8px",
          boxShadow: activePhoto === "suit"
            ? "0 10px 30px rgba(232, 103, 58, 0.4), 0 0 20px rgba(232, 103, 58, 0.3)"
            : "0 8px 24px rgba(0, 0, 0, 0.5), 0 0 15px rgba(232, 103, 58, 0.2)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          transition: "all 0.25s ease",
          transform: activePhoto === "suit" ? "scale(1.05)" : "scale(1)",
        }}
        title="Klik untuk highlight foto berjas hitam"
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
            boxShadow: "0 0 12px rgba(232, 103, 58, 0.6)",
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
              border: "1.5px solid #0f1424",
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
                background: "#e8673a",
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
            {activePhoto === "suit" ? "✓ Sedang Ditampilkan" : "Klik untuk Fokus"}
          </div>
        </div>
      </div>

      {/* SECOND FLOATING BADGE: ASTRA MTM INTERN BADGE */}
      <div
        className="animate-float delay-300"
        style={{
          position: "absolute",
          bottom: "16px",
          left: "-22px",
          zIndex: 4,
          background: "rgba(15, 20, 36, 0.9)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(56, 189, 248, 0.4)",
          borderRadius: 14,
          padding: "7px 12px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45), 0 0 15px rgba(56, 189, 248, 0.15)",
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
            background: "rgba(56, 189, 248, 0.15)",
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

      {/* QUICK THUMBNAIL SELECTOR BAR (FOLDER PROFILE ASSETS) */}
      <div
        style={{
          marginTop: 18,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          padding: "4px 8px",
          boxShadow: "0 4px 16px var(--shadow)",
          maxWidth: "100%",
          overflowX: "auto",
        }}
        className="no-scrollbar"
      >
        <span style={{ fontSize: "0.68rem", color: "var(--fg-muted)", fontWeight: 600, paddingLeft: 4, paddingRight: 4, display: "flex", alignItems: "center", gap: 3 }}>
          <Eye size={11} /> Switch:
        </span>
        {photos.map((p) => {
          const isSel = p.id === activePhoto;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhoto(p.id)}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                padding: 0,
                border: isSel ? "2px solid #e8673a" : "1px solid var(--border)",
                boxShadow: isSel ? "0 0 10px rgba(232, 103, 58, 0.5)" : "none",
                transform: isSel ? "scale(1.15)" : "scale(1)",
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

      {/* CSS STYLING FOR COMETS & ORBITS */}
      <style>{`
        /* ORBIT REVOLUTION KEYFRAMES */
        .orbit-track {
          pointer-events: none;
        }

        .track-1 {
          animation: orbitRotate1 10s linear infinite;
        }

        .track-2 {
          animation: orbitRotate2 8s linear infinite reverse;
        }

        .track-3 {
          animation: orbitRotate3 6s linear infinite;
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
          0% { transform: translate(-50%, -50%) rotate(-45deg) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-45deg) rotate(360deg); }
        }

        /* COMET BASE STYLES */
        .comet {
          position: absolute;
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .comet-head {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px #ffffff, 0 0 20px #38bdf8;
        }

        .comet-head-magenta {
          box-shadow: 0 0 10px #ffffff, 0 0 20px #c084fc;
        }

        .comet-head-orange {
          box-shadow: 0 0 10px #ffffff, 0 0 20px #fb923c;
        }

        .comet-tail {
          width: 48px;
          height: 3px;
          border-radius: 100px;
          margin-left: -2px;
        }

        .comet-tail-cyan {
          background: linear-gradient(90deg, #38bdf8 0%, rgba(56, 189, 248, 0.4) 40%, rgba(56, 189, 248, 0) 100%);
          box-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
        }

        .comet-tail-magenta {
          background: linear-gradient(90deg, #c084fc 0%, rgba(192, 132, 252, 0.4) 40%, rgba(192, 132, 252, 0) 100%);
          box-shadow: 0 0 8px rgba(192, 132, 252, 0.5);
        }

        .comet-tail-orange {
          background: linear-gradient(90deg, #fb923c 0%, rgba(251, 146, 60, 0.4) 40%, rgba(251, 146, 60, 0) 100%);
          box-shadow: 0 0 8px rgba(251, 146, 60, 0.5);
        }

        /* NEBULA PULSE */
        @keyframes nebulaPulse {
          0% { opacity: 0.55; transform: translate(-50%, -50%) scale(0.95); }
          100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* STARLIGHT SPARKLES */
        .starlight {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 8px #ffffff;
          animation: starTwinkle 2.5s ease-in-out infinite alternate;
        }

        .star-1 { top: 20%; left: 15%; animation-delay: 0.2s; }
        .star-2 { top: 75%; right: 18%; animation-delay: 0.8s; }
        .star-3 { top: 30%; right: 22%; animation-delay: 1.4s; }
        .star-4 { bottom: 18%; left: 25%; animation-delay: 1.9s; }

        @keyframes starTwinkle {
          0% { opacity: 0.2; transform: scale(0.7); }
          100% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
