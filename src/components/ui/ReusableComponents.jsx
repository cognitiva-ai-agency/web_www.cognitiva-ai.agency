/**
 * Design System Components - Componentes reutilizables del sistema de diseño
 * Mantiene consistencia visual en toda la aplicación
 */

"use client";
import React from 'react';
import { Star } from 'lucide-react';
import { typographyPresets, textColors } from '@/lib/design-system/typographySystem';
import { gradients, backgroundEffects, componentColors } from '@/lib/design-system/colorSystem';

// Componente de Título de Sección reutilizable
export const SectionTitle = ({ 
  children, 
  subtitle = '', 
  className = '', 
  centered = true 
}) => (
  <header className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 lg:mb-20 ${className}`}>
    <h2 className={typographyPresets.sectionTitle}>
      {children}
    </h2>
    {subtitle && (
      <p className={`${typographyPresets.subtitle} max-w-3xl ${centered ? 'mx-auto' : ''} mt-6`}>
        {subtitle}
      </p>
    )}
  </header>
);

// Badge/Etiqueta reutilizable
export const Badge = ({ 
  icon: Icon, 
  children, 
  variant = 'default',
  size = 'medium',
  className = '' 
}) => {
  const variants = {
    default: `${componentColors.badge.background} ${componentColors.badge.border}`,
    accent: `${gradients.primary} border-none`,
    glass: `${gradients.cardGlass} ${backgroundEffects.borderGradient}`
  };

  const sizes = {
    small: 'px-3 py-1.5 sm:py-2',
    medium: 'px-4 md:px-6 py-2 md:py-3', 
    large: 'px-6 md:px-8 py-3 md:py-4'
  };

  return (
    <div className={`
      inline-flex items-center gap-2 rounded-full backdrop-blur-xl
      ${variants[variant]} ${sizes[size]} ${className}
    `}>
      {Icon && <Icon className="h-4 w-4 text-cyan-400 animate-pulse" />}
      <span className={`${typographyPresets.badge} ${componentColors.badge.text}`}>
        {children}
      </span>
    </div>
  );
};

// Botón reutilizable 
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon: Icon,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: `${componentColors.button.primary.background} ${componentColors.button.primary.text} ${componentColors.button.primary.hover}`,
    secondary: `${componentColors.button.secondary.background} ${componentColors.button.secondary.text} ${componentColors.button.secondary.hover}`,
    ghost: `${backgroundEffects.borderGradient} ${textColors.body.light} hover:bg-white/5`
  };

  const sizes = {
    small: 'px-4 py-2 rounded-lg text-sm',
    medium: 'px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base',
    large: 'px-6 sm:px-8 py-4 sm:py-5 rounded-2xl text-base sm:text-lg'
  };

  return (
    <button 
      className={`
        relative group inline-flex items-center justify-center gap-2 
        font-medium transition-all duration-300 hover:scale-105
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-inherit blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5" />}
        {children}
      </div>
    </button>
  );
};

// Card/Tarjeta reutilizable
export const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'medium'
}) => {
  const paddings = {
    small: 'p-4',
    medium: 'p-4 sm:p-6',
    large: 'p-6 sm:p-8'
  };

  return (
    <div className={`
      rounded-xl sm:rounded-2xl ${gradients.cardGlass} ${backgroundEffects.borderGradient}
      ${hover ? 'hover:bg-white/10 hover:border-white/20 transition-all duration-300' : ''}
      ${paddings[padding]} ${className}
    `}>
      {children}
    </div>
  );
};

// Lista con iconos reutilizable
export const IconList = ({ 
  items = [], 
  icon: Icon,
  variant = 'check',
  className = '' 
}) => {
  const iconVariants = {
    check: 'text-emerald-400',
    bullet: 'text-cyan-400',
    arrow: 'text-blue-400'
  };

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {Icon ? (
            <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${iconVariants[variant]} flex-shrink-0 mt-0.5`} />
          ) : variant === 'bullet' ? (
            <div className={`w-2 h-2 ${iconVariants[variant]} rounded-full flex-shrink-0 mt-2`} />
          ) : null}
          <span className={typographyPresets.featureItem}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

// Fondo animado reutilizable
export const AnimatedBackground = ({ 
  variant = 'default',
  className = '' 
}) => {
  const variants = {
    default: (
      <>
        {/* Efectos de glow */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 blur-[128px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 blur-[128px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[128px] rounded-full" />
        
        {/* Grid pattern */}
        <div className={backgroundEffects.gridPattern} />
      </>
    ),
    
    hero: (
      <>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </>
    ),

    minimal: (
      <div className={backgroundEffects.gridPattern} />
    )
  };

  return (
    <div className={`absolute inset-0 -z-10 pointer-events-none overflow-hidden ${className}`}>
      {variants[variant]}
    </div>
  );
};

// Testimonial reutilizable
export const Testimonial = ({ 
  quote, 
  author = '',
  rating = 5,
  className = '' 
}) => (
  <Card className={`bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border-blue-400/20 ${className}`}>
    <blockquote className={typographyPresets.testimonial}>
      "{quote}"
    </blockquote>
    {rating > 0 && (
      <div className="flex items-center gap-2 mt-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
        ))}
      </div>
    )}
    {author && (
      <p className="text-sm text-blue-200/60 mt-2">— {author}</p>
    )}
  </Card>
);

// FAQ Item reutilizable
export const FAQItem = ({ 
  question, 
  answer, 
  className = '' 
}) => (
  <details className={`group ${className}`}>
    <summary className={`${typographyPresets.faqQuestion} cursor-pointer mb-2 group-open:text-white`}>
      {question}
    </summary>
    <p className={`${typographyPresets.faqAnswer} pl-4 border-l-2 border-cyan-400/30`}>
      {answer}
    </p>
  </details>
);

// Grid de integraciones reutilizable
export const IntegrationGrid = ({ 
  integrations = [],
  columns = 3,
  className = '' 
}) => (
  <div className={`grid grid-cols-${columns} gap-3 ${className}`}>
    {integrations.map((integration, index) => (
      <div 
        key={index}
        className="flex items-center justify-center p-3 bg-white rounded-lg border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <img 
          src={integration.src}
          alt={integration.alt}
          className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

// Section Container reutilizable con forwardRef
export const Section = React.forwardRef(({ 
  children,
  id,
  className = '',
  background = 'default',
  padding = 'default'
}, ref) => {
  const backgrounds = {
    default: gradients.sectionDark,
    dark: 'bg-[#0a0a0a]',
    gradient: gradients.heroBg
  };

  const paddings = {
    small: 'py-12 sm:py-16',
    default: 'py-16 sm:py-20 md:py-24 lg:py-28',
    large: 'py-20 sm:py-24 md:py-32 lg:py-40'
  };

  return (
    <section 
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section';