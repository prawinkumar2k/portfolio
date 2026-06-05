import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Code2, Server, Trophy, Users } from "lucide-react";

const stats = [
  { number: 10, suffix: "+",  label: "Projects Completed", icon: Code2,  color: "#7C3AED" },
  { number: 25, suffix: "+",  label: "Technologies",       icon: Server, color: "#1E1B4B" },
  { number: 50, suffix: "K+", label: "Users Served",       icon: Users,  color: "#5B21B6" },
  { number: 3,  suffix: "+",  label: "Awards Won",         icon: Trophy, color: "#F59E0B" },
];

const expertise = [
  "MERN Stack Development",
  "Enterprise Resource Planning Systems",
  "Dedicated Server Setup & OS Configuration",
  "Real-world Production Deployments",
  "Relational & NoSQL Database Optimization",
  "AI / IoT Integration",
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
  return <div ref={ref}>{count}{suffix}</div>;
};

export default function About() {
  return (
    <section id="about" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-3">

        {/* About card — LinkedIn style */}
        <motion.div
          className="bg-white rounded-xl border border-[#E2DFF5] shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-[#1E1B4B] mb-4">About</h2>
          <div className="space-y-3 text-[#4C4484] text-sm leading-relaxed">
            <p>
              Results-driven <strong className="text-[#1E1B4B]">Software Development Engineer and Full Stack Developer</strong> with 2 years of hands-on experience building and deploying production-grade government portals, enterprise ERP systems, SaaS platforms, and IoT solutions — while pursuing B.Tech in AI and Data Science.
            </p>
            <p>
              Co-founded a registered Private Limited IT company (<strong className="text-[#1E1B4B]">SearchFirst Technologies Pvt. Ltd.</strong>) and secured external investor funding to build SaaS ERP products for the education sector. Led the ERP development team at Nandha Engineering College and is a 3x Innovation Day 1st Prize winner.
            </p>
            <p>
              Currently the <strong className="text-[#1E1B4B]">sole developer and infrastructure owner</strong> for
              tnpoly.in — Tamil Nadu Government's official polytechnic admissions portal serving 50,000+ students with 99.9% uptime — with complete ownership from architecture to live server deployment.
            </p>
          </div>

          {/* Key expertise chips */}
          <div className="mt-5 pt-5 border-t border-[#E2DFF5]">
            <h4 className="text-sm font-semibold text-[#1E1B4B] mb-3">Key Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item, idx) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "#F3EFFE", color: "#7C3AED", border: "1px solid #DDD6FE" }}
                >
                  <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-5 flex gap-3 flex-wrap">
            <a
              href="/PrawinKumar-Resume.pdf"
              download="PrawinKumar-Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)", boxShadow: "0 2px 8px rgba(124,58,237,0.3)" }}
            >
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-[#7C3AED] border border-[#7C3AED] bg-white hover:bg-[#F3EFFE] transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map(({ number, suffix, label, icon: Icon, color }, idx) => (
            <motion.div
              key={label}
              className="bg-white rounded-xl border border-[#E2DFF5] shadow-sm p-5 text-center hover:shadow-md transition-all duration-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2.5" style={{ background: `${color}15`, color }}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="text-2xl font-bold font-display mb-0.5" style={{ color }}>
                <CountUp number={number} suffix={suffix} />
              </div>
              <p className="text-xs text-[#666666] font-medium leading-tight">{label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}



