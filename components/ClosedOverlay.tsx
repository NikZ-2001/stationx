"use client";
import { useState, useEffect } from "react";

function getServiceStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  const morningStart = 5 * 60;
  const morningEnd = 11 * 60;
  const eveningStart = 18 * 60;
  const eveningEnd = 24 * 60;

  const isOpen =
    (timeInMinutes >= morningStart && timeInMinutes < morningEnd) ||
    (timeInMinutes >= eveningStart && timeInMinutes < eveningEnd);

  let nextSlot = "";
  if (!isOpen) {
    if (timeInMinutes < morningStart) {
      nextSlot = "5:00 AM today";
    } else if (timeInMinutes >= morningEnd && timeInMinutes < eveningStart) {
      nextSlot = "6:00 PM today";
    } else {
      nextSlot = "5:00 AM tomorrow";
    }
  }

  return { isOpen, nextSlot };
}

export default function ClosedOverlay() {
  const [status, setStatus] = useState({ isOpen: true, nextSlot: "" });

  useEffect(() => {
    setStatus(getServiceStatus());
    const interval = setInterval(() => setStatus(getServiceStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (status.isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Dim overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" />

      {/* Center card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 mx-6 max-w-sm w-full text-center">
          <p className="text-5xl mb-4">🕐</p>
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-2">
            Currently Closed
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We are not accepting orders right now. We will be back at <strong className="text-orange-500">{status.nextSlot}</strong>.
          </p>

          {/* Working hours */}
          <div className="bg-orange-50 rounded-2xl p-4 mb-6 text-left">
            <p className="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-widest">Working Hours</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">🌅 Morning</span>
              <span className="text-sm font-semibold text-gray-900">5:00 AM – 11:00 AM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">🌙 Evening</span>
              <span className="text-sm font-semibold text-gray-900">6:00 PM – 12:00 AM</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 mb-4">
            💡 Beat the queue — order early morning or late evening when offline shops are closed!
          </p>

          <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20schedule%20an%20order%20for%20the%20next%20slot." target="_blank" rel="noreferrer" className="block w-full bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
            📅 Schedule for Next Slot
          </a>

          <button onClick={() => document.querySelector(".closed-overlay")?.classList.add("hidden")} className="mt-3 text-xs text-gray-400 hover:text-gray-600 transition">
            Browse anyway →
          </button>
        </div>
      </div>
    </div>
  );
}