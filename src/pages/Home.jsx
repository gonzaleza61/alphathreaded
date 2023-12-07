import AboutSection from "../components/AboutSection";
import VerticalAccordion from "../components/AccordionSection";
import ShiftingContactForm from "../components/ContactSection";
import ShuffleHero from "../components/HeroSection";
import Example from "../components/Nav";
import StackedCardTestimonials from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <>
      <Example />
      <ShuffleHero />
      <AboutSection />
      <VerticalAccordion />
      <StackedCardTestimonials />
      <ShiftingContactForm />
      <FooterSection />
    </>
  );
}
