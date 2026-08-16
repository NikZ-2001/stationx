"use client";
import { useState } from "react";
import { ALL_PRODUCTS, Product } from "@/app/stationery/data";
import ProductCard from "@/components/stationery/ProductCard";

const SIZES = ["All", "A5", "A6", "10 × 21 cm"];
const TYPES = ["All", "Notebook", "Notepad", "To-Do List", "Planner", "Customized"];

export default function StationeryFilteredGrid() {
  const [size, setSize] = useState("All");
  const [type, setType] = useState("All");

  const filtered = ALL_PRODUCTS.filter((p) => {
    const sizeMatch = size === "All" || p.size === size;
    let typeMatch = true;
    if (type === "Notebook") typeMatch = p.name.toLowerCase().includes("notebook");
    else if (type === "Notepad") typeMatch = p.name.toLowerCase().includes("notepad");
    else if (type === "To-Do List") typeMatch = p.name.toLowerCase().includes("to-do");
    else if (type === "Planner") typeMatch = p.name.toLowerCase().includes("planner") || p.name.toLowerCase().includes("weekly");
    else if (type === "Customized") typeMatch = !!p.customized || !!p.Customized;
    return sizeMatch && typeMatch;
  });

  return (
    <div>
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
          Full Catalogue
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Browse All Stationery</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 flex-wrap">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Size</p>
          <div className="flex gap-2 flex-wrap">
            {SIZES.map((s) => (
              <button type="button" key={s} onClick={() => setSize(s)} className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition ${size === s ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300 bg-white"}`}>
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Type</p>
          <div className="flex gap-2 flex-wrap">
            {TYPES.map((t) => (
              <button type="button" key={t} onClick={() => setType(t)} className={`px-4 py-2 rounded-full text-xs font-semibold border-2 transition ${type === t ? "bg-orange-500 text-white border-orange-500" : "border-gray-200 text-gray-600 hover:border-orange-300 bg-white"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-6">{filtered.length} product{filtered.length !== 1 ? "s" : ""} found</p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <i className="bi bi-search text-gray-300 text-4xl block mb-3" />
          <p className="text-gray-400 text-sm mb-4">No products found for this filter.</p>
          <button type="button" onClick={() => { setSize("All"); setType("All"); }} className="text-orange-500 text-sm font-semibold hover:underline">
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}