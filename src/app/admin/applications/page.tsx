"use client";

import { useState } from "react";
import { Search, Download, Eye, CheckCircle, XCircle } from "lucide-react";

export default function ApplicationsReview() {
    const [applications, setApplications] = useState([
        { id: "1", name: "Alex Johnson", role: "Senior Full-stack Engineer", status: "New", appliedAt: "2 hours ago", email: "alex@example.com" },
        { id: "2", name: "Sarah Williams", role: "Product Designer", status: "Reviewed", appliedAt: "5 hours ago", email: "sarah.w@example.com" },
        { id: "3", name: "Michael Chen", role: "Senior Full-stack Engineer", status: "Interviewing", appliedAt: "Yesterday", email: "m.chen88@example.com" },
        { id: "4", name: "Jessica Low", role: "iOS Developer", status: "Rejected", appliedAt: "2 days ago", email: "jessica.low@example.com" },
        { id: "5", name: "David Miller", role: "DevOps Engineer", status: "New", appliedAt: "3 days ago", email: "david.m@example.com" },
    ]);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h1 className="text-4xl font-serif">Applications Review</h1>
                <div className="flex items-center gap-4">
                    <button className="bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-gray-50 flex items-center gap-2 transition-all">
                        <Download size={18} /> Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Filter by name or role..."
                            className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black text-sm"
                        />
                    </div>
                    <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                        <button className="px-4 py-2 text-black border-b-2 border-black">New (2)</button>
                        <button className="px-4 py-2 hover:text-black transition-colors">In Review</button>
                        <button className="px-4 py-2 hover:text-black transition-colors">Archive</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Applicant</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Position</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="text-left py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Applied</th>
                                <th className="text-right py-6 px-10 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => (
                                <tr key={app.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                                    <td className="py-6 px-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#D1FF00] text-black flex items-center justify-center font-bold">
                                                {app.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-bold">{app.name}</p>
                                                <p className="text-xs text-gray-500">{app.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-10 text-sm font-medium">{app.role}</td>
                                    <td className="py-6 px-10">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${app.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                                app.status === 'Interviewing' ? 'bg-purple-100 text-purple-700' :
                                                    app.status === 'Rejected' ? 'bg-red-100 text-red-700' :
                                                        'bg-gray-100 text-gray-500'
                                            }`}>
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="py-6 px-10 text-sm text-gray-500">{app.appliedAt}</td>
                                    <td className="py-6 px-10">
                                        <div className="flex items-center justify-end gap-2 text-gray-400">
                                            <button className="p-2 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Approve/Next Stage">
                                                <CheckCircle size={18} />
                                            </button>
                                            <button className="p-2 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Reject">
                                                <XCircle size={18} />
                                            </button>
                                            <button className="p-2 bg-black text-white rounded-lg hover:bg-zinc-800 transition-all flex items-center gap-2 px-4 py-2" title="View Application">
                                                <Eye size={16} /> <span className="text-xs font-bold uppercase tracking-widest">View</span>
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
