import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "@/app/stationery/data";

export const metadata: Metadata = {
  title: "Customize Your Stationery — StationX",
  description: "Personalize your notebooks, notepads, and to-do lists with your name, initials, or custom design. Only ₹10 extra.",
};

export default function CustomizePage() {
  const CustomizedProducts = ALL_PRODUCTS.filter((p) => p.Customized);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <i className="bi bi-chevron-right text-xs" />
          <Link href="/stationery" className="hover:text-orange-500 transition">Stationery</Link>
          <i className="bi bi-chevron-right text-xs" />
          <span className="text-gray-600 font-medium">Customize</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Make It Yours
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)] mb-4">
            Customize Your Stationery
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Personalize any notebook, notepad, planner or to-do list with your name, initials, or custom cover design.
          </p>
        </div>

        {/* Customization Charge Banner */}
        <div className="bg-orange-500 rounded-2xl p-6 text-center text-white mb-10 shadow-lg shadow-orange-200">
          <i className="bi bi-brush text-3xl block mb-2" />
          <h2 className="text-2xl font-bold font-[var(--font-playfair)] mb-1">Customization Charge</h2>
          <p className="text-orange-100 text-sm mb-3">Added to the base product price</p>
          <p className="text-5xl font-bold">+₹10</p>
          <p className="text-orange-100 text-xs mt-2">per product</p>
        </div>

        {/* What You Can Customize */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6">What Can Be Customized?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "✍️", title: "Name", desc: "Add your name or someone else's name to the cover." },
              { icon: "🔤", title: "Initials", desc: "Clean, minimal initials for a personal touch." },
              { icon: "📝", title: "Custom Text", desc: "A quote, title, or any short personalized text." },
              { icon: "🎨", title: "Custom Design", desc: "Upload your own artwork or design for the cover." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 bg-orange-50 rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customized Products with Pricing */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-2">Customization Pricing</h2>
          <p className="text-gray-400 text-sm mb-6">Base price + ₹10 customization charge</p>
          <div className="space-y-3">
            {CustomizedProducts.map((product) => (
              <div key={product.slug} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                  <p className="text-xs text-gray-400">{product.size} · {product.paper}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through">₹{product.price}</p>
                  <p className="text-base font-bold text-orange-500">₹{product.price + 10}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Examples */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-2">Sample Customized Products</h2>
          <p className="text-gray-400 text-xs mb-6">These are examples of what customized products look like.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Custom Notebook", example: "Name on cover" },
              { label: "Custom Notepad", example: "Personalized text" },
              { label: "Custom Planner", example: "Name + title" },
              { label: "Custom To-Do List", example: "Custom wording" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <div className="h-32 bg-gradient-to-br from-orange-100 to-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <i className="bi bi-journal text-gray-300 text-3xl block mb-1" />
                    <p className="text-gray-400 text-xs italic">{item.example}</p>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                  <p className="text-xs text-orange-500 mt-0.5">Sample / Example</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6">How It Works</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Choose Your Product", desc: "Pick any notebook, notepad, planner, or to-do list from our collection." },
              { step: "2", title: "Enable Customization", desc: "Toggle the customize option on the product card. ₹10 will be added." },
              { step: "3", title: "Order on WhatsApp", desc: "Click Order — WhatsApp opens with your product details." },
              { step: "4", title: "Share Your Design", desc: "Send us your name, text, or design file on WhatsApp." },
              { step: "5", title: "We Print & Deliver", desc: "We print your customized product and deliver it to your door." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-none">{item.step}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20customize%20a%20stationery%20product.%20Please%20guide%20me." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200 mb-4">
            <i className="bi bi-whatsapp" /> Start Customizing on WhatsApp
          </a>
          <p className="text-gray-400 text-xs mt-3">or</p>
          <Link href="/stationery" className="inline-flex items-center gap-2 text-orange-500 text-sm font-semibold mt-3 hover:underline">
            <i className="bi bi-arrow-left" /> Back to All Products
          </Link>
        </div>

      </div>
    </main>
  );
}