"use client";
import { useState } from "react";
import { WA_LINKS } from "@/lib/whatsapp";

const categories = [
  {
    icon: "🖨️",
    title: "Document Printing",
    orderLink: WA_LINKS.document,
    items: [
      { label: "B&W Print – 70 GSM", tag: "Budget", tagColor: "bg-blue-100 text-blue-600", individual: "₹2", individualUnit: "per page", bulk: "₹1.50", bulkUnit: "per page (50+)" },
      { label: "B&W Print – 80 GSM Crisp", tag: "Most Popular", tagColor: "bg-orange-100 text-orange-600", individual: "₹3", individualUnit: "per page", bulk: "₹2.50", bulkUnit: "per page (50+)" },
      { label: "Color Print – 70 GSM", tag: "Budget", tagColor: "bg-blue-100 text-blue-600", individual: "₹10", individualUnit: "per page", bulk: "₹8", bulkUnit: "per page (25+)" },
      { label: "Color Print – 80 GSM Crisp", tag: "Crisp", tagColor: "bg-purple-100 text-purple-600", individual: "₹12", individualUnit: "per page", bulk: "₹10", bulkUnit: "per page (25+)" },
    ],
  },
  {
    icon: "📸",
    title: "Photo Printing (Glossy)",
    orderLink: WA_LINKS.photo,
    items: [
      { label: "Passport Size – 6 pcs", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹40", individualUnit: "per set", bulk: "₹35", bulkUnit: "per set (5+)" },
      { label: "Passport Size – 8 pcs", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹50", individualUnit: "per set", bulk: "₹45", bulkUnit: "per set (5+)" },
      { label: "4x6 Photo Print", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹35", individualUnit: "per photo", bulk: "₹30", bulkUnit: "per photo (10+)" },
      { label: "A4 Glossy Photo Print", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹50", individualUnit: "per print", bulk: "₹45", bulkUnit: "per print (10+)" },
    ],
  },
  {
    icon: "🏷️",
    title: "Sticker Printing (Glossy)",
    orderLink: WA_LINKS.sticker,
    items: [
      { label: "A5 Sticker – B&W", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹15", individualUnit: "per sheet", bulk: "₹12", bulkUnit: "per sheet (10+)" },
      { label: "A5 Sticker – Color", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹30", individualUnit: "per sheet", bulk: "₹25", bulkUnit: "per sheet (10+)" },
      { label: "A4 Sticker – B&W", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹25", individualUnit: "per sheet", bulk: "₹20", bulkUnit: "per sheet (10+)" },
      { label: "A4 Sticker – Color", tag: "Glossy", tagColor: "bg-green-100 text-green-600", individual: "₹50", individualUnit: "per sheet", bulk: "₹45", bulkUnit: "per sheet (10+)" },
    ],
  },
];

export default function PricingClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-20">

        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Simple & Affordable
          </h1>
          <p className="text-gray-500 mt-3 text-lg">No hidden charges. What you see is what you pay.</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-8">
          {categories.map((cat, index) => (
            <div key={cat.title} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 font-[var(--font-playfair)]">{cat.title}</p>
                    <p className="text-xs text-gray-400">{cat.items.length} items</p>
                  </div>
                </div>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-500"}`}>
                  <i className={`bi ${openIndex === index ? "bi-chevron-up" : "bi-chevron-down"} text-sm`} />
                </span>
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-100">
                  <div className="px-6 py-2">
                    <div className="grid grid-cols-3 py-2 mb-1">
                      <span className="text-xs font-semibold text-gray-400 uppercase">Item</span>
                      <span className="text-xs font-semibold text-gray-400 uppercase text-center">Individual</span>
                      <span className="text-xs font-semibold text-orange-500 uppercase text-right">Bulk</span>
                    </div>
                    {cat.items.map((item) => (
                      <div key={item.label} className="grid grid-cols-3 py-3 border-t border-gray-100 items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900 leading-tight">{item.label}</p>
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mt-1 inline-block ${item.tagColor}`}>{item.tag}</span>
                        </div>
                        <div className="text-center">
                          <p className="text-base font-bold text-gray-700">{item.individual}</p>
                          <p className="text-xs text-gray-400">{item.individualUnit}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-base font-bold text-orange-500">{item.bulk}</p>
                          <p className="text-xs text-gray-400">{item.bulkUnit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-6 py-4 bg-orange-50 border-t border-orange-100">
                    <a href={cat.orderLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                      <i className="bi bi-whatsapp" /> Order {cat.title}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Included Services */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="text-base font-bold text-gray-900 font-[var(--font-playfair)] mb-4">📦 Included Services</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2">
              <i className="bi bi-check-circle-fill text-green-500" />
              <span className="text-sm text-gray-700 font-medium">Stapling — <span className="text-green-600 font-bold">Free</span></span>
            </div>
            <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2">
              <i className="bi bi-bicycle text-orange-500" />
              <span className="text-sm text-gray-700 font-medium">Delivery — <span className="text-orange-500 font-bold">From ₹5</span></span>
            </div>
          </div>
        </div>

        {/* Custom Quote */}
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
          <i className="bi bi-chat-dots text-4xl text-gray-400 mb-4 block" />
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-3">Need a Custom Quote?</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">Bulk order or special requirement? We will give you the best price instantly on WhatsApp.</p>
          <a href={WA_LINKS.quote} target="_blank" rel="noreferrer" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            <i className="bi bi-whatsapp mr-2" />Get Custom Quote on WhatsApp
          </a>
          <p className="text-gray-400 text-xs mt-6">* Bulk pricing available for larger orders.</p>
        </div>

      </div>
    </main>
  );
}