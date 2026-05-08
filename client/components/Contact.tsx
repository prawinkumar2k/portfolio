import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "cf3ce871-5e6e-4ebd-8346-392e7fed001e";

    if (!accessKey) {
      setIsLoading(false);
      setSubmitStatus("error");
      setStatusMessage("Web3Forms Access Key is not configured.");
      return;
    }

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
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please check your internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              {/* Contact items */}
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "prawinkumar2k4@gmail.com",
                  href: "mailto:prawinkumar2k4@gmail.com",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+91 8807054164",
                  href: "tel:+918807054164",
                },
                {
                  Icon: MapPin,
                  label: "Location",
                  value: "Erode, Tamil Nadu, India",
                  href: "#",
                },
              ].map(({ Icon, label, value, href }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-neon-blue/10 group-hover:bg-neon-blue/20 transition-colors">
                      <Icon className="h-6 w-6 text-neon-blue" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{label}</p>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/prawinkumar2k" },
                  { name: "LinkedIn", href: "https://linkedin.com/in/prawinkumar-n" },
                  { name: "SearchFirst", href: "https://searchfirst.ai" },
                ].map(({ name, href }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 glass rounded-lg text-white/70 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-blue/50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              />

              <motion.input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-blue/50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />

              <motion.textarea
                name="message"
                required
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-neon-blue/50 transition-colors resize-none"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </div>

            {submitStatus !== "idle" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-sm font-semibold ${
                  submitStatus === "success"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                    : "bg-red-500/10 text-red-400 border border-red-500/30"
                }`}
              >
                {statusMessage}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
