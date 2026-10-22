import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, MapPin, Calendar, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  companyInitials: string;
  companyColor: string;
  period: string;
  location: string;
  type: "work" | "education";
  badge?: string;
  bullets: string[];
  technologies: string[];
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Software Development Engineer (Co-Founder)",
    company: "SearchFirst Technologies Pvt. Ltd.",
    companyInitials: "SF",
    companyColor: "#6366F1",
    period: "Jan 2025 – Present",
    location: "Erode, Tamil Nadu · Full-Time / Active",
    type: "work",
    badge: "🚀 Co-Founder &amp; Sole Infra Owner",
    bullets: [
      "Co-founded government-registered Private Limited IT company focused on SaaS ERP and government web applications — secured external investor funding for product development.",
      "Sole developer of Tamil Nadu Govt DOTE Admissions Portal (tnpoly.in) — Node.js, Express.js, MySQL REST APIs serving 50,000+ students statewide with 40% latency reduction and 99.9% uptime.",
      "Full server lifecycle management: Ubuntu Linux installation, Nginx reverse proxy, PM2 process management, UFW firewall, and automated SSL/TLS certificates.",
      "Engineered 3-tier RBAC with server-side gender and hostel-based college filtering — reduced admin workload by 60% and eliminated manual eligibility screening.",
      "Integrated CCAvenue payment gateway across 100+ institutions enabling automated, fully digital fee collection.",
      "Optimized RESTful APIs and database schemas across 5+ production applications with 35–40% query execution time improvements.",
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Nginx", "PM2", "UFW", "Docker", "MongoDB"],
  },
  {
    id: 2,
    title: "Software Developer — ERP Development Team Lead",
    company: "Nandha Engineering College",
    companyInitials: "NE",
    companyColor: "#7C3AED",
    period: "Jan 2025 – Jan 2026",
    location: "Erode, Tamil Nadu · Certified Engagement",
    type: "work",
    badge: "🏛️ 1-Year Certified Commercial Engagement",
    bullets: [
      "Led development and maintenance of Institutional Campus ERP (PHP, SQL Server, JavaScript, Bootstrap) serving 1,000+ students — attendance, academics, fee management, and reporting modules.",
      "Mentored junior developers on full-stack architecture, database design patterns, and deployment best practices.",
      "Cut administrative paperwork by 50% through automated reporting and digital submission pipelines.",
    ],
    technologies: ["PHP", "SQL Server", "JavaScript", "Bootstrap 5", "HTML5", "CSS3", "Git"],
  },
  {
    id: 3,
    title: "Web Development with AI Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#059669",
    period: "Jun 2025 – Jul 2025",
    location: "Erode, Tamil Nadu · Internship",
    type: "work",
    badge: "🤖 AI Web Solutions",
    bullets: [
      "Built and deployed AI-integrated web applications; contributed to production releases within tight deadlines.",
      "Implemented responsive user interfaces with React and modern REST endpoints.",
    ],
    technologies: ["AI/ML", "React.js", "Node.js", "Python", "JavaScript", "Vite"],
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#D97706",
    period: "Aug 2024 – Sep 2024",
    location: "Erode, Tamil Nadu · Internship",
    type: "work",
    badge: "🎨 30% Responsiveness Boost",
    bullets: [
      "Designed and prototyped 3+ client-facing UI modules — improved user interface responsiveness and usability by 30%.",
      "Collaborated directly with stakeholders to gather requirements and deliver high-fidelity prototypes in Figma.",
    ],
    technologies: ["UI/UX Design", "Figma", "Bootstrap", "HTML5", "CSS3", "Design Systems"],
  },
  {
    id: 5,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College (Anna University Affiliated)",
    companyInitials: "NE",
    companyColor: "#0284C7",
    period: "2023 – 2027 (Final Year)",
    location: "Erode, Tamil Nadu · CGPA: 7.1",
    type: "education",
    badge: "🏆 3x Innovation Day 1st Prize Winner",
    bullets: [
      "Specialized in Deep Learning, Computer Vision, Machine Learning, IoT, Database Design, OS, and Advanced Coding.",
      "Won 1st Prize consecutively (2024 & 2025) for AI-Based Autonomous Smart Car, and 1st Prize (2025) for Image Captioning.",
      "Co-founded Private Limited IT company securing investor seed funding during degree.",
    ],
    technologies: ["Deep Learning", "Computer Vision", "Machine Learning", "TensorFlow", "OpenCV", "Python", "Arduino", "ESP32"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="pro-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <span>Experience &amp; Leadership</span>
            </h2>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full">
              2+ Years Production
            </span>
          </div>

          {/* Timeline List */}
          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-white/10">
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
                  className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md border-2 border-white dark:border-[#150B2D]"
                  style={{ backgroundColor: item.companyColor }}
                >
                  {item.type === "work" ? (
                    <Briefcase className="w-3 h-3 text-white" />
                  ) : (
                    <GraduationCap className="w-3 h-3 text-white" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-sm">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-purple-400">
                        <Building2 className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg">
                        <Calendar className="w-3 h-3 text-slate-400" />
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
                        className="font-semibold text-indigo-700 dark:text-purple-300 bg-indigo-50 dark:bg-purple-950/50 border border-indigo-200 dark:border-purple-800/60 px-2.5 py-0.5 rounded-full"
                        dangerouslySetInnerHTML={{ __html: item.badge }}
                      />
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/80 dark:border-white/10">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-[11px] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
