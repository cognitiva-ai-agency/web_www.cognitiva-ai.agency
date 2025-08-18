import {
  Bot, Zap, Database, Target, Globe, BarChart3, Award, Shield, Star,
  Phone, Clock, TrendingUp, PieChart, DollarSign, Lock, Cloud, Cpu,
  ShoppingCart, Rocket
} from "lucide-react";

/* ----------------------------- Marca & navegación ---------------------------- */
export const BRAND = Object.freeze({
  name: "Cognitiva",
  phone: "+56 9 3241 7147",
  email: "hola@cognitiva.ai",
  city: "Santiago, Chile",
  whatsappLink: "https://wa.me/56932417147?text=Hola%20Cognitiva,%20quiero%20saber%20m%C3%A1s",
  calendarLink: "https://cal.com/www.cognitiva-ai.agency",
});

export const NAV_LINKS = Object.freeze([
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Casos", href: "#casos" },
  { label: "FAQ", href: "#faq" },
]);

export const TRUST_BADGES = Object.freeze([
  { icon: Award, label: "Partner Oficial" },
  { icon: Shield, label: "ISO 27001" },
  { icon: Star, label: "4.9/5 Reviews" },
  { icon: TrendingUp, label: "+6 Años de Experiencia" },
]);

/* --------------------------------- Servicios -------------------------------- */
export const SERVICES = Object.freeze([
  {
    icon: Bot,
    title: "Agentes de IA & Chatbots",
    bullets: [
      "Atiende y vende 24/7 en WhatsApp, Instagram y Web",
      "IA conversacional que persuade como un agente humano",
      "Soporte técnico y ventas en múltiples idiomas",
      "Respuestas instantáneas para reducir tiempos de espera",
      "Escalable para miles de conversaciones simultáneas",
    ],
    cta: "🚀 Activar mi agente inteligente",
  },
  {
    icon: Zap,
    title: "Automatizaciones Inteligentes",
    bullets: [
      "Captura y calificación automática de prospectos",
      "Workflows de ventas y marketing listos para usar",
      "Alertas y seguimientos en tiempo real",
      "Ahorra horas de trabajo con procesos automáticos",
      "Integración fluida con tus herramientas actuales",
    ],
    cta: "⚡ Empezar a automatizar",
  },
  {
    icon: Database,
    title: "Integraciones Empresariales",
    bullets: [
      "Conecta CRMs como HubSpot, Salesforce y Pipedrive",
      "Integración con ERPs y sistemas core de negocio",
      "APIs personalizadas y webhooks a medida",
      "Sincronización de datos sin errores ni duplicados",
      "Escalabilidad garantizada para el crecimiento",
    ],
    cta: "🔗 Conectar mi ecosistema",
  },
  {
    icon: Target,
    title: "Marketing Digital & Embudos",
    bullets: [
      "SEO/SEM optimizados con Inteligencia Artificial",
      "Campañas de retargeting para cerrar más ventas",
      "Embudos de conversión diseñados para ROI máximo",
      "Análisis continuo para optimizar resultados",
      "Creatividades y mensajes personalizados por audiencia",
    ],
    cta: "🎯 Optimizar mi marketing",
  },
  {
    icon: Globe,
    title: "Desarrollo Web SEO-First",
    bullets: [
      "Core Web Vitals en verde desde el día uno",
      "Arquitectura segura y fácilmente escalable",
      "Optimización móvil y Progressive Web App (PWA)",
      "Diseño UX/UI enfocado en conversión",
      "Carga ultrarrápida para mejorar posicionamiento",
    ],
    cta: "🌐 Crear mi web optimizada",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    bullets: [
      "Dashboards con métricas en tiempo real",
      "Predicción de ventas con Machine Learning",
      "KPIs automatizados y fáciles de interpretar",
      "Alertas inteligentes para decisiones rápidas",
      "Análisis de tendencias y oportunidades de negocio",
    ],
    cta: "📊 Ver mi panel de datos",
  },
]);

/* ---------------------------------- Proceso --------------------------------- */
export const PROCESS_STEPS = Object.freeze([
  {
    icon: Phone,
    title: "Descubrimiento",
    time: "Día 1",
    desc: "Llamada de 25–30 min para alinear objetivos, KPIs y oportunidades rápidas.",
  },
  {
    icon: PieChart,
    title: "Diagnóstico",
    time: "Día 2-3",
    desc: "Mapa de procesos, detección de gaps y priorización de quick wins de alto impacto.",
  },
  {
    icon: Target,
    title: "Propuesta",
    time: "Día 4-5",
    desc: "Plan de trabajo claro con entregables, plazos y ROI proyectado por iniciativa.",
  },
  {
    icon: Rocket,
    title: "Implementación",
    time: "Semana 1-2",
    desc: "Despliegue ágil, integraciones y pruebas end-to-end listas para producción.",
  },
  {
    icon: TrendingUp,
    title: "Optimización",
    time: "Continuo",
    desc: "Mejora continua basada en datos: A/B testing, nuevas automatizaciones y reporting.",
  },
]);

