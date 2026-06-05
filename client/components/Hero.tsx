import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Building2, GraduationCap, CheckCircle, Users, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import TechParticles3D from "./TechParticles3D";

const roles = [
  "Software Development Engineer",
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Backend Engineer",
];

const floatingVariants: any = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4 + i * 0.7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

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
      {/* CSS Styles injection for premium animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cyberGridMove {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        .cyber-grid {
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: cyberGridMove 12s linear infinite;
        }
        .neon-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: 0.15em;
          color: #ffffff;
          text-shadow: 
            0 0 7px rgba(139, 92, 246, 0.9),
            0 0 15px rgba(139, 92, 246, 0.6),
            0 0 30px rgba(139, 92, 246, 0.4),
            0 0 50px rgba(56, 189, 248, 0.3);
        }
        .neon-glow-green {
          filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.85)) drop-shadow(0 0 12px rgba(16, 185, 129, 0.4));
        }
        .neon-glow-blue {
          filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.85)) drop-shadow(0 0 12px rgba(14, 165, 233, 0.4));
        }
        .neon-glow-yellow {
          filter: drop-shadow(0 0 6px rgba(234, 179, 8, 0.85)) drop-shadow(0 0 12px rgba(234, 179, 8, 0.4));
        }
      `}} />

      {/* Cover banner */}
      <div className="relative h-56 sm:h-72 overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, #09051c 0%, #0c0827 40%, #170d38 75%, #251253 100%)" }}>
        
        {/* 3D WebGL Particles Background */}
        <TechParticles3D />

        {/* Animated Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid pointer-events-none z-0" />
        
        {/* Futuristic glowing dust/glow circles */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.18) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.12) 0%, transparent 50%)" }} />

        {/* Neon glowing center name */}
        <div className="relative z-10 flex flex-col items-center select-none text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-6xl uppercase tracking-widest neon-text font-black font-display"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            PRAWIN KUMAR
          </motion.h1>
          <motion.div 
            className="h-[1.5px] w-28 sm:w-36 mt-2 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </div>

        {/* Floating tech icons */}
        {/* 1. Node.js (Top Left) */}
        <motion.div 
          className="absolute left-[7%] top-[15%] z-10 hidden sm:block select-none"
          custom={0}
          variants={floatingVariants}
          animate="animate"
        >
          <svg className="w-9 h-9 text-[#10B981] neon-glow-green" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2zm1 14.8c-2.3 0-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1c1.2 0 2.2.5 3 1.3l-1.3 1.3c-.5-.5-1.1-.8-1.7-.8-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6c.9 0 1.7-.5 2.2-1.2H13v-1.7h3.5v4.5h-1.2c-.7.8-1.6 1.3-2.3 1.3z" />
          </svg>
        </motion.div>

        {/* 2. Docker (Bottom Left) */}
        <motion.div 
          className="absolute left-[15%] bottom-[15%] z-10 select-none"
          custom={1}
          variants={floatingVariants}
          animate="animate"
        >
          <svg className="w-9 h-9 text-[#0EA5E9] neon-glow-blue" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 8.871h-1.996V6.885h1.996v1.986zm-2.495 0H9.492V6.885h1.996v1.986zm-2.495 0H6.997V6.885h1.996v1.986zm-2.496 0H4.501V6.885h1.996v1.986zm7.486-2.495h-1.996V4.39h1.996v1.986zm-2.495 0H9.492V4.39h1.996v1.986zm8.257 6.136c-.499-.3-1.127-.47-1.776-.47h-.587v-1.996h-1.996v1.996H12.01v-1.996H10.01v1.996H8.01v-1.996H6.01v1.996H4.501c-1.328 0-2.495.962-2.495 2.495v1.272c0 2.915 2.128 5.253 4.99 5.253h9.98c2.862 0 4.99-2.338 4.99-5.253V13.8c0-.495-.297-.993-.728-1.288z" />
          </svg>
        </motion.div>

        {/* 3. Kubernetes (Top Right) */}
        <motion.div 
          className="absolute right-[15%] top-[15%] z-10 select-none"
          custom={2}
          variants={floatingVariants}
          animate="animate"
        >
          <svg className="w-9 h-9 text-[#326ce5] neon-glow-blue" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.015 0L3.109 4.316l2.128 9.388 6.778 4.148 6.778-4.148 2.128-9.388L12.015 0zm0 3.256l6.096 2.951-1.458 6.43-4.638 2.839-4.638-2.839-1.458-6.43 6.096-2.951z" />
          </svg>
        </motion.div>

        {/* 4. Python (Bottom Right) */}
        <motion.div 
          className="absolute right-[7%] bottom-[15%] z-10 hidden sm:block select-none"
          custom={3}
          variants={floatingVariants}
          animate="animate"
        >
          <svg className="w-9 h-9 text-[#EAB308] neon-glow-yellow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.015 2.015c-2.756 0-2.587 1.196-2.587 1.196v1.198h2.613v.373H6.848s-1.83 0-1.83 1.83v2.871c0 1.83 1.636 1.83 1.636 1.83h.971V10.15c0-1.28 1.127-2.39 2.39-2.39h3.765s1.209.027 1.209-1.18V3.818c0-1.208-1.209-1.803-1.209-1.803s-.998-.018-2.775-.018zm3.262 5.011c.414 0 .748.334.748.748s-.334.748-.748.748a.749.749 0 0 1-.748-.748c0-.414.334-.748.748-.748zM12.01 22.01c2.756 0 2.587-1.196 2.587-1.196v-1.198h-2.613v-.373h5.193s1.83 0 1.83-1.83V14.54c0-1.83-1.636-1.83-1.636-1.83h-.971V13.88c0 1.28-1.127 2.39-2.39 2.39H10.26s-1.209-.027-1.209 1.18v2.762c0 1.208 1.209 1.803 1.209 1.803s.998.018 2.775.018zm-3.262-5.011a.749.749 0 0 1 .748-.748c.414 0 .748.334.748.748s-.334.748-.748.748a.749.749 0 0 1-.748-.748z" />
          </svg>
        </motion.div>
      </div>

      {/* Profile card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className="bg-white rounded-b-2xl border border-t-0 border-[#E2DFF5] shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar + Actions */}
          <div className="px-5 sm:px-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            {/* Avatar */}
            <motion.div
              className="relative -mt-14 sm:-mt-16 w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-xl flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5, type: "spring", bounce: 0.3 }}
            >
              {/* Spinning #OPENTOWORK dashed ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#15803D] animate-[spin_25s_linear_infinite] z-10 p-0.5" />
              
              <div 
                className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden z-20"
                style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #7C3AED 100%)" }}
              >
                {/* Tech grid overlay inside avatar */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:8px_8px]" />
                
                <span className="text-3xl sm:text-5xl font-bold text-white font-display select-none z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  PK
                </span>
                
                {/* #OPENTOWORK Badge Overlay */}
                <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 bg-[#15803D] text-[7px] sm:text-[9px] text-white font-extrabold px-1.5 py-0.5 rounded-full whitespace-nowrap tracking-wider shadow-md border border-emerald-400 uppercase z-30 animate-pulse">
                  #OPENTOWORK
                </div>
              </div>
              
              {/* Online dot */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white z-40" />
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
                style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)", boxShadow: "0 2px 8px rgba(124,58,237,0.35)" }}
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
              <a
                href="#contact"
                id="hero-hire-me"
                onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#7C3AED] border border-[#7C3AED] bg-white hover:bg-[#F3EFFE] transition-all duration-200"
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
                  className="w-9 h-9 rounded-full bg-white border border-[#E2DFF5] flex items-center justify-center text-[#666] hover:text-[#7C3AED] hover:border-[#7C3AED] transition-all duration-200"
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E1B4B] mb-1 font-display">
              Prawin Kumar N
            </h1>

            {/* Typewriter headline */}
            <p className="text-base sm:text-lg font-semibold text-[#7C3AED] mb-3 flex items-center gap-1">
              <span>{displayed}</span>
              <span className="w-0.5 h-5 bg-[#7C3AED] animate-pulse inline-block align-middle" />
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-[#666666] mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#7C3AED]" />
                Perundurai, Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#7C3AED]" />
                SearchFirst Technologies Pvt. Ltd.
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#7C3AED]" />
                B.Tech AI &amp; DS · Nandha Engineering College
              </span>
            </div>

            {/* Social-proof badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-[#7C3AED] cursor-pointer hover:underline">
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
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#F3EFFE", color: "#7C3AED", border: "1px solid #DDD6FE" }}>
                50K+ Users Served
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "#F0FDFA", color: "#0D9488", border: "1px solid #CCFBF1" }}>
                🚀 Co-Founded (Funded)
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
            { num: "50K+", label: "Users Served",      color: "#7C3AED" },
            { num: "10+",  label: "Projects Shipped",  color: "#1E1B4B" },
            { num: "20+",  label: "Certifications",    color: "#5B21B6" },
            { num: "3+",   label: "Awards Won",        color: "#F59E0B" },
          ].map(({ num, label, color }, i) => (
            <motion.div
              key={label}
              className="bg-white rounded-xl border border-[#E2DFF5] p-4 text-center hover:shadow-md transition-all duration-200 cursor-default"
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



