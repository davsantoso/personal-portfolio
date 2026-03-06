"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SkillCategory = "Programming" | "Frontend" | "Backend" | "Tools";

const skillsData = {
  Programming: [
    { name: "JavaScript", value: 90, label: "Language" },
    { name: "TypeScript", value: 85, label: "Language" },
    { name: "Python", value: 80, label: "Language" },
    { name: "PHP", value: 30, label: "Language" },
    { name: "Java", value: 50, label: "Language" },
    { name: "C++", value: 65, label: "Language" },
  ],
  Frontend: [
    { name: "React", value: 85, label: "Library" },
    { name: "Next.js", value: 80, label: "Framework" },
    { name: "Tailwind CSS", value: 85, label: "CSS" },
    { name: "SCSS/Sass", value: 75, label: "CSS" },
  ],
  Backend: [
    { name: "Node.js", value: 80, label: "Runtime" },
    { name: "Express", value: 75, label: "Framework" },
    { name: "REST API", value: 85, label: "API" },
    { name: "MongoDB", value: 70, label: "Database" },
    { name: "MySQL", value: 70, label: "Database" },
    { name: "Auth/JWT", value: 75, label: "Security" },
  ],
  Tools: [
    { name: "Git & GitHub", value: 85, label: "VCS" },
    { name: "Docker", value: 65, label: "Container" },
    { name: "Figma", value: 75, label: "Design" },
    { name: "Postman", value: 80, label: "Testing" },
    { name: "Linux CLI", value: 70, label: "OS" },
    { name: "CI/CD", value: 60, label: "Pipeline" },
  ],
};

const categories: SkillCategory[] = ["Programming", "Frontend", "Backend", "Tools"];

export function Skills() {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Programming");

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">My Skills</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Technical expertise and proficiency across different domains of software development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-2xl border border-border">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all ${activeTab === category ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skillsData[activeTab].map((skill, idx) => (
              <div key={idx} className="bg-white border border-border shadow-sm rounded-2xl p-6">
                <div className="flex justify-between items-center font-bold mb-3 text-brand">
                  <span>{skill.name}</span>
                  <span className="text-accent">{skill.value}%</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, delay: 0.1 * idx, ease: "easeOut" }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
                <div className="text-sm font-semibold text-muted">{skill.label}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
