"use client";
import React, { useEffect, useRef } from 'react';

/**
 * PixelBackground - Implements a smooth, organic shimmering pixel grid.
 * Avoids the "chopped/smashed" look by using larger cells and 
 * fluid sine-wave alpha oscillations.
 */
export default function PixelBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;
        let time = 0;

        const isMobile = window.innerWidth < 768;
        const cellSize = isMobile ? 32 : 16;
        let cols, rows;
        let grid = [];

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cols = Math.ceil(canvas.width / cellSize);
            rows = Math.ceil(canvas.height / cellSize);

            grid = [];
            // Optimization: Only create a subset of active shimmer points
            const totalCells = cols * rows;
            const activeRatio = isMobile ? 0.2 : 0.4;

            for (let i = 0; i < totalCells * activeRatio; i++) {
                grid.push({
                    x: Math.random() * cols,
                    y: Math.random() * rows,
                    offset: Math.random() * Math.PI * 2,
                    speed: 0.005 + Math.random() * 0.01,
                    baseAlpha: 0.05 + Math.random() * 0.1,
                });
            }
        }

        function draw() {
            time += 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Gradient background for a "depth" feel
            const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
            bgGrad.addColorStop(0, '#F5FAF8'); // Snow
            bgGrad.addColorStop(1, '#D4EAE3'); // Mist
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Particles layer - Skip on mobile for 60fps
            if (!isMobile) {
                const particleCount = 15;
                if (!grid.particles) {
                    grid.particles = [];
                    for (let i = 0; i < particleCount; i++) {
                        grid.particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            r: 1 + Math.random() * 1.5,
                            vx: (Math.random() - 0.5) * 0.1,
                            vy: (Math.random() - 0.5) * 0.1,
                            alpha: 0.05 + Math.random() * 0.15
                        });
                    }
                }

                grid.particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(143, 188, 176, ${p.alpha})`;
                    ctx.fill();
                });
            }

            for (let i = 0; i < grid.length; i++) {
                const p = grid[i];
                const intensity = Math.sin(time * p.speed + p.offset) * 0.5 + 0.5;
                const alpha = p.baseAlpha + (intensity * 0.2);
                ctx.fillStyle = `rgba(143, 188, 176, ${alpha * 0.15})`;
                ctx.fillRect(Math.floor(p.x) * cellSize, Math.floor(p.y) * cellSize, cellSize - 1, cellSize - 1);
            }

            animationId = requestAnimationFrame(draw);
        }

        init();
        draw();

        const handleResize = () => {
            init();
        };

        window.addEventListener('resize', handleResize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
        />
    );
}
