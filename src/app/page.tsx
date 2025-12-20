import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Expertise } from "@/components/sections/Expertise";
import { Solutions } from "@/components/sections/Solutions";
import { Process } from "@/components/sections/Process";
import { WhyWelwitech } from "@/components/sections/WhyWelwitech";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Expertise />
      <Solutions />
      <Process />
      <WhyWelwitech />
      <Contact />
    </main>
  );
}
