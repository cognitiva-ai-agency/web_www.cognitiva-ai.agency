import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar si estamos en el cliente
 * Útil para evitar problemas de hidratación con contenido dinámico
 * @returns {boolean} true si estamos en el cliente, false en servidor
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Hook para generar valores estables que persisten entre renderizados
 * @param {Function} generator - Función que genera los valores iniciales
 * @param {any} deps - Dependencias para regenerar valores
 * @returns {any} Valores generados de forma estable
 */
export function useStableValues(generator, deps = []) {
  const [values, setValues] = useState(() => {
    // En el servidor, retornar valores vacíos o por defecto
    if (typeof window === 'undefined') {
      return null;
    }
    return generator();
  });

  useEffect(() => {
    // Solo regenerar en el cliente cuando cambien las dependencias
    if (values === null) {
      setValues(generator());
    }
  }, deps);

  return values;
}