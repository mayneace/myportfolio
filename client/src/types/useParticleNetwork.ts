import { useEffect, useRef } from "react";

export interface ParticleNetworkOptions {
  /** Number of particles per 1,000,000px² of canvas area */
  density?: number;
  /** Base particle color (any valid CSS color) */
  color?: string;
  /** Line color connecting nearby particles */
  lineColor?: string;
  /** Max distance (px) at which two particles are linked by a line */
  linkDistance?: number;
  /** Particle drift speed */
  speed?: number;
  /** Particle radius in px */
  radius?: number;
  /** Radius (px) around the cursor that repels/attracts particles */
  interactionRadius?: number;
  /** "repulse" pushes particles away from the cursor, "attract" pulls them in */
  interactionMode?: "repulse" | "attract" | "none";
  /** Draw lines from the cursor to nearby particles on hover, like particles.js "grab" mode */
  grabOnHover?: boolean;
  /** Max distance (px) at which a particle links to the cursor in grab mode */
  grabDistance?: number;
  /** Spawn new particles where the user clicks */
  spawnOnClick?: boolean;
  /** How many particles a single click adds */
  clickSpawnCount?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  /** Extra particles spawned by a click fade out and get removed */
  life?: number;
}

const DEFAULTS: Required<ParticleNetworkOptions> = {
  density: 90,
  color: "rgba(255,255,255,0.8)",
  lineColor: "255,255,255",
  linkDistance: 140,
  speed: 0.4,
  radius: 1.6,
  interactionRadius: 140,
  interactionMode: "repulse",
  grabOnHover: true,
  grabDistance: 160,
  spawnOnClick: true,
  clickSpawnCount: 5,
};

/**
 * Draws an animated, mouse-reactive particle network onto a <canvas>.
 * Attach the returned ref to a <canvas> element sized by its parent.
 */
export function useParticleNetwork(options: ParticleNetworkOptions = {}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const opts = { ...DEFAULTS, ...options };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    let animationId = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedParticles();
    };

    const seedParticles = () => {
      const area = width * height;
      const count = Math.max(12, Math.round((area / 1_000_000) * opts.density));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * opts.speed,
        vy: (Math.random() - 0.5) * opts.speed,
      }));
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onPointerLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onClick = (e: PointerEvent) => {
      if (!opts.spawnOnClick) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (let i = 0; i < opts.clickSpawnCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 2 + 0.5;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * spread,
          vy: Math.sin(angle) * spread,
          life: 1,
        });
      }
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Click-spawned particles fade out instead of bouncing forever
        if (p.life !== undefined) {
          p.life -= 0.012;
          p.vx *= 0.98;
          p.vy *= 0.98;
        } else {
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
          p.x = Math.min(Math.max(p.x, 0), width);
          p.y = Math.min(Math.max(p.y, 0), height);
        }

        if (mouse.active && opts.interactionMode !== "none") {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < opts.interactionRadius && dist > 0.01) {
            const force =
              (opts.interactionRadius - dist) / opts.interactionRadius;
            const dirX = dx / dist;
            const dirY = dy / dist;
            const sign = opts.interactionMode === "repulse" ? 1 : -1;
            p.x += dirX * force * 2 * sign;
            p.y += dirY * force * 2 * sign;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, opts.radius, 0, Math.PI * 2);
        ctx.globalAlpha = p.life !== undefined ? Math.max(p.life, 0) : 1;
        ctx.fillStyle = opts.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Remove fully faded click particles
      particles = particles.filter((p) => p.life === undefined || p.life > 0);

      // Cursor "grab" web: connect the pointer to nearby particles on hover
      if (mouse.active && opts.grabOnHover) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < opts.grabDistance) {
            const alpha = 1 - dist / opts.grabDistance;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(${opts.lineColor},${alpha * 0.8})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < opts.linkDistance) {
            const alpha = 1 - dist / opts.linkDistance;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${opts.lineColor},${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    animationId = requestAnimationFrame(step);

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("pointerdown", onClick);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointerdown", onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    opts.density,
    opts.color,
    opts.lineColor,
    opts.linkDistance,
    opts.speed,
    opts.radius,
    opts.interactionRadius,
    opts.interactionMode,
    opts.grabOnHover,
    opts.grabDistance,
    opts.spawnOnClick,
    opts.clickSpawnCount,
  ]);

  return canvasRef;
}
