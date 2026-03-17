"use client";

import { motion } from "framer-motion";
import { Cpu, MessageSquareText, BrainCircuit, Bot, ArrowLeft, ArrowRight, Search, FileCode, Play, Users } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ServiceWorkflow from "@/components/sections/ServiceWorkflow";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function InteligenciaArtificialPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/#servicios" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver a Servicios
                </Link>

                <header className="max-w-3xl mb-20">
                    <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full mb-6 border-white/5">
                        <Cpu size={12} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Soluciones Smart</span>
                    </motion.div>
                    <motion.h1 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Inteligencia <span className="text-gradient">Artificial</span>
                    </motion.h1>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-muted text-xl font-light leading-relaxed">
                        Desplegamos asistentes virtuales y herramientas de IA generativa que elevan la atención de tus clientes y aceleran tus procesos internos.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <Card
                        title="Chatbots Web & WhatsApp"
                        description="Atención 24/7. Agentes virtuales entrenados con el conocimiento de tu negocio para responder preguntas, agendar y calificar leads."
                        icon={<MessageSquareText />}
                    />
                    <Card
                        title="Clasificación de Datos"
                        description="Algoritmos de IA para analizar y etiquetar grandes volúmenes de documentos, correos o inventario automáticamente."
                        icon={<BrainCircuit />}
                    />
                    <Card
                        title="Asistentes Internos"
                        description="Herramientas tipo Copilot conectadas a tu base de conocimiento corporativa para acelerar a tus equipos de ventas y soporte."
                        icon={<Bot />}
                    />
                    <Card
                        title="Respuestas Automatizadas"
                        description="Redacción automática de propuestas comerciales, contestación de emails comunes y seguimiento de prospectos."
                        icon={<Cpu />}
                    />
                </div>

                <ServiceWorkflow 
                    title="Implementación de IA"
                    description="Un enfoque práctico y seguro para integrar inteligencia en tus operaciones."
                    steps={[
                        { id: "01", title: "Evaluación", description: "Determinamos qué procesos tienen mayor impacto al integrar agentes de IA.", icon: <Search /> },
                        { id: "02", title: "Entrenamiento", description: "Alimentamos los modelos con tus datos, PDFs comerciales y contexto de negocio.", icon: <FileCode /> },
                        { id: "03", title: "Desarrollo", description: "Construimos el Chatbot o Asistente asegurando respuestas precisas y seguras.", icon: <Play /> },
                        { id: "04", title: "Adopción", description: "Entregamos la solución lista para usar por tus clientes o equipo interno.", icon: <Users /> },
                    ]}
                />

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Tu empresa, más inteligente</h2>
                    <p className="text-muted font-light max-w-2xl mx-auto mb-12">
                        La inteligencia artificial ya no es ciencia ficción, es una ventaja competitiva real. 
                        Implementamos modelos simples y efectivos que marcan la diferencia en tus tiempos de respuesta.
                    </p>
                    <Link href="/#contacto" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20">
                        Integrar IA <ArrowRight size={14} />
                    </Link>
                </section>
            </div>
        </main>
    );
}
