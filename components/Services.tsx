"use client";
import { useState } from "react";
import { WA_LINKS } from "@/lib/whatsapp";
import ServiceModal from "@/components/ServiceModal";

const services = [
  {
    icon: "🖨️",
    title: "Document Printing",
    subtitle: "Budget & Crisp Quality",
    description: "Fast and affordable document printing on Budget 70GSM, Crisp 80GSM, Bond 100GSM, and Ledger paper. Available in B&W and Color.",
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-600",
    waLink: WA_LINKS.document,
    disabled: false,
    formats: ["PDF", "Word (.doc/.docx)", "JPG", "PNG", "Excel"],
    paperTypes: ["Budget 70 GSM", "Crisp 80 GSM", "Bond 100 GSM", "Ledger Green 90 GSM"],
    sizes: ["A4 – B&W", "A4 – Color"],
  },
  {
    icon: "📷",
    title: "Photo Printing",
    subtitle: "Glossy — 130 & 180 GSM",
    description: "Beautiful glossy photo prints on 130 GSM and premium 180 GSM paper. Passport photos with sticker back included.",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    waLink: WA_LINKS.photo,
    disabled: false,
    formats: ["JPG", "PNG", "HEIC", "PDF"],
    paperTypes: ["130 GSM Glossy", "180 GSM Premium Glossy"],
    sizes: ["A4", "A5", "4x6 Postcard", "Passport 8 pcs"],
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    subtitle: "Glossy & Budget",
    description: "Premium glossy and budget sticker printing. Available in A4 and A5 sizes, B&W and Color.",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    waLink: WA_LINKS.sticker,
    disabled: false,
    formats: ["PDF", "JPG", "PNG", "AI"],
    paperTypes: ["Glossy Sticker", "Budget Sticker"],
    sizes: ["A4 – B&W", "A4 – Color", "A5 – B&W", "A5 – Color"],
  },
  {
    icon: "🗂️",
    title: "Lamination",
    subtitle: "A4 & ID Card",
    description: "Protect your documents and ID cards with our lamination service. A4 and ID card sizes available. Lamination charges exclude printing cost.",
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.lamination,
    disabled: false,
    formats: ["Any printed document"],
    paperTypes: ["Thermal Lamination"],
    sizes: ["A4 – ₹10", "ID Card – ₹5"],
  },
  {
    icon: "🔗",
    title: "Spiral Binding",
    subtitle: "1 to 100+ Pages",
    description: "Professional spiral binding for reports, presentations, and books. Printing charges are additional.",
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.spiral,
    disabled: false,
    formats: ["Any printed document"],
    paperTypes: ["Spiral Wire Binding"],
    sizes: ["1–25 pages – ₹20", "26–50 pages – ₹25", "51–100 pages – ₹30", "100+ pages – ₹35"],
  },
  {
    icon: "📚",
    title: "Soft Binding",
    subtitle: "1 to 100+ Pages",
    description: "Clean and professional soft binding for projects, reports, and books. Printing charges are additional.",
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.soft,
    disabled: false,
    formats: ["Any printed document"],
    paperTypes: ["Soft Cover Binding"],
    sizes: ["1–50 pages – ₹20", "51–100 pages – ₹30", "100+ pages – ₹40"],
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
            <div key={service.title} onClick={() => setSelectedService(service)} className="flex-none w-64 bg-white border rounded-2xl p-5 shadow-sm snap-start transition-all duration-200 active:scale-95 cursor-pointer">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${service.badgeColor}`}>{service.badge}</span>
              <p className="text-4xl mb-3">{service.icon}</p>
              <h3 className="text-base font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h3>
              <p className="text-orange-500 text-xs font-medium mb-1">{service.subtitle}</p>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{service.description}</p>
              <p className="text-orange-500 text-xs font-semibold mt-3">Tap to learn more →</p>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} onClick={() => setSelectedService(service)} className="relative bg-white border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${service.badgeColor}`}>{service.badge}</span>
              <p className="text-5xl mb-4">{service.icon}</p>
              <h3 className="text-lg font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h3>
              <p className="text-orange-500 text-sm font-medium mb-2">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{service.description}</p>
              <p className="text-orange-500 text-sm font-semibold mt-4">Click to learn more →</p>
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