"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, Zap, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver al Inicio
                </Link>

                <header className="max-w-3xl mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Nuestros <span className="text-gradient">Servicios</span>
                    </h1>
                    <p className="text-muted text-xl font-light leading-relaxed">
                        Arquitectura técnica y consultoría estratégica para transformar datos crudos en victorias comerciales.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <Card
                        title="Integración de Datos (ETL)"
                        description="Conectamos tus ERPs, CRMs, Excels y bases de datos en una sola fuente de verdad centralizada y segura."
                        icon={<Database />}
                    />
                    <Card
                        title="Business Intelligence Avanzado"
                        description="Desarrollo de tableros ejecutivos en Power BI, Tableau o soluciones custom con métricas de alta precisión."
                        icon={<BarChart3 />}
                    />
                    <Card
                        title="Automatización de Reportes"
                        description="Elimina el trabajo manual. Enviamos reportes automáticos por email o Slack con los KPIs críticos de la mañana."
                        icon={<Zap />}
                    />
                    <Card
                        title="Auditoría de Datos & Seguridad"
                        description="Revisamos la calidad de tus registros y aseguramos que tu infraestructura cumpla con estándares de privacidad."
                        icon={<ShieldCheck />}
                    />
                </div>

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Metodología de Alto Impacto</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-16">
                        <div>
                            <div className="text-primary font-black mb-4">01. Auditoría</div>
                            <p className="text-sm text-muted font-light">Entendemos tus procesos y detectamos dónde se pierde la información.</p>
                        </div>
                        <div>
                            <div className="text-primary font-black mb-4">02. Ejecución</div>
                            <p className="text-sm text-muted font-light">Construimos la infraestructura técnica y visual de forma ágil.</p>
                        </div>
                        <div>
                            <div className="text-primary font-black mb-4">03. Evolución</div>
                            <p className="text-sm text-muted font-light">Ciclos de mejora continua basados en el feedback de tu equipo.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
