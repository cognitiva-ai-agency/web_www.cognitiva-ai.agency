"use client";
import React from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import StandardSectionHeader from "./StandardSectionHeader";
import StandardCardSection from "./StandardCardSection";

/**
 * Componente de sección completa estandarizada
 * Combina header, background effects y grid de tarjetas
 * Siguiendo el modelo de la sección "Potencia tu industria"
 */
export default function StandardSection({
  // Configuración de la sección
  id,
  sectionName = "servicios",
  ariaLabel,
  
  // Configuración del header
  headerProps = {},
  
  // Datos y contenido
  items = [],
  gradients,
  
  // Contenido personalizado
  children,
  renderCard,
  footer,
  
  // Configuración visual
  backgroundClassName = "bg-[#000412]",
  className = "",
  
  // Efectos de fondo
  showBackgroundEffects = true,
  backgroundConfig = {}
}) {
  const { ref } = useScrollAnimation();
  
  const defaultBackgroundConfig = {
    gradient1: {
      position: "top-0 right-0",
      size: "w-[1000px] h-[1000px]",
      gradient: "bg-gradient-to-bl from-blue-600/10 to-transparent",
      blur: "blur-[150px]",
      animation: "animate-pulse-slow"
    },
    gradient2: {
      position: "bottom-0 left-0",
      size: "w-[800px] h-[800px]",
      gradient: "bg-gradient-to-tr from-cyan-500/10 to-transparent",
      blur: "blur-[120px]",
      animation: "animate-pulse-slow animation-delay-2000"
    },
    gradient3: {
      position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      size: "w-[1200px] h-[1200px]",
      gradient: "bg-gradient-to-r from-purple-600/5 to-transparent",
      blur: "blur-[100px]",
      animation: "animate-rotate-slow"
    },
    gridPattern: {
      pattern: "bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)]",
      size: "bg-[size:100px_100px]"
    }
  };
  
  const bgConfig = { ...defaultBackgroundConfig, ...backgroundConfig };

  return (
    <section
      id={id}
      className={`relative py-32 ${backgroundClassName} overflow-hidden ${className}`}
      aria-label={ariaLabel}
    >
      {/* Efectos de fondo */}
      {showBackgroundEffects && (
        <div aria-hidden className="absolute inset-0">
          {/* Gradientes animados */}
          <div className={`absolute ${bgConfig.gradient1.position} ${bgConfig.gradient1.size} ${bgConfig.gradient1.gradient} ${bgConfig.gradient1.blur} rounded-full ${bgConfig.gradient1.animation}`} />
          <div className={`absolute ${bgConfig.gradient2.position} ${bgConfig.gradient2.size} ${bgConfig.gradient2.gradient} ${bgConfig.gradient2.blur} rounded-full ${bgConfig.gradient2.animation}`} />
          <div className={`absolute ${bgConfig.gradient3.position} ${bgConfig.gradient3.size} ${bgConfig.gradient3.gradient} ${bgConfig.gradient3.blur} rounded-full ${bgConfig.gradient3.animation}`} />
          
          {/* Grid pattern */}
          <div className={`absolute inset-0 ${bgConfig.gridPattern.pattern} ${bgConfig.gridPattern.size}`} />
        </div>
      )}

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header estandarizado */}
        <StandardSectionHeader {...headerProps} />

        {/* Grid de tarjetas estandarizado */}
        <StandardCardSection
          sectionId={id}
          sectionName={sectionName}
          items={items}
          gradients={gradients}
        >
          {renderCard}
        </StandardCardSection>

        {/* Contenido adicional personalizado */}
        {children}
        
        {/* Footer de sección */}
        {footer}
      </div>

      {/* Estilos para animaciones estandarizadas */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
}