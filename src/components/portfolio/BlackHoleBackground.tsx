import React, { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const BlackHoleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const isDark = theme === "dark";

    class Particle {
      angle: number;
      radius: number;
      opacity: number;
      distance: number;
      speed: number;
      position: { x: number; y: number };
      x: number;
      y: number;

      constructor(x: number, y: number, distance: number) {
        this.angle = Math.random() * 10 * Math.PI;
        this.radius = Math.random();
        this.opacity = (Math.random() * 5 + 2) / 10;
        this.distance = (0.9 / this.opacity) * distance;
        this.speed = this.distance * 0.000009;
        this.x = x;
        this.y = y;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle),
        };
      }

      draw() {
        let color: string;
        if (isDark) {
          const t = this.opacity;
          if (t < 0.35) color = `rgba(80,120,255,${this.opacity})`;
          else if (t < 0.55) color = `rgba(180,80,255,${this.opacity})`;
          else color = `rgba(255,255,255,${this.opacity})`;
        } else {
          color = `rgba(30, 30, 30, ${this.opacity})`;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.angle += this.speed;
        this.position = {
          x: this.x + this.distance * Math.cos(this.angle),
          y: this.y + this.distance * Math.sin(this.angle),
        };
        this.draw();
      }
    }

    class Emitter {
      position: { x: number; y: number };
      radius: number;
      count: number;
      particles: Particle[];

      constructor(x: number, y: number) {
        this.position = { x, y };
        const isMobile = window.innerWidth < 768;
        this.radius = isMobile ? 80 : 110;
        // Menos partículas no telemóvel para poupar bateria e CPU.
        const base = isMobile ? 350 : 900;
        const scale = Math.min((window.innerWidth * window.innerHeight) / (1280 * 720), 1.4);
        this.count = Math.max(150, Math.floor(base * scale));
        this.particles = [];
        for (let i = 0; i < this.count; i++) {
          this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
        }
      }

      drawCore() {
        const gradient = ctx.createRadialGradient(
          this.position.x,
          this.position.y,
          0,
          this.position.x,
          this.position.y,
          this.radius
        );
        if (isDark) {
          gradient.addColorStop(0, "#0a0a0f");
          gradient.addColorStop(0.3, "#181824");
          gradient.addColorStop(0.6, "#23233a");
          gradient.addColorStop(0.8, "rgba(10,10,15,0.7)");
          gradient.addColorStop(1, "rgba(10,10,15,0)");
        } else {
          gradient.addColorStop(0, "#ffffff");
          gradient.addColorStop(0.3, "#f5f5f5");
          gradient.addColorStop(0.6, "#e0e0e0");
          gradient.addColorStop(0.8, "rgba(255,255,255,0.7)");
          gradient.addColorStop(1, "rgba(255,255,255,0)");
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      }

      drawStatic() {
        for (const p of this.particles) p.draw();
        this.drawCore();
      }

      update() {
        for (const p of this.particles) p.update();
        this.drawCore();
      }
    }

    let emitter = new Emitter(window.innerWidth / 2, window.innerHeight / 2);

    const drawStaticFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.drawStatic();
    };

    const onResize = () => {
      resize();
      emitter = new Emitter(window.innerWidth / 2, window.innerHeight / 2);
      if (reduceMotion) drawStaticFrame();
    };
    window.addEventListener("resize", onResize);

    // Movimento reduzido: um único frame estático, sem animação.
    if (reduceMotion) {
      drawStaticFrame();
      return () => window.removeEventListener("resize", onResize);
    }

    let rafId = 0;
    let running = false;
    const loop = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      rafId = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    // Pausa quando o separador não está visível.
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    if (!document.hidden) start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}
    />
  );
};

export default BlackHoleBackground;
