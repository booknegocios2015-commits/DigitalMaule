import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Star,
  X,
  Check,
  Globe,
  QrCode,
  Smartphone,
  Search,
  Megaphone,
  TrendingUp,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   CONFIG — Editable para clonar a otro rubro/agencia
   ========================================================= */
const CONFIG = {
  brandName: "Maule Digital",
  tagline: "Estudio de presencia digital",
  whatsappNumber: "56950901627",
  whatsappMessage:
    "Hola! Vi la página y me interesa saber más sobre los planes de presencia digital.",
  phoneDisplay: "+56 9 5090 1627",
  address: "Purapel, Los Robles, Cauquenes, Región del Maule",
  email: "hola@mauledigital.cl",
  schedule: "Lunes a Viernes, 09:00 - 19:00 hrs",
  coverage: ["Cauquenes", "Chanco", "Pelluhue", "Talca", "Curicó", "Constitución"],
  map: {
    lat: -35.989822,
    lng: -72.3076872,
  },
  colors: {
    bg: "#F9FAFB",
    primary: "#5B21B6",
    accent: "#FF6B6B",
    whatsapp: "#25D366",
  },
  hero: {
    eyebrow: "💡 Marketing digital con cara y nombre, hecho desde el Maule",
    title: "Tu negocio merece aparecer cuando alguien te busca en Google",
    subtitle:
      "Te ayudamos a que tus clientes te encuentren, confíen en lo que ven, y te escriban directo por WhatsApp. Sin tecnicismos, sin letra chica, con acompañamiento real.",
    ctaPrimary: "Habla con nosotros por WhatsApp",
    ctaSecondary: "Ver los planes",
  },
  before: {
    title: "Hoy, sin presencia digital",
    points: [
      "Tu negocio no aparece cuando alguien busca en Google",
      "No tienes una forma profesional de mostrar lo que haces",
      "Los clientes no saben cómo contactarte rápido",
      "Pierdes oportunidades frente a la competencia",
    ],
  },
  after: {
    title: "Con Maule Digital",
    points: [
      "Apareces en Google Maps con tu ficha completa",
      "Tienes una página propia, profesional y con tu dominio",
      "Un botón directo a WhatsApp para que te escriban al instante",
      "Reseñas reales que generan confianza automática",
    ],
  },
  whyUs: [
    {
      icon: MapPin,
      title: "Hecho desde el Maule, para el Maule",
      text: "Conocemos la zona, los rubros y cómo trabajan los negocios locales. No somos una agencia de Santiago que no conoce tu realidad.",
    },
    {
      icon: MessageCircle,
      title: "Te acompañamos, no te dejamos solo",
      text: "Después de entregar tu página, seguimos ahí: te explicamos cómo usarla, respondemos tus dudas y hacemos ajustes cuando los necesites.",
    },
    {
      icon: TrendingUp,
      title: "Resultados que se pueden medir",
      text: "Cada mes te contamos cuántas personas vieron tu página y cuántas te escribieron por WhatsApp. Sin misterios.",
    },
  ],
  plans: [
    {
      name: "Combo 1",
      label: "Presencia Digital",
      description: "Ideal para comenzar a captar clientes desde Google y WhatsApp",
      price: "$75.990",
      priceNote: "Pago único",
      bonus: "3 meses de mantención GRATIS",
      after: "$4.990 cada 2 meses",
      afterIncludes: ["Hosting", "Dominio", "Soporte técnico", "Actualizaciones básicas"],
      features: [
        "Página web profesional (landing page)",
        "Dominio .CL gratis",
        "Google Business Profile",
        "Configuración en Google Maps",
        "Código QR personalizado",
        "Botón de WhatsApp directo",
        "Diseño adaptado para celulares",
      ],
      idealFor: ["Técnicos", "Electricistas", "Mecánicos", "Abogados", "Independientes", "Emprendedores"],
      highlight: false,
    },
    {
      name: "Combo 2",
      label: "Marketing + Presencia Digital PRO",
      description: "Para negocios que quieren generar clientes rápido y posicionarse en Google",
      price: "$95.000",
      priceNote: "Pago único",
      bonus: "6 meses de mantención GRATIS",
      after: "$5.990/mes (valor conversable)",
      afterIncludes: [
        "Hosting",
        "Dominio",
        "Soporte",
        "SEO Local",
        "Optimización Google Maps",
        "Seguimiento mensual",
        "Publicaciones en Google Business Profile",
        "Gestión de presencia digital",
      ],
      features: [
        "Todo lo del Combo 1",
        "Publicidad de lanzamiento (5 días): Facebook + Instagram Ads",
        "Campaña de generación de clientes con segmentación local",
        "Optimización de Google Business Profile y Maps",
        "Sistema de reseñas",
        "Publicaciones locales",
        "SEO geolocalizado",
      ],
      idealFor: ["Abogados", "Gasfíteres", "Electricistas", "Mecánicos", "Centros médicos", "Empresas locales"],
      highlight: true,
    },
  ],
  testimonials: [
    {
      name: "Patricio M.",
      role: "Electricista, Cauquenes",
      text: "Antes nadie me encontraba en internet. Ahora cuando alguien busca electricista en Cauquenes, aparezco yo y me escriben directo al WhatsApp.",
    },
    {
      name: "Marisol T.",
      role: "Estudio jurídico, Talca",
      text: "La página quedó tal como la imaginaba, y el equipo me explicó todo paso a paso sin apurarme. Se siente que les importa que funcione.",
    },
    {
      name: "Cristián R.",
      role: "Taller mecánico, Chanco",
      text: "Con el combo de publicidad llegaron varios clientes nuevos la primera semana. Ahora sigo con la mantención porque vale la pena.",
    },
  ],
  legal: {
    policies: {
      title: "Políticas de Servicio",
      content:
        "Cada proyecto comienza con una breve reunión de levantamiento de información (datos del negocio, servicios, fotos y referencias). El plazo estimado de entrega de la landing page es de 5 a 10 días hábiles desde que se recibe toda la información necesaria. Las mantenciones incluidas se activan desde la fecha de entrega del sitio y cubren hosting, dominio y ajustes menores de contenido. Cambios estructurales mayores (nuevas secciones, rediseños) se cotizan por separado.",
    },
    privacy: {
      title: "Política de Privacidad",
      content:
        "Los datos de contacto compartidos durante la cotización (nombre, teléfono, correo, dirección del negocio) se utilizan exclusivamente para coordinar el desarrollo del proyecto y la comunicación durante la mantención. No se comparten con terceros ni se utilizan para fines distintos a los del servicio contratado. Puedes solicitar la eliminación de tus datos de nuestros registros en cualquier momento.",
    },
    terms: {
      title: "Términos del Servicio",
      content:
        "El pago único cubre el desarrollo y entrega de la landing page según lo descrito en el plan contratado, junto con el período de mantención gratuita indicado. Finalizado ese período, la mantención mensual o bianual debe mantenerse activa para conservar el dominio, hosting y soporte asociados; en caso de no renovarse, el sitio puede quedar fuera de línea. Los servicios de publicidad digital (Facebook/Instagram Ads) incluyen la configuración y gestión de la campaña; el presupuesto publicitario invertido en las plataformas es responsabilidad del cliente salvo que se indique lo contrario.",
    },
  },
};

