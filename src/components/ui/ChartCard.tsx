"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChartCardProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function ChartCard({ title, subtitle, children, className = "" }: ChartCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass block-rounded p-8 border-white/5 bg-white/[0.01] flex flex-col gap-6 ${className}`}
        >
            <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
                {subtitle && <p className="text-[10px] text-muted uppercase tracking-widest">{subtitle}</p>}
            </div>
            <div className="w-full h-[300px] min-h-[300px]">
                {children}
            </div>
        </motion.div>
    );
}
