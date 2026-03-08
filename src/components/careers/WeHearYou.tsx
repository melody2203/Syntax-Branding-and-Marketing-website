"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Music } from "lucide-react";

export function WeHearYou() {
    return (
        <section className="py-32 bg-white text-black overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-7xl md:text-9xl font-serif mb-24 tracking-tight"
                >
                    We hear you
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] rounded-sm overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                            alt="People working together"
                            fill
                            className="object-cover"
                        />
                        {/* Checkerboard graphic overlay */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white pointer-events-none">
                            <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className={i % 2 === 0 ? 'bg-black' : 'bg-transparent'} />
                                ))}
                            </div>
                        </div>
                        {/* Spotify-like green sphere from screenshot */}
                        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-green-500 blur-2xl opacity-60 animate-pulse" />
                        <div className="absolute bottom-16 right-16 w-16 h-16 rounded-full bg-green-400 border-2 border-white/20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <div className="space-y-8 text-xl text-gray-800 leading-relaxed font-sans">
                            <p>
                                We are always aspiring to be a true people-centric company - to our
                                employees and to our clients. This means that when deciding
                                between process fulfilment and people needs, we always try to put
                                people first.
                            </p>
                            <p>
                                We firmly believe in openness and constructive feedback, and
                                our organization is structured in a way that your voice is always
                                heard.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
