import CalInit from "@/components/CalInit";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/Proof"; // evolving into portfolio treatment
import TheStudio from "@/components/TheStudio"; // new calm editorial philosophy section
import HowWeWork from "@/components/HowWeWork"; // narrative "how we work together"
import Partners from "@/components/WhoFor"; // refined audience fit
import Invitation from "@/components/Invitation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CalInit />
      <Nav />
      <main className="relative overflow-x-clip">
        {/* Current flow: Hero → The Studio (philosophy) → Approach → Work (with cards) → Partners → Invitation (card) */}
        <Hero />
        <TheStudio />
        <HowWeWork />
        <SelectedWork />
        <Partners />
        <Invitation />
      </main>
      <Footer />
    </>
  );
}
