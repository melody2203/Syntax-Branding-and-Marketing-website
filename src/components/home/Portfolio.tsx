"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const portfolioItems = [
    {
        title: "Fintech Dashboard",
        category: "Web Application",
        bgClass: "from-blue-500/20 to-cyan-500/20",
        size: "md:col-span-2 md:row-span-2",
    },
    {
        title: "E-Commerce Mobile App",
        category: "Mobile Design",
        bgClass: "from-purple-500/20 to-pink-500/20",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Healthcare Portal",
        category: "Enterprise Software",
        bgClass: "from-emerald-500/20 to-teal-500/20",
        size: "md:col-span-1 md:row-span-1",
    },
    {
        title: "AI CRM System",
        category: "SaaS Platform",
        bgClass: "from-orange-500/20 to-red-500/20",
        size: "md:col-span-2 md:row-span-1",
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden bg-[#020202]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">Selected Work</h2>
                        <p className="text-gray-400 text-lg">
                            A glimpse into the digital products we've brought to life for forward-thinking brands.
                        </p>
                    </div>
                    <Link href="#" className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-colors group">
                        <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] ${item.size} cursor-pointer`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgClass} opacity-20 group-hover:opacity-60 transition-opacity duration-500`} />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                            <div className="absolute inset-x-8 bottom-8 translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 mb-2">{item.category}</p>
                                        <h3 className="text-3xl font-serif text-white">{item.title}</h3>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
