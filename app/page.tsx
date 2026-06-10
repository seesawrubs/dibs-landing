import CalInit from "@/components/CalInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Process from "@/components/Process";
import WhoFor from "@/components/WhoFor";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CalInit />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <Proof />
        <Process />
        <WhoFor />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
