/**
 * Animations - Sistema de animaciones reutilizables
 * Configuración centralizada de todas las animaciones del sitio
 */

// Keyframes para animaciones
export const keyframes = {
  // Flotación suave
  float: {
    '0%, 100%': { 
      transform: 'translateY(0px) translateX(0px)', 
      opacity: '0.3' 
    },
    '33%': { 
      transform: 'translateY(-15px) translateX(8px)', 
      opacity: '0.6' 
    },
    '66%': { 
      transform: 'translateY(8px) translateX(-8px)', 
      opacity: '0.4' 
    },
  },

  // Brillos y destellos
  sparkle: {
    '0%, 100%': { 
      opacity: '1', 
      transform: 'scale(1) rotate(0deg)' 
    },
    '50%': { 
      opacity: '0.5', 
      transform: 'scale(0.8) rotate(180deg)' 
    },
  },

  // Pulsos lentos
  pulseSlow: {
    '0%, 100%': { opacity: '0.6' },
    '50%': { opacity: '1' },
  },

  // Gradientes en movimiento
  gradientShift: {
    '0%, 100%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
  },

  // Aparición desde arriba
  slideDown: {
    from: {
      opacity: '0',
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },

  // Aparición desde la izquierda
  slideLeft: {
    from: {
      opacity: '0',
      transform: 'translateX(20px)',
    },
    to: {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },

  // Aparición desde la derecha
  slideRight: {
    from: {
      opacity: '0',
      transform: 'translateX(-20px)',
    },
    to: {
      opacity: '1',
      transform: 'translateX(0)',
    },
  },

  // Aparición con escala
  scaleIn: {
    from: {
      opacity: '0',
      transform: 'scale(0.9)',
    },
    to: {
      opacity: '1',
      transform: 'scale(1)',
    },
  },

  // Rotación suave
  spin: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },

  // Bounce suave
  bounce: {
    '0%, 20%, 53%, 80%, 100%': {
      transform: 'translate3d(0,0,0)',
    },
    '40%, 43%': {
      transform: 'translate3d(0, -30px, 0)',
    },
    '70%': {
      transform: 'translate3d(0, -15px, 0)',
    },
    '90%': {
      transform: 'translate3d(0, -4px, 0)',
    },
  },

  // Scroll horizontal para logos
  scrollX: {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-100%)' },
  },

  // Fade in con delay
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },

  // Typing effect
  typing: {
    from: { width: '0' },
    to: { width: '100%' },
  },

  // Línea de escaneo
  scan: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(100vw)' },
  },
};

// Configuraciones de duración
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '1000ms',
  slowest: '2000ms',
};

// Configuraciones de easing
export const easings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
};

// Clases de animación predefinidas
export const animationClasses = {
  // Utilidades básicas
  'animate-float': {
    animation: 'float 15s ease-in-out infinite',
  },
  'animate-sparkle': {
    animation: 'sparkle 2s ease-in-out infinite',
  },
  'animate-pulse-slow': {
    animation: 'pulseSlow 2s ease-in-out infinite',
  },
  'animate-gradient-shift': {
    animation: 'gradientShift 6s ease infinite',
    backgroundSize: '200% 200%',
  },
  
  // Entradas
  'animate-slide-down': {
    animation: 'slideDown 0.3s ease-out',
  },
  'animate-slide-left': {
    animation: 'slideLeft 0.6s ease-out forwards',
  },
  'animate-slide-right': {
    animation: 'slideRight 0.6s ease-out forwards',
  },
  'animate-scale-in': {
    animation: 'scaleIn 0.3s ease-out',
  },
  'animate-fade-in': {
    animation: 'fadeIn 0.5s ease-out',
  },

  // Logos scroll
  'animate-scroll-x': {
    animation: 'scrollX 30s linear infinite',
  },

  // Estados hover
  'hover-scale': {
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  'hover-glow': {
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
    },
  },
};

// Delays para animaciones secuenciales
export const delays = {
  '100': '100ms',
  '200': '200ms',
  '300': '300ms',
  '500': '500ms',
  '700': '700ms',
  '1000': '1000ms',
};

// Función para generar CSS de animaciones
export const generateAnimationCSS = () => {
  let css = '';
  
  // Generar keyframes
  Object.entries(keyframes).forEach(([name, frames]) => {
    css += `@keyframes ${name} {\n`;
    Object.entries(frames).forEach(([key, value]) => {
      css += `  ${key} {\n`;
      if (typeof value === 'object') {
        Object.entries(value).forEach(([prop, val]) => {
          css += `    ${prop}: ${val};\n`;
        });
      }
      css += `  }\n`;
    });
    css += `}\n\n`;
  });
  
  // Generar clases de animación
  Object.entries(animationClasses).forEach(([className, styles]) => {
    css += `.${className} {\n`;
    Object.entries(styles).forEach(([prop, value]) => {
      if (prop.startsWith('&:')) {
        css += `}\n\n.${className}${prop.substring(1)} {\n`;
        Object.entries(value).forEach(([subProp, subValue]) => {
          css += `  ${subProp}: ${subValue};\n`;
        });
      } else {
        css += `  ${prop}: ${value};\n`;
      }
    });
    css += `}\n\n`;
  });
  
  return css;
};

// Clases de delay para animaciones
export const delayClasses = Object.entries(delays).reduce((acc, [key, value]) => {
  acc[`animation-delay-${key}`] = {
    animationDelay: value,
  };
  return acc;
}, {});

// Configuración responsive para animaciones
export const responsiveAnimations = {
  // Reducir animaciones en móviles para mejor performance
  mobile: {
    prefers: 'reduced-motion',
    animations: {
      'animate-float': 'none',
      'animate-sparkle': 'none',
      'animate-pulse-slow': 'animate-pulse',
    },
  },
  
  // Animaciones completas en desktop
  desktop: {
    animations: animationClasses,
  },
};

// Utilidades para scroll animations
export const inViewClass = "is-visible";

export function addInViewOnIntersect(el, options = { threshold: 0.12 }) {
  if (!el) return;
  const obs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.classList.add(inViewClass);
      obs.disconnect();
    }
  }, options);
  obs.observe(el);
}