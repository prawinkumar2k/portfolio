import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

  // Frontend
  { name: "React.js 18", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST API Design", category: "Backend" },
  { name: "JWT Auth & RBAC", category: "Backend" },
  { name: "PHP Backend", category: "Backend" },

  // Database
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "Sequelize ORM", category: "Database" },

  // DevOps & Infra
  { name: "Ubuntu Linux Server", category: "DevOps" },
  { name: "Nginx (Reverse Proxy)", category: "DevOps" },
  { name: "ufw Firewall", category: "DevOps" },
  { name: "PM2 Process Manager", category: "DevOps" },
  { name: "SSL/TLS · Certbot", category: "DevOps" },
  { name: "Bare-metal Deployment", category: "DevOps" },
  { name: "Docker (Basic)", category: "DevOps" },
  { name: "Azure (Learning)", category: "DevOps" },
  { name: "Hostinger VPS", category: "DevOps" },

  // Tools
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "System Design & RBAC", category: "Tools" },
  { name: "SDLC & Agile", category: "Tools" },
  { name: "IoT Integration", category: "Tools" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Database", "DevOps", "Tools"];

const categoryConfig: Record<string, { color: string; bg: string; border: string }> = {
  Languages: { color: "#0A66C2", bg: "#EFF6FF", border: "#BFDBFE" },
  Frontend:  { color: "#0369A1", bg: "#F0F9FF", border: "#BAE6FD" },
  Backend:   { color: "#4338CA", bg: "#EEF2FF", border: "#C7D2FE" },
  Database:  { color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  DevOps:    { color: "#EA580C", bg: "#FFF7ED", border: "#FED7AA" },
  Tools:     { color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
};

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl border border-[#E0DED9] shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-[#000000e6] mb-5">Skills &amp; Expertise</h2>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={
                  active === cat
                    ? { background: "#0A66C2", color: "#fff", border: "1.5px solid #0A66C2" }
                    : { background: "white", color: "#666666", border: "1.5px solid #E0DED9" }
                }
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id={`skill-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Skill chips */}
          <motion.div className="flex flex-wrap gap-2" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((skill) => {
                const cfg = categoryConfig[skill.category] || categoryConfig.Languages;
                return (
                  <motion.span
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center px-3.5 py-2 rounded-full text-sm font-medium cursor-default select-none transition-all duration-200 hover:shadow-sm"
                    style={{ background: cfg.bg, color: cfg.color, border: `1.5px solid ${cfg.border}` }}
                    whileHover={{ y: -1, scale: 1.03 }}
                  >
                    {skill.name}
                  </motion.span>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Legend */}
          <div className="mt-6 pt-5 border-t border-[#F3F2EF] flex flex-wrap gap-x-5 gap-y-2">
            {Object.entries(categoryConfig).map(([cat, cfg]) => (
              <span key={cat} className="flex items-center gap-1.5 text-xs text-[#666666]">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cfg.color }} />
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
