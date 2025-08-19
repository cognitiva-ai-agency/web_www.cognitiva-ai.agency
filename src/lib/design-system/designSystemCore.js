/**
 * Design System - Punto de entrada principal
 * Exporta todo el sistema de diseño modular
 */

// Exportar sistema tipográfico
export * from './typographySystem';

// Exportar sistema de colores
export * from './colorSystem';

// Exportar tokens existentes (mantener compatibilidad)
export * from './designTokens';
export * from './animationSystem';

// Exportar componentes del sistema de diseño
export * from '../../components/ui/ReusableComponents';

// Configuración global del sistema de diseño
export const designSystemConfig = {
  // Versión del sistema de diseño
  version: '1.0.0',
  
  // Breakpoints principales
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  // Configuración de animaciones
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },
  
  // Z-index hierarchy
  zIndex: {
    dropdown: 10,
    sticky: 20,
    modal: 30,
    overlay: 40,
    max: 50
  }
};

// Utilidades globales
export const utils = {
  // Crear className dinámico
  cn: (...classes) => classes.filter(Boolean).join(' '),
  
  // Combinar estilos responsivos
  responsive: (base, sm, md, lg, xl) => {
    let classes = base;
    if (sm) classes += ` sm:${sm}`;
    if (md) classes += ` md:${md}`;
    if (lg) classes += ` lg:${lg}`;
    if (xl) classes += ` xl:${xl}`;
    return classes;
  },
  
  // Detectar dispositivo móvil
  isMobile: () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  },
  
  // Scroll suave a elemento
  scrollTo: (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};