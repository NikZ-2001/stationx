import type { Metadata } from "next";
import { WA_LINKS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Document printing, photo printing, sticker printing, lamination, spiral binding and soft binding in Ambattur, Chennai. Home delivery available.",
  alternates: { canonical: "https://stationx.vercel.app/services" },
  openGraph: {
    title: "Printing & Finishing Services — StationX Ambattur Chennai",
    description: "Document printing, photo printing, sticker printing, lamination, spiral binding and soft binding with home delivery in Ambattur Chennai.",
    url: "https://stationx.vercel.app/services",
  },
};

const services = [
  {
    icon: "🖨️",
    title: "Document Printing",
    subtitle: "Budget, Crisp, Bond & Ledger",
    description: "Fast and affordable document printing on multiple paper types. Budget 70GSM, Crisp 80GSM, Bond 100GSM, and Ledger Green 90GSM available in B&W and Color.",
    features: ["Budget 70 GSM – B&W & Color", "Crisp 80 GSM – B&W & Color", "Bond Paper 100 GSM – B&W & Color", "Ledger Green 90 GSM", "A4 size", "Bulk discounts available"],
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-600",
    waLink: WA_LINKS.document,
    available: true,
  },
  {
    icon: "📷",
    title: "Photo Printing",
    subtitle: "Glossy 130 & 180 GSM",
    description: "Premium glossy photo prints on 130 GSM and 180 GSM paper. Includes passport photos with sticker back.",
    features: ["Glossy 130 GSM – B&W & Color", "Premium 180 GSM – B&W & Color", "4x6 Postcard – B&W & Color", "Passport 8 pcs with sticker back", "Bulk discounts available"],
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    waLink: WA_LINKS.photo,
    available: true,
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    subtitle: "Glossy & Budget",
    description: "Premium glossy and budget sticker printing in A4 and A5 sizes. Available in B&W and Color.",
    features: ["Glossy Sticker – A4 & A5", "Budget Sticker – A4 & A5", "B&W and Color options", "Bulk discounts available"],
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-600",
    waLink: WA_LINKS.sticker,
    available: true,
  },
  {
    icon: "🗂️",
    title: "Lamination",
    subtitle: "A4 & ID Card",
    description: "Protect your documents and ID cards with our lamination service. Lamination charges exclude printing cost.",
    features: ["A4 Lamination – ₹10", "ID Card Lamination – ₹5", "Fast turnaround", "Bulk discounts available"],
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.lamination,
    available: true,
  },
  {
    icon: "🔗",
    title: "Spiral Binding",
    subtitle: "1 to 100+ Pages",
    description: "Professional spiral binding for reports, presentations, and books. Printing charges are additional.",
    features: ["1–25 pages – ₹20", "26–50 pages – ₹25", "51–100 pages – ₹30", "100+ pages – ₹35", "Bulk discounts available"],
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.spiral,
    available: true,
  },
  {
    icon: "📚",
    title: "Soft Binding",
    subtitle: "1 to 100+ Pages",
    description: "Clean and professional soft binding for projects, reports, and books. Printing charges are additional.",
    features: ["1–50 pages – ₹20", "51–100 pages – ₹30", "100+ pages – ₹40", "Bulk discounts available"],
    badge: "Available",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.soft,
    available: true,
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
          <p className="text-gray-500 mt-3 text-lg">Printing, lamination and binding — all in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
              <a href={service.waLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition shadow-md shadow-orange-200">
                <i className="bi bi-whatsapp" /> Order Now on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}