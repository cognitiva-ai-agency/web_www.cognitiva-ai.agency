'use client';
import React, { useState, useEffect } from 'react';
import { MessageCircle, Bolt, Brain, Globe, Puzzle, Rocket } from 'lucide-react';
import { BRAND } from '@/lib/utils/businessConstants';
import useScrollBasedAnimation from '@/hooks/useScrollBasedAnimation';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';
import { colors } from '@/lib/design-system/designTokens';
import WhatsAppChatPreview from '@/components/ui/WhatsAppChatPreview';
import CompanyLogosCarousel from '@/components/common/CompanyLogosCarousel';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Hero() {
  const { ref } = useScrollBasedAnimation();
  const [isClient, setIsClient] = useState(false);
  const { maxParticles } = useDevicePerformance();
  
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

  const beneficios = [
    { 
      icon: Bolt, 
      text: 'Respuesta ultrarrápida', 
      desc: 'Reduce abandono y mejora NPS' 
    },
    { 
      icon: Brain, 
      text: 'Entrenados con tus datos', 
      desc: 'Precisión de nivel enterprise' 
    },
    { 
      icon: Globe, 
      text: 'Multiidioma nativo', 
      desc: 'Soporte global en +5 idiomas' 
    },
    { 
      icon: Puzzle, 
      text: 'Integraciones en 48 h', 
      desc: 'HubSpot, Salesforce, Shopify y más' 
    }
  ];

  return (
    <>
      {/* Preconnect para optimización */}
      <link rel="preconnect" href="https://cal.com" />
      <link rel="preconnect" href="https://wa.me" />
      
      <section
        id="hero"
        className="relative min-h-[75vh] sm:min-h-[85vh] md:min-h-[75vh] lg:min-h-[70vh] pt-24 sm:pt-28 md:pt-32 lg:pt-28 xl:pt-24 pb-4 sm:pb-6 md:pb-2 lg:pb-1 bg-gradient-to-br from-dark-100 to-dark text-white"
        aria-label="Agentes de IA para ventas y soporte 24/7 en WhatsApp, Web e Instagram">

        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-8 animate-in">
          {/* Espacio vacío para evitar que el navbar tape la etiqueta en móviles */}
          <div className="h-16 sm:h-12 md:h-8 lg:h-6 xl:h-4 block"></div>
          
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-16 items-start lg:items-center py-6 sm:py-6 md:py-8 lg:py-6">
            
            {/* Columna izquierda (7/12) */}
            <div className="col-span-12 lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8">
              
              {/* 1. Etiqueta */}
              <div className="inline-block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                    <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-light tracking-wide text-cyan-300">
                      IA Conversacional + Automatización
                    </span>
                  </div>
                </div>
              </div>

              {/* 2. H1 */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin leading-tight tracking-tight px-0 sm:px-0">
                <span className="font-light text-white">
                  Agentes de IA para ventas y soporte 24/7 en 
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x font-extralight">
                  WhatsApp, Web e Instagram
                </span>
              </h1>

              {/* 3. Subtítulo */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-gray-300 max-w-2xl leading-relaxed px-0 sm:px-0">
                Integramos tu stack (CRM, ERP, pasarela de pago) y automatizamos desde el primer día: respuesta ultrarrápida, calificación de leads y agendamiento automático.
              </p>

              {/* 4. Fila de CTAs */}
              {/* Desktop - Botones con texto */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 sm:pt-6 max-w-2xl mx-auto sm:max-w-none sm:mx-0 relative z-20">
                <DemoButton 
                  variant="default"
                  size="medium"
                  text="Ver Demo de 30 min"
                  subtitle="Agenda inmediata · Caso de tu industria"
                />
                
                <WhatsAppButton 
                  variant="default"
                  size="medium"
                  text="Hablar por WhatsApp"
                  subtitle="Respuesta en <2 min · 24/7"
                />
              </div>


              {/* 5. Beneficios con iconos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {beneficios.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-slate-800 border border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white mb-1">{feature.text}</p>
                        <p className="text-xs text-blue-200/70 leading-tight">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Columna derecha (5/12) */}
            <div className="col-span-12 lg:col-span-5 relative">
              {/* Chat compacto en móvil - posicionado al final */}
              <div className="block lg:hidden mt-20">
                <WhatsAppChatPreview 
                  compactMode={true}
                  showBadge={false}
                  className="w-full"
                />
              </div>
              
              {/* Chat completo en desktop - alineado normalmente */}
              <div className="hidden lg:block">
                <WhatsAppChatPreview 
                  compactMode={false}
                  showBadge={true}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Empresas Verificadas con fondo gris oscuro */}
      <CompanyLogosCarousel 
        variant="default" 
        showTitle={true}
        className="bg-gradient-to-t from-[#0a0a0a]/50 to-transparent"
      />

      {/* Estilos para gradiente radial */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }
      `}</style>
    </>
  );
}