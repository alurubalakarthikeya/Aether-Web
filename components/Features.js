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
        <section className="relative px-6 py-24 lg:p-10 bg-[#E5F5F0]/30 lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-[40px] lg:shadow-sm h-full flex flex-col" id="features">
            <div className="mx-auto w-full flex-1 flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 relative z-10"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Sparkles size={14} className="text-[#518B7A]" />
                        <span className="font-[var(--font-pixel)] text-[12px] text-sage tracking-[4px] uppercase">Features</span>
                    </div>
                    <h2 className="text-[28px] lg:text-[36px] font-[var(--font-pixel)] text-[#518B7A] tracking-[-1px] leading-[1.1]">
                        Tools for your mind
                    </h2>
                </motion.div>

                {/* Mobile Layout (unchanged) / Desktop Layout (2-col grid) */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 relative z-10 flex-1">
                    {/* 1. Psychological Test */}
                    <FeatureCard tile={tiles[0]} className="w-full aspect-[4/1] lg:aspect-auto lg:h-full lg:col-span-2 lg:row-span-1" />

                    {/* 2. Complex Row Mobile -> Separate columns Desktop */}
                    <div className="grid grid-cols-2 lg:hidden gap-4">
                        <FeatureCard tile={tiles[1]} className="aspect-square h-auto" />
                        <div className="flex flex-col gap-4 h-full">
                            <FeatureCard tile={tiles[2]} className="flex-1" />
                            <FeatureCard tile={tiles[3]} className="flex-1" />
                        </div>
                    </div>

                    {/* Desktop versions of Journal, Mood, Dreams */}
                    <FeatureCard tile={tiles[1]} className="hidden lg:flex lg:col-span-1 lg:row-span-1 lg:aspect-auto lg:h-[320px]" />
                    <div className="hidden lg:flex flex-col gap-6 h-full lg:col-span-1 lg:row-span-1">
                        <FeatureCard tile={tiles[2]} className="flex-1" />
                        <FeatureCard tile={tiles[3]} className="flex-1" />
                    </div>

                    {/* 3. Psych Facts */}
                    <FeatureCard tile={tiles[4]} className="w-full aspect-[4/1] lg:aspect-auto lg:h-[320px] lg:col-span-2 lg:row-span-1" />

                    {/* 4. Bottom row: Growth | Safe Space */}
                    <div className="grid grid-cols-2 lg:hidden gap-4">
                        <FeatureCard tile={tiles[5]} className="aspect-[2/1] h-auto" />
                        <FeatureCard tile={tiles[6]} className="aspect-[2/1] h-auto" />
                    </div>

                    {/* Desktop versions of Growth, Safe Space */}
                    <FeatureCard tile={tiles[5]} className="hidden lg:flex lg:col-span-1 lg:row-span-1 lg:aspect-auto lg:h-[320px]" />
                    <FeatureCard tile={tiles[6]} className="hidden lg:flex lg:col-span-1 lg:row-span-1 lg:aspect-auto lg:h-[320px]" />
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

