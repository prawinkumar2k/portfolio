import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#09051C] dark:text-white transition-colors duration-300 relative overflow-hidden selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-purple-300">
      {/* Ambient background glows for rich modern aesthetics */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Indigo Top-Right Glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-transparent dark:from-indigo-900/20 dark:via-purple-900/15 blur-3xl ambient-glow" />
        
        {/* Soft Sky Blue Center-Left Glow */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-sky-200/30 via-indigo-100/25 to-transparent dark:from-sky-950/20 dark:via-indigo-950/15 blur-3xl ambient-glow" style={{ animationDelay: "-3s" }} />
        
        {/* Soft Violet Bottom Glow */}
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tl from-purple-200/30 via-pink-100/20 to-transparent dark:from-purple-900/15 dark:via-pink-900/10 blur-3xl ambient-glow" style={{ animationDelay: "-6s" }} />

        {/* Micro-dot grid texture */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.45] dark:opacity-20" />
      </div>

      <div className="relative z-10">
        <Navbar />
        {/* Split-Screen Hero with Real Portrait */}
        <Hero />
        {/* Main Content Sections */}
        <main className="space-y-4">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Achievements />
          <GithubStats />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
