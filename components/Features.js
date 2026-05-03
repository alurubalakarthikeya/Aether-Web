"use client";
import { motion } from 'framer-motion';
import { BookMarked, HeartHandshake, MoonStar, Sprout, Sparkles, Shield } from 'lucide-react';

const tiles = [
    { icon: Sparkles, title: 'Psychological Test', desc: 'Take various psychological tests', span: 'col-span-2 row-span-1', color: 'bg-sage' },
    { icon: BookMarked, title: 'Journal', desc: 'Express freely', span: 'col-span-1 row-span-2', color: 'bg-teal' },
    { icon: HeartHandshake, title: 'Mood', desc: 'Track emotions', span: 'col-span-1 row-span-1', color: 'bg-mint' },
    { icon: MoonStar, title: 'Dreams', desc: 'Capture them', span: 'col-span-1 row-span-1', color: 'bg-foam' },
    { icon: Sparkles, title: 'Psychology Facts', desc: 'Reels on psychology & wellness', span: 'col-span-2 row-span-1', color: 'bg-teal' },
    { icon: Sprout, title: 'Growth', desc: 'Build habits', span: 'col-span-1 row-span-1', color: 'bg-mint' },
    { icon: Shield, title: 'Safe Space', desc: 'Anonymous support', span: 'col-span-1 row-span-1', color: 'bg-sage' },
];

export default function Features() {
    return (
        <section className="relative px-6 py-20" id="features">
            <div className="absolute -right-16 top-8 w-44 h-44 rounded-full bg-foam/30 blur-3xl opacity-30" style={{ animation: 'pulse-glow 9s ease-in-out infinite' }} />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="mb-8"
            >
                <span className="font-[var(--font-pixel)] text-[11px] text-sage uppercase tracking-[3px]">✦ Features</span>
                <h2 className="text-[24px] mt-1.5 text-teal">Tools for your mind</h2>
            </motion.div>

            <div className="grid grid-cols-2 auto-rows-[82px] gap-3">
                {tiles.map((t, i) => {
                    const Icon = t.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={`
                ${t.span} ${t.color} rounded-[28px] p-5
                flex flex-col justify-between text-white
                relative overflow-hidden cursor-default
                hover:brightness-110 transition-all duration-300 shadow-sm
              `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/12 to-transparent rounded-2xl pointer-events-none" />
                            <Icon size={20} className="relative z-10 opacity-80" />
                            <div className="relative z-10">
                                <h3 className="text-[15px] font-normal text-white mb-0.5">{t.title}</h3>
                                <p className="text-[11px] text-white/70 m-0 leading-tight">{t.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
