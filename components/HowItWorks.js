"use client";
import { motion } from 'framer-motion';
import { MousePointer2, Cpu, Zap } from 'lucide-react';

const pipeline = [
    {
        icon: MousePointer2,
        title: "Sense",
        desc: "Capturing subtle behavioral & biometric cues.",
        color: "text-mint",
        bg: "bg-mint/10"
    },
    {
        icon: Cpu,
        title: "Process",
        desc: "Neural engine computes emotional delta maps.",
        color: "text-teal",
        bg: "bg-teal/10"
    },
    {
        icon: Zap,
        title: "Act",
        desc: "Executing local workflows and adaptive responses.",
        color: "text-sage",
        bg: "bg-sage/10"
    }
];

export default function HowItWorks() {
    return (
        <section className="relative px-6 py-24 overflow-hidden" id="how-it-works">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 relative z-10"
            >
                <span className="font-[var(--font-pixel)] text-[10px] text-sage tracking-[4px] uppercase mb-2 block">System Logic</span>
                <h2 className="text-[32px] text-teal leading-tight">The Aether Pipeline</h2>
            </motion.div>

            <div className="relative flex flex-col gap-16 items-center z-10">
                {pipeline.map((step, i) => (
                    <div key={i} className="flex flex-col items-center relative w-full group">
                        {/* Connecting Line */}
                        {i < pipeline.length - 1 && (
                            <div className="absolute top-[60px] w-[1px] h-[64px] bg-gradient-to-b from-teal/20 to-transparent" />
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="flex flex-col items-center gap-4 text-center max-w-[200px]"
                        >
                            <div className={`${step.bg} w-16 h-16 rounded-3xl flex items-center justify-center ${step.color} shadow-xl shadow-teal/5 relative group-hover:scale-110 transition-transform`}>
                                <step.icon size={28} />
                                {/* Subtle scan animation on icons */}
                                <div className="absolute inset-0 border border-teal/10 rounded-3xl animate-pulse" />
                            </div>
                            <div>
                                <h3 className={`text-[18px] font-semibold ${step.color}`}>{step.title}</h3>
                                <p className="text-[13px] text-sage mt-2 leading-relaxed">{step.desc}</p>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-[-20%] w-64 h-64 rounded-full bg-mint/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-[-20%] w-64 h-64 rounded-full bg-foam/10 blur-[120px] pointer-events-none" />
        </section>
    );
}
