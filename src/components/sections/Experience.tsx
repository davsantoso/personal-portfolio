"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, BookOpen, Award, Building, Calendar, MapPin, Star } from "lucide-react";
import { Chip } from "@/components/ui/Badge";

type Tab = "work" | "edu" | "achieve";

const experiences = {
  work: [
    {
      title: "Frontend Developer Intern",
      company: "InnovateLab Indonesia",
      icon: Building,
      date: "January 2025 – April 2025",
      location: "Jakarta, Indonesia",
      description:
        "Developed responsive web applications using React.js and Tailwind CSS. Collaborated with design team to implement pixel-perfect UI components and improved website performance by 30%.",
      tags: ["React.js", "Tailwind CSS", "JavaScript", "Git"],
    },
    {
      title: "Web Developer",
      company: "Freelance Projects",
      icon: Briefcase,
      date: "Jan 2025 – Present",
      location: "Remote",
      description:
        "Created custom websites for local businesses and startups. Specialized in modern web technologies and responsive design principles.",
      tags: ["HTML/CSS", "JavaScript", "WordPress", "UI/UX Design"],
    },
  ],
  edu: [
    {
      title: "S1 Informatika",
      company: "Universitas Bunda Mulia",
      icon: BookOpen,
      date: "2023 – Present",
      location: "Jakarta, Indonesia",
      description: "Focus on Artificial Intelligence, Cloud Computing, and Web Development.",
      tags: ["AI", "Cloud", "Web Dev"],
    },
  ],
  achieve: [
    {
      title: "Top 10 Finalist – Hackathon XYZ",
      company: "National Level",
      icon: Star,
      date: "2024",
      location: "Indonesia",
      description: "Built an AI-powered productivity tool with a team of 4, focusing on UX and performance.",
      tags: ["Teamwork", "AI", "Product"],
    },
  ],
};

export function Experience() {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  return (
    <section id="experience" className="section">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">My Experience</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A journey through my professional growth, education, and achievements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 p-1 rounded-2xl border border-border">
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === "work" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
                }`}
            >
              <Briefcase className="w-4 h-4" /> <span className="hidden sm:inline">Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab("edu")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === "edu" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
                }`}
            >
              <BookOpen className="w-4 h-4" /> <span className="hidden sm:inline">Education</span>
            </button>
            <button
              onClick={() => setActiveTab("achieve")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${activeTab === "achieve" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
                }`}
            >
              <Award className="w-4 h-4" /> <span className="hidden sm:inline">Achievements</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {experiences[activeTab].map((item, index) => {
                const CompanyIcon = item.icon;
                return (
                  <div key={index} className="relative sm:pl-14">
                    {/* Timeline Dot */}
                    <div className="absolute left-[19px] top-6 w-4 h-4 rounded-full bg-brand ring-4 ring-indigo-50 hidden sm:block"></div>

                    <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-brand">{item.title}</h3>
                          <div className="flex items-center gap-2 font-semibold text-muted mt-1">
                            <CompanyIcon className="w-4 h-4" /> {item.company}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 text-sm text-muted md:text-right">
                          <span className="flex items-center md:justify-end gap-1.5">
                            <Calendar className="w-4 h-4" /> {item.date}
                          </span>
                          <span className="flex items-center md:justify-end gap-1.5">
                            <MapPin className="w-4 h-4" /> {item.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Chip key={tag}>{tag}</Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
