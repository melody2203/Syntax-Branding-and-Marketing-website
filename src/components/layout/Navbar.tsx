"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { name: "Client Stories", href: "/#client-stories" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services", hasDropdown: true },
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
                <div className="w-full h-full border-[8px] border-black rounded-full grid grid-cols-2">
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll(); // Check initial scroll position
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent hydration mismatch by not rendering reactive classes on server
    const headerClasses = mounted
        ? isScrolled ? "py-4 bg-[#020202]/90 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent border-transparent"
        : "py-6 bg-transparent border-transparent";

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                headerClasses,
                hoveredLink === "Services" ? "bg-[#020202]" : ""
            )}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Syntax<span className="text-blue-600">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 relative h-full">
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center py-4 text-xs uppercase tracking-widest font-semibold cursor-pointer"
                            onMouseEnter={() => setHoveredLink(link.name)}
                        >
                            <Link
                                href={link.href}
                                className={cn(
                                    "transition-colors flex items-center gap-1",
                                    hoveredLink === link.name ? "text-white" : "text-gray-400 hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                    <Link
                        href="/#contact"
                        className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] ml-4"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
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
                        className="absolute top-full left-0 w-full bg-[#020202] border-t border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="container mx-auto pl-6 md:pl-12 flex">
                            {/* Services Grid */}
                            <div className="w-full flex overflow-x-auto no-scrollbar">
                                {SERVICES_DROPDOWN.map((service, index) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="group relative min-w-[280px] w-1/5 py-10 px-8 flex flex-col justify-between border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer min-h-[250px]"
                                    >
                                        <h3 className="text-white text-lg font-medium leading-tight mb-8 group-hover:text-blue-400 transition-colors">
                                            {service.name}
                                        </h3>
                                        <div className="flex items-end justify-between mt-auto">
                                            <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                                                {service.icon}
                                            </div>
                                            <div className="text-gray-500 group-hover:text-blue-500 transition-colors">
                                                {index === 2 ? <ArrowUpRight size={24} /> : <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />}
                                                {index !== 2 && <ArrowRight size={24} className="absolute bottom-10 right-8 opacity-100 group-hover:opacity-0 transition-opacity" />}
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
                        className="absolute top-full left-0 w-full bg-[#020202]/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden shadow-2xl h-screen overflow-y-auto pb-24"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-6 py-3 rounded-full bg-blue-600 text-white text-base font-semibold hover:bg-blue-500 transition-colors w-11/12 text-center mt-4"
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
