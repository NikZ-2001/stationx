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
              <i className="bi bi-whatsapp text-orange-500 text-2xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <a href="https://wa.me/919150190729" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline text-sm">
                  +91 91501 90729
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="bi bi-telephone-fill text-orange-500 text-2xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <a href="tel:+919150190729" className="text-orange-500 hover:underline text-sm">
                  +91 91501 90729
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="bi bi-envelope-fill text-orange-500 text-2xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <a href="mailto:stationx.chennai@gmail.com" className="text-orange-500 hover:underline text-sm">
                  stationx.chennai@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <i className="bi bi-geo-alt-fill text-orange-500 text-2xl mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-500 text-sm">Ambattur, Chennai, Tamil Nadu</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-orange-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <i className="bi bi-clock-fill text-orange-500 text-lg" />
                <p className="font-bold text-gray-900 text-sm">Working Hours</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    🌅 Morning Slot
                  </span>
                  <span className="text-sm font-semibold text-gray-900">5:00 AM – 11:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    🌙 Evening Slot
                  </span>
                  <span className="text-sm font-semibold text-gray-900">6:00 PM – 12:00 AM</span>
                </div>
                <div className="border-t border-orange-100 pt-3 mt-2">
                  <p className="text-xs text-orange-600 font-medium flex items-center gap-1">
                    <i className="bi bi-lightning-charge-fill" />
                    We are open when offline shops are closed!
                  </p>
                </div>
              </div>
            </div>

            {/* Value Props */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <i className="bi bi-check-circle-fill text-green-500" />
                No queue — answered instantly on WhatsApp
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <i className="bi bi-check-circle-fill text-green-500" />
                Home delivery available from ₹5
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <i className="bi bi-check-circle-fill text-green-500" />
                Secure document handling guaranteed
              </div>
            </div>
          </div>

          {/* WhatsApp Order Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 font-[var(--font-playfair)] mb-4">Order via WhatsApp</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The fastest way to place your order is via WhatsApp. Just send us your file and tell us what you need — we will handle the rest instantly.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex items-center gap-2">
                  <i className="bi bi-1-circle-fill text-orange-500" />
                  Send your file (PDF, JPG, Word, Excel)
                </li>
                <li className="flex items-center gap-2">
                  <i className="bi bi-2-circle-fill text-orange-500" />
                  Tell us print type and quantity
                </li>
                <li className="flex items-center gap-2">
                  <i className="bi bi-3-circle-fill text-orange-500" />
                  We confirm price instantly
                </li>
                <li className="flex items-center gap-2">
                  <i className="bi bi-4-circle-fill text-orange-500" />
                  Pick up or get it delivered to your door
                </li>
              </ul>

              {/* Delivery Info */}
              <div className="bg-orange-50 rounded-2xl p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <i className="bi bi-bicycle text-orange-500" /> Delivery Fee
                  </span>
                  <span className="text-sm font-bold text-orange-500">Starting ₹5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <i className="bi bi-clock text-orange-500" /> Estimated Time
                  </span>
                  <span className="text-sm font-bold text-orange-500">~2 Hours</span>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919150190729?text=Hey%20StationX!%20I%20want%20to%20place%20an%20order." target="_blank" rel="noreferrer" className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-200 flex items-center justify-center gap-2">
              <i className="bi bi-whatsapp text-lg" /> Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}