"use client";
import { motion } from 'framer-motion';
import { MessageCircle, Send, Camera, Code, Globe } from 'lucide-react';

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

            {/* Social Icons - Using standard Lucide UI icons to avoid import errors */}
            <div className="flex gap-5 items-center mt-2">
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300">
                    <Camera size={18} />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300">
                    <Send size={18} />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300">
                    <MessageCircle size={18} />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-teal/5 text-teal hover:bg-teal hover:text-white transition-all duration-300">
                    <Code size={18} />
                </a>
            </div>

            <div className="flex gap-4 items-center text-[13px] font-semibold mt-4 text-teal/70">
                <a href="#" className="hover:text-teal transition-colors no-underline">Privacy</a>
                <span className="text-teal/10">•</span>
                <a href="#" className="hover:text-teal transition-colors no-underline">Terms</a>
                <span className="text-teal/10">•</span>
                <a href="#" className="hover:text-teal transition-colors no-underline">Press</a>
            </div>

            <div className="w-full h-[1px] bg-teal/10 my-2" />

            <p className="text-[11px] text-teal/40 font-medium">
                © 2026 Aether Mind. All rights reserved. <br />
                Made for a calmer world.
            </p>
        </motion.footer>
    );
}
