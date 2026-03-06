"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle, Mail, MapPin, Calendar, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ROLES = [
  "AI Engineer",
  "Software Developer",
  "Web Developer",
  "Cloud Engineer",
  "IT Project Manager"
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentRole.slice(0, prev.length + 1)
      );
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="section flex items-center min-h-[calc(100vh-80px)]">
      <div className="container grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for freelance work
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Hi, I&apos;m <span className="text-accent">David Santoso</span>
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-brand mb-4 flex items-center">
            {text}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="ml-1"
            >
              |
            </motion.span>
          </div>

          <p className="text-muted text-lg mb-6 leading-relaxed max-w-xl">
            I create beautiful, functional, and user-centered digital experiences.
            With 1+ years of experience in web development, I bring ideas to life
            through clean code and thoughtful design.
          </p>

          <div className="flex flex-wrap gap-4 text-muted mb-8">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Bekasi, Indonesia
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Available Now
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button variant="dark" asChild>
              <a href="#projects">
                <ArrowRightCircle className="w-5 h-5" /> View Projects
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" /> Let&apos;s Work Together
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 text-muted">
            <span>Follow me:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl bg-white aspect-square relative">
            <Image
              src="/images/foto_profil.jpg"
              alt="David Santoso Profile Photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
