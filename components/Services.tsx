"use client";
import { useState } from "react";
import { WA_LINKS } from "@/lib/whatsapp";
import ServiceModal from "@/components/ServiceModal";

const services = [
  {
    icon: "🖤",
    title: "B&W Printing",
    subtitle: "Xerox / Black & White",
    description: "Fast and affordable black & white printing for documents, notes, forms, and assignments. Available in 70 GSM and 80 GSM Crisp paper.",
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-600",
    waLink: WA_LINKS.bw,
    disabled: false,
    formats: ["PDF", "Word (.doc/.docx)", "JPG", "PNG", "Excel"],
    paperTypes: ["70 GSM Standard", "80 GSM Crisp"],
    sizes: ["A4", "A3"],
  },
  {
    icon: "🎨",
    title: "Color Printing",
    subtitle: "Vivid & Sharp",
    description: "High quality color prints for presentations, posters, brochures, and assignments. Available in 70 GSM and 80 GSM Crisp paper.",
    badge: "High Quality",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.color,
    disabled: false,
    formats: ["PDF", "Word (.doc/.docx)", "JPG", "PNG", "PowerPoint"],
    paperTypes: ["70 GSM Standard", "80 GSM Crisp"],
    sizes: ["A4", "A3"],
  },
  {
    icon: "📷",
    title: "Photo Printing",
    subtitle: "Glossy — 180 GSM",
    description: "Beautiful glossy photo prints on premium 180 GSM paper. Perfect for memories, gifts, portfolios, and passport photos.",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    waLink: WA_LINKS.photo,
    disabled: false,
    formats: ["JPG", "PNG", "HEIC", "PDF"],
    paperTypes: ["180 GSM Glossy"],
    sizes: ["Passport Size – 6 pcs", "Passport Size – 8 pcs", "Postcard 4x6 inch", "A4 Photo", "A3 Photo"],
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    subtitle: "Glossy — 130 GSM",
    description: "Premium glossy sticker printing on 130 GSM paper. Available in B&W and Color, A4 and A3 sizes. Neat cutting available for rectangle and square designs.",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    waLink: WA_LINKS.sticker,
    disabled: false,
    formats: ["PDF", "JPG", "PNG", "AI (Illustrator)"],
    paperTypes: ["130 GSM Glossy Sticker"],
    sizes: ["A4 – B&W", "A4 – Color", "A3 – B&W", "A3 – Color"],
  },
  {
    icon: "🗂️",
    title: "Lamination",
    subtitle: "Coming Soon",
    description: "Protect your important documents and photos with our lamination service.",
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    disabled: true,
    formats: [],
    paperTypes: [],
    sizes: [],
  },
  {
    icon: "🔗",
    title: "Spiral Binding",
    subtitle: "Coming Soon",
    description: "Professional spiral binding for reports, presentations, and books.",
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    disabled: true,
    formats: [],
    paperTypes: [],
    sizes: [],
  },
  {
    icon: "✏️",
    title: "Stationery",
    subtitle: "Coming Soon",
    description: "Pens, notebooks, files, and more — your one stop stationery shop coming soon.",
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    disabled: true,
    formats: [],
    paperTypes: [],
    sizes: [],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Our Services</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-lg">Tap any service to learn more.</p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
          {services.map((service) => (
            <div key={service.title} onClick={() => !service.disabled && setSelectedService(service)} className={`flex-none w-64 bg-white border rounded-2xl p-5 shadow-sm snap-start transition-all duration-200 ${service.disabled ? "opacity-60" : "active:scale-95 cursor-pointer"}`}>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${service.badgeColor}`}>{service.badge}</span>
              <p className="text-4xl mb-3">{service.icon}</p>
              <h3 className="text-base font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h3>
              <p className="text-orange-500 text-xs font-medium mb-1">{service.subtitle}</p>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{service.description}</p>
              {!service.disabled && <p className="text-orange-500 text-xs font-semibold mt-3">Tap to learn more →</p>}
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} onClick={() => !service.disabled && setSelectedService(service)} className={`relative bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 ${service.disabled ? "opacity-60" : "hover:shadow-lg hover:-translate-y-1 cursor-pointer"}`}>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${service.badgeColor}`}>{service.badge}</span>
              <p className="text-5xl mb-4">{service.icon}</p>
              <h3 className="text-lg font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h3>
              <p className="text-orange-500 text-sm font-medium mb-2">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
              {!service.disabled && <p className="text-orange-500 text-sm font-semibold mt-4">Click to learn more →</p>}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-14">
          <a href={WA_LINKS.general} target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200 text-sm md:text-base inline-flex items-center gap-2">
            <i className="bi bi-whatsapp" /> Order on WhatsApp
          </a>
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
}