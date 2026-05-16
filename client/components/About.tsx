import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Code2, Server, Trophy, Users } from "lucide-react";

const stats = [
  { number: 10, suffix: "+", label: "Projects Completed", icon: Code2, color: "#0A66C2" },
  { number: 25, suffix: "+", label: "Technologies", icon: Server, color: "#6366F1" },
  { number: 50, suffix: "K+", label: "Users Served", icon: Users, color: "#38BDF8" },
  { number: 3, suffix: "+", label: "Awards Won", icon: Trophy, color: "#F59E0B" },
];

const expertise = [
  "MERN Stack Development",
  "Enterprise Resource Planning Systems",
  "Dedicated Server Setup & OS Configuration",
  "Real-world Production Deployments",
  "Relational & NoSQL Database Optimization",
  "AI/IoT Integration",
];

const CountUp = ({ number, suffix }: { number: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round((frame / totalFrames) * number), number));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [started, number]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="section-wrapper bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">
            <span className="w-8 h-px bg-[#0A66C2]" />
            About Me
            <span className="w-8 h-px bg-[#0A66C2]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-4 font-display">
            Building <span className="text-gradient-blue">Scalable Solutions</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Profile card */}
              <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-card-hover border border-[#E2E8F0]">
                <div
                  className="w-full h-full flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #0A66C2 0%, #6366F1 100%)" }}
                >
                  <div className="text-center">
                    <div className="text-7xl font-bold font-display mb-2">PK</div>
                    <div className="text-sm font-medium opacity-90">Full Stack Developer</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - experience */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-card-hover border border-[#E2E8F0]"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-xs text-[#64748B] font-medium mb-1">Current Role</div>
                <div className="text-sm font-bold text-[#0F172A]">Software Developer</div>
                <div className="text-xs text-[#0A66C2] font-medium">SearchFirst Technologies</div>
              </motion.div>

              {/* Floating badge - education */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 shadow-card-hover border border-[#E2E8F0]"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-xs text-[#64748B] font-medium">Pursuing</div>
                <div className="text-sm font-bold text-[#0F172A]">B.Tech AI & DS</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-3 font-display">
                Full Stack Developer & ERP Specialist
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-4">
                I am a results-driven Full Stack Developer with hands-on experience designing,
                building, and deploying scalable web applications across government, healthcare,
                ERP, and SaaS domains.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Proficient in API Development, Cloud Deployment, and Agile Methodologies with
                expertise in Node.js, React.js, MySQL, MongoDB, and PHP. Experienced in
                end-to-end software delivery from system architecture through production deployment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0F172A] mb-3">Key Expertise</h4>
              <ul className="grid grid-cols-1 gap-2">
                {expertise.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    className="flex items-center gap-3 text-[#475569] text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0A66C2] flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="/PrawinKumar.N_Resume.pdf"
                download
                className="btn-primary text-sm"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary text-sm"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ number, suffix, label, icon: Icon, color }, idx) => (
            <motion.div
              key={label}
              className="stat-card hover:shadow-card-hover transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -3 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15`, color }}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div
                className="text-3xl font-bold mb-1 font-display"
                style={{ color }}
              >
                <CountUp number={number} suffix={suffix} />
              </div>
              <p className="text-[#64748B] text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
