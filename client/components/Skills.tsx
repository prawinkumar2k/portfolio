import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, Server, Code, Database, Cpu, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: any;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Backend & Systems",
    icon: Server,
    color: "#4F46E5",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth & RBAC", "CCAvenue Payment Gateway", "PHP Backend", "Sequelize ORM", "Microservices Architecture"],
  },
  {
    name: "Frontend & UI Engineering",
    icon: Code,
    color: "#059669",
    skills: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Bootstrap 5", "Framer Motion", "Three.js & R3F"],
  },
  {
    name: "DevOps & Cloud Infrastructure",
    icon: Terminal,
    color: "#D97706",
    skills: ["Ubuntu Linux Server", "Nginx (Reverse Proxy)", "PM2 Process Manager", "UFW Firewall", "SSL/TLS (Certbot)", "Bare-Metal VPS Setup", "Docker (Basics)", "Hostinger VPS"],
  },
  {
    name: "Databases & Storage",
    icon: Database,
    color: "#7C3AED",
    skills: ["MySQL", "MongoDB", "SQL Server", "Database Indexing", "Query Optimization", "Mongoose", "Schema Design"],
  },
  {
    name: "Languages & AI/IoT",
    icon: Cpu,
    color: "#0284C7",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Deep Learning (CNN)", "OpenCV", "Arduino & ESP32", "RFID Integration", "Git & GitHub"],
  },
];

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Full Stack Arsenal</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Skills, Tools &amp; Technologies
            </h2>
          </div>

          {/* Quick Search Input */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Node, React, Ubuntu)..."
              className="w-full px-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-indigo-500 shadow-sm"
            />
          </div>
        </div>

        {/* Bento Grid of Skill Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="pro-card p-6 flex flex-col justify-between group hover:border-indigo-300 dark:hover:border-purple-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {cat.name}
                    </h3>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {cat.skills.length} core competencies
                    </div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-purple-400 transition-colors shadow-sm cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 opacity-60 text-indigo-600 dark:text-purple-400" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
