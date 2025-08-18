"use client";
import React from "react";
import { Sparkles } from "lucide-react";

/**
 * Header estandarizado para todas las secciones
 * Siguiendo el modelo de la sección "Potencia tu industria"
 */
export default function StandardSectionHeader({
  // Contenido del badge
  badgeIcon: BadgeIcon = Sparkles,
  badgeText,
  secondaryBadgeIcon: SecondaryBadgeIcon,
  
  // Título principal
  titlePrefix,
  titleHighlight,
  titleSuffix,
  
  // Descripción
  description,
  secondaryDescription,
  
  // Configuración visual
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = ""
}) {
  return (
    <header className={`text-center mb-16 ${className}`}>
      {/* Badge iluminado */}
      {badgeText && (
        <div className="inline-block mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
            <div className={`relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10 ${badgeClassName}`}>
              {BadgeIcon && <BadgeIcon className="h-5 w-5 text-cyan-400 animate-pulse" />}
              <span className="text-sm font-light tracking-wide text-cyan-300">
                {badgeText}
              </span>
              {SecondaryBadgeIcon && <SecondaryBadgeIcon className="h-5 w-5 text-cyan-400 animate-pulse" />}
            </div>
          </div>
        </div>
      )}

      {/* Título con degradado */}
      <h2 className={`text-5xl md:text-7xl font-thin tracking-tight text-white mb-4 ${titleClassName}`}>
        {titlePrefix && (
          <span className="font-light">{titlePrefix}</span>
        )}
        {titlePrefix && titleHighlight && " "}
        {titleHighlight && (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
            {titleHighlight}
          </span>
        )}
        {titleSuffix && (
          <>
            <br />
            <span className="text-white/90 font-light">{titleSuffix}</span>
          </>
        )}
      </h2>
      
      {/* Descripción principal */}
      {description && (
        <p className={`text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto mb-4 ${descriptionClassName}`}>
          {description}
        </p>
      )}
      
      {/* Descripción secundaria */}
      {secondaryDescription && (
        <p className="text-sm font-light text-cyan-300/60">
          {secondaryDescription}
        </p>
      )}
    </header>
  );
}