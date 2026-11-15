import Hero from "@/components/Hero";
import PressMedia from "@/components/PressMedia";
import AboutTrang from "@/components/AboutTrang";
import Metrics from "@/components/Metrics";
import CoursesSection from "@/components/CoursesSection";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressMedia />
      <AboutTrang />
      <Metrics />
      <CoursesSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
