import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Award } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  type: "work" | "education" | "project" | "award";
  bullets: string[];
  technologies: string[];
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer / ERP System Developer & Infrastructure Engineer",
    company: "SearchFirst Technologies · Erode, Tamil Nadu",
    period: "Jan 2025 – Present",
    type: "work",
    bullets: [
      "Sole developer and infrastructure owner of tnpoly.in — Tamil Nadu Government's official polytechnic admissions portal serving 50,000+ students statewide; personally procured, assembled, and configured the physical bare-metal production server from scratch including Ubuntu Linux OS installation, ufw firewall rules, Nginx reverse-proxy configuration, SSL/TLS certificate binding, and domain setup",
      "Solely responsible for all ongoing server operations: uptime monitoring (99.9% SLA), security patch management, backup procedures, Nginx configuration, port management, and emergency incident response — the server has never experienced a critical outage under my watch",
      "Engineered multi-role RBAC systems and complex server-side business logic, reducing manual administrative workload by ~60% across client platforms",
      "Integrated CCAvenue payment gateway enabling 100% digital fee processing for government admissions — completely replacing paper-based workflows",
      "Designed RESTful APIs with Node.js and Express.js; optimized MySQL and MongoDB schemas, improving query performance by 40% across production applications",
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Linux", "Nginx", "ufw Firewall", "SSL/TLS", "MongoDB"],
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "SHENai Private Software Solutions · Erode, Tamil Nadu",
    period: "Jun 2024 – Dec 2024",
    type: "work",
    bullets: [
      "Delivered 3+ client-facing web applications using PHP, MySQL, HTML5, CSS3, and JavaScript; reduced manual reporting time by 25%",
      "Improved UI performance and application responsiveness by 30% through systematic debugging and code refactoring",
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: 3,
    title: "Campus ERP Developer — Team Project",
    company: "Nandha Engineering College · Erode, Tamil Nadu",
    period: "2023 – 2024",
    type: "project",
    bullets: [
      "Collaborated as part of a development team to design and deliver a full-scale Campus ERP system for Nandha Engineering College, managing 1,000+ student records, attendance, academic reporting, and administrative workflows",
      "Contributed to frontend UI development (HTML, CSS, JavaScript), backend PHP logic, and MySQL database schema design across the full project lifecycle",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 4,
    title: "Full Stack Developer (Personal & Open Source)",
    company: "GitHub · Remote",
    period: "2023 – Present",
    type: "project",
    bullets: [
      "Independently designed and shipped 5+ production-grade full-stack applications across healthcare, payroll, ERP, and IoT domains",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PHP", "Arduino", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College · Anna University Affiliated",
    period: "2023 – Present",
    type: "education",
    bullets: [
      "Pursuing B.Tech in Artificial Intelligence and Data Science (Affiliated with Anna University)",
      "Winner — Unique Project Award, Innovation Day 2024 for the IoT Smart Attendance System",
      "Actively developing award-winning innovative projects across AI, ML, and IoT domains",
    ],
    technologies: ["Artificial Intelligence", "Machine Learning", "Python", "Data Structures", "DBMS"],
  },
];

const typeConfig = {
  work: {
    icon: Briefcase,
    label: "Work",
    color: "#0A66C2",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  education: {
    icon: GraduationCap,
    label: "Education",
    color: "#059669",
    bg: "#ECFDF5",
    border: "#A7F3D0",
  },
  project: {
    icon: Code2,
    label: "Project",
    color: "#6366F1",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  award: {
    icon: Award,
    label: "Award",
    color: "#D97706",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper" style={{ background: "#F8FAFC" }}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="w-8 h-px bg-[#0A66C2]" />
            Career
            <span className="w-8 h-px bg-[#0A66C2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display">
            Professional <span className="text-gradient-blue">Journey</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Experience in building enterprise solutions and contributing to the tech community
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0A66C2] via-[#6366F1] to-[#E2E8F0]" />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;

              return (
                <motion.div
                  key={item.id}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 top-6 w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-card z-10"
                    style={{ background: config.bg, color: config.color }}
                    whileInView={{ scale: [0.8, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.2, duration: 0.4 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="pro-card p-6"
                    whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(10, 102, 194, 0.1)" }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{ background: config.bg, color: config.color, border: `1px solid ${config.border}` }}
                          >
                            {config.label}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#0F172A] leading-snug">{item.title}</h3>
                        <p className="text-[#0A66C2] font-medium text-sm mt-0.5">{item.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-[#F1F5F9] rounded-full text-xs font-medium text-[#64748B] flex-shrink-0">
                        {item.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2.5 items-start text-sm text-[#475569] leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: config.color }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
