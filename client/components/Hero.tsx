import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Building2, GraduationCap, CheckCircle, Users, Briefcase, Sparkles, ArrowRight, Code2, Server, Award, FileCheck } from "lucide-react";
import { useEffect, useState } from "react";
import TechParticles3D from "./TechParticles3D";

const roles = [
  "Full Stack Developer",
  "Software Development Engineer",
  "MERN Stack Specialist",
  "Cloud & DevOps Engineer",
];

const marqueeTech = [
  { name: "React 18", color: "#0284C7" },
  { name: "TypeScript", color: "#2563EB" },
  { name: "Node.js", color: "#16A34A" },
  { name: "Express.js", color: "#475569" },
  { name: "MongoDB", color: "#16A34A" },
  { name: "MySQL", color: "#0284C7" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Ubuntu Linux", color: "#EA580C" },
  { name: "Nginx Reverse Proxy", color: "#15803D" },
  { name: "PM2", color: "#7C3AED" },
  { name: "Docker", color: "#0284C7" },
  { name: "Python", color: "#CA8A04" },
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
    <section id="home" className="pt-24 sm:pt-28 pb-12 relative overflow-hidden">
      {/* Dynamic 3D WebGL Background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30 z-0">
        <TechParticles3D />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Hero: Left Info, Right Portrait */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Status availability pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-slate-800 dark:text-slate-200">
                Full Stack Developer &amp; SDE
              </span>
              <span className="text-slate-300 dark:text-white/20">|</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">TCS NQT Certified</span>
            </div>

            {/* Main Greeting & Headline */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-slate-500 dark:text-slate-400">
                  Hello, I'm
                </span>
                <span className="text-xl">👋</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight leading-[1.1] mb-3">
                Prawin Kumar <span className="text-indigo-600 dark:text-purple-400">N</span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-400 dark:via-purple-300 dark:to-sky-300 min-h-[40px] flex items-center">
                <span>{displayed}</span>
                <span className="w-0.5 h-6 sm:h-8 bg-indigo-600 dark:bg-purple-400 animate-pulse ml-1 inline-block" />
              </div>
            </div>

            {/* Punchy Executive Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Versatile <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer &amp; Software Development Engineer</strong> specializing in scalable web architectures, modern React &amp; Node.js applications, robust database design, and high-performance production systems serving tens of thousands of active users.
            </p>

            {/* Meta Row: Location, Specialization, Education */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                Full Stack &amp; Scalable Systems
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                B.Tech AI &amp; DS (2023–2027)
              </span>
            </div>

            {/* Quick Proof Metrics Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { number: "50K+", label: "Users in Production", color: "#4F46E5" },
                { number: "99.9%", label: "Live System Uptime", color: "#059669" },
                { number: "3x", label: "Innovation 1st Prize", color: "#D97706" },
                { number: "TCS iON", label: "NQT IT Certified (Java)", color: "#7C3AED" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 text-center shadow-sm hover:border-indigo-300 dark:hover:border-purple-400 transition-colors"
                >
                  <div
                    className="text-lg sm:text-xl font-black font-display"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-sm px-5 py-3 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/PrawinKumar-Resume.pdf"
                download="PrawinKumar-Resume.pdf"
                id="hero-download-resume"
                className="btn-secondary text-sm px-5 py-3 shadow-sm"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="/TCS-NQT-Scorecard.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm px-4 py-3 shadow-sm"
              >
                <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>TCS NQT Scorecard</span>
              </a>

              {/* Social Channels */}
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
                    className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-300 hover:border-indigo-300 shadow-sm transition-all"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Real Portrait Hero Card */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

            {/* Main Portrait Card Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Profile Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-slate-200 dark:to-slate-800 p-2 border-2 border-white dark:border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Prawin Kumar N"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-lg font-black font-display drop-shadow-md">
                      Prawin Kumar N
                    </div>
                    <div className="text-xs text-indigo-300 font-semibold drop-shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Full Stack Developer · Software Engineer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill 1: Top Right (Production Scale) */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-right-5 bg-white/95 dark:bg-[#150B2D]/95 border border-slate-200/90 dark:border-white/15 rounded-2xl p-3 shadow-xl backdrop-blur-xl flex items-center gap-2.5 z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm shadow-sm">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-white">
                    Production Systems
                  </div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    50K+ Users Scaled
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Pill 2: Bottom Left (Innovation Award) */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-left-5 bg-white/95 dark:bg-[#150B2D]/95 border border-slate-200/90 dark:border-white/15 rounded-2xl p-3 shadow-xl backdrop-blur-xl flex items-center gap-2.5 z-20"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 dark:text-white">
                    3x 1st Prize Winner
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    Nandha Innovation Day
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Pill 3: TCS NQT Certified */}
              <motion.div
                className="absolute top-1/2 -right-4 sm:-right-8 bg-white/95 dark:bg-[#150B2D]/95 border border-slate-200/90 dark:border-white/15 rounded-2xl p-2.5 shadow-xl backdrop-blur-xl hidden sm:flex items-center gap-2 z-20"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shadow-sm">
                  ✓
                </div>
                <div className="text-[10px] font-bold text-slate-800 dark:text-white">
                  TCS NQT IT Certified
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Full-Width Core Tech Infinite Marquee */}
        <div className="mt-14 pro-card py-3.5 px-4 overflow-hidden relative shadow-sm">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black text-slate-500 uppercase tracking-widest flex-shrink-0 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
              <span>Core Stack:</span>
            </span>
            
            <div className="overflow-hidden relative flex-1">
              <div className="animate-marquee flex items-center gap-3">
                {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                  <span
                    key={`${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-200 whitespace-nowrap shadow-sm hover:scale-105 transition-transform cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
