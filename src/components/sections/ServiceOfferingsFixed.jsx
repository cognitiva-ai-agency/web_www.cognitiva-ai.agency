/**
 * ServiceOfferings - Versión simplificada y funcional
 * Corrige todos los problemas: centrado, métricas, FAQ y animaciones
 */

"use client";
import React, { useState, useEffect } from "react";
import { 
  MessageSquare, Zap, Plug, TrendingUp, Layout, BarChart3,
  CheckCircle, Bot, Target, Puzzle, ArrowRight, ChevronRight, Star
} from "lucide-react";
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { INTEGRATIONS } from '@/lib/utils/businessConstants';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SimpleNavigation from '@/components/ui/SimpleNavigation';
import SimpleSwipeCard from '@/components/ui/SimpleSwipeCard';

// Datos de servicios
const SERVICES_DATA = [
  {
    id: "agentes-ia",
    title: "Agentes de IA & Chatbots",
    subtitle: "que venden y atienden 24/7",
    oneLiner: "Conversaciones reales en WhatsApp, Web e Instagram, entrenadas con tus datos y conectadas a tu stack.",
    icon: MessageSquare,
    color: "from-blue-600 to-cyan-500",
    results: [
      "Más respuestas al instante y menos abandono",
      "Calificación automática de leads y derivación al equipo correcto",
      "Agendamientos y pagos sin fricción desde el chat"
    ],
    features: [
      "Flujos de venta y soporte listos para adaptar a tu negocio",
      "Entrenamiento con FAQs, políticas, catálogo y documentos",
      "Handover a humano con contexto completo",
      "Escalabilidad para miles de conversaciones simultáneas",
      "Panel con métricas en tiempo real (CSAT, tasa de resolución, conversión)"
    ],
    integrations: ["WhatsApp", "Instagram", "HubSpot", "Salesforce", "Shopify"],
    testimonial: "Pasamos de tardar horas a responder a hacerlo en segundos. El equipo ahora se enfoca en cerrar ventas.",
    faqs: [
      { q: "¿Puede hablar varios idiomas?", a: "Sí, soporte multiidioma con detección automática." },
      { q: "¿Se adapta a mi tono de marca?", a: "Sí, definimos tono y reglas de respuesta." }
    ],
    metrics: { roi: "300%", time_saved: "15h/semana", response_time: "<30seg" }
  },
  {
    id: "automatizaciones",
    title: "Automatizaciones Inteligentes",
    subtitle: "que ahorran horas y aumentan conversión",
    oneLiner: "Orquesta tareas repetitivas con reglas, IA y triggers en tiempo real.",
    icon: Zap,
    color: "from-purple-600 to-pink-500",
    results: [
      "Tiempo de respuesta menor y SLA consistentes",
      "Seguimientos automáticos que recuperan oportunidades",
      "Menos errores manuales y datos siempre sincronizados"
    ],
    features: [
      "Lead scoring y enrutamiento por prioridad",
      "Secuencias de nurturing multicanal",
      "Alertas a Slack/Email/CRM con contexto",
      "Tickets automáticos con clasificación por intención",
      "Librería de playbooks (onboarding, win-back, cross-sell)"
    ],
    integrations: ["HubSpot", "Salesforce", "Slack", "Gmail", "Make"],
    testimonial: "Automatizamos recordatorios y recuperamos deals que dábamos por perdidos.",
    faqs: [
      { q: "¿Necesito equipo técnico?", a: "No necesariamente; partimos con plantillas y luego personalizamos." },
      { q: "¿Puedo pausar un flujo?", a: "Sí, todo es editable y con versionado." }
    ],
    metrics: { roi: "250%", time_saved: "20h/semana", conversion_boost: "+35%" }
  },
  {
    id: "integraciones",
    title: "Integraciones Empresariales",
    subtitle: "que conectan tu negocio de punta a punta",
    oneLiner: "Unimos CRM, ERP, ecommerce y mensajería para que todo fluya sin silos.",
    icon: Plug,
    color: "from-green-600 to-emerald-500",
    results: [
      "Datos unificados y trazabilidad end-to-end",
      "Menos tareas manuales; más tiempo para vender",
      "Reportes confiables para decidir con certeza"
    ],
    features: [
      "Conectores listos (CRM, ecommerce, pasarelas de pago)",
      "APIs y webhooks a medida cuando hace falta",
      "Reglas de sincronización y deduplicación",
      "Monitoreo y alertas de integridad de datos",
      "Documentación y handover técnico"
    ],
    integrations: ["HubSpot", "Salesforce", "Shopify", "Stripe", "Zapier"],
    testimonial: "La información por fin está en un solo lugar; fin de los Excel paralelos.",
    faqs: [
      { q: "¿Qué pasa si no hay conector?", a: "Creamos uno a medida vía API." },
      { q: "¿Interrumpe mis operaciones?", a: "No: migración por etapas y ventanas controladas." }
    ],
    metrics: { roi: "400%", data_accuracy: "99.8%", sync_time: "<5min" }
  },
  {
    id: "marketing",
    title: "Marketing Digital & Embudos",
    subtitle: "basado en datos que convierte en cada etapa",
    oneLiner: "SEO/SEM, retargeting y mensajes personalizados activados por IA.",
    icon: Target,
    color: "from-orange-600 to-red-500",
    results: [
      "Mejor CAC y mayor ROAS en campañas",
      "Más leads calificados listos para ventas",
      "Aumento de LTV por personalización"
    ],
    features: [
      "Investigación de keywords y estructura SEO",
      "Campañas SEM y paid social con experimentación continua",
      "Landing pages de alta conversión (A/B testing)",
      "Retargeting por comportamiento y señales de intención",
      "Mensajería dinámica por segmento/industria"
    ],
    integrations: ["Google Ads", "Meta", "LinkedIn", "HubSpot", "Mailchimp"],
    testimonial: "Las campañas ahora conversan con el CRM; invertimos donde realmente convierte.",
    faqs: [
      { q: "¿Pueden usar mis audiencias actuales?", a: "Sí, importamos y enriquecemos audiencias." },
      { q: "¿Se mide de extremo a extremo?", a: "Sí, conectamos campañas, CRM y ventas." }
    ],
    metrics: { roi: "350%", cac_reduction: "-40%", roas: "4.2x" }
  },
  {
    id: "web-seo",
    title: "Desarrollo Web SEO-First",
    subtitle: "rápidos, seguros y listos para escalar",
    oneLiner: "Arquitectura enfocada en SEO, rendimiento y conversión desde el día uno.",
    icon: Layout,
    color: "from-indigo-600 to-blue-500",
    results: [
      "Velocidad y experiencia superiores (mejor posicionamiento)",
      "Más conversión en landing pages y formularios",
      "Base estable para crecer sin fricción"
    ],
    features: [
      "Arquitectura limpia y componentes reutilizables",
      "Core vitals, sitemap y marcado estructurado",
      "Formularios con validación y antispam",
      "CMS/Headless opcional para escalar contenidos",
      "Integración analítica y pixeles publicitarios"
    ],
    integrations: ["WordPress", "Shopify", "Google", "HubSpot", "Stripe"],
    testimonial: "El nuevo sitio carga rápido y genera leads desde el primer día.",
    faqs: [
      { q: "¿Migran mi contenido?", a: "Sí, con redirecciones y preservando SEO." },
      { q: "¿Puedo autogestionar?", a: "Sí, dejamos todo documentado o con CMS." }
    ],
    metrics: { page_speed: "95/100", seo_boost: "+65%", conversion_rate: "+28%" }
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    subtitle: "Decisiones con datos en tiempo real",
    oneLiner: "Dashboards, atribución y métricas claves conectadas a tus sistemas.",
    icon: BarChart3,
    color: "from-teal-600 to-cyan-500",
    results: [
      "Visibilidad total del funnel de punta a punta",
      "Identificación de cuellos de botella y oportunidades",
      "Forecast de ventas y planeación más precisa"
    ],
    features: [
      "Conexión a fuentes (CRM, Ads, ecommerce, soporte)",
      "KPIs accionables por equipo/rol",
      "Modelos de atribución y cohortes",
      "Alertas y reportes automáticos por canal",
      "Capacitación para equipos"
    ],
    integrations: ["Google", "HubSpot", "Salesforce", "Shopify", "Slack"],
    testimonial: "Pasamos de reportes manuales a decisiones en tiempo real.",
    faqs: [
      { q: "¿Pueden crear métricas personalizadas?", a: "Sí, definimos KPIs por área." },
      { q: "¿Cómo se asegura la calidad de datos?", a: "Reglas de validación y monitoreo continuo." }
    ],
    metrics: { data_accuracy: "99.9%", report_speed: "<2seg", insights_generated: "50+/mes" }
  }
];

