"use client";
import React, { useState, useEffect } from "react";
import { INDUSTRIES } from "../../lib/utils/constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import {
  ShoppingCart,
  GraduationCap,
  DollarSign,
  Globe,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  Cross,
  Sparkles,
  TrendingUp,
  ArrowRight,
  Building2,
  Leaf,
  Car,
  ChevronDown,
  Plus,
  Minus,
  Zap,
  BarChart3,
  Target,
  Rocket
} from "lucide-react";
import CollapsibleCard from "../ui/CollapsibleCard";

const INDUSTRY_ICONS = {
  "Retail/E-commerce": ShoppingCart,
  "Educación": GraduationCap,
  "Finanzas": DollarSign,
  "Turismo": Globe,
  "Salud": Cross,
  "SaaS/Tech": Cloud,
  "Inmobiliaria": Building2,
  "Agrícola": Leaf,
  "Automovilística": Car,
};

const UNIFIED = {
  "Retail/E-commerce": {
    pain: "Baja conversión por abandono y fricción en el checkout.",
    solution: "Recuperación automática y recomendaciones en tiempo real.",
    kpi: "+40% conversión",
    gradient: "from-purple-600 to-pink-600",
    features: ["Chatbots de ventas 24/7", "Recomendaciones personalizadas", "Recuperación de carritos abandonados"],
    metrics: { conversion: "+40%", cart_recovery: "65%", avg_ticket: "+25%" }
  },
  "Educación": {
    pain: "Admisiones saturadas y respuestas lentas a interesados.",
    solution: "Agentes IA 24/7 que orientan y agendan entrevistas.",
    kpi: "80% menos tiempo respuesta",
    gradient: "from-blue-600 to-indigo-600",
    features: ["Orientación académica automatizada", "Agendamiento inteligente", "Seguimiento de prospectos"],
    metrics: { response_time: "-80%", enrollment: "+35%", satisfaction: "92%" }
  },
  "Finanzas": {
    pain: "Calificación lenta y procesos con alta fricción.",
    solution: "Scoring y preaprobación automática en tiempo real.",
    kpi: "3× aprobaciones",
    gradient: "from-emerald-600 to-teal-600",
    features: ["Scoring crediticio instantáneo", "KYC automatizado", "Asesoría financiera 24/7"],
    metrics: { approvals: "3×", processing: "-75%", fraud_detection: "95%" }
  },
  "Turismo": {
    pain: "Atención 24/7 y reservas manuales poco eficientes.",
    solution: "Bots multilingües con reserva y pago integrado.",
    kpi: "+60% satisfacción",
    gradient: "from-orange-600 to-amber-600",
    features: ["Reservas automatizadas", "Soporte multiidioma", "Itinerarios personalizados"],
    metrics: { satisfaction: "+60%", bookings: "+45%", cancellations: "-30%" }
  },
  "Salud": {
    pain: "Largas esperas, ausencias a citas y procesos manuales.",
    solution: "Recordatorios y confirmación automática vía WhatsApp y SMS.",
    kpi: "+65% satisfacción de pacientes",
    gradient: "from-red-600 to-rose-600",
    features: ["Agendamiento inteligente", "Recordatorios automatizados", "Triaje digital"],
    metrics: { patient_satisfaction: "+65%", no_shows: "-40%", wait_time: "-50%" }
  },
  "SaaS/Tech": {
    pain: "Onboarding complejo y churn en primeras semanas.",
    solution: "Agentes técnicos IA y guías proactivas in-app.",
    kpi: "+50% retención",
    gradient: "from-cyan-600 to-blue-600",
    features: ["Onboarding personalizado", "Soporte técnico IA", "Análisis predictivo de churn"],
    metrics: { retention: "+50%", activation: "+70%", support_tickets: "-60%" }
  },
  "Inmobiliaria": {
    pain: "Pérdida de leads por respuesta tardía y tours ineficientes.",
    solution: "Agentes virtuales para calificación de leads y tours 360° automatizados.",
    kpi: "+55% cierre de ventas",
    gradient: "from-indigo-600 to-purple-600",
    features: ["Calificación automática de leads", "Tours virtuales interactivos", "Matching inteligente de propiedades"],
    metrics: { sales_close: "+55%", lead_response: "<2min", qualified_leads: "+80%" }
  },
  "Agrícola": {
    pain: "Gestión manual de cultivos y pérdidas por falta de monitoreo.",
    solution: "IA predictiva para optimización de cosechas y alertas tempranas.",
    kpi: "+35% productividad",
    gradient: "from-green-600 to-lime-600",
    features: ["Predicción de rendimientos", "Alertas de plagas y clima", "Optimización de recursos"],
    metrics: { productivity: "+35%", waste_reduction: "-45%", water_savings: "30%" }
  },
  "Automovilística": {
    pain: "Proceso de venta largo y servicio post-venta deficiente.",
    solution: "Asistentes virtuales para ventas, servicio y mantenimiento predictivo.",
    kpi: "+45% satisfacción del cliente",
    gradient: "from-gray-600 to-zinc-600",
    features: ["Configurador virtual de vehículos", "Agendamiento de servicios", "Diagnóstico predictivo"],
    metrics: { customer_satisfaction: "+45%", service_efficiency: "+60%", sales_cycle: "-40%" }
  }
};

