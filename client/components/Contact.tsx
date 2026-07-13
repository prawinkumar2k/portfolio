import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
      color: "#7C3AED",
    },
    {
      Icon: Phone,
      label: "Phone",
      value: "+91 8807054164",
      href: "tel:+918807054164",
      color: "#5B21B6",
    },
    {
      Icon: MapPin,
      label: "Location",
      value: "Erode, Tamil Nadu, India",
      href: "#",
      color: "#312E81",
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
      href: "https://searchfirst.ai",
      handle: "searchfirst.ai",
    },
  ];

  return (
    <section id="contact" className="py-3 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-[#150B2D]/60 backdrop-blur-2xl border-white/10 rounded-xl border border-white/10 shadow-sm p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-white mb-2">Let's Work Together</h2>
          <p className="text-sm text-[#C4BEED] mb-6">Have a project in mind or want to collaborate? I'd love to hear from you.</p>

          <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info + Social */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Info card */}
            <div className="pro-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(({ Icon, label, value, href, color }, idx) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{ background: `${color}12`, color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C4BEED] uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-[#7C3AED] transition-colors">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social card */}
            <div className="pro-card p-6">
              <h4 className="text-sm font-semibold text-[#A855F7] uppercase tracking-wide mb-4">
                Connect with me
              </h4>
              <div className="space-y-3">
                {socials.map(({ Icon, label, href, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#F8FAFC] border border-transparent hover:border-white/10 transition-all duration-200 group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E2DFF5] group-hover:bg-[#6D28D9] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{label}</div>
                      <div className="text-xs text-[#C4BEED]">{handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="pro-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#C4BEED] mb-1.5" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C4BEED] mb-1.5" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C4BEED] mb-1.5" htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry / Collaboration"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#C4BEED] mb-1.5" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="input-field resize-none"
                  />
                </div>

                {/* Status message */}
                {submitStatus !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm font-medium ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {statusMessage}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  id="contact-submit"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}



