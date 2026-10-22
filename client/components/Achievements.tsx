import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap, Sparkles } from "lucide-react";
import { SpotlightCard } from "./animations/SpotlightCard";
import { TiltCard } from "./animations/TiltCard";

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
    title: "Enterprise SaaS ERP Architecture",
    description:
      "Architected multi-tenant SaaS ERP platforms for the education sector, engineering secure RBAC, examination automation, and high-performance relational databases.",
    icon: Star,
    color: "#4F46E5",
    badge: "⚡ Enterprise Systems",
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
    <section id="achievements" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Recognitions &amp; Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Honors, Awards &amp; Milestones
            </h2>
          </div>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800 px-3 py-1.5 rounded-full w-fit">
            3x First Prize Winner
          </span>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ id, title, description, icon: Icon, color, badge }, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="h-full"
            >
              <TiltCard maxTilt={5} className="h-full">
                <SpotlightCard className="pro-card p-6 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-300 dark:hover:border-purple-400 transition-all duration-300 h-full">
                  {/* Top Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: color }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm"
                        style={{ backgroundColor: `${color}15`, color }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                        }}
                      >
                        {badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-purple-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
