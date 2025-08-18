"use client";
import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Bot,
  Zap,
  Shield,
  Globe,
  Brain,
  Rocket,
  ArrowUpRight,
  Heart,
  Code2,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Activity,
  Users,
  Award,
  BarChart,
  Clock,
  Database,
  Cpu,
  Settings,
  HelpCircle,
  DollarSign,
  FileText,
  BookOpen,
  Video,
  Headphones,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { BRAND } from "@/lib/utils/constants";
import { useStableRandom } from "@/hooks/useStableRandom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const particleElements = useStableRandom(30, 10);
  const lineElements = useStableRandom(5, 11);

  const footerLinks = {
    empresa: [
      { label: "Casos de Éxito", href: "#casos", icon: TrendingUp },
      { label: "Servicios IA", href: "#servicios", icon: Brain },
      { label: "Industrias", href: "#industrias", icon: Globe },
      { label: "Integraciones", href: "#integraciones", icon: Cpu },
      { label: "Proceso", href: "#proceso", icon: Settings },
      { label: "Seguridad", href: "#seguridad", icon: Shield },
      { label: "ROI Calculator", href: "#roi", icon: BarChart },
      { label: "Precios", href: "#precios", icon: DollarSign },
    ],
    recursos: [
      { label: "Centro de Ayuda", href: "/help", icon: HelpCircle },
      { label: "Blog IA", href: "/blog", icon: BookOpen },
      { label: "Documentación", href: "/docs", icon: FileText },
      { label: "API Reference", href: "/api", icon: Code2 },
      { label: "Video Tutoriales", href: "/tutorials", icon: Video },
      { label: "Webinars", href: "/webinars", icon: Globe },
      { label: "Certificaciones", href: "/certs", icon: Award },
      { label: "Soporte 24/7", href: "/support", icon: Headphones },
    ],
    legal: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos de Servicio", href: "/terminos" },
      { label: "Política de Cookies", href: "/cookies" },
      { label: "GDPR Compliance", href: "/gdpr" },
      { label: "ISO Certificaciones", href: "/compliance" },
      { label: "SLA Garantizado", href: "/sla" },
      { label: "Seguridad de Datos", href: "/security" },
      { label: "Licencias", href: "/licenses" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/cognitiva", label: "Twitter", color: "from-blue-400 to-blue-600" },
    { icon: Linkedin, href: "https://linkedin.com/company/cognitiva", label: "LinkedIn", color: "from-blue-600 to-blue-800" },
    { icon: Instagram, href: "https://instagram.com/cognitiva", label: "Instagram", color: "from-pink-500 to-purple-600" },
    { icon: Github, href: "https://github.com/cognitiva", label: "GitHub", color: "from-gray-600 to-gray-800" },
  ];

  const stats = [
    { value: "50+", label: "Empresas Activas", icon: Users, trend: "+23%" },
    { value: "10M+", label: "Msgs/mes", icon: MessageCircle, trend: "+45%" },
    { value: "99%", label: "Uptime SLA", icon: Activity, trend: "Estable" },
    { value: "24/7", label: "Soporte Premium", icon: Shield, trend: "365 días" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <style>{`
        @keyframes auroraFooter {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.1; }
          33% { transform: rotate(120deg) scale(1.1); opacity: 0.15; }
          66% { transform: rotate(240deg) scale(0.9); opacity: 0.1; }
        }
        
        @keyframes riseUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes drawLine {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes scanFooter {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradientX {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradientXY {
          0%, 100% { background-position: 0% 0%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .aurora-footer { animation: auroraFooter 20s ease-in-out infinite; }
        .rise-up { animation: riseUp linear infinite; }
        .draw-line { animation: drawLine 10s linear infinite; }
        .scan-footer { animation: scanFooter 8s linear infinite; }
        .gradient-x { animation: gradientX 6s ease infinite; background-size: 200% 200%; }
        .gradient-xy { animation: gradientXY 15s ease infinite; background-size: 200% 200%; }
      `}</style>

      <div aria-hidden className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[1200px] h-[600px] bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-transparent blur-[150px] rounded-full aurora-footer" />
        <div className="absolute bottom-0 right-0 w-[1000px] h-[500px] bg-gradient-to-tl from-purple-600/10 via-pink-500/10 to-transparent blur-[120px] rounded-full aurora-footer" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        {particleElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full rise-up"
            style={{
              left: `${element.left}%`,
              bottom: '-10px',
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-5">
          <defs>
            <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(6,182,212)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {lineElements.map((element, i) => (
            <line
              key={i}
              x1={`${element.x1}%`}
              y1={`${element.y1}%`}
              x2={`${element.x2}%`}
              y2={`${element.y2}%`}
              stroke="url(#footer-gradient)"
              strokeWidth="1"
              className="draw-line"
              style={{ animationDelay: `${i * 2}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative border-b border-white/5">
        <div className="container-padded py-12 sm:py-16 md:py-20">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 gradient-xy" />
            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0a0a0a]/90 to-[#0d0d0d]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-12 lg:p-16 text-center">
              <div className="inline-block mb-4 sm:mb-6 md:mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-white/[0.1] to-white/[0.05] backdrop-blur-xl border border-white/20">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 animate-pulse" />
                    <span className="text-xs sm:text-sm font-light tracking-wide text-cyan-300">
                      <span className="hidden sm:inline">TECNOLOGÍA DE VANGUARDIA • IA GENERATIVA • MACHINE LEARNING</span>
                      <span className="sm:hidden">IA DE VANGUARDIA</span>
                    </span>
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-thin mb-4 sm:mb-6">
                <span className="font-light text-white/90">Revoluciona tu negocio con</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 gradient-x font-extralight">
                  Inteligencia Artificial
                </span>
              </h2>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-blue-200/70 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4">
                Únete a las empresas líderes que ya multiplicaron sus resultados.
                <br />
                <span className="text-cyan-300">Implementación en 7 días • ROI garantizado • Soporte 24/7</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <a
                  href="https://cal.com/www.cognitiva-ai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-light shadow-2xl group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-105 gradient-x">
                    <span className="flex items-center gap-2 sm:gap-3">
                      <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">Comenzar transformación</span>
                      <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </a>

                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                >
                  <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-cyan-400/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <span className="flex items-center gap-2 sm:gap-3 text-cyan-300">
                      <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-light whitespace-nowrap">Hablar con experto</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs font-light text-blue-200/50">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">Sin tarjeta</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">100% seguros</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">24-48h setup</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                  <span className="text-xs">Garantía</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative container-padded py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="mb-10">
              <div className="relative inline-block group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/logo-cognitiva.png"
                  alt="Cognitiva AI"
                  className="relative h-14 w-auto"
                  style={{ maxWidth: 200 }}
                />
              </div>
              
              <p className="mt-6 text-lg font-light text-blue-200/70 leading-relaxed">
                Transformamos negocios con <span className="text-cyan-300">IA conversacional</span> y 
                <span className="text-purple-300"> automatización inteligente</span> de próxima generación.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 text-xs text-emerald-300">
                  ISO 27001
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0a0a0a]/60 to-[#0d0d0d]/60 border border-blue-500/20 text-xs text-blue-300">
                  GDPR Ready
                </div>
                <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 text-xs text-purple-300">
                  SOC 2
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-white/10 group-hover:border-cyan-400/20 transition-all duration-300">
                      <div className="flex items-start justify-between mb-2">
                        <Icon className="h-4 w-4 text-cyan-400" />
                        <span className="text-xs text-emerald-400 font-light">{stat.trend}</span>
                      </div>
                      <div className="text-2xl font-thin text-white">{stat.value}</div>
                      <div className="text-xs font-light text-blue-200/60 mt-1">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-cyan-400 mb-6 flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Soluciones
                </h4>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-3 text-sm font-light text-blue-200/70 hover:text-white transition-all duration-300"
                        >
                          <Icon className="h-3.5 w-3.5 text-blue-400/50 group-hover:text-cyan-400 transition-colors" />
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-purple-400 mb-6 flex items-center gap-2">
                  <Code2 className="h-4 w-4" />
                  Recursos
                </h4>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-3 text-sm font-light text-blue-200/70 hover:text-white transition-all duration-300"
                        >
                          <Icon className="h-3.5 w-3.5 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                          <span className="relative">
                            {link.label}
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-emerald-400 mb-6 flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Contacto & Legal
                </h4>
                
                <div className="space-y-3 mb-8">
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 hover:border-cyan-400/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200/50">Teléfono</div>
                      <div className="text-sm font-light text-white">{BRAND.phone}</div>
                    </div>
                  </a>
                  
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10 hover:border-purple-400/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200/50">Email</div>
                      <div className="text-sm font-light text-white">{BRAND.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-white/[0.04] to-white/[0.02] border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-blue-200/50">Ubicación</div>
                      <div className="text-sm font-light text-white">{BRAND.city}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-medium text-blue-200/50 mb-3">Legal & Compliance</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {footerLinks.legal.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs font-light text-blue-200/50 hover:text-cyan-300 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scan-footer" />
        
        <div className="container-padded py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm font-light text-blue-200/60">
              <span>© {currentYear} Cognitiva AI</span>
              <span className="text-cyan-400/50">•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="h-3 w-3 text-red-400" style={{ animation: 'pulse 1s ease-in-out infinite' }} /> 
                by humans & AI
              </span>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group relative"
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                    <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:border-cyan-400/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4 text-blue-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    {hoveredSocial === social.label && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap">
                        {social.label}
                      </div>
                    )}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm border border-emerald-500/20">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" style={{ animation: 'pulse 1s ease-in-out infinite' }} />
                <span className="text-xs font-light text-emerald-300">Todos los sistemas operativos</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0a0a0a]/60 to-[#0d0d0d]/60 backdrop-blur-sm border border-blue-500/20">
                <Database className="h-3 w-3 text-blue-400" />
                <span className="text-xs font-light text-blue-300">v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
