"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "You can place an order by messaging us on WhatsApp or by giving us a call. Just send your file and tell us what you need — we will take care of the rest instantly.",
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept any file format that can be shared on WhatsApp — including PDF, JPG, PNG, Word documents, Excel sheets, and more. If you can send it on WhatsApp, we can print it.",
  },
  {
    question: "How long does delivery take?",
    answer: "We aim to deliver within 2 hours from the time your order is accepted. We move fast so you don't have to wait.",
  },
  {
    question: "Which areas do you deliver to?",
    answer: "We currently deliver within the Ambattur radius in Chennai. If you are unsure whether we cover your area, just drop us a WhatsApp message and we will confirm instantly.",
  },
  {
    question: "How do I make payment?",
    answer: "We follow a simple Cash on Delivery (COD) model. You pay after receiving your order — via cash or UPI. No advance payment required.",
  },
  {
    question: "Are my documents kept private?",
    answer: "Absolutely. Your files are completely private and are deleted immediately after printing. We never store, share, or reuse your documents.",
  },
  {
    question: "What are your working hours?",
    answer: "We operate during two slots — Morning: 5:00 AM to 11:00 AM and Evening: 6:00 PM to 12:00 AM. We are open when most offline shops are closed, so you can always count on us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-20 bg-orange-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-3 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-[var(--font-playfair)]">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-lg">Everything you need to know about StationX.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button type="button" onClick={() => toggle(index)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                <span className="text-sm md:text-base font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`flex-none w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-500"}`}>
                  <i className={`bi ${openIndex === index ? "bi-dash" : "bi-plus"} text-sm`} />
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">Still have questions? We are just a message away.</p>
          <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20have%20a%20query." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200 text-sm">
            <i className="bi bi-whatsapp" /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}