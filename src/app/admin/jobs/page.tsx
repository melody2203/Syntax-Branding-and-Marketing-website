"use client";

import { useState, useEffect } from "react";
import { Plus, Search, MoreVertical, Trash2, Edit2, ExternalLink } from "lucide-react";
import { getJobs, Job } from "@/lib/storage";

export default function JobManagement() {
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setJobs(getJobs());
    }, []);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h1 className="text-4xl font-serif text-white">Jobs Management</h1>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-500 transition-all shadow-[0_10px_30px_rgba(0,102,255,0.2)]">
                    <Plus size={18} /> Add New Job
                </button>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-white placeholder:text-gray-600"
                        />
                    </div>
                    <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <button className="px-4 py-2 text-white border-b-2 border-blue-600">All</button>
                        <button className="px-4 py-2 hover:text-white transition-colors">Active</button>
                        <button className="px-4 py-2 hover:text-white transition-colors">Draft</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Position</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Location</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Applicants</th>
                                <th className="text-right py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="border-b border-white/[0.02] last:border-0 hover:bg-white/[0.02] transition-colors group">
                                    <td className="py-6 px-10">
                                        <p className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{job.title}</p>
                                    </td>
                                    <td className="py-6 px-10 text-gray-400">{job.location}</td>
                                    <td className="py-6 px-10">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${job.status === 'Active' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-gray-500/10 text-gray-500 border border-gray-500/20'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="py-6 px-10 font-medium text-gray-300">{job.applicants}</td>
                                    <td className="py-6 px-10">
                                        <div className="flex items-center justify-end gap-3 text-gray-500">
                                            <button className="p-2 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all" title="Edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2 hover:text-white transition-all">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
