import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Server, Globe } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  demoLink?: string;
  liveUrl?: string;
  githubLink?: string;
  highlight?: string;
  gradient: string;
  infraBadge?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Government Admissions Portal — DOTE, Tamil Nadu",
    description:
      "Sole developer and infrastructure owner for tnpoly.in — Tamil Nadu's official polytechnic admissions portal serving 50,000+ students statewide. Personally handled bare-metal server procurement, Ubuntu Linux OS installation, ufw firewall configuration, Nginx reverse-proxy setup, SSL/TLS certificate binding, and application deployment from scratch. Built the full-stack application with 3-role RBAC, CCAvenue payment gateway, and server-side filtering logic — eliminating all paper-based workflows. Currently the sole person responsible for ongoing server maintenance, uptime monitoring, patches, and all infrastructure operations.",
    image: "/dote_pro.png",
    tags: ["React 18 + Vite", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu Server", "Linux", "Nginx", "ufw Firewall", "SSL/TLS"],
    category: ["Government", "Full Stack", "DevOps"],
    demoLink: "https://tnpoly.in",
    liveUrl: "tnpoly.in",
    highlight: "50K+ Users · Live",
    infraBadge: "🖥️ Physical Server Owner",
    gradient: "from-[#0A66C2] to-[#38BDF8]",
  },
  {
    id: 2,
    title: "Campus ERP System — Nandha Engineering College",
    description:
      "Collaborated as part of a development team to build and deploy a full-scale institutional ERP for Nandha Engineering College, managing 1,000+ student records, attendance tracking, academic reporting, and administrative workflows. Contributed to frontend UI, backend PHP logic, and MySQL database design across the full project lifecycle.",
    image: "/sf_cms.png",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: ["ERP", "Team Project"],
    demoLink: "https://searchfirst.in",
    highlight: "1K+ Students",
    gradient: "from-[#6366F1] to-[#818CF8]",
  },
  {
    id: 3,
    title: "Hospital Management System",
    description:
      "Production-deployed healthcare platform managing patient records, appointments, and billing; reduced manual data entry by 70% with role-based dashboards for clinical and administrative staff.",
    image: "/hms_pro.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    category: ["Healthcare", "Full Stack"],
    demoLink: "http://72.61.229.231",
    highlight: "70% Efficiency Gain",
    gradient: "from-[#059669] to-[#34D399]",
  },
  {
    id: 4,
    title: "Enterprise Payroll Management System",
    description:
      "Payroll platform with JWT authentication, 3-role RBAC, and salary processing APIs managing 100+ employee records; reduced MongoDB query execution time by 35%.",
    image: "/payroll_pro.png",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS"],
    category: ["ERP", "MERN"],
    highlight: "35% Faster Queries",
    gradient: "from-[#EA580C] to-[#FB923C]",
  },
  {
    id: 5,
    title: "Smart Attendance System — RFID Based",
    description:
      "Award-winning IoT system automating attendance for 200+ students using Arduino RFID hardware with PHP/SQL Server backend — eliminated 100% of manual attendance recording.",
    image: "/attendance_pro.png",
    tags: ["Arduino", "RFID", "PHP", "SQL Server", "IoT"],
    category: ["IoT"],
    highlight: "🏆 Innovation Award 2024",
    gradient: "from-[#9333EA] to-[#C084FC]",
  },
];

const allCategories = Array.from(new Set(projects.flatMap((p) => p.category)));

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="pro-card overflow-hidden flex flex-col h-full group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(10, 102, 194, 0.12)" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      layout
    >
      {/* Image / Banner area */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback gradient if image fails
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay with fallback */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 flex items-center justify-center`}
          style={{ display: "none" }}
          id={`project-fallback-${project.id}`}
        />
        {/* Top overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 rounded-lg text-xs font-semibold text-[#0F172A] hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A66C2] rounded-lg text-xs font-semibold text-white hover:bg-[#0956A8] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </motion.div>

        {/* Highlight badge */}
        {project.highlight && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-xs font-semibold shadow-sm"
            style={{ background: "linear-gradient(135deg, #0A66C2, #6366F1)" }}
          >
            {project.highlight}
          </div>
        )}
        {/* Infra ownership badge */}
        {project.infraBadge && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-white text-xs font-semibold shadow-sm"
            style={{ background: "rgba(15, 23, 42, 0.82)", backdropFilter: "blur(6px)" }}
          >
            <Server className="w-3 h-3 flex-shrink-0" />
            {project.infraBadge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Categories */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.category.map((cat) => (
            <span key={cat} className="badge-blue text-xs">
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#0A66C2] transition-colors">
          {project.title}
        </h3>

        {/* Live URL chip */}
        {project.liveUrl && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-1 rounded-full text-[10px] font-semibold transition-colors"
            style={{ background: "#DCFCE7", color: "#15803D", border: "1px solid #BBF7D0" }}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Live: {project.liveUrl}
          </a>
        )}

        <p className="text-[#64748B] text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="flex gap-2 mt-auto pt-3 border-t border-[#F1F5F9]">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#0A66C2] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Source Code
            </a>
          )}
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#0A66C2] hover:text-[#0956A8] ml-auto transition-colors"
            >
              {project.liveUrl ? (
                <><Globe className="w-3.5 h-3.5" /> {project.liveUrl}</>
              ) : (
                <>View Live <ArrowRight className="w-3.5 h-3.5" /></>
              )}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filteredProjects = activeFilter
    ? projects.filter((p) => p.category.includes(activeFilter))
    : projects;

  return (
    <section id="projects" className="section-wrapper bg-white">
      <div className="max-w-7xl mx-auto">
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
            Featured Work
            <span className="w-8 h-px bg-[#0A66C2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Real-world production projects showcasing expertise in MERN, ERP, Healthcare, and IoT systems
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === null
                ? "text-white shadow-blue"
                : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#0A66C2]/30 hover:text-[#0A66C2]"
            }`}
            style={activeFilter === null ? { background: "linear-gradient(135deg, #0A66C2, #6366F1)" } : {}}
            id="project-filter-all"
          >
            All Projects
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "text-white shadow-blue"
                  : "bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#0A66C2]/30 hover:text-[#0A66C2]"
              }`}
              style={
                activeFilter === category
                  ? { background: "linear-gradient(135deg, #0A66C2, #6366F1)" }
                  : {}
              }
              id={`project-filter-${category.toLowerCase().replace(/\s/g, "-")}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
