// import VerticalAccordion from "./components/AccordionSection";
import AboutSection from "./components/AboutSection";
import VerticalAccordion from "./components/AccordionSection";
import ShiftingContactForm from "./components/ContactSection";
import ShuffleHero from "./components/HeroSection";
import Example from "./components/Nav";
import StackedCardTestimonials from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Example />
      <ShuffleHero />
      <AboutSection />
      {/* <Banner /> */}
      <VerticalAccordion />
      <StackedCardTestimonials />
      <ShiftingContactForm />
      <FooterSection />
      {/* <CollapseCardFeatures />
      <AccordionSolutions />
      <ShiftingContactForm /> */}
    </>
  );
}

export default App;
