import Link from "next/link";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">

          {/* Animated Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-orange-500 rounded-3xl flex items-center justify-center shadow-xl shadow-orange-200" style={{ animation: "floatLogo 3s ease-in-out infinite" }}>
              <i className="bi bi-printer-fill text-white text-4xl" />
            </div>
          </div>

          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest animate-fade-up">
            Welcome to StationX
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 font-[var(--font-playfair)] animate-fade-up delay-100">
            Print. Create. <span className="text-orange-500">Inspire.</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200">
            Printing services and designed stationery, all in one place.
          </p>

          {/* Two Division Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-up delay-300">

            <Link href="/printing" className="group relative bg-white border-2 border-orange-200 rounded-3xl p-8 text-left hover:border-orange-500 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-1 max-w-xs w-full mx-auto sm:mx-0">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-all duration-300">
                <i className="bi bi-printer-fill text-orange-500 text-xl group-hover:text-white transition-all duration-300" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-1">🖨️ Printing</h2>
              <p className="text-gray-500 text-sm">Fast, affordable & professional.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-orange-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Explore Printing <i className="bi bi-arrow-right" />
              </div>
            </Link>

            <Link href="/stationery" className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 text-left hover:border-orange-400 hover:shadow-xl hover:shadow-orange-100 transition-all duration-300 hover:-translate-y-1 max-w-xs w-full mx-auto sm:mx-0">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-all duration-300">
                <i className="bi bi-journal-text text-gray-500 text-xl group-hover:text-white transition-all duration-300" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-1">📒 Stationery</h2>
              <p className="text-gray-500 text-sm">Designs you'll actually want to use.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-orange-500 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Shop Stationery <i className="bi bi-arrow-right" />
              </div>
            </Link>

          </div>

          {/* Trust Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 animate-fade-up delay-400">
            <span className="bg-white border border-gray-100 shadow-sm text-gray-500 text-xs px-4 py-2 rounded-full flex items-center gap-2">
              <i className="bi bi-shield-lock text-orange-500" /> Secure Document Handling
            </span>
            <span className="bg-white border border-gray-100 shadow-sm text-gray-500 text-xs px-4 py-2 rounded-full flex items-center gap-2">
              <i className="bi bi-clock text-orange-500" /> 2 Hour Delivery
            </span>
            <span className="bg-white border border-gray-100 shadow-sm text-gray-500 text-xs px-4 py-2 rounded-full flex items-center gap-2">
              <i className="bi bi-geo-alt text-orange-500" /> Ambattur, Chennai
            </span>
            <span className="bg-white border border-gray-100 shadow-sm text-gray-500 text-xs px-4 py-2 rounded-full flex items-center gap-2">
              <i className="bi bi-whatsapp text-orange-500" /> Order on WhatsApp
            </span>
          </div>

        </div>
      </section>

      <FAQ />
      <CTA />
    </main>
  );
}