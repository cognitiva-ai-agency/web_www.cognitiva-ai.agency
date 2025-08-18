"use client";
import React, { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';

export default function CollapsibleCard({
  // Datos principales
  icon: Icon,
  title,
  subtitle,
  description,
  
  // Estado
  isOpen,
  isHovered,
  onClick,
  
  // Contenido desplegable
  bullets = [],
  features = [],
  metrics = {},
  ctaText,
  onCtaClick,
  
  // Estilo
  gradient = 'from-blue-600 to-cyan-600',
  animationDelay = 0,
  
  // Eventos
  onMouseEnter,
  onMouseLeave,
  
  // Props adicionales
  className = '',
  children
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    if (onMouseLeave) onMouseLeave();
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  // Usar mismo comportamiento para desktop y mobile - solo expandir con click
  const shouldShowContent = isOpen;
  
  // Prevenir hidratación incorrecta
  if (!isMounted) {
    return (
      <article
        className={`relative group ${className}`}
        style={{ animationDelay: `${animationDelay}ms` }}
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6">
          <div className="flex items-center gap-4 justify-between w-full">
            {Icon && (
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-light text-white">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm font-light text-blue-200/70 mt-1">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="w-6 h-6"></div>
          </div>
        </div>
      </article>
    );
  }
  
  return (
    <article
      className={`relative group ${className}`}
      style={{ animationDelay: `${animationDelay}ms` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow de fondo - solo para la tarjeta, no el contenido expandido */}
      <div className={`absolute top-0 left-0 right-0 h-24 rounded-t-3xl bg-gradient-to-r ${gradient} opacity-0 ${isHovered ? 'opacity-20' : ''} blur-2xl transition-all duration-300`} />
      
      {/* Borde con gradiente - solo para la tarjeta, no el contenido expandido */}
      <div className={`absolute top-0 left-0 right-0 h-24 rounded-t-3xl bg-gradient-to-r ${gradient} opacity-0 ${isHovered ? 'opacity-30' : ''} blur-[1.5px] transition-all duration-300`} />
      
      {/* Card principal */}
      <div className={`relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-visible`}>
        
        {/* Header clickeable */}
        <button
          onClick={handleClick}
          className="w-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer text-left p-6"
          aria-expanded={shouldShowContent}
        >
          <div className={`flex items-center gap-4 justify-between w-full`}>
            {/* Ícono */}
            {Icon && (
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient}/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${shouldShowContent ? 'scale-110' : ''}`}>
                <Icon className={`h-6 w-6 text-cyan-300 transition-all duration-200 ${shouldShowContent ? 'scale-110' : ''}`} />
              </div>
            )}
            
            {/* Textos */}
            <div className="flex-1 min-w-0">
              <h3 className={`text-xl font-light text-white transition-all duration-200 ${shouldShowContent ? 'text-cyan-300' : ''}`}>
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm font-light text-blue-200/70 mt-1">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-sm font-light text-blue-200/60 mt-2">
                  {description}
                </p>
              )}
            </div>
            
            {/* Indicador de estado - visible en desktop y móvil */}
            <div className="block transition-opacity duration-300">
              <ToggleButton 
                isOpen={isOpen} 
                variant="default"
                size="md"
              />
            </div>
          </div>
        </button>
        
        {/* Contenido desplegable */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            shouldShowContent ? 'max-h-[800px] opacity-100 translate-y-0 scale-100' : 'max-h-0 opacity-0 translate-y-[-10px] scale-95'
          }`}
        >
          <div className="px-8 py-8">
            {/* Separador */}
            <div className={`h-[1px] bg-gradient-to-r ${gradient}/60 mb-8`} />
            
            {/* Bullets/Features */}
            {bullets.length > 0 && (
              <ul className="space-y-4 mb-8">
                {bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-sm font-light leading-relaxed text-blue-100/95"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-1.5 flex-shrink-0`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Features específicas */}
            {features.length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-3 text-cyan-300">Características:</h4>
                <ul className="space-y-3">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm font-light text-blue-100/90"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Métricas */}
            {Object.keys(metrics).length > 0 && (
              <div className="mb-6 grid grid-cols-3 gap-2">
                {Object.entries(metrics).map(([key, value], i) => (
                  <div key={key} className="text-center p-2 rounded-lg border bg-gradient-to-r from-white/5 to-white/[0.02] border-white/10">
                    <div className="text-sm font-light text-cyan-300">{value}</div>
                    <div className="text-xs capitalize text-blue-200/60">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Contenido personalizado */}
            {children}
            
            {/* CTA */}
            {ctaText && (
              <button
                onClick={onCtaClick}
                className={`w-full mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r ${gradient} text-white font-light hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95`}
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}