export default function ServicesPage() {
  const services = [
    {
      icon: "🖤",
      title: "B&W Printout",
      subtitle: "Xerox / Black & White",
      description: "Fast and affordable black & white printing for documents, notes, forms, assignments, and more. Perfect for everyday printing needs.",
      features: ["Single & double side", "Bulk printing available", "All paper sizes", "Fast turnaround"],
      badge: "Most Popular",
      badgeColor: "bg-orange-100 text-orange-600",
      available: true,
    },
    {
      icon: "🎨",
      title: "Color Printing",
      subtitle: "Vivid & Sharp",
      description: "High quality color prints for presentations, posters, brochures, assignments, and any document that needs vibrant colors.",
      features: ["Vivid color output", "Single & double side", "Multiple paper sizes", "Bulk discounts available"],
      badge: "High Quality",
      badgeColor: "bg-blue-100 text-blue-600",
      available: true,
    },
    {
      icon: "📷",
      title: "Photo Printing",
      subtitle: "Glossy & Matte",
      description: "Beautiful photo prints in all standard sizes. Perfect for memories, gifts, portfolios, and passport photos.",
      features: ["4R, 5R sizes available", "Passport size photos", "Glossy finish", "Sharp & vibrant colors"],
      badge: "Premium",
      badgeColor: "bg-purple-100 text-purple-600",
      available: true,
    },
    {
      icon: "🗂️",
      title: "Lamination",
      subtitle: "Coming Soon",
      description: "Protect your important documents, photos, and ID cards with our lamination service. Stay tuned!",
      features: ["Document protection", "Photo lamination", "ID card lamination", "Multiple sizes"],
      badge: "Coming Soon",
      badgeColor: "bg-gray-100 text-gray-400",
      available: false,
    },
    {
      icon: "✏️",
      title: "Stationery",
      subtitle: "Coming Soon",
      description: "Pens, notebooks, files, staplers and more — your one stop stationery shop coming soon to StationX.",
      features: ["Pens & pencils", "Notebooks & files", "Office supplies", "Student essentials"],
      badge: "Coming Soon",
      badgeColor: "bg-gray-100 text-gray-400",
      available: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Our Services
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Everything you need, printed perfectly in Ambattur.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className={`bg-white rounded-2xl p-8 shadow-sm transition-all duration-300 ${service.available ? "hover:shadow-lg hover:-translate-y-1" : "opacity-60"}`}>
              <div className="flex items-start justify-between mb-4">
                <p className="text-5xl">{service.icon}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)]">{service.title}</h2>
              <p className="text-orange-500 text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-orange-500">✓</span> {feature}
                  </li>
                ))}
              </ul>
              {service.available && (
                <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition shadow-md shadow-orange-200">
                  Order Now on WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}