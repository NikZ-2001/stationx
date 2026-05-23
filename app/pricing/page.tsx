import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing",
  description: "Affordable printing prices in Ambattur, Chennai. B&W printout from ₹1, color printing from ₹8, photo printing from ₹20. No hidden charges.",
  alternates: { canonical: "https://stationx.vercel.app/pricing" },
  openGraph: {
    title: "Pricing — StationX Ambattur Chennai",
    description: "B&W printout from ₹1, color printing from ₹8, photo prints from ₹20. Affordable and transparent pricing in Ambattur Chennai.",
    url: "https://stationx.vercel.app/pricing",
  },
};
export { default } from "./PricingClient";