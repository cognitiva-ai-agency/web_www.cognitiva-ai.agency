'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, CheckCircle, Rocket, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import SocialProof from '@/components/common/SocialProof';
import { BRAND } from '@/lib/utils/constants';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

const logos = [
  {src: '/WalmartChile.png', alt: 'Walmart Chile'},
  { src: '/Capitalizarme.png', alt: 'Capitalizarme' },
  { src: '/DrGadget.png', alt: 'Dr Gadget' },
  { src: '/ProCasa.png', alt: 'Pro Casa' },
  {src: '/agrak.png', alt: 'Agrak'},
  { src: '/logo empresas/Letralogoazul.png', alt: 'Letralogoazul' },
  { src: '/logo empresas/Logoynombre .png', alt: 'Logoynombre' },
  { src: '/logo empresas/TriTechAlargado.png', alt: 'TriTechAlargado' },
  { src: '/logo empresas/turbotuninglogo.png', alt: 'turbotuninglogo' },
];

export default function Hero() {
  const { ref } = useScrollAnimation();
  const [isClient, setIsClient] = useState(false);
  const { shouldReduceEffects, maxParticles } = usePerformanceMode();
  
  // Elementos flotantes estáticos para evitar problemas de hidratación
  const allFloatingElements = [
    { left: 10, delay: 0, duration: 15 },
    { left: 25, delay: 2, duration: 18 },
    { left: 45, delay: 4, duration: 12 },
    { left: 65, delay: 1, duration: 20 },
    { left: 80, delay: 3, duration: 16 },
    { left: 90, delay: 5, duration: 14 }
  ];
  
  const floatingElements = allFloatingElements.slice(0, Math.min(maxParticles, 6));

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-screen pt-16 sm:pt-20 md:pt-24 pb-2 sm:pb-4 md:pb-6 lg:pb-8 bg-[#0a0a0a] text-white overflow-hidden"
      aria-label="Multiplica tus ventas con Agentes de IA que trabajan 24/7">
      
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* Efectos de fondo siempre visibles - blur reducido en móvil para performance */}
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-gradient-to-br from-blue-600/20 to-transparent blur-[30px] sm:blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-cyan-500/15 to-transparent blur-[20px] sm:blur-[120px] rounded-full animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-indigo-600/10 to-transparent blur-[20px] sm:blur-[100px] animate-rotate-slow" />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        <div className="absolute inset-0 overflow-hidden">
          {isClient && floatingElements.map((element, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float ${i >= 8 ? 'hidden sm:block' : ''}`}
              style={{
                left: `${element.left}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 animate-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center py-4 sm:py-6 md:py-8 lg:py-12">
          
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <div className="inline-block">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                  <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-light tracking-wide text-cyan-300">
                    <span className="hidden sm:inline">Automatización con IA de Nueva Generación</span>
                    <span className="sm:hidden">IA Nueva Generación</span>
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin leading-tight tracking-tight px-2 sm:px-0">
              <span className="font-light">
                <span className="hidden sm:inline">Multiplica tus ventas con</span>
                <span className="sm:hidden">Multiplica ventas con</span>
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x font-extralight">
                Agentes de IA
              </span>
              <br />
              <span className="font-light text-white/80">que trabajan 24/7</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-blue-200/70 max-w-2xl leading-relaxed px-2 sm:px-0">
              <span className="hidden sm:inline">Transforma tu negocio con Inteligencia Artificial conversacional de última generación, integraciones inteligentes y resultados medibles desde el primer día.</span>
              <span className="sm:hidden">IA conversacional que transforma tu negocio con resultados desde el primer día.</span>
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
              {[
                { icon: Zap, text: 'Respuesta instantánea', short: 'Instantáneo' },
                { icon: CheckCircle, text: 'Precisión del 99%', short: '99% preciso' },
                { icon: Bot, text: 'Aprendizaje continuo', short: 'Aprende' },
                { icon: Sparkles, text: 'Multiidioma nativo', short: 'Multiidioma' }
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group sm:w-64 sm:h-16">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-light text-blue-100/90 text-center sm:text-left leading-tight sm:whitespace-nowrap">
                      <span className="hidden sm:inline">{feature.text}</span>
                      <span className="sm:hidden">{feature.short}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 pb-6 sm:pb-8 md:pb-12 max-w-2xl mx-auto sm:max-w-md sm:mx-0 relative z-20">
              <div className="flex justify-center">
                <div className="relative group z-30">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
                  <Button
                    as="a"
                    href={BRAND.calendarLink}
                    className="relative inline-flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium tracking-wide shadow-2xl hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-105 text-xs sm:text-sm whitespace-nowrap">
                    <img src="/GoogleMeet.png" alt="Google Meet" className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>Demo</span>
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative group z-30">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative inline-flex items-center justify-center w-28 h-10 sm:w-32 sm:h-12 rounded-full 
                                bg-gradient-to-r from-emerald-600/90 to-teal-500/90 backdrop-blur-sm border border-white/20 
                                text-white font-medium tracking-wide shadow-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] 
                                transition-all duration-300 group-hover:scale-105 text-xs sm:text-sm whitespace-nowrap`}
                  >
                    <img src="/WhatsApp4.png" alt="WhatsApp" className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl" />
            
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-[0_30px_90px_rgba(59,130,246,0.25)]">
              
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-xl opacity-70 animate-pulse" />
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur flex items-center justify-center">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-cyan-300" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-light text-white text-sm sm:text-base md:text-lg truncate">Agente IA Cognitiva</p>
                  <p className="text-xs sm:text-sm font-light text-cyan-300/70 flex items-center gap-1.5 sm:gap-2">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></span>
                    <span className="hidden sm:inline">En línea • Respondiendo instantáneamente</span>
                    <span className="sm:hidden">En línea • Activo</span>
                  </p>
                </div>
                <div className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex-shrink-0">
                  <span className="text-xs font-light text-emerald-300">AI</span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur border border-white/10 animate-slide-left">
                    <p className="text-xs sm:text-sm font-light text-blue-100 leading-tight">
                      <span className="hidden sm:inline">Hola 👋 ¿Listo para revolucionar tu atención al cliente con IA?</span>
                      <span className="sm:hidden">Hola 👋 ¿Revolucionar con IA?</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/10 animate-slide-right animation-delay-500">
                    <p className="text-xs sm:text-sm font-light text-white leading-tight">
                      <span className="hidden sm:inline">Sí, necesito automatizar y escalar mi negocio</span>
                      <span className="sm:hidden">Sí, quiero automatizar</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[85%] px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur border border-white/10 animate-slide-left animation-delay-1000">
                    <p className="text-xs sm:text-sm font-light text-blue-100 leading-tight">
                      <span className="hidden sm:inline">Perfecto! Puedo ayudarte a aumentar tus ventas un 300% 🚀</span>
                      <span className="sm:hidden">Perfecto! +300% ventas 🚀</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 pr-12 sm:pr-14 rounded-full bg-white/[0.05] backdrop-blur border border-white/10 text-white placeholder-white/30 font-light focus:outline-none focus:border-cyan-400/50 transition-all duration-300 text-sm sm:text-base"
                />
                <button className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300 group">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-white group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Estadísticas flotantes - ocultas en móvil, visibles en tablet+ */}
            <div className="hidden sm:block absolute -top-4 sm:-top-6 md:-top-8 -right-2 sm:-right-4 md:-right-8 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl sm:rounded-2xl blur-2xl opacity-60" />
                <div className="relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                  <p className="text-xl sm:text-2xl md:text-3xl font-thin text-cyan-300">+87%</p>
                  <p className="text-xs font-light text-white/70">Satisfacción</p>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-2 sm:-left-4 md:-left-8 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl sm:rounded-2xl blur-2xl opacity-60" />
                <div className="relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
                  <p className="text-xl sm:text-2xl md:text-3xl font-thin text-blue-300">3.2M</p>
                  <p className="text-xs font-light text-white/70">Msgs/mes</p>
                </div>
              </div>
            </div>
            
            {/* Estadísticas adicionales para móvil - debajo del chat */}
            <div className="sm:hidden mt-4 flex justify-between gap-3">
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-xl opacity-40" />
                <div className="relative px-3 py-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-center">
                  <p className="text-lg font-thin text-cyan-300">+87%</p>
                  <p className="text-xs font-light text-white/70">Satisfacción</p>
                </div>
              </div>
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg blur-xl opacity-40" />
                <div className="relative px-3 py-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-center">
                  <p className="text-lg font-thin text-blue-300">3.2M</p>
                  <p className="text-xs font-light text-white/70">Msgs/mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de logos optimizada con menos espacio en móvil */}
      <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 pt-2 sm:pt-3 md:pt-4 lg:pt-5 pb-2 sm:pb-3 md:pb-4 lg:pb-5 border-t border-white/5 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="text-center mb-1 sm:mb-2 md:mb-4">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur border border-white/10 mb-1 sm:mb-2 md:mb-3">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
              <span className="text-xs font-light text-emerald-300">Empresas Verificadas</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-light text-blue-200/80 max-w-2xl mx-auto px-2">
              <span className="hidden sm:inline">Más de <span className="text-cyan-300 font-medium">50 empresas líderes</span> confían en nuestra tecnología de IA</span>
              <span className="sm:hidden"><span className="text-cyan-300 font-medium">+50 empresas</span> confían en nuestra IA</span>
            </p>
          </div>
          
          {/* Cinta transportadora de logos optimizada para móvil */}
          <div className="logo-carousel-container relative rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur border border-white/10 p-2 sm:p-3 md:p-4">
            {/* Gradientes de borde para efecto de desvanecimiento */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />
            
            {/* Contenedor de logos con animación ACTIVADA */}
            <div className="logo-scroll-container">
              {/* Triplicamos los logos para efecto continuo */}
              {[...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  className="logo-item"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16 w-auto object-contain transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            
            {/* Indicador de movimiento */}
            {isClient && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Estadística flotante optimizada con espaciado equilibrado */}
          <div className="flex justify-center mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
              <span className="text-xs font-light text-emerald-300">
                <span className="hidden sm:inline">+87% satisfacción promedio</span>
                <span className="sm:hidden">+87% satisfacción</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}