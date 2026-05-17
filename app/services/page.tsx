import type { Metadata } from "next";
import { WA_LINKS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services — StationX Printing Service Ambattur Chennai",
  description: "StationX offers B&W printout, color printing, photo printing and sticker printing in Ambattur, Chennai. Home delivery available.",
  openGraph: {
    title: "Our Services — StationX Ambattur Chennai",
    description: "B&W printout, color printing, photo printing, sticker printing with home delivery in Ambattur Chennai.",
    url: "https://stationx.vercel.app/services",
  },
};

const services = [
  {
    icon: "🖤",
    title: "B&W Printing",
    subtitle: "Xerox / Black & White",
    description: "Fast and affordable black & white printing for documents, notes, forms, assignments, and more.",
    features: ["70 GSM Standard paper", "80 GSM Crisp paper", "A4 and A5 sizes", "Single & double side", "Bulk discounts available"],
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-600",
    waLink: WA_LINKS.bw,
    available: true,
  },
  {
    icon: "🎨",
    title: "Color Printing",
    subtitle: "Vivid & Sharp",
    description: "High quality color prints for presentations, posters, brochures, and assignments. Vibrant, sharp, and true-to-life.",
    features: ["70 GSM Standard paper", "80 GSM Crisp paper", "A4 and A5 sizes", "Single & double side", "Bulk discounts available"],
    badge: "High Quality",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.color,
    available: true,
  },
  {
    icon: "📷",
    title: "Photo Printing",
    subtitle: "Glossy — 180 GSM",
    description: "Beautiful glossy photo prints on premium 180 GSM paper. Perfect for memories, gifts, portfolios, and passport photos.",
    features: ["180 GSM Glossy paper", "Passport Size – 8 pcs", "4x6 Photo Print", "A4 Glossy Photo Print"],
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    waLink: WA_LINKS.photo,
    available: true,
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    subtitle: "Glossy — 130 GSM",
    description: "Premium glossy sticker printing on 130 GSM paper. Available in B&W and Color, A4 and A5 sizes.",
    features: ["130 GSM Glossy sticker paper", "A4 and A5 sizes", "B&W and Color options", "Neat rectangle/square cutting", "Bulk discounts available"],
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    waLink: WA_LINKS.sticker,
    available: true,
  },
  {
    icon: "🗂️",
    title: "Lamination",
    subtitle: "Coming Soon",
    description: "Protect your important documents, photos, and ID cards with our lamination service.",
    features: ["Document protection", "Photo lamination", "ID card lamination", "Multiple sizes"],
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    available: false,
  },
  {
    icon: "🔗",
    title: "Spiral Binding",
    subtitle: "Coming Soon",
    description: "Professional spiral binding for reports, presentations, and books.",
    features: ["Multiple sizes", "Durable binding", "Professional finish", "Quick turnaround"],
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    available: false,
  },
  {
    icon: "✏️",
    title: "Stationery",
    subtitle: "Coming Soon",
    description: "Pens, notebooks, files, staplers and more — your one stop stationery shop coming soon.",
    features: ["Pens & pencils", "Notebooks & files", "Office supplies", "Student essentials"],
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    available: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Our Services
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Everything you need, printed perfectly in Ambattur.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 ${service.available ? "hover:shadow-lg hover:-translate-y-1" : "opacity-60"}`}>
              <div className="flex items-start justify-between mb-4">
                <p className="text-5xl">{service.icon}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.badgeColor}`}>{service.badge}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h2>
              <p className="text-orange-500 text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="bi bi-check-circle-fill text-orange-500 text-xs" /> {feature}
                  </li>
                ))}
              </ul>
              {service.available && (
                <a href={service.waLink} target="_blank" rel="noreferrer" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition shadow-md shadow-orange-200 flex items-center gap-2 w-fit">
                  <i className="bi bi-whatsapp" /> Order Now on WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}