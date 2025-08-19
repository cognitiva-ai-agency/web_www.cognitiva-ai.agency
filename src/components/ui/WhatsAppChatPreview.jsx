/**
 * ChatMockup - Componente del mockup de chat optimizado
 * Incluye versiones optimizadas para móvil y desktop
 */

import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';
import { colors, borderRadius } from '@/lib/design-system/designTokens';

const WhatsAppChatPreview = ({ 
  className = '', 
  variant = 'default',
  showBadge = true,
  compactMode = false 
}) => {
  
  const messages = [
    {
      type: 'bot',
      content: compactMode ? 'Hola 👋 ¿necesitas ayuda?' : 'Hola 👋 ¿sobre qué necesitas ayuda hoy?',
      delay: 0
    },
    {
      type: 'user', 
      content: compactMode ? 'Quiero automatizar' : 'Puedo agendarte una demo o cotización en 1 click.',
      delay: 500
    },
    {
      type: 'bot',
      content: compactMode ? '✅ Demo agendada!' : 'Listo ✅ ¡Demo confirmada para mañana 10:30!',
      delay: 1000
    }
  ];

  return (
    <div className={`relative ${className}`}>
      {/* Fondo con glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl" />
      
      {/* Contenedor principal del chat */}
      <div className={`relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-[0_30px_90px_rgba(59,130,246,0.25)] ${
        compactMode ? 'p-3 sm:p-4' : 'p-4 sm:p-6 md:p-6 lg:p-4'
      }`}>
        
        {/* Header del chat */}
        <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${
          compactMode ? 'p-2 sm:p-3' : 'p-3 sm:p-4'
        } rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.06] to-white/[0.02] border border-white/10`}>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-xl opacity-70 animate-pulse" />
            <div className={`relative ${
              compactMode ? 'h-6 w-6 sm:h-8 sm:w-8' : 'h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'
            } rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur flex items-center justify-center`}>
              <Bot className={`${
                compactMode ? 'h-3 w-3 sm:h-4 sm:w-4' : 'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6'
              } text-cyan-300`} />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`font-light text-white truncate ${
              compactMode ? 'text-xs sm:text-sm' : 'text-sm sm:text-base md:text-lg'
            }`}>
              Agente IA Cognitiva
            </p>
            <p className={`font-light text-cyan-300/70 flex items-center gap-1 ${
              compactMode ? 'text-xs hidden sm:flex' : 'text-xs sm:text-sm'
            }`}>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse flex-shrink-0"></span>
              <span className={compactMode ? 'hidden sm:inline' : ''}>
                {compactMode ? 'En línea' : 'En línea • Respondiendo instantáneamente'}
              </span>
            </p>
          </div>
          
          <div className={`${
            compactMode ? 'px-1.5 py-0.5 sm:px-2 sm:py-1' : 'px-2 sm:px-3 py-1 sm:py-1.5'
          } rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 flex-shrink-0`}>
            <span className={`font-light text-emerald-300 ${
              compactMode ? 'text-xs' : 'text-xs'
            }`}>
              AI
            </span>
          </div>
        </div>

        {/* Mensajes del chat */}
        <div className={`space-y-2 sm:space-y-3 ${
          compactMode ? 'mb-3' : 'mb-4 sm:mb-6'
        }`}>
          {messages.map((message, index) => (
            <div 
              key={index}
              className={`flex ${message.type === 'bot' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] ${
                  compactMode ? 'px-2 sm:px-3 py-1.5 sm:py-2' : 'px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3'
                } rounded-xl sm:rounded-2xl backdrop-blur border border-white/10 ${
                  message.type === 'bot' 
                    ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 animate-slide-left' 
                    : 'bg-gradient-to-r from-white/10 to-white/5 animate-slide-right'
                }`}
                style={{ 
                  animationDelay: `${message.delay}ms`,
                  animationFillMode: 'both'
                }}
              >
                <p className={`font-light leading-tight ${
                  message.type === 'bot' ? 'text-blue-100' : 'text-white'
                } ${compactMode ? 'text-xs' : 'text-xs sm:text-sm'}`}>
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input del chat - Solo mostrar en modo no compacto */}
        {!compactMode && (
          <div className="relative">
            <input
              type="text"
              placeholder="Escribe tu mensaje..."
              className={`w-full pr-12 sm:pr-14 rounded-full bg-white/[0.05] backdrop-blur border border-white/10 text-white placeholder-white/30 font-light focus:outline-none focus:border-cyan-400/50 transition-all duration-300 ${
                compactMode 
                  ? 'px-3 py-2 text-sm' 
                  : 'px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base'
              }`}
              aria-label="Escribe tu mensaje"
            />
            <button className={`absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300 group ${
              compactMode 
                ? 'w-6 h-6' 
                : 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10'
            }`}>
              <ArrowRight className={`text-white group-hover:translate-x-0.5 transition-transform ${
                compactMode ? 'h-3 w-3' : 'h-4 w-4 sm:h-5 sm:w-5'
              }`} />
            </button>
          </div>
        )}

        {/* Pie de mockup */}
        <div className={`${compactMode ? 'mt-2' : 'mt-4 lg:mt-2'} text-center`}>
          <div className={`inline-flex items-center gap-1.5 text-cyan-300/70 ${
            compactMode ? 'text-xs' : 'text-xs'
          }`}>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>
              {compactMode 
                ? '24/7 • Respuesta ultrarrápida' 
                : '24/7 • Respuesta ultrarrápida • Estabilidad garantizada'
              }
            </span>
          </div>
        </div>
      </div>

      {/* Badge 24/7 flotante */}
      {showBadge && !compactMode && (
        <div className="absolute -top-4 sm:-top-6 md:-top-8 -right-2 sm:-right-4 md:-right-8 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl sm:rounded-2xl blur-2xl opacity-60" />
            <div className="relative px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20">
              <p className="text-lg font-light text-cyan-300 flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                24/7
              </p>
              <p className="text-xs font-light text-white/70">Respuesta ultrarrápida</p>
            </div>
          </div>
        </div>
      )}

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 0.6s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChatPreview;