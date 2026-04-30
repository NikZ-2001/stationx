"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <section className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest animate-fade-up">
            Premium Printing Service
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-[var(--font-playfair)] animate-fade-up delay-100">
            Print Anything, <span className="text-orange-500">Ambattur.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed animate-fade-up delay-200">
            StationX delivers premium quality prints fast, affordable, and right to your door.
          </p>

          {/* Services Pills */}
          <div className="flex flex-wrap gap-3 mb-8 animate-fade-up delay-300">
            <span className="bg-white border border-orange-200 text-orange-600 text-sm px-4 py-2 rounded-full shadow-sm">🖤 B&W Printout</span>
            <span className="bg-white border border-orange-200 text-orange-600 text-sm px-4 py-2 rounded-full shadow-sm">🎨 Color Printing</span>
            <span className="bg-white border border-orange-200 text-orange-600 text-sm px-4 py-2 rounded-full shadow-sm">📷 Photo Printing</span>
            <span className="bg-white border border-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full shadow-sm">🗂️ Lamination — Coming Soon</span>
            <span className="bg-white border border-gray-200 text-gray-400 text-sm px-4 py-2 rounded-full shadow-sm">✏️ Stationery — Coming Soon</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200">
              Order on WhatsApp
            </a>
            <Link href="/services" className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-50 transition">
              View Services
            </Link>
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
            {/* Orange box back — stays tilted */}
            <div className="absolute inset-0 bg-orange-500 rounded-3xl shadow-2xl" style={{ transform: "rotate(6deg)" }} />

            {/* White box front — always straight */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center" style={{ transform: "rotate(0deg)" }}>
              <div className="text-center p-8">
                <p className="text-8xl mb-4">🖨️</p>
                <p className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)]">StationX</p>
                <p className="text-orange-500 text-sm font-medium mt-1">Ambattur, Tamil Nadu</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}