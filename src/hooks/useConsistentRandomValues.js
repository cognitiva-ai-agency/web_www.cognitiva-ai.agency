import { useMemo } from 'react';

export function useConsistentRandomValues(count, seed = 0) {
  return useMemo(() => {
    // Generador pseudoaleatorio con seed fijo
    let seedValue = seed;
    const seededRandom = () => {
      seedValue = (seedValue * 9301 + 49297) % 233280;
      return seedValue / 233280;
    };

    return Array.from({ length: count }, () => ({
      left: seededRandom() * 100,
      top: seededRandom() * 100,
      x1: seededRandom() * 100,
      y1: seededRandom() * 100,
      x2: seededRandom() * 100,
      y2: seededRandom() * 100,
      delay: seededRandom() * 10,
      duration: 10 + seededRandom() * 20,
      value: Math.floor(seededRandom() * 2), // Para 0s y 1s
    }));
  }, [count, seed]);
}

export default useConsistentRandomValues;