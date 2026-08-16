import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";

export default function PrintingPage() {
  return (
    <main className="pt-4">
      <Services />
      <Pricing />
      <WhyUs />
      <CTA />
    </main>
  );
}