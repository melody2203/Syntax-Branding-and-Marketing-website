"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const PROJECTS = {
    "fintech-dashboard": {
        name: "Fintech Dashboard",
        company: "WealthFlow Inc.",
        category: "Financial Technology",
        desc: "A high-performance dashboard designed for enterprise wealth management, featuring real-time data visualization and complex trade execution workflows.",
        features: [
            "Real-time asset tracking with WebSocket integration",
            "Advanced charting using D3.js and Recharts",
            "One-click trade execution with multi-layer verification",
            "Multi-currency support with live exchange rates",
            "Comprehensive compliance and audit logging"
        ],
        technical: "Built with Next.js, TypeScript, and a microservices backend in Go. Uses Tailwind CSS for a premium, high-density UI layout.",
        bg: "bg-blue-600"
    },
    "ecommerce-mobile-app": {
        name: "E-commerce Mobile app",
        company: "Global Retail Solutions",
        category: "Retail & E-commerce",
        desc: "A lightning-fast mobile shopping experience built for a global audience, focusing on conversion optimization and personal recommendations.",
        features: [
            "AI-driven product recommendations",
            "Seamless Apple Pay and Google Pay integration",
            "Real-time inventory tracking across 500+ locations",
            "Push notification system for personalized offers",
            "Augmented Reality (AR) product preview"
        ],
        technical: "Developed using React Native for a native-feel experience on both iOS and Android. Backend powered by Node.js and Redis.",
        bg: "bg-indigo-600"
    },
    "health-care-portal": {
        name: "Health care portal",
        company: "Nexus Health Systems",
        category: "Medical & Healthcare",
        desc: "A secure, HIPAA-compliant portal for patient management, appointment scheduling, and remote consultation.",
        features: [
            "End-to-end encrypted messaging between patient and doctor",
            "Automated appointment scheduling and reminders",
            "Digital health records visualization",
            "Telehealth video integration via WebRTC",
            "Insurance verification automation"
        ],
        technical: "Uses a strictly typed React front-end with a secure Python/Django backend processing sensitive medical data.",
        bg: "bg-slate-800"
    },
    "car-rental-management": {
        name: "Car rental management system",
        company: "DriveFlow Global",
        category: "Automotive & Logistics",
        desc: "An all-in-one SaaS platform for car rental agencies to manage fleets, bookings, and customer maintenance logs.",
        features: [
            "Dynamic pricing engine based on demand and seasonality",
            "IoT integration for real-time vehicle location and health",
            "Automated damage reporting via mobile app",
            "Multi-vendor support for franchise-based agencies",
            "Integrations with major travel booking platforms"
        ],
        technical: "Built as a modular SaaS platform using Next.js, Supabase, and Stripe Connect for vendor payments.",
        bg: "bg-zinc-900"
    }
};

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = PROJECTS[slug as keyof typeof PROJECTS];

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white text-black pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <Link
                    href="/#client-stories"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12 uppercase tracking-widest"
                >
                    <ArrowLeft size={16} /> Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs">For {project.company}</span>
                            <h1 className="text-5xl md:text-7xl font-serif mt-4 mb-8 leading-tight">{project.name}</h1>
                            <p className="text-xl text-gray-600 leading-relaxed font-sans">{project.desc}</p>
                        </div>

                        <div className="space-y-4 pt-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-100 pb-4">Key Features</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {project.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-blue-600 mt-1 shrink-0" />
                                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Technical Stack</h3>
                            <p className="text-gray-600 italic leading-relaxed">{project.technical}</p>
                        </div>

                        <div className="pt-8">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-black text-white font-bold hover:bg-blue-600 transition-all shadow-xl shadow-black/10"
                            >
                                DISCUSS SIMILAR PROJECT <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className={`aspect-square rounded-[60px] ${project.bg} shadow-2xl flex items-center justify-center p-20 relative overflow-hidden`}>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                            <div className="relative z-10 text-center">
                                <h2 className="text- white/10 font-black text-9xl tracking-tighter opacity-20 rotate-[-15deg] select-none uppercase">
                                    {project.name.split(' ')[0]}
                                </h2>
                                <div className="absolute inset-0 flex items-center justify-center shadow-2xl">
                                    <div className="w-full h-1 bg-white/10"></div>
                                </div>
                            </div>
                        </div>

                        {/* Project Quick View */}
                        <div className="absolute -bottom-10 -right-10 w-64 p-8 bg-blue-600 rounded-[32px] text-white shadow-2xl hidden md:block">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Category</span>
                            <p className="text-lg font-bold mt-1">{project.category}</p>
                            <div className="w-8 h-1 bg-white/20 my-4"></div>
                            <p className="text-xs opacity-70 leading-relaxed italic">Delivered on time and within budget, exceeding all KPIs.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
