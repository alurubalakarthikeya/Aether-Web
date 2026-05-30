"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function FloatingDownload() {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="fixed bottom-8 right-4 z-[100]"
        >
            <a
                href="/assets/aether_v2.apk"
                download
                className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center shadow-lg hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 group"
            >
                <div className="group-hover:translate-y-0.5 transition-transform duration-300">
                    <ArrowDown size={18} />
                </div>
            </a>
        </motion.div>
    );
}
