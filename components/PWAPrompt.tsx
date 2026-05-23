"use client";
import { useState, useEffect } from "react";

export default function PWAPrompt() {
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const alreadyShown = localStorage.getItem("pwa_prompt_shown");
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isMobile && !alreadyShown && !isStandalone) {
      setIsIOS(ios);
      setTimeout(() => setShow(true), 3000);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("pwa_prompt_shown", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 animate-fade-up">
      <div className="bg-white rounded-3xl shadow-2xl p-6 border border-orange-100">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-md">
              <i className="bi bi-printer-fill text-white text-xl" />
            </div>
            <div>
              <p className="font-bold text-gray-900 font-[var(--font-playfair)]">Add StationX to Home Screen</p>
              <p className="text-xs text-gray-400">Get the app-like experience</p>
            </div>
          </div>
          <button type="button" onClick={handleDismiss} className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-200 transition flex-none ml-2">
            <i className="bi bi-x text-sm" />
          </button>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 mb-4">
          <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-3">How to install:</p>
          {isIOS ? (
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">1</span>
                <p className="text-sm text-gray-600">Tap the <strong>Share</strong> button <i className="bi bi-box-arrow-up text-orange-500" /> at the bottom of Safari</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">2</span>
                <p className="text-sm text-gray-600">Scroll down and tap <strong>"Add to Home Screen"</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">3</span>
                <p className="text-sm text-gray-600">Tap <strong>"Add"</strong> in the top right corner</p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">1</span>
                <p className="text-sm text-gray-600">Tap the <strong>3 dots menu</strong> <i className="bi bi-three-dots-vertical text-orange-500" /> in Chrome</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">2</span>
                <p className="text-sm text-gray-600">Tap <strong>"Add to Home Screen"</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-none">3</span>
                <p className="text-sm text-gray-600">Tap <strong>"Add"</strong> to confirm</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <button type="button" onClick={handleDismiss} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Maybe Later
          </button>
          <button type="button" onClick={handleDismiss} className="flex-1 bg-orange-500 text-white py-3 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
            Got it! ✓
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-3">
          This prompt won't appear again after dismissing.
        </p>
      </div>
    </div>
  );
}