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

        const cellSize = 16; // Larger pixels = less "chopped" look
        let cols, rows;
        let grid = [];

        const colors = [
            'rgba(212, 234, 227, 0.4)', // Mist
            'rgba(184, 216, 207, 0.3)', // Foam
            'rgba(143, 188, 176, 0.25)', // Mint
            'rgba(90, 148, 132, 0.2)'    // Sage
        ];

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = Math.max(window.innerHeight, document.body.scrollHeight);
            cols = Math.ceil(canvas.width / cellSize);
            rows = Math.ceil(canvas.height / cellSize);

            grid = [];
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    grid.push({
                        x, y,
                        offset: Math.random() * Math.PI * 2,
                        speed: 0.005 + Math.random() * 0.015,
                        baseAlpha: 0.1 + Math.random() * 0.2,
                        colorIndex: Math.floor(Math.random() * colors.length)
                    });
                }
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

            // Particles layer
            const particleCount = 20;
            if (!grid.particles) {
                grid.particles = [];
                for (let i = 0; i < particleCount; i++) {
                    grid.particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        r: 1 + Math.random() * 2,
                        vx: (Math.random() - 0.5) * 0.2,
                        vy: (Math.random() - 0.5) * 0.2,
                        alpha: 0.1 + Math.random() * 0.3
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

            for (let i = 0; i < grid.length; i++) {
                const p = grid[i];

                // Smooth sine wave for alpha/intensity
                const intensity = Math.sin(time * p.speed + p.offset) * 0.5 + 0.5;
                const alpha = p.baseAlpha + (intensity * 0.4);

                // Use a soft teal/mint palette
                const r = 143, g = 188, b = 176; // Mint base
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.2})`;

                // Use fillRect with very subtle overlap or exactly on grid
                ctx.fillRect(p.x * cellSize, p.y * cellSize, cellSize, cellSize);
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
