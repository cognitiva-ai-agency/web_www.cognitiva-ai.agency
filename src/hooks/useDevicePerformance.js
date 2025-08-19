"use client";
import { useState, useEffect } from 'react';

export function useDevicePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkPerformance = () => {
      // Detectar móviles
      const isMobileDevice = window.innerWidth <= 768 || 
                            'ontouchstart' in window || 
                            navigator.maxTouchPoints > 0;
      
      setIsMobile(isMobileDevice);

      if (!isMobileDevice) {
        setIsLowPerformance(false);
        return;
      }

      // Detectar dispositivos de bajo rendimiento
      let lowPerformanceScore = 0;

      // Factor 1: RAM disponible (si está disponible)
      if (navigator.deviceMemory && navigator.deviceMemory <= 4) {
        lowPerformanceScore += 2;
      }

      // Factor 2: Número de cores del CPU
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
        lowPerformanceScore += 1;
      }

      // Factor 3: User agent (dispositivos antiguos)
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('android') && !userAgent.includes('chrome/1')) {
        lowPerformanceScore += 1;
      }

      // Factor 4: Test de performance simple
      const start = performance.now();
      for (let i = 0; i < 100000; i++) {
        Math.random();
      }
      const duration = performance.now() - start;
      
      if (duration > 10) { // Si toma más de 10ms
        lowPerformanceScore += 2;
      }

      // Factor 5: Ancho de banda de red (si está disponible)
      if (navigator.connection && navigator.connection.effectiveType) {
        const connectionType = navigator.connection.effectiveType;
        if (connectionType === 'slow-2g' || connectionType === '2g') {
          lowPerformanceScore += 1;
        }
      }

      setIsLowPerformance(lowPerformanceScore >= 3);
    };

    checkPerformance();

    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { 
    isLowPerformance, 
    isMobile,
    // Configuraciones basadas en performance - más conservadoras para mantener efectos visuales
    shouldReduceAnimations: isLowPerformance,
    shouldReduceEffects: isLowPerformance, // Solo en dispositivos realmente lentos
    maxParticles: isLowPerformance ? 3 : isMobile ? 10 : 15,
    animationDuration: isLowPerformance ? 'fast' : isMobile ? 'medium' : 'normal'
  };
}

export default useDevicePerformance;