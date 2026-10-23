import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Server, Globe, Sparkles } from "lucide-react";
import { useState } from "react";
import { SpotlightCard } from "./animations/SpotlightCard";
import { BorderBeam } from "./animations/BorderBeam";
import { TiltCard } from "./animations/TiltCard";

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
    highlight: "50K+ Students · 99.9% Uptime",
    infraBadge: "🖥️ Bare-Metal Server Owner",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: 2,
    title: "Multi-Tenant SaaS ERP Platform",
    description:
      "Enterprise SaaS ERP platform engineered for the education sector. Features modular architecture covering academic management, examination automation, HR/payroll, LMS, NAAC/PCI compliance, library, and finance modules with 3-tier role-based access control.",
    image: "/sf_cms.png",
    tags: ["MERN Stack", "Node.js", "Express.js", "MongoDB", "React.js", "MySQL", "Tailwind CSS", "JWT", "Docker"],
    category: ["ERP", "Full Stack"],
    highlight: "Modular Multi-Tenant Architecture",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    title: "Campus ERP — Nandha Engineering College",
    description:
      "Institutional ERP for managing attendance, academics, and fee management serving 1,000+ students. Cuts administrative workload by 50%. Delivered under a certified 1-year commercial engagement with Anna University affiliated institution.",
    image: "/sf_cms.png",
    tags: ["PHP", "SQL Server", "JavaScript", "Bootstrap 5", "HTML5", "CSS3"],
    category: ["ERP", "Full Stack"],
    demoLink: "https://searchfirst.in",
    liveUrl: "searchfirst.in",
    highlight: "1K+ Students · Live",
    gradient: "from-blue-600 to-indigo-600",
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
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 5,
    title: "Enterprise Payroll & HRMS Platform",
    description:
      "Production-deployed 3-role HRMS (Admin, HR, Employee) with salary processing APIs for 100+ employees. Redesigned MongoDB schema and indexing to reduce query response times by 35%.",
    image: "/payroll_pro.png",
    tags: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT", "RBAC"],
    category: ["ERP", "Full Stack"],
    highlight: "35% Query Optimization",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    id: 6,
    title: "Hospital Management System",
    description:
      "Comprehensive healthcare platform managing patient records, appointments, and billing with role-based clinical dashboards. Reduced manual data entry by 70%.",
    image: "/hms_pro.png",
    tags: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
    category: ["Full Stack"],
    highlight: "70% Manual Entry Cut",
    gradient: "from-emerald-600 to-teal-600",
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
    gradient: "from-slate-700 to-slate-900",
  },
  {
    id: 8,
    title: "Karikalam Real Estate & Property Platform",
    description:
      "Commercial real estate marketplace and listing engine engineered at Dealpost Private Limited. Built with high-performance responsive UI, dynamic property search filters, agent contact workflows, and optimized database indexing.",
    image: "/sf_cms.png",
    tags: ["React 18", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "REST APIs"],
    category: ["Full Stack"],
    demoLink: "https://karikalam.in",
    liveUrl: "karikalam.in",
    highlight: "Commercial Client · Dealpost",
    gradient: "from-teal-600 to-emerald-600",
  },
  {
    id: 9,
    title: "Hotel Booking & Hospitality Platform",
    description:
      "End-to-end hotel operations and reservation engine built at Dealpost Private Limited. Features dynamic room inventory, automated guest booking, billing, check-in workflows, and multi-role administrative controls.",
    image: "/payroll_pro.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    category: ["Full Stack", "ERP"],
    highlight: "Hospitality & Reservation Engine",
    gradient: "from-sky-600 to-blue-600",
  },
];

const categories = ["All", "Government", "ERP", "Full Stack", "DevOps", "AI / ML", "IoT"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Production Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Featured Work &amp; Architectures
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  id={`project-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid (Responsive 3-col / 2-col) */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <TiltCard maxTilt={5} className="h-full">
                  <SpotlightCard className="pro-card overflow-hidden flex flex-col group cursor-pointer h-full relative">
                    {/* Laser Border Beam on Flagship Project */}
                    {project.id === 1 && (
                      <BorderBeam size={220} duration={8} colorFrom="#6366F1" colorTo="#A855F7" />
                    )}

                    {/* Banner / Image Area */}
                    <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                      
                      {/* Fallback gradient banner background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 -z-10`} />

                      {/* Highlight Badge */}
                      {project.highlight && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-md bg-slate-950/85 backdrop-blur-md border border-white/20">
                          {project.highlight}
                        </div>
                      )}

                      {/* Dedicated Server Badge */}
                      {project.infraBadge && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-white text-[11px] font-bold shadow-md bg-indigo-950/85 backdrop-blur-md border border-indigo-400/30">
                          <Server className="w-3.5 h-3.5 text-indigo-300" />
                          <span>{project.infraBadge}</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Category Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                          {project.category.map((cat) => (
                            <span key={cat} className="badge-blue text-[10px] py-0.5 px-2">
                              {cat}
                            </span>
                          ))}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Live URL Pill */}
                        {project.liveUrl && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 self-start mb-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800 hover:bg-emerald-100 transition-colors"
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Live: {project.liveUrl}</span>
                          </a>
                        )}

                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-4">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tags.slice(0, 5).map((tag) => (
                            <span key={tag} className="tech-tag text-[10px] py-0.5 px-2">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 5 && (
                            <span className="text-[10px] text-slate-400 self-center font-medium">
                              +{project.tags.length - 5}
                            </span>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-white/10">
                          {project.githubLink ? (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors"
                            >
                              <Github className="w-3.5 h-3.5" />
                              <span>Code</span>
                            </a>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-medium">Production</span>
                          )}

                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-purple-400 hover:text-indigo-700 dark:hover:text-purple-300 ml-auto transition-colors"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>Visit Live</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
