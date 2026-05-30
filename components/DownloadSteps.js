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
        <section className="relative px-6 lg:px-12 py-24 lg:py-20 lg:bg-transparent" id="download">
            <div className="max-w-[480px] lg:max-w-[600px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-px bg-teal/20" />
                        <span className="font-[var(--font-pixel)] text-[10px] lg:text-[12px] text-sage tracking-[3px] uppercase">Start Journey</span>
                    </div>

                    <h2 className="text-[28px] lg:text-[34px] text-teal leading-tight">Enter Your Sanctuary</h2>
                </motion.div>

                <div className="flex flex-col gap-6 w-full max-w-[420px] mx-auto">
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
                    className="mt-16 max-w-[420px] mx-auto lg:hidden"
                >
                    <a
                        href="/assets/aether_v2.apk"
                        download="aether_v2.apk"
                        className="w-full glass h-[66px] rounded-2xl flex items-center px-5 gap-4 hover:bg-white/40 transition-all duration-300 no-underline group"
                    >
                        <img src="/assets/logo.png" alt="Aether Logo" className="w-11 h-11 rounded-xl border border-teal/10 p-0.5 bg-white/40 group-hover:scale-105 transition-transform duration-300" />
                        <div className="flex flex-col items-start">
                            <span className="text-teal font-semibold text-[14px]">Aether</span>
                            <span className="text-[10px] text-sage/60 font-[var(--font-pixel)] uppercase tracking-[1px]">
                                v2.0.0 • 71 MB • Android
                            </span>
                        </div>
                        <div className="ml-auto w-8 h-8 rounded-full bg-teal/5 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                            <Download size={16} />
                        </div>
                    </a>
                </motion.div>
            </div>

            <div className="absolute top-[20%] right-[-10%] w-64 h-64 bg-mint/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
