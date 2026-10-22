import { motion } from "framer-motion";
import { Github, GitPullRequest, GitCommit, Star, Users, ExternalLink } from "lucide-react";
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
    <section id="github-stats" className="py-4 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="pro-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  GitHub Activity &amp; Open Source
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Continuous development and contributions
                </p>
              </div>
            </div>

            <a
              href="https://github.com/prawinkumar2k"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-purple-400 hover:underline"
            >
              <span>@prawinkumar2k</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <GitCommit className="w-5 h-5 text-indigo-600 dark:text-purple-400 mb-2" />
              <div className="text-2xl font-black text-slate-900 dark:text-white font-display">
                {stats?.public_repos || "30+"}
              </div>
              <div className="text-xs text-slate-500 font-medium">Repositories</div>
            </div>

            <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <Star className="w-5 h-5 text-amber-500 mb-2" />
              <div className="text-2xl font-black text-slate-900 dark:text-white font-display">
                {stats?.total_stars || "45+"}
              </div>
              <div className="text-xs text-slate-500 font-medium">Total Stars</div>
            </div>

            <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <GitPullRequest className="w-5 h-5 text-emerald-500 mb-2" />
              <div className="text-2xl font-black text-slate-900 dark:text-white font-display">
                250+
              </div>
              <div className="text-xs text-slate-500 font-medium">Contributions</div>
            </div>

            <div className="bg-slate-50/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm">
              <Users className="w-5 h-5 text-sky-500 mb-2" />
              <div className="text-2xl font-black text-slate-900 dark:text-white font-display">
                {stats?.followers || "15+"}
              </div>
              <div className="text-xs text-slate-500 font-medium">Followers</div>
            </div>
          </div>

          {/* GitHub Readme Stats Card */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-white/5 flex items-center justify-center p-4">
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
        </motion.div>
      </div>
    </section>
  );
}
