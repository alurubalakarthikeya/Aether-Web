"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, HeartOff, BellOff } from 'lucide-react';

export default function SafetyTrust() {
    return (
        <section className="relative px-6 py-24 lg:p-10 bg-white/20 lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-[40px] lg:shadow-sm h-full flex flex-col justify-center overflow-hidden" id="safety">
            <div className="mx-auto w-full relative z-10 flex flex-col h-full">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 lg:mb-12"
                >
                    <h2 className="text-[28px] lg:text-[36px] text-teal leading-tight">Designed for Comfort.</h2>
                    <div className="w-12 lg:w-20 h-0.5 lg:h-1 bg-mint/40 mx-auto mt-4 lg:mt-6 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 gap-10 lg:gap-8 flex-1 content-center px-2">
                    <div className="flex gap-4 lg:gap-6 items-start lg:items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl bg-mint/10 border border-mint/20 flex items-center justify-center text-teal flex-shrink-0 shadow-sm">
                            <BellOff size={28} className="lg:w-6 lg:h-6" />
                        </div>
                        <div>
                            <h3 className="text-[17px] lg:text-[18px] font-semibold text-teal mb-2 lg:mb-1">No Harsh Productivity</h3>
                            <p className="text-[13px] lg:text-[14px] text-sage/80 leading-relaxed font-medium">No streaks to maintain. No daily pressure. Aether waits for you whenever you&apos;re ready.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 lg:gap-6 items-start lg:items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl bg-foam/30 border border-foam/20 flex items-center justify-center text-teal flex-shrink-0 shadow-sm">
                            <HeartOff size={28} className="lg:w-6 lg:h-6" />
                        </div>
                        <div>
                            <h3 className="text-[17px] lg:text-[18px] font-semibold text-teal mb-2 lg:mb-1">Safe Social Spaces</h3>
                            <p className="text-[13px] lg:text-[14px] text-sage/80 leading-relaxed font-medium">Anonymous support walls with local-first moderation to ensure a gentle environment.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 lg:gap-6 items-start lg:items-center">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl lg:rounded-3xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal flex-shrink-0 shadow-sm">
                            <ShieldCheck size={28} className="lg:w-6 lg:h-6" />
                        </div>
                        <div>
                            <h3 className="text-[17px] lg:text-[18px] font-semibold text-teal mb-2 lg:mb-1">Privacy First</h3>
                            <p className="text-[13px] lg:text-[14px] text-sage/80 leading-relaxed font-medium">Your emotional data never leaves your device. Local AI means local privacy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-[30%] -left-[10%] w-64 lg:w-[400px] h-64 lg:h-[400px] rounded-full bg-foam/10 lg:bg-foam/20 blur-[100px] pointer-events-none" />
        </section>
    );
}
