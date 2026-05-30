"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Moon, Sparkles, Wind } from 'lucide-react';

const blocks = [
    { icon: Leaf, title: 'Nature', desc: 'Growth is silent', span: 'col-span-1 row-span-1 lg:col-span-2 lg:row-span-1', color: 'bg-mint' },
    { icon: Heart, title: 'Gamification', desc: 'Change to score', span: 'col-span-1 row-span-2 lg:col-span-1 lg:row-span-2', color: 'bg-sage' },
    { icon: Sun, title: 'Pets', desc: 'Digital Companions', span: 'col-span-1 row-span-1 lg:col-span-1 lg:row-span-2', color: 'bg-foam' },
    { icon: Wind, title: 'Journaling', desc: 'Write through it', span: 'col-span-2 row-span-1 lg:col-span-2 lg:row-span-1', color: 'bg-teal' },
    { icon: Moon, title: 'Psychology', desc: 'for your mind', span: 'col-span-1 row-span-1 lg:col-span-1 lg:row-span-1', color: 'bg-mint' },
    { icon: Sparkles, title: 'Experience', desc: 'Modern Smooth UI', span: 'col-span-1 row-span-1 lg:col-span-1 lg:row-span-1', color: 'bg-sage' },
];

export default function Philosophy() {
    return (
        <section className="relative px-6 py-24 lg:py-20 lg:bg-transparent" id="philosophy">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none lg:hidden">
                <div className="w-64 h-64 rounded-full bg-mint/20 blur-3xl opacity-30 lg:w-96 lg:h-96 lg:opacity-20" style={{ animation: 'pulse-glow 10s ease-in-out infinite' }} />
            </div>

            <div className="max-w-[480px] lg:max-w-[720px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 mb-8 lg:mb-12 text-center"
                >
                    <span className="font-[var(--font-pixel)] text-[11px] lg:text-[13px] text-sage uppercase tracking-[3px]">✦ Philosophy</span>
                    <h2 className="text-[26px] lg:text-[42px] mt-2 text-teal leading-tight">Rooted on Healing</h2>
                </motion.div>

                <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 auto-rows-[100px] lg:auto-rows-[140px] gap-3 lg:gap-6">
                    {blocks.map((b, i) => {
                        const Icon = b.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`
                    ${b.span} ${b.color} rounded-[32px] p-4
                    flex flex-col justify-between text-white
                    relative overflow-hidden cursor-default
                    group hover:brightness-105 transition-all duration-500 shadow-sm
                  `}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/12 to-transparent opacity-50" />
                                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm self-end">
                                    <Icon size={18} className="text-white/90" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-[16px] lg:text-[20px] font-medium text-white mb-0.5">{b.title}</h3>
                                    <p className="text-[11px] lg:text-[14px] text-white/70 m-0 leading-tight">{b.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
