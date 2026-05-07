"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Heart } from 'lucide-react';

const steps = [
    { icon: Download, num: '01', title: 'Claim Your Companion', desc: 'Securely download the latest Aether APK.' },
    { icon: Heart, num: '02', title: 'Enter the Safe Space', desc: 'Allow installation and grant emotional access.' },
    { icon: Sparkles, num: '03', title: 'Begin Growing', desc: 'Start your journey with a friend that understands.' },
];

export default function DownloadPath() {
    return (
        <section className="relative px-6 py-24" id="download">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-px bg-teal/20" />
                    <span className="font-[var(--font-pixel)] text-[10px] text-sage tracking-[3px] uppercase">Start Journey</span>
                </div>

                <h2 className="text-[28px] text-teal leading-tight">Enter Your Sanctuary</h2>
            </motion.div>

            <div className="flex flex-col gap-6 relative z-10">
                {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="glass p-6 rounded-[32px] flex items-center gap-6 border-white/60"
                        >
                            <div className="flex-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[10px] text-teal font-[var(--font-pixel)]">{s.num}</span>
                                    <h3 className="text-[16px] font-semibold text-teal">{s.title}</h3>
                                </div>
                                <p className="text-[12px] text-sage/80 leading-relaxed mt-1">{s.desc}</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center text-teal flex-shrink-0">
                                <Icon size={24} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <a href="/assets/aether_v1.apk" download="aether_v1.apk" className="btn-aether btn-glow bg-teal text-white rounded-2xl h-14 text-[16px] flex items-center justify-center gap-2 no-underline w-full group overflow-hidden">
                    <span>Download Aether</span>
                </a>
                <p className="mt-4 text-[11px] text-sage/40 uppercase tracking-widest font-[var(--font-pixel)]">Version 1.0.0 · For Android v1.0 · 71 MB</p>
            </motion.div>

            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-64 h-64 bg-mint/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
