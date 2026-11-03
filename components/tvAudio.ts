"use client";

export function playTvSound(type: "on" | "off" | "switch" | "beep" | "suction") {
  if (typeof window === "undefined") return;

  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;

    if (type === "suction") {
      // 1. Vortex vacuum suction whoosh (sweeps down frequency as resonance swells)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(3200, now);
      filter.frequency.exponentialRampToValueAtTime(140, now + 0.4);

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.42);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.14, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.5);

      // 2. High-voltage CRT breakthrough glass pop
      const pop = ctx.createOscillator();
      const popGain = ctx.createGain();
      pop.type = "triangle";
      pop.frequency.setValueAtTime(1200, now + 0.2);
      pop.frequency.exponentialRampToValueAtTime(90, now + 0.42);
      popGain.gain.setValueAtTime(0.001, now);
      popGain.gain.setValueAtTime(0.1, now + 0.2);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      pop.connect(popGain);
      popGain.connect(ctx.destination);
      pop.start(now + 0.2);
      pop.stop(now + 0.45);
    } else if (type === "on") {
      // CRT flyback capacitor pulse (15.6 kHz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(12000, now + 0.18);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);

      // Warm phosphor tube pop
      const pop = ctx.createOscillator();
      const popGain = ctx.createGain();
      pop.type = "sine";
      pop.frequency.setValueAtTime(90, now);
      pop.frequency.exponentialRampToValueAtTime(35, now + 0.15);
      popGain.gain.setValueAtTime(0.08, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      pop.connect(popGain);
      popGain.connect(ctx.destination);
      pop.start(now);
      pop.stop(now + 0.16);
    } else if (type === "off") {
      // CRT TV collapse pitch drop & vacuum extinguish
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(7000, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.3);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
    } else if (type === "switch") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.setValueAtTime(900, now + 0.04);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === "beep") {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1050, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    }
  } catch {
    // Gracefully handle if audio context is blocked by browser policy
  }
}
