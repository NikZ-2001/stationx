"use client";
import { useState } from "react";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !rating || !message) return;

    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const text = `Hello StationX! 👋\n\nNew Feedback Received:\n\n👤 Name: ${name}\n⭐ Rating: ${stars} (${rating}/5)\n💬 Message: ${message}\n\n— Sent from StationX Website`;
    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/918667344556?text=${encoded}`;
    window.open(waUrl, "_blank");

    setName("");
    setRating(0);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-3xl mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Your Opinion Matters
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Share Your Feedback
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Help us serve you better.</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-10">

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-3xl transition ${rating >= star ? "text-orange-500" : "text-gray-300"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name || !rating || !message}
            className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            📱 Send Feedback on WhatsApp
          </button>

          <p className="text-center text-gray-400 text-xs mt-4">
            Clicking submit will open WhatsApp with your feedback pre-filled.
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-3xl mb-3">💬</p>
          <h2 className="text-lg font-bold text-gray-900 font-[var(--font-playfair)] mb-2">We Read Every Feedback</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your feedback goes directly to our WhatsApp. We personally read and act on every message to keep improving our service.
          </p>
        </div>

      </div>
    </main>
  );
}