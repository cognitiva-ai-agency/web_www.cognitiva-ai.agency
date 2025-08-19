"use client";
import React, { useState } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useStableRandom } from "../../hooks/useStableRandom";
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Plus, Minus, Clock, Cpu, Shield, GraduationCap, TrendingUp, LogOut } from "lucide-react";
import { FAQS } from "../../lib/utils/constants";
import CollapsibleCard from "../ui/CollapsibleCard";

export default function FAQ() {
  const { ref } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const bubbleElements = useStableRandom(15, 4);
  const questionElements = useStableRandom(10, 5);

  const toggleCard = (index) => {
    const newOpenIndex = openIndex === index ? null : index;
    setOpenIndex(newOpenIndex);
    // Limpiar el hover state cuando se contrae una tarjeta
    if (newOpenIndex === null) {
      setHoveredCard(null);
    }
  };

  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCard(idx);
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

  const faqIcons = [
    Clock,        // ¿Tiempo de implementación?
    Cpu,          // ¿Compatibilidad con mi stack?
    Shield,       // ¿Qué pasa con mis datos?
    GraduationCap, // ¿Necesito conocimientos técnicos?
    TrendingUp,   // ¿ROI esperado?
    LogOut,       // ¿Puedo cancelar?
  ];

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="faq-title"
    >
      {/* Efectos de fondo interactivos */}
      <div aria-hidden className="absolute inset-0">
        {/* Gradientes animados */}
        <div className="absolute top-1/3 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-600/10 to-transparent blur-[150px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-purple-600/10 to-transparent blur-[120px] rounded-full animate-float-slow animation-delay-4000" />
        
        {/* Burbujas flotantes interactivas */}
        <div className="absolute inset-0">
          {bubbleElements.slice(0, 15).map((element, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full animate-bubble-float"
              style={{
                left: `${element.left}%`,
                bottom: `-10%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            />
          ))}
        </div>
        
        {/* Patrón de preguntas */}
        <div className="absolute inset-0 opacity-[0.02]">
          {questionElements.map((element, i) => (
            <div
              key={i}
              className="absolute text-6xl text-indigo-500 font-light animate-float-question"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
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
        {/* Header ultra-compacto para móvil */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Badge ultra-compacto para móvil */}
          <div className="inline-block mb-3 sm:mb-4 md:mb-6 lg:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-1.5 sm:gap-2 md:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-indigo-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-light tracking-wide text-indigo-300">
                  <span className="hidden sm:inline">Resolvemos todas tus dudas</span>
                  <span className="sm:hidden">Resolvemos dudas</span>
                </span>
                <HelpCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-purple-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 id="faq-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin tracking-tight text-white mb-3 sm:mb-4 px-2 sm:px-0">
            <span className="font-light">Preguntas</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 animate-gradient-x">
              frecuentes
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-blue-200/70 max-w-3xl mx-auto px-4 sm:px-2 md:px-0 leading-tight">
            Todo lo que necesitas saber para tomar la mejor decisión
          </p>
        </div>

        {/* Grid de FAQ ultra-optimizado para móvil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto px-2 sm:px-4 md:px-0" role="list" aria-label="Preguntas frecuentes">
          {FAQS.map((faq, idx) => {
            const isExpanded = openIndex === idx;
            const isHovered = hoveredCard === faq.q;
            const gradient = faqGradients[idx % faqGradients.length];
            const IconComponent = faqIcons[idx] || HelpCircle;

            return (
              <CollapsibleCard
                key={faq.q}
                icon={IconComponent}
                title={faq.q}
                isOpen={isExpanded}
                isHovered={isHovered}
                onClick={() => toggleCard(idx)}
                gradient={gradient}
                animationDelay={idx * 50}
                onMouseEnter={() => setHoveredCard(faq.q)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Contenido de la respuesta */}
                <div className="text-xs sm:text-sm font-light text-blue-100/90 leading-relaxed mb-4 sm:mb-6">
                  {typeof faq.a === "string" ? (
                    <p>{faq.a}</p>
                  ) : (
                    faq.a
                  )}
                </div>
                
                {/* Badge de info adicional si aplica */}
                {idx === 0 && (
                  <div className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                    <span className="text-xs font-light text-emerald-300 leading-tight">
                      Implementación récord en el mercado
                    </span>
                  </div>
                )}

                {/* CTA Button optimizado para móvil */}
                <a 
                  href="https://wa.me/56932417147?text=Hola%20Cognitiva,%20tengo%20una%20pregunta%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg sm:rounded-xl blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover/btn:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white/90" />
                    <span className="text-xs sm:text-sm font-light text-white">
                      Pregunta personalizada
                    </span>
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 text-white/90 rotate-[-90deg] group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </CollapsibleCard>
            );
          })}
        </div>

        {/* CTA final optimizado para móvil */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4 sm:px-0">
          <p className="text-xs sm:text-sm font-light text-blue-200/60 mb-4 sm:mb-6">
            ¿Tienes alguna pregunta específica?
          </p>
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href="https://wa.me/56932417147?text=Hola%20Cognitiva,%20quiero%20saber%20m%C3%A1s"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-4 sm:px-6 md:px-10 py-2.5 sm:py-4 md:py-5 rounded-full bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] group-hover:scale-105 inline-block"
              >
                <span className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light text-white whitespace-nowrap">
                    <span className="hidden sm:inline">Hablar con un experto ahora</span>
                    <span className="sm:hidden">Hablar con experto</span>
                  </span>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-white rotate-[-90deg]" />
                </span>
              </a>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 text-xs font-light text-blue-200/40 px-4 leading-tight">
            <span className="hidden sm:inline">Respuesta inmediata • Sin compromiso • Asesoría personalizada</span>
            <span className="sm:hidden">Respuesta inmediata • Sin compromiso</span>
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
