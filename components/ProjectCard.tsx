"use client";

import { useState } from "react";
import { ProjectItem } from "./projectsData";
import { ExternalLink, Tv, ArrowUpRight } from "lucide-react";
import { playTvSound } from "./tvAudio";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenTv: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenTv }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSucking, setIsSucking] = useState(false);

  const handleCardClick = () => {
    if (isSucking) return;
    setIsSucking(true);
    playTvSound("suction");

    setTimeout(() => {
      onOpenTv(project);
      setIsSucking(false);
    }, 280);
  };

  return (
    <div
      className={`card project-compact-card ${isSucking ? "card-suction-active" : ""}`}
      style={{
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        background: "var(--bg-card)",
        border: `1px solid ${isHovered ? project.color + "77" : "var(--border)"}`,
        borderRadius: 18,
        boxShadow: isSucking
          ? `0 0 45px ${project.color}99, inset 0 0 30px ${project.color}66`
          : isHovered
          ? `0 14px 36px var(--shadow), 0 0 20px ${project.color}20`
          : "0 3px 16px var(--shadow)",
        transform: isSucking
          ? "scale(0.86) rotate(-2deg)"
          : isHovered
          ? "translateY(-5px)"
          : "translateY(0)",
        filter: isSucking ? "brightness(1.5) contrast(1.3)" : "none",
        transition: isSucking
          ? "all 0.28s cubic-bezier(0.55, 0.055, 0.675, 0.19)"
          : "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* VORTEX SUCTION OVERLAY ON CARD WHEN CLICKED */}
      {isSucking && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 30,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(5, 8, 18, 0.6)",
          }}
        >
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: `3px solid ${project.color}`,
              boxShadow: `0 0 35px ${project.color}, inset 0 0 25px ${project.color}`,
              animation: "cardVortexSpin 0.28s ease-in forwards",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 0 20px #ffffff, 0 0 40px #38bdf8",
              animation: "singularityPulse 0.28s ease-in forwards",
            }}
          />
        </div>
      )}

      {/* COMPACT THUMBNAIL WITH HUD OVERLAYS */}
      <div
        style={{
          position: "relative",
          height: 160,
          overflow: "hidden",
          background: "#090d16",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isSucking
              ? "scale(0.7) rotate(6deg)"
              : isHovered
              ? "scale(1.06)"
              : "scale(1)",
            transition: isSucking ? "transform 0.28s ease-in" : "transform 0.5s ease",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Gradient Scrim */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(10,14,24,0.3) 0%, rgba(10,14,24,0.1) 40%, rgba(10,14,24,0.85) 100%)",
          }}
        />

        {/* HUD CORNER BRACKETS */}
        <div style={{ position: "absolute", top: 8, left: 8, width: 8, height: 8, borderTop: "2px solid rgba(255,255,255,0.6)", borderLeft: "2px solid rgba(255,255,255,0.6)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderTop: "2px solid rgba(255,255,255,0.6)", borderRight: "2px solid rgba(255,255,255,0.6)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 8, left: 8, width: 8, height: 8, borderBottom: "2px solid rgba(255,255,255,0.6)", borderLeft: "2px solid rgba(255,255,255,0.6)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 8, right: 8, width: 8, height: 8, borderBottom: "2px solid rgba(255,255,255,0.6)", borderRight: "2px solid rgba(255,255,255,0.6)", pointerEvents: "none" }} />

        {/* TOP BAR: Channel Pill + Category */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(10, 14, 26, 0.88)",
              border: `1px solid ${project.color}77`,
              borderRadius: 6,
              padding: "3px 8px",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: "0.72rem",
              fontWeight: 800,
              color: project.color,
              fontFamily: "monospace",
              backdropFilter: "blur(6px)",
            }}
          >
            <Tv size={11} />
            <span>{project.channel}</span>
          </div>

          <span
            style={{
              background: "rgba(15, 23, 42, 0.82)",
              color: "#cbd5e1",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 6,
              padding: "2px 7px",
              fontSize: "0.68rem",
              fontWeight: 600,
              backdropFilter: "blur(4px)",
            }}
          >
            {project.category}
          </span>
        </div>

        {/* BOTTOM BAR: Metric Callout */}
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              background: "rgba(10, 14, 26, 0.9)",
              color: project.color,
              border: `1px solid ${project.color}55`,
              borderRadius: 4,
              padding: "2px 6px",
              fontSize: "0.7rem",
              fontWeight: 700,
            }}
          >
            ⚡ {project.metrics.value}
          </span>

          <span
            style={{
              background: project.status === "Live" ? "#16a34a" : "#2563eb",
              color: "#ffffff",
              borderRadius: 4,
              padding: "1px 6px",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            {project.status}
          </span>
        </div>

        {/* HOVER QUICK PORTAL LAUNCH OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 14, 26, 0.75)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            color: "#ffffff",
            opacity: isHovered && !isSucking ? 1 : 0,
            transition: "opacity 0.2s ease",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: project.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 16px ${project.color}`,
            }}
          >
            <Tv size={16} />
          </div>
          <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.03em" }}>
            Tersedot ke TV Portal
          </span>
        </div>
      </div>

      {/* COMPACT CARD BODY */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title & Tagline */}
        <div style={{ marginBottom: 6 }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1.3,
              color: isHovered ? project.color : "var(--fg)",
              transition: "color 0.2s ease",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.74rem",
              color: "var(--fg-muted)",
              margin: "2px 0 0",
              fontWeight: 500,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.subtitle}
          </p>
        </div>

        {/* 1-Line Description */}
        <p
          style={{
            color: "var(--fg-muted)",
            fontSize: "0.82rem",
            lineHeight: 1.45,
            margin: "0 0 10px",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </p>

        {/* Micro Tech Stack Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                background: "#f1ede7",
                color: "var(--fg-muted)",
                fontSize: "0.7rem",
                fontWeight: 600,
                padding: "2px 7px",
                borderRadius: 4,
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span style={{ fontSize: "0.68rem", color: "var(--fg-muted)", padding: "2px 4px" }}>
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Card Footer: Interactive Link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            paddingTop: 8,
            marginTop: "auto",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              color: project.color,
              fontWeight: 700,
              fontSize: "0.8rem",
            }}
          >
            Masuk TV <ArrowUpRight size={13} />
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Buka Live Web Langsung"
              style={{
                color: "var(--fg-muted)",
                display: "flex",
                alignItems: "center",
                gap: 3,
                fontSize: "0.72rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
            >
              <span>Live</span>
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cardVortexSpin {
          0% {
            transform: scale(1.4) rotate(0deg);
            opacity: 0.9;
          }
          100% {
            transform: scale(0.08) rotate(360deg);
            opacity: 1;
          }
        }
        @keyframes singularityPulse {
          0% {
            transform: scale(0.2);
            opacity: 0.2;
          }
          50% {
            transform: scale(2.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.05);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
