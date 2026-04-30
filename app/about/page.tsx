import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            About StationX
          </h1>
        </div>

        {/* Story Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            StationX is a premium printing service based in <strong>Ambattur, Tamil Nadu</strong>. We started with a simple mission — make high quality printing accessible, affordable, and hassle-free for everyone in our community.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Whether you are a student printing your assignments, a professional printing your documents, or a business printing your marketing materials — StationX is here for you.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We believe in <strong className="text-orange-500">speed, quality, and simplicity</strong>. Just send your file on WhatsApp and we handle the rest.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl mb-3">⚡</p>
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Speed</h3>
            <p className="text-gray-500 text-sm mt-1">Fast turnaround on every order</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl mb-3">🎯</p>
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Quality</h3>
            <p className="text-gray-500 text-sm mt-1">Sharp and clear prints every time</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <p className="text-4xl mb-3">💰</p>
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Affordability</h3>
            <p className="text-gray-500 text-sm mt-1">Best prices in Ambattur</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/918667344556" target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            📱 Order on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}