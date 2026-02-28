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
        <section id="portfolio" className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
                        <p className="text-gray-400 text-lg">
                            A glimpse into the digital products we've brought to life for forward-thinking brands.
                        </p>
                    </div>
                    <Link href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                        View all projects
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-2xl overflow-hidden glass border-white/10 ${item.size} cursor-pointer`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Abstract Placeholder graphics */}
                            <div className="absolute inset-0 bg-black/20 mix-blend-overlay" />

                            <div className="absolute inset-x-6 bottom-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm font-medium text-gray-300">{item.category}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
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