/* --------------------------------- Casos de uso ------------------------------ */
export const CASE_STUDIES = Object.freeze([
  {
    tag: "E-commerce",
    company: "TiendaOnline Pro",
    problem:
      "67% de carritos abandonados que representaban miles de dólares en pérdidas mensuales.",
    solution:
      "Implementamos un Chatbot con IA que detecta abandono en tiempo real y envía ofertas personalizadas vía WhatsApp.",
    results:
      "+45% en conversión y +$6.000.000 en ventas mensuales recuperadas en solo 8 semanas.",
    stack: "WhatsApp API + Shopify + IA",
    testimonial:
      "En 2 meses duplicamos las ventas online sin aumentar el presupuesto en publicidad.",
  },
  {
    tag: "Educación",
    company: "Universidad Digital",
    problem:
      "Más de 500 consultas diarias saturaban al equipo de admisiones y retrasaban las respuestas a estudiantes potenciales.",
    solution:
      "Desarrollamos un Agente IA 24/7 que responde, orienta y agenda entrevistas automáticamente.",
    results:
      "90% de consultas resueltas en el momento y 70% más inscripciones confirmadas.",
    stack: "Webchat + CRM + Base IA",
    testimonial:
      "Ahora el equipo se enfoca en lo importante: cerrar matrículas y mejorar la experiencia del estudiante.",
  },
  {
    tag: "Salud",
    company: "Clínica Moderna",
    problem:
      "Pérdida de citas y alta tasa de pacientes que no se presentaban a sus consultas.",
    solution:
      "Sistema de agendamiento y recordatorios automáticos por WhatsApp y SMS.",
    results:
      "-35% en ausencias y +50% en satisfacción de pacientes en solo 3 meses.",
    stack: "WhatsApp + Calendar + SMS",
    testimonial:
      "La mejor inversión tecnológica que hemos hecho: más pacientes atendidos y menos tiempos muertos.",
  },
]);

/* --------------------------------- Industrias ------------------------------- */
export const INDUSTRIES = Object.freeze([
  {
    icon: ShoppingCart,
    title: "Retail/E-commerce",
    pain: "Baja conversión",
    solution: "Recuperación + recomendación",
    kpi: "+40% conversión",
  },
  {
    icon: Award,
    title: "Educación",
    pain: "Admisiones saturadas",
    solution: "Agentes IA de orientación",
    kpi: "80% menos tiempo respuesta",
  },
  {
    icon: DollarSign,
    title: "Finanzas",
    pain: "Calificación lenta",
    solution: "Scoring en tiempo real",
    kpi: "3x aprobaciones",
  },
  {
    icon: Globe,
    title: "Turismo",
    pain: "Atención 24/7 multiidioma",
    solution: "Bots políglotas con reservas",
    kpi: "+60% satisfacción",
  },
  {
    icon: Shield,
    title: "Salud",
    pain: "No-shows y fricción",
    solution: "Citas y recordatorios IA",
    kpi: "-40% no-shows",
  },
  {
    icon: Cloud,
    title: "SaaS/Tech",
    pain: "Onboarding complejo",
    solution: "Agentes técnicos IA",
    kpi: "+50% retención",
  },
]);

/* ------------------------------- Integraciones ------------------------------ */
export const INTEGRATIONS = Object.freeze([
  { name: "AWS", img: "AWS.png" },
  { name: "Google", img: "Google.png" },
  { name: "Google G", img: "Google G.png" },
  { name: "HTML", img: "HTML.png" },
  { name: "HubSpot", img: "HubSpot.png" },
  { name: "Instagram", img: "Instagram.png" },
  { name: "Mailchimp", img: "Mailchimp.png" },
  { name: "Make", img: "Make.png" },
  { name: "Mercado Libre", img: "mercadolibre.png" },
  { name: "Meta", img: "Meta.png" },
  { name: "Microsoft", img: "Microsoft.png" },
  { name: "n8n", img: "n8n.png" },
  { name: "Node Js", img: "Node Js.png" },
  { name: "Paypal", img: "Paypal.png" },
  { name: "Pipedrive", img: "Pipedrive.png" },
  { name: "Salesforce", img: "Salesforce.png" },
  { name: "Shopify", img: "Shopify.png" },
  { name: "Shopify 2", img: "Shopify 2.png" },
  { name: "Siteground", img: "Siteground.png" },
  { name: "Slack", img: "Slack.png" },
  { name: "Stripe", img: "stripe.png" },
  { name: "TikTok", img: "TikTok.png" },
  { name: "WhatsApp", img: "WhatsApp.png" },
  { name: "WordPress", img: "WordPress.png" },
  { name: "Zapier", img: "Zapier.png" },
]);

