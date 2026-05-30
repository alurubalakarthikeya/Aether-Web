"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Sprout, Moon } from 'lucide-react';
import { TerminalLog, InsightCard, HabitSprout, NodeBuilder } from './ProductPanels';

export default function AppPreview() {
    return (
        <section className="relative px-6 py-24 lg:p-10 overflow-hidden bg-cloud/30 lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-[40px] lg:shadow-sm h-full flex flex-col justify-between" id="preview">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute -left-20 lg:-left-10 top-10 w-64 h-64 rounded-full bg-mint/15 blur-[100px]" />
                <div className="absolute -right-20 lg:-right-10 bottom-10 w-64 h-64 rounded-full bg-foam/15 blur-[100px]" />
            </div>

            <div className="mx-auto w-full relative z-10 flex flex-col gap-10">

                {/* Left Side text (Desktop Split) */}
                <motion.div
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    className="relative z-10 text-center flex flex-col justify-center"
                >
                    <h2 className="text-[28px] lg:text-[36px] text-teal leading-tight mb-4">A space that<br /> listens to you.</h2>
                    <p className="text-[14px] lg:text-[15px] text-sage/80 max-w-[280px] lg:max-w-xs mx-auto leading-relaxed">
                        Share your thoughts to a world that evolves with you. The Aether AI learns your habits and provides calm, real-time insights.
                    </p>
                </motion.div>

                {/* Immersive Staggered Mockup with Overlays */}
                <div className="relative z-10 w-full h-[666px] lg:h-[600px] flex flex-col items-center justify-center perspective-1000 mt-auto">
                    {/* 1. Main Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-[86%] max-w-[280px] lg:max-w-[340px]"
                    >
                        <div className="rounded-[48px] lg:rounded-[56px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(43,85,72,0.3)] bg-white border-[10px] lg:border-[12px] border-white ring-1 ring-black/5 aspect-[9/20] relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-500" />
                            <Image
                                src="/assets/screenshot-1.png"
                                alt="Aether Mobile App"
                                width={340}
                                height={750}
                                className="w-full h-full object-cover object-top scale-[1.015]"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* 1. Pet Evolution (Top Left of Screen) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ willChange: 'opacity' }}
                        className="absolute left-[-12px] lg:left-[5%] xl:left-[15%] top-[20px] lg:top-[10%] z-30 scale-90 lg:scale-100"
                    >
                        <NodeBuilder />
                    </motion.div>

                    {/* 2. Terminal Log (Middle Right) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        style={{ willChange: 'opacity' }}
                        className="absolute right-[-25px] lg:right-[0%] xl:right-[15%] top-[240px] lg:top-[40%] z-30 scale-90 lg:scale-110"
                    >
                        <TerminalLog />
                    </motion.div>

                    {/* 3. Habit Sprout (Bottom Left of Screen) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        style={{ willChange: 'opacity' }}
                        className="absolute left-[5px] lg:left-[15%] xl:left-[25%] bottom-[60px] lg:bottom-[15%] z-50 scale-105 lg:scale-125"
                    >
                        <HabitSprout />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
