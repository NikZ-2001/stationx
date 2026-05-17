import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3 font-[var(--font-playfair)]">
            <i className="bi bi-printer-fill text-gray-400 mr-2" />StationX
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Secure, premium quality printing services for all your needs. Fast, affordable, and reliable. Your documents are handled with complete privacy.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/stationx.chennai" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition text-sm">
              <i className="bi bi-instagram text-xl" />
              <span>Instagram</span>
            </a>
            <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition text-sm">
              <i className="bi bi-whatsapp text-xl" />
              <span>WhatsApp</span>
            </a>
          </div>
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
            <li><Link href="/delivery" className="hover:text-orange-500 transition">Delivery Areas</Link></li>
            <li><Link href="/feedback" className="hover:text-orange-500 transition">Feedback</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+919150190729" className="hover:text-orange-500 transition flex items-center gap-2">
                <i className="bi bi-telephone-fill" />
                +91 91501 90729
              </a>
            </li>
            <li>
              <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="hover:text-orange-500 transition flex items-center gap-2">
                <i className="bi bi-whatsapp" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href="mailto:stationx.chennai@gmail.com" className="hover:text-orange-500 transition flex items-center gap-2">
                <i className="bi bi-envelope-fill" />
                stationx.chennai@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <i className="bi bi-geo-alt-fill" />
              Ambattur, Chennai
            </li>
            <li className="flex items-start gap-2">
              <i className="bi bi-clock-fill mt-0.5" />
              <div>
                <p>8:00 AM – 11:00 AM</p>
                <p>6:00 PM – 12:00 AM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} StationX. All rights reserved. Made with <i className="bi bi-heart-fill text-red-500" /> in Chennai.
      </div>
    </footer>
  );
}