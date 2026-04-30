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
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          No app downloads. No complicated forms. Just send your file to our WhatsApp number and get your prints delivered fast in Ambattur.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            📱 Order on WhatsApp
          </a>
          <a href="tel:+918667344556" className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition">
            📞 Call Us Now
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-8">
          📍 Located in Ambattur, Tamil Nadu · Open Monday to Saturday
        </p>
      </div>
    </section>
  );
}