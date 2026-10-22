import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Code2, Server, Trophy, Users, Download, Mail, Sparkles } from "lucide-react";

const stats = [
  { number: 10, suffix: "+",  label: "Projects Completed", icon: Code2,  color: "#4F46E5" },
  { number: 25, suffix: "+",  label: "Technologies Mastered", icon: Server, color: "#059669" },
  { number: 50, suffix: "K+", label: "Users Served Live",   icon: Users,  color: "#7C3AED" },
  { number: 3,  suffix: "+",  label: "Innovation Awards",   icon: Trophy, color: "#D97706" },
];

const expertise = [
  "MERN Stack & Full-Stack Architecture",
  "Enterprise Resource Planning (ERP) Systems",
  "Dedicated Ubuntu Linux Server & OS Setup",
  "Nginx Reverse Proxy, PM2 & SSL Automation",
  "Relational & NoSQL Database Optimization",
  "AI & Machine Learning / IoT Solutions",
];

const CountUp = ({ number, suffix }: { number: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 50;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round((frame / totalFrames) * number), number));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [started, number]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-4">

        {/* About Main Card */}
        <motion.div
          className="pro-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <span>About Me</span>
            </h2>
            <span className="text-xs font-semibold text-indigo-600 dark:text-purple-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 px-3 py-1 rounded-full">
              Full Stack &amp; DevOps
            </span>
          </div>

          <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a results-driven <strong className="text-slate-900 dark:text-white font-semibold">Software Development Engineer and Full Stack Developer</strong> with 2+ years of hands-on experience building and deploying production-grade government portals, enterprise ERP platforms, and AI/IoT solutions — currently pursuing B.Tech in Artificial Intelligence &amp; Data Science at Nandha Engineering College.
            </p>
            <p>
              I co-founded <strong className="text-slate-900 dark:text-white font-semibold">SearchFirst Technologies Pvt. Ltd.</strong> (government-registered Private Limited IT company) and secured external investor seed funding to engineer scalable SaaS ERP software for educational institutions. I also led the ERP development team at Nandha Engineering College and am a consecutive 3x Innovation Day 1st Prize winner.
            </p>
            <p>
              Currently, I am the <strong className="text-slate-900 dark:text-white font-semibold">sole developer and infrastructure owner</strong> for <a href="https://tnpoly.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-purple-400 font-semibold hover:underline">tnpoly.in</a> — the Tamil Nadu Government's official polytechnic admissions portal serving <strong className="text-slate-900 dark:text-white font-semibold">50,000+ students statewide</strong> with 99.9% uptime, complete ownership from bare-metal server deployment to live production monitoring.
            </p>
          </div>

          {/* Key expertise chips */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Core Technical Strengths
            </h3>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, idx) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-purple-400 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-purple-400 flex-shrink-0" />
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-3 flex-wrap items-center">
            <a
              href="/PrawinKumar-Resume.pdf"
              download="PrawinKumar-Resume.pdf"
              className="btn-primary text-xs sm:text-sm px-5 py-2.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary text-xs sm:text-sm px-5 py-2.5"
            >
              <Mail className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
              <span>Get In Touch</span>
            </a>
          </div>
        </motion.div>

        {/* Stats Row Bento */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map(({ number, suffix, label, icon: Icon, color }, idx) => (
            <motion.div
              key={label}
              className="pro-card p-5 text-center cursor-default"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2.5 shadow-sm"
                style={{ background: `${color}15`, color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div 
                className="text-2xl sm:text-3xl font-black font-display mb-0.5"
                style={{ color }}
              >
                <CountUp number={number} suffix={suffix} />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold leading-tight">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