/* =========================================================
   HELPERS
   ========================================================= */
const waLink = (extraText = "") => {
  const msg = encodeURIComponent(
    extraText ? `${CONFIG.whatsappMessage} ${extraText}` : CONFIG.whatsappMessage
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
};

function WhatsappIcon({ className }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.397.633 4.732 1.834 6.789L4 29l7.4-1.81A12.94 12.94 0 0 0 16 27.002C22.627 27.002 28 21.629 28 15.001 28 8.373 22.628 3 16.001 3Zm0 23.4a10.36 10.36 0 0 1-5.288-1.456l-.379-.224-4.39 1.073 1.119-4.276-.247-.39A10.357 10.357 0 0 1 5.6 15.001C5.6 9.26 10.26 4.6 16.001 4.6c5.74 0 10.4 4.66 10.4 10.401 0 5.74-4.66 10.399-10.4 10.399Zm5.7-7.795c-.31-.155-1.83-.903-2.114-1.006-.284-.103-.49-.155-.697.155-.207.31-.8 1.006-.98 1.213-.18.207-.362.232-.672.077-.31-.155-1.31-.483-2.494-1.539-.922-.823-1.545-1.84-1.726-2.15-.18-.31-.02-.477.135-.631.139-.138.31-.362.465-.543.155-.18.207-.31.31-.516.103-.207.052-.387-.026-.542-.078-.155-.697-1.68-.956-2.301-.252-.604-.508-.522-.697-.532-.18-.009-.387-.011-.594-.011-.207 0-.542.078-.826.387-.284.31-1.084 1.06-1.084 2.585 0 1.524 1.11 2.997 1.265 3.204.155.207 2.185 3.336 5.293 4.679.74.32 1.318.511 1.768.654.743.236 1.418.203 1.952.123.595-.089 1.83-.748 2.088-1.471.258-.723.258-1.343.18-1.471-.077-.129-.284-.207-.594-.362Z" />
    </svg>
  );
}

