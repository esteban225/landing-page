import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false); // estado para el Snackbar

  useEffect(() => {
    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll(".contact-animate");

      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  const handleSend = () => {
    setOpen(true); // mostrar alerta
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <section
      ref={contactRef}
      className="bg-white py-16 px-6 md:px-20 text-gray-800"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center contact-animate">
          Contáctanos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 contact-animate">
          {/* Información de contacto */}
          <div className="space-y-6">
            <p>
              ¿Tienes dudas sobre formación docente o deseas colaborar con
              nosotros? Escríbenos o completa el formulario y nos pondremos en
              contacto.
            </p>
            <div>
              <p>
                <strong>Email:</strong> educacion@gmail.com
              </p>
              <p>
                <strong>Teléfono:</strong> +37 000 000 0000
              </p>
              <p>
                <strong>Dirección:</strong> Calle a la mejor Educación
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form className="space-y-4 bg-white p-6 rounded-2xl shadow-md contact-animate">
            <div>
              <label className="block text-sm font-medium">Nombre</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Mensaje</label>
              <textarea
                rows={4}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={handleSend}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Snackbar con alerta */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" onClose={handleClose}>
          <AlertTitle>Éxito</AlertTitle>
          Tu mensaje ha sido enviado correctamente.
        </Alert>
      </Snackbar>
    </section>
  );
};

export default Contact;
