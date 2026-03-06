"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, Code, Cpu, MessageCircle, Mail } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" },
  { id: "projects", label: "Projects", icon: Code, href: "#projects" },
  { id: "skills", label: "Skills", icon: Cpu, href: "#skills" },
  { id: "testimonial", label: "Testimonials", icon: MessageCircle, href: "#testimonial" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 }
    );

    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-3 z-50 bg-transparent border-0" aria-label="Main Navigation">
      <div className="container flex justify-center">
        <nav
          className="flex items-center gap-1 p-2 rounded-full bg-white border border-border shadow-[0_10px_25px_rgba(0,0,0,0.07)]"
          aria-label="Main Menu"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={clsx(
                  "inline-flex items-center gap-2 px-4 py-2.5 rounded-full no-underline font-semibold transition-colors duration-200 text-sm",
                  isActive ? "bg-brand text-white" : "text-foreground hover:bg-card"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
