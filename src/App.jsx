import Banner from "./components/BannerSection";
import ShiftingContactForm from "./components/ContactSection";
import CollapseCardFeatures from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import ShuffleHero from "./components/HeroSection";
import Example from "./components/Nav";
import AccordionSolutions from "./components/SolutionsSection";
import ScrollingTestimonials from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <Example />
      <ShuffleHero />
      <Banner />
      {/* <CollapseCardFeatures />
      <AccordionSolutions />
      <ScrollingTestimonials />
      <ShiftingContactForm />
      <FooterSection /> */}
    </>
  );
}

export default App;
