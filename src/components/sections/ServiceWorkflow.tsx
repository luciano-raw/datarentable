"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WorkflowStep {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface ServiceWorkflowProps {
    title?: string;
    description?: string;
    steps: WorkflowStep[];
}

export default function ServiceWorkflow({ 
    title = "Nuestro Proceso de Trabajo", 
    description, 
    steps 
}: ServiceWorkflowProps) {
    return (
        <section className="section-spacing">
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tighter"
                >
                    {title}
                </motion.h2>
                {description && (
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted text-lg font-light max-w-2xl mx-auto"
                    >
                        {description}
                    </motion.p>
                )}
            </div>

            <div className="relative max-w-5xl mx-auto">
                {/* Desktop Connecting Line */}
                <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="w-24 h-24 mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:bg-primary/40 transition-colors duration-500" />
                                <div className="relative w-full h-full glass border-white/10 rounded-2xl flex flex-col items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                                    <div className="scale-150 mb-1">{step.icon}</div>
                                    <div className="absolute top-2 right-2 text-[8px] font-black opacity-30">{step.id}</div>
                                </div>
                            </div>
                            
                            {/* Text Content */}
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-sm text-muted font-light px-2 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
