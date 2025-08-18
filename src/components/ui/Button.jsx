"use client";
import React from "react";
import { clsx } from "clsx";

const variants = {
  primary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-lg hover:shadow-xl",
  secondary: "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
  subtle: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  warning: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600",
  dark: "bg-gray-900 text-white hover:bg-gray-800",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "", 
  as = "button",
  ...props 
}) {
  const Component = as;
  
  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform hover:scale-105",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}