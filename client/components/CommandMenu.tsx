import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, User, Briefcase, Mail, Code, Trophy, Star, Github, Linkedin, ExternalLink, Award } from "lucide-react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K or Ctrl+K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-[15vh] bg-slate-900/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-white dark:bg-[#150B2D] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-900 dark:text-white"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-slate-200 dark:border-white/10">
              <Search className="w-5 h-5 text-indigo-600 dark:text-purple-400" />
              <Command.Input
                placeholder="Type a section name or command..."
                className="w-full bg-transparent p-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none font-sans text-base"
              />
            </div>
            
            <Command.List className="max-h-[55vh] overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-slate-400 text-sm">
                No matching results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="text-slate-400 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("about"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <User className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>About Prawin</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("skills"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Code className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Skills &amp; Technologies</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("experience"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Briefcase className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Experience &amp; Leadership</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("projects"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Star className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Projects &amp; Deployments</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("achievements"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Trophy className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Achievements &amp; Honors</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("certifications"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Award className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Certifications &amp; Licenses</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="h-px bg-slate-200 dark:bg-white/10 my-2" />

              <Command.Group heading="Quick Actions" className="text-slate-400 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => {
                    const link = document.createElement("a");
                    link.href = "/PrawinKumar-Resume.pdf";
                    link.download = "PrawinKumar-Resume.pdf";
                    link.click();
                  })}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Download Resume (PDF)</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("contact"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-indigo-600 dark:text-purple-400" />
                  <span>Get In Touch / Hire</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="h-px bg-slate-200 dark:bg-white/10 my-2" />

              <Command.Group heading="Connect" className="text-slate-400 text-xs font-bold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => window.open("https://github.com/prawinkumar2k", "_blank"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => window.open("https://linkedin.com/in/prawinkumar-n", "_blank"))}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                </Command.Item>
              </Command.Group>
            </Command.List>
            
            <div className="px-4 py-2.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex justify-between items-center text-xs text-slate-500 font-medium">
              <span>Navigate with <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 rounded border border-slate-200 dark:border-white/15 text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 rounded border border-slate-200 dark:border-white/15 text-[10px]">↓</kbd></span>
              <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 rounded border border-slate-200 dark:border-white/15 text-[10px]">Enter</kbd> to select</span>
              <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-white/10 rounded border border-slate-200 dark:border-white/15 text-[10px]">Esc</kbd> to close</span>
            </div>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
