import React, { useState } from "react";

interface ContactProps {
  isDarkMode: boolean;
}

// 1. Define the structural shape of your form fields using TypeScript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  // 2. Local state hooks to manage inputs, loading status, and backend feedback
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // 3. Connect to your Node/Express backend step via HTTP POST
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" }); // Clear inputs on success
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Unable to connect to the server." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center pt-25 pb-20 px-6 sm:px-[clamp(1rem,11.46vw,200px)] overflow-hidden scroll-auto gap-3 font-[Michroma]"
    >
      <div className="flex flex-col items-center text-center gap-3 sm:gap-4 mb-12 sm:mb-16">
        <span
          className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full ${
            isDarkMode
              ? "bg-cyan-500/10 text-cyan-400"
              : "bg-cyan-500/5 text-cyan-600"
          }`}
        >
          Connect
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Get In Touch
        </h2>
        <div className="h-0.75 w-10 sm:w-15 bg-linear-to-r from-cyan-950/10 via-cyan-500 to-cyan-950/10 rounded-full animate-pulse" />
      </div>

      <div
        className={`p-5 sm:p-8 2xl:mx-60 rounded-3xl border text-left transition-all duration-500 transform group shadow-[0_10px_15px_rgba(0,0,0,0.14)] backdrop-blur-xs ${
          isDarkMode
            ? "border-slate-800 bg-slate-950/80"
            : "border-white/30 border-2 bg-linear-to-br from-gray-500/5 to-gray-300/80"
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name Input Field */}
            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-600"
                }`}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#00b0ff] transition-colors ${
                  isDarkMode
                    ? "bg-[#050614] border-slate-700 text-slate-200 placeholder-slate-600/50"
                    : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                required
              />
            </div>

            {/* Email Input Field */}
            <div>
              <label
                className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                  isDarkMode ? "text-slate-400" : "text-gray-600"
                }`}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#00b0ff] transition-colors ${
                  isDarkMode
                    ? "bg-[#050614] border-slate-700 text-slate-200 placeholder-slate-600/50"
                    : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-400"
                }`}
                required
              />
            </div>
          </div>

          {/* Message Textarea Field */}
          <div>
            <label
              className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                isDarkMode ? "text-slate-400" : "text-gray-600"
              }`}
            >
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#00b0ff] transition-colors resize-none ${
                isDarkMode
                  ? "bg-[#050614] border-slate-700 text-slate-200 placeholder-slate-600/50"
                  : "bg-white/90 border-gray-300 text-gray-900 placeholder-gray-400"
              }`}
              required
            />
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-linear-to-r from-[#00b0ff] to-[#651fff] text-white font-medium rounded-xl hover:opacity-90 transition-opacity active:scale-[0.99] transform disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* User Notification Status Display */}
        {status.type && (
          <div
            className={`mt-4 text-center text-sm font-medium ${status.type === "success" ? "text-emerald-400" : "text-rose-400"}`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
