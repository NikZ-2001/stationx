import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Delivery Areas",
  description: "StationX delivers prints within 2 hours to Ambattur OT, Annanur, Kallikuppam, Thirumullaivoyal, Cholambedu and 25+ areas in Chennai.",
  alternates: { canonical: "https://stationx.vercel.app/delivery" },
  openGraph: {
    title: "Delivery Areas — StationX Ambattur Chennai",
    description: "2-hour print delivery to 28+ areas in Ambattur, Chennai including Thirumullaivoyal, Kallikuppam, Pudur and more.",
    url: "https://stationx.vercel.app/delivery",
  },
};
export { default } from "./DeliveryClient";