"use client";

import { motion } from "framer-motion";
import { Hammer, BarChart, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function ConstructionPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver al Inicio
                </Link>

                <header className="max-w-3xl mb-20">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                        <Hammer size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Control de <span className="text-gradient">Constructoras</span>
                    </h1>
                    <p className="text-muted text-xl font-light leading-relaxed">
                        Elimina fugas de presupuesto y desvíos financieros con auditoría de datos en tiempo real para proyectos de ingeniería.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Desafíos del Sector</h2>
                        <ul className="space-y-4">
                            {[
                                "Desviación presupuestaria detectada tarde.",
                                "Falta de control sobre subcontratistas.",
                                "Incertidumbre en el flujo de caja proyectado.",
                                "Dificultad para centralizar costos de múltiples obras."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-muted font-light items-start">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass block-rounded p-12 border-white/5 bg-primary/[0.02]">
                        <h3 className="text-xl font-bold text-white mb-6">Métricas de Control</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "CPI", value: "Índice Costo" },
                                { label: "SPI", value: "Índice Plazo" },
                                { label: "EAC", value: "Costo Estimado" },
                                { label: "VAC", value: "Var. al Finalizar" }
                            ].map((kpi, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="text-primary font-black text-2xl tracking-tighter">{kpi.label}</div>
                                    <div className="text-[10px] text-muted uppercase tracking-widest">{kpi.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <section className="mb-32">
                    <h2 className="text-3xl font-bold text-white tracking-tight mb-12">Nuestra Propuesta</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card
                            title="Auditoría de Costos"
                            description="Relaciona facturación vs avance de obra real para detectar desvíos de inmediato."
                            icon={<BarChart />}
                        />
                        <Card
                            title="Flujo de Caja Predictivo"
                            description="Proyecta tus compromisos financieros basado en el avance real de tus proyectos."
                            icon={<Shield />}
                        />
                        <Card
                            title="Gestión de Materiales"
                            description="Control de mermas y optimización de compras por volumen centralizadas."
                            icon={<Hammer />}
                        />
                    </div>
                </section>

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Protege tus utilidades.</h2>
                    <p className="text-muted font-light mb-12 max-w-xl mx-auto">
                        Deja de esperar al final de la obra para saber si fue rentable. Controla tus costos hoy mismo.
                    </p>
                    <Link href="/#contacto" className="inline-flex bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                        Solicitar Diagnóstico Obra
                    </Link>
                </section>
            </div>
        </main>
    );
}
