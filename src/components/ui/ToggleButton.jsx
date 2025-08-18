import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ToggleButton({ 
  isOpen, 
  variant = 'default',
  size = 'md',
  className = '' 
}) {
  const variants = {
    default: 'bg-cyan-500/20 border-cyan-400/30 hover:bg-cyan-400/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
    blue: 'bg-blue-500/20 border-blue-400/30 hover:bg-blue-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]',
    gradient: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-white/20 hover:from-blue-400/30 hover:to-cyan-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]'
  };

  const sizes = {
    sm: 'w-5 h-5 sm:w-6 sm:h-6',
    md: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8',
    lg: 'w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10'
  };

  const iconSizes = {
    sm: 'h-2.5 w-2.5 sm:h-3 sm:w-3',
    md: 'h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4',
    lg: 'h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5'
  };

  return (
    <div 
      className={`flex items-center justify-center ${sizes[size]} rounded-full border transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {isOpen ? (
        <Minus className={`${iconSizes[size]} text-cyan-300`} />
      ) : (
        <Plus className={`${iconSizes[size]} text-cyan-300`} />
      )}
    </div>
  );
}