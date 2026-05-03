"use client";
import { motion } from 'framer-motion';

export default function AppPreview() {
    return (
        <section className="relative px-6 py-20 overflow-hidden" id="preview">
            <div className="absolute -left-20 top-10 w-56 h-56 rounded-full bg-mint/25 blur-3xl opacity-30" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <span className="font-[var(--font-pixel)] text-[11px] text-sage uppercase tracking-[3px]">✦ Preview</span>
                <h2 className="text-[24px] mt-1.5 text-teal mx-auto max-w-[240px]">See Aether in action</h2>
            </motion.div>

            {/* Staggered phones - Deep zoom to eliminate gaps */}
            <div className="relative w-full h-[500px] mt-2">
                {/* Back phone - tilted left */}
                <motion.div
                    initial={{ opacity: 0, x: -30, y: 50, rotate: -8 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute left-0 top-0 w-[58%] z-10"
                >
                    <div className="rounded-[44px] overflow-hidden shadow-2xl bg-[#E8F4F0] border-[10px] border-white ring-1 ring-black/5 aspect-[9/19.5]">
                        <img
                            src="/assets/screenshot-2.png"
                            alt="Dashboard"
                            className="w-full h-full object-cover scale-99 object-top"
                        />
                    </div>
                </motion.div>

                {/* Front phone - tilted right, overlapping */}
                <motion.div
                    initial={{ opacity: 0, x: 30, y: 70, rotate: 6 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute right-0 top-14 w-[62%] z-20"
                >
                    <div className="rounded-[44px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(43,85,72,0.35)] bg-[#E8F4F0] border-[10px] border-white ring-1 ring-black/5 aspect-[9/19.5]">
                        <img
                            src="/assets/screenshot-1.png"
                            alt="Journal"
                            className="w-full h-full object-cover scale-101 object-top"
                        />
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-center mt-12">
                <div className="flex gap-1.5">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className={`w-2.5 h-1 rounded-full ${i === 0 ? 'bg-teal w-6' : 'bg-teal/20'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}
