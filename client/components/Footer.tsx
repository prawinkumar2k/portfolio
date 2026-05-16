import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
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
    <footer className="bg-[#0F172A] text-white relative">
      {/* Top gradient accent */}
      <div className="h-0.5 w-full" style={{ background: "linear-gradient(90deg, #0A66C2, #6366F1, #38BDF8)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #0A66C2, #6366F1)" }}
              >
                PK
              </div>
              <span className="font-bold text-white text-lg">Prawin Kumar N</span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
              Full Stack Developer specializing in MERN Stack, ERP Systems, and AI-powered solutions.
              Building scalable applications that make a difference.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#0A66C2] flex items-center justify-center text-[#94A3B8] hover:text-white transition-all duration-200 border border-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleScroll}
                  className="text-[#94A3B8] hover:text-[#38BDF8] text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-widest">
              Get In Touch
            </h4>
            <div className="space-y-2 mb-6">
              <p className="text-[#94A3B8] text-sm">prawinkumar2k4@gmail.com</p>
              <p className="text-[#94A3B8] text-sm">+91 8807054164</p>
              <p className="text-[#94A3B8] text-sm">Erode, Tamil Nadu, India</p>
            </div>
            <a
              href="/PrawinKumar.N_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #0A66C2, #0956A8)", boxShadow: "0 4px 14px rgba(10,102,194,0.3)" }}
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#64748B] text-sm">
            © {currentYear} Prawin Kumar N. All rights reserved.
          </p>
          <p className="text-[#64748B] text-sm">
            Built with React · Tailwind CSS · Framer Motion
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#0A66C2] text-[#94A3B8] hover:text-white text-sm transition-all duration-200 border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Back to top"
            id="footer-back-to-top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
