"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, Globe, Shield, MessageCircle, ExternalLink } from 'lucide-react';

// Brand SVGs for compatibility with older Lucide versions
const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const TwitterIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-heavy rounded-t-[48px] w-full px-8 lg:px-16 pt-16 pb-14 mt-12 bg-white/40 ring-1 ring-black/5"
        >
            <div className="max-w-[480px] lg:max-w-[1440px] mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 mb-16 overflow-hidden">
                    {/* Column 1: Identity */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                        <span className="font-[var(--font-pixel)] text-[22px] tracking-[6px] text-teal">AETHER</span>
                        <p className="text-[14px] text-sage max-w-[280px] leading-relaxed font-medium">
                            Taking the race out of healing. Built for a world that needs silence.
                        </p>
                        <div className="flex gap-4 items-center mt-2">
                            <SocialIcon icon={<TwitterIcon />} label="Twitter" />
                            <SocialIcon icon={<LinkedinIcon />} label="LinkedIn" />
                            <SocialIcon icon={<GithubIcon />} label="GitHub" />
                            <SocialIcon icon={<Mail size={18} />} label="Email" />
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h4 className="font-[var(--font-pixel)] text-[11px] uppercase tracking-[3px] text-teal/40">Navigation</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            <FooterLink label="Our Philosophy" />
                            <FooterLink label="Privacy Shield" />
                            <FooterLink label="Safety Center" />
                            <FooterLink label="Press Media" />
                            <FooterLink label="Bug Bounty" />
                            <FooterLink label="Open Source" />
                        </div>
                    </div>

                    {/* Column 3: Contact & Download */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                        <h4 className="font-[var(--font-pixel)] text-[11px] uppercase tracking-[3px] text-teal/40">Get Involved</h4>
                        <div className="space-y-4 w-full">
                            <a href="mailto:reachoutaether@gmail.com" className="flex items-center gap-3 p-3 rounded-2xl bg-teal/5 border border-teal/10 hover:bg-teal/10 transition-colors group no-underline">
                                <MessageCircle size={18} className="text-teal" />
                                <span className="text-[13px] text-teal font-medium">reachoutaether@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-mint/10 border border-mint/20 cursor-default">
                                <Download size={18} className="text-teal" />
                                <div className="flex flex-col">
                                    <span className="text-[12px] text-teal font-bold uppercase tracking-wider">v1.0.0 Stable</span>
                                    <span className="text-[10px] text-sage/70 font-[var(--font-pixel)]">Available for Android</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-teal/10 to-transparent mb-8" />

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-[11px] text-teal/30 font-medium">
                    <p>© 2026 AetherMind. All rights reserved.</p>
                    <div className="flex gap-6 items-center">
                        <a href="#" className="hover:text-teal/60 transition-colors no-underline">Cookie Policy</a>
                        <a href="#" className="hover:text-teal/60 transition-colors no-underline">Security Audit</a>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                            <span>Systems Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}

function SocialIcon({ icon, label }) {
    return (
        <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300 transform hover:scale-110" aria-label={label}>
            {icon}
        </a>
    );
}

function FooterLink({ label }) {
    return (
        <a href="#" className="text-[13px] text-sage/80 hover:text-teal transition-colors duration-300 flex items-center gap-1 group no-underline">
            <span className="w-0 group-hover:w-1.5 h-px bg-teal transition-all duration-300" />
            {label}
        </a>
    );
}
