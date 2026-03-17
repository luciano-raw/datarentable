"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Search,
  Cpu,
  Settings,
  ShieldCheck,
  Smartphone,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/sections/ContactForm";
import TeamSection from "@/components/sections/Team";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Block */}
      <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 px-6">
        <div className="hero-glow" />
        <div className="container-custom text-center">
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-10 border-white/5 shadow-sm mx-auto"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Consultoría Tecnológica Integral</span>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold mb-10 leading-[0.95] tracking-tighter text-white"
          >
            Tus datos, <br />
            <span className="text-gradient italic">rentabilizados.</span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-base md:text-xl text-muted max-w-xl mx-auto mb-16 leading-relaxed font-light"
          >
            Consultoría Tecnológica e Inteligencia de Negocios para PYMES. BI, IA y Automatizaciones diseñadas para que el crecimiento sea tu única métrica.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#contacto"
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:translate-y-[-3px] active:translate-y-0"
            >
              Agendar Consultoría
            </a>
            <a
              href="https://wa.me/56930531304?text=Hola%20DataRentable,%20me%20interesa%20agendar%20una%20consultoría%20de%20datos%20para%20mi%20empresa."
              className="w-full sm:w-auto glass hover:bg-white/5 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all"
            >
              Hablar con Experto
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="container-custom section-spacing mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass block-rounded py-12 px-6 border-white/5 text-center"
        >
          <p className="text-[10px] font-black text-muted/60 uppercase tracking-[0.4em] mb-12">Expertos en ecosistemas líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <div className="text-lg font-black tracking-tighter italic">POWER BI</div>
            <div className="text-lg font-black tracking-tighter italic">EXCEL PRO</div>
            <div className="text-lg font-black tracking-tighter italic">SQL</div>
            <div className="text-lg font-black tracking-tighter italic">PYTHON BI</div>
            <div className="text-lg font-black tracking-tighter italic">N8N</div>
            <div className="text-lg font-black tracking-tighter italic">MACHINE LEARNING</div>
            <div className="text-lg font-black tracking-tighter italic">OPENROUTER</div>
            <div className="text-lg font-black tracking-tighter italic">NEXT.JS</div>
            <div className="text-lg font-black tracking-tighter italic">CSS</div>
            <div className="text-lg font-black tracking-tighter italic">API REST</div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview Block */}
      <section id="servicios" className="container-custom section-spacing">
        <motion.div
          {...fadeInUp}
          className="glass block-rounded p-12 md:p-20 border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.01]"
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter leading-none">Tu éxito no es suerte, <br /> son decisiones con <span className="text-primary italic">tecnología.</span></h2>
            <p className="text-muted text-lg font-light mb-8">Análisis de Datos, IA, Automatización y Web. Ecosistemas integrales para que tu rentabilidad deje de ser un misterio.</p>
            <Link href="/#servicios" className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
              Explorar Servicios <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            {[
              { icon: <Database />, t: "Data & BI", link: "/servicios/analisis-de-datos" },
              { icon: <Workflow />, t: "Automatización", link: "/servicios/automatizacion-procesos" },
              { icon: <Cpu />, t: "IA", link: "/servicios/inteligencia-artificial" },
              { icon: <Search />, t: "Web & SEO", link: "/servicios/optimizacion-web-seo" }
            ].map((s, i) => (
              <Link key={i} href={s.link} className="glass p-6 rounded-2xl flex flex-col items-center gap-3 text-center border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="text-primary group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-[9px] font-black uppercase tracking-widest text-muted group-hover:text-white transition-colors">{s.t}</div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Industry Solutions Block */}
      <section id="soluciones" className="container-custom section-spacing">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 px-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-white tracking-tighter mb-4">Soluciones Verticales</h2>
            <p className="text-text-muted text-lg font-light">Especialización quirúrgica para los sectores que mueven la economía.</p>
          </div>
          <div className="h-px flex-grow bg-white/5 mx-8 hidden md:block" />
          <div className="text-[10px] font-black uppercase tracking-widest text-primary">Industrias Clave</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/retail" className="block">
            <Card
              title="Retail & E-commerce"
              description="Control de stock en tiempo real, análisis de ticket promedio y optimización de márgenes por producto."
              onClick={() => { }}
            />
          </Link>
          <Link href="/constructoras" className="block">
            <Card
              title="Constructoras"
              description="Auditoría de costos operativos, control de avance de obra financiero y gestión de presupuestos dinámicos."
              onClick={() => { }}
            />
          </Link>
          <Link href="/flotas" className="block">
            <Card
              title="Flotas & Logística"
              description="Optimización de rutas, control de consumo de combustible y mantenimiento predictivo de activos."
              onClick={() => { }}
            />
          </Link>
        </div>
      </section>

      {/* Plans CTA Block */}
      <section className="container-custom section-spacing">
        <motion.div
          {...fadeInUp}
          className="glass block-rounded p-12 md:p-20 border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <h2 className="text-4xl font-bold mb-6 text-white tracking-tight">Planes diseñados para crecer.</h2>
          <p className="text-muted font-light mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Inversiones transparentes adaptadas a cada etapa de tu empresa. Desde el diagnóstico inicial hasta la automatización total.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/planes" className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all shadow-xl shadow-white/5">
              Ver Todos los Planes
            </Link>
            <Link href="/#contacto" className="w-full sm:w-auto glass text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
              Consultoría Custom
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Process Block */}
      <section id="proceso" className="container-custom section-spacing">
        <motion.div
          {...fadeInUp}
          className="glass block-rounded p-12 md:p-20 border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white tracking-tight">Tu camino a la claridad total</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { step: "01", icon: <Search />, title: "Diagnóstico", desc: "Auditoría de datos sin compromiso." },
                { step: "02", icon: <Cpu />, title: "Arquitectura", desc: "Diseño de tuberías de información." },
                { step: "03", icon: <Workflow />, title: "Visualización", desc: "Dashboards listos para decidir." },
                { step: "04", icon: <Settings />, title: "Optimización", desc: "Acompañamiento continuo." }
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-14 h-14 rounded-2xl glass mb-6 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-black text-primary/40 uppercase tracking-widest mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Team Block */}
      <TeamSection />

      {/* FAQ Block */}
      <section id="faq" className="container-custom section-spacing">
        <div className="glass block-rounded p-12 md:p-20 border-white/5">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold text-white tracking-tighter mb-6 leading-none">Despeja tus <br /> dudas.</h2>
              <p className="text-muted font-light leading-relaxed">Todo lo que necesitas saber antes de convertir tus datos en activos rentables.</p>
            </div>

            <div className="md:w-2/3 space-y-6">
              {[
                { q: "¿Necesito software específico?", a: "Nos adaptamos a lo que ya usas: Excel, SQL, Google Sheets o ERPs. El valor está en la arquitectura, no solo en la herramienta." },
                { q: "¿Qué tan seguros están los datos?", a: "Absolutamente protegidos. Trabajamos bajo protocolos de solo lectura y encriptación de extremo a extremo." },
                { q: "¿Mi negocio es pequeño para BI?", a: "Al contrario. Una PYME con datos claros crece un 40% más rápido que una que decide por intuición." },
                { q: "¿Cuánto tarda la implementación?", a: "En 15 días tendrás tu primer dashboard operativo entregando datos críticos." },
                { q: "¿Puedo automatizar procesos si no sé programar?", a: "Nosotros nos hacemos cargo de toda la lógica y conexión de APIs. Te entregamos flujos listos funcionando en segundo plano." },
                { q: "¿Los chatbots de IA suenan robóticos?", a: "No. Entrenamos a los agentes con los documentos, PDF comerciales y el tono conversacional de tu marca para asegurar respuestas precisas y naturales." },
                { q: "¿Cuánto demora la mejora web y SEO?", a: "La velocidad de carga la mejoramos en días. El posicionamiento orgánico en Google comienza a consolidarse a partir del tercer mes." },
                { q: "¿Por dónde me recomiendan empezar?", a: "Sugerimos solicitar un diagnóstico gratuito, donde veremos juntos qué duele más: si organizar datos, optimizar ventas (Web), ganar tiempo (Automatizar) o atender mejor (IA)." }
              ].map((faq, idx) => (
                <details key={idx} className="group cursor-pointer border-b border-white/5 pb-6">
                  <summary className="font-bold flex justify-between items-center list-none text-white/80 group-hover:text-white transition-colors">
                    {faq.q}
                    <span className="text-primary/40 group-open:rotate-45 transition-transform text-2xl font-light">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-muted font-light leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section id="contacto" className="container-custom pb-32 pt-16">
        <motion.div
          {...fadeInUp}
          className="glass block-rounded p-12 md:p-24 text-center border-white/5 relative overflow-hidden bg-primary/[0.01]"
        >
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

          <div className="max-w-xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tighter leading-none">¿Listo para el equilibrio?</h2>
            <p className="text-muted text-lg mb-16 font-light leading-relaxed">
              Descubre qué tan rentable puede ser tu empresa con una infraestructura de datos proactiva.
            </p>

            <ContactForm />

            <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary"><ShieldCheck size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-muted uppercase tracking-widest">Seguridad</div>
                  <div className="text-xs text-white/50">Lectura Segura</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary"><Smartphone size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-muted uppercase tracking-widest">Mobile</div>
                  <div className="text-xs text-white/50">Cloud Ready</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary"><MessageSquare size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-muted uppercase tracking-widest">WhatsApp</div>
                  <div className="text-xs text-white/50">Vía Directa</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
