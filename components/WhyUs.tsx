const reasons = [
  {
    icon: "🤝",
    title: "Personalized Service",
    description: "Every order is handled manually with full attention. We print exactly as per your requirement — no shortcuts, no compromises.",
  },
  {
    icon: "🔒",
    title: "Secure Document Handling",
    description: "Your files are completely private. We delete them immediately after printing. Your data never stays with us.",
  },
  {
    icon: "📦",
    title: "Safe Packaging",
    description: "Every order is packed separately in a clean protective cover. Your prints arrive neat, safe, and ready to use.",
  },
  {
    icon: "📍",
    title: "Local Understanding",
    description: "We are part of the Ambattur community. We understand your needs and deliver with personal attention every single time.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description: "Get your prints ready in minutes. Walk in or order via WhatsApp — we move fast without compromising quality.",
  },
  {
    icon: "💰",
    title: "Honest Pricing",
    description: "No hidden charges. No surprises. What you see is what you pay — always fair, always transparent.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
            Why StationX
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Why Choose Us?</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-lg">We do more than just print. We take care of you.</p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex-none w-64 bg-orange-50 rounded-2xl p-5 snap-start">
              <p className="text-3xl mb-3">{reason.icon}</p>
              <h3 className="text-base font-bold text-gray-900 mb-2 font-[var(--font-playfair)]">{reason.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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