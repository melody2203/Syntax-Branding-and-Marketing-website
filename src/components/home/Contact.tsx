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
        <section id="contact" className="py-32 bg-white relative z-10 border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif text-black mb-6">
                            Let&apos;s build something extraordinary.
                        </h2>
                        <p className="text-gray-500 text-lg mb-16">
                            Have a project in mind? We&apos;d love to hear about it. Drop us a message and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} className="group-hover:text-white text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1 uppercase text-xs tracking-widest">Email Us</h4>
                                    <a href="mailto:hello@syntax.dev" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">hello@syntax.dev</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                                    <Phone size={24} className="group-hover:text-white text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1 uppercase text-xs tracking-widest">Call Us</h4>
                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors text-lg">+1 (555) 123-4567</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 group cursor-pointer">
                                <div className="w-14 h-14 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} className="group-hover:text-white text-blue-600 transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-black font-bold mb-1 uppercase text-xs tracking-widest">Visit Us</h4>
                                    <p className="text-gray-600 text-lg">123 Innovation Drive<br />Tech District, San Francisco</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 border border-gray-100 p-10 md:p-12 rounded-[40px] shadow-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-[0.2em] ml-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all placeholder:text-gray-300"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-[0.2em] ml-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all placeholder:text-gray-300"
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-[0.2em] ml-1">Project Details</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-5 text-black focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all resize-none placeholder:text-gray-300"
                                    placeholder="Tell us about your project goals..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30"
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
