"use client";
import React, { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Plus, Minus } from "lucide-react";
import { FAQS } from "../utils/constants";

export default function FAQ() {
  const { ref } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggle = (idx) => setOpenIndex((prev) => (prev === idx ? null : idx));

  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  const faqGradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-amber-600",
    "from-indigo-600 to-blue-600",
    "from-rose-600 to-red-600",
  ];

  return (
    <section
      id="faq"
      className="relative py-32 bg-[#000412] overflow-hidden"
      aria-labelledby="faq-title"
    >
      {/* Efectos de fondo interactivos */}
      <div aria-hidden className="absolute inset-0">
        {/* Gradientes animados */}
        <div className="absolute top-1/3 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-600/10 to-transparent blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-600/10 to-transparent blur-[120px] rounded-full animate-float-slow animation-delay-4000" />
        
        {/* Burbujas flotantes interactivas */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full animate-bubble-float"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-10%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Patrón de preguntas */}
        <div className="absolute inset-0 opacity-[0.02]">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl text-indigo-500 font-light animate-float-question"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              ?
            </div>
          ))}
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded relative animate-in max-w-5xl">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          {/* Badge iluminado */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <MessageCircle className="h-5 w-5 text-indigo-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-indigo-300">
                  Resolvemos todas tus dudas
                </span>
                <HelpCircle className="h-5 w-5 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 id="faq-title" className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">Preguntas</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 animate-gradient-x">
              frecuentes
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto">
            Todo lo que necesitas saber para tomar la mejor decisión
          </p>
        </div>

        {/* Acordeón mejorado con efectos 3D */}
        <div className="space-y-4" role="list" aria-label="Preguntas frecuentes">
          {FAQS.map((faq, idx) => {
            const open = openIndex === idx;
            const hovered = hoveredIndex === idx;
            const gradient = faqGradients[idx % faqGradients.length];
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <article
                key={faq.q}
                role="listitem"
                className="relative group"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  perspective: "1000px"
                }}
              >
                {/* Glow de fondo (más sutil) */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} transition-all duration-500 ${
                    open ? 'opacity-10 blur-lg' : 'opacity-0 blur-sm'
                  }`}
                />
                
                {/* Borde con gradiente animado (menos intenso) */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} transition-all duration-500 ${
                    open ? 'opacity-40 blur-[1px]' : 'opacity-0'
                  }`}
                />
                
                {/* Card principal con efecto 3D */}
                <div 
                  className={`relative rounded-3xl transition-all duration-500 transform-gpu ${
                    hovered ? 'translate-y-[-2px]' : ''
                  } ${open ? 'shadow-[0_20px_40px_rgba(99,102,241,0.12)]' : ''}`}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: hovered ? "rotateX(-2deg)" : "rotateX(0deg)"
                  }}
                >
                  <div className={`rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border transition-all duration-500 ${
                    open ? 'border-white/15' : 'border-white/10'
                  }`}>
                    
                    {/* Botón de pregunta */}
                    <button
                      id={buttonId}
                      aria-controls={panelId}
                      aria-expanded={open}
                      onClick={() => toggle(idx)}
                      onKeyDown={(e) => onKeyToggle(e, idx)}
                      className="w-full px-8 py-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        {/* Número/Icono con efecto (suave) */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl transition-opacity duration-500 ${open ? 'opacity-40' : 'opacity-20'}`} />
                          <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            open 
                              ? `bg-gradient-to-br ${gradient} shadow-lg` 
                              : 'bg-gradient-to-br from-white/10 to-white/5 border border-white/20'
                          }`}>
                            <span className={`text-lg font-light transition-all duration-500 ${
                              open ? 'text-white' : 'text-blue-200'
                            }`}>
                              {idx + 1}
                            </span>
                          </div>
                        </div>
                        
                        {/* Pregunta */}
                        <span className={`flex-1 text-lg font-light transition-all duration-500 ${
                          open ? 'text-white' : 'text-blue-100/90'
                        }`}>
                          {faq.q}
                        </span>
                        
                        {/* Indicador de expansión (glow reducido) */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-md opacity-0 transition-opacity duration-500 ${
                            open ? 'opacity-30' : ''
                          }`} />
                          <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                            open 
                              ? `bg-gradient-to-r ${gradient}` 
                              : 'bg-white/10 border border-white/20'
                          }`}>
                            {open ? (
                              <Minus className="h-4 w-4 text-white" />
                            ) : (
                              <Plus className="h-4 w-4 text-blue-200" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    {/* Panel de respuesta con animación suave */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-8 pb-6">
                        {/* Línea divisoria con gradiente */}
                        <div className={`h-px mb-6 bg-gradient-to-r from-transparent via-white/20 to-transparent`} />
                        
                        {/* Respuesta con estilo */}
                        <div className="pl-16">
                          <div className="relative">
                            {/* Decoración lateral */}
                            <div className={`absolute -left-8 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b ${gradient}`} />
                            
                            {/* Contenido de la respuesta */}
                            <div className="text-sm font-light text-blue-100/80 leading-relaxed">
                              {typeof faq.a === "string" ? (
                                <p>{faq.a}</p>
                              ) : (
                                faq.a
                              )}
                            </div>
                            
                            {/* Badge de info adicional si aplica */}
                            {idx === 0 && (
                              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                                <Sparkles className="h-4 w-4 text-emerald-400" />
                                <span className="text-xs font-light text-emerald-300">
                                  Implementación récord en el mercado
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA final - CONVERTIDO A ENLACE */}
        <div className="mt-16 text-center">
          <p className="text-sm font-light text-blue-200/60 mb-6">
            ¿Tienes alguna pregunta específica?
          </p>
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href="https://wa.me/56932417147?text=Hola%20Cognitiva,%20quiero%20saber%20m%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] group-hover:scale-105 inline-block"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-white" />
                  <span className="text-lg font-light text-white">
                    Hablar con un experto ahora
                  </span>
                  <ChevronDown className="h-5 w-5 text-white rotate-[-90deg]" />
                </span>
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs font-light text-blue-200/40">
            Respuesta inmediata • Sin compromiso • Asesoría personalizada
          </p>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        
        @keyframes bubble-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        
        @keyframes float-question {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.02; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.05; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        
        .animate-bubble-float {
          animation: bubble-float linear infinite;
        }
        
        .animate-float-question {
          animation: float-question 15s ease-in-out infinite;
        }
        
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </section>
  );
}
