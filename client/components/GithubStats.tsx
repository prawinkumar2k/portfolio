import { motion } from "framer-motion";
import { Github, GitPullRequest, GitCommit, Star, Users, ExternalLink, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

interface GithubData {
  followers: number;
  public_repos: number;
  total_stars: number;
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://api.github.com/users/prawinkumar2k")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          followers: data.followers || 15,
          public_repos: data.public_repos || 30,
          total_stars: 45,
        });
      })
      .catch((err) => console.error("Error fetching github stats:", err));
  }, []);

  return (
    <section id="github-stats" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Open Source &amp; Code Velocity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              GitHub Engineering Activity
            </h2>
          </div>

          <a
            href="https://github.com/prawinkumar2k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-purple-400 shadow-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>@prawinkumar2k</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Metrics (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="pro-card p-5 flex flex-col items-center justify-center text-center">
              <GitCommit className="w-6 h-6 text-indigo-600 dark:text-purple-400 mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
                {stats?.public_repos || "30+"}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Repositories</div>
            </div>

            <div className="pro-card p-5 flex flex-col items-center justify-center text-center">
              <Star className="w-6 h-6 text-amber-500 mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
                {stats?.total_stars || "45+"}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Total Stars</div>
            </div>

            <div className="pro-card p-5 flex flex-col items-center justify-center text-center">
              <GitPullRequest className="w-6 h-6 text-emerald-500 mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
                250+
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Contributions</div>
            </div>

            <div className="pro-card p-5 flex flex-col items-center justify-center text-center">
              <Users className="w-6 h-6 text-sky-500 mb-2" />
              <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
                {stats?.followers || "15+"}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1">Followers</div>
            </div>
          </div>

          {/* Right GitHub Graph Card (7 cols) */}
          <div className="lg:col-span-7 pro-card p-6 flex flex-col items-center justify-center">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 self-start">
              Verified Commits &amp; Streak
            </h3>
            <div className="w-full overflow-hidden flex items-center justify-center">
              <img 
                src={
                  theme === "dark"
                    ? "https://github-readme-stats.vercel.app/api?username=prawinkumar2k&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=fff&icon_color=A855F7&text_color=C4BEED"
                    : "https://github-readme-stats.vercel.app/api?username=prawinkumar2k&show_icons=true&theme=default&hide_border=true&bg_color=00000000&title_color=1E1B4B&icon_color=4F46E5&text_color=475569"
                }
                alt="GitHub Stats" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
