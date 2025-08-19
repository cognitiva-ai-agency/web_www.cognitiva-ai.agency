"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { BRAND } from "@/lib/utils/businessConstants";
import DemoButton from "@/components/ui/DemoButton";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FloatingActionButtons() {
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => setShowTop(window.scrollY > 300);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Botón de Google Meet Demo - Esquina inferior izquierda (móvil y desktop) */}
      <div className="fixed bottom-20 left-6 z-40">
        <DemoButton 
          variant="floating"
          size="floating"
          showText={false}
          showSubtitle={false}
          className="hover:scale-110"
        />
      </div>

      {/* Botón de WhatsApp - Derecha */}
      <div className="fixed bottom-20 right-6 z-40">
        <WhatsAppButton 
          variant="floating"
          size="floating"
          showText={false}
          showSubtitle={false}
          className="hover:scale-110"
        />
      </div>

      {/* Botón volver arriba */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 bg-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-slate-600 transition-all z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
