/**
 * ServiceOfferings - Sección de servicios mejorada
 * Implementa sistema de tarjetas deslizables con gestos táctiles
 * Diseño responsive con UX optimizada para móviles
 */

"use client";
import React, { useState, useEffect } from "react";
import { 
  MessageSquare, Zap, Plug, TrendingUp, Layout, BarChart3,
  CheckCircle, Bot, Target, Puzzle, ArrowRight, Calendar, MessageCircle, Star
} from "lucide-react";
import { Section, SectionTitle } from '@/components/ui/ReusableComponents';
import SwipeableCard from '@/components/ui/SwipeableCard';
import TouchNavigation from '@/components/ui/TouchNavigation';
import DemoButton from '@/components/ui/DemoButton';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { useScrollBasedAnimation } from '@/hooks/hookExports';
import { INTEGRATIONS } from '@/lib/utils/businessConstants';
import { typographyPresets, textColors } from '@/lib/design-system/typographySystem';
import { gradients, componentColors } from '@/lib/design-system/colorSystem';

// Datos de servicios optimizados para el nuevo sistema
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

export default function ServiceOfferings() {
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

  // Detectar hash de servicio en URL
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      const serviceMap = {
        '#servicios-agentes-ia': 0,
        '#servicios-automatizaciones': 1,
        '#servicios-integraciones': 2,
        '#servicios-marketing': 3,
        '#servicios-web-seo': 4,
        '#servicios-analytics': 5
      };
      
      if (serviceMap.hasOwnProperty(hash)) {
        setActiveService(serviceMap[hash]);
      } else if (hash === '#servicios') {
        setActiveService(0);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
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
        {/* Header con gradiente personalizado */}
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
            <p className={`${typographyPresets.description} mb-6`}>
              {service.oneLiner}
            </p>
          </div>
        </div>

        {/* Métricas clave */}
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(service.metrics).map(([key, value]) => (
            <div key={key} className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
              <div className="text-lg sm:text-xl font-light text-cyan-400">{value}</div>
              <div className="text-xs text-white/60 capitalize">{key.replace('_', ' ')}</div>
            </div>
          ))}
        </div>

        {/* CTAs - Solo visible en desktop */}
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
                <span className={typographyPresets.featureItem}>{result}</span>
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
                <span className={typographyPresets.featureItem}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Integraciones */}
        <div className={`p-4 sm:p-6 rounded-xl ${gradients.cardGlass} border border-white/10`}>
          <h4 className="text-lg font-medium text-white mb-4">Integraciones</h4>
          <div className="grid grid-cols-3 gap-3">
            {getServiceIntegrations(service.integrations).map((integration, idx) => (
              <div key={idx} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm">
                <img 
                  src={`/logos herramientas/${integration.img}`} 
                  alt={integration.name}
                  className="h-6 w-6 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonio */}
        <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-400/20">
          <blockquote className={`${typographyPresets.testimonial} mb-3`}>
            "{service.testimonial}"
          </blockquote>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">FAQ</h4>
          {service.faqs.map((faq, idx) => (
            <details key={idx} className="group">
              <summary className={`${typographyPresets.faqQuestion} cursor-pointer mb-2 group-open:text-white`}>
                {faq.q}
              </summary>
              <p className={`${typographyPresets.faqAnswer} pl-4 border-l-2 border-cyan-400/30`}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Section 
      id="servicios" 
      className="animate-in"
      ref={ref}
      aria-label="Servicios de automatización con IA"
    >
      {/* Header de sección */}
      <SectionTitle
        subtitle="Tecnología de vanguardia adaptada a tu empresa con el poder de la Inteligencia Artificial"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400">
          Servicios que transforman
        </span>
        <br />
        <span className="text-white/90 font-light">tu negocio</span>
      </SectionTitle>

      {/* Sistema de navegación mejorado */}
      <div className="mb-8 lg:mb-12">
        <TouchNavigation
          items={SERVICES_DATA}
          activeIndex={activeService}
          onItemSelect={setActiveService}
          variant="pills"
          size={isMobile ? "medium" : "large"}
          showIcons={true}
          centerActiveItem={true}
          className="mb-6"
        />
      </div>

      {/* Sistema de tarjetas deslizables */}
      <div className="max-w-6xl mx-auto">
        <SwipeableCard
          items={SERVICES_DATA}
          activeIndex={activeService}
          onIndexChange={setActiveService}
          renderCard={renderServiceCard}
          enableSwipe={isMobile}
          showIndicators={false}
          showArrows={false}
          className="mb-8"
          cardClassName="bg-gradient-to-br from-white/[0.03] to-white/[0.01]"
          cardPadding="p-6 lg:p-8"
        />
      </div>

      {/* CTAs móviles - Solo visibles en móvil */}
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
        <div className={`inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-6 py-4 rounded-2xl ${gradients.cardGlass} border border-white/10`}>
          <span className={typographyPresets.description}>¿Necesitas más información?</span>
          <div className="flex items-center gap-4">
            <a href="#casos" className={`${typographyPresets.link} hover:text-white transition-colors`}>
              Ver Casos <ArrowRight className="inline h-4 w-4 ml-1" />
            </a>
            <a href="#faq" className={`${typographyPresets.link} hover:text-white transition-colors`}>
              FAQ Completa <ArrowRight className="inline h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}