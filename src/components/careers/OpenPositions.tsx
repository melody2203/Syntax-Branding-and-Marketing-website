"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, Search, Briefcase, User, Mail, Phone, Globe, Send } from "lucide-react";

const INITIAL_JOBS = [
    {
        id: "1",
        title: "Senior Full-stack Engineer",
        department: "Engineering",
        location: "Remote / Belgrade",
        type: "Full-time",
        salary: "$80k - $120k",
        description: "Join our core team building high-scale fintech applications using Next.js, Node.js and PostgreSQL."
    },
    {
        id: "2",
        title: "iOS Developer (Swift/SwiftUI)",
        department: "Engineering",
        location: "Remote",
        type: "Contract",
        salary: "$60/hr - $90/hr",
        description: "Architect and develop premium mobile experiences for our Fortune 500 clients."
    },
    {
        id: "3",
        title: "Product Designer",
        department: "Design",
        location: "Belgrade",
        type: "Full-time",
        salary: "$50k - $75k",
        description: "Shape the visual and interactive identity of digital products used by millions."
    },
    {
        id: "4",
        title: "DevOps Engineer",
        department: "Operations",
        location: "Remote",
        type: "Full-time",
        salary: "$90k - $130k",
        description: "Manage AWS infrastructure, CI/CD pipelines and ensure 99.9% uptime for global platforms."
    }
];

export function OpenPositions() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeJob, setActiveJob] = useState<string | null>(null);
    const [isApplying, setIsApplying] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        portfolio: ""
    });

    const filteredJobs = INITIAL_JOBS.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleApplySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsApplying(true);
        // Simulate submission
        setTimeout(() => {
            setIsApplying(false);
            setFormSubmitted(true);
            setFormData({ name: "", email: "", phone: "", portfolio: "" });
        }, 1500);
    };

    return (
        <section id="open-positions" className="py-32 bg-gray-50 text-black">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-serif mb-8 tracking-tight">Open positions</h2>
                        <p className="text-xl text-gray-600">Join a team where your talent meets purpose. We are looking for extraordinary people to build extraordinary things.</p>
                    </div>

                    <div className="relative group max-w-sm w-full">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search by role or department..."
                            className="w-full pl-16 pr-6 py-5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredJobs.map((job) => (
                            <motion.div
                                key={job.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-black/10 hover:shadow-xl transition-all duration-300"
                            >
                                <div
                                    className="p-8 md:p-12 cursor-pointer"
                                    onClick={() => {
                                        setActiveJob(activeJob === job.id ? null : job.id);
                                        setFormSubmitted(false);
                                    }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-4 py-1.5 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-600 font-sans">
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500 font-sans">
                                                    <MapPin size={14} /> {job.location}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-serif group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-8">
                                            <div className="hidden md:block text-right">
                                                <p className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-1 font-sans">TYPE</p>
                                                <p className="text-lg font-medium font-sans">{job.type}</p>
                                            </div>
                                            <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                                                <ArrowRight size={24} className={activeJob === job.id ? 'rotate-90' : 'group-hover:-rotate-45'} />
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {activeJob === job.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-12 mt-12 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16">
                                                    <div>
                                                        <h4 className="text-xl font-bold mb-6 flex items-center gap-2 font-serif">
                                                            <Briefcase size={22} className="text-blue-600" /> About the role
                                                        </h4>
                                                        <p className="text-xl text-gray-600 leading-relaxed font-sans mb-8">
                                                            {job.description}
                                                        </p>

                                                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 font-sans">Quick Details</h4>
                                                            <div className="space-y-4">
                                                                <p className="font-bold font-sans">Compensation: {job.salary}</p>
                                                                <p className="text-sm text-gray-500 flex items-center gap-2 italic font-sans"><Clock size={14} /> Posted 2 days ago</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white border border-gray-200 p-8 rounded-[40px] shadow-sm">
                                                        {formSubmitted ? (
                                                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                                                    <Send size={32} />
                                                                </div>
                                                                <h4 className="text-2xl font-serif mb-2">Application Sent!</h4>
                                                                <p className="text-gray-500 font-sans">We&apos;ll review your profile and get back to you soon.</p>
                                                            </div>
                                                        ) : (
                                                            <form onSubmit={handleApplySubmit} className="space-y-6">
                                                                <h4 className="text-2xl font-serif mb-6">Apply for this role</h4>

                                                                <div className="space-y-2">
                                                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                                                    <div className="relative">
                                                                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                                        <input
                                                                            type="text"
                                                                            required
                                                                            placeholder="John Doe"
                                                                            value={formData.name}
                                                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-sans"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="space-y-2">
                                                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                                                                        <div className="relative">
                                                                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                                            <input
                                                                                type="email"
                                                                                required
                                                                                placeholder="john@example.com"
                                                                                value={formData.email}
                                                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-sans"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="space-y-2">
                                                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone</label>
                                                                        <div className="relative">
                                                                            <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                                            <input
                                                                                type="tel"
                                                                                required
                                                                                placeholder="+1 (555) 000-0000"
                                                                                value={formData.phone}
                                                                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-sans"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-2">
                                                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Portfolio Link</label>
                                                                    <div className="relative">
                                                                        <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                                        <input
                                                                            type="url"
                                                                            placeholder="https://yourportfolio.com"
                                                                            value={formData.portfolio}
                                                                            onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                                                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-600 transition-all font-sans"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <button
                                                                    type="submit"
                                                                    disabled={isApplying}
                                                                    className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2"
                                                                >
                                                                    {isApplying ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Submit Application <Send size={18} /></>}
                                                                </button>
                                                            </form>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
