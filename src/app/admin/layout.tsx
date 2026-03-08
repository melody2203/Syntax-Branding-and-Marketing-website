"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Users, LogOut, ChevronRight } from "lucide-react";
import { isAuthenticated, logout } from "@/lib/auth";

export default function AdminLayout({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // Skip auth check for login page to avoid recursion
        if (pathname === "/admin/login") {
            setAuthorized(true);
            return;
        }

        if (!isAuthenticated()) {
            router.push("/admin/login");
        } else {
            setAuthorized(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, pathname]);

    if (pathname === "/admin/login") {
        return <>{children}</>;
    }

    if (!authorized) {
        return (
            <div className="min-h-screen bg-[#020202] flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    const navLinks = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
        { name: "Applications", href: "/admin/applications", icon: Users },
    ];

    return (
        <div className="flex min-h-screen bg-[#020202] text-white font-sans selection:bg-blue-600/30">
            {/* Sidebar */}
            <aside className="w-64 bg-white/[0.02] backdrop-blur-xl border-r border-white/10 flex flex-col fixed inset-y-0 z-20">
                <div className="p-8 border-b border-white/5">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Syntax<span className="text-blue-600">.</span> Admin
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${pathname === link.href ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(0,102,255,0.2)]" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <link.icon size={18} /> {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={() => {
                            logout();
                            router.push("/admin/login");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-all text-sm font-medium"
                    >
                        <LogOut size={18} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-12">
                <header className="mb-12 flex items-center gap-2 text-sm text-gray-500">
                    <span>Admin</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-300 font-medium capitalize">
                        {pathname.split("/").pop() || "Dashboard"}
                    </span>
                </header>
                {children}
            </main>
        </div>
    );
}
