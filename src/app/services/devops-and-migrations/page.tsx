import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DevOpsAndMigrations() {
    return (
        <main className="min-h-screen bg-[#020202] text-white pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl">
                    <Link href="/#services" className="text-blue-500 hover:text-blue-400 font-medium flex items-center gap-2 mb-8 group transition-colors">
                        <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="w-24 h-24 bg-[#D1FF00] relative overflow-hidden mb-12">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-black"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-black"></div>
                        <div className="absolute top-0 left-0 border-[32px] border-transparent border-t-black border-l-black"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        DevOps & <br />
                        <span className="text-gray-500">Migrations.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
                        Transition your legacy systems to modern cloud infrastructure flawlessly. Our one-year strong startup expertise guarantees secure, zero-downtime migrations and automated deployment pipelines.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-4 text-white">Cloud Native</h3>
                            <p className="text-gray-400">We architecture solutions specifically for AWS, GCP, and Azure, maximizing scalability and minimizing operational costs.</p>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/5 rounded-2xl">
                            <h3 className="text-2xl font-semibold mb-4 text-white">CI/CD Automation</h3>
                            <p className="text-gray-400">Streamline your development lifecycle with automated testing and deployment, allowing your team to ship features faster and safer.</p>
                        </div>
                    </div>

                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                    >
                        Optimize Your Operations
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
