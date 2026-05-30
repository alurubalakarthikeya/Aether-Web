"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { NodeBuilder } from './ProductPanels';

export default function Hero() {
    const [atoms, setAtoms] = useState([]);

    useEffect(() => {
        const newAtoms = [...Array(5)].map((_, i) => ({
            id: i,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5
        }));
        setAtoms(newAtoms);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex flex-col overflow-hidden px-6 pt-24 hero-compact-section gap-12 max-w-[1440px] mx-auto w-full" id="hero">
            {/* Ambient glow blobs */}
            <div className="absolute top-[10%] -left-16 lg:left-[10%] w-64 lg:w-96 h-64 lg:h-96 rounded-full bg-mint/30 lg:bg-mint/20 blur-[100px] lg:blur-[140px] opacity-40 will-change-[transform,opacity]" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />
            <div className="absolute top-[40%] -right-12 lg:right-[10%] w-56 lg:w-80 h-56 lg:h-80 rounded-full bg-foam/40 blur-[100px] opacity-50 will-change-[transform,opacity]" style={{ animation: 'pulse-glow 10s ease-in-out infinite 2s' }} />

            {/* Background atoms */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {atoms.map((atom) => (
                    <motion.div
                        key={atom.id}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: atom.duration,
                            repeat: Infinity,
                            delay: atom.delay
                        }}
                        className="absolute w-1 h-1 bg-teal/20 rounded-full"
                        style={{
                            left: atom.left,
                            top: atom.top
                        }}
                    />
                ))}
            </div>

            {/* Brand + Tagline */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="self-start mt-4 max-w-[90%] lg:max-w-2xl lg:mx-auto lg:text-center relative z-20"
            >
                <div className="flex items-center lg:justify-center gap-2 mb-1 lg:mb-2">
                    <span className="font-[var(--font-pixel)] text-[11px] lg:text-[13px] text-sage tracking-[4px] uppercase">Your Emotional Companion</span>
                </div>
                <h1 className="text-[36px] lg:text-[48px] leading-tight tracking-[6px] mb-2 text-teal font-[var(--font-pixel)]">AETHER</h1>
                <p className="text-[17px] lg:text-[20px] text-sage leading-relaxed font-medium">
                    Meet the AI <span className="text-teal underline decoration-mint underline-offset-4 font-semibold">designed</span> to understand you.
                </p>
            </motion.div>

            {/* ── Island scene ── */}
            <div className="flex-1 flex items-center justify-center relative my-4 perspective-1000 lg:my-0 lg:-mt-4">
                {/* Secondary floating island - Left Middle */}
                <motion.div
                    initial={{ opacity: 0, x: -60, y: 20 }}
                    animate={{ opacity: 0.4, x: -80, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="absolute left-[-40px] lg:left-[20%] top-[40%] w-[40%] lg:w-[25%] lg:max-w-[150px] blur-[2px] z-0"
                    style={{ animation: 'float-slow 10s ease-in-out infinite' }}
                >
                    <Image
                        src="/assets/floating-island.png"
                        alt=""
                        width={200}
                        height={200}
                        className="w-full h-auto"
                    />
                </motion.div>

                {/* Main floating island - Pushed down 30px */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 30 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative z-10 w-[95%] max-w-[340px] lg:max-w-[450px] lg:-translate-y-4 drop-shadow-[0_45px_70px_rgba(43,85,72,0.25)]"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                    <Image
                        src="/assets/floating-island.png"
                        alt="Floating Island"
                        width={400}
                        height={400}
                        priority
                        className="w-full h-auto"
                    />
                </motion.div>


                {/* Visual Connection line to next section */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '80px' }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="absolute bottom-[-60px] lg:bottom-[-40px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-teal/20 via-teal/10 to-transparent z-0"
                />

                {/* Background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="absolute -right-12 lg:right-[20%] top-[10%] w-[45%] lg:w-[25%] lg:max-w-[150px] blur-[4px]"
                    style={{ animation: 'float-slow 12s ease-in-out infinite' }}
                >
                    <Image
                        src="/assets/floating-thing.png"
                        alt=""
                        width={250}
                        height={250}
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>

            {/* CTA card ── */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="glass-heavy rounded-[40px] lg:rounded-3xl p-6 pb-12 lg:pb-6 flex flex-col gap-4 relative z-30 mt-auto -mx-6 lg:mx-auto mb-4 lg:mb-8 shadow-[0_-20px_60px_rgba(43,85,72,0.15)] lg:w-full lg:max-w-md w-auto"
            >
                <div className="flex flex-col sm:flex-row lg:flex-row gap-3">
                    <a href="#preview" className="flex-1 btn-aether bg-white/60 text-sage rounded-2xl h-14 text-[14px] border border-white/80 hover:bg-white/90 no-underline w-full flex items-center justify-center gap-2 shadow-[inset_0_2px_10px_rgba(61,122,108,0.12)]">
                        Explore
                    </a>
                    <a href="/assets/aether_v1.apk" download="aether_v1.apk" className="flex-1 btn-aether btn-glow bg-teal text-white rounded-2xl h-14 text-[15px] hover:brightness-110 active:scale-95 transition-all no-underline w-full xl:w-auto group overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Download
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </a>
                </div>

                <div className="flex items-center justify-center gap-4 mt-2 lg:mt-0">
                    <div className="flex -space-x-3 translate-x-1">
                        {['Felix', 'Aneka', 'James'].map((seed, i) => (
                            <div
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white/80 bg-mint/10 backdrop-blur-md overflow-hidden shadow-sm relative"
                                style={{ zIndex: 10 - i }}
                            >
                                <img
                                    src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${seed}&backgroundColor=eaf7f2&baseColor=f3fbf8&hairColor=7bb8a5&eyesColor=8bc3b0&eyebrowsColor=8bc3b0&mouthColor=5f9f8d&accessoriesColor=bfe7da&skinColor=faf4ee&clothingColor=8bc3b0&eyes=variant01,variant02&mouth=happy01,happy02`}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-start translate-x-1">
                        <span className="text-[12px] text-teal leading-none">Join Now!</span>
                        <span className="text-[7.5px] text-sage/60 uppercase font-[var(--font-pixel)] tracking-widest mt-1">30+ Active Testers</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
