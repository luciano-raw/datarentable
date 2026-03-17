"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, Cloud, Search, ArrowLeft, ArrowRight, ClipboardCheck, Settings, LineChart, Target } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ServiceWorkflow from "@/components/sections/ServiceWorkflow";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function AnalisisDatosPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver a Servicios
                </Link>

                <header className="max-w-3xl mb-20">
                    <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-white/5">
                        <Database size={12} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Data & BI</span>
                    </motion.div>
                    <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Análisis de Datos & <span className="text-gradient">BI</span>
                    </motion.h1>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted text-xl font-light leading-relaxed">
                        Arquitectura técnica e inteligencia de negocios para transformar datos crudos en victorias comerciales y rentabilidad pura.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <Card
                        title="Auditoría y Limpieza"
                        description="Revisamos la calidad de tus registros actuales y establecemos reglas claras para que tus datos sean 100% confiables."
                        icon={<Search />}
                    />
                    <Card
                        title="Integración de Datos (ETL)"
                        description="Conectamos tus ERPs, CRMs, Excels y bases de datos dispersas en una sola fuente de verdad centralizada y segura."
                        icon={<Database />}
                    />
                    <Card
                        title="Arquitectura Cloud"
                        description="Diseñamos repositorios y Data Warehouses escalables para almacenar tu información sin cuellos de botella."
                        icon={<Cloud />}
                    />
                    <Card
                        title="Dashboards Ejecutivos"
                        description="Desarrollo de tableros interactivos en Power BI o Tableau con métricas de alta precisión para decisiones en tiempo real."
                        icon={<BarChart3 />}
                    />
                </div>

                <ServiceWorkflow 
                    title="Nuestro Proceso de Datos"
                    description="Desde auditorías iniciales hasta cuadros de mando predictivos, estructuramos tu información paso a paso."
                    steps={[
                        { id: "01", title: "Diagnóstico", description: "Evaluamos el estado, calidad y dispersión de tus datos actuales.", icon: <Search /> },
                        { id: "02", title: "Arquitectura", description: "Diseñamos las tuberías (ETL) y el Data Warehouse centralizado.", icon: <Settings /> },
                        { id: "03", title: "Visualización", description: "Creamos dashboards interactivos y modelos predictivos.", icon: <LineChart /> },
                        { id: "04", title: "Optimización", description: "Monitoreamos KPIs y mejoramos modelos para rentabilidad continua.", icon: <Target /> },
                    ]}
                />

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">El valor oculto en tu empresa</h2>
                    <p className="text-muted font-light max-w-2xl mx-auto mb-12">
                        Una empresa basada en datos no solo entiende el pasado, sino que predice el futuro. 
                        Detectamos fugas capitales, optimizamos márgenes y revelamos el comportamiento real de tus clientes.
                    </p>
                    <Link href="/#contacto" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                        Hablar con un consultor <ArrowRight size={14} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
