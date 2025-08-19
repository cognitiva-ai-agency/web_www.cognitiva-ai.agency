/**
 * Hook personalizado para gestos de swipe/deslizamiento táctil
 * Diseñado para interfaces móviles intuitivas con soporte completo para touch y mouse
 */

"use client";
import { useRef, useCallback, useEffect } from 'react';

const useSwipeGestures = ({ 
  onSwipeLeft, 
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50, // Distancia mínima para considerar un swipe
  restraint = 100, // Máxima distancia perpendicular permitida
  allowedTime = 300, // Tiempo máximo para completar el gesto
  preventScrollOnTouch = false // Prevenir scroll durante el touch
}) => {
  const elementRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchTimeRef = useRef(null);

  const handleTouchStart = useCallback((e) => {
    // No procesar swipes si el usuario está tocando un botón, enlace o elemento interactivo
    const target = e.target.closest('button, a, input, select, textarea, [role="button"]');
    if (target) {
      return;
    }

    const touch = e.changedTouches[0];
    touchStartRef.current = {
      x: touch.pageX,
      y: touch.pageY
    };
    touchTimeRef.current = new Date().getTime();
    
    if (preventScrollOnTouch) {
      e.preventDefault();
    }
  }, [preventScrollOnTouch]);

  const handleTouchEnd = useCallback((e) => {
    if (!touchStartRef.current || !touchTimeRef.current) return;

    // No procesar swipes si el usuario está tocando un botón, enlace o elemento interactivo
    const target = e.target.closest('button, a, input, select, textarea, [role="button"]');
    if (target) {
      // Limpiar referencias y permitir el comportamiento normal del botón
      touchStartRef.current = null;
      touchTimeRef.current = null;
      return;
    }

    const touch = e.changedTouches[0];
    const touchEndTime = new Date().getTime();
    const elapsedTime = touchEndTime - touchTimeRef.current;

    // Verificar si el gesto fue lo suficientemente rápido
    if (elapsedTime <= allowedTime) {
      const distX = touch.pageX - touchStartRef.current.x;
      const distY = touch.pageY - touchStartRef.current.y;
      const absDistX = Math.abs(distX);
      const absDistY = Math.abs(distY);

      // Swipe horizontal (izquierda/derecha)
      if (absDistX >= threshold && absDistY <= restraint) {
        e.preventDefault();
        if (distX < 0 && onSwipeLeft) {
          onSwipeLeft(e);
        } else if (distX > 0 && onSwipeRight) {
          onSwipeRight(e);
        }
      }
      // Swipe vertical (arriba/abajo)
      else if (absDistY >= threshold && absDistX <= restraint) {
        e.preventDefault();
        if (distY < 0 && onSwipeUp) {
          onSwipeUp(e);
        } else if (distY > 0 && onSwipeDown) {
          onSwipeDown(e);
        }
      }
    }

    // Limpiar referencias
    touchStartRef.current = null;
    touchTimeRef.current = null;
  }, [threshold, restraint, allowedTime, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  // Soporte para mouse (para testing en desktop)
  const handleMouseDown = useCallback((e) => {
    touchStartRef.current = {
      x: e.pageX,
      y: e.pageY
    };
    touchTimeRef.current = new Date().getTime();
  }, []);

  const handleMouseUp = useCallback((e) => {
    if (!touchStartRef.current || !touchTimeRef.current) return;

    const mouseEndTime = new Date().getTime();
    const elapsedTime = mouseEndTime - touchTimeRef.current;

    if (elapsedTime <= allowedTime) {
      const distX = e.pageX - touchStartRef.current.x;
      const distY = e.pageY - touchStartRef.current.y;
      const absDistX = Math.abs(distX);
      const absDistY = Math.abs(distY);

      // Swipe horizontal
      if (absDistX >= threshold && absDistY <= restraint) {
        if (distX < 0 && onSwipeLeft) {
          onSwipeLeft(e);
        } else if (distX > 0 && onSwipeRight) {
          onSwipeRight(e);
        }
      }
      // Swipe vertical
      else if (absDistY >= threshold && absDistX <= restraint) {
        if (distY < 0 && onSwipeUp) {
          onSwipeUp(e);
        } else if (distY > 0 && onSwipeDown) {
          onSwipeDown(e);
        }
      }
    }

    touchStartRef.current = null;
    touchTimeRef.current = null;
  }, [threshold, restraint, allowedTime, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Touch events
    element.addEventListener('touchstart', handleTouchStart, { passive: !preventScrollOnTouch });
    element.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Mouse events para testing en desktop
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseup', handleMouseUp);

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchend', handleTouchEnd);
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleTouchStart, handleTouchEnd, handleMouseDown, handleMouseUp]);

  return elementRef;
};

export default useSwipeGestures;