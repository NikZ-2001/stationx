"use client";
import { useState, useEffect } from "react";

const VACATION_END = new Date("2026-05-31T00:00:00");

function isOnVacation() {
  return new Date() < VACATION_END;
}

export default function ClosedOverlay() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (isOnVacation()) {
      setShow(true);
    }
    const handleDismiss = () => setDismissed(true);
    window.addEventListener("dismissOverlay", handleDismiss);
    return () => window.removeEventListener("dismissOverlay", handleDismiss);
  }, []);

  if (!show || dismissed) return null;

  const preOrderMessage = `Hey StationX! I would like to place a pre-order. Please confirm once you are back on 31st May.`;
  const preOrderLink = `https://wa.me/919150190729?text=${encodeURIComponent(preOrderMessage)}`;

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center pointer-events-auto">

          <p className="text-5xl mb-4">🏖️</p>
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-2">
            We're on Vacation!
          </h2>
          <p className="text-orange-500 font-semibold text-sm mb-3">
            We'll be back on 31st May.
          </p>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Sorry for the inconvenience caused. If you would still like to place a pre-order, feel free to continue browsing and place your order anytime.
          </p>

          <div className="bg-orange-50 rounded-2xl p-4 mb-6 text-left">
            <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-widest">Regular Working Hours</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">🌅 Morning</span>
              <span className="text-sm font-semibold text-gray-900">5:00 AM – 11:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">🌙 Evening</span>
              <span className="text-sm font-semibold text-gray-900">6:00 PM – 12:00 AM</span>
            </div>
          </div>

          <a href={preOrderLink} target="_blank" rel="noreferrer" className="block w-full bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition mb-3">
            📅 Place a Pre-Order on WhatsApp
          </a>
          <button type="button" onClick={() => setDismissed(true)} className="block w-full bg-gray-100 text-gray-600 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
            Browse Anyway →
          </button>
        </div>
      </div>
    </div>
  );
}