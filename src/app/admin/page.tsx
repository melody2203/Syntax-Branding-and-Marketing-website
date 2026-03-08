"use client";

import { Briefcase, Users, Send, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getApplications, getJobs, Application, Job } from "@/lib/storage";

export default function AdminDashboard() {
    const [apps, setApps] = useState<Application[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        setApps(getApplications());
        setJobs(getJobs());
    }, []);

    const stats = [
        { name: "Live Jobs", value: jobs.filter(j => j.status === 'Active').length.toString(), icon: Briefcase, color: "bg-blue-500" },
        { name: "Total Applications", value: apps.length.toString(), icon: Users, color: "bg-[#D1FF00]" },
        { name: "New This Week", value: apps.filter(a => a.appliedAt === 'Just now' || a.appliedAt.includes('hour')).length.toString(), icon: Send, color: "bg-orange-500" },
        { name: "Click-through Rate", value: "12.4%", icon: TrendingUp, color: "bg-purple-500" },
    ];

    return (
        <div>
            <h1 className="text-4xl font-serif mb-12">Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white/[0.03] backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-sm group hover:border-blue-500/50 transition-all">
                        <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                            <stat.icon size={24} className={stat.color === 'bg-[#D1FF00]' ? 'text-black' : ''} />
                        </div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">{stat.name}</p>
                        <p className="text-3xl font-serif text-white">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 shadow-sm p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-white">Recent Applications</h2>
                        <Link href="/admin/applications" className="text-sm font-bold text-blue-500 hover:text-blue-400">View all</Link>
                    </div>
                    <div className="space-y-6">
                        {apps.slice(0, 5).map((app, i) => (
                            <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-all cursor-pointer group border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                                        {app.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{app.name}</p>
                                        <p className="text-sm text-gray-500">{app.role}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 font-medium">{app.appliedAt}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-600 text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative shadow-[0_20px_40px_rgba(0,102,255,0.2)]">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-serif mb-4 leading-tight">Need to hire fast?</h2>
                        <p className="text-gray-400 text-sm mb-8">Post a new job position today and reach top talent globally.</p>
                        <Link
                            href="/admin/jobs"
                            className="inline-block bg-[#D1FF00] text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#b8e600] transition-colors"
                        >
                            Post a Position
                        </Link>
                    </div>
                    {/* Subtle checkerboard pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                        <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-transparent'} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
