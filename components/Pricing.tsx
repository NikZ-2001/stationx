import { WA_LINKS } from "@/lib/whatsapp";

export default function Pricing() {
  const plans = [
    {
      icon: "🖤",
      category: "B&W Printout",
      waLink: WA_LINKS.bw,
      prices: [
        { label: "Single Side", price: "₹1", unit: "per page" },
        { label: "Double Side", price: "₹1.50", unit: "per page" },
        { label: "Bulk (50+ pages)", price: "₹0.80", unit: "per page" },
      ],
    },
    {
      icon: "🎨",
      category: "Color Printing",
      waLink: WA_LINKS.color,
      prices: [
        { label: "Single Side", price: "₹10", unit: "per page" },
        { label: "Double Side", price: "₹18", unit: "per page" },
        { label: "Bulk (20+ pages)", price: "₹8", unit: "per page" },
      ],
    },
    {
      icon: "📷",
      category: "Photo Printing",
      waLink: WA_LINKS.photo,
      prices: [
        { label: "4R (4x6 inch)", price: "₹15", unit: "per photo" },
        { label: "5R (5x7 inch)", price: "₹25", unit: "per photo" },
        { label: "Passport Size 12 pcs", price: "₹60", unit: "per set" },
        { label: "Passport Cut 8 pcs", price: "₹40", unit: "per set" },
        { label: "Post Card Size", price: "₹30", unit: "per photo" },
      ],
    },
    {
      icon: "🏷️",
      category: "Sticker Printing",
      waLink: WA_LINKS.sticker,
      prices: [
        { label: "Full Sheet A4", price: "₹20", unit: "per sheet" },
        { label: "Cut — Rect / Square", price: "₹25", unit: "per sheet" },
      ],
    },
  ];
  return (
    <section className="py-10 md:py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Simple & Affordable</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-lg">No hidden charges. What you see is what you pay.</p>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden scrollbar-hide snap-x snap-mandatory">
          {plans.map((plan) => (
            <div key={plan.category} className="flex-none w-72 bg-white rounded-2xl p-6 shadow-sm snap-start">
              <p className="text-3xl mb-2">{plan.icon}</p>
              <h3 className="text-base font-bold mb-4 font-[var(--font-playfair)] text-gray-900">{plan.category}</h3>
              <ul className="space-y-2">
                {plan.prices.map((item) => (
                  <li key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-2 gap-2">
                    <span className="text-xs text-gray-500 whitespace-nowrap">{item.label}</span>
                    <span className="text-xs font-bold text-orange-500 whitespace-nowrap">{item.price} <span className="text-gray-400 font-normal">{item.unit}</span></span>
                  </li>
                ))}
              </ul>
              <a href={plan.waLink} target="_blank" rel="noreferrer" className="inline-block mt-5 w-full text-center bg-orange-500 text-white py-2.5 rounded-full font-semibold text-xs hover:bg-orange-600 transition">
                Order Now
              </a>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.category} className="rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <p className="text-3xl mb-3">{plan.icon}</p>
              <h3 className="text-xl font-bold mb-6 font-[var(--font-playfair)] text-gray-900">{plan.category}</h3>
              <ul className="space-y-3">
                {plan.prices.map((item) => (
                  <li key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3 gap-2">
                    <span className="text-sm text-gray-500 whitespace-nowrap">{item.label}</span>
                    <span className="text-sm font-bold text-orange-500 whitespace-nowrap">{item.price} <span className="text-xs text-gray-400 font-normal">{item.unit}</span></span>
                  </li>
                ))}
              </ul>
              <a href={plan.waLink} target="_blank" rel="noreferrer" className="inline-block mt-8 w-full text-center bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
                Order Now
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs md:text-sm mt-8">
          * Prices may vary for special sizes or urgent orders. Contact us on WhatsApp for custom quotes.
        </p>
      </div>
    </section>
  );
}