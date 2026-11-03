"use client";

import { useState, useEffect } from "react";
import { withBasePath } from "./basePath";

export default function CosmicHeroShowcase() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const photos = [
    { id: "cosmic", src: "/Profile/cosmic-hero.jpg" },
    { id: "suit", src: "/Profile/Foto-Profil.jpg" },
    { id: "1", src: "/Profile/1.jpeg" },
    { id: "2", src: "/Profile/2.jpeg" },
    { id: "3", src: "/Profile/3.jpeg" },
    { id: "4", src: "/Profile/4.jpeg" },
    { id: "5", src: "/Profile/5.jpeg" },
  ] as const;

  // AUTO-SLIDE FOTO BERUBAH SENDIRI (SETIAP 3.5 DETIK)
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [photos.length]);

  const currentPhoto = photos[activePhotoIndex];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 380,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 3D CELESTIAL ORBITS & COMET TRAILS (BEBAS TANPA CARD) */}
      <div
        style={{
          position: "absolute",
          inset: "-60px -60px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        {/* NEBULA GLOW */}
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            width: "380px",
            height: "380px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.38) 0%, rgba(56, 189, 248, 0.22) 40%, rgba(249, 115, 22, 0.12) 60%, rgba(0, 0, 0, 0) 75%)",
            filter: "blur(30px)",
            borderRadius: "50%",
            animation: "nebulaPulse 6s ease-in-out infinite alternate",
          }}
        />

        {/* ORBIT TRACK 1: CYAN COMET */}
        <div
          className="orbit-track track-1"
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            width: "420px",
            height: "210px",
            transform: "translate(-50%, -50%) rotate(-18deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(56, 189, 248, 0.4)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.2)",
          }}
        >
          <div className="comet comet-cyan">
            <div className="comet-head comet-head-cyan" />
            <div className="comet-tail comet-tail-cyan" />
          </div>
        </div>

        {/* ORBIT TRACK 2: MAGENTA COMET */}
        <div
          className="orbit-track track-2"
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            width: "370px",
            height: "260px",
            transform: "translate(-50%, -50%) rotate(34deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(216, 70, 239, 0.4)",
            boxShadow: "0 0 25px rgba(216, 70, 239, 0.2)",
          }}
        >
          <div className="comet comet-magenta">
            <div className="comet-head comet-head-magenta" />
            <div className="comet-tail comet-tail-magenta" />
          </div>
        </div>

        {/* ORBIT TRACK 3: ORANGE FIRE COMET */}
        <div
          className="orbit-track track-3"
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            width: "320px",
            height: "170px",
            transform: "translate(-50%, -50%) rotate(-48deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(249, 115, 22, 0.45)",
            boxShadow: "0 0 25px rgba(249, 115, 22, 0.25)",
          }}
        >
          <div className="comet comet-orange">
            <div className="comet-head comet-head-orange" />
            <div className="comet-tail comet-tail-orange" />
          </div>
        </div>

        {/* STARLIGHT SPARKLES */}
        <div className="starlight star-1" />
        <div className="starlight star-2" />
        <div className="starlight star-3" />
        <div className="starlight star-4" />
      </div>

      {/* PORTAL KOSMIK: MURNI FOTO ORGANIK TANPA CARD / TANPA BINGKAI KOTAK TEBAL */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: 280,
          height: 280,
          borderRadius: "50%",
          padding: 3,
          background: "linear-gradient(135deg, #a855f7 0%, #38bdf8 50%, #f97316 100%)",
          boxShadow: "0 0 45px rgba(168, 85, 247, 0.4), 0 0 30px rgba(56, 189, 248, 0.3)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            background: "#07090e",
            position: "relative",
          }}
        >
          {/* FOTO AUTO-ROTATE */}
          <img
            key={currentPhoto.src}
            src={withBasePath(currentPhoto.src)}
            alt="Ricky Alfian Saputra"
            className="photo-fade"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = withBasePath("/profile.jpg");
            }}
          />
        </div>
      </div>

      {/* NAMA BERSIH DI BAWAH FOTO (BEBAS CARD, BEBAS TEKS BERLEBIH) */}
      <div
        style={{
          marginTop: 18,
          textAlign: "center",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: "1.25rem",
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
              boxShadow: "0 0 10px #22c55e",
              display: "inline-block",
            }}
          />
        </div>
        <div style={{ fontSize: "0.82rem", color: "#94a3b8", fontWeight: 500 }}>
          Teknik Informatika · Cikarang, ID
        </div>
      </div>

      {/* MINIMALIST DOTS SELECTOR (TANPA TEKS, HANYA AVATAR BULAT BERSIH) */}
      <div
        style={{
          marginTop: 14,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {photos.map((p, idx) => {
          const isSel = idx === activePhotoIndex;
          return (
            <button
              key={p.id}
              onClick={() => setActivePhotoIndex(idx)}
              style={{
                width: isSel ? 22 : 14,
                height: isSel ? 22 : 14,
                borderRadius: "50%",
                padding: 0,
                border: isSel ? "2px solid #f97316" : "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: isSel ? "0 0 12px rgba(249, 115, 22, 0.7)" : "none",
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 0.25s ease",
                background: "#080b14",
                flexShrink: 0,
              }}
              title={`Foto ${idx + 1}`}
            >
              <img
                src={withBasePath(p.src)}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          );
        })}
      </div>

      {/* CSS KEYFRAMES UNTUK KOMET & FADE */}
      <style>{`
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

        .comet {
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
        }

        .comet-head {
          width: 9px;
          height: 9px;
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

        @keyframes nebulaPulse {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 0.95; transform: translate(-50%, -50%) scale(1.15); }
        }

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

        @keyframes starTwinkle {
          0% { opacity: 0.25; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1.4); }
        }

        .photo-fade {
          animation: photoFadeIn 0.6s ease-out;
        }

        @keyframes photoFadeIn {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
