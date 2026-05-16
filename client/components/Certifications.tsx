import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, Award, ExternalLink } from "lucide-react";

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
    title: "Innovation Day '26 – Automated Pani Puri Dispensing Machine",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694101_y.jpg",
    type: "achievement",
  },
  {
    id: 13,
    title: "Python Programming Quiz – Certificate of Participation",
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
];

const typeConfig = {
  internship: { label: "Internship", color: "#0A66C2", bg: "#EFF6FF" },
  achievement: { label: "Achievement", color: "#D97706", bg: "#FFFBEB" },
  online: { label: "Online Course", color: "#059669", bg: "#ECFDF5" },
  hackathon: { label: "Hackathon", color: "#6366F1", bg: "#F5F3FF" },
};

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="section-wrapper bg-white">
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
            Credentials
            <span className="w-8 h-px bg-[#0A66C2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display">
            Certifications &amp; <span className="text-gradient-blue">Awards</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto">
            Click any certificate to view in full — {certificates.length} credentials earned
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certificates.map((cert, idx) => {
            const config = typeConfig[cert.type];
            return (
              <motion.div
                key={cert.id}
                className="pro-card overflow-hidden cursor-pointer group hover:border-[#0A66C2]/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (idx % 10) * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(10,102,194,0.12)" }}
                onClick={() => setSelected(cert)}
                id={`cert-card-${cert.id}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#F8FAFC] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0A66C2]/0 group-hover:bg-[#0A66C2]/10 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-7 h-7 text-[#0A66C2] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2"
                    style={{ background: config.bg, color: config.color }}
                  >
                    {config.label}
                  </span>
                  <h3 className="text-xs font-semibold text-[#0F172A] leading-snug line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#64748B] text-[10px] line-clamp-1">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              className="relative z-10 max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-20 p-2 bg-white/90 hover:bg-[#FEF2F2] rounded-full border border-[#E2E8F0] text-[#64748B] hover:text-red-500 transition-colors shadow-sm"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full image */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain max-h-[65vh]"
              />

              {/* Caption */}
              <div className="p-5 border-t border-[#F1F5F9]">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: typeConfig[selected.type].bg,
                      color: typeConfig[selected.type].color,
                    }}
                  >
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-base mb-0.5">{selected.title}</h3>
                    <p className="text-[#0A66C2] text-sm">{selected.issuer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
