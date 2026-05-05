export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3 text-lg">We are always happy to help you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)]">Reach Us Directly</h2>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <a href="https://wa.me/918667344556" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline text-sm">
                  +91 86673 44556
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href="tel:+918667344556" className="text-orange-500 hover:underline text-sm">
                  +91 86673 44556
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:hello@stationx.in" className="text-orange-500 hover:underline text-sm">
                  hello@stationx.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-500 text-sm">Ambattur, Chennai, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold text-gray-900">Working Hours</p>
                <p className="text-gray-500 text-sm">Monday – Saturday: 9am to 8pm</p>
                <p className="text-gray-500 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Order Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-4">Order via WhatsApp</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The fastest way to place your order is via WhatsApp. Just send us your file and tell us what you need — we will handle the rest.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Send your file (PDF, JPG, Word)</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Tell us print type and quantity</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> We confirm price instantly</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Pick up or get it delivered</li>
              </ul>
            </div>
            <a href="https://wa.me/918667344556" target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200">
              📱 Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}