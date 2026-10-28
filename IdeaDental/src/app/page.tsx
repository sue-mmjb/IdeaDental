import MotionProvider from "@/components/MotionProvider";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
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
        <WhyUs />
        <Doctors />
        <Technology />
        <Pricing />
        <Testimonials />
        <Faq compact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
