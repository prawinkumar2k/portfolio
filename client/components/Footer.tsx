import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { Icon: Github, href: "https://github.com/prawinkumar2k", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/prawinkumar-n", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:prawinkumar2k4@gmail.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100/80 dark:bg-[#0B0720] border-t border-slate-200/80 dark:border-white/10 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-sm">
                PK
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Prawin Kumar N
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              Software Development Engineer &amp; Full Stack Developer. Dedicated to architecting reliable, production-ready systems and high-throughput platforms.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-400 hover:border-indigo-300 transition-colors shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleScroll}
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Direct Inquiries
            </h4>
            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 mb-4 font-medium">
              <p>prawinkumar2k4@gmail.com</p>
              <p>+91 8807054164</p>
              <p>Tamil Nadu, India</p>
            </div>
            <a
              href="/PrawinKumar-Resume.pdf"
              download="PrawinKumar-Resume.pdf"
              className="btn-primary text-xs py-2 px-4"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Prawin Kumar N. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Built with React 18, Tailwind CSS &amp; Framer Motion</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-purple-400 hover:border-indigo-300 transition-all shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
