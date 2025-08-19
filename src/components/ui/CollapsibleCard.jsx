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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Detectar si estamos en un dispositivo móvil
    const checkIsMobile = () => {
      return window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };
    setIsMobile(checkIsMobile());
    
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    // Solo activar hover en dispositivos no móviles
    if (!isMobile && onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = () => {
    // Solo activar hover en dispositivos no móviles
    if (!isMobile && onMouseLeave) onMouseLeave();
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
      {/* Glow de fondo - solo para la tarjeta, no el contenido expandido, deshabilitado en móviles */}
      <div className={`absolute top-0 left-0 right-0 h-24 rounded-t-3xl bg-gradient-to-r ${gradient} opacity-0 ${!isMobile && isHovered && !shouldShowContent ? 'opacity-20' : ''} blur-2xl transition-all duration-300`} />
      
      {/* Borde con gradiente - solo para la tarjeta, no el contenido expandido, deshabilitado en móviles */}
      <div className={`absolute top-0 left-0 right-0 h-24 rounded-t-3xl bg-gradient-to-r ${gradient} opacity-0 ${!isMobile && isHovered && !shouldShowContent ? 'opacity-30' : ''} blur-[1.5px] transition-all duration-300`} />
      
      {/* Card principal optimizada para móvil */}
      <div className={`relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-visible`}>
        
        {/* Header clickeable optimizado para móvil */}
        <button
          onClick={handleClick}
          className="w-full focus:outline-none cursor-pointer text-left p-3 sm:p-4 md:p-6"
          aria-expanded={shouldShowContent}
        >
          <div className="flex items-start sm:items-center gap-2 sm:gap-3 md:gap-4 justify-between w-full">
            {/* Ícono optimizado */}
            {Icon && (
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient}/20 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${shouldShowContent ? 'scale-110' : ''}`}>
                <Icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyan-300 transition-all duration-200 ${shouldShowContent ? 'scale-110' : ''}`} />
              </div>
            )}
            
            {/* Textos optimizados para móvil */}
            <div className="flex-1 min-w-0 pr-2 sm:pr-3">
              <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-light text-white transition-all duration-200 leading-tight ${shouldShowContent ? 'text-cyan-300' : ''}`}>
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs sm:text-sm font-light text-blue-200/70 mt-1 leading-tight">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-xs sm:text-sm font-light text-blue-200/60 mt-1 sm:mt-2 leading-tight">
                  {description}
                </p>
              )}
            </div>
            
            {/* Indicador de estado más pequeño en móvil */}
            <div className="block transition-opacity duration-300 flex-shrink-0">
              <ToggleButton 
                isOpen={isOpen} 
                variant="default"
                size="sm"
              />
            </div>
          </div>
        </button>
        
        {/* Contenido desplegable optimizado para móvil */}
        <div
          className={`transition-all duration-300 sm:duration-500 ease-in-out overflow-hidden ${
            shouldShowContent ? 'max-h-[800px] opacity-100 translate-y-0 scale-100' : 'max-h-0 opacity-0 translate-y-[-10px] scale-95'
          }`}
        >
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
            {/* Separador */}
            <div className={`h-[1px] bg-gradient-to-r ${gradient}/60 mb-3 sm:mb-4 md:mb-6 lg:mb-8`} />
            
            {/* Bullets/Features optimizados para móvil */}
            {bullets.length > 0 && (
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                {bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm font-light leading-relaxed text-blue-100/95"
                  >
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${gradient} mt-1 sm:mt-1.5 flex-shrink-0`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Features específicas optimizadas para móvil */}
            {features.length > 0 && (
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-cyan-300">Características:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-light text-blue-100/90"
                    >
                      <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${gradient} mt-1 sm:mt-2 flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Métricas optimizadas para móvil */}
            {Object.keys(metrics).length > 0 && (
              <div className="mb-4 sm:mb-6 grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {Object.entries(metrics).map(([key, value], i) => (
                  <div key={key} className="text-center p-1.5 sm:p-2 rounded-lg border bg-gradient-to-r from-white/5 to-white/[0.02] border-white/10">
                    <div className="text-xs sm:text-sm font-light text-cyan-300">{value}</div>
                    <div className="text-xs capitalize text-blue-200/60 leading-tight">{key.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Contenido personalizado */}
            {children}
            
            {/* CTA optimizado para móvil */}
            {ctaText && (
              <button
                onClick={onCtaClick}
                className={`w-full mt-3 sm:mt-4 md:mt-6 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-r ${gradient} text-white font-light hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xs sm:text-sm md:text-base`}
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