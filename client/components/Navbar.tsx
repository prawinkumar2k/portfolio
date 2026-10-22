import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Search, Sparkles, Download } from "lucide-react";
import { useTheme } from "@/lib/theme";

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
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
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
      {/* Top scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />

      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "navbar-glass" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo with User's Photo */}
            <motion.a
              href="#home"
              onClick={handleScroll}
              className="flex items-center gap-3 flex-shrink-0 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl overflow-hidden border-2 border-indigo-600/30 dark:border-purple-400/30 shadow-md group-hover:border-indigo-600 transition-colors">
                <img
                  src="/profile.jpg"
                  alt="Prawin Kumar N"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#09051C]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight leading-tight group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                  Prawin Kumar N
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  Software Development Engineer
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={handleScroll}
                    className={`relative px-4 py-1 text-xs font-bold rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* CTA Buttons & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Quick Search Button */}
              <button
                onClick={() =>
                  document.dispatchEvent(
                    new KeyboardEvent("keydown", { key: "k", metaKey: true })
                  )
                }
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-xs font-medium hover:border-indigo-300 dark:hover:border-white/20 transition-all shadow-sm"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span>Search</span>
                <kbd className="px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/15 text-[10px] text-slate-500 dark:text-slate-300">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-amber-300 hover:border-indigo-300 dark:hover:border-white/20 shadow-sm transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </motion.button>

              {/* Resume Download CTA */}
              <a
                href="/PrawinKumar-Resume.pdf"
                download="PrawinKumar-Resume.pdf"
                className="btn-secondary text-xs sm:text-sm px-3.5 py-2 hidden md:inline-flex items-center gap-1.5 shadow-sm"
                title="Download Resume"
              >
                <Download className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400" />
                <span>Resume</span>
              </a>

              {/* Hire Me CTA */}
              <motion.a
                href="#contact"
                onClick={handleScroll}
                className="btn-primary text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hire Me</span>
              </motion.a>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <motion.button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-amber-400"
                whileTap={{ scale: 0.9 }}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <motion.div
          className="lg:hidden overflow-hidden border-t border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-[#0F0B2D]/95 backdrop-blur-2xl shadow-xl"
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <div className="px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleScroll}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                whileHover={{ x: 4 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-3 pb-1 grid grid-cols-2 gap-2">
              <a
                href="/PrawinKumar-Resume.pdf"
                download="PrawinKumar-Resume.pdf"
                className="btn-secondary w-full justify-center text-sm py-2.5 flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                onClick={handleScroll}
                className="btn-primary w-full justify-center text-sm py-2.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
