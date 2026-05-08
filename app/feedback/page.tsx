import type { Metadata } from "next";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "Feedback — StationX Printing Service Ambattur Chennai",
  description: "Share your feedback about StationX printing service in Ambattur, Chennai. Help us serve you better.",
};

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-widest">
            Your Opinion Matters
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-[var(--font-playfair)]">
            Share Your Feedback
          </h1>
          <p className="text-gray-500 mt-3 text-lg">Help us serve you better.</p>
        </div>
        <FeedbackForm />
        <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
          <p className="text-gray-500 text-sm">
            Your feedback helps us improve our services. We read every single response. 🙏
          </p>
        </div>
      </div>
    </main>
  );
}