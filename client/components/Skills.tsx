import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: 92, category: "Languages", icon: "JS" },
  { name: "Python", level: 82, category: "Languages", icon: "Py" },
  { name: "PHP", level: 85, category: "Languages", icon: "PHP" },

  // Frontend
  { name: "React.js (React 18 + Vite)", level: 92, category: "Frontend", icon: "⚛" },
  { name: "HTML5 / CSS3", level: 95, category: "Frontend", icon: "🌐" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", icon: "🎨" },
  { name: "Bootstrap", level: 85, category: "Frontend", icon: "🅱" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
  { name: "Express.js", level: 90, category: "Backend", icon: "EX" },
  { name: "REST API Design & Development", level: 88, category: "Backend", icon: "🔌" },
  { name: "PHP Backend", level: 82, category: "Backend", icon: "PHP" },

  // Databases
  { name: "MySQL", level: 88, category: "Database", icon: "🗄" },
  { name: "MongoDB", level: 85, category: "Database", icon: "🍃" },
  { name: "SQL Server", level: 80, category: "Database", icon: "DB" },
  { name: "Sequelize ORM", level: 82, category: "Database", icon: "SQ" },

  // Server & DevOps
  { name: "Ubuntu Linux Server Administration", level: 88, category: "DevOps", icon: "🐧" },
  { name: "Nginx (Reverse Proxy & Web Server)", level: 85, category: "DevOps", icon: "⚡" },
  { name: "ufw Firewall & Network Security", level: 85, category: "DevOps", icon: "🔒" },
  { name: "AWS EC2", level: 80, category: "DevOps", icon: "☁" },
  { name: "Cloud & Physical Server Deployment", level: 88, category: "DevOps", icon: "🚀" },
  { name: "SSL/TLS & Domain Configuration", level: 87, category: "DevOps", icon: "🔐" },

  // Tools
  { name: "Git & GitHub", level: 90, category: "Tools", icon: "🐙" },
  { name: "Postman", level: 88, category: "Tools", icon: "📮" },
  { name: "System Design & RBAC", level: 85, category: "Tools", icon: "🏗" },
  { name: "SDLC & Agile", level: 85, category: "Tools", icon: "📋" },
  { name: "IoT Integration", level: 80, category: "Tools", icon: "📡" },
];

const categories = ["All", "Languages", "Frontend", "Backend", "Database", "DevOps", "Tools"];

const categoryColors: Record<string, { bg: string; text: string; bar: string }> = {
  Languages: { bg: "#EFF6FF", text: "#0A66C2", bar: "linear-gradient(90deg, #0A66C2, #38BDF8)" },
  Frontend: { bg: "#F0F9FF", text: "#0369A1", bar: "linear-gradient(90deg, #0369A1, #38BDF8)" },
  Backend: { bg: "#F5F3FF", text: "#6366F1", bar: "linear-gradient(90deg, #6366F1, #818CF8)" },
  Database: { bg: "#ECFDF5", text: "#059669", bar: "linear-gradient(90deg, #059669, #34D399)" },
  DevOps: { bg: "#FFF7ED", text: "#EA580C", bar: "linear-gradient(90deg, #EA580C, #FB923C)" },
  Tools: { bg: "#FDF4FF", text: "#9333EA", bar: "linear-gradient(90deg, #9333EA, #C084FC)" },
};

const SkillBar = ({ skill }: { skill: Skill }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const colors = categoryColors[skill.category] || categoryColors.Languages;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: colors.bg, color: colors.text }}
          >
            {skill.icon}
          </span>
          <span className="text-sm font-medium text-[#0F172A]">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold" style={{ color: colors.text }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: colors.bar }}
          initial={{ width: 0 }}
          animate={{ width: animated ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-wrapper" style={{ background: "#F8FAFC" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="w-8 h-px bg-[#0A66C2]" />
            Technical Skills
            <span className="w-8 h-px bg-[#0A66C2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display">
            My <span className="text-gradient-blue">Expertise</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Expertise across modern web development technologies, cloud infrastructure, and IoT systems
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "text-white shadow-blue"
                  : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#0A66C2]/30 hover:text-[#0A66C2]"
              }`}
              style={
                active === cat
                  ? { background: "linear-gradient(135deg, #0A66C2, #6366F1)" }
                  : {}
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id={`skill-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          layout
        >
          {filtered.map((skill, idx) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              className="pro-card p-5 hover:border-[#0A66C2]/20"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <SkillBar skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
