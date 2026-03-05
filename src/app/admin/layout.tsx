"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Briefcase, Users, LogOut, ChevronRight } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-black font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-20">
                <div className="p-8 border-b border-gray-100">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Syntax<span className="text-blue-600">.</span> Admin
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                        <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link
                        href="/admin/jobs"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                        <Briefcase size={18} /> Jobs
                    </Link>
                    <Link
                        href="/admin/applications"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                        <Users size={18} /> Applications
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium">
                        <LogOut size={18} /> Exit Admin
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-12">
                <header className="mb-12 flex items-center gap-2 text-sm text-gray-400">
                    <span>Admin</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-900 font-medium">Dashboard</span>
                </header>
                {children}
            </main>
        </div>
    );
}
