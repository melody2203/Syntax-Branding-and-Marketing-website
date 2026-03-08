import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CustomSoftwareDevelopment() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <Link href="/#services" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mb-8 group transition-colors">
                        <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="w-24 h-24 bg-[#D1FF00] grid grid-cols-2 grid-rows-2 mb-12 shadow-sm rounded-xl overflow-hidden">
                        <div className="bg-black w-full h-full rounded-br-full"></div>
                        <div className="bg-black w-full h-full rounded-bl-full"></div>
                        <div className="bg-black w-full h-full rounded-tr-full"></div>
                        <div className="bg-black w-full h-full rounded-tl-full"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-serif">
                        Custom Software <br />
                        <span className="text-gray-400">Development.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                        As a fast-growing startup, we build robust, scalable, and tailored software solutions that solve your unique business challenges. Our modern tech stack ensures high performance and future-proof digital products.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-gray-100 bg-gray-50 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-black font-serif">Startup Speed</h3>
                            <p className="text-gray-600">We move fast. Our agile methodology ensures rapid prototyping and continuous delivery, getting your product to market quicker.</p>
                        </div>
                        <div className="p-8 border border-gray-100 bg-gray-50 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-black font-serif">Enterprise Quality</h3>
                            <p className="text-gray-600">Despite our speed, we never compromise on quality. We enforce strict coding standards and comprehensive testing.</p>
                        </div>
                    </div>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                    >
                        Start Your Project
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
