"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "99%", label: "Client Retention" },
    { value: "10+", label: "Years Experience" },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#020202] border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                        Syntax in numbers
                    </h2>
                </motion.div>
            </div>

            {/* Marquee Container */}
            <div className="w-full relative overflow-hidden flex whitespace-nowrap py-10">
                <div className="inline-flex w-max animate-marquee gap-16 px-8">
                    {/* First instance */}
                    {stats.map((stat, i) => (
                        <div key={`stat-1-${i}`} className="flex items-end gap-4 min-w-[250px]">
                            <span className="text-6xl md:text-8xl font-serif text-blue-500 font-normal leading-none">{stat.value}</span>
                            <span className="text-xl md:text-2xl text-white font-medium mb-2">{stat.label}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless infinite scroll */}
                    {stats.map((stat, i) => (
                        <div key={`stat-2-${i}`} className="flex items-end gap-4 min-w-[250px]">
                            <span className="text-6xl md:text-8xl font-serif text-blue-500 font-normal leading-none">{stat.value}</span>
                            <span className="text-xl md:text-2xl text-white font-medium mb-2">{stat.label}</span>
                        </div>
                    ))}
                    {/* Triplicate for seamless infinite scroll on wide screens */}
                    {stats.map((stat, i) => (
                        <div key={`stat-3-${i}`} className="flex items-end gap-4 min-w-[250px]">
                            <span className="text-6xl md:text-8xl font-serif text-blue-500 font-normal leading-none">{stat.value}</span>
                            <span className="text-xl md:text-2xl text-white font-medium mb-2">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
