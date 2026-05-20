import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#F3F2EF" }}>
      <Navbar />
      {/* Hero spans full width then centers to LinkedIn profile width */}
      <Hero />
      {/* LinkedIn-style feed: centered card column, pb for footer */}
      <div className="pb-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
