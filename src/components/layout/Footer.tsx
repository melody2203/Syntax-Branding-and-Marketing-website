import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-white pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="space-y-4 md:col-span-1">
                    <Logo />
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Elevating brands through premium digital experiences and cutting-edge software engineering.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                        <Link href="#" className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            <Twitter size={18} className="text-gray-500" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            <Linkedin size={18} className="text-gray-500" />
                        </Link>
                        <Link href="#" className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors">
                            <Github size={18} className="text-gray-500" />
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-black font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link href="/services/custom-software-development" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                        <li><Link href="/services/building-digital-products" className="hover:text-blue-600 transition-colors">Mobile Applications</Link></li>
                        <li><Link href="/services/software-testing-and-qa" className="hover:text-blue-600 transition-colors">Software Testing</Link></li>
                        <li><Link href="/services/consulting" className="hover:text-blue-600 transition-colors">IT Consulting</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-black font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                        <li><Link href="/#portfolio" className="hover:text-blue-600 transition-colors">Case Studies</Link></li>
                        <li><Link href="/admin" className="hover:text-gray-400 transition-colors text-xs opacity-50">Admin</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-black font-semibold mb-4">Contact</h4>
                    <ul className="space-y-3 text-sm text-gray-500">
                        <li className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href="mailto:hello@syntax.dev" className="hover:text-blue-600 transition-colors">hello@syntax.dev</a>
                        </li>
                        <li>Bole Dembel, Amir Commercial Complex</li>
                        <li>Addis Ababa, Ethiopia</li>
                        <li>+251 945 455 141</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
                <p>© {new Date().getFullYear()} Syntax Inc. All rights reserved.</p>
                <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-black transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
