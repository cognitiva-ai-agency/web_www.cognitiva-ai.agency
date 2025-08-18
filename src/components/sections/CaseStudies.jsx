"use client";
import React, { useState } from "react";
import { CASE_STUDIES } from "../../lib/utils/constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useStableRandom } from "../../hooks/useStableRandom";
import {
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  BadgeCheck,
  ArrowRight,
  Quote,
  Sparkles,
  Building2,
  ChevronDown
} from "lucide-react";
import CollapsibleCard from "../ui/CollapsibleCard";

export default function CaseStudies() {
  const { ref } = useScrollAnimation();
  const lineElements = useStableRandom(5, 2);
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Abrir/cerrar la seleccionada
  };

  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  const gradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-amber-600",
    "from-rose-600 to-pink-600",
    "from-indigo-600 to-purple-600"
  ];

  return (
    <section
      id="casos"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
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
          {lineElements.map((element, i) => (
            <line
              key={i}
              x1={`${element.x1}%`}
              y1={`${element.y1}%`}
              x2={`${element.x2}%`}
              y2={`${element.y2}%`}
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

        {/* Grid de casos de éxito responsive - igual que Industrias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto">
          {CASE_STUDIES.map((cs, index) => {
            const gradient = gradients[index % gradients.length];
            const isExpanded = openIndex === index;
            const isHovered = hoveredCard === cs.company;
            
            return (
              <CollapsibleCard
                key={cs.company}
                icon={Building2}
                title={cs.company}
                subtitle={cs.tag}
                isOpen={isExpanded}
                isHovered={isHovered}
                onClick={() => toggleCard(index)}
                gradient={gradient}
                animationDelay={index * 50}
                onMouseEnter={() => setHoveredCard(cs.company)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Stack tecnológico */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {cs.stack.split(' + ').map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-white/15 to-white/8 border border-white/15 text-xs font-light text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Problema y Solución */}
                <div className="space-y-4 mb-6">
                  {/* Problema */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                        Desafío
                      </span>
                    </div>
                    <p className="text-sm font-light text-red-100/90 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  {/* Solución */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-blue-400">
                        Solución IA
                      </span>
                    </div>
                    <p className="text-sm font-light text-blue-100/90 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Resultados */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                        Resultados Medibles
                      </span>
                    </div>
                    <p className="text-sm font-light text-emerald-100/90 leading-relaxed">
                      {cs.results}
                    </p>
                  </div>
                </div>

                {/* Testimonio */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 mb-6">
                  <Quote className="h-4 w-4 text-white/20 mb-2" />
                  <blockquote className="text-sm font-light text-blue-100/90 italic leading-relaxed">
                    "{cs.testimonial}"
                  </blockquote>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://cal.com/www.cognitiva-ai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full block mt-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover/btn:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <span className="text-sm font-light text-white">
                      Transformar mi {cs.company}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/90 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </CollapsibleCard>
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