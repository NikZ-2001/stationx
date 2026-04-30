import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3 font-[var(--font-playfair)]">🖨️ StationX</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Premium quality printing services for all your needs. Fast, affordable, and reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-orange-500 transition">Home</Link></li>
            <li><Link href="/services" className="hover:text-orange-500 transition">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-orange-500 transition">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-orange-500 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500 transition">Contact</Link></li>
            <li><Link href="/feedback" className="hover:text-orange-500 transition">Feedback</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 <a href="tel:+918667344556" className="hover:text-orange-500 transition">+91 86673 44556</a></li>
            <li>💬 <a href="https://wa.me/918667344556?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">WhatsApp Us</a></li>
            <li>📧 <a href="mailto:niksonandrew8@gmail.com" className="hover:text-orange-500 transition">hello@stationx.in</a></li>
            <li>📍 Ambattur, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} StationX. All rights reserved. Made with ❤️ in Ambattur.
      </div>
    </footer>
  );
}