import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Sparkles } from "lucide-react";

interface CommandOutput {
  command: string;
  output: string[];
}

const commands: Record<string, string[]> = {
  "prawin --status": [
    "⚡ Role: Full Stack Developer & Software Development Engineer",
    "📍 Location: Tamil Nadu, India",
    "🎓 Education: B.Tech Artificial Intelligence & Data Science (2023–2027)",
    "💼 Current: Full Stack Developer @ Dealpost Private Limited",
    "✓ Status: Available for High-Impact SDE & Full-Stack Roles",
  ],
  "prawin --stack": [
    "⚛️ Frontend: React 18, TypeScript, Next.js, Tailwind CSS, Vite",
    "🟢 Backend: Node.js, Express.js, REST APIs, WebSockets, JWT/RBAC",
    "🗄️ Databases: MySQL, MongoDB, PostgreSQL, Sequelize ORM",
    "🐧 DevOps: Ubuntu Linux VPS, Nginx Reverse Proxy, PM2, Docker, UFW",
    "🤖 AI/Hardware: Python, OpenCV, Arduino, ESP32, IoT Sensors",
  ],
  "prawin --scale": [
    "🚀 Tamil Nadu Govt DOTE Portal: 50,000+ active students statewide",
    "⏱️ System Uptime: 99.9% bare-metal Linux reliability & 40% latency drop",
    "🏢 Multi-Tenant SaaS ERP: 10+ institutions, 1,000+ students managed",
    "🏆 Nandha Innovation Day: 3x 1st Prize Winner (2024 & 2025)",
    "📜 Certifications: TCS iON NQT (IT) Certified (Java Programming)",
  ],
  "prawin --contact": [
    "📧 Email: prawinkumar2k4@gmail.com",
    "📞 Phone: +91 8807054164",
    "🐙 GitHub: github.com/prawinkumar2k",
    "💼 LinkedIn: linkedin.com/in/prawinkumar-n",
  ],
};

export function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<string>("prawin --status");
  const [copied, setCopied] = useState(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pro-card overflow-hidden bg-slate-950 text-slate-200 border border-slate-800 shadow-2xl rounded-2xl font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            prawin@dev-server:~
          </span>
        </div>

        <button
          onClick={() => copyCommand(activeTab)}
          className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 transition-colors"
          title="Copy command"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Command Selector Tabs */}
      <div className="px-3 py-2 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap gap-1.5">
        {Object.keys(commands).map((cmd) => (
          <button
            key={cmd}
            onClick={() => setActiveTab(cmd)}
            className={`px-2.5 py-1 rounded-md text-xs transition-colors flex items-center gap-1 ${
              activeTab === cmd
                ? "bg-indigo-600 text-white font-bold shadow-sm"
                : "bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <span className="text-indigo-400">$</span>
            <span>{cmd.replace("prawin --", "")}</span>
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 space-y-2 min-h-[170px] bg-slate-950/90 font-mono leading-relaxed">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <span>➜</span>
          <span className="text-indigo-400">~</span>
          <span className="text-slate-100">{activeTab}</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="space-y-1.5 pt-1"
          >
            {commands[activeTab].map((line, idx) => (
              <div key={idx} className="text-slate-300 flex items-start gap-2">
                <span className="text-slate-600 select-none">{idx + 1}</span>
                <span className="leading-snug">{line}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-2 text-indigo-400 pt-2 font-bold">
          <span>➜</span>
          <span className="text-indigo-400">~</span>
          <span className="w-2 h-4 bg-indigo-500 animate-pulse inline-block" />
        </div>
      </div>
    </div>
  );
}