export default function ServiceOfferingsFixed() {
  const { ref } = useScrollBasedAnimation();
  const [activeService, setActiveService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivo móvil
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtrar integraciones disponibles
  const getServiceIntegrations = (serviceIntegrations) => {
    return INTEGRATIONS.filter(integration => 
      serviceIntegrations.some(name => 
        integration.name.toLowerCase().includes(name.toLowerCase()) ||
        name.toLowerCase().includes(integration.name.toLowerCase())
      )
    ).slice(0, 6);
  };

  // Renderizar tarjeta de servicio
  const renderServiceCard = (service, index) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Contenido principal */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header con gradiente */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 blur-xl rounded-2xl`} />
          <div className="relative">
            {/* Icono en la parte superior */}
            <div className="flex justify-start mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
            </div>
            
            {/* Contenido del header */}
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3">
                {service.title}
              </h3>
              <p className="text-cyan-300 text-sm sm:text-base lg:text-lg font-light">
                {service.subtitle}
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-blue-200/80 leading-relaxed mb-6">
              {service.oneLiner}
            </p>
          </div>
        </div>

        {/* MÉTRICAS CLAVE - VERSIÓN QUE SÍ FUNCIONA */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.entries(service.metrics).map(([key, value]) => (
            <div 
              key={key} 
              className="text-center p-4 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div 
                className="text-xl font-bold mb-2"
                style={{ color: '#22d3ee' }}
              >
                {value}
              </div>
              <div 
                className="text-xs font-medium"
                style={{ color: 'rgba(255,255,255,0.8)' }}
              >
                {key.replace(/_/g, ' ').toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs - Solo desktop */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DemoButton 
              variant="default"
              size="medium"
              text="Ver Demo de 30 min"
              subtitle="Caso de tu industria"
              showSubtitle={true}
            />
            <WhatsAppButton 
              variant="default"
              size="medium"
              text="Hablar por WhatsApp"
              subtitle="Respuesta en <2 min"
              showSubtitle={true}
            />
          </div>
        )}

        {/* Resultados */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            Resultados que verás
          </h4>
          <ul className="space-y-3">
            {service.results.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-blue-200/80">{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-medium text-white mb-4">
            <Puzzle className="h-5 w-5 text-cyan-400" />
            Qué incluye
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0 mt-2" />
                <span className="text-sm sm:text-base text-blue-200/80">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Integraciones con logos más grandes */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10">
          <h4 className="text-lg font-medium text-white mb-4">Integraciones</h4>
          <div className="grid grid-cols-3 gap-3">
            {getServiceIntegrations(service.integrations).map((integration, idx) => (
              <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <img 
                  src={`/logos herramientas/${integration.img}`} 
                  alt={integration.name}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20">
          <blockquote className="text-sm sm:text-base text-blue-100/90 italic mb-3">
            "{service.testimonial}"
          </blockquote>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* FAQ QUE SÍ FUNCIONA */}
        <div className="space-y-3">
          <h4 className="text-lg font-medium text-white mb-4">FAQ</h4>
          {service.faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="servicios"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]"
      ref={ref}
    >
      {/* Efectos de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 blur-[128px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/15 blur-[128px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header de sección */}
        <header className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-blue-400/30">
                <Bot className="h-4 w-4 text-cyan-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-cyan-300">
                  Suite Integral de Automatización IA
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin tracking-tight mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x">
              Servicios que transforman
            </span>
            <br />
            <span className="text-white/90 font-light">tu negocio</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-blue-200/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Tecnología de vanguardia adaptada a tu empresa con el poder de la Inteligencia Artificial
          </p>
        </header>

        {/* Navegación simple */}
        <div className="mb-8 lg:mb-12">
          <SimpleNavigation
            items={SERVICES_DATA}
            activeIndex={activeService}
            onItemSelect={setActiveService}
            className="mb-6"
          />
        </div>

        {/* Sistema de tarjetas simple */}
        <div className="max-w-6xl mx-auto">
          <SimpleSwipeCard
            items={SERVICES_DATA}
            activeIndex={activeService}
            onIndexChange={setActiveService}
            renderCard={renderServiceCard}
            enableSwipe={isMobile}
            className="mb-8"
          />
        </div>

        {/* CTAs móviles */}
        {isMobile && (
          <div className="grid grid-cols-1 gap-4 max-w-sm mx-auto">
            <DemoButton 
              variant="default"
              size="large"
              text="Ver Demo"
              subtitle="Caso de tu industria"
              showSubtitle={true}
            />
            <WhatsAppButton 
              variant="default"
              size="large"
              text="Consulta Gratuita"
              subtitle="Respuesta inmediata"
              showSubtitle={true}
            />
          </div>
        )}

        {/* Enlaces de ayuda */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/10">
            <span className="text-sm sm:text-base md:text-lg text-blue-200/80">¿Necesitas más información?</span>
            <div className="flex items-center gap-4">
              <a href="#casos" className="text-sm sm:text-base text-cyan-300 hover:text-white transition-colors">
                Ver Casos <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
              <a href="#faq" className="text-sm sm:text-base text-cyan-300 hover:text-white transition-colors">
                FAQ Completa <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

// Componente FAQ que realmente funciona
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-3 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 text-sm font-medium text-cyan-300 hover:text-white transition-colors duration-300"
      >
        <span>{question}</span>
        <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="mt-2 pl-4 border-l-2 border-cyan-400/20">
          <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}