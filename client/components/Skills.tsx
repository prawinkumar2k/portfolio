import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, CheckCircle2 } from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "PHP", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frontend
  { name: "React 18", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Bootstrap 5", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Three.js / R3F", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST API Design", category: "Backend" },
  { name: "JWT Auth & RBAC", category: "Backend" },
  { name: "Payment Gateways (CCAvenue)", category: "Backend" },
  { name: "PHP Backend", category: "Backend" },

  // Database
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Sequelize ORM", category: "Database" },
  { name: "Mongoose", category: "Database" },

  // DevOps & Cloud
  { name: "Ubuntu Linux Server", category: "DevOps" },
  { name: "Nginx Reverse Proxy", category: "DevOps" },
  { name: "PM2 Process Manager", category: "DevOps" },
  { name: "UFW Firewall", category: "DevOps" },
  { name: "SSL/TLS (Certbot)", category: "DevOps" },
  { name: "Bare-Metal VPS Setup", category: "DevOps" },
  { name: "Docker Basics", category: "DevOps" },
  { name: "Hostinger VPS", category: "DevOps" },

  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "System Design & RBAC", category: "Tools" },
  { name: "SDLC & Agile", category: "Tools" },
  { name: "IoT & Hardware Integration", category: "Tools" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Database", "DevOps", "Tools"];

const categoryStyles: Record<string, { lightBg: string; text: string; border: string; darkBg: string }> = {
  Languages: { lightBg: "#EEF2FF", text: "#4338CA", border: "#C7D2FE", darkBg: "rgba(99,102,241,0.15)" },
  Frontend:  { lightBg: "#F0FDF4", text: "#15803D", border: "#BBF7D0", darkBg: "rgba(22,163,74,0.15)" },
  Backend:   { lightBg: "#FAF5FF", text: "#7E22CE", border: "#E9D5FF", darkBg: "rgba(168,85,247,0.15)" },
  Database:  { lightBg: "#F0F9FF", text: "#0369A1", border: "#BAE6FD", darkBg: "rgba(14,165,233,0.15)" },
  DevOps:    { lightBg: "#FFFBEB", text: "#B45309", border: "#FDE68A", darkBg: "rgba(245,158,11,0.15)" },
  Tools:     { lightBg: "#F8FAFC", text: "#334155", border: "#CBD5E1", darkBg: "rgba(255,255,255,0.08)" },
};

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="pro-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <span>Skills &amp; Technologies</span>
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filtered.length} technical competencies
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 rounded-2xl w-fit">
            {categories.map((cat) => {
              const isSelected = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative px-4 py-1.5 rounded-xl text-xs font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  id={`skill-filter-${cat.toLowerCase()}`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Pills Grid */}
          <motion.div className="flex flex-wrap gap-2.5 min-h-[140px]" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => {
                const style = categoryStyles[skill.category] || categoryStyles.Languages;
                return (
                  <motion.div
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ y: -2, scale: 1.04 }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold cursor-default select-none shadow-sm transition-all duration-200 border"
                    style={{
                      backgroundColor: style.lightBg,
                      color: style.text,
                      borderColor: style.border,
                    }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 opacity-70" />
                    <span>{skill.name}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Legend Row */}
          <div className="mt-8 pt-5 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-x-5 gap-y-2">
            {Object.entries(categoryStyles).map(([cat, style]) => (
              <span key={cat} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: style.text }}
                />
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
