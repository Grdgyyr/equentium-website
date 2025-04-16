// app/about/page.tsx

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/app/about/Hero";
import { Story } from "@/app/about/Story";
import { Team } from "@/app/about/Team";
import { Recruitment } from "@/app/about/Recruitment";
import { Position } from "@/app/about/Position";
import { Testimonials } from "@/app/about/Testimonials";
import { CallToAction } from "@/app/about/CallToAction";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Team />
      <Recruitment />
      <Position />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
