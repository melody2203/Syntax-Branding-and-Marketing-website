import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4 md:col-span-1">
                    <Link href="/" className="text-2xl font-bold tracking-tighter block">
                        Syntax<span className="text-blue-500">.</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Elevating brands through premium digital experiences and cutting-edge software engineering.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Twitter size={18} className="text-gray-300" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Linkedin size={18} className="text-gray-300" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Github size={18} className="text-gray-300" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Mobile Applications</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Cloud Architecture</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="#portfolio" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link href="#portfolio" className="hover:text-white transition-colors">Case Studies</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href="mailto:hello@syntax.dev" className="hover:text-white transition-colors">hello@syntax.dev</a>
                        </li>
                        <li>123 Innovation Drive</li>
                        <li>Tech District, San Francisco</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>© {new Date().getFullYear()} Syntax Inc. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
