import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuildingDigitalProducts() {
    return (
        <main className="min-h-screen bg-[#020202] text-white pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <Link href="/#services" className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2 mb-8 group transition-colors">
                        <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="w-24 h-24 bg-[#D1FF00] flex items-center justify-center p-2 mb-12">
                        <div className="w-full h-full border-[16px] border-black rounded-full grid grid-cols-2">
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Digital Products <br />
                        <span className="text-gray-500">End-to-End.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
                        From ideation to launch, we are your dedicated product team. As a startup, we understand the hustle. We build intuitive, market-ready digital products that resonate with your users and drive growth.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-4 text-white">User-Centric Design</h3>
                            <p className="text-gray-400">We prioritize UX/UI. Every feature we build is designed to be intuitive, engaging, and aligned with your brand identity.</p>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Full-Stack Delivery</h3>
                            <p className="text-gray-400">No need to hire multiple agencies. We handle everything from frontend aesthetics to backend architecture and database management.</p>
                        </div>
                    </div>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                    >
                        Build Your Vision
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
