"use client";
import { useState } from "react";

interface FeedbackEntry {
  name: string;
  rating: string;
  message: string;
  date: string;
  device: string;
}

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name || !rating || !message) return;
    setLoading(true);
    setError("");

    const newFeedback: FeedbackEntry = {
      name,
      rating: `${rating} / 5`,
      message,
      date: new Date().toISOString().split("T")[0], 
      device: typeof window !== "undefined" ? window.navigator.userAgent.includes("Mobile") ? "Mobile" : "Desktop" : "Unknown",
    };

    try {
        
      const response = await fetch("https://sheetdb.io/api/v1/yk0zn6ov2rnh8", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [newFeedback] }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setRating(0);
        setMessage("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
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
          {submitted && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-6 text-sm font-medium">
              ✅ Thank you for your feedback! We really appreciate it.
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-6 text-sm font-medium">
              ❌ {error}
            </div>
          )}

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
    <span
      key={star}
      onPointerDown={(e) => { e.preventDefault(); setRating(star); }}
      className={`text-3xl cursor-pointer select-none ${rating >= star ? "text-orange-500" : "text-gray-300"}`}
      style={{ WebkitUserSelect: "none", WebkitTapHighlightColor: "transparent", touchAction: "manipulation" }}
    >
      ★
    </span>
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
            disabled={!name || !rating || !message || loading}
            className="w-full bg-orange-500 text-white py-4 rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-gray-500 text-sm">
            Your feedback helps us improve our services. We read every single response. 🙏
          </p>
        </div>

      </div>
    </main>
  );
}