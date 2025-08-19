/**
 * SimpleSwipeCard - Componente de transición simple y efectivo
 * Con animación de slide horizontal
 */

"use client";
import React, { useState, useEffect, useRef } from 'react';
import useSwipeGestures from '@/hooks/useSwipeGestures';

const SimpleSwipeCard = ({
  items = [],
  activeIndex = 0,
  onIndexChange,
  className = '',
  children,
  renderCard,
  enableSwipe = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState(null);
  const [direction, setDirection] = useState('right'); // 'right' o 'left'
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
    if (activeIndex !== currentIndex && !isTransitioning) {
      const newDirection = activeIndex > currentIndex ? 'right' : 'left';
      setDirection(newDirection);
      setNextIndex(activeIndex);
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex(activeIndex);
        setIsTransitioning(false);
        setNextIndex(null);
      }, 300);
    }
  }, [activeIndex, currentIndex, isTransitioning]);

  // Funciones de navegación
  const goToIndex = (index) => {
    if (index === currentIndex || isTransitioning) return;
    onIndexChange?.(index);
  };

  const handleNext = () => {
    const next = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToIndex(next);
  };

  const handlePrevious = () => {
    const prev = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToIndex(prev);
  };

  // Configurar gestos swipe
  const swipeRef = useSwipeGestures({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrevious,
    threshold: 50,
    preventScrollOnTouch: true
  });

  // Renderizado de contenido
  const renderContent = (item, index) => {
    if (children) {
      return children(item, index);
    }
    
    if (renderCard) {
      return renderCard(item, index);
    }
    
    return (
      <div className="space-y-4">
        {item.title && <h3 className="text-xl font-semibold text-white">{item.title}</h3>}
        {item.description && <p className="text-white/80">{item.description}</p>}
      </div>
    );
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={enableSwipe && isMobile ? swipeRef : null}
        className="relative"
        style={{ minHeight: '400px' }}
      >
        {/* Tarjeta actual */}
        <div
          className={`transition-transform duration-300 ease-in-out ${
            isTransitioning
              ? direction === 'right'
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          {renderContent(items[currentIndex], currentIndex)}
        </div>

        {/* Tarjeta entrante (durante transición) */}
        {isTransitioning && nextIndex !== null && (
          <div
            className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
              direction === 'right'
                ? 'translate-x-0 opacity-100'
                : 'translate-x-0 opacity-100'
            }`}
            style={{
              transform: direction === 'right' 
                ? 'translateX(0)' 
                : 'translateX(0)',
              animation: direction === 'right'
                ? 'slideInRight 0.3s ease-in-out'
                : 'slideInLeft 0.3s ease-in-out'
            }}
          >
            {renderContent(items[nextIndex], nextIndex)}
          </div>
        )}

        {/* Indicadores de swipe para móviles */}
        {isMobile && enableSwipe && items.length > 1 && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1 opacity-50">
            <span className="text-xs text-cyan-400">←→</span>
          </div>
        )}
      </div>

      {/* Indicador de progreso */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 w-6'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      )}

      {/* CSS para animaciones */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SimpleSwipeCard;