import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, User, Briefcase, Mail, Code, Trophy, Star, Github, Linkedin, ExternalLink } from "lucide-react";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pt-[20vh] bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-2xl bg-[#150B2D]/90 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: "0 0 40px rgba(124, 58, 237, 0.2)" }}
          >
            <div className="flex items-center px-4 border-b border-white/10">
              <Search className="w-5 h-5 text-[#A855F7]" />
              <Command.Input
                placeholder="Type a command or search..."
                className="w-full bg-transparent p-4 text-white placeholder:text-white/40 focus:outline-none font-sans text-lg"
              />
            </div>
            
            <Command.List className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              <Command.Empty className="py-6 text-center text-white/50 text-sm">
                No results found.
              </Command.Empty>

              <Command.Group heading="Navigation" className="text-white/40 text-xs font-semibold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("about"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <User className="w-4 h-4 text-[#A855F7]" />
                  <span>About Me</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("skills"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Code className="w-4 h-4 text-[#A855F7]" />
                  <span>Skills & Expertise</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("experience"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Briefcase className="w-4 h-4 text-[#A855F7]" />
                  <span>Experience</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("projects"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Star className="w-4 h-4 text-[#A855F7]" />
                  <span>Projects</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("achievements"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Trophy className="w-4 h-4 text-[#A855F7]" />
                  <span>Achievements</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="h-px bg-white/10 my-2" />

              <Command.Group heading="Actions" className="text-white/40 text-xs font-semibold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => {
                    const link = document.createElement("a");
                    link.href = "/PrawinKumar-Resume.pdf";
                    link.download = "PrawinKumar-Resume.pdf";
                    link.click();
                  })}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <FileText className="w-4 h-4 text-[#A855F7]" />
                  <span>Download Resume</span>
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => scrollTo("contact"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Mail className="w-4 h-4 text-[#A855F7]" />
                  <span>Send a Message</span>
                </Command.Item>
              </Command.Group>

              <Command.Separator className="h-px bg-white/10 my-2" />

              <Command.Group heading="Social" className="text-white/40 text-xs font-semibold px-2 py-1 uppercase tracking-wider">
                <Command.Item 
                  onSelect={() => runCommand(() => window.open("https://github.com/prawinkumar2k", "_blank"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Github className="w-4 h-4 text-[#A855F7]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-white/40 ml-auto" />
                </Command.Item>
                <Command.Item 
                  onSelect={() => runCommand(() => window.open("https://linkedin.com/in/prawinkumar-n", "_blank"))}
                  className="flex items-center gap-2 px-3 py-3 rounded-xl text-white cursor-pointer hover:bg-white/10 aria-selected:bg-white/10 aria-selected:text-white"
                >
                  <Linkedin className="w-4 h-4 text-[#A855F7]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-white/40 ml-auto" />
                </Command.Item>
              </Command.Group>
            </Command.List>
            
            <div className="px-4 py-3 border-t border-white/10 bg-black/20 flex justify-between items-center text-xs text-white/40 font-medium">
              <span>Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/10">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/10">↓</kbd> to navigate</span>
              <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/10">Enter</kbd> to select</span>
              <span><kbd className="px-1.5 py-0.5 bg-white/10 rounded-md border border-white/10">Esc</kbd> to close</span>
            </div>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
