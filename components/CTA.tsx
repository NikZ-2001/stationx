export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-4">
          Ready to Print?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[var(--font-playfair)]">
          Send Your File on WhatsApp & We Handle the Rest
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Secure, premium quality prints delivered fast, affordable, and right to your door. Your documents are handled with complete privacy and deleted immediately after printing.
        </p>

        {/* Trust Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="bg-white border border-gray-100 shadow-sm text-gray-600 text-xs px-4 py-2 rounded-full">🔒 Secure Document Handling</span>
          <span className="bg-white border border-gray-100 shadow-sm text-gray-600 text-xs px-4 py-2 rounded-full">🚴 Delivery from ₹5</span>
          <span className="bg-white border border-gray-100 shadow-sm text-gray-600 text-xs px-4 py-2 rounded-full">⏱️ Est. ~2 Hour Delivery</span>
          <span className="bg-white border border-gray-100 shadow-sm text-gray-600 text-xs px-4 py-2 rounded-full">📦 Safe Packaging</span>
          <span className="bg-white border border-gray-100 shadow-sm text-gray-600 text-xs px-4 py-2 rounded-full">🗑️ Files Deleted After Print</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            📱 Order on WhatsApp
          </a>
          <a href="tel:+919150190729" className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition">
            📞 Call Us Now
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-8">
          📍 Located in Ambattur, Chennai · 🌅 8:00 AM – 11:00 AM · 🌙 6:00 PM – 12:00 AM
        </p>
      </div>
    </section>
  );
}