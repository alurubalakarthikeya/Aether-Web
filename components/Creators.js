"use client";
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail, Sparkles, Shield, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

// Brand icons fallback if lucide doesn't have them
const GithubLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const TwitterLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const CreatorCard = ({ name, role, tags, socials, icon: Icon, delay }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full group"
        >
            <div className="glass-heavy rounded-[40px] p-10 h-full relative overflow-hidden transition-all duration-500 border border-white/40 group-hover:border-teal/30 group-hover:shadow-[0_20px_80px_rgba(43,85,72,0.15)] flex flex-col items-center text-center animate-scan group-hover:after:opacity-50 !bg-gradient-to-br !from-white/95 !via-mist/20 !to-foam/10">
                {/* Noise Texture Pattern */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>

                {/* Glow Overlay */}
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useTransform(
                            [mouseXSpring, mouseYSpring],
                            ([latestX, latestY]) => `radial-gradient(600px circle at ${(latestX + 0.5) * 100}% ${(latestY + 0.5) * 100}%, rgba(143, 188, 176, 0.2), transparent 40%)`
                        ),
                    }}
                />

                {/* Status Indicator */}
                <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md z-20">
                    <div className="w-2 h-2 rounded-full bg-mint animate-pulse shadow-[0_0_8px_rgba(143,188,176,0.6)]" />
                    <span className="text-[10px] text-teal/80 font-[var(--font-pixel)] uppercase tracking-wider">Active</span>
                </div>

                {/* Profile Icon Container */}
                <div className="relative mb-8 mt-4" style={{ transform: "translateZ(50px)" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-mint to-teal blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative p-6 rounded-3xl bg-white border border-white/80 shadow-xl text-teal group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Icon size={40} strokeWidth={1} />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center" style={{ transform: "translateZ(30px)" }}>
                    <div className="mb-2">
                        <span className="text-[11px] text-sage font-[var(--font-pixel)] uppercase tracking-[3px] opacity-70">
                            {role.split(',')[0]}
                        </span>
                    </div>
                    <h3 className="text-[24px] lg:text-[32px] text-pine mb-4 leading-tight tracking-tight px-4">
                        {name}
                    </h3>
                    <p className="text-teal/60 text-[14px] max-w-[280px] leading-relaxed mb-6 font-medium italic">
                        "Crafting digital experiences that prioritize mental serenity and elegant design."
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-white/50 border border-white/80 text-[10px] text-teal/70 font-[var(--font-pixel)] tracking-wider uppercase transition-colors hover:bg-teal hover:text-white">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Socials Grid */}
                <div className="flex gap-4 relative z-10 mt-auto pt-6 border-t border-teal/5 w-full justify-center" style={{ transform: "translateZ(40px)" }}>
                    {socials.map((social, index) => {
                        const SIcon = social.icon;
                        return (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="p-4 rounded-2xl bg-white border border-white/60 text-teal hover:bg-teal hover:text-white hover:border-teal/50 transition-all duration-300 shadow-sm relative group/link"
                                aria-label={social.label}
                            >
                                <SIcon size={22} />
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-pine text-white text-[10px] py-1.5 px-3 rounded-lg opacity-0 group-hover/link:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-[var(--font-pixel)] tracking-wider">
                                    {social.label}
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default function Creators() {
    return (
        <section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-white/30" id="creators">
            {/* Background elements */}
            <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-mist/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-mint/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="flex flex-col items-center mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[12px] text-sage font-[var(--font-pixel)] tracking-[6px] uppercase mb-4"
                    >
                        The Architects
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[32px] lg:text-[48px] text-teal mb-4 tracking-tight"
                    >
                        BEHIND THE SCREEN
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-mint via-teal to-mint rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-[1100px] mx-auto">
                    <CreatorCard
                        name="Aluru Bala Karthikeya"
                        role="Frontend Development, UI/UX"
                        tags={["React", "Next.js", "UI Architecture", "Creative Dev"]}
                        icon={Sparkles}
                        delay={0.2}
                        socials={[
                            { icon: GithubLogo, url: "https://github.com/alurubalakarthikeya", label: "GitHub" },
                            { icon: LinkedinLogo, url: "https://www.linkedin.com/in/alurubalakarthikeya/", label: "LinkedIn" },
                            { icon: TwitterLogo, url: "https://x.com/abalakarthikeya", label: "Twitter" },
                            { icon: Mail, url: "mailto:reachoutaether@gmail.com", label: "Email" }
                        ]}
                    />
                    <CreatorCard
                        name="Arji Jethin Naga Sai Eswar"
                        role="Backend Development, Testing"
                        tags={["Backend", "API Design", "ML Integration", "Cloud Eng"]}
                        icon={Shield}
                        delay={0.4}
                        socials={[
                            { icon: GithubLogo, url: "https://github.com/ArjiJethin", label: "GitHub" },
                            { icon: LinkedinLogo, url: "https://www.linkedin.com/in/arjijethin/", label: "LinkedIn" },
                            { icon: TwitterLogo, url: "https://x.com/ArjiJethin51993", label: "Twitter" },
                            { icon: Mail, url: "mailto:reachoutaether@gmail.com", label: "Email" }
                        ]}
                    />
                </div>
            </div>

            {/* Decorative Decorative lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal/5 to-transparent pointer-events-none hidden lg:block" />
        </section>
    );
}
