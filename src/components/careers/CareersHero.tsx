"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CareersHero() {
    return (
        <section className="relative min-h-[90vh] bg-[#D1FF00] pt-32 pb-20 overflow-hidden flex flex-col justify-between">
            <div className="container mx-auto px-6 md:px-12 relative z-10 h-full flex flex-col">
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs uppercase tracking-[0.2em] font-bold text-black mb-12 block"
                    >
                        CAREERS
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-7xl md:text-9xl font-serif text-black leading-[0.9] tracking-tight mb-20"
                    >
                        A journey.<br />Not just a job.
                    </motion.h1>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mt-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="max-w-md"
                        >
                            <h2 className="text-3xl md:text-4xl font-serif text-black leading-tight mb-12">
                                Curious to explore how we can grow together? Check our open positions.
                            </h2>
                            <button
                                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group flex items-center gap-4 bg-black/10 backdrop-blur-sm px-8 py-5 rounded-full text-black font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                            >
                                LOOKING FOR A JOB? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Checkerboard Pattern Overlay/Graphic */}
                        <div className="hidden lg:block relative w-96 h-96 opacity-20 pointer-events-none">
                            <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className={i % 2 === 0 ? 'bg-black' : 'bg-transparent'} />
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#D1FF00] via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D1FF00] via-transparent to-transparent" />
                            <div className="absolute inset-0 blur-3xl bg-[#D1FF00]/50" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Images from Screenshot */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="absolute top-1/4 right-[5%] w-64 h-64 z-20 hidden xl:block"
            >
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                        alt="Colleague laughing"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="absolute top-[5%] right-[20%] w-80 h-96 z-10 hidden xl:block"
            >
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
                        alt="Workplace setup"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
