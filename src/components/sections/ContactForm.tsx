"use client";

import { useState, useTransition } from "react";
import { Send } from "lucide-react";
import { sendEmail } from "@/lib/actions";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        startTransition(async () => {
            const result = await sendEmail(formData);
            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        });
    };

    if (status === "success") {
        return (
            <div className="glass p-12 block-rounded text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto">
                    <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold">¡Mensaje enviado!</h3>
                <p className="text-text-muted">Un consultor senior se pondrá en contacto contigo a la brevedad.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-primary text-xs font-black uppercase tracking-widest pt-4"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-xl text-center">
                    Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o escríbenos por WhatsApp.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Nombre</label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Ej. Luciano Pérez"
                        className="w-full bg-surface-brighter/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Email Corporativo</label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="luciano@empresa.com"
                        className="w-full bg-surface-brighter/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">Industria</label>
                <select
                    name="industry"
                    className="w-full bg-surface-brighter/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                >
                    <option>Retail / E-commerce</option>
                    <option>Constructoras</option>
                    <option>Flotas / Logística</option>
                    <option>Otro</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-text-muted ml-1">¿En qué podemos ayudarte?</label>
                <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos brevemente tus desafíos con los datos..."
                    className="w-full bg-surface-brighter/50 border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-text-muted/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
            >
                {isPending ? "Enviando..." : (
                    <>
                        Solicitar Diagnóstico <Send size={16} />
                    </>
                )}
            </button>

            <p className="text-[10px] text-center text-text-muted uppercase tracking-widest opacity-50">
                Cumplimos con estándares de privacidad y seguridad de datos.
            </p>
        </form>
    );
}
