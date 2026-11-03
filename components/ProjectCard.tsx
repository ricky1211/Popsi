"use client";

import { useState } from "react";
import { ProjectItem } from "./projectsData";
import { ExternalLink, Tv, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenTv: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenTv }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  return (
    <div
      className="card project-interactive-card"
      style={{
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        border: `1px solid ${isHovered ? project.color + "66" : "var(--border)"}`,
        boxShadow: isHovered
          ? `0 16px 42px var(--shadow), 0 0 24px ${project.color}25`
          : "0 4px 20px var(--shadow)",
        transform: isPressing
          ? "scale(0.97)"
          : isHovered
          ? "translateY(-6px)"
          : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onClick={() => {
        setIsPressing(true);
        setTimeout(() => setIsPressing(false), 200);
        onOpenTv(project);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressing(false);
      }}
    >
      {/* CARD IMAGE CONTAINER WITH OVERLAYS */}
      <div
        style={{
          position: "relative",
          height: "190px",
          overflow: "hidden",
          background: "#0f172a",
        }}
      >
        {/* Project Real Photo */}
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isHovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* Gradient shadow overlay for legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.3) 0%, rgba(15,23,42,0.1) 40%, rgba(15,23,42,0.85) 100%)",
          }}
        />

        {/* TOP BADGES: Channel & TV Indicator */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          {/* Channel badge */}
          <div
            style={{
              background: "rgba(15, 23, 42, 0.85)",
              border: `1px solid ${project.color}88`,
              borderRadius: 8,
              padding: "4px 9px",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: "0.75rem",
              fontWeight: 800,
              color: project.color,
              backdropFilter: "blur(8px)",
              fontFamily: "monospace",
            }}
          >
            <span>{project.channel}</span>
            <span style={{ color: "#64748b" }}>·</span>
            <span style={{ color: "#e2e8f0", fontSize: "0.7rem", fontWeight: 600 }}>
              {project.category}
            </span>
          </div>

          {/* Interactive TV Portal Badge */}
          <div
            style={{
              background: isHovered ? project.color : "rgba(15, 23, 42, 0.85)",
              color: isHovered ? "#ffffff" : "#f1f5f9",
              border: `1px solid ${isHovered ? project.color : "rgba(255,255,255,0.18)"}`,
              borderRadius: 100,
              padding: "4px 10px",
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.72rem",
              fontWeight: 700,
              boxShadow: isHovered
                ? `0 0 16px ${project.color}88`
                : "0 2px 8px rgba(0,0,0,0.4)",
              transition: "all 0.25s ease",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: isHovered ? "#ffffff" : "#22c55e",
                display: "inline-block",
                boxShadow: "0 0 6px #22c55e",
              }}
            />
            <Tv size={12} />
            <span>TV Portal</span>
          </div>
        </div>

        {/* BOTTOM BADGE: Metric or Status */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: 12,
            right: 12,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          {project.metrics ? (
            <span
              style={{
                background: "rgba(15, 23, 42, 0.9)",
                color: project.color,
                border: `1px solid ${project.color}55`,
                borderRadius: 6,
                padding: "2px 8px",
                fontSize: "0.72rem",
                fontWeight: 700,
                backdropFilter: "blur(6px)",
              }}
            >
              ⚡ {project.metrics.value}
            </span>
          ) : (
            <span />
          )}

          <span
            style={{
              background: project.status === "Live" ? "#22c55e" : "#3b82f6",
              color: "#ffffff",
              borderRadius: 6,
              padding: "2px 8px",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {project.status}
          </span>
        </div>

        {/* HOVER OVERLAY: "Klik untuk Masuk" */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(10, 15, 30, 0.72)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: "#ffffff",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.25s ease",
            backdropFilter: "blur(3px)",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: project.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 20px ${project.color}99`,
            }}
          >
            <Tv size={22} color="#ffffff" />
          </div>
          <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.02em" }}>
            Nyalakan TV & Masuk Project
          </span>
        </div>
      </div>

      {/* CARD CONTENT BODY */}
      <div
        style={{
          padding: "18px 20px 20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Title */}
        <h3
          style={{
            margin: "0 0 6px",
            fontSize: "1.08rem",
            fontWeight: 700,
            lineHeight: 1.3,
            color: isHovered ? project.color : "var(--fg)",
            transition: "color 0.2s ease",
          }}
        >
          {project.title}
        </h3>

        {/* Short description */}
        <p
          style={{
            color: "var(--fg-muted)",
            fontSize: "0.86rem",
            lineHeight: 1.6,
            margin: "0 0 14px",
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.desc}
        </p>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            marginBottom: 16,
          }}
        >
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag"
              style={{
                fontSize: "0.74rem",
                padding: "3px 10px",
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span
              className="tag"
              style={{ fontSize: "0.72rem", padding: "3px 8px", color: "var(--fg-muted)" }}
            >
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer: Interactive Trigger Link */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid var(--border)",
            paddingTop: 12,
            marginTop: "auto",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: project.color,
              fontWeight: 700,
              fontSize: "0.86rem",
              transition: "gap 0.2s ease",
            }}
          >
            Tonton & Jelajahi <ArrowRight size={14} />
          </span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title="Buka langsung tautan web"
              style={{
                color: "var(--fg-muted)",
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.75rem",
                textDecoration: "none",
                padding: "2px 6px",
                borderRadius: 4,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-muted)")}
            >
              <span>Live Web</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
