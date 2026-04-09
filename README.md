# personal-portfolio

## 🌐 Website Personal Portfolio

This repository contains my **personal portfolio website** built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.  
The website showcases my profile, skills, experience, projects, testimonials, and contact — with a clean, modern, and interactive layout powered by smooth animations.

🌍 **Live Demo** → [https://davsantoso.github.io/personal-portfolio/](https://davsantoso.github.io/personal-portfolio/)

## ✨ Features

- Fully responsive on desktop and mobile.
- Clean minimalist white theme.
- Smooth scrolling and scroll-spy sticky navigation.
- Typewriter effect with animated role cycling (AI Engineer, Software Developer, etc.).
- Interactive tabs for filtering Projects (Web / Mobile / Open Source) and Skills (Programming / Frontend / Backend / Tools).
- Sections: Home, About, Experience, Projects, Skills, Testimonials, Contact.
- Scroll-triggered reveal animations via Framer Motion.

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page (assembles all sections)
│   └── globals.css        # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Sticky navigation bar
│   │   └── Footer.tsx     # Footer
│   ├── sections/
│   │   ├── Hero.tsx       # Landing section with typewriter effect
│   │   ├── About.tsx      # About me
│   │   ├── Experience.tsx # Work experience
│   │   ├── Projects.tsx   # Tabbed project showcase
│   │   ├── Skills.tsx     # Skill bars with progress animation
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx    # Contact form/info
│   └── ui/
│       ├── Button.tsx     # Reusable button component
│       └── Badge.tsx      # Chip/badge component
public/
└── images/
    └── foto_profil.jpg    # Profile photo
```

## 🛠️ Tech Stack

| Category     | Technology                                     |
| ------------ | ---------------------------------------------- |
| Framework    | Next.js 16 (App Router)                        |
| Language     | TypeScript                                     |
| Styling      | Tailwind CSS v4                                |
| Animations   | Framer Motion v12                              |
| Icons        | Lucide React                                   |
| UI Utilities | clsx, tailwind-merge, class-variance-authority |

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/davsantoso/personal-portfolio.git
   ```
2. Open the project folder:
   ```bash
   cd personal-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📸 Preview

<img width="1899" height="869" alt="image" src="https://github.com/user-attachments/assets/34a96f02-4096-4797-9308-6ab99a5b3070" />
