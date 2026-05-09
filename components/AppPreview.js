"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Heart, Sprout, Moon } from 'lucide-react';
import { TerminalLog, InsightCard, HabitSprout, NodeBuilder } from './ProductPanels';

export default function AppPreview() {
    return (
        <section className="relative px-6 py-24 overflow-hidden bg-cloud/30" id="preview">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute -left-20 top-10 w-64 h-64 rounded-full bg-mint/15 blur-[100px]" />
                <div className="absolute -right-20 bottom-10 w-64 h-64 rounded-full bg-foam/15 blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-16"
            >
                <h2 className="text-[28px] text-teal leading-tight mb-4">A space that<br />listens to you.</h2>
                <p className="text-[14px] text-sage/80 max-w-[280px] mx-auto leading-relaxed">
                    Share your thoughts to a world that evolves with you.
                </p>
            </motion.div>

            {/* Immersive Staggered Mockup with Overlays */}
            <div className="relative z-10 w-full h-[666px] flex flex-col items-center">
                {/* 1. Main Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative z-20 w-[86%] max-w-[280px]"
                >
                    <div className="rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(43,85,72,0.3)] bg-white border-[10px] border-white ring-1 ring-black/5 aspect-[9/20] relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-10" />
                        <Image
                            src="/assets/screenshot-1.png"
                            alt="Aether Mobile App"
                            width={280}
                            height={600}
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
                    className="absolute left-[-12px] top-[20px] z-30 scale-90"
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
                    className="absolute right-[-25px] top-[240px] z-30 scale-90"
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
                    className="absolute left-[5px] bottom-[60px] z-50 scale-105"
                >
                    <HabitSprout />
                </motion.div>
            </div>
        </section>
    );
}
