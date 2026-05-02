import { WA_LINKS } from "@/lib/whatsapp";

const services = [
  {
    icon: "🖤",
    title: "B&W Printout",
    subtitle: "Xerox / Black & White",
    description: "Fast and affordable black & white printing for documents, notes, forms, and more.",
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-600",
    waLink: WA_LINKS.bw,
    disabled: false,
  },
  {
    icon: "🎨",
    title: "Color Printing",
    subtitle: "Vivid & Sharp",
    description: "High quality color prints for presentations, posters, brochures, and assignments.",
    badge: "High Quality",
    badgeColor: "bg-blue-100 text-blue-600",
    waLink: WA_LINKS.color,
    disabled: false,
  },
  {
    icon: "📷",
    title: "Photo Printing",
    subtitle: "Glossy & Matte",
    description: "Beautiful photo prints in all sizes. Perfect for memories, gifts, and portfolios.",
    badge: "Premium",
    badgeColor: "bg-purple-100 text-purple-600",
    waLink: WA_LINKS.photo,
    disabled: false,
  },
  {
    icon: "🏷️",
    title: "Sticker Printing",
    subtitle: "Glossy Sticker Paper",
    description: "Glossy sticker paper printing with neat cutting available for rectangle and square designs. Perfect for labels, branding, and personal use.",
    badge: "New",
    badgeColor: "bg-green-100 text-green-600",
    waLink: WA_LINKS.sticker,
    disabled: false,
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
  },
  {
    icon: "✏️",
    title: "Stationery",
    subtitle: "Coming Soon",
    description: "Pens, notebooks, files, and more — your one stop stationery shop.",
    badge: "Coming Soon",
    badgeColor: "bg-gray-100 text-gray-400",
    waLink: "",
    disabled: true,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Our Services</h2>
          <p className="text-gray-500 mt-3 text-lg">Everything you need, printed perfectly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className={`relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${service.disabled ? "opacity-60" : "hover:-translate-y-1"}`}>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${service.badgeColor}`}>
                {service.badge}
              </span>
              <p className="text-5xl mb-4">{service.icon}</p>
              <h3 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h3>
              <p className="text-orange-500 text-sm font-medium mb-2">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              {!service.disabled && (
                <a href={service.waLink} target="_blank" rel="noreferrer" className="inline-block mt-4 text-orange-500 text-sm font-semibold hover:underline">
                  Order Now →
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <a href={WA_LINKS.general} target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}