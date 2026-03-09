"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";

const words = ["Your", "Project's", "Home."];
const wordsLine2 = ["From", "Blueprint", "to", "Launch."];

const floatingStats = [
    { value: "20+", label: "Projects Delivered" },
    { value: "99%", label: "Client Retention" },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* ── Background Image ── */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/team-hero.jpg"
                    alt="Syntax team collaborating"
                    fill
                    className="object-cover object-center scale-105"
                    priority
                />
                {/* layered overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
                <div className="absolute inset-0 bg-blue-950/25" />
                {/* vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            {/* ── Badge / Pill ── */}
            <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative z-10 mt-8 mb-8"
            >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-medium">
                    <Sparkles size={14} className="text-blue-400 animate-pulse" />
                    Premium Software Solutions
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                </div>
            </motion.div>

            {/* ── Headline ── */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                {/* Line 1 — word by word */}
                <div className="flex flex-wrap justify-center gap-x-5 mb-2">
                    {words.map((word, i) => (
                        <motion.span
                            key={word}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                            className="font-serif text-6xl md:text-8xl lg:text-[96px] font-normal text-white leading-[1.05] tracking-tight"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                {/* Line 2 — muted words */}
                <div className="flex flex-wrap justify-center gap-x-5 mb-12">
                    {wordsLine2.map((word, i) => (
                        <motion.span
                            key={word}
                            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.7, delay: 0.55 + i * 0.1, ease: "easeOut" }}
                            className="font-serif text-6xl md:text-8xl lg:text-[96px] font-normal text-white/40 leading-[1.05] tracking-tight"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                {/* Sub-text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.95 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    From startup to scale-up and beyond—we build IT that grows with you.
                </motion.p>

                {/* CTA Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="group relative px-10 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_40px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-95"
                    >
                        Start a Project
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/about"
                        className="px-10 py-4 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                    >
                        Our Story
                    </Link>
                </motion.div>

                {/* Trusted badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.35 }}
                    className="flex items-center justify-center gap-6 mt-10 flex-wrap"
                >
                    {["Innovation at the core", "Transparent processes", "User-centric design"].map((item) => (
                        <span key={item} className="flex items-center gap-2 text-white/50 text-sm">
                            <CheckCircle2 size={14} className="text-blue-400" />
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ── Floating Stat Chips ── */}
            {floatingStats.map((stat, i) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.4 + i * 0.15 }}
                    className={`hidden lg:flex absolute z-10 ${i === 0 ? "left-12 bottom-40" : "right-12 bottom-40"} flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4`}
                >
                    <span className="text-4xl font-serif text-white font-normal">{stat.value}</span>
                    <span className="text-xs text-white/60 mt-1 font-medium">{stat.label}</span>
                </motion.div>
            ))}

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
                className="absolute bottom-8 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
