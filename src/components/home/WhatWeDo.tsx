"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Cpu, Code2, Cloud, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "custom-software",
        name: "Custom software development",
        href: "/services/custom-software-development",
        icon: (
            <div className="w-8 h-8 bg-[#D1FF00] grid grid-cols-2 grid-rows-2">
                <div className="bg-black w-full h-full rounded-br-full"></div>
                <div className="bg-black w-full h-full rounded-bl-full"></div>
                <div className="bg-black w-full h-full rounded-tr-full"></div>
                <div className="bg-black w-full h-full rounded-tl-full"></div>
            </div>
        ),
        subServices: [
            { name: "Front-end and back-end development", icon: <Code2 size={24} /> },
            { name: "AI and Machine learning", icon: <Cpu size={24} /> },
            { name: "Mobile application development", icon: <MonitorSmartphone size={24} /> }
        ]
    },
    {
        id: "devops",
        name: "DevOps and Migrations",
        href: "/services/devops-and-migrations",
        icon: (
            <div className="w-8 h-8 bg-[#D1FF00] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-5 h-5 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 bg-black"></div>
                <div className="absolute top-0 left-0 border-[10px] border-transparent border-t-black border-l-black"></div>
            </div>
        ),
        subServices: [
            { name: "Cloud Native Architectures", icon: <Cloud size={24} /> },
            { name: "CI/CD Automation", icon: <Code2 size={24} /> },
            { name: "Security and Compliance", icon: <Shield size={24} /> }
        ]
    },
    {
        id: "qa",
        name: "Software testing and QA",
        href: "/services/software-testing-and-qa",
        icon: (
            <div className="w-8 h-8 bg-[#D1FF00] flex items-end justify-start">
                <div className="w-5 h-5 bg-black border-b-[5px] border-l-[5px] border-[#D1FF00] mb-1 ml-1"></div>
            </div>
        ),
        subServices: [
            { name: "Automated Testing", icon: <Code2 size={24} /> },
            { name: "Performance Testing", icon: <Cpu size={24} /> },
            { name: "Security Auditing", icon: <Shield size={24} /> }
        ]
    },
];

export function WhatWeDo() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="py-24 bg-[#eef4f4] text-black">
            <div className="container mx-auto px-6 md:px-12">
                <p className="text-sm font-bold tracking-widest uppercase mb-8">What we do</p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-20 max-w-5xl text-[#1a1a1a]">
                    We've taken products from napkins to definition to implementation to deployment to scaling to maintenance, and every step in between.
                </h2>

                <div className="flex flex-col lg:flex-row border-t-2 border-white">
                    {/* Left side list */}
                    <div className="w-full lg:w-1/3 flex flex-col pt-8">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service)}
                                className={cn(
                                    "text-left py-6 px-6 flex items-center gap-4 transition-colors font-medium border-b-2",
                                    activeService.id === service.id
                                        ? "bg-white border-white shadow-sm"
                                        : "bg-transparent border-transparent hover:bg-white/30"
                                )}
                            >
                                <div className="shrink-0">{service.icon}</div>
                                <span className="text-xl">{service.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right side content */}
                    <div className="w-full lg:w-2/3 bg-white p-8 md:p-16 shadow-sm min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-3xl md:text-4xl font-medium mb-8 text-[#1a1a1a]">{activeService.name}</h3>
                                <Link
                                    href={activeService.href}
                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D1FF00] text-black text-sm font-bold hover:bg-[#b8e600] transition-colors mb-12"
                                >
                                    MORE <ArrowRight size={16} />
                                </Link>

                                <div className="space-y-0">
                                    {activeService.subServices.map((sub, idx) => (
                                        <div key={idx} className="flex items-center justify-between py-6 border-b border-black/5 last:border-b-0">
                                            <span className="text-lg font-medium text-gray-800">{sub.name}</span>
                                            <div className="text-gray-400">
                                                {sub.icon}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