/* =========================================================
   COMPONENTES MODULARES
   ========================================================= */

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-white text-sm"
            style={{ backgroundColor: CONFIG.colors.primary }}
          >
            MD
          </div>
          <div className="flex flex-col leading-none">
            <span
              className="text-lg sm:text-xl font-extrabold tracking-tight"
              style={{ color: CONFIG.colors.primary }}
            >
              {CONFIG.brandName}
            </span>
            <span className="text-[11px] text-gray-500 font-medium hidden sm:block">
              {CONFIG.tagline}
            </span>
          </div>
        </div>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 transition-colors"
        >
          <WhatsappIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{CONFIG.phoneDisplay}</span>
          <span className="sm:hidden">Contactar</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-sm font-medium mb-6"
          style={{ backgroundColor: "#EDE9FE", color: CONFIG.colors.primary }}
        >
          {CONFIG.hero.eyebrow}
        </span>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
          style={{ color: "#111827" }}
        >
          {CONFIG.hero.title}
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-9">
          {CONFIG.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl px-7 py-4 text-white font-bold text-base sm:text-lg shadow-lg shadow-green-200 transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: CONFIG.colors.whatsapp }}
          >
            <WhatsappIcon className="w-6 h-6 transition-transform group-hover:rotate-6" />
            {CONFIG.hero.ctaPrimary}
          </a>

          <a
            href="#planes"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-7 py-4 font-bold text-base sm:text-lg border-2 border-gray-200 text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          >
            {CONFIG.hero.ctaSecondary}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            La diferencia es visible
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            No se trata solo de tener una página web — se trata de que tu
            negocio empiece a trabajar para ti, incluso cuando no estás.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Antes */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-7">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
              Antes
            </span>
            <h3 className="font-bold text-xl mb-5 text-gray-800">{CONFIG.before.title}</h3>
            <ul className="space-y-3">
              {CONFIG.before.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <X size={18} className="shrink-0 mt-0.5 text-gray-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Después */}
          <div
            className="rounded-2xl p-7 border"
            style={{ backgroundColor: "#EDE9FE", borderColor: "#DDD6FE" }}
          >
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: CONFIG.colors.primary }}
            >
              Después
            </span>
            <h3 className="font-bold text-xl mb-5" style={{ color: CONFIG.colors.primary }}>
              {CONFIG.after.title}
            </h3>
            <ul className="space-y-3">
              {CONFIG.after.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "#4C1D95" }}>
                  <Check size={18} className="shrink-0 mt-0.5" style={{ color: CONFIG.colors.primary }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      className="px-4 sm:px-6 py-16 sm:py-20"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            ¿Por qué Maule Digital?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Trabajamos cerca, hablamos claro y nos preocupamos de que tu
            negocio realmente se vea bien donde importa.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {CONFIG.whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#EDE9FE" }}
                >
                  <Icon size={24} style={{ color: CONFIG.colors.primary }} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  const highlight = plan.highlight;
  return (
    <div
      className={`relative rounded-2xl p-7 sm:p-8 flex flex-col h-full border ${
        highlight
          ? "shadow-xl border-transparent"
          : "shadow-sm border-gray-100 hover:shadow-lg transition-shadow"
      }`}
      style={{
        backgroundColor: highlight ? CONFIG.colors.primary : "#FFFFFF",
      }}
    >
      {highlight && (
        <span
          className="absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase"
          style={{ backgroundColor: CONFIG.colors.accent, color: "#FFFFFF" }}
        >
          Más elegido
        </span>
      )}

      <div className="mb-5">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: highlight ? "#C4B5FD" : CONFIG.colors.primary }}
        >
          {plan.name}
        </span>
        <h3
          className="text-2xl font-extrabold mb-2"
          style={{ color: highlight ? "#FFFFFF" : "#111827" }}
        >
          {plan.label}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: highlight ? "#DDD6FE" : "#6B7280" }}
        >
          {plan.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl font-extrabold"
            style={{ color: highlight ? "#FFFFFF" : "#111827" }}
          >
            {plan.price}
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: highlight ? "#DDD6FE" : "#6B7280" }}
          >
            {plan.priceNote}
          </span>
        </div>
        <p
          className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-bold"
          style={{
            backgroundColor: highlight ? "rgba(255,255,255,0.15)" : "#FEF2F2",
            color: highlight ? "#FFFFFF" : CONFIG.colors.accent,
          }}
        >
          🎁 {plan.bonus}
        </p>
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.features.map((f, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-sm leading-relaxed"
            style={{ color: highlight ? "#EDE9FE" : "#374151" }}
          >
            <Check
              size={18}
              className="shrink-0 mt-0.5"
              style={{ color: highlight ? "#C4B5FD" : CONFIG.colors.primary }}
            />
            {f}
          </li>
        ))}
      </ul>

      <div
        className="rounded-xl p-4 mb-6 text-sm"
        style={{
          backgroundColor: highlight ? "rgba(255,255,255,0.08)" : "#F9FAFB",
          color: highlight ? "#DDD6FE" : "#6B7280",
        }}
      >
        <p className="font-semibold mb-1" style={{ color: highlight ? "#FFFFFF" : "#111827" }}>
          Después del período gratis: {plan.after}
        </p>
        <p className="leading-relaxed">{plan.afterIncludes.join(" · ")}</p>
      </div>

      <div className="mb-6">
        <p
          className="text-xs font-bold tracking-widest uppercase mb-2"
          style={{ color: highlight ? "#C4B5FD" : "#9CA3AF" }}
        >
          Ideal para
        </p>
        <div className="flex flex-wrap gap-2">
          {plan.idealFor.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium rounded-full px-3 py-1"
              style={{
                backgroundColor: highlight ? "rgba(255,255,255,0.1)" : "#EDE9FE",
                color: highlight ? "#EDE9FE" : CONFIG.colors.primary,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <a
        href={waLink(`Me interesa el ${plan.name} (${plan.label}).`)}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-bold text-base shadow-lg transition-all hover:scale-[1.02]"
        style={{ backgroundColor: CONFIG.colors.whatsapp, color: "#FFFFFF" }}
      >
        <WhatsappIcon className="w-5 h-5 transition-transform group-hover:rotate-6" />
        Quiero este combo
      </a>
    </div>
  );
}

function Plans() {
  return (
    <section id="planes" className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            Elige el plan para tu negocio
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Dos caminos para empezar: presencia digital sólida, o presencia
            digital más una campaña que te traiga clientes desde el día uno.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {CONFIG.plans.map((plan, i) => (
            <PlanCard key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedHighlights() {
  const items = [
    { icon: Globe, label: "Dominio .CL incluido" },
    { icon: QrCode, label: "QR personalizado" },
    { icon: Smartphone, label: "100% adaptado a celular" },
    { icon: Search, label: "Visible en Google Maps" },
    { icon: Megaphone, label: "Publicidad local (Combo 2)" },
  ];
  return (
    <section
      className="px-4 sm:px-6 py-8"
      style={{ backgroundColor: CONFIG.colors.primary }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 text-white">
              <Icon size={20} />
              <span className="text-sm font-semibold">{it.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      className="px-4 sm:px-6 py-16 sm:py-20"
      style={{ backgroundColor: CONFIG.colors.bg }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-3"
            style={{ color: CONFIG.colors.primary }}
          >
            Negocios que ya confían en nosotros
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md shadow-gray-100 border border-gray-50"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={18} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: CONFIG.colors.primary }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLocation() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2
            className="text-2xl sm:text-3xl font-extrabold mb-6"
            style={{ color: CONFIG.colors.primary }}
          >
            Conversemos sobre tu proyecto
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex gap-3">
              <Clock size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Horario de atención</p>
                <p className="text-gray-600 text-sm">{CONFIG.schedule}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">WhatsApp / Teléfono</p>
                <a href={`tel:+${CONFIG.whatsappNumber}`} className="text-gray-600 text-sm hover:underline">
                  {CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">Correo electrónico</p>
                <a href={`mailto:${CONFIG.email}`} className="text-gray-600 text-sm hover:underline">
                  {CONFIG.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Ubicación</p>
                <p className="text-gray-600 text-sm">{CONFIG.address}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin size={22} style={{ color: CONFIG.colors.primary }} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Zonas donde trabajamos</p>
                <div className="flex flex-wrap gap-2">
                  {CONFIG.coverage.map((com) => (
                    <span
                      key={com}
                      className="text-xs font-medium rounded-full px-3 py-1"
                      style={{ backgroundColor: "#EDE9FE", color: CONFIG.colors.primary }}
                    >
                      {com}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl px-7 py-4 text-white font-bold text-base shadow-lg shadow-green-200 transition-all hover:scale-[1.02]"
            style={{ backgroundColor: CONFIG.colors.whatsapp }}
          >
            <WhatsappIcon className="w-6 h-6 transition-transform group-hover:rotate-6" />
            Escríbenos ahora
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 aspect-[4/3]">
          <iframe
            title="Ubicación Maule Digital"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${CONFIG.map.lat},${CONFIG.map.lng}&z=11&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-2xl animate-pulse hover:animate-none hover:scale-110 transition-transform"
      style={{ backgroundColor: CONFIG.colors.whatsapp }}
    >
      <WhatsappIcon className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
}

function LegalModal({ data, onClose }) {
  if (!data) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl max-h-[85vh] overflow-y-auto p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold pr-4" style={{ color: CONFIG.colors.primary }}>
            {data.title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <X size={22} />
          </button>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{data.content}</p>
      </div>
    </div>
  );
}

function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="text-white font-bold text-lg mb-1">{CONFIG.brandName}</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {CONFIG.brandName}. {CONFIG.address}.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <button onClick={() => onOpenLegal("policies")} className="hover:text-white transition-colors">
            Políticas de Servicio
          </button>
          <button onClick={() => onOpenLegal("privacy")} className="hover:text-white transition-colors">
            Política de Privacidad
          </button>
          <button onClick={() => onOpenLegal("terms")} className="hover:text-white transition-colors">
            Términos del Servicio
          </button>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   APP PRINCIPAL
   ========================================================= */
export default function MauleDigitalLanding() {
  const [legalOpen, setLegalOpen] = useState(null);

  return (
    <div className="font-sans antialiased text-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <WhyUs />
        <Plans />
        <IncludedHighlights />
        <Testimonials />
        <ContactLocation />
      </main>
      <Footer onOpenLegal={setLegalOpen} />
      <FloatingWhatsapp />
      <LegalModal
        data={legalOpen ? CONFIG.legal[legalOpen] : null}
        onClose={() => setLegalOpen(null)}
      />
    </div>
  );
}
