import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — StationX Printing Service Ambattur Chennai",
  description: "Learn about StationX — a premium printing service started in 2026 in Ambattur, Chennai. Founded by Nikson Andrew to solve last minute printing needs with home delivery.",
  openGraph: {
    title: "About StationX — Printing Service Ambattur Chennai",
    description: "StationX was started to solve last minute printing needs in Ambattur, Chennai. No queues, home delivery, secure document handling.",
    url: "https://stationx.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            About StationX
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Born out of frustration. Built for the community.</p>
        </div>

        {/* Founder Story */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
              <i className="bi bi-person-fill text-orange-500 text-2xl" />
            </div>
            <div>
              
              <p className="text-orange-500 text-sm font-medium">Founder, StationX</p>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            It started with a simple frustration — needing a printout urgently at an odd hour and finding every shop either closed, crowded, or too far away. I knew I wasn't alone. Students, working professionals, and busy families face this every day.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            So I started <strong className="text-orange-500">StationX</strong> — not just another print shop, but a <strong>premium, reliable, home delivery printing service</strong> built on local trust. No queues. No travel. No waiting. Just send your file on WhatsApp and we handle the rest.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            While big corporates run delivery services, we focus on something they can't — <strong className="text-orange-500">personal attention, local understanding, and genuine care</strong> for every single order. You are not a ticket number here. You are our neighbour.
          </p>
        </div>

        {/* Why StationX */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6">
            <i className="bi bi-patch-question-fill text-orange-500 mr-2" />
            Why StationX Over a Regular Shop?
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
              <i className="bi bi-x-circle-fill text-red-400 text-xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-700 text-sm">Regular Shops</p>
                <p className="text-gray-500 text-sm mt-1">Long queues, fixed hours, need to travel, closed at odd times, no privacy for sensitive documents.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
              <i className="bi bi-check-circle-fill text-green-500 text-xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-700 text-sm">StationX</p>
                <p className="text-gray-500 text-sm mt-1">No queue — you are answered the moment you connect. Open at odd hours when others are closed. Home delivery. Secure document handling. Affordable pricing.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-6">
            <i className="bi bi-people-fill text-orange-500 mr-2" />
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <i className="bi bi-mortarboard-fill text-orange-500 text-xl" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Students</p>
                <p className="text-gray-500 text-xs mt-1">Last minute assignments, notes, and project prints delivered fast.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <i className="bi bi-briefcase-fill text-orange-500 text-xl" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Working Professionals</p>
                <p className="text-gray-500 text-xs mt-1">Documents, presentations, and reports printed and delivered without disrupting your schedule.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <i className="bi bi-house-heart-fill text-orange-500 text-xl" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Families & Individuals</p>
                <p className="text-gray-500 text-xs mt-1">Photo prints, passport photos, and personal documents from the comfort of your home.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl">
              <i className="bi bi-shop text-orange-500 text-xl" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Small Businesses</p>
                <p className="text-gray-500 text-xs mt-1">Stickers, brochures, and marketing materials printed affordably and delivered promptly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <i className="bi bi-lightning-charge-fill text-orange-500 text-3xl mb-3 block" />
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Speed</h3>
            <p className="text-gray-500 text-sm mt-1">Fast turnaround on every order</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <i className="bi bi-shield-lock-fill text-orange-500 text-3xl mb-3 block" />
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Security</h3>
            <p className="text-gray-500 text-sm mt-1">Files deleted immediately after printing</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <i className="bi bi-heart-fill text-orange-500 text-3xl mb-3 block" />
            <h3 className="font-bold text-gray-900 font-[var(--font-playfair)]">Care</h3>
            <p className="text-gray-500 text-sm mt-1">Personal attention on every order</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200 inline-flex items-center gap-2">
            <i className="bi bi-whatsapp" /> Order on WhatsApp
          </a>
        </div>

      </div>
    </main>
  );
}