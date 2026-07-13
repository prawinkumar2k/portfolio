import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "3x Innovation Day 1st Prize",
    description:
      "Won 1st Prize consecutively (2024 & 2025) for AI-Based Autonomous Smart Car, and 1st Prize (2025) for Image Caption Project at Nandha Innovation Day.",
    icon: Trophy,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.15)",
    border: "rgba(245,158,11,0.3)",
    badge: "🏆 3x 1st Place",
  },
  {
    id: 2,
    title: "Co-Founded Registered IT Firm",
    description:
      "Co-founded SearchFirst Technologies Pvt. Ltd. and secured INR 25 Lakh in external investor funding for education-sector SaaS ERP product development.",
    icon: Star,
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.3)",
    badge: "🚀 Co-Founder",
  },
  {
    id: 3,
    title: "Tamil Nadu Govt DOTE Portal",
    description:
      "Successfully delivered the tnpoly.in admissions portal serving 50,000+ students statewide with 99.9% uptime and full infrastructure ownership.",
    icon: Award,
    color: "#5B21B6",
    bg: "rgba(16,185,129,0.15)",
    border: "rgba(16,185,129,0.3)",
    badge: "🖥️ 50K+ Users Served",
  },
  {
    id: 4,
    title: "60% Admin Workload Reduction",
    description:
      "Engineered 3-tier RBAC and server-side gender/hostel filtering, cutting administrative workloads by 60% and eliminating manual screening.",
    icon: Zap,
    color: "#312E81",
    bg: "rgba(49,46,129,0.15)",
    border: "rgba(49,46,129,0.3)",
    badge: "⚡ 60% Workload Cut",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-3 px-4 sm:px-6">
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
            <span className="w-8 h-px bg-[#7C3AED]" />
            Highlights
            <span className="w-8 h-px bg-[#7C3AED]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Achievements &amp; <span className="text-gradient-blue">Impact</span>
          </h2>
          <p className="text-[#C4BEED] max-w-2xl mx-auto">
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
              whileHover={{ y: -5, boxShadow: "0 16px 32px rgba(124,58,237,0.1)" }}
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

              <h3 className="text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-[#C4BEED] text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



