import MotionProvider from "@/components/MotionProvider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Doctors from "@/components/sections/Doctors";
import Technology from "@/components/sections/Technology";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Doctors />
        <Technology />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </MotionProvider>
  );
}
