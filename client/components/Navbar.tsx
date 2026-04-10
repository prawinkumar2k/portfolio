import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <motion.nav
      className="fixed top-0 w-full z-50 border-b border-white/10 glass-dark"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <a href="#home" className="text-2xl font-bold text-gradient">
              PK
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleScroll}
                className="text-white/70 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="/Prawinkumar_resume.pdf"
            download="Prawinkumar_resume.pdf"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleScroll}
                className="block px-3 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ x: 5 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="/Prawinkumar_resume.pdf"
              download="Prawinkumar_resume.pdf"
              className="block w-full mt-4 px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-center"
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
