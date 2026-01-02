import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { DetailGallery } from "@/components/sections/DetailGallery";
import { AccessSection } from "@/components/sections/AccessSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ProductShowcase />
      <DetailGallery />
      <AccessSection />
      <Expertise />
      <Contact />
    </main>
  );
}

