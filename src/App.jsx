// import VerticalAccordion from "./components/AccordionSection";
import AboutSection from "./components/AboutSection";
import VerticalAccordion from "./components/AccordionSection";
import ShiftingContactForm from "./components/ContactSection";
import ShuffleHero from "./components/HeroSection";
import Example from "./components/Nav";
import StackedCardTestimonials from "./components/TestimonialsSection";
import FooterSection from "./components/FooterSection";
import TeamPage from "./pages/TeamsPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Example />
        <ShuffleHero />
        <AboutSection />
        {/* <Banner /> */}
        <VerticalAccordion />
        <StackedCardTestimonials />
        <ShiftingContactForm />
        <FooterSection />
        <Routes>
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        {/* <CollapseCardFeatures />
      <AccordionSolutions />
      <ShiftingContactForm /> */}
      </>
    </Router>
  );
}

export default App;
