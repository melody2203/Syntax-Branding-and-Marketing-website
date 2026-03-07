"use client";

import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
    return (
        <Link href="/" className={`flex items-center gap-3 group ${className}`}>
            <div className="relative w-12 h-12 flex items-center justify-center">
                {/* Logo Icon based on provided image */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Left Bracket - Dark Blue */}
                    <path
                        d="M35 25 L15 50 L35 75"
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Right Bracket - Light Blue */}
                    <path
                        d="M65 25 L85 50 L65 75"
                        fill="none"
                        stroke="#93c5fd"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Circuit lines in the middle */}
                    {/* Orange-Yellow line */}
                    <circle cx="45" cy="35" r="5" fill="#f59e0b" />
                    <path
                        d="M45 40 L45 55 L52 65 L52 75"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />

                    {/* Black/Dark grey line */}
                    <circle cx="55" cy="25" r="5" fill="#111827" />
                    <path
                        d="M55 30 L55 60 L62 70"
                        fill="none"
                        stroke="#111827"
                        strokeWidth="6"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tighter text-[#1e293b]">
                    SYNTAX
                </span>
                <span className="text-[8px] font-bold tracking-[0.2em] text-[#d97706] mt-0.5">
                    SOFTWARE SOLUTIONS
                </span>
            </div>
        </Link>
    );
}
