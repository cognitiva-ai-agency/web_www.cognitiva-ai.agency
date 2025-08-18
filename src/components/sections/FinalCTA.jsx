"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useStableRandom } from "../../hooks/useStableRandom";
import {
  CheckCircle,
  ShieldCheck,
  Clock,
  TrendingUp,
  MessageCircle,
  Plug,
  Infinity,
  ChevronRight,
  Sparkles,
  Zap,
  ArrowRight
} from "lucide-react";

const perks = [
  { 
    icon: CheckCircle, 
    title: "Diagnóstico sin costo", 
    desc: "Análisis profundo con IA de oportunidades",
    gradient: "from-emerald-600 to-teal-600" 
  },
  { 
    icon: TrendingUp, 
    title: "ROI garantizado", 
    desc: "Resultados medibles desde el día 1",
    gradient: "from-blue-600 to-cyan-600" 
  },
  { 
    icon: Clock, 
    title: "Implementación express", 
    desc: "Operativo en menos de 7 días",
    gradient: "from-purple-600 to-pink-600" 
  },
];

const trust = [
  { icon: Plug, label: "Integración total", value: "25+ plataformas" },
  { icon: Infinity, label: "Disponibilidad", value: "99.9% uptime" },
  { icon: ShieldCheck, label: "Seguridad", value: "ISO 27001" },
];

export default function FinalCTA() {
  const { ref } = useScrollAnimation();
  const floatingElements = useStableRandom(40, 6);

  return (
    <section 
      id="cta" 
      className="relative py-32 bg-[#000412] overflow-hidden"
    >
      {/* Efectos de fondo épicos */}
      <div aria-hidden className="absolute inset-0">
        {/* Aurora effect */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[1200px] h-[800px] bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-transparent blur-[150px] rounded-full animate-aurora" />
          <div className="absolute bottom-0 right-1/4 w-[1000px] h-[600px] bg-gradient-to-tl from-purple-600/20 via-pink-500/15 to-transparent blur-[120px] rounded-full animate-aurora animation-delay-3000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1000px] bg-gradient-radial from-indigo-600/10 to-transparent blur-[100px] animate-pulse-slow" />
        </div>
        
        {/* Partículas dinámicas */}
        <div className="absolute inset-0">
          {floatingElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-float-random"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded max-w-6xl relative animate-in">
        {/* Card principal con múltiples capas */}
        <div className="relative">
          {/* Glow exterior masivo */}
          <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-3xl animate-pulse-slow" />
          
          {/* Borde animado con gradiente */}
          <div className="relative rounded-[3rem] p-[2px] bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 animate-gradient-xy">
            
            {/* Card interior con glassmorphism */}
            <div className="relative rounded-[calc(3rem-2px)] bg-gradient-to-br from-[#000824] via-[#001030] to-[#000824] backdrop-blur-2xl px-8 md:px-16 py-16 md:py-20 overflow-hidden">
              
              {/* Patrón de fondo interno */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[size:30px_30px]" />
              </div>
              
              {/* Efectos de luz internos */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent blur-3xl" />
              
              {/* Contenido */}
              <div className="relative text-center">
                {/* Badge superior */}
                <div className="inline-block mb-8">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-white/[0.1] to-white/[0.05] backdrop-blur-xl border border-white/20">
                      <Zap className="h-5 w-5 text-cyan-300 animate-pulse" />
                      <span className="text-sm font-light tracking-wide text-cyan-300">
                        Oferta Limitada - Solo 10 cupos este mes
                      </span>
                      <Zap className="h-5 w-5 text-cyan-300 animate-pulse" />
                    </div>
                  </div>
                </div>
                
                {/* Título épico */}
                <h2 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
                  <span className="block font-light text-white/90">¿Listo para</span>
                  <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 animate-gradient-x font-extralight">
                    multiplicar x10
                  </span>
                  <span className="block font-light text-white/90">tus resultados?</span>
                </h2>
                
                <p className="text-xl font-light text-blue-200/70 max-w-3xl mx-auto mb-4">
                  Únete a <span className="text-cyan-300 font-normal">+500 empresas</span> que ya están un paso adelante
                </p>
                
                <p className="text-lg font-light text-blue-200/60 max-w-4xl mx-auto mb-12">
                  Transforma tu negocio con agentes de IA que venden, atienden y escalan 24/7.
                  Integración completa con WhatsApp, CRM y todas tus herramientas.
                </p>
                
                {/* Cards de beneficios */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {perks.map(({ icon: Icon, title, desc, gradient }) => (
                    <div 
                      key={title} 
                      className="group relative"
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                      <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/10 p-6 transition-all duration-500 group-hover:translate-y-[-2px]">
                        <div className="flex flex-col items-center text-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="font-light text-white text-lg">{title}</p>
                            <p className="text-sm font-light text-blue-200/60 mt-1">{desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  {trust.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10"
                    >
                      <Icon className="h-5 w-5 text-cyan-300" />
                      <div className="text-left">
                        <p className="text-xs font-light text-blue-200/60">{label}</p>
                        <p className="text-sm font-light text-white">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTAs principales */}
                <div className="flex flex-col items-center gap-6">
                  {/* CTA primario con mega efecto - CONVERTIDO A ENLACE */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow" />
                    <a
                      href="https://cal.com/www.cognitiva-ai.agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-light tracking-wide text-lg shadow-2xl hover:shadow-[0_0_80px_rgba(6,182,212,0.6)] transition-all duration-500 group-hover:scale-105"
                    >
                      <Sparkles className="h-6 w-6 animate-pulse" />
                      Comenzar mi transformación ahora
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                  
                  {/* CTA secundario - CONVERTIDO A ENLACE */}
                  <a 
                    href="https://cal.com/www.cognitiva-ai.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-cyan-300 hover:text-white transition-colors duration-300"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-light">Hablar con un experto en IA</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  {/* Garantías */}
                  <div className="flex items-center gap-6 mt-4 text-xs font-light text-blue-200/50">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      Sin tarjeta de crédito
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-emerald-400" />
                      Configuración gratuita
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-emerald-400" />
                      Resultados en 7 días
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgencia/Escasez */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-light text-red-300">
              Solo quedan 3 cupos disponibles para implementación este mes
            </span>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes aurora {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(120deg) scale(1.1); }
          66% { transform: rotate(240deg) scale(0.9); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
          10% { transform: translate(10px, -10px) scale(1); opacity: 1; }
          90% { transform: translate(-10px, 10px) scale(1); opacity: 1; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 8s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-aurora {
          animation: aurora 20s ease-in-out infinite;
        }
        
        .animate-float-random {
          animation: float-random ease-in-out infinite;
        }
        
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </section>
  );
}