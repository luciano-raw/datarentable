"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Soluciones", href: "/#soluciones" },
        { name: "Servicios", href: "/#servicios" },
        { name: "Casos", href: "/casos" },
        { name: "Metodología", href: "/#proceso" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 glass border-b" : "py-8 bg-transparent"}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-white group">
                    DATA<span className="text-primary group-hover:text-accent transition-colors">RENTABLE</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/56930531304?text=Hola%20DataRentable,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20soluciones%20de%20Business%20Intelligence."
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                    >
                        WhatsApp
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass border-b p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-text-muted"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/56930531304?text=Hola%20DataRentable,%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20soluciones%20de%20Business%20Intelligence."
                        className="bg-primary text-white py-4 rounded-2xl text-center text-xs font-black uppercase tracking-widest"
                    >
                        WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}
