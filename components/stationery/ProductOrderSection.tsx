"use client";
import { useState } from "react";
import Link from "next/link";
import { Product } from "@/app/stationery/data";

interface Props {
  product: Product;
}

export default function ProductOrderSection({ product }: Props) {
  const [customize, setCustomize] = useState(false);
  const finalPrice = customize ? product.price + 10 : product.price;

  const waMessage = customize
    ? `Hey StationX! I want to order a customized "${product.name}" (${product.size}). Price: ₹${product.price} + ₹10 customization = ₹${finalPrice}. Please guide me on the customization.`
    : `Hey StationX! I want to order "${product.name}" (${product.size}). Price: ₹${product.price}`;

  const waLink = `https://wa.me/919150190729?text=${encodeURIComponent(waMessage)}`;

  return (
    <div>
      {/* Price */}
      <div className="flex items-baseline gap-3 mb-6">
        <p className="text-4xl font-bold text-orange-500 font-[var(--font-playfair)]">₹{finalPrice}</p>
        {customize && <p className="text-gray-400 text-lg line-through">₹{product.price}</p>}
      </div>

      {/* Already customized notice */}
      {product.customized && (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-5 flex items-start gap-3">
          <i className="bi bi-brush text-orange-500 text-lg mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900 text-sm">Customized Product</p>
            <p className="text-gray-500 text-xs mt-0.5">This product was customized as per a customer request. Want something similar? Order and share your requirements on WhatsApp.</p>
          </div>
        </div>
      )}

      {/* Customized toggle */}
      {product.Customized && !product.customized && (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900 text-sm">Customize This Product</p>
              <p className="text-gray-500 text-xs mt-0.5">Add your name, initials, or custom design</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-sm font-bold">+₹10</span>
              <div className={`w-12 h-6 rounded-full transition-colors duration-200 flex items-center px-0.5 cursor-pointer flex-none ${customize ? "bg-orange-500" : "bg-gray-200"}`} onClick={() => setCustomize(!customize)}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${customize ? "translate-x-6" : "translate-x-0"}`} />
              </div>
            </div>
          </div>
          {customize && (
            <p className="text-orange-600 text-xs mt-3 flex items-center gap-1">
              <i className="bi bi-info-circle" /> Share your customization details on WhatsApp after ordering.
            </p>
          )}
        </div>
      )}

      {/* Order Button */}
      <a href={waLink} target="_blank" rel="noreferrer" className="flex w-full bg-orange-500 text-white py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200 items-center justify-center gap-2 mb-3">
        <i className="bi bi-whatsapp text-lg" /> Order on WhatsApp
      </a>

      <Link href="/stationery/customize" className="flex w-full border-2 border-gray-200 text-gray-600 py-3 rounded-full font-semibold text-center hover:border-orange-500 hover:text-orange-500 transition text-sm items-center justify-center gap-2">
        <i className="bi bi-brush" /> Learn About Customization
      </Link>

      {/* Trust Badges */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { icon: "bi-shield-lock", label: "Secure" },
          { icon: "bi-clock", label: "Fast Delivery" },
          { icon: "bi-patch-check", label: "Quality Paper" },
        ].map((badge) => (
          <div key={badge.label} className="bg-gray-50 rounded-xl p-3 text-center">
            <i className={`bi ${badge.icon} text-orange-500 text-xl block mb-1`} />
            <p className="text-gray-500 text-xs">{badge.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}