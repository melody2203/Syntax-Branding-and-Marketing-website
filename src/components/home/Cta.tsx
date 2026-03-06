"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cta() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-50 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-black border border-white/5 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-blue-600/5 mix-blend-screen pointer-events-none" />

                    <h2 className="text-4xl md:text-7xl font-serif mb-8 text-white leading-tight relative z-10">
                        Ready to scale your <br className="hidden md:block" />
                        digital presence?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto relative z-10">
                        Let&apos;s collaborate to build software solutions that engage users, streamline operations, and drive real business growth.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <Link
                            href="#contact"
                            className="px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_10px_30px_rgba(0,102,255,0.2)]"
                        >
                            Start Your Project
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
