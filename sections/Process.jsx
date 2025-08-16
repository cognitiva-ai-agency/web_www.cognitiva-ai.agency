"use client";
import React from "react";
import { PROCESS_STEPS } from "../utils/constants";
import { Button } from "../ui/Button";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function Process() {
  const { ref } = useScrollAnimation();

  const stepGradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-amber-600",
    "from-indigo-600 to-blue-600",
  ];

  return (
    <section
      id="proceso"
      className="relative py-32 bg-[#000412] overflow-hidden"
      aria-label="Cómo trabajamos"
    >
      {/* Efectos de fondo */}
      <div aria-hidden className="absolute inset-0">
        {/* Gradientes animados */}
        <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-600/10 to-transparent blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-gradient-to-tl from-blue-500/10 to-transparent blur-[120px] rounded-full animate-pulse-slow animation-delay-2000" />
        
        {/* Línea de proceso animada */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-scan" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header mejorado */}
        <header className="text-center mb-20">
          {/* Badge iluminado */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Sparkles className="h-5 w-5 text-indigo-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-indigo-300">
                  Proceso Ágil y Eficiente
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">¿Cómo trabajamos?</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 animate-gradient-x">
              Simple y efectivo
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto">
            Metodología probada para resultados extraordinarios en tiempo récord
          </p>
        </header>

        {/* Timeline mejorado */}
        <div className="relative">
          {/* Línea central conectora (desktop) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Steps */}
          <ol className="relative grid lg:grid-cols-5 gap-8 lg:gap-4">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;
              const gradient = stepGradients[index];
              const isLast = index === PROCESS_STEPS.length - 1;
              
              return (
                <li
                  key={step.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Línea conectora móvil */}
                  {!isLast && (
                    <div className="lg:hidden absolute top-28 left-10 bottom-0 w-[2px] bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                  
                  {/* Card del paso */}
                  <div className="relative">
                    {/* Número del paso con efecto glow */}
                    <div className="relative mb-6 lg:mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                      <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className={`text-3xl font-thin bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Punto de conexión (desktop) */}
                      {!isLast && (
                        <div className="hidden lg:block absolute top-10 left-full w-full h-[2px]">
                          <div className="relative h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-flow`} />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Contenido del paso */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 lg:p-8 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_30px_60px_rgba(99,102,241,0.25)]">
                      
                      {/* Glow interno */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                      
                      {/* Icono */}
                      <div className="relative mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                        <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Título y tiempo */}
                      <h3 className="text-xl font-light text-white mb-2">{step.title}</h3>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20 text-xs font-light text-white`}>
                        <CheckCircle className="h-3 w-3" />
                        {step.time}
                      </span>
                      
                      {/* Descripción */}
                      <p className="mt-4 text-sm font-light text-blue-100/80 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA Section mejorada - CONVERTIDO A ENLACE */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <div className="relative group">
              {/* Glow animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Botón principal convertido a enlace */}
              <a
                href="https://cal.com/www.cognitiva-ai.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-12 py-6 rounded-full bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-xl border border-white/20 text-white font-light tracking-wide shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-105"
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 animate-pulse" />
                  <span className="text-lg">Iniciar mi transformación digital</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
          
          {/* Texto de apoyo */}
          <div className="mt-8 space-y-2">
            <p className="text-sm font-light text-blue-200/60">
              Sin compromiso • Diagnóstico gratuito • Plan de acción personalizado
            </p>
            <div className="flex items-center justify-center gap-6 text-xs font-light text-blue-200/40">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                Implementación en 7 días
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                ROI garantizado
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                Soporte 24/7
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 8s linear infinite;
        }
        
        .animate-flow {
          animation: flow 2s ease-out;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
}