import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, Copy, Check, Sparkles, Download } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    const formData = new FormData(e.currentTarget);
    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "cf3ce871-5e6e-4ebd-8346-392e7fed001e";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: "prawinkumar2k4@gmail.com",
      href: "mailto:prawinkumar2k4@gmail.com",
      color: "#4F46E5",
    },
    {
      Icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 8807054164",
      href: "tel:+918807054164",
      color: "#059669",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Erode, Tamil Nadu, India",
      href: "#",
      color: "#7C3AED",
    },
  ];

  const socials = [
    {
      Icon: Github,
      label: "GitHub",
      href: "https://github.com/prawinkumar2k",
      handle: "@prawinkumar2k",
    },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/prawinkumar-n",
      handle: "Prawin Kumar N",
    },
    {
      Icon: Globe,
      label: "SearchFirst",
      href: "https://searchfirst.in",
      handle: "searchfirst.in",
    },
  ];

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 dark:border-white/10 pb-6">
          <div>
            <div className="section-label">
              <Sparkles className="w-4 h-4" />
              <span>Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-display tracking-tight">
              Start a Conversation
            </h2>
          </div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-full w-fit">
            🟢 Actively Interviewing &amp; Open to Work
          </span>
        </div>

        {/* Bento Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Direct Contact Channels
            </h3>

            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="pro-card p-4 flex items-center justify-between group hover:border-indigo-300 dark:hover:border-purple-400 transition-colors"
              >
                <a
                  href={item.href}
                  className="flex items-center gap-3.5 overflow-hidden flex-1"
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <item.Icon className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-bold text-slate-400 uppercase">{item.label}</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                      {item.value}
                    </div>
                  </div>
                </a>

                {/* Copy Button */}
                {item.href !== "#" && (
                  <button
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="p-2 rounded-xl text-slate-400 hover:text-indigo-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                    title={`Copy ${item.label}`}
                  >
                    {copiedField === item.label ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}

            {/* Resume Download & Socials Card */}
            <div className="pro-card p-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Curriculum Vitae
                </h4>
                <a
                  href="/PrawinKumar-Resume.pdf"
                  download="PrawinKumar-Resume.pdf"
                  className="btn-primary w-full justify-center text-xs sm:text-sm py-2.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-200/80 dark:border-white/10">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Social &amp; Professional
                </h4>
                <div className="flex flex-wrap gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:border-indigo-300 dark:hover:border-purple-400 hover:text-indigo-600 transition-colors shadow-sm"
                    >
                      <s.Icon className="w-3.5 h-3.5" />
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 pro-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Fill in your details and message below. You'll receive a response within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject / Role Type
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="e.g. Software Engineer Position / Full-Stack Project"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Describe your project, team requirements, or role specifications..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-xs sm:text-sm transition-all resize-none"
                />
              </div>

              {/* Status Banner */}
              {submitStatus !== "idle" && (
                <div
                  className={`p-3 rounded-xl text-xs font-bold ${
                    submitStatus === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full justify-center text-xs sm:text-sm py-3"
              >
                {isLoading ? (
                  <span>Transmitting message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Direct Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
