"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Card({ title, description, icon, className = "", onClick }: CardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={onClick}
            className={`glass block-rounded p-8 flex flex-col gap-4 cursor-pointer hover:border-primary/50 transition-colors group ${className}`}
        >
            {icon && (
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {icon}
                </div>
            )}
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-text-main tracking-tight">{title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{description}</p>
            </div>

            {onClick && (
                <div className="pt-4 mt-auto text-primary text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Saber más <span>→</span>
                </div>
            )}
        </motion.div>
    );
}
