import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut" as const,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-neon-blue/20 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass px-6 py-2 rounded-full border border-neon-blue/30">
            <span className="text-neon-blue font-semibold">Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textVariants}
            custom={0}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Prawin Kumar N</span>
          </motion.h1>

          <motion.h2
            variants={textVariants}
            custom={1}
            className="text-2xl sm:text-3xl md:text-4xl text-white/80 mb-8"
          >
            Full Stack Developer
            <br />
            <span className="text-neon-blue">MERN | ERP Systems | AI Enthusiast</span>
          </motion.h2>

          <motion.p
            variants={textVariants}
            custom={2}
            className="text-lg text-white/60 mb-12 max-w-2xl mx-auto"
          >
            Crafting modern web applications and enterprise systems with cutting-edge technologies.
            Specialized in building scalable solutions for real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariants}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 217, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>

            <motion.a
              href="/PrawinKumar_Resume.pdf"
              download="PrawinKumar_Resume.pdf"
              className="px-8 py-3 border-2 border-neon-blue/50 rounded-lg text-neon-blue font-semibold hover:bg-neon-blue/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: "#00d9ff" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={textVariants}
            custom={4}
            className="flex justify-center gap-6 mb-8"
          >
            {[
              { Icon: Github, href: "https://github.com/prawinkumar2k", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/prawinkumar-n", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:prawinkumar2k4@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-neon-blue/20 transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6 text-neon-blue" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-neon-blue/50" />
        </motion.div>
      </div>
    </section>
  );
}
