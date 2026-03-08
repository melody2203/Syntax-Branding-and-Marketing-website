"use client";

import { useState, useEffect } from "react";
import { Search, Download, Eye, CheckCircle, XCircle } from "lucide-react";
import { getApplications, Application } from "@/lib/storage";

export default function ApplicationsReview() {
    const [applications, setApplications] = useState<Application[]>([]);

    useEffect(() => {
        setApplications(getApplications());
    }, []);

    return (
        <div className="max-w-7xl mx-auto pb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h1 className="text-4xl font-serif text-white">Applications Review</h1>
                <div className="flex items-center gap-4">
                    <button className="bg-white/[0.05] border border-white/10 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-white/10 flex items-center gap-2 transition-all text-white">
                        <Download size={18} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Filter by name or role..."
                            className="w-full pl-12 pr-4 py-2 rounded-lg bg-black/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-white placeholder:text-gray-600"
                        />
                    </div>
                    <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                        <button className="px-4 py-2 text-white border-b-2 border-blue-600">New</button>
                        <button className="px-4 py-2 hover:text-white transition-colors">In Review</button>
                        <button className="px-4 py-2 hover:text-white transition-colors">Archive</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Applicant</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Position</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Applied</th>
                                <th className="text-right py-6 px-10 text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.length > 0 ? (
                                applications.map((app) => (
                                    <tr key={app.id} className="border-b border-white/[0.02] last:border-0 hover:bg-white/[0.02] transition-colors group">
                                        <td className="py-6 px-10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-[#D1FF00] text-black flex items-center justify-center font-bold shadow-[0_0_15px_rgba(209,255,0,0.2)]">
                                                    {app.name[0]}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{app.name}</p>
                                                    <p className="text-xs text-gray-500">{app.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-6 px-10 text-sm font-medium text-gray-300">{app.role}</td>
                                        <td className="py-6 px-10">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${app.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                app.status === 'Interviewing' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                                                    app.status === 'Rejected' ? 'bg-red-500/10 text-red-500 border border-red-500/20' :
                                                        'bg-white/5 text-gray-500 border border-white/10'
                                                }`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="py-6 px-10 text-sm text-gray-500">{app.appliedAt}</td>
                                        <td className="py-6 px-10">
                                            <div className="flex items-center justify-end gap-2 text-gray-500">
                                                <button className="p-2 hover:text-green-500 hover:bg-green-500/10 rounded-lg transition-all" title="Approve/Next Stage">
                                                    <CheckCircle size={18} />
                                                </button>
                                                <button className="p-2 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all" title="Reject">
                                                    <XCircle size={18} />
                                                </button>
                                                <button className="p-2 bg-white text-black rounded-lg hover:bg-[#D1FF00] transition-all flex items-center gap-2 px-4 py-2 shadow-lg" title="View Application">
                                                    <Eye size={16} /> <span className="text-xs font-bold uppercase tracking-widest">View</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="py-24 text-center text-gray-500">
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
