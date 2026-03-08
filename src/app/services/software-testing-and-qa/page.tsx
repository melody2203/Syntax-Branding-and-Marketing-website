import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SoftwareTestingAndQA() {
    return (
        <main className="min-h-screen bg-white text-black pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <Link href="/#services" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mb-8 group transition-colors">
                        <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="w-24 h-24 bg-[#D1FF00] flex items-end justify-start mb-12 shadow-sm rounded-xl overflow-hidden">
                        <div className="w-16 h-16 bg-black border-b-[16px] border-l-[16px] border-[#D1FF00] mb-4 ml-4"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-serif">
                        Software Testing <br />
                        <span className="text-gray-400">& QA.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
                        Deliver flawless experiences to your users. Our comprehensive QA protocols, blending automated and manual testing, ensure your product is bug-free, secure, and performs optimally under any load.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-gray-100 bg-gray-50 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-black font-serif">Automated Excellence</h3>
                            <p className="text-gray-600">We build robust test suites that catch regressions instantly, allowing your developers to focus on features instead of fixes.</p>
                        </div>
                        <div className="p-8 border border-gray-100 bg-gray-50 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-black font-serif">Performance Driven</h3>
                            <p className="text-gray-600">Don&apos;t let scale break your system. We simulate extreme traffic and stress-test your architecture to guarantee stability during peak usage.</p>
                        </div>
                    </div>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                    >
                        Ensure Quality Today
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
