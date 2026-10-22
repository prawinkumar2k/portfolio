import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Code2, Server, Trophy, Users, Download, Mail, Sparkles, ShieldCheck, Database, Cpu, FileCheck } from "lucide-react";
import { SpotlightCard } from "./animations/SpotlightCard";
import { InteractiveTerminal } from "./animations/InteractiveTerminal";
import { Magnetic } from "./animations/Magnetic";

const stats = [
  { number: 10, suffix: "+",  label: "Production Platforms", icon: Code2,  color: "#4F46E5" },
  { number: 50, suffix: "K+", label: "Statewide Users Served", icon: Users,  color: "#059669" },
  { number: 3,  suffix: "x",  label: "Innovation 1st Prizes", icon: Trophy, color: "#D97706" },
  { number: 99.9, suffix: "%", label: "Production System Uptime", icon: Server, color: "#7C3AED" },
];

const coreCompetencies = [
  { title: "Full Stack Web Engineering", desc: "React 18, TypeScript, Node.js, Express, REST APIs, and client digital transformation.", icon: Code2 },
  { title: "Production Infrastructure & DevOps", desc: "Sole owner of dedicated Ubuntu servers, Nginx reverse proxy, PM2, UFW, and SSL.", icon: Server },
  { title: "Database Systems & Tuning", desc: "MySQL, MongoDB (Certified), SQL Server, indexing, and query performance optimization.", icon: Database },
  { title: "AI, Deep Learning & IoT", desc: "Deep Learning (CNN), OpenCV, Python, Arduino, ESP32, and hardware integration.", icon: Cpu },
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
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Background &amp; Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Engineering with Scalability &amp; Precision
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-medium max-w-md">
            Delivering high-reliability software, production government portals, and modern client platforms across Tamil Nadu.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">

          {/* Main Story Card (7 cols) with Spotlight Effect */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="pro-card p-6 sm:p-8 flex flex-col justify-between h-full">
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-indigo-700 dark:text-purple-300 bg-indigo-50 dark:bg-purple-950/40 border border-indigo-200 dark:border-purple-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Full Stack Developer &amp; Systems Engineer</span>
                </div>

                <p>
                  I am a results-driven <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer &amp; Software Development Engineer</strong> with 2+ years of hands-on production experience building high-traffic web applications, multi-tenant enterprise ERP platforms, and responsive client software — currently pursuing B.Tech in Artificial Intelligence &amp; Data Science at Nandha Engineering College.
                </p>

                <p>
                  My expertise spans modern frontend architecture in <strong className="text-slate-900 dark:text-white font-semibold">React 18 and TypeScript</strong>, resilient backend micro-services with <strong className="text-slate-900 dark:text-white font-semibold">Node.js, Express, MySQL, and MongoDB</strong>, as well as Linux server deployment, Nginx reverse proxy configuration, PM2 process management, and database query optimization.
                </p>

                <p>
                  Across my commercial engineering engagements, I have delivered production systems serving over <strong className="text-slate-900 dark:text-white font-semibold">50,000+ active users</strong> with 99.9% uptime, reduced organizational administrative workloads by up to 60%, and won multiple consecutive innovation awards for hardware-software integration.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap gap-3 items-center">
                <Magnetic strength={0.25} distance={30}>
                  <a
                    href="/PrawinKumar-Resume.pdf"
                    download="PrawinKumar-Resume.pdf"
                    className="btn-primary text-xs sm:text-sm px-5 py-2.5 inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.25} distance={30}>
                  <a
                    href="/TCS-NQT-Scorecard.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs sm:text-sm px-5 py-2.5 inline-flex items-center gap-2"
                  >
                    <FileCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>View TCS NQT Scorecard</span>
                  </a>
                </Magnetic>
                <Magnetic strength={0.25} distance={30}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-secondary text-xs sm:text-sm px-4 py-2.5 inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                    <span>Get In Touch</span>
                  </a>
                </Magnetic>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column Bento Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Core Competencies Bento Card */}
            <motion.div
              className="pro-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                <span>Technical Domains</span>
              </h3>
              
              <div className="space-y-3">
                {coreCompetencies.map((comp) => (
                  <div key={comp.title} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <comp.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                        {comp.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal mt-0.5">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Numbers Bento Card */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="pro-card p-4 text-center cursor-default hover:border-indigo-300 dark:hover:border-purple-400 transition-colors"
                >
                  <div
                    className="text-2xl sm:text-3xl font-black font-display mb-0.5"
                    style={{ color: s.color }}
                  >
                    <CountUp number={s.number} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Live Interactive Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="pt-2"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Live Developer Shell
              </span>
            </div>
            <span className="text-[11px] text-slate-400 dark:text-slate-500 hidden sm:inline-block">
              Click tabs to run commands
            </span>
          </div>

          <InteractiveTerminal />
        </motion.div>

      </div>
    </section>
  );
}
