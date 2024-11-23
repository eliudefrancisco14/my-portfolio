"use client";

import React, { useEffect, useRef } from "react";

const BlackHoleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;

    if (!canvas) return; 

    if (canvas == null) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const requestAnimFrame = window.requestAnimationFrame || function (callback: FrameRequestCallback) {
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
        this.angle = Math.random() * 2 * Math.PI;
        this.radius = Math.random();
        this.opacity = (Math.random() * 5 + 2) / 10;
        this.distance = (1 / this.opacity) * distance;
        this.speed = this.distance * 0.000002;
        this.x = x;
        this.y = y;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle),
        };
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(100,100,100," + this.opacity + ")";
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

    // Convertendo Emitter para classe
    class Emitter {
      position: { x: number; y: number };
      radius: number;
      count: number;
      particles: Particle[];

      constructor(x: number, y: number) {
        this.position = { x, y };
        this.radius = 120;
        this.count = 2000;
        this.particles = [];

        for (let i = 0; i < this.count; i++) {
          this.particles.push(new Particle(this.position.x, this.position.y, this.radius));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(250,250,250,1)";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
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

    const emitter = new Emitter(canvas.width / 2, canvas.height / 2);

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      requestAnimFrame(loop);
    }

    const animationId = requestAnimFrame(loop);

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle" style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default BlackHoleBackground;
