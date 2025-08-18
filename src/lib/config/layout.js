/**
 * Configuración de layout y columnas para cada sección
 */

export const SECTION_LAYOUTS = Object.freeze({
  // Sección de Servicios - ESTANDARIZADA como Industrias
  servicios: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    gap: "gap-6 lg:gap-6",
    maxWidth: "max-w-6xl",
    containerClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto"
  },

  // Sección de Casos de Estudio - ESTANDARIZADA como Industrias
  casos: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    gap: "gap-6 lg:gap-6",
    maxWidth: "max-w-6xl",
    containerClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto"
  },

  // Sección de Industrias - MODELO BASE
  industrias: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    gap: "gap-6 lg:gap-6",
    maxWidth: "max-w-6xl",
    containerClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto"
  },

  // Sección de Proceso
  proceso: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 5
    },
    gap: "gap-6 lg:gap-8",
    maxWidth: "max-w-7xl",
    containerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto"
  },

  // Sección de Seguridad
  seguridad: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 4
    },
    gap: "gap-4 lg:gap-6",
    maxWidth: "max-w-5xl",
    containerClass: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto"
  },

  // Sección de FAQ - ESTANDARIZADA como Industrias
  faq: {
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3
    },
    gap: "gap-6 lg:gap-6",
    maxWidth: "max-w-6xl",
    containerClass: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto"
  },

  // Sección de Integraciones
  integraciones: {
    columns: {
      mobile: 2,
      tablet: 4,
      desktop: 6
    },
    gap: "gap-4 lg:gap-6",
    maxWidth: "max-w-6xl",
    containerClass: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 max-w-6xl mx-auto"
  }
});

/**
 * Configuración de hover effects por sección
 */
export const HOVER_CONFIGS = Object.freeze({
  // Tarjetas que deben tener hover effects
  withHover: [
    'servicios',
    'casos',
    'industrias',
    'proceso'
  ],

  // Tarjetas que NO deben tener hover effects
  withoutHover: [
    'faq',
    'integraciones',
    'seguridad'
  ],

  // Configuración específica de hover por sección
  hoverStyles: {
    servicios: {
      glowOpacity: 20,
      borderOpacity: 30,
      transform: 'hover:translate-y-[-2px]',
      shadow: 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
    },
    casos: {
      glowOpacity: 20,
      borderOpacity: 30,
      transform: 'hover:translate-y-[-2px]',
      shadow: 'hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]'
    },
    industrias: {
      glowOpacity: 20,
      borderOpacity: 30,
      transform: 'hover:translate-y-[-1px]',
      shadow: 'hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]',
      // Solo aplicar hover a la altura del header de la tarjeta
      hoverArea: 'header-only'
    },
    proceso: {
      glowOpacity: 15,
      borderOpacity: 25,
      transform: 'hover:scale-[1.02]',
      shadow: 'hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]'
    }
  }
});

/**
 * Configuración de animaciones por sección
 */
export const ANIMATION_CONFIGS = Object.freeze({
  // Animaciones de entrada (cuando se monta el componente)
  entrance: {
    servicios: {
      stagger: 100, // ms entre cada tarjeta
      duration: 600,
      easing: 'ease-out'
    },
    casos: {
      stagger: 150,
      duration: 600,
      easing: 'ease-out'
    },
    industrias: {
      stagger: 50,
      duration: 400,
      easing: 'ease-out'
    },
    proceso: {
      stagger: 80,
      duration: 500,
      easing: 'ease-out'
    }
  },

  // Animaciones de expansión (cuando se abre/cierra una tarjeta)
  expansion: {
    duration: 500,
    easing: 'ease-in-out',
    // No delays internos - contenido aparece inmediatamente
    contentDelay: 0,
    // Solo animación del contenedor
    containerOnly: true
  }
});

/**
 * Configuración de responsive breakpoints
 */
export const BREAKPOINTS = Object.freeze({
  mobile: {
    max: 640, // px
    class: 'sm:'
  },
  tablet: {
    min: 641,
    max: 1023,
    class: 'md:'
  },
  desktop: {
    min: 1024,
    class: 'lg:'
  },
  wide: {
    min: 1280,
    class: 'xl:'
  }
});

/**
 * Función helper para obtener la configuración de una sección
 */
export function getSectionLayout(sectionName) {
  return SECTION_LAYOUTS[sectionName] || SECTION_LAYOUTS.servicios;
}

/**
 * Función helper para obtener la configuración de hover de una sección
 */
export function getHoverConfig(sectionName) {
  return HOVER_CONFIGS.hoverStyles[sectionName] || HOVER_CONFIGS.hoverStyles.servicios;
}

/**
 * Función helper para verificar si una sección debe tener hover
 */
export function shouldHaveHover(sectionName) {
  return HOVER_CONFIGS.withHover.includes(sectionName);
}

/**
 * Función helper para obtener la configuración de animaciones de una sección
 */
export function getAnimationConfig(sectionName) {
  return {
    entrance: ANIMATION_CONFIGS.entrance[sectionName] || ANIMATION_CONFIGS.entrance.servicios,
    expansion: ANIMATION_CONFIGS.expansion
  };
}