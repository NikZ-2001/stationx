export default function PricingPage() {
  const plans = [
    {
      icon: "🖤",
      category: "B&W Printout",
      subtitle: "Xerox / Black & White",
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
      prices: [
        { label: "4R (4x6 inch)", price: "₹15", unit: "per photo" },
        { label: "5R (5x7 inch)", price: "₹25", unit: "per photo" },
        { label: "Passport Size (12 pcs)", price: "₹60", unit: "per set" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div key={plan.category} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <p className="text-4xl mb-3">{plan.icon}</p>
              <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)]">{plan.category}</h2>
              <p className="text-orange-500 text-sm font-medium mb-6">{plan.subtitle}</p>
              <ul className="space-y-4 mb-8">
                {plan.prices.map((item) => (
                  <li key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-orange-500">{item.price}</span>
                      <span className="text-xs text-gray-400 ml-1">{item.unit}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="inline-block w-full text-center bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition shadow-md shadow-orange-200">
                Order Now
              </a>
            </div>
          ))}
        </div>

        {/* Custom Quote */}
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <p className="text-3xl mb-4">💬</p>
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">Need a Custom Quote?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Have a bulk order or special requirement? Send us a message on WhatsApp and we will give you the best price instantly.
          </p>
          <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            📱 Get Custom Quote on WhatsApp
          </a>
          <p className="text-gray-400 text-xs mt-6">
            * Prices may vary for special sizes or urgent orders.
          </p>
        </div>

      </div>
    </main>
  );
}