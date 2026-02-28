"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#020202]">
            {/* Abstract Background Elements - Subtle Blue Glows */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-800/20 rounded-full blur-[160px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-10"
                >
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-[100px] font-normal tracking-tight leading-[1.05] text-white">
                        House of Engineers. <br className="hidden md:block" />
                        Big enough to deliver, <br className="hidden md:block" />
                        <span className="text-gray-400">small enough to care.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We architect, build and test IT solutions for Fortune 500, SMEs and startups of all sizes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                        >
                            Start a Project
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
