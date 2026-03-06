"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#client-stories" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Testimonials", href: "/#testimonials" },
];

const SERVICES_DROPDOWN = [
    {
        name: "Custom software development",
        href: "/services/custom-software-development",
        icon: (
            <div className="w-12 h-12 bg-[#D1FF00] grid grid-cols-2 grid-rows-2">
                <div className="bg-black w-full h-full rounded-br-full"></div>
                <div className="bg-black w-full h-full rounded-bl-full"></div>
                <div className="bg-black w-full h-full rounded-tr-full"></div>
                <div className="bg-black w-full h-full rounded-tl-full"></div>
            </div>
        )
    },
    {
        name: "DevOps and Migrations",
        href: "/services/devops-and-migrations",
        icon: (
            <div className="w-12 h-12 bg-[#D1FF00] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-black"></div>
                <div className="absolute top-0 left-0 border-[16px] border-transparent border-t-black border-l-black"></div>
            </div>
        )
    },
    {
        name: "Software testing and QA",
        href: "/services/software-testing-and-qa",
        icon: (
            <div className="w-12 h-12 bg-[#D1FF00] flex items-end justify-start">
                <div className="w-8 h-8 bg-black border-b-[8px] border-l-[8px] border-[#D1FF00] mb-2 ml-2"></div>
            </div>
        )
    },
    {
        name: "Consulting",
        href: "/services/consulting",
        icon: (
            <div className="w-12 h-12 bg-[#D1FF00] grid grid-cols-2">
                <div className="bg-black w-full h-full rounded-r-full"></div>
                <div className="bg-black w-full h-full rounded-l-full"></div>
            </div>
        )
    },
    {
        name: "Building digital products end-to-end",
        href: "/services/building-digital-products",
        icon: (
            <div className="w-12 h-12 bg-[#D1FF00] flex items-center justify-center p-1">
                <div className="w-full h-full border-[8px] border-black rounded-full">
                </div>
            </div>
        )
    }
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClasses = mounted
        ? isScrolled ? "py-4 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm" : "py-6 bg-transparent border-transparent"
        : "py-6 bg-transparent border-transparent";

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                headerClasses,
                hoveredLink === "Services" ? "bg-white" : ""
            )}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
                    Syntax<span className="text-blue-600">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 relative h-full">
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center py-4 text-[11px] uppercase tracking-widest font-bold cursor-pointer"
                            onMouseEnter={() => setHoveredLink(link.name)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "transition-colors flex items-center gap-1",
                                    hoveredLink === link.name ? "text-blue-600" : "text-gray-500 hover:text-black"
                                )}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                    <Link
                        href="/#contact"
                        className="px-8 py-3 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-black transition-all shadow-lg shadow-blue-500/20 ml-4 hover:shadow-black/20"
                    >
                        GET STARTED
                    </Link>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-gray-600 hover:text-black"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {hoveredLink === "Services" && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden"
                    >
                        <div className="container mx-auto pl-6 md:pl-12 flex">
                            {/* Services Grid */}
                            <div className="w-full flex overflow-x-auto no-scrollbar">
                                {SERVICES_DROPDOWN.map((service, index) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="group relative min-w-[280px] w-1/4 py-12 px-8 flex flex-col justify-between border-r border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer min-h-[280px]"
                                    >
                                        <h3 className="text-black text-xl font-medium leading-tight mb-8 group-hover:text-blue-600 transition-colors">
                                            {service.name}
                                        </h3>
                                        <div className="flex items-end justify-between mt-auto">
                                            <div className="opacity-100 group-hover:scale-110 transition-transform">
                                                {service.icon}
                                            </div>
                                            <div className="text-gray-300 group-hover:text-blue-600 transition-colors">
                                                {index === 2 ? <ArrowUpRight size={24} /> : <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />}
                                                {index !== 2 && <ArrowRight size={24} className="absolute bottom-12 right-8 opacity-100 group-hover:opacity-0 transition-opacity" />}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl h-screen overflow-y-auto pb-24 border-t border-gray-100"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-bold text-gray-600 hover:text-black transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-10 py-4 rounded-full bg-blue-600 text-white text-base font-bold hover:bg-black transition-all w-11/12 text-center mt-4 shadow-xl shadow-blue-500/20"
                        >
                            GET STARTED
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
