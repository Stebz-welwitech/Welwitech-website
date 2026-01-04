import { HeroSection } from "@/components/blocks/hero-section-1";
import { UniFiProducts } from "@/components/blocks/unifi-products";
import { Expertise } from "@/components/sections/Expertise";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <UniFiProducts />
      <Expertise />
      <FAQ />
      <Contact />
    </>
  );
}

