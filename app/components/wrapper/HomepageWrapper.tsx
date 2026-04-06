import NavigationSection from "../shared/Navigation";
import HeroSection from "../homepage/IntroSection"; 
import AboutMe from "../homepage/AboutMe";
import Solutions from "../homepage/Solutions";
import Gallery from "../homepage/Gallery";
import Contact from "../homepage/Contact";
import Footer from "../shared/Footer";



export const HomepageWrapper = () => {
  return (
    <div className="bg-[var(--background-color)]">
      <NavigationSection />
      <HeroSection />
      <AboutMe />
      <Solutions />
      <Gallery />
      <Contact />
      <Footer/>
    </div>
  );
};
