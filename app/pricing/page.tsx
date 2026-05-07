import { WA_LINKS } from "@/lib/whatsapp";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — StationX Printing Service Ambattur Chennai",
  description: "Affordable printing prices in Ambattur, Chennai. B&W printout from ₹1, color printing from ₹8, photo printing from ₹15. No hidden charges.",
  openGraph: {
    title: "Pricing — StationX Ambattur Chennai",
    description: "B&W printout from ₹1, color printing from ₹8, photo prints from ₹15. Affordable and transparent pricing in Ambattur Chennai.",
    url: "https://stationx.vercel.app/pricing",
  },
};

export default function PricingPage() {
  const plans = [
    {
      icon: "🖤",
      category: "B&W Printout",
      subtitle: "Xerox / Black & White",
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
      subtitle: "Vivid & Sharp",
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
      subtitle: "Glossy & Matte",
      waLink: WA_LINKS.photo,
      prices: [
        { label: "4R (4x6 inch)", price: "₹15", unit: "per photo" },
        { label: "5R (5x7 inch)", price: "₹25", unit: "per photo" },
        { label: "Passport Size 12 pcs", price: "₹60", unit: "per set" },
        { label: "Passport Cut 8 pcs", price: "₹40", unit: "per set" },
        { label: "Post Card Size", price: "₹30", unit: "per photo" },
        { label: "A4 Photo Print", price: "₹80", unit: "per photo" },
      ],
    },
    {
      icon: "🏷️",
      category: "Sticker Printing",
      subtitle: "Glossy Sticker Paper",
      waLink: WA_LINKS.sticker,
      prices: [
        { label: "Full Sheet A4", price: "₹20", unit: "per sheet" },
        { label: "Cut — Rect / Square", price: "₹25", unit: "per sheet" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-5xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Simple & Affordable
          </h1>
          <p className="text-gray-500 mt-3 text-lg">No hidden charges. What you see is what you pay.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {plans.map((plan) => (
            <div key={plan.category} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <p className="text-3xl">{plan.icon}</p>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)]">{plan.category}</h2>
                  <p className="text-orange-500 text-sm font-medium">{plan.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.prices.map((item) => (
                  <li key={item.label} className="flex items-center border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500 flex-1 leading-tight pr-4 whitespace-nowrap">{item.label}</span>
                    <div className="flex-none w-28 text-right">
                      <span className="text-lg font-bold text-orange-500">{item.price}</span>
                      <span className="text-xs text-gray-400 block leading-tight">{item.unit}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href={plan.waLink} target="_blank" rel="noreferrer" className="inline-block w-full text-center bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition shadow-md shadow-orange-200">
                Order Now on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <i className="bi bi-chat-dots text-4xl text-gray-400 mb-4 block" />
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">Need a Custom Quote?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Have a bulk order or special requirement? Send us a message on WhatsApp and we will give you the best price instantly.
          </p>
          <a href={WA_LINKS.quote} target="_blank" rel="noreferrer" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            <i className="bi bi-whatsapp mr-2" />Get Custom Quote on WhatsApp
          </a>
          <p className="text-gray-400 text-xs mt-6">
            * Prices may vary for special sizes or urgent orders.
          </p>
        </div>

      </div>
    </main>
  );
}