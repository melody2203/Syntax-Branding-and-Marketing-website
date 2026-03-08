"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";


type SquareOverlay = {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    size: string;
    type?: 'diamond' | 'triangle' | 'square';
};

type ValueCard = {
    title: string;
    desc: string;
    img: string;
    squares: SquareOverlay[];
};

const VALUES: ValueCard[] = [
    {
        title: "Be curious",
        desc: "Search for how things are done, and how they can be done better. Challenge status quo.",
        img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        squares: [
            { top: "-4%", left: "-4%", size: "12" },
            { top: "-4%", right: "-4%", size: "16" },
            { bottom: "-4%", left: "20%", size: "10" }
        ]
    },
    {
        title: "Grow",
        desc: "Grow knowledge and skills and lift others along the way. Personal and business growth go hand in hand.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        squares: [
            { top: "10%", right: "-8%", size: "24", type: "diamond" }
        ] // Uses a large diamond shape overlay
    },
    {
        title: "Be accountable",
        desc: "Proud of the wins. Honest about the rest. Always accountable.",
        img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        squares: [
            { top: "30%", left: "-10%", size: "16" },
            { bottom: "10%", left: "10%", size: "12" }
        ]
    },
    {
        title: "Act long run",
        desc: "Work in sprints, but think like a marathoner. Long term results matter.",
        img: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
        squares: [
            { bottom: "-5%", right: "-5%", size: "20", type: "triangle" }
        ]
    }
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animation Transforms for the geometric grid
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "50%", "0%"]);

    return (
        <main className="bg-white min-h-screen text-black font-sans pt-24">
            {/* 1. Our Story Section */}
            <section className="py-24 container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-serif tracking-tight"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans max-w-prose"
                    >
                        Syntax is a premium software development company dedicated to building elite digital products. Founded with a vision to merge technical precision with creative innovation, we provide a high-scale environment where engineering excellence meets impactful delivery. In just over one year, our unwavering commitment to accountability and quality has already earned the trust of clients across 11+ industries—because for us, every project, no matter how new the partnership, is built to the highest standard.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 mt-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-12 rounded-[40px] border border-gray-100"
                    >
                        <h3 className="text-3xl font-serif mb-6 text-black">Our Philosophy</h3>
                        <p className="text-lg text-gray-500 leading-relaxed font-sans">
                            At Syntax, we&apos;re all about mixing technical mastery with strategic thinking to deliver the best possible digital products for our clients. We believe in code that scales and designs that inspire.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 text-white p-12 rounded-[40px] shadow-2xl"
                    >
                        <h3 className="text-3xl font-serif mb-6">Our Mission</h3>
                        <p className="text-lg text-gray-400 leading-relaxed font-sans">
                            Our mission is to empower businesses with cutting-edge software solutions. We architect, build, and scale high-performance digital platforms for startups, scale-ups, and enterprise market leaders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Sticky Scroll Sections (How we do things & Our Mission) */}
            <section ref={containerRef} className="relative h-[200vh]">
                <div className="sticky top-0 h-screen w-full flex">
                    {/* Left Side: Scrolling Content Masked */}
                    <div className="w-1/2 h-full relative overflow-hidden bg-white">
                        <motion.div
                            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
                            className="absolute top-0 left-0 w-full"
                        >
                            {/* Box 1: How we do things */}
                            <div className="h-screen flex flex-col justify-center px-12 lg:px-24">
                                <h2 className="text-6xl md:text-7xl font-serif mb-12">How we do<br />things</h2>
                                <div className="space-y-6 text-lg text-gray-700 max-w-lg">
                                    <p>At Syntax, we&apos;re all about mixing technical mastery with strategic thinking to deliver the best possible digital products for our clients. We believe in code that scales and designs that inspire.</p>
                                    <p>We run in sprints (agile, usually), but essentially we are marathoners - the people we work with and the clients we work for have been with us for a long time.</p>
                                    <p>We&apos;re all about syntax (that&apos;s the art of code) and solutions (that&apos;s the reason we build)—which means every line has purpose.</p>
                                </div>
                            </div>

                            {/* Box 2: Our Mission */}
                            <div className="h-screen flex flex-col justify-center px-12 lg:px-24">
                                <h2 className="text-6xl md:text-7xl font-serif mb-12">Our Mission</h2>
                                <div className="space-y-6 text-lg text-gray-700 max-w-lg">
                                    <p>At Syntax, our mission is to ignite businesses worldwide with cutting-edge software solutions. We create, build, and scale high-performance digital products, serving startups, scale-ups, and enterprise leaders.</p>
                                    <p>Through technical mastery, strategic thinking, and a relentless pursuit of excellence, we help our clients realize their digital ambitions and dominate in an ever-evolving technological landscape.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Sticky Geometric Animation */}
                    <div className="w-1/2 h-full bg-blue-600 flex items-center justify-center relative overflow-hidden shadow-2xl">
                        <motion.div
                            style={{ scale, rotate }}
                            className="grid grid-cols-5 gap-4 md:gap-8"
                        >
                            {[...Array(25)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        borderRadius: i % 2 === 0 ? borderRadius : "0%",
                                        rotate: i % 3 === 0 ? rotate : 0
                                    }}
                                    className={`w-6 h-6 md:w-10 md:h-10 ${i % 2 === 0 ? 'bg-[#00FFAA]' : 'bg-white'}`}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Our Values Section */}
            <section className="py-32 container mx-auto px-6 md:px-12 bg-white">
                <h2 className="text-6xl md:text-8xl font-serif mb-24">Our<br />values</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {VALUES.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[4/3] mb-8 w-full">
                                <div className="absolute inset-0 overflow-hidden bg-gray-100">
                                    <Image
                                        src={val.img}
                                        alt={val.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                {/* Cyan Geometric Overlays */}
                                {val.squares.map((sq, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="absolute bg-[#00FFAA] mix-blend-multiply z-10 transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            top: sq.top,
                                            bottom: sq.bottom,
                                            left: sq.left,
                                            right: sq.right,
                                            width: `${sq.size}px`,
                                            height: `${sq.size}px`,
                                            clipPath: sq.type === 'diamond' ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : sq.type === 'triangle' ? 'polygon(100% 100%, 0 100%, 100% 0)' : 'none'
                                        }}
                                    />
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 font-sans">{val.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-sans">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main >
    );
}
