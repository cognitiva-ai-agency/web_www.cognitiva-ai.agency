"use client";
import React from "react";
import { Button } from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  bullets = [],
  cta,
  onCtaClick,
  className = "",
}) {
  return (
    <article
      className={[
        "relative rounded-3xl p-[1px] transition-all duration-300",
        // Borde degradado vivo + glow suave,
        "bg-[linear-gradient(135deg,rgba(59,130,246,0.35),rgba(16,185,129,0.25))]",
        "hover:shadow-[0_22px_80px_rgba(37,99,235,0.35)]",
        className,
      ].join(" ")}
    >
      {/* Capa interior */}
      <div className="rounded-3xl h-full w-full bg-gradient-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#101010] p-6 md:p-7">
        {/* Glow spot al hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Icono en badge */}
        {Icon && (
          <div className="h-12 w-12 rounded-2xl bg-[#0d0d0d]/80 border border-gray-500/20 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-200" />
          </div>
        )}

        {/* Título */}
        <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>

        {/* Bullets con icono */}
        {bullets?.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-blue-100/95">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA centrado con iluminación */}
        {cta && (
          <div className="mt-6 flex justify-center">
            <Button
              variant="secondary"
              className="rounded-full border border-blue-400/25 bg-[#0d0d0d]/80 px-6 py-3 text-sm font-medium
                         transition-all duration-300
                         hover:bg-gray-700/70
                         hover:shadow-[0_0_22px_rgba(59,130,246,0.75)]
                         hover:ring-2 hover:ring-blue-400/50"
              onClick={onCtaClick}
            >
              {cta}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}
