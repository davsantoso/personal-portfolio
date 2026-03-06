"use client";

import { motion } from "framer-motion";
import { Briefcase, Cpu, ShoppingBag, Monitor, Layers, Coffee, Star, Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Badge";

const testimonials = [
  {
    initials: "NS",
    name: "Nadia Setiawan",
    role: "Accounting Director",
    company: "Tech Solutions Inc",
    icon: Briefcase,
    text: "David delivered an outstanding website that exceeded our expectations. Her attention to detail and creative approach made our brand stand out. Highly recommended!",
    pill: "Corporate Website",
    date: "March 2025",
  },
  {
    initials: "ME",
    name: "Michael Eden",
    role: "Startup Founder",
    company: "InnovateLab",
    icon: Cpu,
    text: "Working with David was a game-changer for our startup. She created a modern, responsive web application that our users love. Professional and reliable!",
    pill: "Web Application",
    date: "April 2025",
  },
  {
    initials: "LB",
    name: "Lisa Blackpink",
    role: "E-commerce Supervisor",
    company: "Fashion Hub",
    icon: ShoppingBag,
    text: "David transformed our online store with a beautiful, user-friendly design. Sales increased by 40% after the redesign. Amazing work!",
    pill: "E-commerce Platform",
    date: "January 2025",
  },
  {
    initials: "MJ",
    name: "Michael Jordan",
    role: "BCA Director",
    company: "BCA Foundation",
    icon: Monitor,
    text: "Emma’s frontend development skills are exceptional. She brought our designs to life with pixel-perfect precision and smooth animations.",
    pill: "Portfolio Website",
    date: "July 2025",
  },
  {
    initials: "AT",
    name: "Thompson",
    role: "Product Manager",
    company: "SaaS Company",
    icon: Layers,
    text: "Excellent communication and technical expertise. David delivered our dashboard redesign on time and within budget. Will definitely work with her again!",
    pill: "Dashboard Redesign",
    date: "August 2025",
  },
  {
    initials: "DG",
    name: "Daniel Goleman",
    role: "Business Owner",
    company: "Local Restaurant",
    icon: Coffee,
    text: "David created a stunning website for our restaurant that perfectly captures our brand. The online ordering system works flawlessly!",
    pill: "Restaurant Website",
    date: "October 2025",
  },
];

export function Testimonials() {
  const handleAddTestimonial = () => {
    alert('Form "Add Testimonial" is not connected yet. Will be routed to Google Forms or custom modal. 😉');
  };

  return (
    <section id="testimonial" className="section bg-gray-50/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">Client Testimonials</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-6">
            What my clients say about working with me and the results we’ve achieved together
          </p>
          <Button variant="dark" onClick={handleAddTestimonial} className="shadow-sm">
            <Plus className="w-5 h-5" /> Add Testimonial
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => {
            const CompanyIcon = t.icon;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg tracking-wide shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="text-brand font-bold">{t.name}</strong>
                    <div className="text-muted text-sm flex items-center gap-1.5 flex-wrap mt-0.5">
                      {t.role} <span className="opacity-50">•</span>
                      <span className="flex items-center gap-1 font-medium">
                        <CompanyIcon className="w-3.5 h-3.5" /> {t.company}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 flex-1">
                  &quot;{t.text}&quot;
                </p>

                <div className="flex justify-between items-center pt-5 border-t border-border mt-auto">
                  <Chip>{t.pill}</Chip>
                  <span className="text-muted text-sm flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4" /> {t.date}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
