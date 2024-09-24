import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import { Banner } from "./components/Banner";
import About from "./components/About";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Banner />
        <About />
        {/* <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;