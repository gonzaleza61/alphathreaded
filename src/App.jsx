// import VerticalAccordion from "./components/AccordionSection";
import AboutSection from "./components/AboutSection";
import VerticalAccordion from "./components/AccordionSection";
import Banner from "./components/BannerSection";
import ShiftingContactForm from "./components/ContactSection";
import CollapseCardFeatures from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import ShuffleHero from "./components/HeroSection";
import Example from "./components/Nav";
import AccordionSolutions from "./components/SolutionsSection";
import StackedCardTestimonials from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <Example />
      <ShuffleHero />
      <AboutSection />
      {/* <Banner /> */}
      <VerticalAccordion />
      <StackedCardTestimonials />
      {/* <CollapseCardFeatures />
      <AccordionSolutions />
      <ShiftingContactForm />
      <FooterSection /> */}
    </>
  );
}

export default App;
