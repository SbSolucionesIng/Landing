import React, { useState } from "react";
import {
  Card, CardBody, CardFooter, Typography, Button,
} from "@material-tailwind/react";
import {
  BuildingStorefrontIcon, ShoppingBagIcon, BriefcaseIcon, GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ITEMS = [
  {
    id: "restaurant-basic",
    title: "Restaurant Basic",
    category: "Food & Beverage",
    icon: BuildingStorefrontIcon,
    description: "Landing con menú, galería y reservas. Ideal restaurantes y cafés.",
    img: "/img/templates/restaurant.jpg",
    demoUrl: "/templates/restaurant-basic/index.html",
    downloadUrl: "#",
    badge: "Popular",
  },
  {
    id: "ecommerce-lite",
    title: "E-commerce Lite",
    category: "Retail",
    icon: ShoppingBagIcon,
    description: "Catálogo + detalle + contacto. Perfecto para tiendas chicas.",
    img: "/img/templates/ecommerce.jpg",
    demoUrl: "/templates/ecommerce-lite/index.html",
    downloadUrl: "#",
  },
  {
    id: "services-pro",
    title: "Services Pro",
    category: "Professional",
    icon: BriefcaseIcon,
    description: "Servicios, pricing, testimonios y contacto.",
    img: "/img/templates/services.jpg",
    demoUrl: "/templates/services-pro/index.html",
    downloadUrl: "#",
    badge: "New",
  },
  {
    id: "portfolio-one",
    title: "Portfolio One",
    category: "Personal / Agency",
    icon: GlobeAltIcon,
    description: "Hero + grilla de proyectos + about + contacto.",
    img: "/img/templates/portfolio.jpg",
    demoUrl: "/templates/portfolio-one/index.html",
    downloadUrl: "#",
  },
];

export default function Offerings() {
  const [previewUrl, setPreviewUrl] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* HERO con video + logo + volver */}
      <section className="relative flex h-[60vh] min-h-[420px] items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Botón Volver */}
        <div className="absolute top-6 left-6 z-20">
          <Link to="/">
            <Button
              variant="outlined"
              className="border-white text-white hover:bg-white hover:text-[#0047AB] transition-colors"
              size="sm"
            >
              ← Volver
            </Button>
          </Link>
        </div>

        {/* Contenido central con logo */}
        <div className="relative z-20 text-center px-4">
          <img
            src="/img/logonuevo7-sinfondo.png"
            alt="Logo SB"
            className="mx-auto w-40 md:w-48 mb-4"
          />
          <Typography variant="h2" color="white" className="font-black">
            Templates & Offerings
          </Typography>
          <Typography variant="lead" color="white" className="opacity-90 mt-3 max-w-2xl mx-auto">
            Elegí una plantilla, mirá la demo y descargá para adaptarla a tu negocio.
          </Typography>
        </div>
      </section>

      {/* GRID de templates (sin filtros/buscador) */}
      <section className="py-12 px-4">
        <div className="grid max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map(({ id, title, category, description, icon, img, demoUrl, downloadUrl, badge }) => (
            <Card
              key={id}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Cover */}
              <div className="relative h-44 bg-blue-50">
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : null}

                {/* Ícono fallback */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-[#0047AB] shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform">
                    {React.createElement(icon, { className: "h-7 w-7 text-white" })}
                  </div>
                </div>

                {badge && (
                  <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-white/90 text-[#0047AB] border border-[#0047AB]/20">
                    {badge}
                  </span>
                )}
              </div>

              <CardBody className="space-y-2">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" className="font-bold text-blue-gray-900">
                    {title}
                  </Typography>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-[#0047AB] border border-[#0047AB]/20">
                    {category}
                  </span>
                </div>
                <Typography className="text-blue-gray-700">{description}</Typography>
              </CardBody>

              <CardFooter className="pt-0 flex gap-3">
                <Button
                  className="flex-1 bg-[#0047AB] hover:bg-[#003b91] transition-colors"
                  onClick={() => setPreviewUrl(demoUrl)}
                >
                  View Demo
                </Button>
                <a href={downloadUrl} target="_blank" rel="noreferrer" className="flex-1">
                  <Button
                    variant="outlined"
                    className="w-full border-[#0047AB] text-[#0047AB] hover:bg-[#0047AB] hover:text-white transition-colors"
                  >
                    Download
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* MODAL de preview (iframe) */}
      {previewUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewUrl("")}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 bg-white/90 border border-blue-gray-100 rounded-lg px-3 py-1 text-sm text-blue-gray-700 hover:bg-blue-gray-50"
              onClick={() => setPreviewUrl("")}
            >
              Close
            </button>
            <iframe src={previewUrl} title="Template preview" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}



