"use client";
import { useEffect, useRef } from "react";
import { addInViewOnIntersect } from "../utils/animations";

// Hook que agrega clase de animación al entrar en viewport
export default function useScrollAnimation() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("animate-in");
    addInViewOnIntersect(el);
  }, []);
  return { ref };
}
