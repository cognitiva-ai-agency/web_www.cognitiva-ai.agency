'use client';
 
import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
 
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error);
  }, [error]);
 
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-red-500/20 p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                Error Crítico
              </h1>
              <p className="text-gray-300 text-sm mb-4">
                Ha ocurrido un error crítico en la aplicación. 
                Nuestro equipo ha sido notificado automáticamente.
              </p>
              
              {/* Información del error en desarrollo */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4 text-left">
                  <p className="text-red-400 text-xs font-mono">
                    {error?.message || 'Error desconocido'}
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => reset()}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <RefreshCw className="w-4 h-4" />
                Recargar aplicación
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <Home className="w-4 h-4" />
                Ir al inicio
              </button>
              
              <a
                href="mailto:cognitivaspa@gmail.com?subject=Error%20Crítico%20en%20Cognitiva%20AI"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                <Mail className="w-4 h-4" />
                Reportar error
              </a>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-400">
                Error ID: {Date.now().toString(36)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Cognitiva AI - Soporte técnico disponible 24/7
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}