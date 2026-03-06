import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white py-12 border-t border-gray-800">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Tentang Portofolio</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Portofolio ringkas yang menampilkan karya terbaik dan pengalaman relevan.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
            <li><a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Get in Touch</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Email: <a href="mailto:email@gmail.com" className="hover:text-white transition-colors">email@gmail.com</a></p>
            <p>Siap untuk bekerja dan berkolaborasi.</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-100">Stay Update</h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Terus ikuti saya untuk update proyek & tulisan terbaru.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800 text-sm text-gray-400">
        <div className="flex items-center gap-2 font-bold text-white">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[10px]">DS</span>
          </div>
          <span>David Santoso</span>
        </div>

        <div className="text-center md:text-right">
          <span>Dibuat: 6 Maret 2026</span>
          <span className="mx-2">•</span>
          <span>&copy; {currentYear} <strong>David Santoso</strong></span>
        </div>
      </div>
    </footer>
  );
}
