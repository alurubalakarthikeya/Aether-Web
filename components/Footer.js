"use client";
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-heavy rounded-t-[40px] w-full px-8 pt-12 pb-14 text-center flex flex-col items-center gap-5 mt-10"
        >
            <span className="font-[var(--font-pixel)] text-[22px] tracking-[6px] text-teal">AETHER</span>
            <p className="text-[14px] text-sage max-w-[280px] leading-relaxed font-medium">
                Taking the race out of healing.
            </p>

            {/* Social Icons - Legacy Support SVGs for Brands */}
            <div className="flex gap-5 items-center mt-2">
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="mailto:reachoutaether@gmail.com" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300" aria-label="Gmail">
                    <Mail size={18} />
                </a>
            </div>

            <div className="flex flex-col items-center gap-1 mt-4">
                <div className="flex gap-4 items-center text-[13px] font-semibold text-teal/70">
                    <a href="#" className="hover:text-teal transition-colors no-underline">Privacy</a>
                    <span className="text-teal/10">•</span>
                    <a href="#" className="hover:text-teal transition-colors no-underline">Terms</a>
                    <span className="text-teal/10">•</span>
                    <a href="#" className="hover:text-teal transition-colors no-underline">Press</a>
                </div>
                <p className="text-[12px] text-sage/70 mt-2">
                    Have suggestions? Contact us at <a href="mailto:reachoutaether@gmail.com" className="text-teal hover:underline">reachoutaether@gmail.com</a>
                </p>
            </div>


            <div className="w-full h-[1px] bg-teal/10 my-2" />

            <p className="text-[11px] text-teal/40 font-medium">
                © 2026 AetherMind. All rights reserved. <br />
                Made for a calmer world.
            </p>
        </motion.footer>
    );
}
