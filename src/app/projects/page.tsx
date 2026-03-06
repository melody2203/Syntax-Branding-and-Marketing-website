"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
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

export default function ProjectsPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-20 text-center mx-auto">
                    <h1 className="text-6xl md:text-8xl font-serif mb-8 text-black">Our Projects</h1>
                    <p className="text-xl text-gray-500 leading-relaxed font-sans">
                        A curated selection of our most impactful digital solutions, from complex fintech ecosystems to high-conversion mobile experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link href={`/projects/${project.id}`}>
                                <div className={`relative aspect-[16/10] rounded-[40px] overflow-hidden bg-gradient-to-br ${project.bgClass} flex items-center justify-center shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2`}>
                                    <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-500"></div>
                                    <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-700">
                                        {project.logo}
                                    </div>
                                    <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-2xl">
                                        <ArrowRight size={28} />
                                    </div>
                                </div>
                                <div className="mt-8 space-y-2">
                                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-sans">{project.category}</span>
                                    <h2 className="text-3xl font-serif text-black">{project.name}</h2>
                                    <p className="text-gray-500 text-lg leading-relaxed">{project.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
