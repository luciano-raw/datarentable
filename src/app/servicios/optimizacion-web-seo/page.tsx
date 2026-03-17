"use client";

import { motion } from "framer-motion";
import { Search, MonitorSmartphone, MousePointerClick, Rocket, ArrowLeft, ArrowRight, Activity, Wrench, BarChart2, TrendingUp } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ServiceWorkflow from "@/components/sections/ServiceWorkflow";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function SEOPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver a Servicios
                </Link>

                <header className="max-w-3xl mb-20">
                    <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-white/5">
                        <Search size={12} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Presencia Digital</span>
                    </motion.div>
                    <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Optimización Web & <span className="text-gradient">SEO</span>
                    </motion.h1>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted text-xl font-light leading-relaxed">
                        Transformamos tu sitio actual en una máquina visible, ultra-rápida y diseñada exclusivamente para convertir visitas en clientes formales.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <Card
                        title="Velocidad y Rendimiento"
                        description="Auditoría técnica de tiempos de carga (Core Web Vitals). Reducimos el abandono garantizando una navegación sin fricciones."
                        icon={<Rocket />}
                    />
                    <Card
                        title="Posicionamiento SEO"
                        description="Identificamos palabras clave críticas y mejoramos la estructura on-page para asegurar que Google entienda y priorice tu negocio."
                        icon={<Search />}
                    />
                    <Card
                        title="Experiencia de Usuario (UI/UX)"
                        description="Rediseñamos la navegación enfocándonos en la retención. Cada clic de tu cliente está pensado para llevarlo al cierre de ventas."
                        icon={<MousePointerClick />}
                    />
                    <Card
                        title="Integración Analítica"
                        description="Conectamos Google Analytics 4, Tag Manager y un panel de control personalizado para medir qué esfuerzos web realmente generan dinero."
                        icon={<MonitorSmartphone />}
                    />
                </div>

                <ServiceWorkflow 
                    title="Nuestra Metodología Web"
                    description="Convertimos tu sitio en un activo digital rápido, visible y diseñado para retener clientes."
                    steps={[
                        { id: "01", title: "Auditoría Vital", description: "Analizamos velocidad, errores SEO on-page y cuellos de botella en la experiencia.", icon: <Activity /> },
                        { id: "02", title: "Optimización", description: "Corregimos código, comprimimos recursos y ajustamos la estructura para Google.", icon: <Wrench /> },
                        { id: "03", title: "Medición", description: "Implementamos analítica avanzada (GA4) para entender cada clic.", icon: <BarChart2 /> },
                        { id: "04", title: "Escalamiento", description: "Iteramos sobre el contenido y el diseño apoyados en datos reales de conversión.", icon: <TrendingUp /> },
                    ]}
                />

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Tú escaparate más valioso</h2>
                    <p className="text-muted font-light max-w-2xl mx-auto mb-12">
                        De nada sirve una gran marca si nadie te encuentra en Google, o si los usuarios se van por una web lenta. Nosotros unimos diseño técnico y descubrimiento orgánico.
                    </p>
                    <Link href="/#contacto" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                        Auditar mi sitio web <ArrowRight size={14} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
