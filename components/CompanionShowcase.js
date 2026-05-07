"use client";
import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Phone, Video } from 'lucide-react';

export default function CompanionShowcase() {
    return (
        <section className="relative px-6 py-24 overflow-hidden" id="companion">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <span className="font-[var(--font-pixel)] text-[10px] text-sage tracking-[4px] uppercase mb-2 block">The Emotional Hook</span>
                <h2 className="text-[32px] text-teal leading-tight">More than a chatbot.</h2>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center gap-12">
                <div className="grid grid-cols-1 gap-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 rounded-3xl bg-white/40 border border-white/60"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-mint/20 flex items-center justify-center text-teal flex-shrink-0">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-teal mb-1">Reacts Emotionally</h3>
                            <p className="text-[12px] text-sage/80 leading-relaxed">Your Aether-pet changes its mood and environment based on your journaling cues.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-3xl bg-white/40 border border-white/60"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-foam/30 flex items-center justify-center text-teal flex-shrink-0">
                            <Heart size={20} />
                        </div>
                        <div>
                            <h3 className="text-[15px] font-semibold text-teal mb-1">Soft Comfort</h3>
                            <p className="text-[12px] text-sage/80 leading-relaxed">Instant AI Assitant reach out on low emotional scores for emotional support.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-[500px] glass-heavy p-1 rounded-[40px] relative overflow-hidden mx-auto shadow-[0_32px_64px_-16px_rgba(43,85,72,0.2)]"
                    >
                        <div className="bg-white/60 backdrop-blur-3xl rounded-[38px] p-7 border border-white/80 relative">
                            {/* Message Header */}
                            <div className="flex items-center justify-between mb-10 border-b border-teal/5 pb-5">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-mint/20 border border-mint/40 overflow-hidden shadow-inner flex items-center justify-center">
                                        <img src="/assets/set-3.png" alt="Aura" className="w-full h-full object-cover scale-125" />
                                    </div>
                                    <div>
                                        <h4 className="text-[15px] font-extrabold text-teal leading-none">Aura</h4>
                                        <div className="flex items-center gap-1.5 mt-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                                            <span className="text-[9px] font-[var(--font-pixel)] text-mint font-bold uppercase tracking-wider">Active Now</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal cursor-pointer hover:bg-teal/10 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Chat Flow */}
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-col items-start gap-2 max-w-[90%]"
                                >
                                    <div className="bg-gradient-to-br from-mint/20 to-mint/5 p-5 rounded-3xl rounded-tl-none text-teal text-[15px] leading-relaxed shadow-sm border border-white/40">
                                        I noticed you&apos;re not feeling quite well today. I&apos;m right here if you need a safe place to talk or some quiet comfort.
                                    </div>
                                    <span className="text-[8px] text-sage/40 font-[var(--font-pixel)] ml-2">JUST NOW</span>
                                </motion.div>

                                {/* Interactive Action */}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="pt-6 border-t border-teal/5"
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="w-full py-3.5 rounded-2xl bg-teal text-white text-[13px] font-semibold shadow-lg shadow-teal/20 cursor-pointer hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                            <span>Continue Chat</span>
                                        </div>
                                        <div className="w-full py-3 rounded-2xl bg-white/40 border border-white/60 text-teal/60 text-[12px] font-medium cursor-pointer hover:bg-white/60 transition-colors text-center">
                                            Leave on seen
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/2 left-[-20%] w-64 h-64 rounded-full bg-mint/10 blur-[120px] pointer-events-none" />
        </section>
    );
}
