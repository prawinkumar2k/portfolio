import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, MapPin, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { SpotlightCard } from "./animations/SpotlightCard";
import { BorderBeam } from "./animations/BorderBeam";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  companyInitials: string;
  companyColor: string;
  period: string;
  location: string;
  type?: "work" | "education";
  badge?: string;
  bullets: string[];
  technologies: string[];
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Dealpost Private Limited",
    companyInitials: "DP",
    companyColor: "#059669",
    period: "Jul 2026 – Present",
    location: "Coimbatore, Tamil Nadu · Full-Time Active",
    badge: "🟢 Active Production Platforms",
    bullets: [
      "Deliver client digital proposals, custom website builds, and end-to-end hosting/domain management across multiple active enterprise accounts.",
      "Registered domains, migrated client projects to live production VPS servers, and completed technical SEO setups (e.g. karikalam.in).",
      "Engineered full-stack hotel booking and operations platform (React 18 / TypeScript, Express.js, MongoDB) as part of a client digital-transformation engagement.",
      "Own ongoing maintenance, security updates, and performance monitoring for client web platforms, collaborating directly on deliverables.",
    ],
    technologies: ["React 18", "TypeScript", "Node.js", "Express.js", "MongoDB", "Hostinger VPS", "Nginx", "SEO", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Software Development Engineer",
    company: "SearchFirst Technologies Pvt. Ltd.",
    companyInitials: "SF",
    companyColor: "#6366F1",
    period: "Jan 2025 – Jun 2026",
    location: "Erode, Tamil Nadu · Full-Time / Active Semesters",
    badge: "🏛️ Govt Portal Sole Developer &amp; Infra Owner",
    bullets: [
      "Sole developer and infrastructure owner for the Tamil Nadu Govt. DOTE Admissions Portal (tnpoly.in) — Node.js, Express.js, MySQL REST APIs serving 50,000+ students statewide with 40% latency reduction and 99.9% uptime.",
      "Full server lifecycle management: Ubuntu Linux installation, Nginx reverse proxy, PM2 process management, UFW firewall, and automated SSL/TLS certificates.",
      "Engineered 3-tier RBAC with server-side gender and hostel-based college filtering — reduced admin workload by 60% and eliminated 100% of manual eligibility screening.",
      "Integrated CCAvenue payment gateway across 100+ institutions enabling automated, fully digital fee collection statewide.",
      "Optimised RESTful APIs and database schemas across 5+ production applications with 35–40% query execution time improvements.",
      "Developed SaaS ERP modules for pharmacy colleges, schools, and engineering institutions (academics, examinations, HR/payroll, LMS, NAAC/PCI compliance).",
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Nginx", "PM2", "UFW", "Docker"],
  },
  {
    id: 3,
    title: "Software Developer — ERP Development Team Lead",
    company: "Nandha Engineering College",
    companyInitials: "NE",
    companyColor: "#7C3AED",
    period: "Jan 2025 – Jan 2026",
    location: "Erode, Tamil Nadu · Certified Commercial Engagement",
    badge: "🏛️ 1-Year Certified Commercial Engagement",
    bullets: [
      "Led development and maintenance of Campus ERP (PHP, SQL Server, JavaScript, Bootstrap) serving 1,000+ students — attendance, academics, fee management, and reporting modules.",
      "Managed team of junior developers, mentoring on full-stack architecture, database design patterns, and deployment best practices.",
      "Cut administrative paperwork by 50% through automated reporting and digital submission pipelines.",
    ],
    technologies: ["PHP", "SQL Server", "JavaScript", "Bootstrap 5", "HTML5", "CSS3", "Git"],
  },
  {
    id: 4,
    title: "Web Development with AI Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#0284C7",
    period: "Jun 2025 – Jul 2025",
    location: "Erode, Tamil Nadu · Internship",
    badge: "🤖 AI Web Solutions",
    bullets: [
      "Built and deployed AI-integrated web applications; contributed to production releases within tight deadlines.",
      "Implemented responsive user interfaces with React and modern REST endpoints.",
    ],
    technologies: ["AI/ML", "React.js", "Node.js", "Python", "JavaScript", "Vite"],
  },
  {
    id: 5,
    title: "UI/UX Design Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#D97706",
    period: "Aug 2024 – Sep 2024",
    location: "Erode, Tamil Nadu · Internship",
    badge: "🎨 30% Responsiveness Boost",
    bullets: [
      "Designed and prototyped 3+ client-facing UI modules — improved user interface responsiveness and usability by 30%.",
      "Collaborated directly with stakeholders to gather requirements and deliver high-fidelity prototypes in Figma.",
    ],
    technologies: ["UI/UX Design", "Figma", "Bootstrap", "HTML5", "CSS3", "Design Systems"],
  },
  {
    id: 6,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College (Anna University Affiliated)",
    companyInitials: "NE",
    companyColor: "#4F46E5",
    period: "2023 – 2027 (Final Year)",
    location: "Erode, Tamil Nadu · NAAC A+ | CGPA: 7.1 (Sem 1–5)",
    type: "education",
    badge: "🏆 3x Innovation Day 1st Prize Winner",
    bullets: [
      "Specialized in Deep Learning, Computer Vision, Machine Learning, IoT, Database Design, OS, and Advanced Coding.",
      "Won 1st Prize consecutively (2024 & 2025) for AI-Based Autonomous Smart Car, and 1st Prize (2025) for Image Captioning.",
      "TCS iON NQT (IT) Certified with 55.87% Programming (Java) and 51.84% Advanced Quant/Reasoning.",
    ],
    technologies: ["Deep Learning", "Computer Vision", "Machine Learning", "TensorFlow", "OpenCV", "Python", "Arduino", "ESP32", "Java"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Career Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Work Experience &amp; Leadership
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-full w-fit">
            Active at Dealpost · 2+ Years Production Architecture
          </span>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10">
          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative group"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-6 sm:-left-10 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md border-2 border-white dark:border-[#09051C]"
                style={{ backgroundColor: item.companyColor }}
              >
                {item.type === "education" ? (
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5 text-white" />
                )}
              </div>

              {/* Experience Bento Card with Spotlight */}
              <SpotlightCard className="pro-card p-6 sm:p-7 hover:border-indigo-300 dark:hover:border-purple-400 transition-all duration-300 relative overflow-hidden">
                {item.id === 1 && (
                  <BorderBeam size={220} duration={8} colorFrom="#10B981" colorTo="#6366F1" />
                )}

                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-purple-400 mt-0.5">
                      <Building2 className="w-4 h-4" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Location & Badge */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                  {item.badge && (
                    <span 
                      className="font-bold text-indigo-700 dark:text-purple-300 bg-indigo-50 dark:bg-purple-950/50 border border-indigo-200 dark:border-purple-800/60 px-2.5 py-0.5 rounded-full"
                      dangerouslySetInnerHTML={{ __html: item.badge }}
                    />
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80 dark:border-white/10">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="tech-tag text-[11px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
