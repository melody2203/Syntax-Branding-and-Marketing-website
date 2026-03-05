"use client";

import { Briefcase, Users, Send, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
    { name: "Live Jobs", value: "4", icon: Briefcase, color: "bg-blue-500" },
    { name: "Total Applications", value: "12", icon: Users, color: "bg-[#D1FF00]" },
    { name: "New This Week", value: "3", icon: Send, color: "bg-orange-500" },
    { name: "Click-through Rate", value: "12.4%", icon: TrendingUp, color: "bg-purple-500" },
];

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-4xl font-serif mb-12">Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                            <stat.icon size={24} className={stat.color === 'bg-[#D1FF00]' ? 'text-black' : ''} />
                        </div>
                        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-1">{stat.name}</p>
                        <p className="text-3xl font-serif">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Recent Applications</h2>
                        <Link href="/admin/applications" className="text-sm font-bold text-blue-600 hover:underline">View all</Link>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: "Alex Johnson", role: "Senior Full-stack Engineer", date: "2 hours ago" },
                            { name: "Sarah Williams", role: "Product Designer", date: "5 hours ago" },
                            { name: "Michael Chen", role: "Senior Full-stack Engineer", date: "Yesterday" },
                        ].map((app, i) => (
                            <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                                        {app.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold">{app.name}</p>
                                        <p className="text-sm text-gray-500">{app.role}</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-medium">{app.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#020202] text-white rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
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
