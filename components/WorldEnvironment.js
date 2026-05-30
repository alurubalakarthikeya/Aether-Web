"use client";
import { motion } from 'framer-motion';
import { Home, Sun, Moon, Wind, Sprout } from 'lucide-react';

const themes = [
    { title: "Gamification", desc: "Earn rewards for your progress.", bg: "bg-foam/40", icon: Wind },
    { title: "Autonomous Pets", desc: "Train your own AI pet.", bg: "bg-mint/20", icon: Sprout },
    { title: "Ambient Environments", desc: "Customize your companion's home to reflect your inner state.", bg: "bg-teal/10", icon: Moon }
];

export default function WorldEnvironment() {
    return (
        <section className="relative px-6 py-24 lg:py-20 lg:bg-transparent" id="world">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/10 to-transparent" />

            <div className="max-w-[480px] lg:max-w-[600px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center flex flex-col items-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal text-white rounded-full mb-4">
                        <Home size={12} />
                        <span className="font-[var(--font-pixel)] text-[9px] uppercase tracking-widest">Aether</span>
                    </div>

                    <h2 className="text-[28px] lg:text-[34px] text-teal leading-tight max-w-[280px]">Our upcoming features</h2>
                    <p className="text-[14px] text-sage/80 mt-4 leading-relaxed max-w-[400px]">Customize your companion&apos;s home to reflect your inner state.</p>
                </motion.div>

                <div className="space-y-6">
                    {themes.map((theme, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${theme.bg} p-6 rounded-[32px] border border-white/60 relative overflow-hidden group`}
                        >
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-white/40 flex items-center justify-center text-teal flex-shrink-0 transition-transform group-hover:scale-110">
                                    <theme.icon size={18} />
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-semibold text-teal">{theme.title}</h3>
                                    <p className="text-[12px] text-sage/70 mt-1">{theme.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 glass-light rounded-[32px] flex items-center gap-4 border border-white/80 boxShadow-10"
                >
                    <div className="flex gap-2">
                        <Sun size={20} className="text-teal" />
                        <Moon size={20} className="text-sage opacity-40" />
                    </div>
                    <p className="text-[11px] text-sage leading-snug">Themes transition gently based on your local time and mood patterns.</p>
                </motion.div>
            </div>
        </section>
    );
}
