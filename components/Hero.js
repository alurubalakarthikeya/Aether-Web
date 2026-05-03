"use client";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-[100dvh] flex flex-col overflow-hidden px-6 pt-24" id="hero">
            {/* Ambient glow blobs */}
            <div className="absolute top-[15%] -left-16 w-52 h-52 rounded-full bg-mint/30 blur-3xl opacity-40" style={{ animation: 'pulse-glow 8s ease-in-out infinite' }} />
            <div className="absolute top-[40%] -right-12 w-48 h-48 rounded-full bg-foam/40 blur-3xl opacity-50" style={{ animation: 'pulse-glow 10s ease-in-out infinite 2s' }} />

            {/* Brand + Tagline */}
            <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="self-start mt-4 max-w-[85%] relative z-20"
            >
                <h1 className="text-[32px] tracking-[6px] mb-1.5 text-teal font-[var(--font-pixel)]">AETHER</h1>
                <p className="text-[16px] text-sage/90 leading-relaxed font-medium">
                    Healing is not a race.<br />Aether grows at your pace.
                </p>
            </motion.div>

            {/* ── Island scene — Widened tree gap and increased visibility ── */}
            <div className="flex-1 flex items-center justify-center relative my-4">
                {/* Left background island — further left, less blur, more opacity */}
                <motion.img
                    src="/assets/floating-thing.png"
                    alt=""
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.65, x: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute -left-16 top-[15%] w-[48%] blur-[0.4px]"
                    style={{ animation: 'float-slow 9s ease-in-out infinite', zIndex: 0 }}
                />

                {/* Right background island — further right, less blur, more opacity */}
                <motion.img
                    src="/assets/floating-new.png"
                    alt=""
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.65, x: 0 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="absolute -right-8 top-[22%] w-[46%] blur-[0.4px]"
                    style={{ animation: 'float-slow 8s ease-in-out infinite 1.5s', zIndex: 0 }}
                />

                {/* Main floating island — sharp and focused */}
                <motion.img
                    src="/assets/floating-island.png"
                    alt="Floating Island"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10 w-[85%] max-w-[340px] drop-shadow-[0_25px_50px_rgba(43,85,72,0.2)]"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                />
            </div>

            {/* CTA card — pinned to absolute bottom of viewport */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glass-heavy rounded-[32px] p-6 pb-12 flex flex-col gap-3.5 relative z-30 mt-auto -mx-6 mb-0 shadow-[0_-10px_40px_rgba(43,85,72,0.1)] border-b-0"
            >
                <a href="/assets/aether_v1.apk" download="aether_v1.apk" className="btn-aether bg-teal text-white rounded-2xl h-12 text-[14px] shadow-lg hover:brightness-110 active:scale-95 transition-all no-underline w-full">
                    Start Your Journey
                </a>
                <a href="#features" className="btn-aether bg-white/50 text-sage rounded-2xl h-12 text-[13px] border border-white/80 hover:bg-white/80 no-underline w-full">
                    Explore Features
                </a>
                <p className="text-[11px] text-sage/70 text-center mt-1 leading-relaxed">
                    Crafted for your inner peace. <br />
                    <strong className="text-teal font-semibold">Privacy is our priority.</strong>
                </p>
            </motion.div>
        </section>
    );
}
