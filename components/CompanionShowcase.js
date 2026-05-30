"use client";
import { motion } from 'framer-motion';
import { Heart, Sparkles, Sun, Phone, Video } from 'lucide-react';

export default function CompanionShowcase() {
    return (
        <section className="relative px-6 py-24 lg:p-10 overflow-hidden lg:bg-white/40 lg:border lg:border-white/60 lg:rounded-[40px] lg:shadow-sm h-full flex flex-col" id="companion">
            <div className="mx-auto w-full pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 relative z-10"
                >
                    <h2 className="text-[32px] lg:text-[36px] text-teal leading-tight">More than a chatbot.</h2>
                </motion.div>

                <div className="relative z-10 flex flex-col gap-10">
                    <div className="grid grid-cols-1 gap-4 w-full px-4 lg:px-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 p-5 rounded-3xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-mint/20 flex items-center justify-center text-teal flex-shrink-0">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-teal mb-1">Reacts Emotionally</h3>
                                <p className="text-[13px] text-sage/80 leading-relaxed">Your Aether-pet changes its mood and environment based on your journaling cues.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-start gap-4 p-5 rounded-3xl bg-white/40 border border-white/60 hover:bg-white/60 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-foam/30 flex items-center justify-center text-teal flex-shrink-0">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-teal mb-1">Soft Comfort</h3>
                                <p className="text-[13px] text-sage/80 leading-relaxed">Instant AI Assistant reach out on low emotional scores for emotional support.</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full mt-2 lg:mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="w-full max-w-[500px] lg:max-w-[580px] glass-heavy p-1 rounded-[40px] relative overflow-hidden mx-auto lg:mx-0 lg:ml-auto shadow-[0_32px_64px_-16px_rgba(43,85,72,0.25)] will-change-transform"
                        >
                            <div className="bg-white/60 backdrop-blur-xl rounded-[38px] p-7 lg:p-10 border border-white/80 relative">
                                {/* Message Header */}
                                <div className="flex items-center justify-between mb-10 border-b border-teal/5 pb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-mint/20 border border-mint/40 overflow-hidden shadow-inner flex items-center justify-center">
                                            <img src="/assets/set-3.png" alt="Aura" className="w-full h-full object-cover scale-125" />
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] lg:text-[18px] font-extrabold text-teal leading-none">Aura</h4>
                                            <div className="flex items-center gap-1.5 mt-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                                                <span className="text-[9px] lg:text-[10px] font-[var(--font-pixel)] text-mint font-bold uppercase tracking-wider">Active Now</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-teal/5 border border-teal/10 flex items-center justify-center text-teal cursor-pointer hover:bg-teal/10 transition-colors">
                                            <Phone size={20} />
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
                                        <div className="bg-gradient-to-br from-mint/20 to-mint/5 p-5 lg:p-6 rounded-3xl rounded-tl-none text-teal text-[15px] lg:text-[16px] leading-relaxed shadow-sm border border-white/40">
                                            I noticed you&apos;re not feeling quite well today. I&apos;m right here if you need a safe place to talk or some quiet comfort.
                                        </div>
                                        <span className="text-[8px] lg:text-[10px] text-sage/40 font-[var(--font-pixel)] ml-2">JUST NOW</span>
                                    </motion.div>

                                    {/* Interactive Action */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 }}
                                        className="pt-6 border-t border-teal/5"
                                    >
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <div className="flex-1 py-3.5 lg:py-4 rounded-2xl bg-teal text-white text-[13px] lg:text-[14px] font-semibold shadow-lg shadow-teal/20 cursor-pointer hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                                <span>Continue Chat</span>
                                            </div>
                                            <div className="flex-1 py-3 lg:py-3.5 rounded-2xl bg-white/40 border border-white/60 text-teal/60 text-[12px] lg:text-[13px] font-medium cursor-pointer hover:bg-white/60 transition-colors text-center flex justify-center items-center">
                                                Leave on seen
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-[-20%] w-64 lg:w-[600px] h-64 lg:h-[600px] rounded-full bg-mint/10 blur-[120px] pointer-events-none" />
        </section>
    );
}
