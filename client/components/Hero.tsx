import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Download, Briefcase, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert",
  "ERP Systems Developer",
  "AI Enthusiast",
];

const techIcons = [
  { label: "React", color: "#61DAFB", icon: "⚛" },
  { label: "Node.js", color: "#339933", icon: "🟢" },
  { label: "MongoDB", color: "#47A248", icon: "🍃" },
  { label: "Python", color: "#3776AB", icon: "🐍" },
  { label: "AWS", color: "#FF9900", icon: "☁" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0F9FF 100%)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="blob-1"
          style={{ top: "-15%", right: "-10%", width: 700, height: 700 }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob-2"
          style={{ bottom: "-10%", left: "-5%", width: 500, height: 500 }}
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#0A66C2 1px, transparent 1px), linear-gradient(90deg, #0A66C2 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
          {/* Left: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-card text-sm font-medium text-[#475569]">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span>Available for Freelance &amp; Full Stack Projects</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0F172A] leading-tight mb-4 font-display"
            >
              Hi, I'm{" "}
              <span className="text-gradient-blue">Prawin Kumar N</span>
            </motion.h1>

            {/* Dynamic role */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-[#0A66C2]">
                <span>{displayed}</span>
                <span className="w-0.5 h-6 bg-[#0A66C2] animate-pulse" />
              </div>
              <p className="text-[#64748B] mt-1 text-sm font-medium tracking-wide">
                Full Stack Developer · MERN Stack · ERP Systems · AI Enthusiast
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-lg"
            >
              I build scalable web applications, ERP systems, AI-powered solutions, and modern
              digital experiences that serve thousands of users in production.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-view-projects"
              >
                <Sparkles className="w-4 h-4" />
                View Projects
              </motion.button>

              <motion.a
                href="/PrawinKumar.N_Resume.pdf"
                download
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-download-resume"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)", boxShadow: "0 4px 14px rgba(99,102,241,0.3)" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-hire-me"
              >
                <Briefcase className="w-4 h-4" />
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {[
                { Icon: Github, href: "https://github.com/prawinkumar2k", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/in/prawinkumar-n", label: "LinkedIn", color: "#0A66C2" },
                { Icon: Mail, href: "mailto:prawinkumar2k4@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#64748B] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:shadow-card-hover transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden sm:block">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Main profile card */}
            <motion.div
              className="relative w-80 h-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 180deg, #0A66C2, #38BDF8, #6366F1, #0A66C2)",
                  padding: 3,
                }}
              >
                <div className="w-full h-full rounded-full bg-[#F8FAFC]" />
              </div>

              {/* Profile placeholder */}
              <div
                className="absolute inset-3 rounded-full flex flex-col items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg, #0A66C2 0%, #6366F1 100%)" }}
              >
                <div className="text-6xl font-bold font-display">PK</div>
                <div className="text-sm font-medium mt-1 opacity-90">Software Developer</div>
              </div>

              {/* Floating tech badges */}
              {techIcons.map((tech, i) => {
                const angle = (i / techIcons.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={tech.label}
                    className="absolute bg-white rounded-xl px-3 py-1.5 shadow-card border border-[#E2E8F0] text-xs font-semibold text-[#0F172A] flex items-center gap-1.5"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    <span>{tech.icon}</span>
                    {tech.label}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats cards */}
            <div className="absolute right-0 bottom-4 flex flex-col gap-3">
              {[
                { num: "50K+", label: "Users Served" },
                { num: "5+", label: "Live Apps" },
              ].map(({ num, label }) => (
                <motion.div
                  key={label}
                  className="bg-white rounded-xl px-4 py-3 shadow-card border border-[#E2E8F0] text-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="text-xl font-bold text-gradient-blue">{num}</div>
                  <div className="text-xs text-[#64748B] font-medium">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#94A3B8]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
