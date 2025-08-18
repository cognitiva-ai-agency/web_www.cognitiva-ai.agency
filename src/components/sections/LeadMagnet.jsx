"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function LeadMagnet() {
  const { ref } = useScrollAnimation();

  return (
    <section id="lead" className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] text-white">
      <div ref={ref} className="container-padded animate-in text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-3">Guía de Automatización con IA (Gratis)</h2>
        <p className="text-lg opacity-90 mb-8">Checklist de 47 puntos + Calculadora de ROI + Plantillas listas</p>
        <div className="glass rounded-2xl p-6 mx-auto max-w-md">
          <input type="email" placeholder="Tu email corporativo" className="w-full px-4 py-3 rounded-lg text-gray-900 mb-4 border" />
          <Button variant="warning" className="w-full">Descargar y Enviar por WhatsApp</Button>
          <p className="text-xs mt-3 opacity-80">Sin spam. Puedes darte de baja cuando quieras.</p>
        </div>
      </div>
    </section>
  );
}
