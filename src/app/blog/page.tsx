import { BlogPreview } from "@/components/home/BlogPreview";

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-[#020202] text-white pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12 mb-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    Our <span className="text-blue-500">Blog.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                    Discover our latest thoughts, strategies, and technical deep-dives into software development and startups.
                </p>
            </div>
            {/* Reusing the preview component for the index for now */}
            <BlogPreview />
        </main>
    );
}
