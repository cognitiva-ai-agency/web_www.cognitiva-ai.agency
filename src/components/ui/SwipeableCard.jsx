/**
 * SwipeableCard - Sistema modular de tarjetas deslizables
 * Componente reutilizable con gestos táctiles para móviles
 * Diseñado para navegación intuitiva tipo app móvil
 */

"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useSwipeGestures from '@/hooks/useSwipeGestures';
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients } from '@/lib/design-system/colorSystem';

const SwipeableCard = ({
  items = [],
  activeIndex = 0,
  onIndexChange,
  className = '',
  cardClassName = '',
  showIndicators = true,
  showArrows = false, // Solo para desktop
  enableSwipe = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  children, // Render prop para contenido customizable
  renderCard, // Función para renderizar cada tarjeta
  // Configuración visual
  cardPadding = 'p-4 sm:p-6 lg:p-8',
  cardBackground = '',
  cardBorder = '',
  indicatorPosition = 'bottom', // 'top' | 'bottom'
  // Configuración de animaciones
  transitionDuration = 300,
  // Configuración de gestos
  swipeThreshold = 50,
  preventScrollOnSwipe = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sincronizar con prop externa
  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  // AutoPlay
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, items.length]);

  // Funciones de navegación con animación mejorada
  const goToIndex = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Animación de salida (fade out + slight scale)
    const cardElement = document.querySelector('[data-swipeable-card]');
    if (cardElement) {
      cardElement.style.transition = `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      cardElement.style.opacity = '0.7';
      cardElement.style.transform = 'scale(0.95) translateY(10px)';
    }
    
    // Cambiar contenido a la mitad de la animación
    setTimeout(() => {
      setCurrentIndex(index);
      onIndexChange?.(index);
      
      // Animación de entrada (fade in + scale back)
      if (cardElement) {
        cardElement.style.opacity = '1';
        cardElement.style.transform = 'scale(1) translateY(0px)';
      }
    }, transitionDuration / 2);
    
    // Finalizar transición
    setTimeout(() => {
      setIsTransitioning(false);
      if (cardElement) {
        cardElement.style.transition = '';
      }
    }, transitionDuration);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToIndex(prevIndex);
  };

  // Configurar gestos swipe
  const swipeRef = useSwipeGestures({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
    threshold: swipeThreshold,
    preventScrollOnTouch: preventScrollOnSwipe
  });

  // Estilos base de la tarjeta
  const defaultCardStyles = `
    rounded-xl sm:rounded-2xl
    ${gradients.cardGlass}
    border border-white/10
    ${cardPadding}
    transition-all duration-${transitionDuration}
    ${cardBackground}
    ${cardBorder}
  `;

  // Renderizado de contenido
  const renderContent = () => {
    if (children) {
      return children(items[currentIndex], currentIndex);
    }
    
    if (renderCard) {
      return renderCard(items[currentIndex], currentIndex);
    }
    
    // Renderizado por defecto
    const item = items[currentIndex];
    return (
      <div className="space-y-4">
        {item.title && (
          <h3 className={`${typographyPresets.featureTitle} mb-2`}>
            {item.title}
          </h3>
        )}
        {item.description && (
          <p className={typographyPresets.description}>
            {item.description}
          </p>
        )}
      </div>
    );
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
              index === currentIndex
                ? 'bg-cyan-400 w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir a tarjeta ${index + 1}`}
          />
        ))}
      </div>
    );
  };

  // Flechas de navegación (desktop)
  const renderArrows = () => {
    if (!showArrows || isMobile || items.length <= 1) return null;

    return (
      <>
        <button
          onClick={handlePrevious}
          disabled={isTransitioning}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Tarjeta anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          aria-label="Tarjeta siguiente"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </>
    );
  };

  // Render principal
  return (
    <div className={`relative ${className}`}>
      {/* Indicadores superiores */}
      {indicatorPosition === 'top' && renderIndicators()}
      
      {/* Tarjeta principal */}
      <div
        ref={enableSwipe && isMobile ? swipeRef : null}
        data-swipeable-card
        className={`relative ${defaultCardStyles} ${cardClassName} ${
          isTransitioning ? 'pointer-events-none' : ''
        } transition-all duration-300 ease-out`}
        style={{
          willChange: 'transform, opacity'
        }}
      >
        {renderContent()}
        {renderArrows()}
        
        {/* Indicadores visuales mejorados para swipe */}
        {isMobile && enableSwipe && items.length > 1 && (
          <>
            {/* Indicador de deslizamiento */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-40 group-hover:opacity-60 transition-opacity">
              <div className="flex gap-0.5">
                <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/60 to-cyan-400/20 rounded-full animate-pulse" />
                <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/40 to-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/20 to-cyan-400/5 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
              </div>
              <div className="text-xs text-cyan-400/60 font-light ml-1">
                ←→
              </div>
            </div>
            
            {/* Hint de navegación sutil */}
            <div className="absolute top-4 right-4 opacity-20">
              <div className="flex items-center gap-1 text-xs text-white/60">
                <span>{currentIndex + 1}</span>
                <div className="w-4 h-0.5 bg-white/30 rounded-full">
                  <div 
                    className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                  />
                </div>
                <span>{items.length}</span>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Indicadores inferiores */}
      {indicatorPosition === 'bottom' && renderIndicators()}
      
      {/* Información de navegación para móviles mejorada */}
      {isMobile && enableSwipe && items.length > 1 && (
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
                    index === currentIndex ? 'bg-cyan-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwipeableCard;