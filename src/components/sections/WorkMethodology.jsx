"use client";
import React, { useState, useEffect } from "react";
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import CleanSwipeCard from '@/components/ui/CleanSwipeCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { 
  ArrowRight, CheckCircle, Search, Compass, FileCheck, 
  Rocket, TrendingUp, Timer, MessageCircle, Shield, ShieldCheck,
  Clock, Calendar, Users, Zap, Target, 
  BarChart3, Star, DollarSign, Gauge, Activity
} from "lucide-react";
import { typographyPresets, textColors } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Datos de metodología adaptados al sistema de servicios
const METHODOLOGY_DATA = [
  {
    id: "descubrimiento",
    title: "Descubrimiento",
    subtitle: "detectamos oportunidades inmediatas",
    oneLiner: "Reunión estratégica de 25-30 min para alinear objetivos, mapear procesos y detectar quick wins con alto impacto.",
    icon: Search,
    color: "from-blue-600 to-cyan-500",
    time: "25–30 min",
    results: [
      "Objetivos claros y KPIs definidos desde el inicio",
      "Mapa completo del customer journey actual",
      "Quick wins identificados para impacto inmediato"
    ],
    features: [
      "Reunión con equipos clave (marketing, ventas, operaciones)",
      "Revisión de funnel actual y herramientas en uso",
      "Análisis de puntos de dolor y oportunidades",
      "Priorización inicial basada en impacto/esfuerzo",
      "Definición de métricas de éxito específicas"
    ],
    deliverable: "Resumen ejecutivo de objetivos y KPIs; mapa inicial del customer journey.",
    whatWeNeed: "1 responsable por área; acceso de lectura a materiales clave.",
    testimonial: "En 30 minutos identificaron 3 oportunidades que no habíamos considerado.",
    faqs: [
      { q: "¿Qué necesitamos preparar?", a: "Solo acceso a un responsable por área y documentos básicos del proceso." },
      { q: "¿Es realmente gratuito?", a: "Sí, es parte de nuestro proceso de diagnóstico sin compromiso." }
    ],
    metrics: { baseline_time: "Línea base", response_rate: "Tasa respuesta", abandonment: "% abandono" }
  },
  {
    id: "diagnostico",
    title: "Diagnóstico",
    subtitle: "auditamos y diseñamos el plan maestro",
    oneLiner: "Análisis profundo de datos, flujos y herramientas en 48h para diseñar la hoja de ruta perfecta.",
    icon: Compass,
    color: "from-purple-600 to-pink-500",
    time: "48 h",
    results: [
      "Diagnóstico completo de brechas y oportunidades",
      "Backlog priorizado por valor e impacto",
      "Matriz de integraciones técnicas necesarias"
    ],
    features: [
      "Auditoría completa de CRM, mensajería y FAQs",
      "Análisis de intenciones y comportamiento de usuarios",
      "Mapeo de integraciones existentes vs requeridas",
      "Identificación de puntos de fricción críticos",
      "Estimación de potencial de automatización"
    ],
    deliverable: "Informe detallado de brechas y riesgos; backlog priorizado por valor/esfuerzo.",
    whatWeNeed: "Accesos temporales; ejemplos de conversaciones; validación de prioridades.",
    testimonial: "El diagnóstico reveló problemas que llevábamos arrastrando años sin detectar.",
    faqs: [
      { q: "¿Qué accesos necesitan?", a: "Solo lectura temporal para CRM y ejemplos de conversaciones típicas." },
      { q: "¿Cuánto dura el acceso?", a: "48 horas máximo, con posibilidad de revocar en cualquier momento." }
    ],
    metrics: { time_reduction: "Reducción tiempo", cost_savings: "Ahorro costos", automation_potential: "Potencial IA" }
  },
  {
    id: "propuesta",
    title: "Propuesta",
    subtitle: "plan detallado con ROI garantizado",
    oneLiner: "Presentación ejecutiva con alcance, cronograma y ROI proyectado basado en datos reales.",
    icon: FileCheck,
    color: "from-green-600 to-emerald-500",
    time: "Días 4–5",
    results: [
      "Plan detallado por sprints con cronograma realista",
      "ROI y tiempo a valor (TTV) proyectados",
      "Criterios de aceptación y métricas de éxito"
    ],
    features: [
      "Diseño completo de flujos conversacionales",
      "Arquitectura técnica de integraciones y datos",
      "Cronograma detallado por fases y entregables",
      "Estimación precisa de impacto y ROI",
      "Plan de capacitación y change management"
    ],
    deliverable: "Plan por sprints con cronograma; criterios de aceptación; estimación de ROI y TTV.",
    whatWeNeed: "Validación de casos de uso y tono de marca; aprobación de hitos.",
    testimonial: "La propuesta fue tan detallada que pudimos presentarla directamente al board.",
    faqs: [
      { q: "¿Qué incluye el ROI?", a: "Ahorro en tiempo, aumento de conversión y reducción de costos operativos." },
      { q: "¿Y si no se cumple el ROI?", a: "Tenemos garantías de cumplimiento y ajustes sin costo adicional." }
    ],
    metrics: { projected_roi: "ROI proyectado", ttv: "Tiempo a valor", success_criteria: "Criterios éxito" }
  },
  {
    id: "implementacion",
    title: "Implementación",
    subtitle: "de cero a producción en 1-2 semanas",
    oneLiner: "Desarrollo, integración y puesta en marcha completa con pruebas end-to-end y métricas en tiempo real.",
    icon: Rocket,
    color: "from-orange-600 to-red-500",
    time: "Semana 1–2",
    results: [
      "Sistema funcionando 100% integrado y operativo",
      "Métricas en tiempo real (CSAT, resolución, conversión)",
      "Equipo capacitado y documentación completa"
    ],
    features: [
      "Entrenamiento de IA con datos específicos del negocio",
      "Conexión completa a WhatsApp, web, Instagram y CRM",
      "Integración con ERP, ecommerce y sistemas críticos",
      "Pruebas exhaustivas end-to-end en ambiente controlado",
      "Tablero de métricas y alertas automáticas"
    ],
    deliverable: "Flujos activos; credenciales y documentación; tablero de métricas completo.",
    whatWeNeed: "Ventanas de prueba y aprobaciones ágiles; punto de contacto técnico/negocio.",
    testimonial: "En una semana teníamos funcionando lo que creíamos tomaría meses implementar.",
    faqs: [
      { q: "¿Afecta nuestras operaciones?", a: "No, implementamos en paralelo con migración controlada." },
      { q: "¿Qué pasa si hay problemas?", a: "Soporte 24/7 durante implementación y garantía de funcionamiento." }
    ],
    metrics: { response_time: "<1 segundo", automation_rate: "% automatización", integration_success: "Integraciones" }
  },
  {
    id: "optimizacion",
    title: "Optimización continua",
    subtitle: "mejora constante basada en datos reales",
    oneLiner: "A/B testing, nuevas automatizaciones y reporting continuo para maximizar el ROI a largo plazo.",
    icon: TrendingUp,
    color: "from-indigo-600 to-blue-500",
    time: "Continuo",
    results: [
      "Incremento constante de conversión y CSAT",
      "Nuevas automatizaciones basadas en patrones",
      "Roadmap trimestral con mejoras prioritarias"
    ],
    features: [
      "A/B testing continuo de mensajes y flujos",
      "Desarrollo de nuevas automatizaciones inteligentes",
      "Reportes ejecutivos y sesiones de revisión mensual",
      "Análisis predictivo y recomendaciones proactivas",
      "Escalado y optimización de performance"
    ],
    deliverable: "Roadmap trimestral; informes de impacto detallados (ventas/soporte).",
    whatWeNeed: "Feedback continuo de equipos y definición de prioridades comerciales.",
    testimonial: "Cada mes vemos mejoras medibles. El ROI sigue creciendo trimestre a trimestre.",
    faqs: [
      { q: "¿Cuánto tiempo dura?", a: "Es un servicio continuo, cancelable mensualmente sin penalización." },
      { q: "¿Cómo miden el progreso?", a: "Con KPIs específicos y reportes ejecutivos mensuales." }
    ],
    metrics: { conversion_boost: "Incremento conversión", csat_improvement: "Mejora CSAT", first_contact_resolution: "Resolución 1er contacto" }
  }
];

// Métricas generales del proceso
const PROCESS_METRICS = [
  { icon: MessageCircle, value: "+85%", label: "resolución al primer contacto" },
  { icon: Timer, value: "<1s", label: "tiempo de respuesta promedio" },
  { icon: ShieldCheck, value: "99.9%", label: "disponibilidad" }
];

// Mapeo de métricas a iconos (reutilizado de servicios)
const getMetricIcon = (metricKey) => {
  const iconMap = {
    'baseline_time': Timer,
    'response_rate': MessageCircle,
    'abandonment': TrendingUp,
    'time_reduction': Clock,
    'cost_savings': DollarSign,
    'automation_potential': Rocket,
    'projected_roi': DollarSign,
    'ttv': Gauge,
    'success_criteria': Target,
    'response_time': Timer,
    'automation_rate': Activity,
    'integration_success': CheckCircle,
    'conversion_boost': TrendingUp,
    'csat_improvement': Star,
    'first_contact_resolution': MessageCircle
  };
  
  return iconMap[metricKey] || Activity;
};

export default function WorkMethodology() {
  const { ref } = useScrollBasedAnimation();
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [openFaqs, setOpenFaqs] = useState({});

  // Detectar dispositivo móvil
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Limpiar FAQs abiertas cuando cambia el paso activo
  useEffect(() => {
    setOpenFaqs({});
  }, [activeStep]);

  // Manejar FAQ toggle
  const toggleFaq = (stepIndex, faqIndex) => {
    const faqId = `${stepIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [faqId]: !prev[faqId]
    }));
  };

  // Renderizar tarjeta de metodología (adaptado del patrón de servicios)
  const renderMethodologyCard = (step, index) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Contenido principal */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header con gradiente personalizado */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-10 blur-xl rounded-2xl`} />
          <div className="relative">
            {/* Icono en la parte superior */}
            <div className="flex justify-start mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg`}>
                <step.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            {/* Contenido del header */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
                Paso {index + 1}: {step.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${step.color}/30 border border-white/20 text-white text-sm font-medium`}>
                  <Clock className="w-4 h-4" />
                  <span>{step.time}</span>
                </div>
                <p className="text-cyan-300 text-sm sm:text-base lg:text-lg font-light">
                  {step.subtitle}
                </p>
              </div>
            </div>
            <p className={`${typographyPresets.description} mb-6`}>
              {step.oneLiner}
            </p>
          </div>
        </div>

        {/* Métricas específicas del paso */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {Object.entries(step.metrics).map(([key, value]) => {
            const MetricIcon = getMetricIcon(key);
            return (
              <div 
                key={key} 
                className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-slate-800 border border-gray-700 hover:bg-gray-800/50 hover:border-gray-600 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MetricIcon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white mb-1">
                    {value}
                  </p>
                  <p className="text-xs text-blue-200/70 leading-tight">
                    {key.replace(/_/g, ' ')
                       .replace(/\b\w/g, l => l.toUpperCase())
                       .replace('Roi', 'ROI')
                       .replace('Ttv', 'TTV')
                       .replace('Csat', 'CSAT')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs específicos del paso - Solo visible en desktop */}
        {isClient && !isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DemoButton 
              variant="default"
              size="medium"
              text={`Empezar ${step.title}`}
              subtitle="Diagnóstico gratuito"
              showSubtitle={true}
            />
            <WhatsAppButton 
              variant="default"
              size="medium"
              text="Hablar por WhatsApp"
              subtitle="Respuesta inmediata"
              showSubtitle={true}
            />
          </div>
        )}

        {/* Resultados esperados */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            Resultados de esta etapa
          </h4>
          <ul className="space-y-3">
            {step.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className={typographyPresets.featureItem}>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Qué incluye */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <CheckCircle className="h-5 w-5 text-cyan-400" />
            Qué incluye este paso
          </h4>
          <ul className="space-y-3">
            {step.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                <span className={typographyPresets.featureItem}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar con información adicional */}
      <div className="space-y-6">
        {/* Entregables */}
        <div className={`p-4 sm:p-6 rounded-xl ${gradients.cardGlass} border border-white/10`}>
          <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-emerald-400" />
            Entregables
          </h4>
          <p className={typographyPresets.description}>
            {step.deliverable}
          </p>
          
          <div className="mt-4 p-3 bg-orange-600/10 border border-orange-400/20 rounded-lg">
            <h5 className="text-orange-400 text-sm font-medium mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Qué necesitamos de ti
            </h5>
            <p className="text-orange-100/80 text-sm">{step.whatWeNeed}</p>
          </div>
        </div>

        {/* Testimonio */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20">
          <blockquote className={`${typographyPresets.testimonial} mb-3`}>
            "{step.testimonial}"
          </blockquote>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* FAQ específicas del paso */}
        <div className="space-y-3 relative z-20">
          <h4 className="text-lg font-medium mb-4 text-white">
            Preguntas frecuentes
          </h4>
          {step.faqs.map((faq, faqIdx) => {
            const faqId = `${index}-${faqIdx}`;
            const isOpen = openFaqs[faqId];
            
            return (
              <div 
                key={faqIdx} 
                className="border-b border-white/10 pb-3 last:border-b-0 relative z-30"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFaq(index, faqIdx);
                  }}
                  className="w-full cursor-pointer text-sm font-medium hover:text-white transition-all duration-300 flex items-center gap-2 py-3 text-left touch-manipulation text-cyan-300"
                  style={{ 
                    minHeight: '44px',
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-90' : 'rotate-0'
                  }`} />
                  <span>{faq.q}</span>
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    paddingTop: isOpen ? '12px' : '0px',
                    marginTop: isOpen ? '12px' : '0px'
                  }}
                >
                  <div className="pl-6 pb-2">
                    <p className="text-xs sm:text-sm leading-relaxed border-l-2 border-cyan-400/30 pl-4 text-white/85">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <Section 
      id="proceso" 
      className="animate-in"
      ref={ref}
      aria-label="Cómo trabajamos"
    >
      {/* Header de sección reutilizando el patrón de servicios */}
      <SectionTitle
        subtitle="Metodología clara, entregables por etapa y tiempos definidos. Empezamos rápido, nos integramos con tus sistemas y medimos impacto desde el primer día."
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
          ¿Cómo trabajamos?
        </span>
        <br />
        <span className="text-white/90 font-light">Simple y efectivo</span>
      </SectionTitle>

      {/* Sistema de navegación reutilizado */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={METHODOLOGY_DATA}
          activeIndex={activeStep}
          onItemSelect={setActiveStep}
          variant="pills"
          size={isClient && isMobile ? "medium" : "large"}
          showIcons={true}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas reutilizado con contenido adaptado */}
      <div className="max-w-6xl mx-auto">
        <CleanSwipeCard
          items={METHODOLOGY_DATA}
          activeIndex={activeStep}
          onIndexChange={setActiveStep}
          renderCard={renderMethodologyCard}
          enableSwipe={isClient && isMobile}
          showIndicators={false}
          showArrows={false}
          className="mb-8"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
          transitionDuration={600}
        />
      </div>

      {/* CTAs móviles - Solo visibles en móvil */}
      {isClient && isMobile && (
        <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
          <DemoButton 
            variant="minimal"
            size="large"
            text="Empezar diagnóstico"
            showSubtitle={false}
          />
          <WhatsAppButton 
            variant="minimal"
            size="large"
            text="Hablar por WhatsApp"
            showSubtitle={false}
          />
        </div>
      )}

      {/* Métricas generales del proceso */}
      <div className="mt-12 lg:mt-16">
        <div className="text-center mb-8">
          <h3 className={`${typographyPresets.sectionTitle} mb-4`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
              Resultados comprobados
            </span>
          </h3>
          <p className={typographyPresets.description}>
            Métricas reales de nuestro proceso optimizado
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          {PROCESS_METRICS.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="group relative">
                <div className={`relative ${gradients.cardGlass} border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300`}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <div className={`${typographyPresets.description} text-sm`}>{metric.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonial integrado */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-6">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className={`${typographyPresets.testimonial} mb-2`}>
              "En 2 semanas teníamos un sistema que nos ahorra 15 horas semanales. El ROI se vio desde el primer mes."
            </blockquote>
            <div className="text-cyan-400 text-sm font-medium">— CEO, TechStart Solutions</div>
          </div>
        </div>
      </div>

      {/* CTA final coherente */}
      <div className="text-center mt-12">
        <div className={`inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 rounded-2xl ${gradients.cardGlass} border border-white/10`}>
          <span className={typographyPresets.description}>¿Listo para comenzar por el Paso 1?</span>
          <div className="flex items-center gap-4">
            <a href="#contacto" className={`${typographyPresets.link} hover:text-white transition-colors`}>
              Iniciar diagnóstico gratis <ArrowRight className="inline h-4 w-4 ml-1" />
            </a>
            <a href="#casos" className={`${typographyPresets.link} hover:text-white transition-colors`}>
              Ver casos similares <ArrowRight className="inline h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Documentación de cambios - SISTEMA COHERENTE REUTILIZADO:
// - Implementado sistema de tarjetas CleanSwipeCard reutilizado de servicios
// - Mantenida paleta de colores coherente con gradients y componentColors del design system
// - Reutilizada navegación TouchNavigation para consistencia
// - Adaptados iconos coherentes con el mapeo usado en servicios
// - Implementado patrón FAQ funcional móvil igual que servicios
// - Mantenida estructura Section/SectionTitle del sistema de diseño
// - Reutilizados componentes DemoButton y WhatsAppButton
// - Conservado el contenido específico del brief pero con sistema visual coherente
// - Eliminados fondos negros, usando bg-slate-800 y gradients consistentes