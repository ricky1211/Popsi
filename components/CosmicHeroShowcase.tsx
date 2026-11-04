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
        maxWidth: 780,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 1. SHOOTING STARS / BINTANG JATUH (MELUNCUR DI ANGKASA) */}
      <div
        style={{
          position: "absolute",
          inset: "-80px -100px",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div className="shooting-star star-drop-1" />
        <div className="shooting-star star-drop-2" />
        <div className="shooting-star star-drop-3" />
        <div className="shooting-star star-drop-4" />
      </div>

      {/* 2. SILUET KODE PROGRAMMER DI BELAKANG FOTO PROFIL */}
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(680px, 92vw)",
          height: "190px",
          zIndex: 1,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={withBasePath("/Profile/code-silhouette.jpg")}
          alt="Silhouette Code Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
            filter: "contrast(1.2) brightness(1.1)",
            maskImage:
              "radial-gradient(ellipse 75% 70% at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 50% 50%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 95%)",
          }}
        />
      </div>

      {/* 3. 3D CELESTIAL ORBITS & COMET TRAILS */}
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          pointerEvents: "none",
          zIndex: 2,
          overflow: "visible",
        }}
      >
        {/* NEBULA AMBIENT GLOW */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "320px",
            height: "320px",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(56, 189, 248, 0.25) 45%, rgba(0, 0, 0, 0) 75%)",
            filter: "blur(26px)",
            borderRadius: "50%",
            animation: "nebulaPulse 6s ease-in-out infinite alternate",
          }}
        />

        {/* ORBIT TRACK 1: CYAN COMET */}
        <div
          className="orbit-track track-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "360px",
            height: "180px",
            transform: "translate(-50%, -50%) rotate(-18deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(56, 189, 248, 0.45)",
            boxShadow: "0 0 25px rgba(56, 189, 248, 0.22)",
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
            top: "50%",
            left: "50%",
            width: "320px",
            height: "220px",
            transform: "translate(-50%, -50%) rotate(34deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(216, 70, 239, 0.45)",
            boxShadow: "0 0 25px rgba(216, 70, 239, 0.22)",
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
            top: "50%",
            left: "50%",
            width: "270px",
            height: "145px",
            transform: "translate(-50%, -50%) rotate(-48deg)",
            borderRadius: "50%",
            border: "1.5px dashed rgba(249, 115, 22, 0.5)",
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

      {/* 4. FOTO PROFIL BULAT DI TENGAH */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: 210,
          height: 210,
          borderRadius: "50%",
          padding: 3,
          background: "linear-gradient(135deg, #a855f7 0%, #38bdf8 50%, #f97316 100%)",
          boxShadow:
            "0 0 45px rgba(168, 85, 247, 0.5), 0 0 30px rgba(56, 189, 248, 0.35)",
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

      {/* 5. NAMA & SUBTITLE DI BAWAH FOTO SESUAI SCREENSHOT USER */}
      <div style={{ marginTop: 16, textAlign: "center", zIndex: 3 }}>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.015em",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 9,
            margin: 0,
            fontFamily: "var(--font-google-sans)",
          }}
        >
          <span>Ricky Alfian Saputra</span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              boxShadow: "0 0 10px #22c55e, 0 0 4px #22c55e",
              display: "inline-block",
            }}
          />
        </h1>
        <div
          style={{
            fontSize: "0.92rem",
            color: "rgba(226, 232, 240, 0.72)",
            marginTop: 4,
            fontWeight: 500,
            letterSpacing: "0.01em",
            fontFamily: "var(--font-google-sans)",
          }}
        >
          Teknik Informatika · Cikarang, ID
        </div>
      </div>

      {/* 6. MINIMALIST DOTS SELECTOR (TITIK AVATAR BERSIH) */}
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

      {/* CSS STYLING UNTUK BINTANG JATUH & KOMET */}
      <style>{`
        /* SHOOTING STARS / BINTANG JATUH */
        .shooting-star {
          position: absolute;
          height: 2px;
          background: linear-gradient(-45deg, #ffffff, rgba(56, 189, 248, 0.8), rgba(0, 0, 255, 0));
          border-radius: 999px;
          filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.8));
          transform: rotate(-38deg);
          pointer-events: none;
          opacity: 0;
        }

        .star-drop-1 {
          top: 10%;
          right: 15%;
          width: 140px;
          animation: meteorDrop 4.2s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .star-drop-2 {
          top: 30%;
          right: 5%;
          width: 110px;
          animation: meteorDrop 5.5s ease-in-out infinite;
          animation-delay: 2.2s;
        }

        .star-drop-3 {
          top: 5%;
          right: 35%;
          width: 90px;
          animation: meteorDrop 6s ease-in-out infinite;
          animation-delay: 3.8s;
        }

        .star-drop-4 {
          top: 25%;
          left: 10%;
          width: 120px;
          animation: meteorDrop 4.8s ease-in-out infinite;
          animation-delay: 1.4s;
        }

        @keyframes meteorDrop {
          0% {
            opacity: 0;
            transform: rotate(-38deg) translate3d(0, 0, 0);
          }
          10% {
            opacity: 1;
          }
          30% {
            opacity: 0;
            transform: rotate(-38deg) translate3d(-240px, 190px, 0);
          }
          100% {
            opacity: 0;
            transform: rotate(-38deg) translate3d(-240px, 190px, 0);
          }
        }

        /* ORBIT REVOLUTION */
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

        /* COMETS */
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
