"use client";
import React from "react";
import { CASE_STUDIES } from "../utils/constants";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
  Quote,
  Sparkles,
  Building2
} from "lucide-react";

export default function CaseStudies() {
  const { ref } = useScrollAnimation();

  const gradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
  ];

  return (
    <section
      id="casos"
      className="relative py-32 bg-[#000412] overflow-hidden"
      aria-label="Resultados que hablan"
    >
      {/* Efectos de fondo */}
      <div aria-hidden className="absolute inset-0">
        {/* Gradientes animados */}
        <div className="absolute top-1/3 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-purple-600/10 to-transparent blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-pink-500/10 to-transparent blur-[120px] rounded-full animate-pulse-slow animation-delay-3000" />
        
        {/* Líneas de conexión animadas */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59,130,246)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient-line)"
              strokeWidth="1"
              className="animate-draw-line"
              style={{ animationDelay: `${i * 2}s` }}
            />
          ))}
        </svg>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header mejorado */}
        <header className="text-center mb-16">
          {/* Badge iluminado */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <BadgeCheck className="h-5 w-5 text-purple-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-purple-300">
                  Casos de Éxito Verificados
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">Resultados que</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-rose-400 animate-gradient-x">
              transforman
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto">
            Historias reales de empresas que multiplicaron sus resultados con nuestra tecnología
          </p>
        </header>

        {/* Grid de casos mejorado */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, index) => {
            const gradient = gradients[index % gradients.length];
            
            return (
              <article
                key={cs.company}
                className="group relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow de fondo (más sutil) */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500`} />
                
                {/* Borde con gradiente (menos intenso) */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-[1.5px] transition-all duration-500`} />
                
                {/* Card principal */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_rgba(147,51,234,0.12)]">
                  
                  {/* Header del caso */}
                  <div className="relative p-8 pb-0">
                    {/* Tags superiores */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20`}>
                        <Building2 className="h-4 w-4 text-white" />
                        <span className="text-xs font-light text-white">{cs.tag}</span>
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/10">
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-xs font-light text-emerald-300">Verificado</span>
                      </span>
                    </div>

                    {/* Nombre de la empresa */}
                    <h3 className="text-3xl font-light text-white mb-2">{cs.company}</h3>
                    
                    {/* Stack tecnológico */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cs.stack.split(' + ').map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-xs font-light text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contenido del caso */}
                  <div className="p-8 pt-0 space-y-6">
                    {/* Problema */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                      <div className="pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-400" />
                          <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                            Desafío
                          </span>
                        </div>
                        <p className="text-sm font-light text-red-100/80 leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>
                    </div>

                    {/* Solución */}
                    <div className="relative">
                      <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                      <div className="pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-400" />
                          <span className="text-xs font-medium uppercase tracking-wider text-blue-400">
                            Solución IA
                          </span>
                        </div>
                        <p className="text-sm font-light text-blue-100/80 leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    {/* Resultados con énfasis */}
                    <div className="relative p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-emerald-400" />
                        <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                          Resultados Medibles
                        </span>
                      </div>
                      <p className="text-lg font-light text-white leading-relaxed">
                        {cs.results}
                      </p>
                    </div>

                    {/* Testimonio */}
                    <div className="relative mt-6 p-5 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
                      <Quote className="absolute top-3 left-3 h-6 w-6 text-white/10" />
                      <blockquote className="relative text-sm font-light text-blue-100/90 italic leading-relaxed pl-4">
                        "{cs.testimonial}"
                      </blockquote>
                    </div>

                    {/* CTA - CONVERTIDO A ENLACE */}
                    <a 
                      href="https://cal.com/www.cognitiva-ai.agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative w-full mt-6 block"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-md opacity-60 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                      <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover/btn:shadow-[0_0_30px_rgba(147,51,234,0.5)]">
                        <Sparkles className="h-4 w-4 text-white" />
                        <span className="text-sm font-light text-white">
                          Quiero resultados similares
                        </span>
                        <ArrowRight className="h-4 w-4 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer con estadísticas */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Empresas transformadas" },
              { value: "3.5x", label: "ROI promedio" },
              { value: "92%", label: "Retención de clientes" },
              { value: "24h", label: "Tiempo de implementación" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm font-light text-blue-200/60">{stat.label}</p>
              </div>
            ))}
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
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes draw-line {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
        
        .animate-draw-line {
          animation: draw-line 10s linear infinite;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </section>
  );
}
