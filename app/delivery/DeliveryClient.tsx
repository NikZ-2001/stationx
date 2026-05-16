"use client";
import { useState } from "react";
import { WA_LINKS } from "@/lib/whatsapp";
import { DELIVERY_AREAS } from "@/app/config/deliveryAreas";

export default function DeliveryClient() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState<string | null>(null);

  const filtered = DELIVERY_AREAS.filter((a) => a.toLowerCase().includes(search.toLowerCase()));

  const handleSearch = (value: string) => {
    setSearch(value);
    if (value.length > 1) {
      const match = DELIVERY_AREAS.find((a) => a.toLowerCase().includes(value.toLowerCase()));
      setFound(match ? match : "not_found");
    } else {
      setFound(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
            We Come to You
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">
            🚚 Delivery Areas
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            ⚡ Fast local printing delivery from our hub at <strong className="text-orange-500">Thirumullaivoyal Colony, Chennai.</strong>
          </p>
        </div>

        {/* Delivery Promise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl p-6 text-white shadow-lg shadow-orange-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-6 -translate-x-6" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">⚡</span>
                <div>
                  <p className="font-bold text-lg font-[var(--font-playfair)]">Under 2 Hours</p>
                  <p className="text-orange-100 text-xs">All listed areas below</p>
                </div>
              </div>
              <p className="text-sm text-orange-50 leading-relaxed">All areas listed in this page are covered under our <strong>2 hour fast delivery</strong> promise.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-xl">🚚</span>
              <div>
                <p className="font-bold text-lg text-gray-900 font-[var(--font-playfair)]">Other Areas</p>
                <p className="text-gray-400 text-xs">Outside listed zones</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">Your area not listed? Contact us on WhatsApp to check delivery availability and timing.</p>
            <a href={WA_LINKS.contact} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
              <i className="bi bi-whatsapp" /> Check Availability
            </a>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <i className="bi bi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder="Search your area..." className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 bg-white shadow-sm" />
          </div>
          {found === "not_found" && search.length > 1 && (
            <div className="text-center mt-3">
              <p className="text-sm text-gray-500">Area not listed? <a href={WA_LINKS.contact} target="_blank" rel="noreferrer" className="text-orange-500 font-semibold hover:underline">Contact us on WhatsApp</a> to check availability.</p>
            </div>
          )}
          {found && found !== "not_found" && (
            <div className="text-center mt-3">
              <p className="text-sm text-green-600 font-semibold">✅ {found} is in our 2-hour delivery zone!</p>
            </div>
          )}
        </div>

        {/* Area Chips */}
        <div className="bg-orange-50 rounded-3xl p-6 mb-10">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 text-center">
            ⚡ All areas below are covered under 2-hour fast delivery
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {(search.length > 0 ? filtered : DELIVERY_AREAS).map((area) => (
              <span key={area} className="text-xs font-medium px-3 py-1.5 rounded-full border bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500 transition cursor-default flex items-center gap-1">
                <i className="bi bi-lightning-charge-fill text-orange-400 text-xs" />
                {area}
              </span>
            ))}
            {search.length > 0 && filtered.length === 0 && (
              <p className="text-sm text-gray-400 py-4">No areas found matching "{search}"</p>
            )}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-10">
          <p className="text-center text-sm font-semibold text-gray-700 mb-4">📍 Our Hub Location — Thirumullaivoyal Colony, Chennai</p>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe src="https://maps.google.com/maps?q=13.143997,80.137667&z=15&output=embed" width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="StationX Delivery Hub" />
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a href={WA_LINKS.contact} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            <i className="bi bi-whatsapp text-lg" />
            Check Delivery on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}