"use client";
import React from "react";
import { PROCESS_STEPS } from "../../lib/utils/constants";
import { Button } from "@/components/ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";
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
      className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
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
        {/* Header ultra-compacto para móvil */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Badge ultra-compacto */}
          <div className="inline-block mb-4 sm:mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-light tracking-wide text-indigo-300">
                  <span className="hidden sm:inline">Proceso Ágil y Eficiente</span>
                  <span className="sm:hidden">Proceso Eficiente</span>
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin tracking-tight text-white mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="font-light">
              <span className="hidden sm:inline">¿Cómo trabajamos?</span>
              <span className="sm:hidden">¿Cómo trabajamos?</span>
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-300 to-cyan-400 animate-gradient-x">
              Simple y efectivo
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-blue-200/70 max-w-3xl mx-auto px-4 sm:px-2 md:px-0 leading-tight">
            <span className="hidden sm:inline">Metodología probada para resultados extraordinarios en tiempo récord</span>
            <span className="sm:hidden">Metodología probada para resultados extraordinarios</span>
          </p>
        </header>

        {/* Timeline mejorado */}
        <div className="relative">
          {/* Línea central conectora (desktop) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          {/* Steps optimizados para móvil */}
          <ol className="relative grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 max-w-xs sm:max-w-sm mx-auto lg:max-w-none px-2 sm:px-0">
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
                  {/* Línea conectora móvil optimizada */}
                  {!isLast && (
                    <div className="lg:hidden absolute top-20 sm:top-24 md:top-28 left-1/2 transform -translate-x-1/2 bottom-0 w-[1px] sm:w-[2px] bg-gradient-to-b from-white/20 to-transparent" />
                  )}
                  
                  {/* Card del paso */}
                  <div className="relative">
                    {/* Número del paso optimizado para móvil */}
                    <div className="relative mb-4 sm:mb-6 lg:mb-8 flex justify-center">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <span className={`text-2xl sm:text-2xl md:text-3xl font-thin bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                            {index + 1}
                          </span>
                        </div>
                        
                        {/* Punto de conexión (desktop) */}
                        {!isLast && (
                          <div className="hidden lg:block absolute top-10 left-full w-[calc(100vw/5)] h-[2px]">
                            <div className="relative h-full">
                              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5" />
                              <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-flow`} />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Contenido del paso optimizado para móvil */}
                    <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-4 sm:p-6 lg:p-8 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_30px_60px_rgba(99,102,241,0.25)] text-center">
                      
                      {/* Glow interno */}
                      <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${gradient} opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />
                      
                      {/* Icono optimizado */}
                      <div className="relative mb-3 sm:mb-4 flex justify-center">
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg sm:rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Título y tiempo optimizados */}
                      <h3 className="text-lg sm:text-xl font-light text-white mb-2 leading-tight">{step.title}</h3>
                      <div className="flex justify-center mb-3 sm:mb-4">
                        <span className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20 text-xs font-light text-white`}>
                          <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          {step.time}
                        </span>
                      </div>
                      
                      {/* Descripción optimizada */}
                      <p className="text-xs sm:text-sm font-light text-blue-100/80 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA Section optimizada para móvil */}
        <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center px-4 sm:px-0">
          <div className="inline-block">
            <div className="relative group">
              {/* Glow animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Botón principal optimizado para móvil */}
              <a
                href="https://cal.com/www.cognitiva-ai.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-xl border border-white/20 text-white font-light tracking-wide shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500 group-hover:scale-105"
              >
                <span className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                    <span className="hidden sm:inline">Iniciar mi transformación digital</span>
                    <span className="sm:hidden">Iniciar transformación</span>
                  </span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
          
          {/* Texto de apoyo optimizado para móvil */}
          <div className="mt-4 sm:mt-6 md:mt-8 space-y-2">
            <p className="text-xs sm:text-sm font-light text-blue-200/60 px-2">
              <span className="hidden sm:inline">Sin compromiso • Diagnóstico gratuito • Plan de acción personalizado</span>
              <span className="sm:hidden">Sin compromiso • Diagnóstico gratuito</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 text-xs font-light text-blue-200/40">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                <span className="hidden sm:inline">Implementación en 7 días</span>
                <span className="sm:hidden">7 días</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                <span className="hidden sm:inline">ROI garantizado</span>
                <span className="sm:hidden">ROI garantizado</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="h-3 w-3 text-emerald-400" />
                <span className="hidden sm:inline">Soporte 24/7</span>
                <span className="sm:hidden">24/7</span>
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