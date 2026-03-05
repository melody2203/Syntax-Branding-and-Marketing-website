"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, Trash2, Edit2, ExternalLink } from "lucide-react";

export default function JobManagement() {
    const [jobs, setJobs] = useState([
        { id: "1", title: "Senior Full-stack Engineer", status: "Active", applicants: 8, location: "Remote" },
        { id: "2", title: "iOS Developer (Swift/SwiftUI)", status: "Active", applicants: 4, location: "Remote" },
        { id: "3", title: "Product Designer", status: "Draft", applicants: 0, location: "Belgrade" },
        { id: "4", title: "DevOps Engineer", status: "Active", applicants: 0, location: "Remote" },
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h1 className="text-4xl font-serif">Jobs Management</h1>
                <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-zinc-800 transition-all">
                    <Plus size={18} /> Add New Job
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black text-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">All</button>
                        <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Active</button>
                        <button className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Draft</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Position</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Location</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Applicants</th>
                                <th className="text-right py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-6 px-10">
                                        <p className="font-bold text-lg">{job.title}</p>
                                    </td>
                                    <td className="py-6 px-10 text-gray-600">{job.location}</td>
                                    <td className="py-6 px-10">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${job.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="py-6 px-10 font-medium">{job.applicants}</td>
                                    <td className="py-6 px-10">
                                        <div className="flex items-center justify-end gap-3 text-gray-400">
                                            <button className="p-2 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete">
                                                <Trash2 size={16} />
                                            </button>
                                            <button className="p-2 hover:text-black transition-all">
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
