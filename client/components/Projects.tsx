import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import React, { useState, useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Government Admissions Portal — DOTE, Tamil Nadu",
    description: "Built and deployed a large-scale government admissions portal for DOTE, Tamil Nadu, serving 50,000+ students statewide; set up and manage a dedicated production server from OS installation with 99.9% uptime. Implemented 3-role RBAC, server-side filtering logic, and payment gateway integration — processing 100% of fee transactions digitally and eliminating paper-based workflows.",
    image: "/dote_pro.png",
    tags: ["React 18 + Vite", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue Payment Gateway"],
    category: ["Government", "Full Stack"],
  },
  {
    id: 2,
    title: "Campus ERP System — Nandha Engineering College",
    description: "Designed and deployed a full-scale institutional ERP for Nandha Engineering College managing 1,000+ student records, attendance, and academic reporting — delivered under a certified 1-year engagement.",
    image: "/sf_cms.png",
    tags: ["PHP", "SQL Server", "JavaScript", "Bootstrap"],
    category: ["ERP", "Full Stack"],
    demoLink: "https://searchfirst.in",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description: "Production-deployed healthcare platform managing patient records, appointments, and billing; reduced manual data entry by 70% with role-based dashboards for clinical and administrative staff.",
    image: "/hms_pro.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    category: ["Healthcare", "Full Stack"],
    demoLink: "http://72.61.229.231",
  },
  {
    id: 4,
    title: "Enterprise Payroll Management System",
    description: "Payroll platform with JWT authentication, 3-role RBAC, and salary processing APIs managing 100+ employee records; reduced MongoDB query execution time by 35% through schema optimization and indexing.",
    image: "/payroll_pro.png",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS"],
    category: ["ERP", "MERN"],
  },
  {
    id: 5,
    title: "Smart Attendance System — RFID Based",
    description: "Award-winning IoT system automating attendance for 200+ students using Arduino RFID hardware with a PHP/SQL Server backend — eliminated 100% of manual attendance recording. (Winner: Innovation Day 2024)",
    image: "/attendance_pro.png",
    tags: ["Arduino", "RFID", "PHP", "SQL Server", "IoT"],
    category: ["IoT"],
  },
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotationX = (y - centerY) / 10;
    const rotationY = (centerX - x) / 10;

    setRotation({ x: rotationX, y: rotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d" as const,
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      className="h-full"
    >
      <div className="glass rounded-xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-neon-blue/30 transition-shadow duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-neon-blue/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-neon-blue" />
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass rounded-full hover:bg-neon-blue/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 text-neon-blue" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/60 text-sm mb-4 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Category badges */}
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs bg-neon-purple/10 text-neon-purple rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allCategories = Array.from(
    new Set(projects.flatMap((p) => p.category))
  );

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.category.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Real-world projects showcasing expertise in MERN, ERP, and IoT systems
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeFilter === null
                ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50"
                : "glass text-white/70 hover:text-white"
            }`}
          >
            All Projects
          </button>
          {allCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
