/**
 * SimpleNavigation - Navegación simple y funcional
 * Sin complicaciones, solo centrado básico que funcione
 */

"use client";
import React, { useRef, useEffect, useState } from 'react';

const SimpleNavigation = ({
  items = [],
  activeIndex = 0,
  onItemSelect,
  className = ''
}) => {
  const scrollContainerRef = useRef(null);
  const activeItemRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Centrar elemento activo (solo móviles)
  useEffect(() => {
    if (!isMobile) return;
    
    const timer = setTimeout(() => {
      const container = scrollContainerRef.current;
      const activeItem = activeItemRef.current;
      
      if (container && activeItem) {
        const containerWidth = container.offsetWidth;
        const itemLeft = activeItem.offsetLeft;
        const itemWidth = activeItem.offsetWidth;
        
        const scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [activeIndex, isMobile]);

  return (
    <div className={`${className}`}>
      <div
        ref={scrollContainerRef}
        className={`flex gap-2 ${isMobile ? 'overflow-x-auto pb-2 px-4' : 'flex-wrap justify-center'}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: { display: 'none' }
        }}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id || index}
              ref={isActive ? activeItemRef : null}
              onClick={() => onItemSelect(index)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 whitespace-nowrap text-sm
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-cyan-400/40 text-white shadow-lg scale-105' 
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {Icon && <Icon className={`h-4 w-4 ${isActive ? 'text-cyan-400' : ''}`} />}
              <span className="font-light">{item.title}</span>
            </button>
          );
        })}
      </div>
      
      {/* Indicador de posición para móviles */}
      {isMobile && (
        <div className="text-center mt-3">
          <div className="flex justify-center gap-1">
            {items.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-cyan-400 w-6' : 'bg-white/30 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      )}
      
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SimpleNavigation;