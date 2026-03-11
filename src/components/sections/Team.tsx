"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Linkedin, MapPin, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
    id: string;
    name: string;
    role: string;
    location: string;
    image: string;
    linkedin: string;
    color: "primary" | "accent";
}

const team: TeamMember[] = [
    {
        id: "luciano",
        name: "Luciano Gonzalez",
        role: "Ing. Civil Informático",
        location: "Talca, Chile",
        image: "/team/luciano.PNG",
        linkedin: "https://www.linkedin.com/in/lucianomgr/",
        color: "primary",
    },
    {
        id: "fernanda",
        name: "Fernanda Parada",
        role: "Estudiante de Administración",
        location: "Talca, Chile",
        image: "/team/fernanda.PNG",
        linkedin: "https://www.linkedin.com/in/fernanda-parada-7036a9394/",
        color: "accent",
    },
];

export default function TeamSection() {
    const [expandedMember, setExpandedMember] = useState<string | null>(null);

    const toggleMember = (id: string) => {
        setExpandedMember(expandedMember === id ? null : id);
    };

    return (
        <section id="equipo" className="container-custom section-spacing">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">Nuestro Equipo</h2>
                    <p className="text-text-muted text-lg font-light">Las mentes detrás de la arquitectura de datos que impulsa tu negocio.</p>
                </div>
                <div className="h-px flex-grow bg-white/5 mx-8 hidden md:block" />
                <div className="text-[10px] font-black uppercase tracking-widest text-primary">Quienes Somos</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.map((member) => (
                    <TeamCard
                        key={member.id}
                        member={member}
                        isExpanded={expandedMember === member.id}
                        onToggle={() => toggleMember(member.id)}
                    />
                ))}
            </div>
        </section>
    );
}

function TeamCard({ member, isExpanded, onToggle }: { member: TeamMember; isExpanded: boolean; onToggle: () => void }) {
    const ringColor = member.color === "primary" ? "border-primary/30" : "border-accent/30";
    const btnColor = member.color === "primary" ? "bg-primary hover:bg-primary-dark" : "bg-accent hover:bg-accent-soft";
    const textColor = member.color === "primary" ? "text-primary" : "text-accent";

    return (
        <motion.div
            layout
            onClick={onToggle}
            className={cn(
                "glass block-rounded overflow-hidden cursor-pointer transition-all duration-500 group relative",
                isExpanded ? "bg-surface-brighter border-primary/20 scale-[1.02] z-10" : "hover:bg-white/[0.03] hover:border-white/10"
            )}
        >
            <motion.div layout className="p-8 flex flex-col items-center text-center gap-5">
                <motion.div
                    layout
                    className={cn(
                        "rounded-full bg-surface-brighter overflow-hidden relative border-2 shrink-0 transition-all duration-500 shadow-2xl",
                        ringColor,
                        isExpanded ? "h-40 w-40" : "h-28 w-28"
                    )}
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <div className="w-full">
                    <motion.h4 layout className="text-white font-bold text-2xl mb-1 tracking-tight">{member.name}</motion.h4>
                    <motion.p layout className={cn("font-medium text-base mb-3 leading-none", textColor)}>{member.role}</motion.p>
                    <motion.p layout className="text-text-muted text-sm flex items-center justify-center gap-1.5 font-light">
                        <MapPin size={14} className="text-primary/60" />
                        {member.location}
                    </motion.p>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="overflow-hidden w-full px-4"
                            >
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className={cn(
                                        "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white px-8 py-4 rounded-xl transition-all w-full justify-center shadow-lg hover:translate-y-[-2px] active:translate-y-0",
                                        btnColor
                                    )}
                                >
                                    <Linkedin size={16} />
                                    Conectar en LinkedIn
                                </a>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    layout
                    className="absolute top-6 right-6 text-white/30 group-hover:text-white/60 transition-colors"
                >
                    <ChevronDown size={24} className={cn("transition-transform duration-500", isExpanded ? "rotate-180" : "")} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
