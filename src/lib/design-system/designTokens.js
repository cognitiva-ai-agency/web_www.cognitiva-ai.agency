/**
 * Design Tokens - Sistema de diseño centralizado
 * Configuración global de colores, espaciado, tipografía y breakpoints
 */

export const colors = {
  // Colores primarios
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa', // from-[#60A5FA]
    500: '#3b82f6',
    600: '#2563eb', // blue-600
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Colores secundarios (cyan)
  secondary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc', 
    300: '#67e8f9',
    400: '#22d3ee', // to-[#22D3EE]
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },

  // Grises
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db', // text-[#D1D5DB]
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151', // border-[#374151]
    800: '#1f2937', // border-[#1F2937]
    900: '#111827', // to-[#111827]
    950: '#0a0a0a',
  },

  // Fondos oscuros
  dark: {
    primary: '#0B1220', // bg-[#0B1220] - Azul petróleo oscuro
    secondary: '#0F172A', // bg-[#0F172A] 
    tertiary: '#0a0a0a', // Gris oscuro anterior
    surface: '#1F2937',
    border: '#374151',
  },

  // Estados
  success: {
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
  },

  error: {
    400: '#f87171',
    500: '#ef4444', 
    600: '#dc2626',
  },

  warning: {
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
  },

  // WhatsApp brand
  whatsapp: {
    400: '#25D366',
    500: '#128C7E',
    600: '#075E54',
  }
};

export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px  
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  '5xl': '8rem',    // 128px
};

export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  '3xl': '2rem',    // 32px
  full: '9999px',
};

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
};

export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  glow: {
    blue: '0 0 20px rgba(59, 130, 246, 0.4)',
    cyan: '0 0 20px rgba(34, 211, 238, 0.4)',
    emerald: '0 0 20px rgba(16, 185, 129, 0.4)',
  }
};

export const zIndex = {
  dropdown: 10,
  sticky: 20,
  modal: 30,
  overlay: 40,
  max: 50,
};

// Utilidades para generar clases CSS
export const getCSSVariable = (path) => {
  return `var(--${path.replace(/\./g, '-')})`;
};

export const generateCSSVars = () => {
  const vars = {};
  
  // Generar variables para colores
  Object.entries(colors).forEach(([colorName, colorValues]) => {
    if (typeof colorValues === 'object') {
      Object.entries(colorValues).forEach(([shade, value]) => {
        vars[`--color-${colorName}-${shade}`] = value;
      });
    } else {
      vars[`--color-${colorName}`] = colorValues;
    }
  });
  
  // Generar variables para spacing
  Object.entries(spacing).forEach(([size, value]) => {
    vars[`--spacing-${size}`] = value;
  });
  
  return vars;
};