"use client";

import { motion } from "framer-motion";
import { Workflow, Zap, Clock, Repeat, ArrowLeft, ArrowRight, Search, Code, CheckCircle2, Rocket } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ServiceWorkflow from "@/components/sections/ServiceWorkflow";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function AutomatizacionPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver a Servicios
                </Link>

                <header className="max-w-3xl mb-20">
                    <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-white/5">
                        <Workflow size={12} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Operaciones Ágiles</span>
                    </motion.div>
                    <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Automatización de <span className="text-gradient">Procesos</span>
                    </motion.h1>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted text-xl font-light leading-relaxed">
                        Eliminamos tareas repetitivas y manuales para que tu equipo se enfoque en estrategias que generen valor real.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <Card
                        title="Reportes Automáticos"
                        description="Recibe KPIs críticos de ventas e inventario diarios o semanales directo a tu correo o WhatsApp sin apretar un botón."
                        icon={<Zap />}
                    />
                    <Card
                        title="Integración de Sistemas"
                        description="Conectamos aplicaciones que no hablan entre sí. Por ejemplo, automatizamos flujos entre tu CRM, Excel e email."
                        icon={<Workflow />}
                    />
                    <Card
                        title="Flujos de Seguimiento"
                        description="Automatización de envío de cotizaciones, recordatorios de cobranza y nutrición de leads (email/WhatsApp)."
                        icon={<Repeat />}
                    />
                    <Card
                        title="Ahorro de Tiempo"
                        description="Reducimos las horas operativas dedicadas a traspasar datos y minimizamos los errores humanos a cero."
                        icon={<Clock />}
                    />
                </div>

                <ServiceWorkflow 
                    title="Nuestro Proceso de Automatización"
                    description="Desde identificar cuellos de botella hasta desplegar flujos invisibles, así agilizamos tu negocio."
                    steps={[
                        { id: "01", title: "Mapeo", description: "Identificamos las tareas manuales, repetitivas y propensas a errores de tu equipo.", icon: <Search /> },
                        { id: "02", title: "Diseño de Flujo", description: "Diseñamos la lógica y conectamos las APIs y sistemas involucrados.", icon: <Code /> },
                        { id: "03", title: "Pruebas", description: "Ejecutamos simulaciones para garantizar que todo funcione sin fallas.", icon: <CheckCircle2 /> },
                        { id: "04", title: "Despliegue", description: "Lanzamos la automatización y liberamos tiempo para tu equipo.", icon: <Rocket /> },
                    ]}
                />

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Haz más, con menos esfuerzo</h2>
                    <p className="text-muted font-light max-w-2xl mx-auto mb-12">
                        La automatización no reemplaza a tu equipo, lo libera. Diseñamos flujos de trabajo invisibles que mantienen tu negocio operando 24/7 con precisión milimétrica.
                    </p>
                    <Link href="/#contacto" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                        Automatizar mi negocio <ArrowRight size={14} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
