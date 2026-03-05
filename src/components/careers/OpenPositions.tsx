"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, Search, Briefcase } from "lucide-react";

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

    const filteredJobs = INITIAL_JOBS.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            className="w-full pl-16 pr-6 py-5 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all text-lg"
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
                                    onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="px-4 py-1.5 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-gray-600">
                                                    {job.department}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
                                                    <MapPin size={14} /> {job.location}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-serif group-hover:text-blue-600 transition-colors">
                                                {job.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-8">
                                            <div className="hidden md:block text-right">
                                                <p className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-1">TYPE</p>
                                                <p className="text-lg font-medium">{job.type}</p>
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
                                                <div className="pt-12 mt-12 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-12">
                                                    <div className="lg:col-span-2">
                                                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                                            <Briefcase size={20} /> About the role
                                                        </h4>
                                                        <p className="text-xl text-gray-600 leading-relaxed">
                                                            {job.description}
                                                        </p>
                                                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                                            <button className="bg-black text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
                                                                APPLY FOR THIS ROLE
                                                            </button>
                                                            <button className="border border-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                                                                SEE FULL DESCRIPTION
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="bg-gray-50 p-8 rounded-2xl">
                                                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Quick Details</h4>
                                                        <div className="space-y-6">
                                                            <div>
                                                                <p className="text-sm text-gray-500 mb-1 flex items-center gap-2 italic"><Clock size={14} /> Posted 2 days ago</p>
                                                                <p className="font-bold">Compensation: {job.salary}</p>
                                                            </div>
                                                            <div className="w-full h-px bg-gray-200" />
                                                            <p className="text-gray-600 text-sm">
                                                                * Syntax is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredJobs.length === 0 && (
                        <div className="text-center py-20 bg-white border border-dashed border-gray-200 rounded-2xl">
                            <p className="text-2xl font-serif text-gray-400 mb-4">No positions found for &quot;{searchTerm}&quot;</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="text-black font-bold underline underline-offset-4 hover:text-blue-600"
                            >
                                Clear search
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
