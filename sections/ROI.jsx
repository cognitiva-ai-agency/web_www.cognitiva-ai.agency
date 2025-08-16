"use client";
import React, { useEffect, useRef, useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  TrendingUp,
  DollarSign,
  Clock,
  PieChart,
  Zap,
  Star,
  Sparkles,
  ArrowUpRight,
  Activity
} from "lucide-react";

/** Contador animado mejorado */
function useCountUp(target = 0, duration = 2000, start = false, decimals = 0) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (!start) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setValue(target * easeOutQuart);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration, start, decimals]);
  
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value);
}

export default function ROI() {
  const { ref } = useScrollAnimation();
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Contadores animados
  const conv = useCountUp(47, 2000, inView);
  const cost = useCountUp(68, 2000, inView);
  const roi = useCountUp(3.5, 2000, inView, 1);
  const tmr = useCountUp(2, 2000, inView);
  const sat = useCountUp(87, 2000, inView);

  const cards = [
    {
      icon: TrendingUp,
      label: "Aumento conversión",
      value: `${conv}%`,
      description: "Optimización continua con IA",
      gradient: "from-blue-600 to-cyan-600",
      glow: "rgba(59,130,246,0.5)",
    },
    {
      icon: DollarSign,
      label: "Reducción de costos",
      value: `${cost}%`,
      description: "Automatización inteligente",
      gradient: "from-emerald-600 to-teal-600",
      glow: "rgba(16,185,129,0.5)",
    },
    {
      icon: Clock,
      label: "Disponibilidad total",
      value: "24/7",
      description: "Sin interrupciones ni descansos",
      gradient: "from-purple-600 to-pink-600",
      glow: "rgba(147,51,234,0.5)",
    },
    {
      icon: PieChart,
      label: "ROI promedio",
      value: `${roi}x`,
      description: "Retorno de inversión garantizado",
      gradient: "from-orange-600 to-amber-600",
      glow: "rgba(251,146,60,0.5)",
    },
    {
      icon: Zap,
      label: "Tiempo respuesta",
      value: `<${tmr}s`,
      description: "Respuestas instantáneas",
      gradient: "from-indigo-600 to-blue-600",
      glow: "rgba(99,102,241,0.5)",
    },
    {
      icon: Star,
      label: "Satisfacción cliente",
      value: `${sat}%`,
      description: "Experiencia excepcional",
      gradient: "from-rose-600 to-red-600",
      glow: "rgba(244,63,94,0.5)",
    },
  ];

  return (
    <section
      id="roi"
      className="relative py-32 bg-[#000412] overflow-hidden"
      aria-label="ROI garantizado desde el primer mes"
    >
      {/* Efectos de fondo dinámicos */}
      <div aria-hidden className="absolute inset-0">
        {/* Gradientes animados */}
        <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/15 to-transparent blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/15 to-transparent blur-[120px] rounded-full animate-pulse-slow animation-delay-2000" />
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-up"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          {/* Badge superior */}
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Activity className="h-5 w-5 text-emerald-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-emerald-300">
                  Resultados Medibles y Comprobados
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">ROI garantizado desde el</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-gradient-x">
              primer mes
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto">
            Números reales de clientes reales. Transformación medible con tecnología de vanguardia.
          </p>
        </div>

        {/* Grid de KPIs con diseño mejorado */}
        <div ref={containerRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, label, value, description, gradient, glow }, index) => (
            <article
              key={label}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow de fondo animado (más sutil) */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-25 blur-lg transition-all duration-500"
                style={{ background: `radial-gradient(circle at center, ${glow}, transparent)` }}
              />
              
              {/* Borde con gradiente (menos intenso) */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-40 blur-[1px] transition-all duration-500`} />
              
              {/* Card con glassmorphism */}
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]">
                
                {/* Patrón de fondo interno */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                {/* Icono iluminado (más suave) */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-500`} />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Valor animado */}
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-thin text-white tracking-tight flex items-baseline">
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>
                      {value}
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-emerald-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <p className="mt-2 text-lg font-light text-white/90">{label}</p>
                  <p className="mt-1 text-sm font-light text-blue-200/60">{description}</p>
                </div>

                {/* Barra de progreso visual */}
                <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${gradient} transition-all duration-2000 ease-out`}
                    style={{ width: inView ? '100%' : '0%' }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <button className="relative px-10 py-5 rounded-full bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] group-hover:scale-105">
                <span className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-white animate-pulse" />
                  <span className="text-lg font-light text-white">Calcular mi ROI potencial</span>
                  <ArrowUpRight className="h-5 w-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm font-light text-blue-200/60">
            Obtén una proyección personalizada en menos de 24 horas
          </p>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        @keyframes float-up {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-float-up {
          animation: float-up linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .duration-2000 {
          transition-duration: 2000ms;
        }
      `}</style>
    </section>
  );
}
