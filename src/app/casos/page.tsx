"use client";

import { motion } from "framer-motion";
import {
    BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";
import {
    TrendingUp,
    Construction,
    ShoppingCart,
    Truck,
    ArrowRight,
    CheckCircle2,
    Target,
    Zap
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

// --- DATA SIMULATION ---

const constructorData = [
    { name: "Sem 1", planeado: 4000, real: 4400 },
    { name: "Sem 2", planeado: 3000, real: 3200 },
    { name: "Sem 3", planeado: 2000, real: 1900 },
    { name: "Sem 4", planeado: 2780, real: 2500 },
    { name: "Sem 5", planeado: 1890, real: 1700 },
    { name: "Sem 6", planeado: 2390, real: 2100 },
];

const retailData = [
    { name: "Lunes", ventas: 2400 },
    { name: "Martes", ventas: 1398 },
    { name: "Miércoles", ventas: 9800 },
    { name: "Jueves", ventas: 3908 },
    { name: "Viernes", ventas: 4800 },
    { name: "Sábado", ventas: 3800 },
    { name: "Domingo", ventas: 4300 },
];

const fleetData = [
    { name: "Ruta Norte", consumo: 400 },
    { name: "Ruta Sur", consumo: 300 },
    { name: "Ruta Este", consumo: 200 },
    { name: "Ruta Oeste", consumo: 278 },
];

const COLORS = ["#00F2FF", "#00A3FF", "#6EE7B7", "#9333EA"];

export default function CasosDeExito() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            {/* Header section */}
            <section className="container-custom mb-20">
                <motion.div {...fadeInUp} className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-8 border-white/5">
                        <TrendingUp size={14} className="text-primary" />
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Resultados Tangibles</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                        Casos de <span className="text-gradient italic">Éxito.</span>
                    </h1>
                    <p className="text-xl text-muted font-light leading-relaxed">
                        Explora cómo hemos transformado la operativa de empresas líderes mediante la arquitectura de datos y Business Intelligence.
                    </p>
                </motion.div>
            </section>

            {/* Case 1: Constructora */}
            <section className="container-custom mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div {...fadeInUp} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-primary border-white/5">
                                <Construction size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Edifica Pro • Constructora</h2>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-primary text-xs font-black uppercase tracking-widest">El Desafío</h3>
                            <p className="text-text-muted font-light">
                                Desviaciones de presupuesto del 15% por falta de control en tiempo real sobre el avance de obra y costos de materiales.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-primary text-xs font-black uppercase tracking-widest">La Solución</h3>
                            <p className="text-text-muted font-light">
                                Implementación de un pipeline de datos que integra el ERP financiero con las planillas de obra, visualizado en un Dashboard de Control Presupuestario.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">-22%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Costos Operativos</div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">100%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Visibilidad de Gastos</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="glass block-rounded p-8 border-white/5 h-[400px] relative overflow-hidden group"
                    >
                        <div className="absolute top-6 left-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[9px] font-black text-muted uppercase tracking-widest">Ejecución vs Presupuesto</span>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={constructorData} margin={{ top: 60, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="name"
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                    itemStyle={{ fontSize: "12px" }}
                                />
                                <Legend wrapperStyle={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", paddingTop: "20px" }} />
                                <Bar dataKey="real" name="Gasto Real" fill="#00F2FF" radius={[4, 4, 0, 0]} />
                                <Bar dataKey="planeado" name="Pto. Original" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </section>

            {/* Case 2: Retail */}
            <section className="container-custom mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        {...fadeInUp}
                        className="order-2 lg:order-1 glass block-rounded p-8 border-white/5 h-[400px] relative overflow-hidden"
                    >
                        <div className="absolute top-6 left-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-[9px] font-black text-muted uppercase tracking-widest">Ventas Semanales Optimizadas</span>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={retailData} margin={{ top: 60, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                <XAxis
                                    dataKey="name"
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <Tooltip
                                    contentStyle={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="ventas"
                                    stroke="#FF3D71"
                                    strokeWidth={4}
                                    dot={{ fill: "#FF3D71", r: 4 }}
                                    activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent border-white/5">
                                <ShoppingCart size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">NovaStyle • Retail</h2>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-accent text-xs font-black uppercase tracking-widest">El Desafío</h3>
                            <p className="text-text-muted font-light">
                                Rotura de stock recurrente en productos de alta rotación y sobrestock en categorías de baja rentabilidad.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-accent text-xs font-black uppercase tracking-widest">La Solución</h3>
                            <p className="text-text-muted font-light">
                                Sistema de análisis predictivo de demanda basado en histórico de ventas y estacionalidad, con alertas automáticas de reabastecimiento.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">+18%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Ticket Promedio</div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">-40%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Stock Inmovilizado</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Case 3: Flota */}
            <section className="container-custom mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div {...fadeInUp} className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-[#6EE7B7] border-white/5">
                                <Truck size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">TransGlobal • Logística</h2>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#6EE7B7] text-xs font-black uppercase tracking-widest">El Desafío</h3>
                            <p className="text-text-muted font-light">
                                Altos costos de combustible y mantenimientos correctivos caros por falta de monitoreo proactivo de la flota.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[#6EE7B7] text-xs font-black uppercase tracking-widest">La Solución</h3>
                            <p className="text-text-muted font-light">
                                Dashboard interactivo de telemetría que consolida GPS e informes de carga, identificando rutas ineficientes y comportamientos de conducción.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">-14%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Consumo Combustible</div>
                            </div>
                            <div className="glass p-6 rounded-2xl border-white/5">
                                <div className="text-2xl font-bold text-white mb-1">+30%</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-muted">Vida Útil Neumáticos</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="glass block-rounded p-8 border-white/5 h-[400px] relative overflow-hidden"
                    >
                        <div className="absolute top-6 left-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#6EE7B7] animate-pulse" />
                            <span className="text-[9px] font-black text-muted uppercase tracking-widest">Distribución de Consumo por Ruta</span>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={fleetData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="consumo"
                                >
                                    {fleetData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                                />
                                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: "10px", textTransform: "uppercase" }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="container-custom pb-32">
                <motion.div
                    {...fadeInUp}
                    className="glass block-rounded p-12 md:p-24 text-center border-white/5 relative overflow-hidden bg-primary/[0.02]"
                >
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Tu empresa puede ser la próxima.</h2>
                        <p className="text-muted text-lg font-light leading-relaxed">
                            No dejes que tus datos se queden en el pasado. Únete a las empresas que ya están decidiendo con claridad total.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
                            <Link href="/#contacto" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                Agendar Diagnóstico
                            </Link>
                            <Link href="/" className="w-full sm:w-auto glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                                Volver al Inicio
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
