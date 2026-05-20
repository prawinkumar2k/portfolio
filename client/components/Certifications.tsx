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
  {
    id: 20,
    title: "Web Development – Certificate of Exam",
    issuer: "Qwik Test · Infotact Solutions (ISO 9001:2015)",
    image: "/certificates/qwik_webdev_exam.jpg",
    type: "online",
  },
];

const typeConfig = {
  internship: { label: "Internship", color: "#7C3AED", bg: "#F3EFFE" },
  achievement: { label: "Achievement", color: "#F59E0B", bg: "#FFFBEB" },
  online: { label: "Online Course", color: "#5B21B6", bg: "#ECFDF5" },
  hackathon: { label: "Hackathon", color: "#312E81", bg: "#F5F3FF" },
};

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl border border-[#E2DFF5] shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-[#1E1B4B]">Licenses &amp; Certifications</h2>
            <span className="text-xs text-[#666666] font-medium">{certificates.length} credentials</span>
          </div>

        {/* Certificates grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certificates.map((cert, idx) => {
            const config = typeConfig[cert.type];
            return (
              <motion.div
                key={cert.id}
                className="pro-card overflow-hidden cursor-pointer group hover:border-[#7C3AED]/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: (idx % 10) * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(124,58,237,0.12)" }}
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
                  <div className="absolute inset-0 bg-[#7C3AED]/0 group-hover:bg-[#7C3AED]/10 transition-colors duration-200 flex items-center justify-center">
                    <ZoomIn className="w-7 h-7 text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
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
                  <h3 className="text-xs font-semibold text-[#1E1B4B] leading-snug line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#7B75B0] text-[10px] line-clamp-1">{cert.issuer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
        </motion.div>
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
            <div className="absolute inset-0 bg-[#1E1B4B]/60 backdrop-blur-sm" />

            {/* Modal */}
            <motion.div
              className="relative z-10 max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2DFF5]"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 z-20 p-2 bg-white/90 hover:bg-[#FEF2F2] rounded-full border border-[#E2DFF5] text-[#7B75B0] hover:text-red-500 transition-colors shadow-sm"
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
              <div className="p-5 border-t border-[#F5F3FC]">
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
                    <h3 className="font-bold text-[#1E1B4B] text-base mb-0.5">{selected.title}</h3>
                    <p className="text-[#7C3AED] text-sm">{selected.issuer}</p>
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



