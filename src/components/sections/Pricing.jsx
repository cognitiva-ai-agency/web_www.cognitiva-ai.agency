"use client";
import React from "react";
import { Button } from "@/components/ui/ReusableComponents";
import useScrollBasedAnimation from "../../hooks/useScrollBasedAnimation";

const PLANS = [
	{
		name: "Emprende",
		subtitle: "Para negocios pequeños y medianos",
		features: [
			"Fee de implementación único (según tamaño)",
			"Comisión por venta generada",
			"Sin costos mensuales fijos",
			"Automatización de ventas y atención",
			"Soporte básico incluido",
		],
		highlighted: false,
		cta: "Solicitar Cotización",
	},
	{
		name: "Escala",
		subtitle: "Para empresas en crecimiento",
		features: [
			"Fee de implementación ajustado",
			"Comisión por venta generada",
			"Upsells mensuales opcionales",
			"Integraciones avanzadas",
			"Soporte prioritario",
		],
		highlighted: true,
		cta: "Solicitar Cotización",
	},
	{
		name: "Enterprise",
		subtitle: "Soluciones a medida para grandes empresas",
		features: [
			"Fee de implementación personalizado",
			"Comisión por venta generada",
			"Servicios mensuales adicionales (upsell)",
			"Desarrollo y soporte dedicado",
			"Account Manager",
		],
		highlighted: false,
		cta: "Contactar Ventas",
	},
];

export default function Pricing() {
	const { ref } = useScrollBasedAnimation();

	return (
		<section id="precios" className="py-20 bg-white">
			<div ref={ref} className="container-padded animate-in">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold mb-3">
						Planes flexibles, tú solo pagas por resultados
					</h2>
					<p className="text-xl text-gray-600">
						Fee de implementación único + comisión por venta. Upsells mensuales
						opcionales según tus necesidades.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{PLANS.map((p) => (
						<div
							key={p.name}
							className={
								p.highlighted
									? "bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white transform md:scale-105"
									: "bg-white rounded-2xl shadow-lg p-8"
							}
						>
							{p.highlighted && (
								<div className="flex justify-center -mt-10 mb-2">
									<span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1 rounded-full shadow">
										MÁS POPULAR
									</span>
								</div>
							)}
							<h3 className="text-2xl font-bold mb-2">{p.name}</h3>
							<p
								className={
									p.highlighted ? "opacity-90 mb-6" : "text-gray-600 mb-6"
								}
							>
								{p.subtitle}
							</p>
							<div className="mb-6">
								<span className="text-lg font-semibold block mb-2">
									Fee de implementación único
								</span>
								<span className="text-lg font-semibold block mb-2">
									Comisión por venta generada
								</span>
								<span className="text-sm text-gray-400">
									* El fee depende del tamaño y necesidades del negocio
								</span>
							</div>
							<ul className="space-y-3 mb-8">
								{p.features.map((f) => (
									<li key={f} className="flex items-start gap-2">
										<span className="mt-2 h-2 w-2 rounded-full bg-green-400"></span>
										<span
											className={
												p.highlighted ? "" : "text-gray-700"
											}
										>
											{f}
										</span>
									</li>
								))}
							</ul>
							<Button
								variant={
									p.highlighted
										? "warning"
										: p.name === "Enterprise"
										? "dark"
										: "subtle"
								}
								className="w-full"
							>
								{p.cta}
							</Button>
						</div>
					))}
				</div>
				<div className="text-center mt-10 text-gray-500 text-sm">
					¿Tienes dudas sobre el modelo de comisión o los upsells? <br />
					<span className="font-semibold">
						Contáctanos y te asesoramos sin compromiso.
					</span>
				</div>
			</div>
		</section>
	);
}
