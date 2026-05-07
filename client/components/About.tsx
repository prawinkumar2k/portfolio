import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const StatCard = ({ number, label, delay }: { number: number; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = number;
    const duration = 2;
    const increment = end / (duration * 60);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [inView, number]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass rounded-xl p-6 text-center"
    >
      <div className="text-4xl font-bold text-gradient mb-2">
        {number === 50 ? `${count}K+` : `${count}+`}
      </div>
      <p className="text-white/70">{label}</p>
    </motion.div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A passionate Full Stack Developer with a focus on building scalable, real-world solutions
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
              <p className="text-white/70">
                I am a results-driven Full Stack Developer with hands-on experience designing, building, and deploying scalable web applications across government, healthcare, ERP, and SaaS domains. 
              </p>
              <p className="text-white/70">
                Proficient in API Development, Cloud Deployment, and Agile Methodologies, I have expertise in Node.js, React.js, MySQL, MongoDB, and PHP. I am experienced in end-to-end software delivery—from system architecture and REST API design through database optimization to dedicated server configuration and production deployment.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Key Expertise:</h4>
              <ul className="space-y-2">
                {[
                  "MERN Stack Development",
                  "Enterprise Resource Planning Systems",
                  "Dedicated Server Setup & OS Configuration",
                  "Real-world Production Deployments",
                  "Relational & NoSQL Database Optimization",
                  "AI/IoT Integration",
                ].map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <span className="w-2 h-2 rounded-full bg-neon-blue" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <StatCard number={10} label="Projects Completed" delay={0} />
            <StatCard number={25} label="Technologies Used" delay={0.1} />
            <StatCard number={5} label="Live Deployments" delay={0.2} />
            <StatCard number={50} label="End Users Served" delay={0.3} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
