"use client";

import { motion } from "framer-motion";
import { Truck, Activity, Gauge, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ChartCard from "@/components/ui/ChartCard";
import {
    LineChart, Line, BarChart as ReBarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Cell, PieChart, Pie, Legend
} from 'recharts';

const fuelData = [
    { name: 'Lun', consumo: 45, km: 300 },
    { name: 'Mar', consumo: 52, km: 350 },
    { name: 'Mie', consumo: 48, km: 320 },
    { name: 'Jue', consumo: 61, km: 400 },
    { name: 'Vie', consumo: 55, km: 380 },
    { name: 'Sab', consumo: 40, km: 280 },
    { name: 'Dom', consumo: 35, km: 250 },
];

const statusData = [
    { name: 'En Ruta', value: 65 },
    { name: 'Disponible', value: 20 },
    { name: 'Mantenimiento', value: 15 },
];

const COLORS = ['#10B981', '#7C3AED', '#EF4444'];

export default function FleetPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="container-custom">
                <Link href="/" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-12 hover:gap-3 transition-all">
                    <ArrowLeft size={14} /> Volver al Inicio
                </Link>

                <header className="max-w-3xl mb-20">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                        <Truck size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
                        Optimización de <span className="text-gradient">Flotas</span>
                    </h1>
                    <p className="text-muted text-xl font-light leading-relaxed">
                        Reduce costos operativos y aumenta la disponibilidad de tus activos mediante telemetría avanzada y mantenimiento predictivo.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white tracking-tight">Desafíos del Sector</h2>
                        <ul className="space-y-4">
                            {[
                                "Altos costos de mantenimiento no planificado.",
                                "Inconsistencia en el rendimiento de combustible.",
                                "Vehículos parados sin justificación clara.",
                                "Dificultad para medir el costo por kilómetro real."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-3 text-muted font-light items-start">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass block-rounded p-12 border-white/5 bg-primary/[0.02]">
                        <h3 className="text-xl font-bold text-white mb-6">Métricas de Eficiencia</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: "CPK", value: "Costo por KM" },
                                { label: "UPTIME", value: "Disponibilidad" },
                                { label: "MPG", value: "Rendimiento" },
                                { label: "TCO", value: "Costo Propiedad" }
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
                            title="Control de Combustible"
                            description="Detecta anomalías y optimiza el rendimiento basado en patrones de conducción."
                            icon={<Gauge />}
                        />
                        <Card
                            title="Predictivo de Fallas"
                            description="Anticípate a reparaciones costosas mediante el análisis de tendencias de telemetría."
                            icon={<Activity />}
                        />
                        <Card
                            title="Ciclo de Vida Activos"
                            description="Analiza cuándo es el momento óptimo para renovar cada unidad de tu flota."
                            icon={<Truck />}
                        />
                    </div>
                </section>

                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold text-white tracking-tight">Telemetría de Ejemplo</h2>
                            <p className="text-muted font-light mt-2">Monitoreo activo para reducir el costo por kilómetro y aumentar el tiempo en ruta.</p>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50">Panel de Control</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ChartCard title="Consumo vs Kilómetros" subtitle="Rendimiento Semanal (L/KM)">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={fuelData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#27272A" vertical={false} />
                                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis yAxisId="left" stroke="#10B981" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis yAxisId="right" orientation="right" stroke="#7C3AED" fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#12121A', border: '1px solid #27272A', borderRadius: '12px' }}
                                        itemStyle={{ color: '#F3F4F6' }}
                                    />
                                    <Line yAxisId="left" type="monotone" dataKey="consumo" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#10B981' }} name="Litros" />
                                    <Line yAxisId="right" type="monotone" dataKey="km" stroke="#7C3AED" strokeWidth={3} dot={{ r: 4, fill: '#7C3AED' }} name="Kilómetros" />
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartCard>

                        <ChartCard title="Estado de la Flota" subtitle="Disponibilidad de Activos">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#12121A', border: '1px solid #27272A', borderRadius: '12px' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </ChartCard>
                    </div>
                </section>

                <section className="glass block-rounded p-12 md:p-20 border-white/5 text-center bg-primary/[0.01]">
                    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Tu flota, bajo control total.</h2>
                    <p className="text-muted font-light mb-12 max-w-xl mx-auto">
                        Maximiza la rentabilidad de tus activos móviles con inteligencia de datos aplicada al transporte.
                    </p>
                    <Link href="/#contacto" className="inline-flex bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                        Solicitar Diagnóstico Flotas
                    </Link>
                </section>
            </div>
        </main>
    );
}
