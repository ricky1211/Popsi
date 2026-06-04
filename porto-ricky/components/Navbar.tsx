"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(248,246,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 700, fontSize: "1rem"
          }}>R</div>
          <span style={{ fontWeight: 700, color: "var(--fg)", fontSize: "1.05rem" }}>Ricky.dev</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32 }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              textDecoration: "none", color: "var(--fg-muted)",
              fontSize: "0.9rem", fontWeight: 500,
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-muted)")}
            >{l.label}</a>
          ))}
        </div>

        <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)", display: "none" }} className="show-mobile">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "var(--bg-card)", borderBottom: "1px solid var(--border)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
          boxShadow: "0 8px 32px var(--shadow)"
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              textDecoration: "none", color: "var(--fg)", fontWeight: 500, fontSize: "1rem"
            }}>{l.label}</a>
          ))}
          <a href="#contact" className="btn-primary" style={{ textAlign: "center" }} onClick={() => setOpen(false)}>
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
