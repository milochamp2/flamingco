"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BeforeAfter } from "@/components/before-after";
import { DemoSolution } from "@/components/demo-solution";
import { HowItWorks } from "@/components/how-it-works";
import { StatsBanner } from "@/components/stats-banner";
import { About } from "@/components/about";
import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <DemoSolution />
        <HowItWorks />
        <StatsBanner />
        <About />
        <Testimonials />
        <CaseStudies />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
