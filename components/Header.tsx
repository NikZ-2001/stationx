"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    window.dispatchEvent(new CustomEvent("dismissOverlay"));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button type="button" onClick={handleMenuToggle} className="md:hidden w-12 h-12 flex flex-col justify-center items-center bg-transparent border-none outline-none cursor-pointer" style={{ WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}>
          {menuOpen ? (
            <span className="text-2xl text-gray-700">✕</span>
          ) : (
            <span className="text-2xl text-gray-700">☰</span>
          )}
        </button>
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-bold text-orange-500 tracking-tight font-[var(--font-playfair)]">
          <i className="bi bi-printer-fill text-gray-400 mr-1" /> StationX
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/printing" className="hover:text-orange-500 transition font-bold text-gray-900">Printing</Link>
          <Link href="/stationery" className="hover:text-orange-500 transition font-bold text-gray-900">Stationery</Link>
          <Link href="/delivery" className="hover:text-orange-500 transition">Delivery</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link href="/feedback" className="hover:text-orange-500 transition">Feedback</Link>
        </nav>
        <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
          <i className="bi bi-whatsapp" /> Order Now
        </a>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2"><i className="bi bi-house" />Home</Link>
          <Link href="/printing" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2 font-bold text-gray-900"><i className="bi bi-printer" />Printing</Link>
          <Link href="/stationery" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2 font-bold text-gray-900"><i className="bi bi-journal-text" />Stationery</Link>
          <Link href="/delivery" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2"><i className="bi bi-truck" />Delivery</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2"><i className="bi bi-info-circle" />About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2"><i className="bi bi-telephone" />Contact</Link>
          <Link href="/feedback" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100 flex items-center gap-2"><i className="bi bi-chat-heart" />Feedback</Link>
          <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-4 py-3 rounded-full text-center hover:bg-orange-600 transition flex items-center justify-center gap-2 mt-2">
            <i className="bi bi-whatsapp" /> Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}