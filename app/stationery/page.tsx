import type { Metadata } from "next";
import Link from "next/link";
import { STATIONERY_CATEGORIES, getFeaturedProducts } from "@/app/stationery/data";
import ProductCard from "@/components/stationery/ProductCard";
import CategoryCard from "@/components/stationery/CategoryCard";
import StationeryFilteredGrid from "@/components/stationery/StationeryFilteredGrid";

export const metadata: Metadata = {
  title: "Stationery",
  description: "Shop A5 and A6 notebooks, notepads, to-do lists, planners and customized stationery at StationX in Ambattur, Chennai.",
  alternates: { canonical: "https://stationx.vercel.app/stationery" },
};

export default function StationeryPage() {
  const featured = getFeaturedProducts();

  

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest animate-fade-up">
            StationX Stationery
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-[var(--font-playfair)] animate-fade-up delay-100">
            Stationery You'll <span className="text-orange-500">Actually Use.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            Notebooks, notepads, planners and to-do lists. Designed for everyday life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <a href="#categories" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
              <i className="bi bi-grid" /> Shop by Category
            </a>
            <Link href="/stationery/customize" className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition flex items-center justify-center gap-2">
              <i className="bi bi-brush" /> Customize Your Product
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section id="categories" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
              Collections
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {STATIONERY_CATEGORIES.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
          Handpicked For You
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Featured Products</h2>
        <p className="text-gray-400 text-sm mt-2">Hover over any image to see more photos</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {featured.map((product) => {
          if (!product || !product.slug) return null;
          return <ProductCard key={product.slug} product={product} />;
        })}
      </div>
    </div>
  </section>
)}

      {/* Browse All */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <StationeryFilteredGrid />
        </div>
      </section>

      {/* Customize CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12 text-center">
            <i className="bi bi-brush text-orange-500 text-4xl block mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">Customize Your Stationery</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Add your name, initials, a custom title, or your own design to any product. Only <strong className="text-orange-500">₹10 extra</strong> per product.
            </p>
            <Link href="/stationery/customize" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
              <i className="bi bi-brush" /> Learn More About Customization
            </Link>
          </div>
        </div>
      </section>

      {/* Why StationX */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">The StationX Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✨", title: "Thoughtful Design", desc: "Every product is designed with care, aesthetics, and usability in mind." },
              { icon: "📦", title: "Local & Fast", desc: "Based in Ambattur, Chennai. Quick delivery right to your door." },
              { icon: "💸", title: "Affordable", desc: "Quality stationery at prices that don't hurt your wallet." },
              { icon: "🎨", title: "Custom Orders", desc: "Have your own design? We'll print and bind it exactly how you want." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:shadow-md transition-all duration-300">
                <p className="text-4xl mb-3">{item.icon}</p>
                <h3 className="font-bold text-gray-900 font-[var(--font-playfair)] mb-2 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}