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
        <section className="relative px-6 lg:px-12 py-24 lg:py-32" id="download">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-16 lg:gap-24 relative z-20">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 lg:pr-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-px bg-teal/20" />
                            <span className="font-[var(--font-pixel)] text-[10px] lg:text-[12px] text-sage tracking-[3px] uppercase">Start Journey</span>
                        </div>

                        <h2 className="text-[28px] lg:text-[42px] text-teal leading-tight">Enter Your Sanctuary</h2>
                        <p className="hidden lg:block text-[15px] text-sage/80 mt-4 leading-relaxed font-medium">Download the Aether application to get started with your completely private emotional wellness companion.</p>
                    </motion.div>

                    <div className="flex flex-col gap-6 relative z-10 w-full max-w-sm lg:max-w-none mx-auto lg:mx-0">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="glass p-6 rounded-[32px] flex items-center gap-6 border-white/60 hover:bg-white/50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-[10px] lg:text-[12px] text-teal font-[var(--font-pixel)]">{s.num}</span>
                                            <h3 className="text-[16px] lg:text-[18px] font-semibold text-teal">{s.title}</h3>
                                        </div>
                                        <p className="text-[12px] lg:text-[14px] text-sage/80 leading-relaxed mt-1 font-medium">{s.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-mint/10 flex items-center justify-center text-teal flex-shrink-0 shadow-sm border border-mint/20">
                                        <Icon size={24} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: CTA */}
                <div className="w-full lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 lg:mt-0 glass-heavy p-8 lg:p-12 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(43,85,72,0.15)] flex flex-col items-center justify-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />

                        <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-white shadow-xl mb-8 flex items-center justify-center relative z-10 border-4 border-white overflow-hidden">
                            <img src="/assets/logo.png" alt="Aether Logo" className="w-full h-full object-cover scale-[1.02]" />
                        </div>

                        <h3 className="text-[22px] lg:text-[28px] font-semibold text-teal mb-2 font-[var(--font-pixel)] tracking-wide">Aether v1</h3>
                        <p className="text-[14px] text-sage/80 mb-8 max-w-[200px] text-center font-medium">Safe. Anonymous. Gentle. Designed for you.</p>

                        <a
                            href="/assets/aether_v1.apk"
                            download="aether_v1.apk"
                            className="w-full bg-teal text-white h-[66px] rounded-[20px] flex items-center px-6 gap-4 hover:bg-teal/90 hover:shadow-lg transition-all duration-300 no-underline group shadow-md"
                        >
                            <div className="flex flex-col items-start w-full">
                                <span className="font-semibold text-[15px] group-hover:-translate-y-0.5 transition-transform">Download App</span>
                                <span className="text-[10px] text-white/60 font-[var(--font-pixel)] uppercase tracking-[1px] group-hover:-translate-y-0.5 transition-transform">
                                    71 MB • Android
                                </span>
                            </div>
                            <div className="ml-auto w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-105 group-hover:bg-white text-white group-hover:text-teal transition-all">
                                <Download size={20} />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-64 lg:w-[600px] h-64 lg:h-[600px] bg-mint/10 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none" />
        </section>
    );
}
