import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Server, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

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
    title: "DOTE Admissions Portal — Tamil Nadu Govt",
    description:
      "Production government admissions portal serving 50,000+ students statewide across 100+ institutions. Sole developer and infrastructure owner responsible for bare-metal server setup, OS install, Nginx reverse proxy, PM2, UFW firewall, and SSL. Achieved 40% latency reduction and 99.9% uptime with 3-tier RBAC and CCAvenue payment gateway integration.",
    image: "/dote_pro.png",
    tags: ["React 18", "Vite", "Node.js", "Express.js", "MySQL", "Sequelize ORM", "CCAvenue", "Ubuntu VPS", "Nginx", "PM2"],
    category: ["Government", "Full Stack", "DevOps"],
    demoLink: "https://tnpoly.in",
    liveUrl: "tnpoly.in",
    highlight: "50K+ Users · Live",
    infraBadge: "🖥️ Dedicated Server Owner",
    gradient: "from-[#7C3AED] to-[#A855F7]",
  },
  {
    id: 2,
    title: "Multi-Tenant SaaS ERP Platform",
    description:
      "Investor-funded SaaS ERP platform built for the education sector. Features modular architecture covering academic management, examination automation, HR/payroll, LMS, NAAC/PCI compliance, library, and finance modules. Developed under secured product development funding.",
    image: "/placeholder.svg",
    tags: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js", "MySQL", "Tailwind CSS", "JWT", "Docker"],
    category: ["ERP", "Full Stack", "MERN"],
    highlight: "Funding Secured",
    gradient: "from-[#D97706] to-[#F59E0B]",
  },
  {
    id: 3,
    title: "Campus ERP — Nandha Engineering College",
    description:
      "Institutional ERP for managing attendance, academics, and fee management serving 1,000+ students. Cuts administrative workload by 50%. Delivered under a certified 1-year commercial engagement.",
    image: "/sf_cms.png",
    tags: ["PHP", "SQL Server", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    category: ["ERP", "Full Stack"],
    demoLink: "https://searchfirst.in",
    highlight: "1K+ Students · Live",
    gradient: "from-[#312E81] to-[#818CF8]",
  },
  {
    id: 4,
    title: "AI-Based Autonomous Smart Car",
    description:
      "Autonomous car project featuring CNN-based path navigation, RFID security, and an AI voice assistant. Awarded 1st Prize at Nandha Innovation Day for two consecutive years (2024 and 2025).",
    image: "/placeholder.svg",
    tags: ["Arduino", "ESP32", "RFID", "Deep Learning (CNN)", "OpenCV", "Python"],
    category: ["AI / ML", "IoT"],
    highlight: "🏆 1st Prize '24 & '25",
    gradient: "from-[#9333EA] to-[#C084FC]",
  },
  {
    id: 5,
    title: "Enterprise Payroll & HRMS Platform",
    description:
      "Production-deployed 3-role HRMS (Admin, HR, Employee) with salary processing APIs for 100+ employees. Redesigned MongoDB schema and indexing to reduce query response times by 35%.",
    image: "/payroll_pro.png",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT", "RBAC"],
    category: ["ERP", "MERN"],
    highlight: "35% Query Optimization",
    gradient: "from-[#EA580C] to-[#FB923C]",
  },
  {
    id: 6,
    title: "Hospital Management System",
    description:
      "Comprehensive healthcare platform managing patient records, appointments, and billing with role-based clinical dashboards. Reduced manual data entry by 70%.",
    image: "/hms_pro.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
    category: ["Healthcare", "Full Stack"],
    highlight: "70% Manual Entry Cut",
    gradient: "from-[#5B21B6] to-[#34D399]",
  },
  {
    id: 7,
    title: "Smart RFID Attendance System",
    description:
      "Automated RFID attendance system deployed for 200+ students. Directly integrates hardware with a PHP and SQL Server backend to eliminate manual tracking errors.",
    image: "/attendance_pro.png",
    tags: ["Arduino", "RFID", "PHP", "SQL Server", "IoT"],
    category: ["IoT"],
    highlight: "100% Automated Tracking",
    gradient: "from-[#2D2A5E] to-[#4D4880]",
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
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.12)" }}
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
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#150B2D]/60 backdrop-blur-2xl border-white/10/90 rounded-lg text-xs font-semibold text-white hover:bg-[#150B2D]/60 backdrop-blur-2xl border-white/10 transition-colors"
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
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#7C3AED] rounded-lg text-xs font-semibold text-white hover:bg-[#6D28D9] transition-colors"
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
            style={{ background: "linear-gradient(135deg, #7C3AED, #312E81)" }}
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

        <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-[#7C3AED] transition-colors">
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

        <p className="text-[#C4BEED] text-sm leading-relaxed flex-1 mb-4">
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
        <div className="flex gap-2 mt-auto pt-3 border-t border-[#F5F3FC]">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#C4BEED] hover:text-[#6D28D9] transition-colors"
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
              className="flex items-center gap-1.5 text-xs font-medium text-[#7C3AED] hover:text-[#6D28D9] ml-auto transition-colors"
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

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#150B2D]/60 backdrop-blur-2xl border-white/10 rounded-xl border border-white/10 shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-white">Featured Projects</h2>
            <span className="text-xs text-[#C4BEED] font-medium">{filteredProjects.length} projects</span>
          </div>

          {/* Filter buttons */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setActiveFilter(null)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
              style={activeFilter === null ? { background: "#6D28D9", color: "#fff", border: "1.5px solid #6D28D9" } : { background: "rgba(255,255,255,0.05)", color: "#E2DFF5", border: "1.5px solid rgba(255,255,255,0.1)" }}
              id="project-filter-all"
            >
              All
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={activeFilter === category ? { background: "#6D28D9", color: "#fff", border: "1.5px solid #6D28D9" } : { background: "rgba(255,255,255,0.05)", color: "#E2DFF5", border: "1.5px solid rgba(255,255,255,0.1)" }}
                id={`project-filter-${category.toLowerCase().replace(/\s/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Carousel */}
          <div className="relative group/carousel">
            <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
              <div className="flex gap-4">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, idx) => (
                    <div key={project.id} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-0.5rem)] min-w-0">
                      <ProjectCard project={project} index={idx} />
                    </div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -left-3 sm:-left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E1B4B] border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] z-10 hover:bg-[#6D28D9] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E1B4B] border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] z-10 hover:bg-[#6D28D9] hover:scale-110 transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



