import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap, Sparkles } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "3x Innovation Day 1st Prize",
    description:
      "Won 1st Prize consecutively (2024 & 2025) for AI-Based Autonomous Smart Car, and 1st Prize (2025) for Image Caption Project at Nandha Innovation Day.",
    icon: Trophy,
    color: "#D97706",
    badge: "🏆 3x 1st Place",
  },
  {
    id: 2,
    title: "Co-Founded Registered IT Firm",
    description:
      "Co-founded SearchFirst Technologies Pvt. Ltd. and secured INR 25 Lakh in external investor funding for education-sector SaaS ERP product development.",
    icon: Star,
    color: "#4F46E5",
    badge: "🚀 Co-Founder",
  },
  {
    id: 3,
    title: "Tamil Nadu Govt DOTE Portal",
    description:
      "Successfully delivered the tnpoly.in admissions portal serving 50,000+ students statewide with 99.9% uptime and full infrastructure ownership.",
    icon: Award,
    color: "#059669",
    badge: "🖥️ 50K+ Users Served",
  },
  {
    id: 4,
    title: "60% Admin Workload Reduction",
    description:
      "Engineered 3-tier RBAC and server-side gender/hostel filtering, cutting administrative workloads by 60% and eliminating manual screening.",
    icon: Zap,
    color: "#7C3AED",
    badge: "⚡ 60% Efficiency Gain",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="pro-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>Key Achievements &amp; Impact</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Major milestones, hackathons, and high-impact deliveries
              </p>
            </div>
            <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800 px-3 py-1 rounded-full">
              Award-Winning
            </span>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map(({ id, title, description, icon: Icon, color, badge }, idx) => (
              <motion.div
                key={id}
                className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-purple-400 transition-all duration-300 hover:shadow-md relative overflow-hidden group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.4 }}
                whileHover={{ y: -3 }}
              >
                {/* Subtle top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: color }}
                />

                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${color}15`,
                      color: color,
                    }}
                  >
                    {badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
