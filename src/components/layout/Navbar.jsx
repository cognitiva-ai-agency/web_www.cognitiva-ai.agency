"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  Calendar,
  MessageCircle,
  ChevronDown,
  Bot,
  Zap,
  Database,
  Target,
  BarChart3,
  ShoppingCart,
  GraduationCap,
  DollarSign,
  Heart,
  Cloud,
  Globe,
  Settings,
  TrendingUp,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/ReusableComponents";
import Dropdown, { DropdownItem, useDropdown } from "@/components/ui/NavigationDropdown";
import { BRAND, NAV_LINKS } from "@/lib/utils/businessConstants";
import { useConsistentRandomValues } from "@/hooks/useConsistentRandomValues";
import { colors } from "@/lib/design-system/designTokens";
import DemoButton from "@/components/ui/DemoButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scanPosition, setScanPosition] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const particleElements = useConsistentRandomValues(15, 9);

  // Estados para dropdowns desktop
  const serviciosDropdown = useDropdown();
  const industriasDropdown = useDropdown();

  // Estados para dropdowns móvil
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [mobileIndustriasOpen, setMobileIndustriasOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
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

  // Cerrar menú móvil al cambiar a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileServiciosOpen(false);
        setMobileIndustriasOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkIcons = {
    "#casos": TrendingUp,
    "#servicios": Zap,
    "#proceso": Settings,
    "#industrias": Globe,
    "#faq": HelpCircle,
  };

  const serviciosItems = [
    { label: "Agentes de IA", href: "#servicios-agentes-ia", icon: Bot },
    { label: "Automatización", href: "#servicios-automatizaciones", icon: Zap },
    { label: "Integraciones", href: "#servicios-integraciones", icon: Database },
    { label: "Marketing & Embudos", href: "#servicios-marketing", icon: Target },
    { label: "Desarrollo Web", href: "#servicios-web-seo", icon: Settings },
    { label: "Analytics/BI", href: "#servicios-analytics", icon: BarChart3 }
  ];

  const industriasItems = [
    { label: "Retail/E-commerce", href: "#industrias", icon: ShoppingCart },
    { label: "Educación", href: "#industrias", icon: GraduationCap },
    { label: "Finanzas", href: "#industrias", icon: DollarSign },
    { label: "Salud", href: "#industrias", icon: Heart },
    { label: "Inmobiliaria", href: "#industrias", icon: Settings },
    { label: "SaaS/Tech", href: "#industrias", icon: Cloud },
    { label: "Ver todas", href: "#industrias", icon: Globe }
  ];

  const handleMobileNavClick = (href) => {
    setMobileMenuOpen(false);
    setMobileServiciosOpen(false);
    setMobileIndustriasOpen(false);
    
    // Actualizar la URL con el hash
    if (href.startsWith('#')) {
      window.location.hash = href;
    }
    
    // Scroll al elemento
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId) || document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

        .mobile-dropdown-enter {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease-out;
        }

        .mobile-dropdown-enter-active {
          max-height: 400px;
          opacity: 1;
        }
      `}</style>

      <div style={scanLineStyle} />
      
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-dark-secondary/96 backdrop-blur-2xl shadow-[0_20px_50px_rgba(59,130,246,0.15)]'
            : 'bg-dark-secondary/85 backdrop-blur-xl'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-600/10 to-transparent opacity-50" />
          
          {isClient && particleElements.map((element, i) => (
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group flex items-center gap-3">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative flex items-center gap-3">
                <Image
                  src="/logo-cognitiva.png"
                  alt="Cognitiva AI"
                  height={48}
                  width={168}
                  className="h-8 w-auto md:h-10 md:w-auto relative z-10"
                  style={{ maxHeight: "2.5rem" }}
                  priority
                />
                
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 animate-pulse">
                  <Bot className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="text-xs font-light text-cyan-300">AI Agency</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const Icon = linkIcons[link.href];
                  const hasDropdown = link.label === "Servicios" || link.label === "Industrias";
                  
                  if (hasDropdown) {
                    const dropdown = link.label === "Servicios" ? serviciosDropdown : industriasDropdown;
                    const items = link.label === "Servicios" ? serviciosItems : industriasItems;
                    
                    return (
                      <Dropdown
                        key={link.href}
                        isOpen={dropdown.isOpen}
                        onToggle={dropdown.toggle}
                        position="bottom-left"
                        className="relative"
                        trigger={
                          <div className="relative group px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer">
                            <div className="relative flex items-center gap-2">
                              {Icon && <Icon className="h-4 w-4 text-blue-300/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />}
                              <span className="text-sm font-light text-blue-100/90 group-hover:text-white transition-all duration-300">
                                {link.label}
                              </span>
                              <ChevronDown className={`h-3 w-3 transition-all duration-300 ${
                                dropdown.isOpen ? 'text-cyan-400 rotate-180' : 'text-blue-300/60'
                              }`} />
                            </div>
                          </div>
                        }
                      >
                        {items.map((item, index) => (
                          <DropdownItem
                            key={index}
                            icon={item.icon}
                            href={item.href}
                          >
                            {item.label}
                          </DropdownItem>
                        ))}
                      </Dropdown>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="relative group px-4 py-2.5 rounded-xl transition-all duration-300"
                    >
                      <div className="relative flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4 text-blue-300/60 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />}
                        <span className="text-sm font-light text-blue-100/90 group-hover:text-white transition-all duration-300">
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="relative h-8 w-[1px] mx-2">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 animate-pulse" />
              </div>

              {/* Desktop CTAs */}
              <div className="flex items-center gap-3 ml-2">
                <DemoButton 
                  variant="default"
                  size="small"
                  text="Demo 30 min"
                  showSubtitle={false}
                  title="Te mostramos un caso real de tu industria"
                />
                
                <WhatsAppButton 
                  variant="outline"
                  size="small"
                  text="WhatsApp"
                  showSubtitle={false}
                  title="Respuesta en <2 min (24/7)"
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative group p-3 rounded-xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative w-6 h-6 flex items-center justify-center">
                <div className={`absolute transition-all duration-500 ${mobileMenuOpen ? 'rotate-180 scale-110' : ''}`}>
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-cyan-400" />
                  ) : (
                    <Menu className="h-6 w-6 text-blue-300" />
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-dark-200 backdrop-blur-xl border-t border-white/20 shadow-[0_30px_60px_rgba(59,130,246,0.4)] border-l border-r border-white/15">
            <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark-100/90 to-dark-200/95 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
            
            <div className="container-padded px-3 sm:px-4 py-4 sm:py-6 relative">
              <div className="space-y-2">
                {NAV_LINKS.map((link, index) => {
                  const Icon = linkIcons[link.href];
                  const hasDropdown = link.label === "Servicios" || link.label === "Industrias";
                  
                  if (hasDropdown) {
                    const isOpen = link.label === "Servicios" ? mobileServiciosOpen : mobileIndustriasOpen;
                    const setOpen = link.label === "Servicios" ? setMobileServiciosOpen : setMobileIndustriasOpen;
                    const items = link.label === "Servicios" ? serviciosItems : industriasItems;
                    
                    return (
                      <div key={link.href}>
                        <button
                          onClick={() => setOpen(!isOpen)}
                          className="group relative block w-full"
                          style={{
                            animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
                          
                          <div className="relative flex items-center justify-between gap-3 px-4 py-3">
                            <div className="flex items-center gap-3">
                              {Icon && (
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                  <Icon className="h-5 w-5 text-cyan-400" />
                                </div>
                              )}
                              <span className="text-base font-light text-blue-100 group-hover:text-white transition-colors duration-300">
                                {link.label}
                              </span>
                            </div>
                            <ChevronDown className={`h-4 w-4 text-blue-300/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </button>
                        
                        {/* Dropdown móvil */}
                        <div className={`mobile-dropdown-enter ${isOpen ? 'mobile-dropdown-enter-active' : ''}`}>
                          <div className="ml-6 pl-4 border-l border-white/10 space-y-1">
                            {items.map((item, itemIndex) => (
                              <button
                                key={itemIndex}
                                onClick={() => handleMobileNavClick(item.href)}
                                className="flex items-center gap-3 px-4 py-2 w-full text-left rounded-lg hover:bg-white/5 transition-colors duration-300"
                              >
                                <item.icon className="h-4 w-4 text-cyan-400/70" />
                                <span className="text-sm font-light text-blue-200/80">
                                  {item.label}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={link.href}
                      onClick={() => handleMobileNavClick(link.href)}
                      className="group relative block w-full"
                      style={{
                        animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
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
                      </div>
                    </button>
                  );
                })}
              </div>
              

              <div className="mt-6 flex items-center justify-center gap-4 text-xs text-blue-200/50">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span>En línea</span>
                </div>
                <div className="flex items-center gap-1">
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