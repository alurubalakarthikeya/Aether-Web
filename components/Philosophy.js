"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Moon, Sparkles, Wind } from 'lucide-react';

const blocks = [
    { icon: Leaf, title: 'Nature', desc: 'Growth is silent', span: 'col-span-1 row-span-1', lgSpan: 'lg:col-span-1 lg:row-span-1', color: 'bg-mint' },
    { icon: Heart, title: 'Gamification', desc: 'Change to score', span: 'col-span-1 row-span-2', lgSpan: 'lg:col-span-1 lg:row-span-2', color: 'bg-sage' },
    { icon: Sun, title: 'Pets', desc: 'Digital Companions', span: 'col-span-1 row-span-1', lgSpan: 'lg:col-span-1 lg:row-span-1', color: 'bg-foam' },
    { icon: Wind, title: 'Journaling', desc: 'Write through it', span: 'col-span-2 row-span-1', lgSpan: 'lg:col-span-2 lg:row-span-1', color: 'bg-teal' },
    { icon: Moon, title: 'Psychology', desc: 'for your mind', span: 'col-span-1 row-span-1', lgSpan: 'lg:col-span-1 lg:row-span-1', color: 'bg-mint' },
    { icon: Sparkles, title: 'Experience', desc: 'Modern Smooth UI', span: 'col-span-1 row-span-1', lgSpan: 'lg:col-span-1 lg:row-span-2', color: 'bg-sage' },
];

export default function Philosophy() {
    return (
        <section className="relative px-6 lg:px-12 py-20 lg:py-32" id="philosophy">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 lg:w-[600px] h-64 lg:h-[600px] rounded-full bg-mint/20 blur-[100px] lg:blur-[140px] opacity-30" style={{ animation: 'pulse-glow 10s ease-in-out infinite' }} />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 lg:w-1/3"
                >
                    <span className="font-[var(--font-pixel)] text-[11px] lg:text-[13px] text-sage uppercase tracking-[3px]">✦ Philosophy</span>
                    <h2 className="text-[26px] lg:text-[40px] mt-2 text-teal leading-tight">Rooted on<br />Healing</h2>
                    <p className="hidden lg:block text-[15px] font-medium text-sage/80 mt-6 leading-relaxed max-w-xs">
                        Every pixel, color, and interaction in Aether is intentionally designed to cultivate calmness, introspection, and personal growth.
                    </p>
                </motion.div>

                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 auto-rows-[100px] lg:auto-rows-[120px] gap-3 lg:gap-4 lg:w-2/3">
                    {blocks.map((b, i) => {
                        const Icon = b.icon;
                        const spanClasses = `${b.span} ${b.lgSpan || b.span.replace(/col-span-\d/g, m => 'lg:' + m).replace(/row-span-\d/g, m => 'lg:' + m)}`;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`
                    ${spanClasses} ${b.color} rounded-[32px] p-5 lg:p-6
                    flex flex-col justify-between text-white
                    relative overflow-hidden cursor-default
                    group hover:brightness-105 hover:-translate-y-1 transition-all duration-300 shadow-sm
                  `}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/12 to-transparent opacity-50" />
                                <div className="relative z-10 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/10 backdrop-blur-sm self-end group-hover:scale-110 transition-transform">
                                    <Icon size={20} className="text-white/90" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-[16px] lg:text-[18px] font-medium text-white mb-1 lg:mb-2">{b.title}</h3>
                                    <p className="text-[11px] lg:text-[13px] text-white/80 m-0 leading-tight font-medium">{b.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
