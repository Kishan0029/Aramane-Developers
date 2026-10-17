import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { KeyNumbers } from "@/components/KeyNumbers";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { WhyAramane } from "@/components/WhyAramane";
import { LifestyleBand } from "@/components/LifestyleBand";
import { CompletedProjects } from "@/components/CompletedProjects";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <KeyNumbers />
        <FeaturedProjects />
        <WhyAramane />
        <LifestyleBand />
        <CompletedProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
