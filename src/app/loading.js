import { Loader2, Bot } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
        <div className="mb-6">
          {/* Logo animado */}
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse opacity-20"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-white mb-2">
            Cargando Cognitiva AI
          </h2>
          <p className="text-gray-300 text-sm mb-6">
            Preparando tu experiencia de IA...
          </p>
        </div>
        
        {/* Spinner de carga */}
        <div className="flex items-center justify-center mb-6">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
        </div>
        
        {/* Barra de progreso animada */}
        <div className="w-full bg-gray-700/50 rounded-full h-2 mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
        
        <p className="text-xs text-gray-400">
          Inteligencia artificial cargando...
        </p>
      </div>
    </div>
  );
}