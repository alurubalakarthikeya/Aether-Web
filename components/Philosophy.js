"use client";
import { motion } from 'framer-motion';
import { Heart, Leaf, Sun, Moon, Flame, Wind } from 'lucide-react';

const blocks = [
    { icon: Leaf, title: 'Nature', desc: 'Growth is silent', span: 'col-span-1 row-span-1', color: 'bg-mint' },
    { icon: Heart, title: 'Softness', desc: 'Be kind to your soul', span: 'col-span-1 row-span-2', color: 'bg-sage' },
    { icon: Sun, title: 'Light', desc: 'One day at a time', span: 'col-span-1 row-span-1', color: 'bg-foam' },
    { icon: Wind, title: 'Breath', desc: 'Just breathe through it', span: 'col-span-2 row-span-1', color: 'bg-teal' },
    { icon: Moon, title: 'Peace', desc: 'Rest is not lazy', span: 'col-span-1 row-span-1', color: 'bg-mint' },
    { icon: Flame, title: 'Grit', desc: 'Keep showing up', span: 'col-span-1 row-span-1', color: 'bg-sage' },
];

export default function Philosophy() {
    return (
        <section className="relative px-6 py-20" id="philosophy">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full bg-mint/20 blur-3xl opacity-30" style={{ animation: 'pulse-glow 10s ease-in-out infinite' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="relative z-10 mb-8"
            >
                <span className="font-[var(--font-pixel)] text-[11px] text-sage uppercase tracking-[3px]">✦ Philosophy</span>
                <h2 className="text-[26px] mt-2 text-teal leading-tight">Rooted in<br />Consistency</h2>
            </motion.div>

            <div className="relative z-10 grid grid-cols-2 auto-rows-[88px] gap-3">
                {blocks.map((b, i) => {
                    const Icon = b.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`
                ${b.span} ${b.color} rounded-[32px] p-5
                flex flex-col justify-between text-white
                relative overflow-hidden cursor-default
                group hover:brightness-105 transition-all duration-500 shadow-sm
              `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/12 to-transparent opacity-50" />
                            <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm self-end">
                                <Icon size={18} className="text-white/90" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[16px] font-medium text-white mb-0.5">{b.title}</h3>
                                <p className="text-[11px] text-white/70 m-0 leading-tight">{b.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