// Array actualizado con las nuevas industrias
const ALL_INDUSTRIES = [
  { title: "Retail/E-commerce" },
  { title: "Educación" },
  { title: "Finanzas" },
  { title: "Turismo" },
  { title: "Salud" },
  { title: "SaaS/Tech" },
  { title: "Inmobiliaria" },
  { title: "Agrícola" },
  { title: "Automovilística" }
];

export default function Industries() {
  const { ref } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Abrir/cerrar la seleccionada
  };

  return (
    <section
      id="industrias"
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
      aria-label="Soluciones por industria"
    >
      {/* Efectos de fondo mejorados */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-blue-600/10 to-transparent blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[120px] rounded-full animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-purple-600/5 to-transparent blur-[100px] rounded-full animate-rotate-slow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Partículas flotantes - solo cliente */}
        {isClient && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-random"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header mejorado */}
        <header className="text-center mb-16">
          <div className="inline-block mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-sm font-light tracking-wide text-cyan-300">
                  Soluciones Especializadas por Sector
                </span>
                <Target className="h-5 w-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">Potencia tu</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
              industria
            </span>
          </h2>
          <p className="text-lg md:text-xl font-light text-blue-200/70 max-w-3xl mx-auto mb-4">
            Experiencia específica y tecnología adaptada a los desafíos únicos de tu sector
          </p>
          <p className="text-sm font-light text-cyan-300/60">
            Click en cualquier industria para explorar soluciones detalladas
          </p>
        </header>

        {/* Grid de industrias responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto">
          {ALL_INDUSTRIES.map(({ title }, index) => {
            const Icon = INDUSTRY_ICONS[title] || Cloud;
            const { pain, solution, kpi, gradient, features, metrics } = UNIFIED[title] || {};
            const isExpanded = openIndex === index;
            const isHovered = hoveredCard === title;

            return (
              <CollapsibleCard
                key={title}
                icon={Icon}
                title={title}
                subtitle={kpi}
                isOpen={isExpanded}
                isHovered={isHovered}
                onClick={() => toggleCard(index)}
                gradient={gradient}
                animationDelay={index * 50}
                onMouseEnter={() => setHoveredCard(title)}
                onMouseLeave={() => setHoveredCard(null)}
                features={features}
                metrics={metrics}
              >
                {/* Problema y Solución */}
                <div className="space-y-4 mb-6">
                  {/* Problema */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-red-400">
                        Desafío
                      </span>
                    </div>
                    <p className="text-sm font-light text-red-100/90 leading-relaxed">
                      {pain}
                    </p>
                  </div>

                  {/* Solución */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
                        Solución IA
                      </span>
                    </div>
                    <p className="text-sm font-light text-emerald-100/90 leading-relaxed">
                      {solution}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a 
                  href="https://cal.com/www.cognitiva-ai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative w-full block mt-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-md opacity-50 group-hover/btn:opacity-100 transition-opacity duration-300`} />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover/btn:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <span className="text-sm font-light text-white">
                      Transformar mi {title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/90 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </a>
              </CollapsibleCard>
            );
          })}
        </div>

        {/* Indicadores de interacción */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
            <ChevronDown className="h-4 w-4 text-cyan-400 animate-bounce" />
            <span className="text-sm font-light text-blue-200/60">
              Explora cada industria para ver soluciones detalladas
            </span>
            <ChevronDown className="h-4 w-4 text-cyan-400 animate-bounce" />
          </div>
        </div>

        {/* Footer de sección */}
        <div className="mt-16 text-center">
          <p className="text-sm font-light text-blue-200/60 mb-6">
            ¿No ves tu industria? Creamos soluciones personalizadas para cualquier sector
          </p>
          <a 
            href="https://cal.com/www.cognitiva-ai.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative px-8 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]">
              <span className="flex items-center gap-2 text-base font-light text-white">
                <BarChart3 className="h-5 w-5" />
                Consultar solución personalizada
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </a>
        </div>

        {/* Stats globales */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Industrias atendidas", value: "15+", icon: Globe },
            { label: "Casos de éxito", value: "50+", icon: CheckCircle2 },
            { label: "ROI promedio", value: "3.5x", icon: TrendingUp },
            { label: "Satisfacción", value: "95%", icon: Sparkles }
          ].map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 text-center">
                <stat.icon className="h-5 w-5 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-thin text-white">{stat.value}</div>
                <div className="text-xs font-light text-blue-200/60">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes rotate-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float-random {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(30px, -30px); opacity: 0.6; }
          50% { transform: translate(-20px, -50px); opacity: 0.4; }
          75% { transform: translate(-40px, 20px); opacity: 0.5; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-float-random {
          animation: float-random 20s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
}