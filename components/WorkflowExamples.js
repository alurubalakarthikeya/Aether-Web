"use client";
import { motion } from 'framer-motion';
import { NodeBuilder, TerminalLog } from './ProductPanels';
import { Sparkles, ArrowRight } from 'lucide-react';

const cases = [
    {
        title: "Adaptive Focus Bridge",
        desc: "Redirects notification streams when pre-cognitive stress markers rise above 40%.",
        type: "Efficiency Flow"
    },
    {
        title: "Subconscious Journaling",
        desc: "Triggers ambient voice capture when dream-state REM patterns are detected locallly.",
        type: "Wellness Protocol"
    }
];

export default function WorkflowExamples() {
    return (
        <section className="relative px-6 py-24 bg-snow/50" id="workflows">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/10 to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal text-white rounded-full mb-4">
                    <Sparkles size={12} />
                    <span className="font-[var(--font-pixel)] text-[9px] uppercase tracking-widest">Real Use Cases</span>
                </div>
                <h2 className="text-[28px] text-teal leading-tight max-w-[280px]">Automating Inner Clarity</h2>
            </motion.div>

            {/* Denser Product Layout */}
            <div className="space-y-16">
                {/* Example 1: Node + Terminal Combo */}
                <div className="relative">
                    <div className="grid grid-cols-1 gap-6 relative z-10">
                        {cases.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="glass-heavy p-6 rounded-[32px] border-white/90 shadow-xl shadow-teal/5 relative group"
                            >
                                <span className="text-[10px] text-teal/40 font-[var(--font-pixel)] uppercase tracking-wider mb-2 block">{c.type}</span>
                                <h3 className="text-[18px] text-teal mb-2 group-hover:translate-x-1 transition-transform">{c.title}</h3>
                                <p className="text-[13px] text-sage leading-relaxed">{c.desc}</p>
                                <div className="mt-4 flex items-center gap-2 text-[12px] text-teal font-medium">
                                    <span>Explore Logic</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Product Panels overlapping the text for density */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 0.9, rotate: -2 }}
                        viewport={{ once: true }}
                        className="absolute -top-12 -right-6 z-20 pointer-events-none opacity-40 blur-[0.5px]"
                    >
                        <NodeBuilder />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-10 scale-95"
                    >
                        <TerminalLog />
                    </motion.div>
                </div>
            </div>

            {/* Background Polish */}
            <div className="absolute top-[20%] right-[-10%] w-64 h-64 rounded-full bg-mint/5 blur-[100px] pointer-events-none" />
        </section>
    );
}
