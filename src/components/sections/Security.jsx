"use client";
import React from "react";
import { SECURITY } from "../../lib/utils/constants";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { useStableRandom } from "../../hooks/useStableRandom";
import { ShieldCheck, Lock, Fingerprint, Eye, AlertCircle, BadgeCheck, Stethoscope } from "lucide-react";

export default function Security() {
  const { ref } = useScrollAnimation();
  const matrixElements = useStableRandom(50, 3);

  const securityGradients = [
    "from-emerald-600 to-teal-600",
    "from-blue-600 to-indigo-600",
    "from-purple-600 to-pink-600",
    "from-cyan-600 to-blue-600",
  ];

  return (
    <section
      id="seguridad"
      className="relative py-16 sm:py-24 md:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="security-title"
    >
      {/* Efectos de fondo con tema de seguridad */}
      <div aria-hidden className="absolute inset-0">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-[0.02]">
          {matrixElements.map((element, i) => (
            <div
              key={i}
              className="absolute text-emerald-500 font-mono text-xs animate-matrix-fall"
              style={{
                left: `${element.left}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${5 + element.duration * 0.5}s`
              }}
            >
              {element.value}
            </div>
          ))}
        </div>
        
        {/* Escáner de seguridad */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-scan-vertical" />
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent animate-scan-horizontal" />
        </div>
        
        {/* Gradientes de fondo */}
        <div className="absolute top-1/4 right-0 w-[1000px] h-[1000px] bg-gradient-to-bl from-emerald-600/10 to-transparent blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-teal-600/10 to-transparent blur-[120px] rounded-full animate-pulse-slow animation-delay-2000" />
        
        {/* Grid hexagonal */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2) rotate(0)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="rgb(16,185,129)" strokeWidth="0.5" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div ref={ref} className="container-padded relative animate-in">
        {/* Header mejorado */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          {/* Badge con efecto de seguridad */}
          <div className="inline-block mb-4 sm:mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.04] backdrop-blur-xl border border-white/10">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-light tracking-wide text-emerald-300">
                  Infraestructura Ultra Segura
                </span>
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
          </div>

          <h2 id="security-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-thin tracking-tight text-white mb-4">
            <span className="font-light">Seguridad de</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-gradient-x">
              grado militar
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-blue-200/70 max-w-3xl mx-auto px-4">
            Protección multicapa con los más altos estándares de la industria.
            Tu data está blindada con tecnología de vanguardia.
          </p>
        </div>

        {/* Indicador de estado de seguridad */}
        <div className="mb-8 sm:mb-10 md:mb-12 flex justify-center px-4 sm:px-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-xl opacity-60 animate-pulse" />
            <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-2.5 md:py-3 lg:py-4 rounded-full bg-gradient-to-r from-emerald-900/50 to-teal-900/50 backdrop-blur-xl border border-emerald-500/30">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-pulse">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full animate-ping" />
                </div>
                <span className="text-xs sm:text-sm font-light text-emerald-300">Sistema Protegido</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-emerald-500/30" />
              <div className="flex items-center gap-2">
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
                <span className="text-xs font-light text-emerald-300/70">Monitoreo 24/7 Activo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de características de seguridad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {SECURITY.map(({ icon: Icon, title, desc }, index) => {
            const gradient = securityGradients[index % securityGradients.length];
            
            return (
              <article
                key={title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Efecto de escaneo al hover */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1500" />
                </div>
                
                {/* Borde con gradiente */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-500`} />
                
                {/* Card principal */}
                <div className="relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 overflow-hidden transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_30px_60px_rgba(16,185,129,0.2)]">
                  
                  {/* Patrón de seguridad de fondo */}
                  <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,white_49%,white_51%,transparent_52%),linear-gradient(-45deg,transparent_48%,white_49%,white_51%,transparent_52%)] bg-[size:20px_20px]" />
                  </div>
                  
                  {/* Icono con animación */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl sm:rounded-2xl blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    
                    {/* Badge de verificación */}
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ShieldCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-lg sm:text-xl font-light text-white mb-2 sm:mb-3">{title}</h3>
                  <p className="text-xs sm:text-sm font-light text-blue-200/70 leading-relaxed mb-3 sm:mb-4">{desc}</p>
                  
                  {/* Indicador de nivel de seguridad */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-3 rounded-full transition-all duration-500 ${
                            i < 4 
                              ? 'bg-gradient-to-t from-emerald-500 to-teal-400' 
                              : 'bg-white/10'
                          } ${i < 4 ? 'group-hover:h-4' : ''}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-light text-emerald-300/70 hidden sm:inline">Nivel máximo</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Panel de certificaciones */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Fondo animado */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-teal-600/5 to-cyan-600/5 animate-gradient-xy" />
          
          {/* Contenido */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-2 sm:mb-3">Certificaciones y Cumplimiento</h3>
              <p className="text-xs sm:text-sm font-light text-blue-200/60 px-4 sm:px-0">
                Cumplimos con los estándares más exigentes de la industria
              </p>
            </div>
            
            {/* Grid de certificaciones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { name: "ISO 27001", desc: "Gestión de seguridad", icon: ShieldCheck },
                { name: "GDPR", desc: "Protección de datos EU", icon: Lock },
                { name: "SOC 2", desc: "Controles de seguridad", icon: BadgeCheck },
                { name: "HIPAA", desc: "Datos médicos", icon: Stethoscope },
              ].map((cert, index) => (
                <div
                  key={cert.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 text-center transition-all duration-500 group-hover:translate-y-[-2px] group-hover:border-emerald-500/30">
                    {/* Icono específico por certificación */}
                    {(cert.icon || Fingerprint) && (
                      <cert.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-400 mx-auto mb-2 sm:mb-3" />
                    )}
                    <p className="text-sm sm:text-base md:text-lg font-light text-white">{cert.name}</p>
                    <p className="text-xs font-light text-blue-200/60 mt-1 leading-tight">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA - CONVERTIDO A ENLACE */}
            <div className="mt-10 text-center">
              <a 
                href="https://cal.com/www.cognitiva-ai.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                  <span className="flex items-center gap-2 sm:gap-3">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-300" />
                    <span className="text-sm sm:text-base font-light text-white">
                      Solicitar reporte de seguridad completo
                    </span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 4s linear infinite;
        }
        
        .animate-scan-horizontal {
          animation: scan-horizontal 6s linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
}
