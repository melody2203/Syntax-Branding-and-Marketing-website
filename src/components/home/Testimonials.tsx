"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Syntax completely transformed our platform. Their attention to detail and engineering speed is unmatched in the industry.",
        author: "Sarah Jenkins",
        role: "CTO, TechFlow",
    },
    {
        quote: "The team delivered a beautiful, highly performant mobile app that exceeded all our expectations.",
        author: "David Chen",
        role: "Founder, NovaHealth",
    },
    {
        quote: "Partnering with Syntax was the best decision we made for our cloud migration strategy. Flawless execution.",
        author: "Elena Rodriguez",
        role: "VP Engineering, CloudScale",
    }
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden bg-[#020202]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Client Feedback</h2>
                    <p className="text-gray-400 text-lg">
                        Don&apos;t just take our word for it. Here&apos;s what our partners have to say.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="p-10 rounded-2xl border border-white/5 bg-white/[0.02] relative group hover:bg-white/[0.04] transition-colors"
                        >
                            <Quote className="text-blue-600/20 absolute top-8 right-8 group-hover:scale-110 transition-transform" size={48} />
                            <p className="text-gray-300 text-lg leading-relaxed mb-10 relative z-10 font-medium">
                                &quot;{t.quote}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                                    <span className="font-bold">{t.author.charAt(0)}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold flex items-center gap-2">
                                        {t.author}
                                        <div className="w-1 h-1 rounded-full bg-blue-500" />
                                    </h4>
                                    <p className="text-sm text-gray-400 font-medium">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
