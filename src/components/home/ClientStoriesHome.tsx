"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
    {
        id: "fintech-dashboard",
        name: "Fintech Dashboard",
        category: "Web Application",
        description: "A comprehensive financial management platform for modern enterprises.",
        bgClass: "from-blue-500 to-indigo-600",
        logo: <span className="text-4xl font-bold tracking-tighter text-white underline decoration-blue-200">FIN</span>
    },
    {
        id: "ecommerce-mobile-app",
        name: "E-commerce Mobile app",
        category: "Mobile Design",
        description: "A seamless shopping experience built for global retail brands.",
        bgClass: "from-blue-600 to-blue-800",
        logo: <span className="text-4xl font-black tracking-tight text-white italic">SHOP</span>
    },
    {
        id: "health-care-portal",
        name: "Health care portal",
        category: "Enterprise Software",
        description: "Secure and efficient patient management for healthcare providers.",
        bgClass: "from-blue-700 to-blue-950",
        logo: <span className="text-4xl font-serif italic text-white">Care+</span>
    },
    {
        id: "car-rental-management",
        name: "Car rental management system",
        category: "SaaS Platform",
        description: "End-to-end fleet management and booking system for rental agencies.",
        bgClass: "from-slate-700 to-slate-900",
        logo: <span className="text-4xl font-bold tracking-widest text-white uppercase">DRIVE</span>
    }
];

export function ClientStoriesHome() {
    return (
        <section id="client-stories" className="py-24 bg-white text-black overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif lg:leading-[1.1] mb-16 max-w-5xl text-black">
                    We architect, build and test IT solutions for Fortune 500, SMEs and startups of all sizes.
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16">
                    <span className="text-xl font-medium text-gray-700">Check out all selected work</span>
                    <Link href="/projects" className="bg-[#D1FF00] text-black px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#b8e600] transition-colors w-fit text-sm tracking-wide shadow-sm">
                        VIEW PROJECTS <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Horizontal scroll section */}
            <div className="w-full overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing px-6 md:px-12">
                <div className="flex gap-8 w-max">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-[340px] md:w-[480px] flex flex-col group"
                        >
                            <div className={`relative w-full aspect-[4/3] rounded-[32px] overflow-hidden mb-8 bg-gradient-to-br ${story.bgClass} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                                <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-700">
                                    {story.logo}
                                </div>
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Link
                                        href={`/projects/${story.id}`}
                                        className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{story.category}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-black">{story.name}</h3>
                                <p className="text-lg text-gray-500 leading-relaxed font-sans line-clamp-2">
                                    {story.description}
                                </p>
                                <Link
                                    href={`/projects/${story.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-black border-b-2 border-black/10 hover:border-blue-600 transition-colors pt-2"
                                >
                                    SEE DETAIL <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
