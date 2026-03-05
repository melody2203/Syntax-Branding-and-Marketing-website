"use client";

import { motion } from "framer-motion";
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

const CAREERS_VALUES: ValueCard[] = [
    {
        title: "Be curious",
        desc: "Search for how things are done, and how they can be done better. Challenge status quo.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        squares: [
            { top: "0", left: "0", size: "60" },
            { top: "0", right: "0", size: "60" },
            { bottom: "0", left: "0", size: "60" }
        ]
    },
    {
        title: "Grow",
        desc: "Grow knowledge and skills and lift others along the way. Personal and business growth go hand in hand.",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
        squares: [
            { top: "10%", right: "10%", size: "120", type: "diamond" }
        ]
    },
    {
        title: "Be accountable",
        desc: "Own the s**t when it's good, and when it's not. Stay behind your decisions, gut and knowledge.",
        img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        squares: [
            { top: "20%", left: "0", size: "80" },
            { top: "20%", left: "40%", size: "80" },
            { top: "20%", left: "80%", size: "80" }
        ]
    },
    {
        title: "Act long run",
        desc: "Work in sprints, but think like a marathoner. Long term results matter.",
        img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
        squares: [
            { bottom: "10%", right: "0", size: "80", type: "triangle" }
        ]
    }
];

export function CareersValues() {
    return (
        <section className="py-32 container mx-auto px-6 md:px-12 bg-white text-black">
            <h2 className="text-7xl md:text-9xl font-serif mb-24 tracking-tight">Our values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100">
                {CAREERS_VALUES.map((val, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col group border-r border-gray-100 last:border-r-0 p-8 pb-12 hover:bg-gray-50/50 transition-colors"
                    >
                        <div className="relative aspect-[4/3] mb-12 w-full">
                            <div className="absolute inset-0 overflow-hidden rounded-sm">
                                <Image
                                    src={val.img}
                                    alt={val.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                                />
                            </div>
                            {/* Vibrant Teal Geometric Overlays from Itekako design */}
                            {val.squares.map((sq, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="absolute bg-[#00FFAA] z-10 transition-transform duration-500 group-hover:scale-105"
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

                        <h3 className="text-3xl font-serif mb-6">{val.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed font-sans">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
