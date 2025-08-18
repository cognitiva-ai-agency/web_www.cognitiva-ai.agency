"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function Demo() {
  const { ref } = useScrollAnimation();

  return (
    <section id="demo" className="py-20 bg-white">
      <div ref={ref} className="container-padded animate-in max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Ve Cognitiva en acción</h2>
          <p className="text-xl text-gray-600">Demo de 90 segundos que cambia la perspectiva</p>
        </div>

        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 rounded-2xl p-8 shadow-xl">
          <div className="aspect-video bg-blue-950 rounded-xl flex items-center justify-center overflow-hidden">
            <video
              src="/Video_Infográfico_de_Servicios_Digitales.mp4"
              controls
              className="w-full h-full object-cover rounded-xl"
              poster="/connitiva.png"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary">Ver Demo Completa</Button>
            <Button variant="secondary">Agendar Demo en Vivo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
