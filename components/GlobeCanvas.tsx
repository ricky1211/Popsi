"use client";

import { useEffect, useRef } from "react";

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const rotationRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.offsetWidth;
    canvas.width = size * 2;
    canvas.height = size * 2;
    ctx.scale(2, 2);

    const cx = size / 2;
    const cy = size / 2;
    const R = size * 0.42;

    // Dots on a sphere
    const dots: { lat: number; lng: number }[] = [];
    for (let lat = -80; lat <= 80; lat += 12) {
      const cosLat = Math.cos((lat * Math.PI) / 180);
      const count = Math.max(1, Math.round(18 * cosLat));
      for (let i = 0; i < count; i++) {
        dots.push({ lat, lng: (360 / count) * i - 180 });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      const rot = rotationRef.current;

      // Outer glow
      const grad = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.2);
      grad.addColorStop(0, "rgba(232,103,58,0.06)");
      grad.addColorStop(1, "rgba(232,103,58,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Globe base
      const sphereGrad = ctx.createRadialGradient(cx - R * 0.2, cy - R * 0.2, R * 0.1, cx, cy, R);
      sphereGrad.addColorStop(0, "#f8f6f2");
      sphereGrad.addColorStop(0.5, "#f0ece6");
      sphereGrad.addColorStop(1, "#e2ddd8");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Latitude lines
      for (let lat = -60; lat <= 60; lat += 20) {
        const y = cy + R * Math.sin((lat * Math.PI) / 180);
        const rLat = R * Math.cos((lat * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(cx, y, rLat, rLat * 0.15, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(26,26,46,0.08)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Longitude lines
      for (let lng = 0; lng < 180; lng += 20) {
        const angle = ((lng + rot) * Math.PI) / 180;
        ctx.beginPath();
        ctx.ellipse(cx, cy, R * Math.abs(Math.cos(angle)), R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(26,26,46,0.06)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Dots
      for (const dot of dots) {
        const lng = ((dot.lng + rot) * Math.PI) / 180;
        const lat = (dot.lat * Math.PI) / 180;
        const x3 = R * Math.cos(lat) * Math.sin(lng);
        const y3 = -R * Math.sin(lat);
        const z3 = R * Math.cos(lat) * Math.cos(lng);

        if (z3 > 0) {
          const sx = cx + x3;
          const sy = cy + y3;
          const brightness = z3 / R;
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(232,103,58,${0.15 + brightness * 0.6})`;
          ctx.fill();
        }
      }

      // Highlight (specular)
      const hlGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, 0, cx, cy, R);
      hlGrad.addColorStop(0, "rgba(255,255,255,0.4)");
      hlGrad.addColorStop(0.3, "rgba(255,255,255,0.1)");
      hlGrad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = hlGrad;
      ctx.fill();

      // Border
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(26,26,46,0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();

      rotationRef.current += 0.18;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
