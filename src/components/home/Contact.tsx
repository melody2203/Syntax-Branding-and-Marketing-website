"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setFormState({ name: "", email: "", message: "" });
            alert("Message sent successfully!");
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 bg-[#020202] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
                            Let&apos;s build something extraordinary.
                        </h2>
                        <p className="text-gray-400 text-lg mb-16">
                            Have a project in mind? We&apos;d love to hear about it. Drop us a message and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                                    <Mail className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                                    <a href="mailto:hello@syntax.dev" className="text-gray-400 hover:text-white transition-colors text-lg">hello@syntax.dev</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                                    <Phone className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                                    <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors text-lg">+1 (555) 123-4567</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                                    <MapPin className="text-blue-500" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                                    <p className="text-gray-400 text-lg">123 Innovation Drive<br />Tech District, San Francisco</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/[0.02] border border-white/5 p-10 md:p-12 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Project Details</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none"
                                    placeholder="Tell us about your project goals..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)]"
                            >
                                {isSubmitting ? "Sending..." : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
