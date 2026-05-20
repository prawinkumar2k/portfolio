import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  companyInitials: string;
  companyColor: string;
  period: string;
  location: string;
  type: "work" | "education" | "project";
  bullets: string[];
  technologies: string[];
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer · ERP & Infrastructure Engineer",
    company: "SearchFirst Technologies",
    companyInitials: "SF",
    companyColor: "#7C3AED",
    period: "Jan 2025 – Present",
    location: "Erode, Tamil Nadu · Full-time",
    type: "work",
    bullets: [
      "Architected and deployed DOTE — Tamil Nadu Government's admissions portal serving 50,000+ students statewide; managed full dedicated server lifecycle from OS installation (Ubuntu), Nginx reverse proxy, PM2 process management, UFW firewall, and SSL via Certbot — zero critical downtime since launch",
      "Engineered multi-role RBAC systems and server-side business logic across government and enterprise platforms, reducing manual administrative workload by 60%",
      "Integrated CCAvenue payment gateway enabling 100% digital fee processing — eliminated all paper-based payment workflows for government-scale operations",
      "Designed and optimized RESTful APIs using Node.js and Express.js; tuned MySQL and MongoDB schemas and queries, achieving 40% improvement in database query performance across production systems",
      "Delivered and maintained 5+ full-stack applications spanning ERP, healthcare, and payroll domains as sole or lead developer on each system",
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Nginx", "PM2", "ufw Firewall", "SSL/Certbot", "MongoDB"],
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#312E81",
    period: "Jun 2024 – Dec 2024",
    location: "Erode, Tamil Nadu · Internship",
    type: "work",
    bullets: [
      "Delivered 3+ client-facing web applications using PHP, MySQL, HTML5, CSS3, and JavaScript; reduced manual reporting time by 25%",
      "Improved UI performance and application responsiveness by 30% through systematic debugging and code refactoring",
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "Campus ERP Developer — Commercial Engagement",
    company: "Nandha Engineering College",
    companyInitials: "NE",
    companyColor: "#5B21B6",
    period: "Jan 2025 – Present",
    location: "Erode, Tamil Nadu · 1-Year Commercial Contract",
    type: "work",
    bullets: [
      "Built and deployed a full-scale institutional ERP for Nandha Engineering College managing 1,000+ student records, attendance tracking, and academic reporting — delivered under a certified 1-year commercial engagement",
      "Architected backend PHP logic, SQL Server database schema, and a Bootstrap-based frontend UI across the full project lifecycle",
    ],
    technologies: ["PHP", "SQL Server", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    id: 4,
    title: "Full Stack Developer (Personal & Open Source)",
    company: "GitHub · Remote",
    companyInitials: "GH",
    companyColor: "#1E1B4B",
    period: "2023 – Present",
    location: "Remote · Freelance",
    type: "project",
    bullets: [
      "Independently designed and shipped 5+ production-grade full-stack applications across healthcare, payroll, ERP, and IoT domains",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PHP", "Arduino", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College · Anna University",
    companyInitials: "AU",
    companyColor: "#F59E0B",
    period: "2023 – Present",
    location: "Erode, Tamil Nadu",
    type: "education",
    bullets: [
      "Pursuing B.Tech in AI & Data Science (Anna University Affiliated)",
      "Winner — Unique Project Award, Innovation Day 2024 for the IoT Smart Attendance System",
      "Actively developing award-winning projects across AI, ML, and IoT domains",
    ],
    technologies: ["Artificial Intelligence", "Machine Learning", "Python", "Data Structures", "DBMS"],
  },
];

const typeIcon = {
  work: Briefcase,
  education: GraduationCap,
  project: Code2,
};

export default function Experience() {
  return (
    <section id="experience" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl border border-[#E2DFF5] shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-[#1E1B4B] mb-6">Experience &amp; Education</h2>

          <div className="space-y-0 divide-y divide-[#F0EEF9]">
            {timeline.map((item, idx) => {
              const Icon = typeIcon[item.type];
              return (
                <motion.div
                  key={item.id}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0 group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  {/* Company logo area */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-sm border border-white/20"
                      style={{ background: `linear-gradient(135deg, ${item.companyColor} 0%, ${item.companyColor}CC 100%)` }}
                    >
                      {item.companyInitials}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                      <div>
                        <h3 className="text-[15px] font-semibold text-[#1E1B4B] leading-snug">{item.title}</h3>
                        <p className="text-sm font-medium text-[#7C3AED] mt-0.5">{item.company}</p>
                        <p className="text-xs text-[#666666] mt-0.5 flex items-center gap-2">
                          <span>{item.period}</span>
                          <span className="text-[#ccc]">·</span>
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1 flex-shrink-0 mt-0.5"
                        style={{
                          background: item.type === "work" ? "#F3EFFE" : item.type === "education" ? "#FFFBEB" : "#F5F3FF",
                          color: item.type === "work" ? "#7C3AED" : item.type === "education" ? "#F59E0B" : "#312E81",
                          border: item.type === "work" ? "1px solid #DDD6FE" : item.type === "education" ? "1px solid #FDE68A" : "1px solid #C7D2FE",
                        }}
                      >
                        <Icon className="w-3 h-3" />
                        {item.type === "work" ? "Full-time" : item.type === "education" ? "Education" : "Project"}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-1.5 mb-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 text-sm text-[#4C4484] leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full text-[11px] font-medium"
                          style={{ background: "#F0EEF9", color: "#444444", border: "1px solid #E2DFF5" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



