import Link from "next/link";
import { ArrowRight } from "lucide-react";

const RECENT_POSTS = [
    {
        title: "How to Train Your Own AI Model: A 7-Step Guide for 2025",
        excerpt: "Training an AI model sounds like something only big tech companies can afford to do. But that's no longer true.",
        author: "Jovana Milicevic",
        date: "September 26, 2025",
        href: "/blog/how-to-train-your-own-ai-model"
    },
    {
        title: "The Future of Web Development: What to Expect Next Year",
        excerpt: "Explore the emerging trends that will shape the digital landscape, from new frameworks to advanced capabilities.",
        author: "Alex Morgan",
        date: "October 12, 2025",
        href: "/blog" // Placeholder
    }
];

export function BlogPreview() {
    return (
        <section id="blog" className="py-24 bg-[#020202]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Latest from <span className="text-gray-500">our blog.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Insights, strategies, and technical guides from our startup experts.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-white font-medium hover:text-blue-500 transition-colors group"
                    >
                        View all articles
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {RECENT_POSTS.map((post, index) => (
                        <Link
                            key={index}
                            href={post.href}
                            className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{post.date}</span>
                                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 mb-6 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <p className="text-sm text-gray-500 font-medium">By {post.author}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
