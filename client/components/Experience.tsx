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
    title: "Software Development Engineer (Co-Founder)",
    company: "SearchFirst Technologies Pvt. Ltd.",
    companyInitials: "SF",
    companyColor: "#7C3AED",
    period: "Jan 2025 – Jun 2026",
    location: "Erode, Tamil Nadu · Part-time / Full-time breaks",
    type: "work",
    bullets: [
      "Co-founded a government-registered Private Limited IT company focused on SaaS ERP and government web applications — secured external investor funding for product development",
      "Sole developer of Tamil Nadu Govt DOTE Admissions Portal (tnpoly.in) — Node.js, Express.js, MySQL REST APIs serving 50,000+ students; achieved 40% latency reduction and 99.9% uptime",
      "Performed full server lifecycle management: Ubuntu OS installation, Nginx reverse proxy, PM2, UFW firewall, SSL/TLS certificates, and server alert systems",
      "Engineered 3-tier RBAC with server-side gender and hostel-based college filtering — cut admin workload by 60% and eliminated 100% of manual eligibility screening",
      "Integrated CCAvenue payment gateway across 100+ institutions enabling fully digital fee collection",
      "Optimized RESTful APIs and database schemas across 5+ production applications — consistent 35–40% improvement in query execution time",
      "Developed investor-funded SaaS ERP modules (academics, examinations, HR/payroll, LMS, finance) for pharmacy, school, and engineering colleges",
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Nginx", "PM2", "UFW Firewall", "SSL/Certbot", "Docker", "MongoDB"],
  },
  {
    id: 2,
    title: "Software Developer — ERP Development Team Lead",
    company: "Nandha Engineering College",
    companyInitials: "NE",
    companyColor: "#5B21B6",
    period: "Jan 2025 – Jan 2026",
    location: "Erode, Tamil Nadu · Certified Engagement",
    type: "work",
    bullets: [
      "Led development and maintenance of Campus ERP (PHP, SQL Server, JavaScript, Bootstrap) serving 1,000+ students — attendance, academics, fee management, and reporting modules",
      "Managed team of junior developers — mentored on full-stack architecture, database design, and deployment best practices",
      "Received 1-year certified commercial engagement from the institution for software development services",
    ],
    technologies: ["PHP", "SQL Server", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    id: 3,
    title: "Web Development with AI Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#312E81",
    period: "Jun 2025 – Jul 2025",
    location: "Erode, Tamil Nadu · Internship",
    type: "work",
    bullets: [
      "Built and deployed AI-integrated web applications; contributed to production releases within tight deadlines",
    ],
    technologies: ["AI/ML", "React.js", "Node.js", "Python", "JavaScript", "Vite"],
  },
  {
    id: 4,
    title: "UI/UX Design Intern",
    company: "SHENai Private Software Solutions",
    companyInitials: "SH",
    companyColor: "#1E1B4B",
    period: "Aug 2024 – Sep 2024",
    location: "Erode, Tamil Nadu · Internship",
    type: "work",
    bullets: [
      "Designed and prototyped 3+ client-facing UI modules — improved UI responsiveness by 30%; gathered client requirements and shipped iterative releases",
    ],
    technologies: ["UI/UX Design", "Figma", "Bootstrap", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: 5,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College (Anna University Affiliated)",
    companyInitials: "NE",
    companyColor: "#F59E0B",
    period: "2023 – 2027 (Final Year)",
    location: "Erode, Tamil Nadu · CGPA: 7.1 (Sem 1-5)",
    type: "education",
    bullets: [
      "Specialized in Deep Learning, Computer Vision, Machine Learning, IoT, Database Design, OS, Data Science, AR/VR, and Advanced Coding",
      "3x Innovation Day 1st Prize Winner (2024, 2025)",
      "Co-founded Private Limited IT company securing INR 25 Lakh investor funding",
    ],
    technologies: ["Deep Learning", "Computer Vision", "Machine Learning", "TensorFlow", "OpenCV", "Python", "Arduino", "ESP32", "Tableau"],
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
          className="bg-[#150B2D]/60 backdrop-blur-2xl border-white/10 rounded-xl border border-white/10 shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-6">Experience &amp; Education</h2>

          <div className="space-y-0 divide-y divide-white/10">
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
                        <h3 className="text-[15px] font-semibold text-white leading-snug">{item.title}</h3>
                        <p className="text-sm font-medium text-[#7C3AED] mt-0.5">{item.company}</p>
                        <p className="text-xs text-[#C4BEED] mt-0.5 flex items-center gap-2">
                          <span>{item.period}</span>
                          <span className="text-[#ccc]">·</span>
                          <span>{item.location}</span>
                        </p>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1 flex-shrink-0 mt-0.5"
                        style={{
                          background: item.type === "work" ? "rgba(124,58,237,0.15)" : item.type === "education" ? "rgba(245,158,11,0.15)" : "rgba(49,46,129,0.15)",
                          color: item.type === "work" ? "#C4BEED" : item.type === "education" ? "#FDE68A" : "#C7D2FE",
                          border: item.type === "work" ? "1px solid rgba(124,58,237,0.3)" : item.type === "education" ? "1px solid rgba(245,158,11,0.3)" : "1px solid rgba(49,46,129,0.3)",
                        }}
                      >
                        <Icon className="w-3 h-3" />
                        {item.type === "work" ? "Full-time" : item.type === "education" ? "Education" : "Project"}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-1.5 mb-3">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-2 text-sm text-[#C4BEED] leading-relaxed">
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
                          style={{ background: "rgba(255,255,255,0.05)", color: "#E2DFF5", border: "1px solid rgba(255,255,255,0.1)" }}
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



