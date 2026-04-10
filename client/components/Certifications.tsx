import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Internship – Web Development with AI",
    issuer: "SHENai Private Software Solutions",
    image: "/certificates/photo_6154375745476694091_y.jpg",
  },
  {
    id: 2,
    title: "Innovation Day '24 – Hydrogen Bike Project",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694092_y.jpg",
  },
  {
    id: 3,
    title: "Innovation Day '25 – AI-Based Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694093_y.jpg",
  },
  {
    id: 4,
    title: "Innovation Day '25 – AI-Based Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694094_y.jpg",
  },
  {
    id: 5,
    title: "Innovation Day '25 – Image Caption Project",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694095_y.jpg",
  },
  {
    id: 6,
    title: "Innovation Day '25 – Autonomous Car (1st Place)",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694096_y.jpg",
  },
  {
    id: 7,
    title: "Certificate of Appreciation – Blood Donation",
    issuer: "Tamil Nadu State AIDS Control Society",
    image: "/certificates/photo_6154375745476694097_y.jpg",
  },
  {
    id: 8,
    title: "Horizon'25 – National Level AI Hackathon",
    issuer: "KPR Institute of Engineering and Technology",
    image: "/certificates/photo_6154375745476694098_y.jpg",
  },
  {
    id: 9,
    title: "Hack Elite 2K23 – CyberVault (1st Prize)",
    issuer: "Excel Engineering College",
    image: "/certificates/photo_6154375745476694099_y.jpg",
  },
  {
    id: 10,
    title: "Best Student in Co-Curricular Activities",
    issuer: "Nandha Engineering College – Annual Day 2024",
    image: "/certificates/photo_6154375745476694100_y.jpg",
  },
  {
    id: 11,
    title: "Innovation Day '26 – Automated Pani Puri Dispensing Machine",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694101_y.jpg",
  },
  {
    id: 12,
    title: "MongoDB Certified Associate Developer",
    issuer: "MongoDB, Inc. (March 2025)",
    image: "/certificates/photo_6154375745476694103_x.jpg",
  },
  {
    id: 13,
    title: "Python Programming Quiz – Certificate of Participation",
    issuer: "CodeAlpha (September 2024)",
    image: "/certificates/photo_6154375745476694104_x.jpg",
  },
  {
    id: 14,
    title: "Internet of Things Workshop",
    issuer: "NoviTech R&D Private Limited (September 2023)",
    image: "/certificates/photo_6154375745476694105_x.jpg",
  },
  {
    id: 15,
    title: "Python – Certificate of Achievement",
    issuer: "GUVI Geek Networks (Google for Education Partner)",
    image: "/certificates/photo_6154375745476694106_y.jpg",
  },
  {
    id: 16,
    title: "Certificate of Internship – UI/UX Design",
    issuer: "SHENai Private Software Solutions (Aug–Sep 2024)",
    image: "/certificates/photo_6154375745476694107_y.jpg",
  },
  {
    id: 17,
    title: "Certificate of Internship – Data Analytics",
    issuer: "SearchFirst Technologies Private Limited (Dec 2025–Jan 2026)",
    image: "/certificates/photo_6154375745476694126_y.jpg",
  },
  {
    id: 18,
    title: "Certificate of Internship – Web Development",
    issuer: "SHENai Private Software Solutions",
    image: "/certificates/photo_6154375745476694108_y.jpg",
  },
  {
    id: 19,
    title: "Innovation Day '26 – Project Participation",
    issuer: "Nandha Educational Institutions",
    image: "/certificates/photo_6154375745476694109_y.jpg",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Click any certificate to view it in full detail
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              <motion.div
                className="glass rounded-xl overflow-hidden h-full flex flex-col"
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0, 217, 255, 0.2)" }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>

                {/* Text */}
                <div className="p-3 flex-1">
                  <h3 className="text-white text-xs font-semibold leading-snug line-clamp-2 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-neon-blue text-xs line-clamp-1">{cert.issuer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Modal content */}
            <motion.div
              className="relative z-10 max-w-3xl w-full glass rounded-2xl overflow-hidden shadow-2xl shadow-neon-blue/20"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                className="absolute top-3 right-3 z-20 p-2 glass rounded-full hover:bg-red-500/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelected(null)}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>

              {/* Full image */}
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full object-contain max-h-[70vh]"
              />

              {/* Caption */}
              <div className="p-5 border-t border-white/10">
                <h3 className="text-white font-bold text-lg mb-1">{selected.title}</h3>
                <p className="text-neon-blue text-sm">{selected.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
