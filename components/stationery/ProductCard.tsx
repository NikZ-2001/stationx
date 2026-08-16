"use client";
import Link from "next/link";
import { Product } from "@/app/stationery/data";
import ImageCarousel from "@/components/stationery/ImageCarousel";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  if (!product || !product.slug) return null;

  const waMessage = `Hey StationX! I want to order "${product.name}" (${product.size}). Price: ₹${product.price}`;
  const waLink = `https://wa.me/919150190729?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1">

      {/* Image */}
      <Link href={`/stationery/product/${product.slug}`}>
        <div className="relative h-56 overflow-hidden bg-gray-50 cursor-pointer">
          <ImageCarousel images={product.images || []} name={product.name} hoverCycle />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs px-2 py-0.5 rounded-full font-medium shadow-sm z-10 border border-gray-100">
            {product.size}
          </span>
          {product.images && product.images.length > 1 && (
            <span className="absolute top-3 right-3 bg-black/30 text-white text-xs px-2 py-0.5 rounded-full z-10 flex items-center gap-1">
              <i className="bi bi-images text-xs" /> {product.images.length}
            </span>
          )}
          {(product.customized || product.Customized) && (
            <span className="absolute bottom-8 left-3 bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full z-10 font-medium">
              {product.customized ? "Customized" : "Customized"}
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <Link href={`/stationery/product/${product.slug}`}>
          <h3 className="font-bold text-gray-900 font-[var(--font-playfair)] mb-1 text-sm leading-tight hover:text-orange-500 transition line-clamp-1">{product.name}</h3>
        </Link>
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="text-xs text-gray-400">{product.pages} pages</span>
          <span className="text-gray-200">·</span>
          {product.binding && <span className="text-xs text-gray-400">{product.binding}</span>}
          {product.format && <span className="text-xs text-gray-400">{product.format}</span>}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-orange-500 font-bold text-lg">₹{product.price}</p>
          <Link href={`/stationery/product/${product.slug}`} className="bg-gray-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-orange-500 transition">
            View
          </Link>
        </div>
      </div>
    </div>
  );
}