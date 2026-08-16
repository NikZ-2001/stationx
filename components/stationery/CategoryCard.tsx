"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Category, getProductsByCategory } from "@/app/stationery/data";

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  const count = getProductsByCategory(category.slug).length;
  const [imgError, setImgError] = useState(false);

  return (
    <Link href={`/stationery/${category.slug}`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-40 bg-gray-50 overflow-hidden">
        {!imgError && category.images[0] ? (
          <Image src={category.images[0]} alt={category.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 20vw" onError={() => setImgError(true)} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="bi bi-journal-text text-gray-200 text-5xl" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-bold text-white font-[var(--font-playfair)] text-sm leading-tight">{category.name}</h3>
          {count > 0 && <p className="text-white/80 text-xs mt-0.5">{count} product{count !== 1 ? "s" : ""}</p>}
        </div>
      </div>
    </Link>
  );
}