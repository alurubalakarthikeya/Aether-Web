"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center px-5 pt-6 pointer-events-none"
        >
            <nav className="pointer-events-auto w-full max-w-[440px] flex items-center justify-between px-4 h-10 rounded-full transition-all duration-500 glass">
                <span className="font-[var(--font-pixel)] text-[15px] tracking-[3px] text-teal">AETHER</span>

                <div className="hidden sm:flex gap-4 items-center">
                    <a href="#features" className="text-teal/60 hover:text-teal transition-colors text-[12px] font-medium no-underline">Features</a>
                    <a href="#preview" className="text-teal/60 hover:text-teal transition-colors text-[12px] font-medium no-underline">Preview</a>
                    <a href="#download" className="text-teal/60 hover:text-teal transition-colors text-[12px] font-medium no-underline">Download</a>
                </div>

                <button onClick={() => setOpen(!open)} className="sm:hidden p-1 border-none bg-transparent cursor-pointer">
                    {open ? <X size={18} className="text-teal" /> : <Menu size={18} className="text-teal" />}
                </button>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-5 right-5 mt-2 glass-heavy rounded-2xl p-4 text-center pointer-events-auto"
                    >
                        <a href="#features" onClick={() => setOpen(false)} className="block py-2.5 text-teal text-[14px] border-b border-teal/5 no-underline">Features</a>
                        <a href="#preview" onClick={() => setOpen(false)} className="block py-2.5 text-teal text-[14px] border-b border-teal/5 no-underline">Preview</a>
                        <a href="#download" onClick={() => setOpen(false)} className="block py-2.5 text-teal text-[14px] no-underline">Download</a>
                        <a href="/assets/aether_v1.apk" download="aether_v1.apk" onClick={() => setOpen(false)} className="mt-3 btn-aether bg-sage text-white w-full rounded-xl text-[13px] h-10 no-underline">
                            <Download size={14} /> Download APK
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
