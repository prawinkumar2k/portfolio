import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Building2, GraduationCap, CheckCircle, Users, Briefcase, Sparkles, ArrowRight, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import TechParticles3D from "./TechParticles3D";

const roles = [
  "Software Development Engineer",
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Cloud & DevOps Engineer",
];

const floatingVariants: any = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 4 + i * 0.8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const marqueeTech = [
  { name: "React 18", color: "#0284C7" },
  { name: "Node.js", color: "#16A34A" },
  { name: "TypeScript", color: "#2563EB" },
  { name: "Express.js", color: "#475569" },
  { name: "MySQL", color: "#0284C7" },
  { name: "MongoDB", color: "#16A34A" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Docker", color: "#0284C7" },
  { name: "Nginx", color: "#15803D" },
  { name: "PM2", color: "#7C3AED" },
  { name: "Python", color: "#CA8A04" },
  { name: "Linux / Ubuntu", color: "#EA580C" },
  { name: "REST APIs", color: "#6366F1" },
  { name: "Git & GitHub", color: "#334155" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section id="home" className="pt-16 sm:pt-20">
      {/* Dynamic Cover Banner */}
      <div className="relative h-60 sm:h-72 overflow-hidden flex items-center justify-center border-b border-slate-200/80 dark:border-white/10 bg-gradient-to-br from-indigo-50/90 via-purple-50/70 to-slate-100 dark:from-[#09051c] dark:via-[#0c0827] dark:to-[#170d38]">
        
        {/* 3D WebGL Particles Background */}
        <TechParticles3D />

        {/* Ambient Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60 dark:opacity-40 z-0" />
        
        {/* Soft radial glow */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.12)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.2)_0%,transparent_60%)]" />

        {/* Center Name Display */}
        <div className="relative z-10 flex flex-col items-center select-none text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-indigo-700 dark:text-purple-300 bg-indigo-100/80 dark:bg-purple-950/50 border border-indigo-200/80 dark:border-purple-800/40 mb-2.5 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-pulse" />
            <span>PORTFOLIO 2026</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-6xl uppercase tracking-widest font-black font-display text-slate-900 dark:text-white drop-shadow-sm"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            PRAWIN KUMAR
          </motion.h1>
          
          <motion.div 
            className="h-[2px] w-32 sm:w-44 mt-2.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-sm"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 0.9 }}
          />
        </div>

        {/* Floating tech badges */}
        {/* 1. Node.js (Top Left) */}
        <motion.div 
          className="absolute left-[6%] top-[16%] z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#150B2D]/90 border border-slate-200/80 dark:border-white/10 shadow-md backdrop-blur-md select-none"
          custom={0}
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Node.js</span>
        </motion.div>

        {/* 2. Docker (Bottom Left) */}
        <motion.div 
          className="absolute left-[12%] bottom-[16%] z-10 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#150B2D]/90 border border-slate-200/80 dark:border-white/10 shadow-md backdrop-blur-md select-none"
          custom={1}
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Docker</span>
        </motion.div>

        {/* 3. React (Top Right) */}
        <motion.div 
          className="absolute right-[12%] top-[16%] z-10 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#150B2D]/90 border border-slate-200/80 dark:border-white/10 shadow-md backdrop-blur-md select-none"
          custom={2}
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">React 18</span>
        </motion.div>

        {/* 4. Python (Bottom Right) */}
        <motion.div 
          className="absolute right-[6%] bottom-[16%] z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#150B2D]/90 border border-slate-200/80 dark:border-white/10 shadow-md backdrop-blur-md select-none"
          custom={3}
          variants={floatingVariants}
          animate="animate"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Python</span>
        </motion.div>
      </div>

      {/* Profile Card Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="pro-card rounded-t-none border-t-0 p-0 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar + Actions Row */}
          <div className="px-5 sm:px-8 pt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            
            {/* Avatar with spinning open to work ring */}
            <motion.div
              className="relative -mt-16 sm:-mt-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-white dark:bg-[#150B2D] shadow-xl flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              {/* Spinning OpenToWork dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500 animate-[spin_25s_linear_infinite] z-10 p-0.5" />
              
              <div 
                className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden z-20 shadow-inner"
                style={{ background: "linear-gradient(135deg, #4338CA 0%, #7C3AED 50%, #6D28D9 100%)" }}
              >
                {/* Tech grid overlay inside avatar */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:8px_8px]" />
                
                <span className="text-3xl sm:text-5xl font-black text-white font-display select-none z-10 drop-shadow-md">
                  PK
                </span>
                
                {/* #OPENTOWORK badge */}
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-[8px] sm:text-[9px] text-white font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap tracking-wider shadow-md border border-emerald-300 uppercase z-30 animate-pulse">
                  #OPENTOWORK
                </div>
              </div>
              
              {/* Online indicator dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-[#150B2D] z-40 shadow-sm" />
            </motion.div>

            {/* CTA action buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-2 pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <a
                href="/PrawinKumar-Resume.pdf"
                download="PrawinKumar-Resume.pdf"
                id="hero-download-resume"
                className="btn-primary text-xs sm:text-sm px-4 py-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                id="hero-hire-me"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary text-xs sm:text-sm px-4 py-2"
              >
                <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400" />
                <span>Hire Me</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-1.5 ml-1">
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
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-300 transition-all shadow-sm"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Profile Details */}
          <motion.div
            className="px-5 sm:px-8 pb-6 pt-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                Prawin Kumar N
              </h1>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-0.5 rounded-full w-fit">
                ⚡ Available for Full-Time / SDE Roles
              </span>
            </div>

            {/* Typewriter headline */}
            <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-purple-400 mb-3 flex items-center gap-1.5">
              <span>{displayed}</span>
              <span className="w-0.5 h-5 bg-indigo-600 dark:bg-purple-400 animate-pulse inline-block" />
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                Perundurai, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                SearchFirst Technologies Pvt. Ltd. (Co-Founder)
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                B.Tech AI &amp; DS · Nandha Engineering College
              </span>
            </div>

            {/* Social-proof badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-purple-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 px-2.5 py-1 rounded-full cursor-pointer hover:underline">
                <Users className="w-3.5 h-3.5" />
                500+ Connections
              </span>
              <span className="badge-green">
                <CheckCircle className="w-3.5 h-3.5" />
                Open to Work
              </span>
              <span className="badge-amber">
                🏆 3x Innovation 1st Prize
              </span>
              <span className="badge-blue">
                🚀 50K+ Users Served
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800">
                💼 Co-Founded (Funded)
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row Bento */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3 pb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[
            { num: "50K+", label: "Users Served in Prod", color: "#4F46E5", darkColor: "#818CF8" },
            { num: "10+",  label: "Projects Shipped",    color: "#059669", darkColor: "#34D399" },
            { num: "20+",  label: "Certifications",      color: "#7C3AED", darkColor: "#A78BFA" },
            { num: "3+",   label: "Hackathon Awards",    color: "#D97706", darkColor: "#FBBF24" },
          ].map(({ num, label, color, darkColor }, i) => (
            <motion.div
              key={label}
              className="pro-card p-4 text-center cursor-default transition-all duration-300"
              whileHover={{ y: -3, scale: 1.02 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
            >
              <div 
                className="text-2xl sm:text-3xl font-black font-display mb-0.5"
                style={{ color }}
              >
                {num}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Infinite Marquee */}
        <motion.div
          className="mt-3 pro-card py-3 px-4 overflow-hidden relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex-shrink-0 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-500" />
              Core Tech:
            </span>
            
            <div className="overflow-hidden relative flex-1">
              <div className="animate-marquee flex items-center gap-3">
                {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                  <span
                    key={`${tech.name}-${idx}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 whitespace-nowrap shadow-sm hover:scale-105 transition-transform"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
