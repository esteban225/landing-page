"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function InteractiveServicesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);

      cards.forEach((card) => {
        const el = card as HTMLElement;

        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            y: -10,
            rotateX: 5,
            rotateY: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            y: 0,
            rotateX: 0,
            rotateY: 0,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            duration: 0.4,
            ease: "power2.inOut",
          });
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col justify-center items-center px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Nuestros Servicios
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Interactúa con nuestras tarjetas para descubrir lo que podemos hacer
          por ti.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full"
      >
        {[
          {
            title: "Formación en TIC",
            desc: "Capacitación en herramientas tecnológicas para mejorar la enseñanza.",
            icon: "💻",
          },
          {
            title: "Didáctica Innovadora",
            desc: "Estrategias pedagógicas para una enseñanza más efectiva y motivadora.",
            icon: "🧠",
          },
          {
            title: "Evaluación Educativa",
            desc: "Técnicas e instrumentos para evaluar el aprendizaje de forma integral.",
            icon: "📊",
          },
          {
            title: "Educación Inclusiva",
            desc: "Enfoques y recursos para atender la diversidad en el aula.",
            icon: "🤝",
          },
          {
            title: "Gestión del Aula",
            desc: "Herramientas para mejorar la convivencia y el clima escolar.",
            icon: "🏫",
          },
          {
            title: "Desarrollo Profesional Docente",
            desc: "Programas de actualización continua y crecimiento profesional.",
            icon: "📚",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
              cursor: "pointer",
            }}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
