import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Unique Project Award",
    description: "Won 'Unique Project Award' at Nandha Engineering College for innovative project development",
    icon: Trophy,
    color: "neon-blue",
  },
  {
    id: 2,
    title: "Live ERP Deployments",
    description: "Successfully deployed live ERP systems used for real-time hospital and campus operations and management",
    icon: Star,
    color: "neon-purple",
  },
  {
    id: 3,
    title: "Real-World Portfolio",
    description: "Developed multiple full-stack and IoT-based projects with practical real-time implementation in production environments",
    icon: Award,
    color: "neon-blue",
  },
  {
    id: 4,
    title: "End-to-End Development",
    description: "Hands-on experience in complete project lifecycle: design, development, and deployment of enterprise-grade applications",
    icon: Star,
    color: "neon-purple",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="text-gradient">Highlights</span>
          </h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="glass rounded-xl p-8 h-full text-center cursor-pointer"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 217, 255, 0.2)",
                  }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70">{achievement.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
