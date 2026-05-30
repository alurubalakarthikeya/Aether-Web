"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, HeartOff, BellOff } from 'lucide-react';

export default function SafetyTrust() {
    return (
        <section className="relative px-6 py-24 lg:py-20 lg:bg-transparent" id="safety">
            <div className="max-w-[480px] lg:max-w-[600px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[28px] lg:text-[34px] text-teal leading-tight">Designed for Comfort.</h2>
                    <div className="w-12 h-0.5 bg-mint/30 mx-auto mt-4 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 gap-12 max-w-[400px] mx-auto">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center text-teal flex-shrink-0">
                            <BellOff size={24} />
                        </div>
                        <div>
                            <h3 className="text-[17px] font-semibold text-teal mb-2">No Harsh Productivity</h3>
                            <p className="text-[13px] text-sage/80 leading-relaxed">No streaks to maintain. No daily pressure. Aether waits for you whenever you&apos;re ready.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-foam/30 flex items-center justify-center text-teal flex-shrink-0">
                            <HeartOff size={24} />
                        </div>
                        <div>
                            <h3 className="text-[17px] font-semibold text-teal mb-2">Safe Social Spaces</h3>
                            <p className="text-[13px] text-sage/80 leading-relaxed">Anonymous support walls with local-first moderation to ensure a gentle environment.</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-teal/5 flex items-center justify-center text-teal flex-shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-[17px] font-semibold text-teal mb-2">Privacy First</h3>
                            <p className="text-[13px] text-sage/80 leading-relaxed">Your emotional data never leaves your device. Local AI means local privacy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-[30%] left-[-10%] w-64 h-64 rounded-full bg-foam/10 blur-[100px] pointer-events-none" />
        </section>
    );
}
