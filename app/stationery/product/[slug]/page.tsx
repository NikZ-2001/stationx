import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_PRODUCTS, getProductBySlug, getCategoryBySlug, getRelatedProducts } from "@/app/stationery/data";
import ProductGallery from "@/components/stationery/ProductGallery";
import ProductOrderSection from "@/components/stationery/ProductOrderSection";
import ProductCard from "@/components/stationery/ProductCard";

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — StationX Stationery`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  // ... rest stays the same

  const primaryCategory = product.categories[0] ? getCategoryBySlug(product.categories[0]) : null;
  const related = getRelatedProducts(product, 4);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <i className="bi bi-chevron-right text-xs" />
          <Link href="/stationery" className="hover:text-orange-500 transition">Stationery</Link>
          <i className="bi bi-chevron-right text-xs" />
          {primaryCategory && (
            <>
              <Link href={`/stationery/${primaryCategory.slug}`} className="hover:text-orange-500 transition">{primaryCategory.name}</Link>
              <i className="bi bi-chevron-right text-xs" />
            </>
          )}
          <span className="text-gray-600 font-medium">{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <ProductGallery images={product.images} name={product.name} />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">{product.name}</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Specs */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Product Details</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Size</p>
                  <p className="text-sm font-semibold text-gray-900">{product.size}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-400 mb-1">Pages</p>
                  <p className="text-sm font-semibold text-gray-900">{product.pages} pages</p>
                </div>
                {product.binding && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Binding</p>
                    <p className="text-sm font-semibold text-gray-900">{product.binding}</p>
                  </div>
                )}
                {product.format && (
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Format</p>
                    <p className="text-sm font-semibold text-gray-900">{product.format}</p>
                  </div>
                )}
              </div>
            </div>

            <ProductOrderSection product={product} />
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.filter(Boolean).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}