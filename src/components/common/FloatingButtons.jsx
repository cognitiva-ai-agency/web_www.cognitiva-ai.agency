"use client";
import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { BRAND } from "@/lib/utils/constants";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Botón de WhatsApp */}
      <a
        href={BRAND.whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        aria-label="Hablar por WhatsApp"
      >
        <img
          src="/WhatsApp4.png"
          alt="WhatsApp"
          className="h-8 w-8"
          style={{ display: "inline-block" }}
        />
      </a>

      {/* Botón volver arriba */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-40"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
