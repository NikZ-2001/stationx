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
  let nextSlotTime = "";
  if (!isOpen) {
    if (timeInMinutes < morningStart) {
      nextSlot = "5:00 AM today";
      nextSlotTime = "5:00 AM";
    } else if (timeInMinutes >= morningEnd && timeInMinutes < eveningStart) {
      nextSlot = "6:00 PM today";
      nextSlotTime = "6:00 PM";
    } else {
      nextSlot = "5:00 AM tomorrow";
      nextSlotTime = "5:00 AM";
    }
  }

  return { isOpen, nextSlot, nextSlotTime };
}

export default function ClosedOverlay() {
  const [status, setStatus] = useState({ isOpen: true, nextSlot: "", nextSlotTime: "" });
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setStatus(getServiceStatus());
    const interval = setInterval(() => setStatus(getServiceStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleDismiss = () => setDismissed(true);
    window.addEventListener("dismissOverlay", handleDismiss);
    return () => window.removeEventListener("dismissOverlay", handleDismiss);
  }, []);

  if (status.isOpen || dismissed) return null;

  const scheduleMessage = `Hey StationX! I would like to schedule a print order for the next available slot at ${status.nextSlotTime}. Please confirm when you are open.`;
  const scheduleLink = `https://wa.me/919150190729?text=${encodeURIComponent(scheduleMessage)}`;

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center pointer-events-auto">
          <p className="text-5xl mb-4">🕐</p>
          <h2 className="text-2xl font-bold text-gray-900 font-[var(--font-playfair)] mb-2">
            Currently Closed
          </h2>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We are not accepting orders right now. We will be back at <strong className="text-orange-500">{status.nextSlot}</strong>.
          </p>
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
          <p className="text-xs text-gray-400 mb-6">
            💡 Beat the queue — order early morning or late evening when offline shops are closed!
          </p>
          <a href={scheduleLink} target="_blank" rel="noreferrer" className="block w-full bg-orange-500 text-white py-3 rounded-full font-semibold text-sm hover:bg-orange-600 transition mb-3">
            📅 Schedule for Next Slot
          </a>
          <button type="button" onClick={() => setDismissed(true)} className="block w-full bg-gray-100 text-gray-600 py-3 rounded-full font-semibold text-sm hover:bg-gray-200 transition">
            Browse Anyway →
          </button>
        </div>
      </div>
    </div>
  );
}