import CalInit from "@/components/CalInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import TheStudio from "@/components/TheStudio";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Proof from "@/components/Proof";
import WhoFor from "@/components/WhoFor";
import Faq from "@/components/Faq";
import Invitation from "@/components/Invitation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CalInit />
      <Nav />
      <main className="relative overflow-x-clip">
        <Hero />
        <Problem />
        <TheStudio />
        <Services />
        <HowWeWork />
        <Proof />
        <WhoFor />
        <Faq />
        <Invitation />
      </main>
      <Footer />
    </>
  );
}
