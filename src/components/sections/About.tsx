"use client";

import { motion } from "framer-motion";
import { User, MapPin, BookOpen, Mail, Phone, CheckSquare, ArrowDownCircle, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Badge";

const interests = [
  "Frontend Development",
  "UI/UX Design",
  "Software Development",
  "Big Data",
  "Cloud Computing"
];

const infoCards = [
  { icon: User, label: "Nama", value: "David Santoso" },
  { icon: MapPin, label: "Domisili", value: "Bekasi, Indonesia" },
  { icon: BookOpen, label: "Pendidikan", value: "Informatika UBM" },
  { icon: Mail, label: "Email", value: "email@gmail.com" },
  { icon: Phone, label: "Phone", value: "+62 812-8453-3248" },
  { icon: CheckSquare, label: "Status", value: "Available for Work" },
];

export function About() {
  return (
    <section id="about" className="section bg-gray-50/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">About Me</h2>
            <h3 className="text-xl font-bold mb-4">Hello There!</h3>

            <div className="space-y-4 text-muted leading-relaxed mb-8">
              <p>
                Saya adalah mahasiswa semester 6 di Universitas Bunda Mulia. Saya
                memiliki minat dalam bidang Artificial Intelligence (AI) dan Cloud
                Computing, serta berkomitmen untuk terus mengembangkan pengetahuan
                dan keterampilan saya di dunia teknologi.
              </p>
              <p>
                Saya fokus pada bidang Artificial Intelligence, khususnya dalam
                pengembangan machine learning serta penerapan cloud computing.
                Saya menikmati kolaborasi lintas bidang karena percaya bahwa
                keberagaman perspektif dapat menghasilkan solusi yang lebih
                inovatif dan berdampak.
              </p>
            </div>

            <div>
              <strong className="block mb-3 text-brand">Interests & Focus</strong>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Chip key={interest}>{interest}</Chip>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {infoCards.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-center gap-4 bg-white border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-muted">{info.label}</div>
                      <div className="font-bold text-brand">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="dark" asChild>
                <a href="#">
                  <ArrowDownCircle className="w-4 h-4" /> Download My CV
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Briefcase className="w-4 h-4" /> Hire Me Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