/* --------------------------------- Métricas ROI ----------------------------- */
export const ROI_METRICS = Object.freeze([
  { icon: TrendingUp, metric: 47, suffix: "%", label: "Aumento conversión" },
  { icon: DollarSign, metric: 68, suffix: "%", label: "Costos - reducción" },
  { icon: Clock, metric: 24, suffix: "/7", label: "Atención continua" },
  { icon: PieChart, metric: 3.5, suffix: "x", label: "ROI promedio" },
  { icon: Zap, metric: 2, suffix: "min", label: "Tiempo respuesta" },
  { icon: Star, metric: 87, suffix: "%", label: "Satisfacción" },
]);

/* ----------------------------------- Precios -------------------------------- */
// Helpers para evitar repetición
const FEE_NOTE = "* El fee depende del tamaño y necesidades del negocio";
const BASE_HIGHLIGHTS = ["Fee de implementación único", "Comisión por venta generada"];

export const PRICING = Object.freeze([
  {
    name: "Starter",
    priceLabel: "$499/mes",
    subtitle: "Para empresas en crecimiento",
    features: [
      "1 Chatbot IA",
      "5.000 conversaciones/mes",
      "WhatsApp + Webchat",
      "Integración CRM básica",
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Comenzar Ahora",
    // Mantenemos compatibilidad con componentes que lean estas props:
    highlights: BASE_HIGHLIGHTS,
    note: FEE_NOTE,
  },
  {
    name: "Growth",
    priceLabel: "$999/mes",
    subtitle: "Para escalar rápidamente",
    features: [
      "3 Bots/Agentes",
      "20.000 conversaciones/mes",
      "Omnicanal completo",
      "Integraciones ilimitadas",
      "Analytics avanzado",
      "Soporte 24/7",
    ],
    highlighted: true,
    cta: "Comenzar Ahora",
    highlights: BASE_HIGHLIGHTS,
    note: FEE_NOTE,
  },
  {
    name: "Enterprise",
    priceLabel: "Custom",
    subtitle: "Soluciones a medida",
    features: [
      "Ilimitado en bots y volumen",
      "Desarrollo a medida",
      "SLA garantizado",
      "Account Manager",
      "Training y certificación",
    ],
    highlighted: false,
    cta: "Contactar Ventas",
    highlights: BASE_HIGHLIGHTS,
    note: FEE_NOTE,
  },
]);

/* ----------------------------------- Seguridad ------------------------------ */
export const SECURITY = Object.freeze([
  { icon: Lock, title: "Cifrado AES-256", desc: "End-to-end en todos los canales" },
  { icon: Shield, title: "ISO 27001", desc: "Certificación internacional" },
  { icon: Cloud, title: "Multi-cloud", desc: "AWS, Google Cloud, Azure" },
  { icon: Cpu, title: "GDPR", desc: "Cumplimiento de normativa europea" },
]);

/* -------------------------------------- FAQ --------------------------------- */
export const FAQS = Object.freeze([
  { q: "¿Tiempo de implementación?", a: "Básico: 5-7 días. Complejo con múltiples integraciones: 2-3 semanas." },
  { q: "¿Compatibilidad con mi stack?", a: "Sí. Conectamos vía APIs, webhooks y conectores con la mayoría de CRMs/ERPs." },
  { q: "¿Qué pasa con mis datos?", a: "Son 100% tuyos. Cumplimos GDPR/ISO y usamos cifrado de grado bancario." },
  { q: "¿Necesito conocimientos técnicos?", a: "No. Entregamos setup, capacitación y soporte continuo." },
  { q: "¿ROI esperado?", a: "La mayoría ve ROI positivo el primer mes. Promedio 3.5x en 6 meses." },
  { q: "¿Puedo cancelar?", a: "Sí, mes a mes sin penalizaciones." },
]);
