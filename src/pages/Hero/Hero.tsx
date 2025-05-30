"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mountain from "../../assets/img/books.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const aboutCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada general
      gsap.from([titleRef.current, descRef.current, btnsRef.current], {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out",
      });

      // Scroll y parallax
      gsap.to(titleRef.current, {
        scale: 1.05,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(containerRef.current, {
        backgroundPositionY: "30%",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animaciones de tarjetas (Hero)
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        cards.forEach((card, index) => {
          if (index % 2 === 0) {
            gsap.from(card, {
              opacity: 0,
              y: -100,
              rotation: -5,
              scale: 0.8,
              duration: 0.8,
              ease: "elastic.out(1, 0.5)",
              scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reset",
              },
            });
          } else {
            gsap.from(card, {
              opacity: 0,
              x: index % 4 === 1 ? 100 : -100,
              scale: 0.9,
              rotation: index % 4 === 1 ? 3 : -3,
              duration: 0.9,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reset",
              },
            });
          }

          // Hover
          card.addEventListener("mouseenter", () =>
            gsap.to(card, {
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              duration: 0.3,
            })
          );
          card.addEventListener("mouseleave", () =>
            gsap.to(card, {
              scale: 1,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              duration: 0.3,
            })
          );
        });
      }

      // Animaciones de tarjetas (About)
      aboutCardRefs.current.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.to(aboutRef.current, {
        backgroundPositionY: "20%",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const decorators = gsap.utils.toArray(".decorator");
      decorators.forEach((deco) => {
        gsap.to(deco as Element, {
          rotation: 360,
          scrollTrigger: {
            trigger: deco as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="relative bg-cover bg-fixed bg-center min-h-screen px-6 py-32 text-white shadow-xl/30"
        style={{ backgroundImage: `url(${mountain})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 to-purple-900/60 z-0 mix-blend-overlay" />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-12">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl px-10 py-16 shadow-2xl border border-white/10">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md  text-shadow-lg/30"
            >
              La Guía Definitiva para <br className="hidden sm:block" />
              <span className="text-indigo-300 text-shadow-lg/30">
                Profesores Exitosos
              </span>
            </h1>
            <p
              ref={descRef}
              className="mt-6 text-2xl sm:text-xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed"
            >
              Transforma tu práctica docente y alcanza la excelencia. Inspira,
              lidera y evoluciona tu estilo de enseñanza.
            </p>
            <div
              ref={btnsRef}
              className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <a
                href="#"
                className="px-7 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
              >
                Inscríbete ahora
              </a>
              <a
                href="#"
                className="text-lg font-medium underline text-neutral-500 hover:text-white transition duration-300"
              >
                Conoce nuestros programas →
              </a>
            </div>
          </div>

          {/* Frase motivacional */}
          <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-[3px] rounded-2xl shadow-xl">
            <div className="bg-black/70 rounded-2xl px-8 py-10 text-xl sm:text-3xl text-white italic">
              "Cuando el alumno no entiende, el problema no siempre está en el
              alumno."
            </div>
          </div>
        </div>

        {/* Tarjetas educativas */}
        <section className="mt-32">
          <h2 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-lg text-shadow-lg/30">
            Programas de Desarrollo Docente
          </h2>
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4"
          >
            {[
              {
                icon: "📚",
                title: "Formación Continua",
                text: "Cursos especializados para actualizar conocimientos pedagógicos y disciplinares.",
              },
              {
                icon: "💡",
                title: "Innovación Educativa",
                text: "Talleres prácticos sobre metodologías activas y uso de tecnología en el aula.",
              },
              {
                icon: "👥",
                title: "Comunidades de Aprendizaje",
                text: "Espacios colaborativos para compartir experiencias y buenas prácticas docentes.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 leading-relaxed">{card.text}</p>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
              </div>
            ))}
          </div>
        </section>

        {/* Decoradores flotantes */}
        <div className="absolute top-24 left-24 w-16 h-16 rounded-full bg-indigo-400/30 backdrop-blur-md decorator" />
        <div className="absolute bottom-1/4 right-36 w-24 h-24 rounded-full bg-purple-400/30 backdrop-blur-md decorator" />
      </div>

      {/* Sección About integrada */}
      <section
        ref={aboutRef}
        className="relative overflow-hidden min-h-screen bg-gradient-to-b from-blue-100 via-white to-white flex flex-col items-center justify-center px-6 py-28"
      >
        {/* Decoradores flotantes */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-blue-400/30 backdrop-blur-xl rounded-full z-0" />
        <div className="absolute bottom-16 right-20 w-28 h-28 bg-blue-600/20 blur-2xl rounded-full z-0" />
        <div className="absolute top-1/3 right-1/4 w-10 h-10 border-4 border-blue-300 rounded-full z-0" />

        <div className="relative z-10 w-full max-w-5xl grid gap-16">
          {[
            {
              title: (
                <>
                  ¿Qué Define una{" "}
                  <span className="text-blue-900 underline decoration-blue-400/60 underline-offset-4">
                    "Buena Educación"
                  </span>
                  ?
                </>
              ),
              text: (
                <>
                  La enseñanza de calidad no se limita al currículo. Involucra
                  el fomento del{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    pensamiento crítico
                  </span>
                  , la{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    creatividad
                  </span>{" "}
                  y las{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    habilidades sociales
                  </span>
                  .
                </>
              ),
              border: "border-blue-400",
            },
            {
              title: "Más Allá del Currículo Académico",
              text: (
                <>
                  Una educación sólida desarrolla habilidades que permiten a los
                  estudiantes{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    adaptarse y prosperar
                  </span>
                  .
                </>
              ),
              border: "border-blue-500",
            },
            {
              title: "Impacto Duradero en el Aprendizaje",
              text: (
                <>
                  Inspiran la{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    curiosidad
                  </span>
                  , construyen la{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    resiliencia
                  </span>{" "}
                  y fomentan el{" "}
                  <span className="font-semibold text-blue-800 bg-blue-100 px-1 rounded-md">
                    amor por el aprendizaje
                  </span>
                  .
                </>
              ),
              border: "border-blue-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                aboutCardRefs.current[i] = el;
              }}
              className={`bg-white ${item.border} border-l-8 rounded-3xl shadow-xl p-10 transition-all duration-300 hover:-translate-y-1 group relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 text-center leading-snug drop-shadow-sm">
                {item.title}
              </h2>
              <p className="text-center text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
