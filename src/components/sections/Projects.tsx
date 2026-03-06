"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Code, Star, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Badge";

type ProjectCategory = "web" | "mobile" | "oss";

type Project = {
  featured?: boolean;
  status?: string;
  icon: any;
  title: string;
  subtitle: string;
  desc: string;
  date: string;
  tags: string[];
  code: string;
  demo: string;
};

const projectsData: Record<ProjectCategory, Project[]> = {
  web: [
    {
      featured: true,
      status: "Completed",
      icon: Globe,
      title: "E-Commerce Platform",
      subtitle: "Full Stack Web Application",
      desc: "Modern e-commerce platform built with React.js and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
      date: "May 2025 – Jun 2025",
      tags: ["React.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      code: "#",
      demo: "#",
    },
    {
      status: "Completed",
      icon: Globe,
      title: "Task Management App",
      subtitle: "Web Application",
      desc: "Collaborative task management application with real-time updates. Built with modern web technologies and features drag-and-drop, team collaboration, and project tracking.",
      date: "Mar 2025 – Apr 2025",
      tags: ["Vue.js", "Firebase", "Socket.io", "Vite"],
      code: "#",
      demo: "#",
    },
    {
      status: "Completed",
      icon: Globe,
      title: "Portfolio Website",
      subtitle: "Static Website",
      desc: "Responsive personal portfolio website showcasing projects and skills. Built with modern design principles and optimized for performance and SEO.",
      date: "Jan 2025 – Feb 2025",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      code: "#",
      demo: "#",
    },
  ],
  mobile: [
    {
      icon: Smartphone,
      title: "Habit Tracker",
      subtitle: "Mobile Application",
      desc: "Track daily habits, streaks, reminders, and insights with charts.",
      date: "Apr 2025",
      tags: ["React Native", "Expo", "AsyncStorage"],
      code: "#",
      demo: "#",
    },
    {
      icon: Smartphone,
      title: "Food Delivery UI",
      subtitle: "Mobile UI Kit",
      desc: "Reusable mobile UI components and flows for food delivery apps.",
      date: "Feb 2025",
      tags: ["Flutter", "Dart"],
      code: "#",
      demo: "#",
    },
    {
      icon: Smartphone,
      title: "Fitness Coach",
      subtitle: "Mobile Application",
      desc: "Workout plans, timers, and progress tracking with offline mode.",
      date: "Dec 2024",
      tags: ["Kotlin", "Jetpack Compose"],
      code: "#",
      demo: "#",
    },
  ],
  oss: [
    {
      icon: Code,
      title: "UI Components Library",
      subtitle: "Open Source",
      desc: "A lightweight collection of accessible UI components for React.",
      date: "2025",
      tags: ["React", "TypeScript", "Vite"],
      code: "#",
      demo: "#",
    },
    {
      icon: Code,
      title: "REST Starter",
      subtitle: "Open Source",
      desc: "Express + Prisma starter with auth, tests, and dockerized dev.",
      date: "2025",
      tags: ["Node.js", "Express", "Prisma", "Docker"],
      code: "#",
      demo: "#",
    },
    {
      icon: Code,
      title: "Markdown Blog",
      subtitle: "Open Source",
      desc: "Static blog generator with MDX and file-based routing.",
      date: "2024",
      tags: ["Next.js", "MDX"],
      code: "#",
      demo: "#",
    },
  ],
};

export function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("web");

  return (
    <section id="projects" className="section bg-gray-50/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">My Projects</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A showcase of my development work across web, mobile, and open source projects
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-2xl border border-border">
            <button
              onClick={() => setActiveTab("web")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === "web" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
              }`}
            >
              <Globe className="w-4 h-4" /> Web Projects
            </button>
            <button
              onClick={() => setActiveTab("mobile")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === "mobile" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile Apps
            </button>
            <button
              onClick={() => setActiveTab("oss")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-all ${
                activeTab === "oss" ? "bg-brand text-white shadow-md" : "text-brand hover:bg-gray-200"
              }`}
            >
              <Code className="w-4 h-4" /> Open Source
            </button>
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsData[activeTab].map((project, idx) => {
              const ProjectIcon = project.icon;
              return (
                <div key={idx} className="relative flex flex-col bg-white border border-border shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl p-6 overflow-hidden">
                  
                  {project.status && (
                    <div className="absolute top-4 right-4">
                      <Chip variant="status">{project.status}</Chip>
                    </div>
                  )}

                  <div className="flex-1">
                    {project.featured && (
                      <Chip variant="featured" className="mb-4">
                        <Star className="w-3.5 h-3.5" /> Featured
                      </Chip>
                    )}

                    <div className="flex items-center gap-2 text-muted mb-2">
                      <ProjectIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.subtitle}</span>
                    </div>

                    <h3 className="text-xl font-bold text-brand mb-3">{project.title}</h3>
                    <p className="text-foreground text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-muted text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4" /> {project.date}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                      {project.tags.length > 3 && (
                        <Chip className="opacity-80">+{project.tags.length - 3}</Chip>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button variant="dark" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Code className="w-4 h-4" /> Code
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
