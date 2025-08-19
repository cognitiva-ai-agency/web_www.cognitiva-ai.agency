"use client";
import React from "react";
import { BRAND } from "@/lib/utils/businessConstants";

const DemoButton = ({ 
  variant = "default", 
  size = "medium", 
  showText = true, 
  text = "Ver Demo de 30 min",
  subtitle = "Agenda inmediata · Caso de tu industria",
  showSubtitle = true,
  className = "",
  ...props 
}) => {
  // Variantes de estilo
  const variants = {
    default: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500",
      button: "relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover:scale-105"
    },
    outline: {
      container: "relative group",
      glow: "absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-25 transition-all duration-500",
      button: "relative inline-flex items-center justify-center rounded-full border border-blue-400/40 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm text-white font-light hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-cyan-500/30 hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all duration-300 group-hover:scale-105"
    },
    minimal: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300",
      button: "relative flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium transition-transform duration-300 group-hover:scale-105"
    },
    circular: {
      container: "relative group",
      glow: "absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-35 group-hover:opacity-55 transition-all duration-500",
      button: "relative flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover:scale-110"
    },
    floating: {
      container: "relative group",
      glow: "",
      button: "relative flex items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all hover:scale-110"
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
        href={BRAND.calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`${variantStyle.button} ${sizeStyle.button} ${sizeStyle.width} ${sizeStyle.height} tracking-wide`}
        aria-label={`Agendar demo 30 min - ${subtitle}`}
        {...props}
      >
        <img 
          src="/GoogleMeet.png" 
          alt="Google Meet" 
          className={`${sizeStyle.icon} ${!showText ? '' : 'flex-shrink-0'} ${!showText && size === 'circular' ? 'mr-0' : showText ? 'mr-2' : ''}`} 
        />
        {showText && <span>{text}</span>}
      </a>
      {showSubtitle && showText && (
        <div className="mt-2 text-center">
          <p className="text-xs text-cyan-300/70">{subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default DemoButton;