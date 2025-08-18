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
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
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