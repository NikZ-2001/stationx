import { WA_LINKS } from "@/lib/whatsapp";

export default function Pricing() {
  const categories = [
    {
      icon: "🖨️",
      title: "Document Printing",
      items: [
        {
          label: "B&W Print – 70 GSM",
          tag: "Budget",
          tagColor: "bg-blue-100 text-blue-600",
          individual: "₹2",
          individualUnit: "per page",
          bulk: "₹1.50",
          bulkUnit: "per page (50+)",
          waLink: WA_LINKS.bw,
        },
        {
          label: "B&W Print – 80 GSM Crisp",
          tag: "Most Popular",
          tagColor: "bg-orange-100 text-orange-600",
          individual: "₹3",
          individualUnit: "per page",
          bulk: "₹2.50",
          bulkUnit: "per page (50+)",
          waLink: WA_LINKS.bw,
        },
        {
          label: "Color Print – 70 GSM",
          tag: "Budget",
          tagColor: "bg-blue-100 text-blue-600",
          individual: "₹10",
          individualUnit: "per page",
          bulk: "₹8",
          bulkUnit: "per page (25+)",
          waLink: WA_LINKS.color,
        },
        {
          label: "Color Print – 80 GSM Crisp",
          tag: "Crisp",
          tagColor: "bg-purple-100 text-purple-600",
          individual: "₹12",
          individualUnit: "per page",
          bulk: "₹10",
          bulkUnit: "per page (25+)",
          waLink: WA_LINKS.color,
        },
      ],
    },
    {
      icon: "📸",
      title: "Photo Printing (Glossy)",
      items: [
        {
          label: "Passport Size – 6 pcs",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹60",
          individualUnit: "per set",
          bulk: "₹50",
          bulkUnit: "per set (5+)",
          waLink: WA_LINKS.photo,
        },
        {
          label: "Passport Size – 8 pcs",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹80",
          individualUnit: "per set",
          bulk: "₹70",
          bulkUnit: "per set (5+)",
          waLink: WA_LINKS.photo,
        },
        {
          label: "Postcard Size (4x6)",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹60",
          individualUnit: "per photo",
          bulk: "₹50",
          bulkUnit: "per photo (10+)",
          waLink: WA_LINKS.photo,
        },
        {
          label: "A4 Glossy Photo Print",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹80",
          individualUnit: "per print",
          bulk: "₹70",
          bulkUnit: "per print (10+)",
          waLink: WA_LINKS.photo,
        },
      ],
    },
    {
      icon: "🏷️",
      title: "Sticker Printing (Glossy)",
      items: [
        {
          label: "A4 Sticker – B&W",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹40",
          individualUnit: "per sheet",
          bulk: "₹35",
          bulkUnit: "per sheet (10+)",
          waLink: WA_LINKS.sticker,
        },
        {
          label: "A4 Sticker – Color",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹80",
          individualUnit: "per sheet",
          bulk: "₹70",
          bulkUnit: "per sheet (10+)",
          waLink: WA_LINKS.sticker,
        },
        {
          label: "A3 Sticker – B&W",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹70",
          individualUnit: "per sheet",
          bulk: "₹60",
          bulkUnit: "per sheet (10+)",
          waLink: WA_LINKS.sticker,
        },
        {
          label: "A3 Sticker – Color",
          tag: "Glossy",
          tagColor: "bg-green-100 text-green-600",
          individual: "₹140",
          individualUnit: "per sheet",
          bulk: "₹120",
          bulkUnit: "per sheet (10+)",
          waLink: WA_LINKS.sticker,
        },
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

        {/* Mobile: horizontal scroll per category */}
        <div className="md:hidden space-y-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-base font-bold text-gray-900 font-[var(--font-playfair)] mb-3 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.title}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide snap-x snap-mandatory">
                {cat.items.map((item) => (
                  <div key={item.label} className="flex-none w-64 bg-white rounded-2xl p-5 shadow-sm snap-start">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${item.tagColor}`}>{item.tag}</span>
                    <p className="text-sm font-semibold text-gray-900 mb-3 leading-tight">{item.label}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Individual</span>
                      <div className="text-right">
                        <span className="text-base font-bold text-orange-500">{item.individual}</span>
                        <span className="text-xs text-gray-400 ml-1">{item.individualUnit}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-orange-50 rounded-xl px-3 py-2">
                      <span className="text-xs text-orange-600 font-medium">Bulk</span>
                      <div className="text-right">
                        <span className="text-base font-bold text-orange-500">{item.bulk}</span>
                        <span className="text-xs text-gray-400 ml-1">{item.bulkUnit}</span>
                      </div>
                    </div>
                    <a href={item.waLink} target="_blank" rel="noreferrer" className="inline-block mt-4 w-full text-center bg-orange-500 text-white py-2 rounded-full text-xs font-semibold hover:bg-orange-600 transition">
                      Order Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: grid per category */}
        <div className="hidden md:block space-y-10">
          {categories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                <span>{cat.icon}</span> {cat.title}
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map((item) => (
                  <div key={item.label} className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${item.tagColor}`}>{item.tag}</span>
                    <p className="text-sm font-semibold text-gray-900 mb-4 leading-tight min-h-[40px]">{item.label}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Individual</span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-orange-500">{item.individual}</span>
                        <span className="text-xs text-gray-400 block">{item.individualUnit}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-orange-50 rounded-xl px-3 py-2 mb-4">
                      <span className="text-xs text-orange-600 font-medium">Bulk</span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-orange-500">{item.bulk}</span>
                        <span className="text-xs text-gray-400 block">{item.bulkUnit}</span>
                      </div>
                    </div>
                    <a href={item.waLink} target="_blank" rel="noreferrer" className="inline-block w-full text-center bg-orange-500 text-white py-2 rounded-full text-xs font-semibold hover:bg-orange-600 transition">
                      Order Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Included Services */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-base font-bold text-gray-900 font-[var(--font-playfair)] mb-4">📦 Included Services</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2">
              <i className="bi bi-check-circle-fill text-green-500 text-sm" />
              <span className="text-sm text-gray-700 font-medium">Stapling — <span className="text-green-600 font-bold">Free</span></span>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
              <i className="bi bi-bicycle text-orange-500 text-sm" />
              <span className="text-sm text-gray-700 font-medium">Delivery — <span className="text-orange-500 font-bold">From ₹5</span></span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs md:text-sm mt-6">
          * Bulk pricing available for larger orders. Contact us on WhatsApp for custom quotes.
        </p>
      </div>
    </section>
  );
}