/**
 * TouchNavigation - Navegación táctil avanzada para móviles
 * Sistema modular de botones/tabs con gestos mejorados
 * Diseñado como alternativa a scroll horizontal en móviles
 */

"use client";
import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { typographyPresets } from '@/lib/design-system/typographySystem';

const TouchNavigation = ({
  items = [],
  activeIndex = 0,
  onItemSelect,
  className = '',
  // Configuración visual
  variant = 'pills', // 'pills' | 'tabs' | 'chips'
  size = 'medium', // 'small' | 'medium' | 'large'
  showIcons = true,
  showScrollIndicators = true,
  // Configuración de comportamiento
  centerActiveItem = true,
  snapToItems = true,
  enableAutoScroll = true,
  // Estilos personalizados
  itemClassName = '',
  activeItemClassName = '',
  containerClassName = ''
}) => {
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Detectar dispositivo móvil
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Verificar estado de scroll
  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  // Centrar elemento activo mejorado - solo en móviles
  const scrollToActiveItem = () => {
    if (!centerActiveItem || !enableAutoScroll || !isMobile) return;

    // Usar requestAnimationFrame para asegurar que el DOM esté actualizado
    requestAnimationFrame(() => {
      const container = scrollContainerRef.current;
      const activeItem = itemRefs.current[activeIndex];
      
      if (!container || !activeItem) return;

      const containerRect = container.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const containerScrollLeft = container.scrollLeft;
      
      // Calcular la posición relativa del item en el container
      const itemLeft = itemRect.left - containerRect.left + containerScrollLeft;
      const itemCenter = itemLeft + (itemRect.width / 2);
      const containerCenter = containerRect.width / 2;
      
      // Calcular el scroll necesario para centrar
      const scrollLeft = Math.max(0, itemCenter - containerCenter);
      
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    });
  };

  // Efectos
  useEffect(() => {
    updateScrollState();
  }, [items]);

  useEffect(() => {
    // CENTRADO PRECISO PARA MÓVILES - ENFOQUE MATEMÁTICO
    if (!isMobile || !centerActiveItem) return;
    
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const activeButton = itemRefs.current[activeIndex];
      
      if (container && activeButton) {
        // Obtener dimensiones exactas con múltiples intentos si es necesario
        const attemptCentering = () => {
          const containerRect = container.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          
          // Verificar que las dimensiones sean válidas
          if (containerRect.width === 0 || buttonRect.width === 0) {
            setTimeout(attemptCentering, 50);
            return;
          }
          
          // Calcular posición exacta del botón respecto al container
          const buttonRelativeLeft = buttonRect.left - containerRect.left + container.scrollLeft;
          const buttonCenter = buttonRelativeLeft + (buttonRect.width / 2);
          const containerCenter = containerRect.width / 2;
          
          // Calcular scroll exacto para centrar
          const targetScrollLeft = buttonCenter - containerCenter;
          
          // Aplicar scroll con límites
          const maxScroll = container.scrollWidth - container.clientWidth;
          const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll));
          
          container.scrollTo({
            left: finalScrollLeft,
            behavior: 'smooth'
          });
          
        };
        
        attemptCentering();
      }
    }, 250); // Delay aumentado para mejor timing
    
    return () => clearTimeout(timer);
  }, [activeIndex, centerActiveItem, isMobile]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateScrollState);
    return () => container.removeEventListener('scroll', updateScrollState);
  }, []);

  // Centrar elemento inicial al montar el componente
  useEffect(() => {
    if (!isMobile || !centerActiveItem) return;
    
    const initialTimer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const activeButton = itemRefs.current[activeIndex];
      
      if (container && activeButton) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        
        const buttonRelativeLeft = buttonRect.left - containerRect.left + container.scrollLeft;
        const buttonCenter = buttonRelativeLeft + (buttonRect.width / 2);
        const containerCenter = containerRect.width / 2;
        
        const targetScrollLeft = buttonCenter - containerCenter;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll));
        
        // Scroll inmediato sin animación para el montaje inicial
        container.scrollTo({
          left: finalScrollLeft,
          behavior: 'auto'
        });
        
      }
    }, 300); // Delay mayor para asegurar que el layout esté completo
    
    return () => clearTimeout(initialTimer);
  }, [isMobile, centerActiveItem]); // Solo se ejecuta al montar/cambiar móvil

  // Funciones de navegación
  const scrollToDirection = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  // Manejar selección de item con centrado inmediato
  const handleItemSelect = (index) => {
    onItemSelect(index);
    
    // Centrar inmediatamente en móviles
    if (isMobile && centerActiveItem) {
      setTimeout(() => {
        const container = scrollContainerRef.current;
        const targetButton = itemRefs.current[index];
        
        if (container && targetButton) {
          const containerRect = container.getBoundingClientRect();
          const buttonRect = targetButton.getBoundingClientRect();
          
          const buttonRelativeLeft = buttonRect.left - containerRect.left + container.scrollLeft;
          const buttonCenter = buttonRelativeLeft + (buttonRect.width / 2);
          const containerCenter = containerRect.width / 2;
          
          const targetScrollLeft = buttonCenter - containerCenter;
          const maxScroll = container.scrollWidth - container.clientWidth;
          const finalScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll));
          
          container.scrollTo({
            left: finalScrollLeft,
            behavior: 'smooth'
          });
          
        }
      }, 50); // Delay mínimo para permitir que el estado se actualice
    }
  };

  // Variantes de estilo
  const getVariantStyles = () => {
    switch (variant) {
      case 'tabs':
        return {
          container: 'border-b border-white/10',
          item: 'border-b-2 border-transparent hover:border-white/20',
          active: 'border-cyan-400 bg-transparent'
        };
      case 'chips':
        return {
          container: '',
          item: 'rounded-full border border-white/20 hover:border-white/30',
          active: 'border-cyan-400/40 bg-cyan-400/10'
        };
      default: // pills
        return {
          container: '',
          item: isMobile 
            ? 'rounded-full hover:bg-white/10' 
            : 'rounded-lg hover:bg-white/10 border border-white/10 hover:border-white/20',
          active: isMobile
            ? 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30'
            : 'bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-cyan-400/50 shadow-lg shadow-cyan-400/20'
        };
    }
  };

  const getSizeStyles = () => {
    // En móviles solo iconos, botones más pequeños y cuadrados
    if (isMobile) {
      switch (size) {
        case 'small':
          return 'p-2';
        case 'large':
          return 'p-4';
        default: // medium
          return 'p-3';
      }
    }
    
    // En desktop con texto, tamaños con más padding para evitar sobreposición
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-xs';
      case 'large':
        return 'px-8 py-4 text-base';
      default: // medium
        return 'px-6 py-3 text-sm font-medium';
    }
  };

  const styles = getVariantStyles();

  if (!isClient) {
    return <div className={`relative ${className}`} />;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Indicadores de scroll (solo móvil) */}
      {isMobile && showScrollIndicators && (
        <>
          {canScrollLeft && (
            <button
              onClick={() => scrollToDirection('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/50 backdrop-blur-sm"
              aria-label="Scroll a la izquierda"
            >
              <ChevronLeft className="h-4 w-4 text-white" />
            </button>
          )}
          
          {canScrollRight && (
            <button
              onClick={() => scrollToDirection('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-black/50 backdrop-blur-sm"
              aria-label="Scroll a la derecha"
            >
              <ChevronRight className="h-4 w-4 text-white" />
            </button>
          )}
        </>
      )}

      {/* Container de navegación */}
      <div
        ref={scrollContainerRef}
        className={`
          flex overflow-x-auto scrollbar-hide
          ${isMobile ? 'gap-3 pb-2 px-4 justify-start' : 'gap-3 flex-wrap justify-center py-2'}
          ${styles.container}
          ${containerClassName}
        `}
        style={{
          scrollSnapType: snapToItems && isMobile ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
        }}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id || index}
              ref={el => itemRefs.current[index] = el}
              onClick={() => handleItemSelect(index)}
              className={`
                flex items-center transition-all duration-300
                ${isMobile ? 'justify-center rounded-full' : 'justify-start gap-2 whitespace-nowrap rounded-lg'}
                ${getSizeStyles()}
                ${styles.item}
                ${isActive ? styles.active : ''}
                ${isActive 
                  ? isMobile 
                    ? 'text-white shadow-lg transform scale-110' 
                    : 'text-white shadow-md transform scale-[1.02]'
                  : 'text-white/70 hover:text-white hover:scale-[1.01]'
                }
                ${isActive ? activeItemClassName : itemClassName}
                ${snapToItems ? 'scroll-snap-align-center' : ''}
                relative overflow-visible
              `}
              style={{
                scrollSnapAlign: snapToItems ? 'center' : 'none',
                zIndex: isActive ? 10 : 1
              }}
              aria-pressed={isActive}
            >
              {/* Efecto de brillo en botón activo - solo desktop */}
              {isActive && !isMobile && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-400/30 to-blue-600/20 animate-pulse" 
                     style={{ animationDuration: '2s' }} />
              )}
              
              <div className="relative z-10 flex items-center gap-2">
                {showIcons && Icon && (
                  <Icon className={`${isMobile ? 'h-6 w-6' : 'h-4 w-4'} ${isActive ? 'text-cyan-400' : ''} transition-colors duration-300`} />
                )}
                {/* Solo mostrar texto en desktop */}
                {!isMobile && (
                  <span className="font-light">
                    {item.title || item.name || item.label}
                  </span>
                )}
                
                {/* Indicador visual activo mejorado - solo en desktop con texto */}
                {isActive && variant === 'pills' && !isMobile && (
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-sm shadow-cyan-400/50" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Información de navegación mejorada */}
      {isMobile && (
        <div className="flex justify-center items-center mt-4 gap-3">
          <div className="flex gap-1.5">
            {items.map((_, index) => (
              <div 
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-cyan-400 w-8 shadow-sm shadow-cyan-400/50' 
                    : 'bg-white/30 w-1.5 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="text-xs text-white/60 font-light bg-white/5 px-2 py-1 rounded-full">
            {activeIndex + 1} / {items.length}
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos para ocultar scrollbar
const scrollbarHideStyles = `
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
`;

// Inyectar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = scrollbarHideStyles;
  document.head.appendChild(styleSheet);
}

export default TouchNavigation;