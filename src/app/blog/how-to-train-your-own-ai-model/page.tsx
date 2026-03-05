import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white pb-24">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row min-h-[70vh] w-full mt-[80px]">
                {/* Left - Image (Placeholder) */}
                <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full bg-zinc-200 relative">
                    {/* Replacing actual image with a solid color/placeholder for now to mimic structural layout. 
                         In a real app, an <Image> component would go here. */}
                    <div className="absolute inset-0 bg-blue-900/10 flex flex-col justify-end p-12">
                        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 w-3/4 blur-[2px]">
                            {/* Abstract decorative elements simulating screen contents */}
                            <div className="w-1/2 h-4 bg-black/20 rounded mb-4"></div>
                            <div className="w-full h-2 bg-black/10 rounded mb-2"></div>
                            <div className="w-3/4 h-2 bg-black/10 rounded mb-2"></div>
                        </div>
                    </div>
                </div>

                {/* Right - Title */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-[#eef1f0]">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111] leading-[1.1] tracking-tight">
                        How to Train Your Own AI Model: A 7-Step Guide for 2025
                    </h1>
                </div>
            </header>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 mt-24">
                {/* Back Link */}
                <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors mb-16">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>

                <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
                    {/* Left Sidebar - Metadata */}
                    <aside className="w-full md:w-[250px] shrink-0 border-t md:border-t-0 pt-8 md:pt-0">
                        <div className="sticky top-32 space-y-12">
                            <div className="border-b border-gray-200 pb-8 grid grid-cols-2 md:grid-cols-1 gap-2">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest col-span-1">Author</h4>
                                <p className="text-sm font-medium col-span-1 md:mt-2">Jovana Milicevic</p>
                            </div>

                            <div className="border-b border-gray-200 pb-8 grid grid-cols-2 md:grid-cols-1 gap-2">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest col-span-1">Blog Subject</h4>
                                <p className="text-sm font-medium col-span-1 md:mt-2">business, strategy</p>
                            </div>

                            <div className="border-b border-gray-200 pb-8 grid grid-cols-2 md:grid-cols-1 gap-2">
                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest col-span-1">Date</h4>
                                <p className="text-sm font-medium col-span-1 md:mt-2">September 26, 2025</p>
                            </div>
                        </div>
                    </aside>

                    {/* Right Main Content */}
                    <article className="max-w-3xl prose prose-lg prose-headings:font-serif prose-headings:font-normal prose-h2:text-4xl prose-h2:mb-8 prose-p:text-gray-600 prose-p:leading-relaxed">
                        <p className="text-2xl font-bold text-black mb-16 leading-snug">
                            Training an AI model sounds like something only big tech companies can afford to do. But that&apos;s no longer true. <span className="font-normal text-gray-600">And learning how to do it right can give you a competitive edge.</span>
                        </p>

                        <h2 className="text-[#333]">Define Your Problem and Success Metrics</h2>

                        <p>
                            Before even touching code, your first task is clarity: what problem are you solving, and why should a model solve it better than rules or humans?
                        </p>

                        <p>
                            Establishing firm success metrics is critical. An AI model that is computationally perfect but fails to address the underlying business need is a failure. Define what constitutes &quot;good enough&quot; performance for your specific use case. Is it 95% accuracy? Is it a reduction in manual processing time by 40%? Knowing your target prevents endless iteration and resource drain.
                        </p>

                        <h2 className="text-[#333] mt-16">Gathering and Preparing High-Quality Data</h2>
                        <p>
                            Data is the fuel for your model. The quality of your training data directly dictates the quality of your AI&apos;s output. This step often takes the most time and requires meticulous attention to detail.
                        </p>
                        <p>
                            Focus on gathering a dataset that is not only large but diverse and representative of the real-world scenarios your model will encounter. Cleaning this data—removing duplicates, handling missing values, and addressing biases—is arguably more important than the choice of algorithm itself.
                        </p>
                        <h2 className="text-[#333] mt-16">Choosing the Right Architecture</h2>
                        <p>
                            With a clear problem and verified data, you can select the appropriate underlying architecture. In 2025, you are rarely training from absolute scratch. Leveraging foundation models and fine-tuning them for your specific domain is the most efficient path to deployment.
                        </p>
                    </article>
                </div>
            </div>
        </main>
    );
}
