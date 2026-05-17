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
      nextSlot = "Opens at 8:00 AM today";
    } else if (timeInMinutes >= morningEnd && timeInMinutes < eveningStart) {
      nextSlot = "Opens at 6:00 PM today";
    } else {
      nextSlot = "Opens at 8:00 AM tomorrow";
    }
  }

  let currentSlot = "";
  if (isOpen) {
    if (timeInMinutes >= morningStart && timeInMinutes < morningEnd) {
      currentSlot = "🌅 Morning slot: 8:00 AM – 11:00 AM";
    } else {
      currentSlot = "🌙 Evening slot: 6:00 PM – 12:00 AM";
    }
  }

  return { isOpen, nextSlot, currentSlot };
}

export default function ServiceStatus() {
  const [status, setStatus] = useState({ isOpen: false, nextSlot: "", currentSlot: "" });

  useEffect(() => {
    setStatus(getServiceStatus());
    const interval = setInterval(() => setStatus(getServiceStatus()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (status.isOpen) {
    return (
      <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 inline-flex w-fit">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
        <span className="text-green-700 text-xs font-semibold">We are Open</span>
        <span className="text-green-600 text-xs">· {status.currentSlot}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 inline-flex w-fit">
      <span className="w-2 h-2 bg-red-500 rounded-full inline-block" />
      <span className="text-red-700 text-xs font-semibold">Currently Closed</span>
      <span className="text-red-600 text-xs">· {status.nextSlot}</span>
    </div>
  );
}