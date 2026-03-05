"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/56930531304?text=Hola%20DataRentable,%20me%20gustaría%20solicitar%20un%20diagnóstico%20estratégico%20de%20mis%20datos."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-2xl shadow-2xl shadow-[#25D366]/20 flex items-center justify-center group"
        >
            <div className="absolute -inset-1 bg-[#25D366]/40 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <MessageSquare size={24} fill="currentColor" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-out whitespace-nowrap font-bold text-sm">
                Consultar ahora
            </span>
        </motion.a>
    );
}
