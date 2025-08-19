/**
 * Dropdown - Componente dropdown reutilizable
 * Sistema de dropdown con soporte para móvil y desktop
 */

"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { colors, borderRadius, shadows, zIndex } from '@/lib/design-system/designTokens';

const Dropdown = ({
  trigger,
  children,
  isOpen,
  onToggle,
  className = '',
  dropdownClassName = '',
  position = 'bottom-left',
  closeOnItemClick = true,
  disabled = false,
}) => {
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onToggle]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onToggle(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onToggle]);

  const handleTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      onToggle(!isOpen);
    }
  };

  const handleItemClick = (callback) => {
    return (e) => {
      if (closeOnItemClick) {
        onToggle(false);
      }
      if (callback) {
        callback(e);
      }
    };
  };

  const getPositionClasses = () => {
    const positions = {
      'bottom-left': 'top-full left-0 mt-2',
      'bottom-right': 'top-full right-0 mt-2',
      'bottom-center': 'top-full left-1/2 -translate-x-1/2 mt-2',
      'top-left': 'bottom-full left-0 mb-2',
      'top-right': 'bottom-full right-0 mb-2',
    };
    return positions[position] || positions['bottom-left'];
  };

  return (
    <div className={`relative ${className}`}>
      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        className={`cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleTriggerClick(e);
          }
        }}
      >
        {trigger}
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`
            absolute ${getPositionClasses()} 
            min-w-max z-${zIndex.dropdown}
            bg-[#0B1220] backdrop-blur-xl 
            border border-white/10 rounded-2xl 
            shadow-[0_20px_50px_rgba(59,130,246,0.25)] 
            overflow-hidden
            animate-slide-down
            ${dropdownClassName}
          `}
          role="menu"
          aria-orientation="vertical"
        >
          {/* Fondo con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-500/5 pointer-events-none" />
          
          {/* Contenido */}
          <div className="relative p-2">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  onClick: handleItemClick(child.props.onClick),
                  role: 'menuitem',
                  tabIndex: 0,
                });
              }
              return child;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente para items del dropdown
export const DropdownItem = ({
  children,
  icon: Icon,
  href,
  onClick,
  className = '',
  disabled = false,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    // Si es un enlace de servicio específico, hacer scroll a la sección
    if (href && href.startsWith('#servicios-')) {
      setTimeout(() => {
        const serviciosElement = document.getElementById('servicios');
        if (serviciosElement) {
          serviciosElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Pequeño delay para que el hash se actualice primero
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  const baseClasses = `
    flex items-center gap-3 px-4 py-3 rounded-xl 
    hover:bg-white/5 transition-all duration-300 
    group/item cursor-pointer
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  const content = (
    <>
      {Icon && (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
          <Icon className="h-4 w-4 text-cyan-400" />
        </div>
      )}
      <span className="text-sm font-light text-blue-100/90 group-hover/item:text-white transition-colors duration-300">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={baseClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {content}
    </div>
  );
};

// Hook para gestionar estado del dropdown
export const useDropdown = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = (state) => {
    setIsOpen(typeof state === 'boolean' ? state : !isOpen);
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    open,
    close,
  };
};

export default Dropdown;