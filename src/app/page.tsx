import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Cta } from "@/components/home/Cta";
import { Contact } from "@/components/home/Contact";
import { ClientStoriesHome } from "@/components/home/ClientStoriesHome";
import { WhatWeDo } from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhatWeDo />
      <WhyChooseUs />
      <ClientStoriesHome />
      <Testimonials />
      <Cta />
      <Contact />
    </>
  );
}
