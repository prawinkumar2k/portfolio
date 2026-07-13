import { motion } from "framer-motion";
import { Github, GitPullRequest, GitCommit, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface GithubData {
  followers: number;
  public_repos: number;
  total_stars: number;
}

export default function GithubStats() {
  const [stats, setStats] = useState<GithubData | null>(null);

  useEffect(() => {
    // Basic fetch to public API (in production, use a proxy or authenticated backend to avoid rate limits)
    fetch("https://api.github.com/users/prawinkumar2k")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          followers: data.followers || 0,
          public_repos: data.public_repos || 0,
          total_stars: 45, // Placeholder since total stars requires mapping over all repos
        });
      })
      .catch((err) => console.error("Error fetching github stats:", err));
  }, []);

  return (
    <section id="github-stats" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#150B2D]/60 backdrop-blur-2xl border-white/10 rounded-xl border border-white/10 shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Github className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">GitHub Activity</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center">
              <GitCommit className="w-5 h-5 text-[#A855F7] mb-2" />
              <div className="text-2xl font-bold text-white">{stats?.public_repos || "30+"}</div>
              <div className="text-xs text-[#C4BEED]">Repositories</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center">
              <Star className="w-5 h-5 text-[#F59E0B] mb-2" />
              <div className="text-2xl font-bold text-white">{stats?.total_stars || "40+"}</div>
              <div className="text-xs text-[#C4BEED]">Total Stars</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center">
              <GitPullRequest className="w-5 h-5 text-[#10B981] mb-2" />
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-xs text-[#C4BEED]">Contributions</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center">
              <Users className="w-5 h-5 text-[#3B82F6] mb-2" />
              <div className="text-2xl font-bold text-white">{stats?.followers || "15+"}</div>
              <div className="text-xs text-[#C4BEED]">Followers</div>
            </div>
          </div>

          {/* GitHub Readme Stats Image */}
          <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 flex items-center justify-center p-4">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=prawinkumar2k&show_icons=true&theme=radical&hide_border=true&bg_color=00000000&title_color=fff&icon_color=A855F7&text_color=C4BEED" 
              alt="GitHub Stats" 
              className="max-w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
