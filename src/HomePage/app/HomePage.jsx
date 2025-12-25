import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhatIsQualty } from "./components/WhatIsQualty";
import { ProblemSection } from "./components/ProblemSection";
import { WhyUs } from "./components/WhyUs";
import { WhoWeServe } from "./components/WhoWeServe";
import { HowItWorks } from "./components/HowItWorks";
import { GlobalReach } from "./components/GlobalReach";
import { TrustedBy } from "./components/TrustedBy";
import { Certifications } from "./components/Certifications";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      <main>
        <Hero />
        <WhatIsQualty />
        <ProblemSection />
        <WhyUs />
        <WhoWeServe />
        <HowItWorks />
        <GlobalReach />
        <TrustedBy />
        <Certifications />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
