import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />

      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "navbar-glass shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-2 flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-blue"
                style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)" }}
              >
                PK
              </div>
              <span className="font-semibold text-white hidden sm:block text-sm">
                Prawin Kumar N
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={handleScroll}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-[#A855F7] bg-white/10"
                        : "text-[#C4BEED] hover:text-white hover:bg-white/5"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#6D28D9]"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button 
                onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[#C4BEED] text-xs font-medium hover:bg-white/10 hover:text-white transition-all"
              >
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 rounded-md bg-black/30 border border-white/10 text-[10px]">⌘K</kbd>
              </button>
              <motion.a
                href="#contact"
                onClick={handleScroll}
                className="btn-primary text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#4D4880] hover:bg-slate-100 transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden overflow-hidden border-t border-white/10 bg-[#150B2D]/60 backdrop-blur-2xl border-white/10/95 backdrop-blur-xl"
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleScroll}
                className="block px-4 py-2.5 rounded-xl text-sm font-medium text-[#C4BEED] hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={handleScroll}
                className="btn-primary w-full justify-center text-sm"
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}



