"use client";
import React from "react";
import { INTEGRATIONS } from "../../lib/utils/constants";
import { Code2, Clock, Shield, Sparkles, Cpu, Zap, Globe } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useStableRandom } from "../../hooks/useStableRandom";

export default function Integrations() {
  const { ref } = useScrollAnimation();
  const connectElements = useStableRandom(15, 8);

  return (
    <section
      id="integraciones"
      className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="integraciones-title"
    >
      {/* Efectos de fondo */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[1200px] h-[1200px] bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-transparent blur-[200px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/3 w-[1000px] h-[1000px] bg-gradient-to-tl from-purple-600/15 via-pink-500/10 to-transparent blur-[180px] rounded-full animate-pulse-slow animation-delay-3000" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <linearGradient id="integration-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="url(#integration-gradient)" className="animate-pulse" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="url(#integration-gradient)" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="url(#integration-gradient)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0">
          {connectElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float-connect"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
              }}
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping" />
            </div>
          ))}
        </div>
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header ultra-compacto para móvil */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-4 sm:mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-light tracking-wide text-cyan-300">
                  <span className="hidden sm:inline">Ecosistema Conectado con IA</span>
                  <span className="sm:hidden">Ecosistema IA</span>
                </span>
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 id="integraciones-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin tracking-tight text-white mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="font-light">Conectamos con</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 animate-gradient-x">
              todo tu stack
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-blue-200/70 max-w-3xl mx-auto px-4 sm:px-2 md:px-0 leading-tight">
            <span className="hidden sm:inline">Integración perfecta con más de 25+ plataformas líderes. APIs robustas, sincronización en tiempo real y seguridad enterprise.</span>
            <span className="sm:hidden">Integración perfecta con +25 plataformas líderes y APIs robustas.</span>
          </p>
        </div>

        {/* Grid de integraciones optimizado para móvil */}
        <div className="relative -mx-2 sm:-mx-4 lg:-mx-6 xl:-mx-8 px-2 sm:px-4 lg:px-6 xl:px-8 mb-8 sm:mb-12 md:mb-16">
          <div className="relative" style={{ perspective: "1000px" }}>
            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
              role="list"
            >
              {INTEGRATIONS.map((tool, index) => (
                <div
                  key={tool.name}
                  role="listitem"
                  title={tool.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 50}ms`, transform: "translateZ(0)" }}
                >
                  {/* Glow detrás (no afecta el blanco) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* TARJETA BLANCA optimizada para móvil */}
                  <div className="integration-card relative h-20 sm:h-24 md:h-28 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 flex items-center justify-center overflow-hidden transform-gpu transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-y-5 group-hover:shadow-[0_30px_60px_rgba(6,182,212,0.18)] bg-white border border-black/5">
                    {/* Logo optimizado */}
                    <img
                      src={`/logos%20herramientas/${tool.img}`}
                      alt={tool.name}
                      loading="lazy"
                      decoding="async"
                      className="relative max-h-8 sm:max-h-10 md:max-h-12 lg:max-h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Badge optimizado para móvil */}
                    <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping" />
                    </div>
                  </div>

                  {/* Línea de conexión al hover */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <line
                      x1="50%"
                      y1="50%"
                      x2="150%"
                      y2="50%"
                      stroke="url(#integration-gradient)"
                      strokeWidth="1"
                      className="animate-draw-line"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de features ultra-optimizada para móvil */}
        <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 animate-gradient-xy" />
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {[
                {
                  icon: Code2,
                  title: "APIs & Webhooks",
                  desc: "Conexión bidireccional instantánea con encriptación de grado militar",
                  gradient: "from-blue-600 to-cyan-600",
                  stats: "< 10ms latencia",
                },
                {
                  icon: Clock,
                  title: "Setup Express",
                  desc: "Implementación y migración sin downtime en tiempo récord",
                  gradient: "from-purple-600 to-pink-600",
                  stats: "24-48 hrs",
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  desc: "SLA 99.99% con monitoreo 24/7 y respuesta inmediata",
                  gradient: "from-emerald-600 to-teal-600",
                  stats: "ISO 27001",
                },
              ].map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="group relative">
                    <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/[0.08] p-3 sm:p-4 md:p-5 hover:bg-white/[0.06] transition-all duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-lg sm:rounded-xl md:rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                      <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mb-2 sm:mb-3">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <h4 className="text-sm sm:text-base md:text-lg font-light text-white mb-1.5 sm:mb-2 leading-tight">{feature.title}</h4>
                      <p className="text-xs sm:text-sm font-light text-blue-200/70 leading-snug mb-2 sm:mb-3 line-clamp-2">{feature.desc}</p>
                      <div className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-white/10`}>
                        <Zap className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-white" />
                        <span className="text-xs font-light text-white">{feature.stats}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center">
              <p className="text-xs sm:text-sm font-light text-blue-200/60 mb-2 sm:mb-3 px-2">
                <span className="hidden sm:inline">¿No encuentras tu herramienta favorita?</span>
                <span className="sm:hidden">¿No encuentras tu herramienta?</span>
              </p>
              <button className="group relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] group-hover:scale-105">
                  <span className="flex items-center gap-1.5 sm:gap-2">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-300" />
                    <span className="text-xs sm:text-sm font-light text-white whitespace-nowrap">
                      <span className="hidden sm:inline">La integramos en 48 horas</span>
                      <span className="sm:hidden">Integración en 48h</span>
                    </span>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        .integration-card {
          background: #ffffff !important;       /* BLANCO PURO */
          border: 1px solid rgba(0, 0, 0, 0.05) !important;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06) !important;
          isolation: isolate;                   /* evita mezclas con fondos */
        }
        
        /* Asegurar fondo blanco en móvil */
        @media (max-width: 768px) {
          .integration-card {
            background: #ffffff !important;
            border: 1px solid rgba(0, 0, 0, 0.08) !important;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08) !important;
          }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes float-connect {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(30px, -30px); }
          50% { transform: translate(-20px, -50px); }
          75% { transform: translate(-40px, 20px); }
        }
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        .animate-gradient-x { animation: gradient-x 6s ease infinite; background-size: 200% 200%; }
        .animate-gradient-xy { animation: gradient-xy 15s ease infinite; background-size: 200% 200%; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .animate-float-connect { animation: float-connect 20s ease-in-out infinite; }
        .animate-draw-line { animation: draw-line 2s ease-out; }
        .animation-delay-3000 { animation-delay: 3000ms; }
        .rotate-y-5 { transform: rotateY(5deg); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
