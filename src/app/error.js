'use client';
 
import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Oops! Algo salió mal
          </h1>
          <p className="text-gray-300 text-sm">
            Ha ocurrido un error inesperado. Por favor intenta nuevamente.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Intentar nuevamente
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </button>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400">
            Si el problema persiste, contacta nuestro soporte técnico
          </p>
        </div>
      </div>
    </div>
  );
}