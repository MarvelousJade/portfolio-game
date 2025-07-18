"use client";

import { useState } from "react";

export default function ContactSection({ isActive }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      method: "Email",
      value: "your.email@example.com",
      icon: "📧",
      action: "mailto:your.email@example.com"
    },
    {
      method: "LinkedIn",
      value: "/in/yourprofile",
      icon: "💼",
      action: "https://linkedin.com/in/yourprofile"
    },
    {
      method: "GitHub",
      value: "/yourusername",
      icon: "💻",
      action: "https://github.com/yourusername"
    },
    {
      method: "Discord",
      value: "YourTag#1234",
      icon: "🎮",
      action: "#"
    },
    {
      method: "Twitter",
      value: "@yourtag",
      icon: "🐦",
      action: "https://twitter.com/yourtag"
    },
    {
      method: "Portfolio",
      value: "yoursite.dev",
      icon: "🌐",
      action: "https://yoursite.dev"
    }
  ];

  return (
    <section 
      id="contact" 
      className={`min-h-screen py-20 px-4 transition-all duration-500 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 glow">
          <span className="text-accent">▸ </span>COMMUNICATION PANEL
        </h2>
        
        <p className="text-center text-secondary mb-12 text-sm sm:text-base">
          Initiate contact sequence • All transmissions encrypted
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="pixel-border bg-muted p-6 pixel-shadow">
            <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
              📡 SEND MESSAGE
            </h3>
            
            {submitStatus === "success" && (
              <div className="pixel-border bg-accent/20 p-4 mb-4 text-accent text-sm">
                ✅ Message transmitted successfully! I&apos;ll respond within 24 hours.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Player Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pixel-border bg-background text-foreground p-3 focus:outline-none focus:bg-accent/10 transition-colors"
                  placeholder="Enter your display name..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Email Protocol:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pixel-border bg-background text-foreground p-3 focus:outline-none focus:bg-accent/10 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Message Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full pixel-border bg-background text-foreground p-3 focus:outline-none focus:bg-accent/10 transition-colors"
                  placeholder="Job Opportunity / Collaboration / etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">
                  Message Content:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full pixel-border bg-background text-foreground p-3 focus:outline-none focus:bg-accent/10 transition-colors resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full pixel-border px-6 py-3 font-bold transition-all duration-300 pixel-shadow ${
                  isSubmitting 
                    ? 'bg-muted text-foreground cursor-not-allowed' 
                    : 'bg-accent text-background hover:bg-secondary'
                }`}
              >
                {isSubmitting ? '🔄 TRANSMITTING...' : '📤 SEND MESSAGE'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="pixel-border bg-muted p-6 pixel-shadow">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                🔗 QUICK CONNECT
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactMethods.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-border bg-background p-3 hover:bg-accent/10 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-lg">{contact.icon}</span>
                    <div>
                      <div className="text-secondary font-bold">{contact.method}</div>
                      <div className="text-foreground text-xs">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Status Panel */}
            <div className="pixel-border bg-muted p-6 pixel-shadow">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                📊 STATUS PANEL
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground">Availability:</span>
                  <span className="text-accent flex items-center gap-1">
                    🟢 ONLINE
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground">Response Time:</span>
                  <span className="text-secondary">&lt; 24 hours</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground">Location:</span>
                  <span className="text-foreground">Your City, Country</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground">Time Zone:</span>
                  <span className="text-foreground">UTC-5 (EST)</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground">Preferred Contact:</span>
                  <span className="text-warning">Email</span>
                </div>
              </div>
            </div>

            {/* Collaboration Panel */}
            <div className="pixel-border bg-muted p-6 pixel-shadow">
              <h3 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                🤝 COLLABORATION
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-accent">✅</span>
                  <span className="text-foreground">Full-time opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✅</span>
                  <span className="text-foreground">Part-time/Contract work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✅</span>
                  <span className="text-foreground">Game jam partnerships</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✅</span>
                  <span className="text-foreground">Open source contributions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✅</span>
                  <span className="text-foreground">Mentorship opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted">❌</span>
                  <span className="text-muted">Unpaid internships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-center text-muted text-xs">
          <p>💡 Pro tip: Mention specific projects or skills in your message!</p>
          <p>🎮 Looking forward to creating amazing games together!</p>
        </div>
      </div>
    </section>
  );
}