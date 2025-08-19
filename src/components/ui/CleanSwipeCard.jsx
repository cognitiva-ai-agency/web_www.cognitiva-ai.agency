/**
 * CleanSwipeCard - Transición limpia sin mezcla de contenido
 * Implementa una animación de dos fases: salida completa → entrada completa
 * Basado en mejores prácticas de UX para transiciones de contenido
 */

"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useSwipeGestures from '@/hooks/useSwipeGestures';
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients } from '@/lib/design-system/colorSystem';

const CleanSwipeCard = ({
  items = [],
  activeIndex = 0,
  onIndexChange,
  className = '',
  cardClassName = '',
  showIndicators = true,
  showArrows = false,
  enableSwipe = true,
  children,
  renderCard,
  cardPadding = 'p-4 sm:p-6 lg:p-8',
  cardBackground = '',
  cardBorder = '',
  indicatorPosition = 'bottom',
  transitionDuration = 400
}) => {
  // Estados para animación limpia
  const [displayIndex, setDisplayIndex] = useState(activeIndex); // Índice que se muestra actualmente
  const [targetIndex, setTargetIndex] = useState(activeIndex);   // Índice al que queremos ir
  const [animationPhase, setAnimationPhase] = useState('idle');  // 'idle', 'exit', 'enter'
  const [slideDirection, setSlideDirection] = useState('next');  // 'next' o 'prev'
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const containerRef = useRef(null);
  const transitionTimeoutRef = useRef(null);

  // Detectar dispositivo móvil
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Sistema de transición en dos fases
  const executeTransition = useCallback((newIndex, direction) => {
    if (newIndex === displayIndex || animationPhase !== 'idle') return;

    // Fase 1: Iniciar salida
    setTargetIndex(newIndex);
    setSlideDirection(direction);
    setAnimationPhase('exit');

    // Fase 2: Después de la salida, cambiar contenido y entrar
    transitionTimeoutRef.current = setTimeout(() => {
      setDisplayIndex(newIndex);
      setAnimationPhase('enter');
      
      // Fase 3: Completar entrada y volver a idle
      transitionTimeoutRef.current = setTimeout(() => {
        setAnimationPhase('idle');
      }, transitionDuration / 2);
    }, transitionDuration / 2);
  }, [displayIndex, animationPhase, transitionDuration]);

  // Responder a cambios externos
  useEffect(() => {
    if (activeIndex !== displayIndex && animationPhase === 'idle') {
      const direction = activeIndex > displayIndex ? 'next' : 'prev';
      executeTransition(activeIndex, direction);
    }
  }, [activeIndex, displayIndex, animationPhase, executeTransition]);

  // Funciones de navegación
  const goToIndex = useCallback((index) => {
    if (index === displayIndex || animationPhase !== 'idle') return;
    
    const direction = index > displayIndex ? 'next' : 'prev';
    onIndexChange?.(index);
    executeTransition(index, direction);
  }, [displayIndex, animationPhase, onIndexChange, executeTransition]);

  const handleNext = useCallback(() => {
    const nextIndex = displayIndex === items.length - 1 ? 0 : displayIndex + 1;
    goToIndex(nextIndex);
  }, [displayIndex, items.length, goToIndex]);

  const handlePrevious = useCallback(() => {
    const prevIndex = displayIndex === 0 ? items.length - 1 : displayIndex - 1;
    goToIndex(prevIndex);
  }, [displayIndex, items.length, goToIndex]);

  // Configurar gestos swipe
  const swipeRef = useSwipeGestures({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
    threshold: 50,
    preventScrollOnTouch: true
  });

  // Estilos base de la tarjeta
  const defaultCardStyles = `
    rounded-xl sm:rounded-2xl
    ${gradients.cardGlass}
    border border-white/10
    ${cardPadding}
    ${cardBackground}
    ${cardBorder}
  `;

  // Renderizado de contenido
  const renderContent = useCallback(() => {
    const currentItem = items[displayIndex];
    
    if (children) {
      return children(currentItem, displayIndex);
    }
    
    if (renderCard) {
      return renderCard(currentItem, displayIndex);
    }
    
    // Renderizado por defecto
    return (
      <div className="space-y-4">
        {currentItem?.title && (
          <h3 className={`${typographyPresets.featureTitle} mb-2`}>
            {currentItem.title}
          </h3>
        )}
        {currentItem?.description && (
          <p className={typographyPresets.description}>
            {currentItem.description}
          </p>
        )}
      </div>
    );
  }, [items, displayIndex, children, renderCard]);

  // Calcular estilos de animación
  const getAnimationStyles = () => {
    const baseTransition = `all ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    
    switch (animationPhase) {
      case 'exit':
        return {
          transform: slideDirection === 'next' 
            ? 'translateX(-100%) scale(0.95)' 
            : 'translateX(100%) scale(0.95)',
          opacity: 0,
          transition: baseTransition
        };
        
      case 'enter':
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: baseTransition,
          // Inicial de entrada
          animation: slideDirection === 'next'
            ? `cleanSlideInLeft ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : `cleanSlideInRight ${transitionDuration / 2}ms cubic-bezier(0.4, 0, 0.2, 1)`
        };
        
      default: // 'idle'
        return {
          transform: 'translateX(0) scale(1)',
          opacity: 1,
          transition: baseTransition
        };
    }
  };

  // Indicadores de posición
  const renderIndicators = () => {
    if (!showIndicators || items.length <= 1) return null;

    return (
      <div className={`flex justify-center gap-2 ${indicatorPosition === 'top' ? 'mb-6' : 'mt-6'}`}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === displayIndex
                ? 'bg-cyan-400 w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            disabled={animationPhase !== 'idle'}
            aria-label={`Ir a tarjeta ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Flechas de navegación (desktop)
  const renderArrows = () => {
    if (!showArrows || (isClient && isMobile) || items.length <= 1) return null;

    return (
      <>
        <button
          onClick={handlePrevious}
          disabled={animationPhase !== 'idle'}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={animationPhase !== 'idle'}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta siguiente"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </>
    );
  };

  // Renderizado condicional después de todos los hooks
  if (!isClient) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative overflow-hidden">
          <div className={`min-h-[400px] flex items-center justify-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-xl border border-white/10 ${cardPadding}`}>
            <div className="flex items-center gap-2 text-white/30">
              <div className="w-4 h-4 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
              <span className="text-sm">Cargando contenido...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Indicadores superiores */}
      {indicatorPosition === 'top' && renderIndicators()}
      
      {/* Container principal con overflow hidden para transiciones limpias */}
      <div 
        ref={enableSwipe && isClient && isMobile ? swipeRef : null}
        className="relative overflow-hidden"
      >
        {/* Tarjeta principal - contenido único sin superposiciones */}
        <div
          data-swipeable-card
          className={`relative ${defaultCardStyles} ${cardClassName}`}
          style={getAnimationStyles()}
        >
          {renderContent()}
          {renderArrows()}
          
          {/* Indicadores de swipe para móviles */}
          {isClient && isMobile && enableSwipe && items.length > 1 && (
            <>
              <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-40">
                <div className="flex gap-0.5">
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/60 to-cyan-400/20 rounded-full animate-pulse" />
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/40 to-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/20 to-cyan-400/5 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <div className="text-xs text-cyan-400/60 font-light ml-1">←→</div>
              </div>
              
            </>
          )}
        </div>
      </div>
      
      {/* Indicadores inferiores */}
      {indicatorPosition === 'bottom' && renderIndicators()}
      
      {/* Información de navegación para móviles */}
      {isClient && isMobile && enableSwipe && items.length > 1 && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="flex items-center gap-1 text-cyan-400/70">
              <span className="text-sm">←</span>
              <span className="text-xs">desliza</span>
              <span className="text-sm">→</span>
            </div>
            <div className="w-px h-3 bg-white/20"></div>
            <div className="flex gap-1">
              {[...Array(items.length)].map((_, index) => (
                <div 
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === displayIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS para animaciones limpias */}
      <style jsx>{`
        @keyframes cleanSlideInLeft {
          from {
            transform: translateX(100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        @keyframes cleanSlideInRight {
          from {
            transform: translateX(-100%) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CleanSwipeCard;