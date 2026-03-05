import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border-subtle py-20">
            <div className="container-custom flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-xs space-y-6">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                        DATA<span className="text-primary">RENTABLE</span>
                    </Link>
                    <p className="text-text-muted text-sm leading-relaxed">
                        Transformamos la información de tu empresa en activos rentables mediante arquitectura avanzada de datos y BI.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Soluciones</h4>
                        <div className="flex flex-col gap-3 text-sm text-text-muted">
                            <Link href="/retail" className="hover:text-primary transition-colors">Retail</Link>
                            <Link href="/constructoras" className="hover:text-primary transition-colors">Constructoras</Link>
                            <Link href="/flotas" className="hover:text-primary transition-colors">Flotas</Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Compañía</h4>
                        <div className="flex flex-col gap-3 text-sm text-text-muted">
                            <Link href="/sobre" className="hover:text-primary transition-colors">Sobre nosotros</Link>
                            <Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
                            <Link href="/casos" className="hover:text-primary transition-colors">Casos de éxito</Link>
                        </div>
                    </div>

                    <div className="space-y-4 col-span-2 md:col-span-1">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Contacto</h4>
                        <div className="flex flex-col gap-3 text-sm text-text-muted font-mono">
                            <p>hola@datarentable.com</p>
                            <p>Santiago, Chile</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-custom mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-black uppercase tracking-widest text-text-muted/40">
                <p>© 2024 DataRentable. Todos los derechos reservados.</p>
                <div className="flex gap-8">
                    <Link href="/privacidad">Privacidad</Link>
                    <Link href="/terminos">Términos</Link>
                </div>
            </div>
        </footer>
    );
}
