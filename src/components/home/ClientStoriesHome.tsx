"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
    {
        name: "Unity",
        logo: <div className="flex items-center gap-2"><span className="text-5xl font-bold tracking-tighter text-white">Unity</span></div>,
        description: "Internal software tools for support of internal development process",
        bgClass: "from-zinc-800 to-zinc-950",
    },
    {
        name: "coinbase",
        logo: <span className="text-5xl font-medium tracking-tight text-white">coinbase</span>,
        description: "Ensuring Security and Reliability Across Cryptocurrency Applications",
        bgClass: "from-blue-600 to-blue-900",
    },
    {
        name: "STATS PERFORM",
        logo: <div className="flex items-center gap-2"><span className="text-4xl font-black italic tracking-tighter uppercase text-white">Stats<br />Perform</span></div>,
        description: "Who needs excitement that sport brings when you can turn it into numbers",
        bgClass: "from-purple-900 to-zinc-950",
    },
    {
        name: "Atlas Copco",
        logo: <span className="text-4xl font-serif italic text-white">Atlas Copco</span>,
        description: "Heavy duty software for heavy duty industrial equipment for reliable and safe manufacturing",
        bgClass: "from-cyan-700 to-blue-950",
    }
];

export function ClientStoriesHome() {
    return (
        <section id="client-stories" className="py-24 bg-[#020202] text-white overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif lg:leading-[1.1] mb-16 max-w-5xl">
                    We architect, build and test IT solutions for Fortune 500, SMEs and startups of all sizes.
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16">
                    <span className="text-xl font-medium">Check out all client stories</span>
                    <Link href="/#portfolio" className="bg-[#D1FF00] text-black px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-[#b8e600] transition-colors w-fit text-sm tracking-wide">
                        MORE <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

            {/* Horizontal scroll section */}
            <div className="w-full overflow-x-auto no-scrollbar pb-12 cursor-grab active:cursor-grabbing">
                <div className="flex gap-6 px-6 md:px-12 w-max">
                    {stories.map((story, idx) => (
                        <div key={idx} className="w-[320px] md:w-[420px] flex flex-col group">
                            <div className={`relative w-full aspect-[16/9] md:aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-gradient-to-br ${story.bgClass} border border-white/10 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:-translate-y-2`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                {/* Glow effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>
                                <div className="relative z-10 scale-100 group-hover:scale-110 transition-transform duration-700">
                                    {story.logo}
                                </div>
                            </div>
                            <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-serif group-hover:text-gray-300 transition-colors">
                                {story.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
