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
        <section className="relative px-6 py-24 lg:p-10 bg-snow/50 lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-[40px] lg:shadow-sm h-full flex flex-col" id="world">
            <div className="absolute top-0 left-0 w-full h-px lg:hidden bg-gradient-to-r from-transparent via-teal/10 to-transparent" />

            <div className="mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal text-white rounded-full mb-4">
                        <Home size={12} />
                        <span className="font-[var(--font-pixel)] text-[9px] uppercase tracking-widest">Aether</span>
                    </div>

                    <h2 className="text-[28px] lg:text-[36px] text-teal leading-tight max-w-[280px] lg:max-w-sm mx-auto">Our upcoming features</h2>
                    <p className="text-[14px] lg:text-[15px] text-sage/80 mt-4 leading-relaxed lg:max-w-xs mx-auto">Customize your companion&apos;s home to reflect your inner state. An evolving world built around understanding you.</p>
                </motion.div>

                <div className="space-y-6 flex-1 flex flex-col justify-center">
                    {themes.map((theme, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${theme.bg} p-6 lg:p-8 rounded-[32px] border border-white/60 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
                        >
                            <div className="relative z-10 flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-6">
                                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/60 flex items-center justify-center text-teal flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                                    <theme.icon size={24} />
                                </div>
                                <div className="lg:mt-2">
                                    <h3 className="text-[16px] lg:text-[20px] font-semibold text-teal">{theme.title}</h3>
                                    <p className="text-[12px] lg:text-[14px] text-sage/80 mt-1 lg:mt-3 leading-relaxed">{theme.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 lg:mt-16 p-6 lg:p-10 glass rounded-[32px] lg:rounded-[40px] flex flex-col sm:flex-row items-center lg:justify-center gap-4 border border-white/80 shadow-[0_10px_30px_rgba(43,85,72,0.05)] mx-auto"
                >
                    <div className="flex gap-2 bg-white/40 p-3 rounded-2xl">
                        <Sun size={20} className="text-teal" />
                        <Moon size={20} className="text-sage opacity-40" />
                    </div>
                    <p className="text-[12px] md:text-[14px] text-sage leading-snug md:leading-relaxed text-center sm:text-left font-medium">Themes transition gently based on your local time and mood patterns, offering a personalized spatial aesthetic.</p>
                </motion.div>
            </div>
        </section>
    );
}
