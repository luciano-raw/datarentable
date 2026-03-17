"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

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
        { 
            name: "Servicios", 
            href: "/#servicios",
            dropdown: [
                { name: "Data & BI", href: "/servicios/analisis-de-datos" },
                { name: "Automatización", href: "/servicios/automatizacion-procesos" },
                { name: "Inteligencia Artificial", href: "/servicios/inteligencia-artificial" },
                { name: "Web & SEO", href: "/servicios/optimizacion-web-seo" }
            ]
        },
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
                        <div key={link.name} className="relative group">
                            <Link
                                href={link.href}
                                className="flex items-center gap-1 text-xs font-black uppercase tracking-[0.2em] text-text-muted hover:text-white transition-colors py-2"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 pt-2">
                                    <div className="glass flex flex-col p-2 border border-white/5 rounded-xl shadow-2xl backdrop-blur-xl bg-background/80">
                                        {link.dropdown.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                className="px-4 py-3 text-xs font-bold text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap"
                                            >
                                                {sublink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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
                <div className="md:hidden absolute top-full left-0 right-0 glass border-b p-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300 h-screen overflow-y-auto pb-32">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col gap-4">
                            <Link
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-text-muted"
                                onClick={() => !link.dropdown && setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                            {link.dropdown && (
                                <div className="flex flex-col gap-4 pl-4 border-l border-white/10 ml-2">
                                    {link.dropdown.map((sublink) => (
                                        <Link
                                            key={sublink.name}
                                            href={sublink.href}
                                            className="text-xs font-medium text-muted hover:text-white"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {sublink.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
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
