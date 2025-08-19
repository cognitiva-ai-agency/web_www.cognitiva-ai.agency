"use client";
import React from "react";
import { BRAND } from "@/lib/utils/businessConstants";

const WhatsAppButton = ({ 
  variant = "default", 
  size = "medium", 
  showText = true, 
  text = "Hablar por WhatsApp",
  subtitle = "Respuesta en <2 min · 24/7",
  showSubtitle = true,
  className = "",
  ...props 
}) => {
  // Variantes de estilo
  const variants = {
    default: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500",
      button: "relative inline-flex items-center justify-center rounded-full border border-green-400/40 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm text-white font-medium tracking-wide hover:bg-gradient-to-r hover:from-green-600/30 hover:to-emerald-600/30 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 group-hover:scale-105"
    },
    solid: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500",
      button: "relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 group-hover:scale-105"
    },
    outline: {
      container: "relative group",
      glow: "absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur-md opacity-0 group-hover:opacity-25 transition-all duration-500",
      button: "relative inline-flex items-center justify-center rounded-full border border-green-400/40 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm text-white font-light hover:bg-gradient-to-r hover:from-green-600/30 hover:to-emerald-600/30 hover:border-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.2)] transition-all duration-300 group-hover:scale-105"
    },
    minimal: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300",
      button: "relative flex items-center justify-center rounded-2xl bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 text-white font-light transition-transform duration-300 group-hover:scale-105"
    },
    circular: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur-lg opacity-35 group-hover:opacity-55 transition-all duration-500",
      button: "relative flex items-center justify-center rounded-full border border-green-400/40 bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm text-white hover:bg-gradient-to-br hover:from-green-600/40 hover:to-emerald-600/40 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300 group-hover:scale-110"
    },
    floating: {
      container: "relative group",
      glow: "",
      button: "relative flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110"
    }
  };

  // Tamaños
  const sizes = {
    small: {
      button: "gap-1 px-3 py-2 text-xs",
      icon: "h-5 w-5",
      width: "w-auto",
      height: "h-8"
    },
    medium: {
      button: "gap-2 px-5 py-2.5 text-sm",
      icon: "h-6 w-6",
      width: "w-full",
      height: "h-12 sm:h-14"
    },
    large: {
      button: "gap-2 px-6 py-4 text-base",
      icon: "h-7 w-7",
      width: "w-full",
      height: "h-14"
    },
    circular: {
      button: "p-0",
      icon: "h-10 w-10",
      width: "w-14",
      height: "h-14"
    },
    floating: {
      button: "p-3",
      icon: "h-6 w-6",
      width: "w-auto",
      height: "h-auto"
    }
  };

  const variantStyle = variants[variant] || variants.default;
  const sizeStyle = sizes[size] || sizes.medium;

  return (
    <div className={`${variantStyle.container} ${className}`}>
      {variantStyle.glow && <div className={variantStyle.glow} />}
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variantStyle.button} ${sizeStyle.button} ${sizeStyle.width} ${sizeStyle.height} tracking-wide`}
        aria-label={`Hablar por WhatsApp ahora - ${subtitle}`}
        {...props}
      >
        <img 
          src="/WhatsApp4.png" 
          alt="WhatsApp" 
          className={`${sizeStyle.icon} ${!showText ? '' : 'flex-shrink-0'} ${!showText && size === 'circular' ? 'mr-0' : showText ? 'mr-2' : ''}`} 
        />
        {showText && <span>{text}</span>}
      </a>
      {showSubtitle && showText && variant !== 'floating' && (
        <div className="mt-2 text-center">
          <p className="text-xs text-green-300/70">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;