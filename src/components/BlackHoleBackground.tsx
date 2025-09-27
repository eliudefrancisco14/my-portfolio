"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const BlackHoleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current!;

    if (!canvas) return;

    if (canvas == null) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const requestAnimFrame =
      window.requestAnimationFrame ||
      function (callback: FrameRequestCallback) {
        return window.setTimeout(callback, 1000 / 60);
      };

    // Convertendo Particle para classe
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
        if (!ctx) return;
        const isDark =
          theme === "dark" || (theme === "system" && systemTheme === "dark");
        // Cores inspiradas em discos de acreção de buracos negros (tons de azul, roxo, branco)
        let color;
        if (isDark) {
          // Gradiente de azul para roxo e branco
          const t = this.opacity; // 0.2 ~ 0.7
          if (t < 0.35) {
            color = `rgba(80,120,255,${this.opacity})`; // azul claro
          } else if (t < 0.55) {
            color = `rgba(180,80,255,${this.opacity})`; // roxo
          } else {
            color = `rgba(255,255,255,${this.opacity})`; // branco
          }
        } else {
          // Tons dourados e brancos para tema claro
            color = `rgba(30, 30, 30, ${this.opacity})`;
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius * 1, // Aumenta o tamanho dos círculos
          0,
          Math.PI * 2,
          false
        );
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

    // Convertendo Emitter para classe
    class Emitter {
      position: { x: number; y: number };
      radius: number;
      count: number;
      particles: Particle[];

      constructor(x: number, y: number) {
        this.position = { x, y };
        this.radius = 110;
        // fewer particles for perf; scale with screen size
        const base = 900;
        const scale = Math.min(
          (window.innerWidth * window.innerHeight) / (1280 * 720),
          1.4
        );
        this.count = Math.floor(base * scale);
        this.particles = [];

        for (let i = 0; i < this.count; i++) {
          this.particles.push(
            new Particle(this.position.x, this.position.y, this.radius)
          );
        }
      }

      draw() {
        if (!ctx) return;
        // Criar gradiente radial
        const gradient = ctx.createRadialGradient(
          this.position.x,
          this.position.y,
          0, // Centro do gradiente (x, y, raio interno)
          this.position.x,
          this.position.y,
          this.radius // Raio externo
        );

        // Definir as cores e suas posições conforme tema
        const isDark =
          theme === "dark" || (theme === "system" && systemTheme === "dark");
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

        // Aplicar o gradiente como estilo de preenchimento
        ctx.fillStyle = gradient;
        // ctx.fillStyle = "rgba(255,211,250,25)";
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      }

      update() {
        for (let i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      }
    }

    const emitter = new Emitter(window.innerWidth / 2, window.innerHeight / 2);

    let stopped = false;
    function loop() {
      if (!ctx) return;
      if (stopped) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      requestAnimFrame(loop);
    }

    const animationId = requestAnimFrame(loop);

    const onVisibility = () => {
      stopped = document.hidden;
      if (!stopped) requestAnimFrame(loop);
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", resize);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [theme, systemTheme]);

  return (
    <canvas
      ref={canvasRef}
      id="particle"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default BlackHoleBackground;
