"use client";
import React, { useState } from "react";
import CollapsibleCard from "./CollapsibleCard";
import { getSectionLayout, getAnimationConfig } from "../../lib/config/layout";

/**
 * Componente base estandarizado para todas las secciones con tarjetas
 * Siguiendo el modelo de la sección "Potencia tu industria"
 */
export default function StandardCardSection({
  // Configuración de la sección
  sectionId,
  sectionName = "servicios", // Para obtener configuración desde layout.js
  
  // Datos
  items = [],
  
  // Configuración visual
  gradients = [
    "from-blue-600 to-cyan-600",
    "from-purple-600 to-pink-600",
    "from-emerald-600 to-teal-600",
    "from-orange-600 to-amber-600",
    "from-rose-600 to-pink-600",
    "from-indigo-600 to-purple-600"
  ],
  
  // Props adicionales
  className = "",
  children
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Obtener configuración de layout
  const layoutConfig = getSectionLayout(sectionName);
  const animationConfig = getAnimationConfig(sectionName);
  
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${layoutConfig.containerClass} ${className}`}>
      {items.map((item, index) => {
        const gradient = gradients[index % gradients.length];
        const isExpanded = openIndex === index;
        const isHovered = hoveredCard === (item.id || item.title || item.name);
        
        return (
          <CollapsibleCard
            key={item.id || item.title || item.name || index}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle || item.tag || item.kpi}
            description={item.description}
            isOpen={isExpanded}
            isHovered={isHovered}
            onClick={() => toggleCard(index)}
            bullets={item.bullets || item.features}
            metrics={item.metrics}
            gradient={gradient}
            animationDelay={index * animationConfig.entrance.stagger}
            onMouseEnter={() => setHoveredCard(item.id || item.title || item.name)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Contenido personalizado por sección */}
            {children && children(item, index, { isExpanded, gradient })}
          </CollapsibleCard>
        );
      })}
    </div>
  );
}

/**
 * Hook personalizado para gestión de estado de secciones estandarizadas
 */
export function useStandardSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const setHover = (cardId) => {
    setHoveredCard(cardId);
  };
  
  const clearHover = () => {
    setHoveredCard(null);
  };
  
  return {
    openIndex,
    hoveredCard,
    toggleCard,
    setHover,
    clearHover,
    isExpanded: (index) => openIndex === index,
    isHovered: (cardId) => hoveredCard === cardId
  };
}