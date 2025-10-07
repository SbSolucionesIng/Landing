import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  Typography,
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import {
  BriefcaseIcon,
  ChartBarIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
// ⬇️ usa ruta relativa en vez de "@/widgets/layout"
import { Footer } from "../widgets/layout";

const contactData = [
  {
    title: "Excelente Servicio",
    icon: BriefcaseIcon,
    description:
      "Te ofrecemos soporte técnico confiable y soluciones de software personalizadas para que tu negocio crezca sin complicaciones.",
  },
  {
    title: "Amplia tu Mercado",
    icon: ChartBarIcon,
    description:
      "Impulsá tu negocio con soluciones digitales que amplían tu alcance y mejoran la eficiencia.",
  },
  {
    title: "Momento de lanzamiento",
    icon: PlayIcon,
    description:
      "Convertimos tus ideas en realidad de forma rápida y eficiente, llevando tu producto al mercado rapidamente.",
  },
];

export function Home() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        >
          <source src="/img/2.mp4" type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>
        <div className="absolute top-0 h-full w-full bg-black/60 z-10" />
        <div className="max-w-8xl container relative flex flex-col items-center gap-4 z-20">
          <img src="/img/logonuevo7-sinfondo.png" alt="Logo SB" className="w-56" />
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-6 font-black">
                Tu historia empieza con nosotros.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Desarrollamos aplicaciones, sitios web y sistemas a medida para simplificar tu trabajo y hacer crecer tu negocio.
  En SB Soluciones Ingeniería ofrecemos soluciones confiables y soporte personalizado, con atención cercana y a tu medida.
              </Typography>

              {/* Botón premium → /offerings */}
              <div className="mt-8">
                <Link to="/offerings" className="inline-block">
                  <button
                    className="
                      relative inline-flex items-center justify-center px-8 py-3 rounded-xl
                      font-semibold text-white
                      bg-gradient-to-r from-[#0047AB] via-[#0a58cb] to-[#0047AB]
                      shadow-lg shadow-blue-900/30
                      transition-all duration-300
                      hover:scale-[1.02] hover:shadow-blue-900/40
                      focus:outline-none
                    "
                  >
                    <span className="relative z-10">Ver nuestros diseños</span>
                    <span
                      className="pointer-events-none absolute inset-0 rounded-xl"
                      style={{
                        background:
                          "radial-gradient(120px 60px at 10% -10%, rgba(255,255,255,0.35), transparent 60%)",
                      }}
                    />
                  </button>
                </Link>
              </div>
              {/* /Botón premium */}
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">Co - Working</Typography>
            <Typography variant="h2" color="#ffffff" className="my-3">
              Crea algo con nosotros
            </Typography>
            <Typography variant="lead" className="text-gray-800">
              Desde la idea inicial hasta el producto final, transformamos tu visión en soluciones inteligentes
              adaptadas a las necesidades de tu negocio.
            </Typography>
          </div>

          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-gray-800"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-[#0047AB] shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-gray-800">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>

          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <Typography variant="lead" className="font-semibold">Contact Us</Typography>
            <Typography variant="h2" color="blue-gray" className="my-3">
              Quieres trabajar con nosotros? <br />Contacta al equipo detrás del código.
            </Typography>
            <Typography variant="lead" className="text-gray-800">
              Completá este formulario y nos pondremos en contacto con vos dentro de las próximas 24 horas.
            </Typography>
          </div>

          <form
            className="mx-auto w-full mt-12 lg:w-5/12"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;

              fetch("https://formsubmit.co/ajax/sb.soluciones.juy@gmail.com", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                }),
              })
                .then((response) => {
                  if (response.ok) {
                    setMessageSent(true);
                    form.reset();
                  }
                })
                .catch((error) => console.error("Error:", error));
            }}
          >
            <div className="mb-8 flex gap-8">
              <Input
                variant="outlined"
                size="lg"
                label="Nombre completo"
                name="name"
                required
              />
              <Input
                variant="outlined"
                size="lg"
                label="Email "
                name="email"
                type="email"
                required
              />
            </div>

            <Textarea
              variant="outlined"
              size="lg"
              label="Dinos tu idea!"
              rows={8}
              name="message"
              required
            />

            <Button
              className="bg-[#0047AB] text-white mt-8 hover:bg-[#003b91] transition-colors duration-300"
              variant="filled"
              size="lg"
              fullWidth
              type="submit"
            >
              Enviar Mensaje
            </Button>

            {messageSent && (
              <p className="text-green-600 font-medium mt-4 text-center">
                ✅ ¡Gracias por contactarnos! Tu mensaje se envió con éxito y pronto te responderemos!
              </p>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;



