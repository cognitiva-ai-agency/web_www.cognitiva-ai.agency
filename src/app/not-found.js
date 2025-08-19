'use client';

import Link from 'next/link';
import { FileX, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileX className="w-10 h-10 text-blue-400" />
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Página no encontrada
          </h2>
          <p className="text-gray-300">
            La página que buscas no existe o ha sido movida. 
            Verifica la URL o regresa al inicio.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-blue-500/25"
          >
            <Home className="w-5 h-5" />
            Ir al inicio
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <Search className="w-5 h-5" />
            Volver atrás
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400">
            ¿Necesitas ayuda? 
            <Link 
              href="/#contacto" 
              className="text-blue-400 hover:text-blue-300 ml-1 underline"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}