"use client";
import React, { useState } from "react";
import { SERVICES } from "../../lib/utils/constants";
import { Sparkles, ArrowRight } from "lucide-react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import CollapsibleCard from "../ui/CollapsibleCard";

export default function Services() {
  const { ref } = useScrollAnimation();
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

  const serviceGradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600", 
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-amber-600",
    "from-rose-600 to-pink-600",
    "from-indigo-600 to-purple-600"
  ];

  return (
    <section
      id="servicios"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"
      aria-label="Soluciones que transforman tu negocio"
    >
      {/* Efectos de fondo mejorados */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Gradientes radiales múltiples */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 blur-[128px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 blur-[128px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[128px] rounded-full" />
        
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div ref={ref} className="container-padded animate-in relative">
        {/* Header mejorado */}
        <header className="text-center mb-20">
          {/* Badge iluminado */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-blue-400/30">
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-cyan-300">Suite Integral de Automatización IA</span>
              </div>
            </div>
          </div>

          {/* Título con degradado */}
          <h2 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x">
              Soluciones que transforman
            </span>
            <br />
            <span className="text-white/90 font-light">tu negocio</span>
          </h2>
          
          <p className="text-lg md:text-xl font-light text-blue-200/80 max-w-2xl mx-auto">
            Tecnología de vanguardia adaptada a tu empresa con el poder de la Inteligencia Artificial
          </p>
        </header>

        {/* Grid de servicios responsive - igual que Industrias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const gradient = serviceGradients[index % serviceGradients.length];
            const isExpanded = openIndex === index;
            const isHovered = hoveredCard === service.title;
            
            return (
              <CollapsibleCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                isOpen={isExpanded}
                isHovered={isHovered}
                onClick={() => toggleCard(index)}
                bullets={service.bullets}
                gradient={gradient}
                animationDelay={index * 50}
                onMouseEnter={() => setHoveredCard(service.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
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
                      {service.cta}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/90 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </CollapsibleCard>
            );
          })}
        </div>

        {/* Footer de sección con efecto de luz - CONVERTIDO A ENLACE */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <a 
                href="https://cal.com/www.cognitiva-ai.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-8 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] inline-block"
              >
                <span className="flex items-center gap-3">
                  <span className="text-base font-light text-white">Descubre todas las posibilidades</span>
                  <ArrowRight className="h-5 w-5 text-cyan-300 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 4s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-in > * {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
