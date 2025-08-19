/**
 * Typography System - Sistema tipográfico centralizado
 * Define todos los estilos de texto reutilizables para mantener coherencia visual
 */

// Clases base para diferentes tipos de texto
export const typography = {
  // Títulos principales de secciones
  heading: {
    h1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-thin leading-tight tracking-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-tight",
    h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light",
    h4: "text-lg sm:text-xl font-medium",
    h5: "text-base sm:text-lg font-medium",
    h6: "text-sm sm:text-base font-medium"
  },

  // Texto de cuerpo
  body: {
    large: "text-base sm:text-lg md:text-xl font-light leading-relaxed",
    medium: "text-sm sm:text-base md:text-lg font-light leading-relaxed", 
    small: "text-sm sm:text-base font-light",
    tiny: "text-xs sm:text-sm font-light"
  },

  // Etiquetas y badges
  badge: {
    large: "text-sm font-light tracking-wide",
    medium: "text-xs sm:text-sm font-light tracking-wide",
    small: "text-xs font-light tracking-wide"
  },

  // Botones
  button: {
    large: "text-sm sm:text-base font-medium",
    medium: "text-sm font-medium",
    small: "text-xs sm:text-sm font-medium"
  },

  // Navegación
  nav: {
    desktop: "text-sm font-light",
    mobile: "text-base font-light",
    dropdown: "text-sm font-light"
  },

  // Lista y contenido
  list: {
    item: "text-sm sm:text-base",
    description: "text-xs sm:text-sm"
  }
};

// Colores de texto centralizados
export const textColors = {
  // Títulos principales
  heading: {
    primary: "text-white",
    gradient: "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400",
    accent: "text-cyan-300"
  },

  // Texto de cuerpo
  body: {
    primary: "text-white/90",
    secondary: "text-blue-200/80",
    muted: "text-blue-200/60",
    light: "text-white/70"
  },

  // Estados interactivos
  interactive: {
    default: "text-cyan-300",
    hover: "text-white",
    active: "text-cyan-400"
  },

  // Estados de contenido
  content: {
    success: "text-emerald-400",
    warning: "text-yellow-400",
    error: "text-red-400",
    info: "text-blue-400"
  }
};

// Utilidades para combinar clases
export const createTypographyClass = (type, size, color = '') => {
  const typeClass = typography[type]?.[size] || '';
  return `${typeClass} ${color}`.trim();
};

// Presets comunes más utilizados
export const typographyPresets = {
  // Títulos de sección
  sectionTitle: `${typography.heading.h2} ${textColors.heading.gradient}`,
  
  // Subtítulos
  subtitle: `${typography.body.large} ${textColors.body.secondary}`,
  
  // Títulos de servicios/features
  featureTitle: `${typography.heading.h3} ${textColors.heading.primary}`,
  
  // Texto descriptivo
  description: `${typography.body.medium} ${textColors.body.secondary}`,
  
  // Etiquetas de navegación
  navItem: `${typography.nav.desktop} ${textColors.body.light}`,
  
  // Botones primarios
  buttonPrimary: `${typography.button.large} text-white`,
  
  // Botones secundarios
  buttonSecondary: `${typography.button.large} ${textColors.interactive.default}`,
  
  // Enlaces
  link: `${typography.body.small} ${textColors.interactive.default} hover:${textColors.interactive.hover.replace('text-', '')}`,
  
  // FAQ y detalles
  faqQuestion: `${typography.body.small} ${textColors.interactive.default}`,
  faqAnswer: `${typography.list.description} ${textColors.body.secondary}`,
  
  // Badges y etiquetas
  badge: `${typography.badge.medium} ${textColors.interactive.default}`,
  
  // Lista de características
  featureItem: `${typography.list.item} ${textColors.body.secondary}`,
  
  // Testimoniales
  testimonial: `${typography.body.small} text-blue-100/90 italic`
};

// Animaciones de texto
export const textAnimations = {
  gradient: 'animate-gradient-x',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  pulse: 'animate-pulse'
};

// Responsive utilities para texto
export const responsiveText = {
  // Padding horizontal responsive para texto
  paddingX: {
    mobile: 'px-4 sm:px-0',
    section: 'px-2 sm:px-4 md:px-6 lg:px-8'
  },
  
  // Márgenes responsive
  margins: {
    titleBottom: 'mb-4 sm:mb-6',
    sectionBottom: 'mb-8 sm:mb-12 md:mb-16',
    itemBottom: 'mb-3 sm:mb-4'
  }
};