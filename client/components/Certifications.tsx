import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Award, Sparkles } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
  type: "internship" | "achievement" | "online" | "hackathon";
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Internship – Web Development with AI",
    issuer: "SHENai Private Software Solutions",
    image: "/certificates/photo_6154375745476694091_y.jpg",
    type: "internship",
  },
  {
    id: 12,
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB, Inc. · March 2025",
    image: "/certificates/photo_6154375745476694103_x.jpg",
    type: "online",
  },
  {
    id: 3,
    title: "Innovation Day '25 – AI-Based Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694093_y.jpg",
    type: "achievement",
  },
  {
    id: 9,
    title: "Hack Elite 2K23 – CyberVault (1st Prize)",
    issuer: "Excel Engineering College",
    image: "/certificates/photo_6154375745476694099_y.jpg",
    type: "hackathon",
  },
  {
    id: 16,
    title: "Certificate of Internship – UI/UX Design",
    issuer: "SHENai Private Software Solutions · Aug–Sep 2024",
    image: "/certificates/photo_6154375745476694107_y.jpg",
    type: "internship",
  },
  {
    id: 17,
    title: "Certificate of Internship – Data Analytics",
    issuer: "SearchFirst Technologies · Dec 2025–Jan 2026",
    image: "/certificates/photo_6154375745476694126_y.jpg",
    type: "internship",
  },
  {
    id: 15,
    title: "Python – Certificate of Achievement",
    issuer: "GUVI Geek Networks (Google for Education Partner)",
    image: "/certificates/photo_6154375745476694106_y.jpg",
    type: "online",
  },
  {
    id: 8,
    title: "Horizon'25 – National Level AI Hackathon",
    issuer: "KPR Institute of Engineering and Technology",
    image: "/certificates/photo_6154375745476694098_y.jpg",
    type: "hackathon",
  },
  {
    id: 14,
    title: "Internet of Things Workshop",
    issuer: "NoviTech R&D Private Limited · September 2023",
    image: "/certificates/photo_6154375745476694105_x.jpg",
    type: "online",
  },
  {
    id: 10,
    title: "Best Student in Co-Curricular Activities",
    issuer: "Nandha Engineering College – Annual Day 2024",
    image: "/certificates/photo_6154375745476694100_y.jpg",
    type: "achievement",
  },
  {
    id: 2,
    title: "Innovation Day '24 – Hydrogen Bike Project",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694092_y.jpg",
    type: "achievement",
  },
  {
    id: 4,
    title: "Innovation Day '25 – AI-Based Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694094_y.jpg",
    type: "achievement",
  },
  {
    id: 5,
    title: "Innovation Day '25 – Image Caption Project",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694095_y.jpg",
    type: "achievement",
  },
  {
    id: 6,
    title: "Innovation Day '25 – Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694096_y.jpg",
    type: "achievement",
  },
  {
    id: 7,
    title: "Certificate of Appreciation – Blood Donation",
    issuer: "Tamil Nadu State AIDS Control Society",
    image: "/certificates/photo_6154375745476694097_y.jpg",
    type: "achievement",
  },
  {
    id: 11,
    title: "Innovation Day '26 – Automated Dispensing Machine",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694101_y.jpg",
    type: "achievement",
  },
  {
    id: 13,
    title: "Python Programming Quiz – Participation",
    issuer: "CodeAlpha · September 2024",
    image: "/certificates/photo_6154375745476694104_x.jpg",
    type: "online",
  },
  {
    id: 18,
    title: "Certificate of Internship – Web Development",
    issuer: "SHENai Private Software Solutions",
    image: "/certificates/photo_6154375745476694108_y.jpg",
    type: "internship",
  },
  {
    id: 19,
    title: "Innovation Day '26 – Project Participation",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694109_y.jpg",
    type: "achievement",
  },
  {
    id: 20,
    title: "Web Development – Certificate of Exam",
    issuer: "Qwik Test · Infotact Solutions (ISO 9001:2015)",
    image: "/certificates/qwik_webdev_exam.jpg",
    type: "online",
  },
];

const typeConfig = {
  internship: { label: "Internship", color: "#4F46E5", bg: "#EEF2FF" },
  achievement: { label: "Achievement", color: "#D97706", bg: "#FEF3C7" },
  online: { label: "Certification", color: "#059669", bg: "#ECFDF5" },
  hackathon: { label: "Hackathon", color: "#7C3AED", bg: "#F3E8FF" },
};

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredCerts = activeFilter === "All"
    ? certificates
    : certificates.filter((c) => c.type === activeFilter);

  return (
    <section id="certifications" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Licenses &amp; Certifications
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100/90 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl">
            {[
              { id: "All", label: "All" },
              { id: "internship", label: "Internships" },
              { id: "achievement", label: "Achievements" },
              { id: "hackathon", label: "Hackathons" },
              { id: "online", label: "Certifications" },
            ].map(({ id, label }) => {
              const isSelected = activeFilter === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveFilter(id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors duration-200 ${
                    isSelected
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCertPill"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => {
              const config = typeConfig[cert.type];
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -4 }}
                  className="pro-card overflow-hidden cursor-pointer group hover:border-indigo-300 dark:hover:border-purple-400 flex flex-col justify-between"
                  onClick={() => setSelected(cert)}
                  id={`cert-card-${cert.id}`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/30 transition-colors duration-200 flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-md" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5"
                        style={{ backgroundColor: config.bg, color: config.color }}
                      >
                        {config.label}
                      </span>
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-1">
                        {cert.title}
                      </h3>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-2xl w-full bg-white dark:bg-[#150B2D] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10"
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 z-20 p-2 bg-white/90 dark:bg-black/60 rounded-full border border-slate-200 dark:border-white/20 text-slate-600 dark:text-white hover:text-red-500 shadow-md transition-colors"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="bg-slate-100 dark:bg-black flex items-center justify-center p-2">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-contain max-h-[70vh] rounded-lg"
                />
              </div>

              <div className="p-5 border-t border-slate-200 dark:border-white/10">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-0.5">
                  {selected.title}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-purple-400">
                  {selected.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
