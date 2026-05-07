import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: 92, category: "Languages" },
  { name: "Python", level: 82, category: "Languages" },
  { name: "PHP", level: 85, category: "Languages" },

  // Frontend
  { name: "React.js (React 18 + Vite)", level: 92, category: "Frontend" },
  { name: "HTML5 / CSS3", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "REST API Design & Development", level: 88, category: "Backend" },
  { name: "PHP Backend", level: 82, category: "Backend" },

  // Databases
  { name: "MySQL", level: 88, category: "Database" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "SQL Server", level: 80, category: "Database" },
  { name: "Sequelize ORM", level: 82, category: "Database" },

  // Server & DevOps
  { name: "Dedicated Server Setup & OS Configuration", level: 88, category: "Server & DevOps" },
  { name: "AWS EC2", level: 80, category: "Server & DevOps" },
  { name: "Cloud Deployment", level: 85, category: "Server & DevOps" },
  { name: "Server Management", level: 85, category: "Server & DevOps" },
  { name: "Azure (Learning)", level: 60, category: "Server & DevOps" },

  // Tools & Concepts
  { name: "Git & GitHub", level: 90, category: "Tools" },
  { name: "Postman", level: 88, category: "Tools" },
  { name: "VS Code / SSMS", level: 92, category: "Tools" },
  { name: "System Design & RBAC", level: 85, category: "Tools" },
  { name: "SDLC & Agile Methodologies", level: 85, category: "Tools" },
  { name: "IoT Integration", level: 80, category: "Tools" },
];

const SkillBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-white">{skill.name}</span>
        <span className="text-neon-blue text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: delay + 0.3, duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const categories = ["Languages", "Frontend", "Backend", "Database", "Server & DevOps", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Expertise across modern web development technologies and tools
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeCategory === null
                ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50"
                : "glass text-white/70 hover:text-white"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50"
                  : "glass text-white/70 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredSkills.map((skill, idx) => (
            <SkillBar key={`${skill.category}-${skill.name}`} skill={skill} delay={idx * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
