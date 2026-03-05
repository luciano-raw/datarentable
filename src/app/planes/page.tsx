"use client";

import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PlanesPage() {
    const plans = [
        {
            name: "Starter",
            desc: "Ideal para pequeñas empresas que quieren dejar el Excel manual.",
            price: "Consulte",
            features: ["1 Dashboard Core", "Integración de 2 fuentes", "Actualización diaria", "Soporte vía Ticket"],
            cta: "Empezar Ahora",
            popular: false
        },
        {
            name: "Professional",
            desc: "Para empresas en crecimiento que necesitan visualización avanzada.",
            price: "Consulte",
            features: ["3 Dashboards Avanzados", "Integración ilimitada", "Actualización en tiempo real", "Alertas automatizadas", "Consultoría Mensual"],
            cta: "Solicitar Diagnóstico",
            popular: true
        },
        {
            name: "Enterprise",
            desc: "Arquitectura de datos completa y automatización de procesos.",
            price: "Personalizado",
            features: ["Ecosistema BI Completo", "Data Warehouse dedicado", "Predictive Analytics", "Soporte 24/7", "CTO as a Service"],
            cta: "Contactar Ventas",
            popular: false
        }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver al Inicio
                </Link>

                <header className="max-w-3xl mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Inversión en <span className="text-gradient">Rentabilidad</span>
                    </h1>
                    <p className="text-muted text-xl font-light leading-relaxed">
                        Planes escalables diseñados para transformar el BI de un costo operativo a un generador de utilidades.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`glass block-rounded p-10 border-white/5 relative flex flex-col ${plan.popular ? "border-primary/50 shadow-2xl shadow-primary/10" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                                    Más Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-sm text-muted font-light mb-8 leading-relaxed">{plan.desc}</p>
                            <div className="text-3xl font-bold text-white mb-8 tracking-tighter">{plan.price}</div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex gap-3 text-xs text-muted items-center">
                                        <Check size={14} className="text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/#contacto"
                                className={`w-full py-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-all ${plan.popular ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20" : "glass text-white hover:bg-white/5"}`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
