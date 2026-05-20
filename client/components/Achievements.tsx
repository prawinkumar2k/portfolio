import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Unique Project Award",
    description:
      "Winner at Innovation Day 2024 for the IoT Smart Attendance System automating tracking for 200+ students.",
    icon: Trophy,
    color: "#F5A623",
    bg: "#FFFBEB",
    border: "#FDE68A",
    badge: "🏆 1st Place",
  },
  {
    id: 2,
    title: "Physical Server Owner — tnpoly.in",
    description:
      "Personally procured, configured, and operate the bare-metal production server for Tamil Nadu's official tnpoly.in portal — including OS install, firewall, IIS, SSL, and sole ongoing maintenance (zero critical outages).",
    icon: Star,
    color: "#00B8A9",
    bg: "#E8F7F5",
    border: "#B2EBE8",
    badge: "🖥️ Infra Owner",
  },
  {
    id: 3,
    title: "Certified Campus ERP",
    description:
      "Designed and deployed a full-scale institutional ERP for Nandha Engineering College managing 1,000+ records.",
    icon: Award,
    color: "#007A73",
    bg: "#ECFDF5",
    border: "#A7F3D0",
    badge: "Production Live",
  },
  {
    id: 4,
    title: "60% Efficiency Gain",
    description:
      "Engineered multi-role RBAC and backend flow logic, reducing client manual administrative workload by ~60%.",
    icon: Zap,
    color: "#1A3560",
    bg: "#F5F3FF",
    border: "#DDD6FE",
    badge: "Impact",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrapper bg-white">
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
            <span className="w-8 h-px bg-[#00B8A9]" />
            Highlights
            <span className="w-8 h-px bg-[#00B8A9]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D3A] mb-4 font-display">
            Achievements &amp; <span className="text-gradient-blue">Impact</span>
          </h2>
          <p className="text-[#6B88A8] max-w-2xl mx-auto">
            Key milestones and measurable results from real-world projects
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ id, title, description, icon: Icon, color, bg, border, badge }, idx) => (
            <motion.div
              key={id}
              className="pro-card p-6 group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(0,184,169,0.1)" }}
            >
              {/* Subtle top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: color }}
              />

              {/* Badge */}
              <div className="mb-4">
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: bg, color, border: `1px solid ${border}` }}
                >
                  {badge}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: bg, color }}
              >
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-base font-bold text-[#0B1D3A] mb-2">{title}</h3>
              <p className="text-[#6B88A8] text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


