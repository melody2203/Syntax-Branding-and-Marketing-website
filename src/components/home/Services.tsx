"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Cloud, Palette, Shield, Code2, Cpu } from "lucide-react";

const services = [
    {
        icon: <MonitorSmartphone size={24} className="text-blue-400" />,
        title: "Web & Mobile App Dev",
        description: "High-performance, scalable applications built with modern frameworks and best practices."
    },
    {
        icon: <Palette size={24} className="text-purple-400" />,
        title: "UI/UX Design",
        description: "Intuitive, user-centered designs that drive engagement and create lasting impressions."
    },
    {
        icon: <Cloud size={24} className="text-blue-400" />,
        title: "Cloud Solutions",
        description: "Cloud-native architectures and migrations ensuring high availability and scalability."
    },
    {
        icon: <Shield size={24} className="text-purple-400" />,
        title: "Cybersecurity",
        description: "Proactive security measures and audits to keep your applications and data secure."
    },
    {
        icon: <Code2 size={24} className="text-blue-400" />,
        title: "Custom Software",
        description: "Tailored enterprise solutions designed specifically for your unique business logic."
    },
    {
        icon: <Cpu size={24} className="text-purple-400" />,
        title: "AI Integration",
        description: "Leverage the power of generative AI and machine learning in your workflows."
    }
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-[#050505] relative z-10 border-y border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Expertise</h2>
                    <p className="text-gray-400 text-lg">
                        Comprehensive digital services designed to accelerate your growth and dominate the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors group cursor-default"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
