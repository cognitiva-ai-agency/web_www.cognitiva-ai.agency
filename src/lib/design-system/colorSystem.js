/**
 * Color System - Paleta de colores centralizada
 * Define todos los colores y gradientes utilizados en la página
 */

// Importar tokens centralizados
import { colors as tokenColors } from './designTokens';

// Usar tokens como base y agregar extensiones específicas
export const colors = {
  ...tokenColors,
  
  // Colores adicionales para componentes específicos  
  brand: {
    ...tokenColors.primary,
    cyan: tokenColors.secondary
  }
};

// Gradientes reutilizables
export const gradients = {
  // Gradientes principales
  primary: 'bg-gradient-to-r from-blue-600 to-cyan-500',
  primaryHover: 'hover:from-blue-700 hover:to-cyan-600',
  
  // Gradientes de texto
  textPrimary: 'bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400',
  textAccent: 'bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400',
  
  // Gradientes de fondo
  sectionDark: 'bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]',
  heroBg: `bg-gradient-radial from-[${colors.dark.primary}] to-[${colors.gray[900]}]`,
  
  // Gradientes para cards y superficies
  cardGlass: 'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
  cardElevated: 'bg-gradient-to-br from-white/10 to-white/5',
  
  // Gradientes para botones
  buttonSecondary: 'bg-gradient-to-r from-transparent to-transparent',
  
  // Gradientes de overlay
  overlayTop: 'bg-gradient-to-b from-blue-600/10 to-transparent',
  overlayRadial: 'bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5'
};

// Fondos con efectos especiales
export const backgroundEffects = {
  // Grid pattern sutil
  gridPattern: 'bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]',
  
  // Efectos de glow/blur
  glowBlue: 'bg-blue-500/20 blur-[128px] rounded-full',
  glowCyan: 'bg-cyan-500/15 blur-[128px] rounded-full',
  glowIndigo: 'bg-indigo-600/10 blur-[128px] rounded-full',
  
  // Bordes con gradiente
  borderGradient: 'border border-white/10',
  borderAccent: 'border border-cyan-400/40',
  
  // Sombras
  shadowGlow: 'shadow-[0_20px_50px_rgba(59,130,246,0.25)]',
  shadowButton: 'shadow-[0_0_20px_rgba(59,130,246,0.4)]'
};

// Componentes de fondo animado reutilizable
export const AnimatedBackground = {
  // Efectos de partículas flotantes
  particles: (count = 15) => ({
    className: "absolute inset-0 overflow-hidden pointer-events-none",
    elements: Array.from({ length: count }, (_, i) => ({
      style: {
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.5), transparent)',
        borderRadius: '50%',
        left: `${(i * 123 + 456) % 100}%`,
        animation: `floatNav ${15 + (i % 5)}s ease-in-out ${(i * 0.5) % 3}s infinite`,
        pointerEvents: 'none'
      }
    }))
  }),

  // Efectos de glow de fondo
  glowEffects: [
    {
      className: "absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 blur-[128px] rounded-full"
    },
    {
      className: "absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 blur-[128px] rounded-full"
    },
    {
      className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/10 blur-[128px] rounded-full"
    }
  ],

  // Línea de escaneo
  scanLine: {
    className: "fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent z-50",
    animation: "translateX"
  }
};

// Utilidades de color
export const colorUtils = {
  // Función para obtener color con opacidad
  withOpacity: (color, opacity) => `${color}/${Math.round(opacity * 100)}`,
  
  // Presets de transparencia comunes
  opacity: {
    glass: '/[0.08]',
    subtle: '/10',
    medium: '/20', 
    strong: '/40',
    solid: '/95'
  },
  
  // Estados hover comunes
  hover: {
    scale: 'hover:scale-105',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
    brighten: 'hover:brightness-110'
  }
};

// Esquemas de color por componente
export const componentColors = {
  // Navbar
  navbar: {
    background: `bg-[${colors.dark.primary}]/96 backdrop-blur-2xl`,
    backgroundScrolled: `bg-gradient-to-b from-[${colors.dark.primary}]/80 via-[#0d0d0d]/60 to-transparent backdrop-blur-xl`,
    border: 'border-white/20',
    text: 'text-blue-100/90',
    textHover: 'text-white',
    accent: 'text-cyan-400'
  },

  // Botones
  button: {
    primary: {
      background: 'bg-gradient-to-r from-blue-600 to-cyan-500',
      hover: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]',
      text: 'text-white'
    },
    secondary: {
      background: 'border border-cyan-400/40 bg-gradient-to-r from-transparent to-transparent backdrop-blur-sm',
      hover: 'hover:bg-[#0B285A] hover:border-cyan-400',
      text: 'text-cyan-300'
    }
  },

  // Cards
  card: {
    background: 'bg-gradient-to-br from-white/[0.08] to-white/[0.02]',
    border: 'border border-white/10',
    hover: 'hover:bg-white/10 hover:border-white/20'
  },

  // Badges/Etiquetas
  badge: {
    background: 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl',
    border: 'border border-blue-400/30',
    text: 'text-cyan-300'
  }
};