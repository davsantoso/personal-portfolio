"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

const socials = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    handle: "@davsantoso",
    desc: "Connect with me professionally and see my career journey",
    href: "#",
  },
  {
    icon: Github,
    title: "GitHub",
    handle: "@davsantoso",
    desc: "Check out my latest projects and open source contributions",
    href: "#",
  },
  {
    icon: Twitter,
    title: "Twitter",
    handle: "@davsantoso",
    desc: "Follow me for tech insights and development tips",
    href: "#",
  },
  {
    icon: Instagram,
    title: "Instagram",
    handle: "@davsantoso",
    desc: "Behind the scenes of my development journey",
    href: "#",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in Name, Email, and Message.");
      return;
    }

    const body = `Name : ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:email@gmail.com?subject=${encodeURIComponent(
      subject || "New message from portfolio"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          {/* Left: Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">Get In Touch</h2>
            <p className="text-muted text-lg mb-10 leading-relaxed">
              Ready to bring your ideas to life? Let&apos;s discuss your next project
              and create something amazing together!
            </p>

            <h3 className="text-xl font-bold flex items-center gap-2 mb-3 text-brand">
              <MessageSquare className="w-5 h-5 text-accent" /> Connect With Me
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Follow me on social media to stay updated with my latest projects,
              tech insights, and development journey.
            </p>

            <div className="grid gap-4">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-accent hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-50 border border-border group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand mb-1">
                        {social.title} <span className="text-muted font-normal text-sm ml-1">{social.handle}</span>
                      </div>
                      <div className="text-sm text-muted leading-relaxed">
                        {social.desc}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold flex items-center gap-2 mb-3 text-brand">
              <Mail className="w-5 h-5 text-accent" /> Contact Form
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Have a project in mind? Send me a message and I&apos;ll get back to you
              as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-brand">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-brand">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-brand">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-brand">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 transition-colors resize-y"
                ></textarea>
              </div>

              <Button type="submit" variant="dark" size="lg" className="w-full mt-2">
                <Send className="w-5 h-5" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
