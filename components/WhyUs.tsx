const reasons = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "Get your prints ready in minutes. Walk in or order via WhatsApp — we deliver fast.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description: "Best prices in Ambattur with no hidden charges. Quality prints that don't break the bank.",
  },
  {
    icon: "🎯",
    title: "High Quality Output",
    description: "Sharp, clear, and vibrant prints every single time using premium grade machines.",
  },
  {
    icon: "📱",
    title: "WhatsApp Ordering",
    description: "Simply send your file on WhatsApp and we handle the rest. No app download needed.",
  },
  {
    icon: "📍",
    title: "Located in Ambattur",
    description: "Conveniently located in Ambattur, Tamil Nadu. Easy to reach, easy to order.",
  },
  {
    icon: "🤝",
    title: "Trust in Locals",
    description: "Individually owned and operated with a focus on community. We treat every customer like family.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Why StationX
          </span>
          <h2 className="text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Why Choose Us?</h2>
          <p className="text-gray-500 mt-3 text-lg">We make printing simple, fast, and affordable.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-orange-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <p className="text-4xl mb-4">{reason.icon}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-2 font-[var(--font-playfair)]">{reason.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}