"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  Zap,
  Globe,
  Brain,
  Shield,
  Rocket,
  ChevronDown,
  TrendingUp,
  Cpu,
  HelpCircle,
  CheckCircle,
  DollarSign,
  Settings,
  MessageCircle,
  BarChart3,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_LINKS } from "@/lib/utils/constants";
import { useStableRandom } from "@/hooks/useStableRandom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scanPosition, setScanPosition] = useState(0);
  const particleElements = useStableRandom(15, 9);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    
    const scanInterval = setInterval(() => {
      setScanPosition(prev => (prev + 1) % 100);
    }, 30);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearInterval(scanInterval);
    };
  }, []);

  const linkIcons = {
    "#casos": TrendingUp,
    "#servicios": Zap,
    "#proceso": Settings,
    "#industrias": Globe,
    "#faq": HelpCircle,
  };

  const scanLineStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.8), transparent)',
    transform: `translateX(${scanPosition - 100}%)`,
    transition: 'transform 0.03s linear',
    zIndex: 60
  };

  const particleStyle = (left, delay, duration) => ({
    position: 'absolute',
    width: '2px',
    height: '2px',
    background: 'radial-gradient(circle, rgba(6,182,212,0.5), transparent)',
    borderRadius: '50%',
    left: `${left}%`,
    animation: `floatNav ${duration}s ease-in-out ${delay}s infinite`,
    pointerEvents: 'none'
  });

  return (
    <>
      <style>{`
        @keyframes floatNav {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          33% { transform: translateY(-15px) translateX(8px); opacity: 0.6; }
          66% { transform: translateY(8px) translateX(-8px); opacity: 0.4; }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.5; transform: scale(0.8) rotate(180deg); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      <div style={scanLineStyle} />
      
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            : "bg-gradient-to-b from-[#0a0a0a]/80 via-[#0d0d0d]/60 to-transparent backdrop-blur-xl"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/10 to-transparent opacity-50" />
          
          {particleElements.map((element, i) => (
            <div
              key={i}
              style={particleStyle(
                element.left,
                element.delay * 0.5,
                element.duration
              )}
            />
          ))}
          
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container-padded px-4 relative">
          <div className="h-20 flex items-center justify-between">
            <Link href="/" className="relative group flex items-center gap-3">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative flex items-center gap-3">
                <Image
                  src="/logo-cognitiva.png"
                  alt="Cognitiva AI"
                  height={40}
                  width={140}
                  className="h-10 w-auto md:h-12 md:w-auto relative z-10"
                  priority
                />
                
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 animate-pulse-slow">
                  <Bot className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="text-xs font-light text-cyan-300">AI Agency</span>
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const Icon = linkIcons[link.href];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative group px-4 py-2.5 rounded-xl transition-all duration-300"
                    >
                      {hoveredLink === link.href && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl blur-sm" />
                      )}
                      
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 ${
                        hoveredLink === link.href ? 'opacity-100' : ''
                      } transition-opacity duration-300`}>
                        <div className="absolute inset-[1px] rounded-xl bg-[#000412]" />
                      </div>
                      
                      <div className="relative flex items-center gap-2">
                        {Icon && (
                          <Icon className={`h-4 w-4 transition-all duration-300 ${
                            hoveredLink === link.href 
                              ? 'text-cyan-400 scale-110' 
                              : 'text-blue-300/60'
                          }`} />
                        )}
                        <span className={`text-sm font-light transition-all duration-300 ${
                          hoveredLink === link.href 
                            ? 'text-white' 
                            : 'text-blue-100/90'
                        }`}>
                          {link.label}
                        </span>
                      </div>
                      
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-300 ${
                        hoveredLink === link.href ? 'w-full' : 'w-0'
                      }`} />
                    </Link>
                  );
                })}
              </div>

              <div className="relative h-8 w-[1px] mx-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 animate-pulse-slow" />
              </div>

              <div className="relative group ml-2">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-all duration-500" />
                
                {/* CORRECCIÓN: abrir etiqueta <a> */}
                <a
                  href="https://cal.com/www.cognitiva-ai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-light shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group-hover:scale-105 gradient-shift"
                >
                  <img src="/GoogleMeet.png" alt="Google Meet" className="h-4 w-4" />
                  <span className="text-sm tracking-wide">Agenda Demo IA</span>
                </a>
              </div>
            </div>

            <button
              className="lg:hidden relative group p-3 rounded-xl focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className={`absolute transition-all duration-500 ${open ? 'rotate-180 scale-110' : ''}`}>
                  {open ? (
                    <X className="h-6 w-6 text-cyan-400" />
                  ) : (
                    <Menu className="h-6 w-6 text-blue-300" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          open 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-[#0a0a0a] backdrop-blur-xl border-t border-white/20 shadow-[0_30px_60px_rgba(59,130,246,0.4)] border-l border-r border-white/15">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/95 via-[#0d0d0d]/90 to-[#101010]/95 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl" />
            </div>
            
            <div className="container-padded px-4 py-6 relative">
              <div className="space-y-2">
                {NAV_LINKS.map((link, index) => {
                  const Icon = linkIcons[link.href];
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group relative block"
                      style={{
                        animation: open ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                      
                      <div className="relative flex items-center gap-3 px-4 py-3">
                        {Icon && (
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-5 w-5 text-cyan-400" />
                          </div>
                        )}
                        <span className="text-base font-light text-blue-100 group-hover:text-white transition-colors duration-300">
                          {link.label}
                        </span>
                        <ChevronDown className="h-4 w-4 text-blue-300/50 ml-auto rotate-[-90deg]" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-6 space-y-3">
                {/* CORRECCIÓN: abrir etiqueta <a> */}
                <a
                  href="https://cal.com/www.cognitiva-ai.agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                  onClick={() => setOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-md opacity-60" />
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white gradient-shift">
                    <img src="/GoogleMeet.png" alt="Google Meet" className="h-5 w-5" />
                    <span className="font-light tracking-wide">Agenda una Demo</span>
                  </div>
                </a>
                
                {/* CORRECCIÓN: abrir etiqueta <a> */}
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block"
                  onClick={() => setOpen(false)}
                >
                  <div className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                    <img src="/WhatsApp4.png" alt="WhatsApp" className="h-5 w-5" />
                    <span className="font-light text-cyan-300">Hablar por WhatsApp</span>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-blue-200/50">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span>En línea</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-3 w-3 text-cyan-400" />
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}