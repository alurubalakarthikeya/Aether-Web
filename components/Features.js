"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { BookMarked, Heart, MoonStar, Sprout, Sparkles, Brain, FileText } from 'lucide-react';

const tiles = [
    { title: 'Psychological Test', desc: 'Take various psychological tests', color: 'bg-[#518B7A]', delay: 0.1, icon: Brain },
    { title: 'Journal', desc: 'Express freely', color: 'bg-[#417B6A]', delay: 0.2, icon: BookMarked },
    { title: 'Mood', desc: 'Track emotions', color: 'bg-[#B5D5CF]', delay: 0.3, icon: Heart, light: true },
    { title: 'Dreams', desc: 'Capture them', color: 'bg-[#E5F5F0]', delay: 0.4, icon: MoonStar, light: true },
    { title: 'Psychology Facts', desc: 'Reels on psychology & wellness', color: 'bg-[#417B6A]', delay: 0.5, icon: FileText },
    { title: 'Growth', desc: 'Build habits', color: 'bg-[#B5D5CF]', delay: 0.6, icon: Sprout, light: true },
    { title: 'Safe Space', desc: 'Anonymous support', color: 'bg-[#518B7A]', delay: 0.7, icon: Sparkles },
];

export default function Features() {
    return (
        <section className="relative px-6 lg:px-12 py-24 lg:py-20 lg:bg-transparent overflow-hidden" id="features">
            <div className="max-w-[480px] lg:max-w-[640px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Sparkles size={14} className="text-[#518B7A]" />
                        <span className="font-[var(--font-pixel)] text-[12px] text-sage tracking-[4px] uppercase">Features</span>
                    </div>
                    <h2 className="text-[28px] lg:text-[34px] font-[var(--font-pixel)] text-[#518B7A] tracking-[-1px] leading-[1.1]">
                        Tools for your mind
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {/* Simple Stack for Grid Compatibility */}
                    <FeatureCard tile={tiles[0]} className="w-full aspect-[4/1] lg:aspect-[2/1] h-auto" />
                    <div className="grid grid-cols-2 gap-4">
                        <FeatureCard tile={tiles[1]} className="aspect-square" />
                        <FeatureCard tile={tiles[2]} className="aspect-square" />
                    </div>
                    <FeatureCard tile={tiles[4]} className="w-full aspect-[4/1] lg:aspect-[2/1] h-auto" />
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ tile, className = "" }) {
    const Icon = tile.icon;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: tile.delay }}
            className={`
                ${tile.color} p-6
                flex flex-col justify-center items-start text-left
                relative overflow-hidden
                shadow-[0_10px_30px_rgba(43,85,72,0.08)] rounded-[32px]
                ${tile.light ? 'text-[#417B6A]' : 'text-white'}
                ${tile.title === 'Dreams' ? 'border border-white/40' : ''}
                hover:scale-[0.98] transition-all duration-500 cursor-default
                ${className}
            `}
        >
            <div className="relative z-10">
                <h3 className="text-[16px] font-[var(--font-pixel)] mb-0.5 leading-tight">{tile.title}</h3>
                <p className="text-[11px] opacity-80 leading-snug">{tile.desc}</p>
            </div>

            {/* Subtle Texture */}
            <div className="absolute top-2 right-6 opacity-10 pointer-events-none text-[8px] font-mono">
                {tile.light ? '0' : '#'}
            </div>
        </motion.div>
    );
}

