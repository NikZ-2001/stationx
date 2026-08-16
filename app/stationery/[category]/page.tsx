import type { Metadata } from "next";
import Link from "next/link";
import { STATIONERY_CATEGORIES, getCategoryBySlug, getProductsByCategory } from "@/app/stationery/data";
import ProductCard from "@/components/stationery/ProductCard";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return STATIONERY_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — StationX Stationery`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(category);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <i className="bi bi-chevron-right text-xs" />
          <Link href="/stationery" className="hover:text-orange-500 transition">Stationery</Link>
          <i className="bi bi-chevron-right text-xs" />
          <span className="text-gray-600 font-medium">{cat.name}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">{cat.name}</h1>
          <p className="text-gray-500 text-lg max-w-xl">{cat.description}</p>
          {products.length > 0 && <p className="text-orange-500 text-sm font-semibold mt-2">{products.length} product{products.length !== 1 ? "s" : ""}</p>}
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.filter(Boolean).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">📦</p>
            <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">Coming Soon</h2>
            <p className="text-gray-400 text-sm mb-6">Products in this category are being added. Check back soon!</p>
            <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20know%20more%20about%20your%20stationery." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
              <i className="bi bi-whatsapp" /> Ask on WhatsApp
            </a>
          </div>
        )}

        {/* Back */}
        <div className="text-center mt-14">
          <Link href="/stationery" className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-500 px-6 py-3 rounded-full font-semibold text-sm hover:border-orange-500 hover:text-orange-500 transition">
            <i className="bi bi-arrow-left" /> Back to All Categories
          </Link>
        </div>

      </div>
    </main>
  );
}