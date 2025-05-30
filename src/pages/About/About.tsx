import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      const sections = aboutRef.current.querySelectorAll(".about-section");

      sections.forEach((section, i) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.3,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={aboutRef}
      className="bg-white py-16 px-6 md:px-20 text-gray-800"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold text-center mb-6">Sobre la Educación Docente</h2>

        <div className="about-section bg-blue-50 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Formación Continua</h3>
          <p>
            La formación permanente es esencial para que los docentes se adapten a los cambios sociales, tecnológicos y pedagógicos. Invertir en capacitación significa mejorar la calidad educativa.
          </p>
        </div>

        <div className="about-section bg-green-50 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Metodologías Activas</h3>
          <p>
            Estrategias como el aprendizaje basado en proyectos, el trabajo colaborativo y el aula invertida fomentan un rol activo del estudiante y una enseñanza más significativa.
          </p>
        </div>

        <div className="about-section bg-yellow-50 p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Habilidades del Siglo XXI</h3>
          <p>
            Los docentes deben desarrollar competencias digitales, pensamiento crítico, comunicación efectiva y empatía para preparar a sus estudiantes para el futuro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
