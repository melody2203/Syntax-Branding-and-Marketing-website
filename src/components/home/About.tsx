"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
    const values = [
        "Innovation at the core",
        "Uncompromising quality",
        "Transparent processes",
        "User-centric design",
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl md:text-6xl font-serif tracking-tight mb-4 text-white">
                                Pioneering the next era of <span className="text-blue-500">digital products.</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                At Syntax, we don&apos;t just write code; we architect solutions that elevate businesses. Our team of expert engineers and designers collaborate to deliver software that is both elegant and robust.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-500" size={20} />
                                    <span className="text-gray-300 font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/5 p-2 bg-white/5">
                            <div className="w-full h-full bg-neutral-900 rounded-xl overflow-hidden relative">
                                {/* Placeholder for an actual team/office image */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-blue-900/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 font-medium">Abstract / Team Preview</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-6 -left-6 bg-[#020202] border border-white/10 p-6 rounded-2xl inline-block shadow-2xl">
                            <div className="text-4xl font-serif text-white">
                                10+
                            </div>
                            <div className="text-sm text-gray-400 font-medium mt-1">Years Experience</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
