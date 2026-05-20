import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Building2, GraduationCap, CheckCircle, Users, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "ERP Systems Developer",
  "AI Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="pt-16">
      {/* LinkedIn-style cover banner */}
      <div className="relative h-48 sm:h-60 overflow-hidden" style={{ background: "linear-gradient(135deg, #0F2942 0%, #0A66C2 45%, #1565C0 70%, #4338CA 100%)" }}>
        {/* Geometric pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 1200 280" preserveAspectRatio="none">
          <line x1="0" y1="140" x2="1200" y2="40" stroke="white" strokeWidth="1" />
          <line x1="0" y1="200" x2="1200" y2="100" stroke="white" strokeWidth="0.6" />
          <line x1="0" y1="80" x2="1200" y2="220" stroke="white" strokeWidth="0.6" />
          <circle cx="80" cy="70" r="50" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="1120" cy="200" r="80" fill="none" stroke="white" strokeWidth="1" />
          <circle cx="600" cy="30" r="30" fill="none" stroke="white" strokeWidth="0.8" />
        </svg>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.15) 0%, transparent 50%)" }} />
      </div>

      {/* Profile card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="bg-white rounded-b-2xl border border-t-0 border-[#E0DED9] shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar + Actions */}
          <div className="px-5 sm:px-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            {/* Avatar */}
            <motion.div
              className="relative -mt-14 sm:-mt-16 w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0A66C2 0%, #4338CA 100%)" }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <span className="text-3xl sm:text-5xl font-bold text-white font-display select-none">PK</span>
              </div>
              {/* Online dot */}
              <div className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-2 pb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="/PrawinKumar-Resume.pdf"
                download="PrawinKumar-Resume.pdf"
                id="hero-download-resume"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0A66C2 0%, #0956A8 100%)", boxShadow: "0 2px 8px rgba(10,102,194,0.35)" }}
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
              <a
                href="#contact"
                id="hero-hire-me"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#0A66C2] border border-[#0A66C2] bg-white hover:bg-[#EFF6FF] transition-all duration-200"
              >
                <Briefcase className="w-3.5 h-3.5" />
                Hire Me
              </a>
              {[
                { Icon: Github, href: "https://github.com/prawinkumar2k", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/prawinkumar-n", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:prawinkumar2k4@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white border border-[#E0DED9] flex items-center justify-center text-[#666] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile info */}
          <motion.div
            className="px-5 sm:px-8 pb-6 mt-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#000000e6] mb-1 font-display">
              Prawin Kumar N
            </h1>

            {/* Typewriter headline */}
            <p className="text-base sm:text-lg font-semibold text-[#0A66C2] mb-3 flex items-center gap-1">
              <span>{displayed}</span>
              <span className="w-0.5 h-5 bg-[#0A66C2] animate-pulse inline-block align-middle" />
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-[#666666] mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0A66C2]" />
                Erode, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#0A66C2]" />
                SearchFirst Technologies
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0A66C2]" />
                B.Tech AI &amp; DS · Nandha Engineering College
              </span>
            </div>

            {/* Social-proof badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[#0A66C2] cursor-pointer hover:underline">
                <Users className="w-4 h-4" />
                500+ connections
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#DCFCE7", color: "#15803D", border: "1px solid #BBF7D0" }}>
                <CheckCircle className="w-3 h-3" />
                Open to Work
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#FEF9C3", color: "#854D0E", border: "1px solid #FDE68A" }}>
                🏆 3x Award Winner
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#EFF6FF", color: "#0A66C2", border: "1px solid #BFDBFE" }}>
                50K+ Users Served
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 pb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          {[
            { num: "50K+", label: "Users Served", color: "#0A66C2" },
            { num: "10+", label: "Projects Shipped", color: "#4338CA" },
            { num: "20+", label: "Certifications", color: "#059669" },
            { num: "3+", label: "Awards Won", color: "#D97706" },
          ].map(({ num, label, color }, i) => (
            <motion.div
              key={label}
              className="bg-white rounded-xl border border-[#E0DED9] p-4 text-center hover:shadow-md transition-all duration-200 cursor-default"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.07, duration: 0.4 }}
            >
              <div className="text-2xl font-bold font-display mb-0.5" style={{ color }}>{num}</div>
              <div className="text-xs text-[#666666] font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
