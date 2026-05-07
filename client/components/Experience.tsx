import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code } from "lucide-react";

interface TimelineItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description?: string;
  bullets?: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer / ERP System Developer",
    company: "SearchFirst Technologies | Erode, Tamil Nadu",
    period: "Jan 2025 – Present",
    bullets: [
      "Developed and maintained full-stack web applications and ERP platforms — including a Tamil Nadu Government portal (DOTE) — collectively serving 50,000+ end users; configured dedicated production servers from OS level with 99.9% uptime",
      "Engineered multi-role RBAC systems and complex server-side business logic, reducing manual administrative workload by ~60% across client platforms",
      "Integrated third-party payment gateways enabling 100% digital transaction processing for enterprise and government clients, replacing legacy paper-based workflows",
      "Designed RESTful APIs with Node.js and Express.js; optimized MySQL and MongoDB schemas, improving query performance by 40% across production applications"
    ],
    technologies: ["React 18", "Node.js", "Express.js", "MySQL", "MongoDB", "Sequelize ORM", "CCAvenue"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Web Developer Intern",
    company: "SHENai Private Software Solutions | Erode, Tamil Nadu",
    period: "Jun 2024 – Dec 2024",
    bullets: [
      "Delivered 3+ client-facing web applications using PHP, MySQL, HTML5, CSS3, and JavaScript; implemented backend logic and integrated relational databases, reducing manual reporting time by 25%",
      "Improved UI performance and application responsiveness by 30% through systematic debugging, code refactoring, and performance profiling"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Full Stack Developer (Personal & Open Source)",
    company: "GitHub | Remote",
    period: "2023 – Present",
    bullets: [
      "Independently designed and shipped 5+ production-grade full-stack applications across healthcare, payroll, ERP, and IoT domains — solving real-world institutional and enterprise problems with scalable architecture"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PHP", "Arduino", "Tailwind CSS"],
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "B.Tech – Artificial Intelligence & Data Science",
    company: "Nandha Engineering College, Erode, Tamil Nadu | Anna University Affiliated",
    period: "2023 – Present",
    bullets: [
      "Pursuing a Bachelor of Technology in Artificial Intelligence and Data Science (Affiliated with Anna University).",
      "Winner — Unique Project Award, Innovation Day 2024 for the IoT Smart Attendance System.",
      "Actively developing award-winning innovative projects and maintaining high academic excellence."
    ],
    technologies: ["Artificial Intelligence", "Machine Learning", "Python", "Data Structures", "DBMS"],
    icon: <Briefcase className="w-6 h-6" />,
  },
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`flex gap-8 items-center ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Card content */}
      <div className="flex-1 text-left">
        <motion.div
          className="glass rounded-xl p-6 hover:shadow-lg hover:shadow-neon-blue/30 transition-shadow"
          whileHover={{ y: -5 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-neon-blue font-semibold mb-1">{item.company}</p>
          <p className="text-white/60 text-sm mb-3">{item.period}</p>
          
          {item.bullets ? (
            <ul className="text-white/70 text-sm space-y-2 mb-4">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex gap-2 items-start leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/70 mb-4">{item.description}</p>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 justify-start">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-neon-purple/10 text-neon-purple rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="flex-shrink-0 relative">
        <motion.div
          className="w-12 h-12 rounded-full glass flex items-center justify-center"
          whileInView={{ scale: 1.2 }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        >
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
          <div className="relative bg-background rounded-full w-10 h-10 flex items-center justify-center">
            {item.icon && (
              <div className="text-neon-blue">{item.icon}</div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Experience in building enterprise solutions and contributing to the tech community
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timeline.map((item, idx) => (
            <TimelineCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
