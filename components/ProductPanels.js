"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sprout, BookOpen, Sun, Wind } from 'lucide-react';

export function TerminalLog({ className }) {
    return (
        <motion.div className={`w-[240px] bg-white/65 backdrop-blur-2xl border border-white/80 rounded-[28px] overflow-hidden shadow-2xl ${className}`}>
            <div className="bg-teal/5 h-8 flex items-center px-4 border-b border-teal/10">
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-teal/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-teal/20" />
                </div>
            </div>
            <div className="p-4 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                    <span className="text-[9px] font-[var(--font-pixel)] text-teal/40 tracking-wider uppercase">Syncing Mood...</span>
                </div>
                <div className="space-y-2">
                    <div className="h-1 w-[85%] bg-teal/10 rounded-full" />
                    <div className="h-1 w-[65%] bg-teal/10 rounded-full" />
                    <div className="h-1 w-[95%] bg-mint/10 rounded-full" />
                </div>
            </div>
        </motion.div>
    );
}

export function InsightCard() {
    return (
        <motion.div className="w-[180px] bg-white/65 backdrop-blur-2xl border border-white/80 rounded-[28px] p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-xl bg-mint/20 flex items-center justify-center text-teal">
                    <Sun size={14} />
                </div>
                <span className="text-[10px] font-bold text-teal tracking-tight">Emotional Clarity</span>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-end">
                    <span className="text-[20px] font-[var(--font-pixel)] text-teal leading-none">84%</span>
                    <span className="text-[8px] text-sage font-bold tracking-widest uppercase">Stable</span>
                </div>
                <div className="h-1.5 w-full bg-snow rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '84%' }}
                        className="h-full bg-teal"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export function HabitSprout() {
    return (
        <motion.div className="w-[160px] bg-white/65 backdrop-blur-2xl border border-white/80 rounded-[28px] p-4 shadow-2xl">
            <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-xl bg-sage/20 flex items-center justify-center text-teal">
                    <Sprout size={16} />
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-4 h-4 rounded-full border-2 border-white bg-mint/40" />
                    ))}
                </div>
            </div>
            <p className="text-[11px] font-semibold text-teal leading-tight">Daily Reflection</p>
            <div className="flex items-center gap-1.5 mt-2">
                <div className="flex-1 h-1 bg-teal/10 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-teal/20"
                    />
                </div>
                <span className="text-[9px] text-sage font-bold">12d Streak</span>
            </div>
        </motion.div>
    );
}

export function NodeBuilder() {
    return (
        <motion.div className="w-[200px] bg-white/65 backdrop-blur-2xl border border-white/80 rounded-[32px] p-5 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2 opacity-20">
                <Wind size={24} className="text-teal" />
            </div>

            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-[10px] font-[var(--font-pixel)] text-teal/60 tracking-widest uppercase">Pet Growth</span>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-teal/5 flex items-center justify-center border border-teal/10">
                        <Heart size={20} className="text-teal fill-teal/10" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                        <div className="h-1.5 w-[70%] bg-teal/10 rounded-full" />
                        <div className="h-1.5 w-[40%] bg-teal/10 rounded-full" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
