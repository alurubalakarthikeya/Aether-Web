"use client";
import { motion } from 'framer-motion';
import { Download, ShieldCheck, Sparkles } from 'lucide-react';

const steps = [
    { icon: Download, num: '01', title: 'Download APK', desc: 'Get the latest version securely from our servers.' },
    { icon: ShieldCheck, num: '02', title: 'Allow Install', desc: 'Enable unknown sources in your device settings.' },
    { icon: Sparkles, num: '03', title: 'Open & Begin', desc: 'Launch Aether and start your wellness journey.' },
];

export default function DownloadPath() {
    return (
        <section className="relative px-6 py-20" id="download">
            <div className="absolute top-8 -right-10 w-36 h-36 rounded-full bg-mist/40 blur-3xl opacity-30" style={{ animation: 'pulse-glow 9s ease-in-out infinite' }} />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="mb-8"
            >
                <span className="font-[var(--font-pixel)] text-[11px] text-sage uppercase tracking-[3px]">✦ Get Started</span>
                <h2 className="text-[24px] mt-1.5 mb-1 text-teal">Three simple steps</h2>
            </motion.div>

            <div className="flex flex-col gap-4">
                {steps.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            className="glass rounded-3xl p-5 flex items-center gap-5"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                                <Icon size={22} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="font-[var(--font-pixel)] text-[10px] text-sage">{s.num}</span>
                                    <h3 className="text-[15px] text-teal">{s.title}</h3>
                                </div>
                                <p className="text-[12px] text-sage leading-relaxed m-0 mt-0.5">{s.desc}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-col items-center gap-3"
            >
                <a href="/assets/aether_v1.apk" download="aether_v1.apk" className="btn-aether bg-sage text-white rounded-2xl h-12 text-[14px] shadow-md hover:bg-teal no-underline w-full">
                    <Download size={18} /> Download APK
                </a>
                <span className="text-[11px] text-sage opacity-70">v1.0.0 · 25.4 MB</span>
            </motion.div>
        </section>
    );
}
