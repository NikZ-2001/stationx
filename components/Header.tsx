"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn md:hidden">
  {menuOpen ? (
    <span className="text-2xl text-gray-700">✕</span>
  ) : (
    <span className="text-2xl text-gray-700">☰</span>
  )}
</button>
        <Link href="/" className="text-2xl font-bold text-orange-500 tracking-tight font-[var(--font-playfair)]">
          🖨️ StationX
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-orange-500 transition">Home</Link>
          <Link href="/services" className="hover:text-orange-500 transition">Services</Link>
          <Link href="/pricing" className="hover:text-orange-500 transition">Pricing</Link>
          <Link href="/about" className="hover:text-orange-500 transition">About</Link>
          <Link href="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link href="/feedback" className="hover:text-orange-500 transition">Feedback</Link>
        </nav>
        <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="hidden md:inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
          Order on WhatsApp
        </a>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">Home</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">Services</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">Pricing</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">Contact</Link>
          <Link href="/feedback" onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-2 border-b border-gray-100">Feedback</Link>
          <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-4 py-3 rounded-full text-center hover:bg-orange-600 transition mt-2">
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}