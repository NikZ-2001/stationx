"use client";
import { useEffect, useState } from "react";
import ServiceStatus from "@/components/ServiceStatus";

export default function Hero() {
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpin(true), 600);
    setTimeout(() => setSpin(false), 1200);
  }, []);

  const handleHover = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 600);
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest animate-fade-up">
            Premium Printing Service
          </span>

          <div className="mb-6 animate-fade-up">
            <ServiceStatus />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-[var(--font-playfair)] animate-fade-up delay-100">
            Print Anything, <span className="text-orange-500">Ambattur.</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-up delay-200">
            Secure, premium quality prints delivered fast, affordable, and right to your door.
          </p>

          {/* Services Pills */}
<div className="flex flex-wrap gap-3 mb-8 animate-fade-up delay-300">
  <span className="bg-white border border-orange-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow-sm">🖤 B&W Printing</span>
  <span className="bg-white border border-orange-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow-sm">🎨 Color Printing</span>
  <span className="bg-white border border-orange-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow-sm">📷 Photo Printing</span>
  <span className="bg-white border border-orange-200 text-gray-600 text-sm px-4 py-2 rounded-full shadow-sm">🏷️ Sticker Printing</span>
  <span className="bg-white border border-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full shadow-sm">🗂️ Lamination — Soon</span>
  <span className="bg-white border border-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full shadow-sm">🔗 Spiral Binding — Soon</span>
  <span className="bg-white border border-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full shadow-sm">✏️ Stationery — Soon</span>
</div>

          {/* Two CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
              <i className="bi bi-whatsapp" /> Order on WhatsApp
            </a>
            
          </div>

          {/* Info Pills */}
          <div className="mt-6 animate-fade-up delay-500">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <i className="bi bi-clock text-orange-500" />
                <span className="text-xs text-gray-600 font-medium">Est. delivery <span className="text-orange-500 font-bold">~2 hrs</span></span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm">
                <i className="bi bi-shield-lock text-orange-500" />
                <span className="text-xs text-gray-600 font-medium"><span className="text-orange-500 font-bold">Secure</span> document handling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex justify-center items-center animate-slide-in-right delay-200">
          <div
            className="relative w-80 h-80 cursor-pointer"
            onMouseEnter={handleHover}
            style={{
              transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: spin ? "rotate(180deg) scale(1.05)" : "rotate(0deg) scale(1)",
            }}
          >
            <div className="absolute inset-0 bg-orange-500 rounded-3xl shadow-2xl" style={{ transform: "rotate(6deg)" }} />
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center" style={{ transform: "rotate(0deg)" }}>
              <div className="text-center p-8">
                <i className="bi bi-printer-fill text-gray-700 block mb-4" style={{ fontSize: "100px" }} />
                <p className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)]">StationX</p>
                <p className="text-orange-500 text-sm font-medium mt-1">Ambattur, Chennai</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}