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
        <div className="flex min-h-screen bg-gray-50 text-black font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed inset-y-0 z-20">
                <div className="p-8 border-b border-gray-100">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Syntax<span className="text-blue-600">.</span> Admin
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-2 mt-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${pathname === link.href ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"
                                }`}
                        >
                            <link.icon size={18} /> {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={() => {
                            logout();
                            router.push("/admin/login");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium"
                    >
                        <LogOut size={18} /> Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-12">
                <header className="mb-12 flex items-center gap-2 text-sm text-gray-400">
                    <span>Admin</span>
                    <ChevronRight size={14} />
                    <span className="text-gray-900 font-medium capitalize">
                        {pathname.split("/").pop() || "Dashboard"}
                    </span>
                </header>
                {children}
            </main>
        </div>
    );
}
