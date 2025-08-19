/**
 * GallerySwipeCard - Sistema de tarjetas con animación estilo galería Android
 * Muestra la tarjeta anterior levemente hasta que pasa a la siguiente
 */

"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useSwipeGestures from '@/hooks/useSwipeGestures';
import { typographyPresets } from '@/lib/design-system/typographySystem';
import { gradients } from '@/lib/design-system/colorSystem';

const GallerySwipeCard = ({
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
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next'); // 'next' o 'prev'
  
  const containerRef = useRef(null);

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

  // Animación mejorada estilo galería de fotos
  const goToIndex = (index) => {
    if (index === currentIndex || isTransitioning) return;
    
    const direction = index > currentIndex ? 'next' : 'prev';
    setSlideDirection(direction);
    setIsTransitioning(true);
    
    // Cambiar contenido inmediatamente
    setCurrentIndex(index);
    onIndexChange?.(index);
    
    // La transición dura el tiempo completo
    setTimeout(() => {
      setIsTransitioning(false);
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

  // Tarjeta anterior visible durante transición (estilo Android Gallery)
  const renderPreviousCard = () => {
    if (!isTransitioning) return null;
    
    // La tarjeta anterior es la que estaba antes del cambio
    const prevIndex = slideDirection === 'next' 
      ? (currentIndex === 0 ? items.length - 1 : currentIndex - 1)
      : (currentIndex === items.length - 1 ? 0 : currentIndex + 1);
    
    const prevItem = items[prevIndex];
    const prevContent = renderCard 
      ? renderCard(prevItem, prevIndex)
      : (children ? children(prevItem, prevIndex) : null);

    return (
      <div 
        className={`absolute inset-0 ${defaultCardStyles} ${cardClassName}`}
        style={{
          transform: slideDirection === 'next' 
            ? `translateX(-30px) scale(0.92) rotateY(15deg)`
            : `translateX(30px) scale(0.92) rotateY(-15deg)`,
          opacity: 0.4,
          zIndex: 1,
          filter: 'brightness(0.7)',
          transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          transformOrigin: slideDirection === 'next' ? 'right center' : 'left center'
        }}
      >
        {prevContent}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta anterior"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 disabled:opacity-50 z-20"
          aria-label="Tarjeta siguiente"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </>
    );
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Indicadores superiores */}
      {indicatorPosition === 'top' && renderIndicators()}
      
      {/* Container de tarjetas con efecto galería */}
      <div 
        ref={enableSwipe && isMobile ? swipeRef : null}
        className="relative overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        {/* Tarjeta anterior (efecto galería) */}
        {renderPreviousCard()}
        
        {/* Tarjeta principal con animación de entrada suave */}
        <div
          data-swipeable-card
          className={`relative ${defaultCardStyles} ${cardClassName} ${
            isTransitioning ? 'pointer-events-none' : ''
          }`}
          style={{
            transform: isTransitioning 
              ? slideDirection === 'next'
                ? 'translateX(0) scale(1) rotateY(0deg)'
                : 'translateX(0) scale(1) rotateY(0deg)'
              : 'translateX(0) scale(1) rotateY(0deg)',
            opacity: isTransitioning ? 0.95 : 1,
            zIndex: 10,
            transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            animation: isTransitioning 
              ? slideDirection === 'next'
                ? `slideInFromRight ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : `slideInFromLeft ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : 'none'
          }}
        >
          {renderContent()}
          {renderArrows()}
          
          {/* Indicadores de swipe para móviles */}
          {isMobile && enableSwipe && items.length > 1 && (
            <>
              {/* Indicador de deslizamiento */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-40">
                <div className="flex gap-0.5">
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/60 to-cyan-400/20 rounded-full animate-pulse" />
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/40 to-cyan-400/10 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="w-1 h-4 bg-gradient-to-t from-cyan-400/20 to-cyan-400/5 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <div className="text-xs text-cyan-400/60 font-light ml-1">
                  ←→
                </div>
              </div>
              
              {/* Progreso de navegación */}
              <div className="absolute top-4 right-4 opacity-30">
                <div className="flex items-center gap-1 text-xs text-white/60">
                  <span>{currentIndex + 1}</span>
                  <div className="w-6 h-0.5 bg-white/30 rounded-full">
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
      </div>
      
      {/* Indicadores inferiores */}
      {indicatorPosition === 'bottom' && renderIndicators()}
      
      {/* Información de navegación para móviles */}
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
      
      {/* CSS personalizado para animaciones de galería */}
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%) scale(0.9) rotateY(-15deg);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(0) scale(1) rotateY(0deg);
            opacity: 1;
          }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%) scale(0.9) rotateY(15deg);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(0) scale(1) rotateY(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default GallerySwipeCard;