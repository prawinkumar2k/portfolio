import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubStats from "@/components/GithubStats";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen text-white bg-[#09051C]" style={{ background: "#09051C" }}>
      <Navbar />
      {/* Hero spans full width then centers to LinkedIn profile width */}
      <Hero />
      {/* LinkedIn-style feed: centered card column, pb for footer */}
      <div className="pb-8">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubStats />
        <Achievements />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
