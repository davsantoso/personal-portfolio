feather.replace();

// Scrollspy active link
const links = document.querySelectorAll(".nav-link");
const sections = [...links].map((a) =>
  document.querySelector(a.getAttribute("href"))
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = "#" + entry.target.id;
      const link = document.querySelector(`a[href="${id}"]`);
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        link?.classList.add("active");
      }
    });
  },
  { rootMargin: "-50% 0px -40% 0px", threshold: 0.01 }
);
sections.forEach((sec) => sec && observer.observe(sec));

// experience
const expWrap = document.querySelector("#experience");
const tabs = expWrap.querySelectorAll(".exp-tabs .tab");
const panels = expWrap.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // update active tab
    tabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    // show panel
    panels.forEach((p) => p.setAttribute("hidden", ""));
    const target = document.getElementById(tab.getAttribute("aria-controls"));
    target?.removeAttribute("hidden");
  });

  // keyboard support
  tab.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const idx = [...tabs].indexOf(document.activeElement);
      const next = (idx + dir + tabs.length) % tabs.length;
      tabs[next].focus();
    }
  });
});

//  PROJECTS (tabs + render)

const PROJECTS = {
  web: [
    {
      featured: true,
      status: "Completed",
      icon: "globe",
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
      icon: "globe",
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
      icon: "globe",
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
      icon: "smartphone",
      title: "Habit Tracker",
      subtitle: "Mobile Application",
      desc: "Track daily habits, streaks, reminders, and insights with charts.",
      date: "Apr 2025",
      tags: ["React Native", "Expo", "AsyncStorage"],
      code: "#",
      demo: "#",
    },
    {
      icon: "smartphone",
      title: "Food Delivery UI",
      subtitle: "Mobile UI Kit",
      desc: "Reusable mobile UI components and flows for food delivery apps.",
      date: "Feb 2025",
      tags: ["Flutter", "Dart"],
      code: "#",
      demo: "#",
    },
    {
      icon: "smartphone",
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
      icon: "code",
      title: "UI Components Library",
      subtitle: "Open Source",
      desc: "A lightweight collection of accessible UI components for React.",
      date: "2025",
      tags: ["React", "TypeScript", "Vite"],
      code: "#",
      demo: "#",
    },
    {
      icon: "code",
      title: "REST Starter",
      subtitle: "Open Source",
      desc: "Express + Prisma starter with auth, tests, and dockerized dev.",
      date: "2025",
      tags: ["Node.js", "Express", "Prisma", "Docker"],
      code: "#",
      demo: "#",
    },
    {
      icon: "code",
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

const projTabs = document.querySelectorAll("#projects .proj-tabs .tab");
const projGrid = document.getElementById("projectsGrid");

function chipHTML(text, cls = "") {
  return `<span class="p-chip ${cls}">${text}</span>`;
}

function projectCardHTML(p) {
  const maxShow = 3;
  const show = p.tags.slice(0, maxShow);
  const remain = Math.max(p.tags.length - maxShow, 0);

  return `
  <article class="p-card">
    ${p.status ? `<span class="p-status">${p.status}</span>` : ""}
    ${
      p.featured
        ? `<div class="p-featured"><i data-feather="star"></i> Featured</div>`
        : ""
    }

    <div class="p-head">
      <i data-feather="${p.icon || "globe"}"></i>
      <span>${p.subtitle}</span>
    </div>

    <h3 class="p-title">${p.title}</h3>
    <p class="p-desc">${p.desc}</p>

    <div class="p-meta"><i data-feather="calendar"></i> ${p.date}</div>

    <div class="p-tags">
      ${show.map((t) => chipHTML(t)).join("")}
      ${remain ? chipHTML(`+${remain}`, "more") : ""}
    </div>

    <div class="p-actions">
      <a class="btn dark" href="${p.code}" target="_blank" rel="noopener">
        <i data-feather="code"></i> Code
      </a>
      <a class="btn" href="${p.demo}" target="_blank" rel="noopener">
        <i data-feather="external-link"></i> Demo
      </a>
    </div>
  </article>`;
}

function renderProjects(key = "web") {
  const list = PROJECTS[key] || [];
  projGrid.innerHTML = list.map(projectCardHTML).join("");
  // re-render feather icons inside new HTML
  if (window.feather) feather.replace();
}

function setActiveProjTab(next) {
  projTabs.forEach((t) => {
    const active = t === next;
    t.classList.toggle("active", active);
    t.setAttribute("aria-selected", active ? "true" : "false");
    t.tabIndex = active ? 0 : -1;
  });
  renderProjects(next.dataset.key);
}

projTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveProjTab(tab));
});

// Keyboard navigation on tabs
document
  .querySelector("#projects .proj-tabs")
  ?.addEventListener("keydown", (e) => {
    const tabs = Array.from(projTabs);
    const idx = tabs.indexOf(document.activeElement);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const n = tabs[(idx + 1) % tabs.length];
      setActiveProjTab(n);
      n.focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const n = tabs[(idx - 1 + tabs.length) % tabs.length];
      setActiveProjTab(n);
      n.focus();
    }
    if (e.key === "Home") {
      e.preventDefault();
      const n = tabs[0];
      setActiveProjTab(n);
      n.focus();
    }
    if (e.key === "End") {
      e.preventDefault();
      const n = tabs[tabs.length - 1];
      setActiveProjTab(n);
      n.focus();
    }
  });

// Init (default web)
const initialProjTab =
  document.querySelector("#projects .proj-tabs .tab.active") || projTabs[0];
if (initialProjTab) setActiveProjTab(initialProjTab);

// My Skills
// Elemen
const skillsTabs = document.querySelectorAll("#skills .skills-tabs .tab");
const skillsGrid = document.querySelector("#skills .skills-grid");

// Data skills per kategori (silakan ubah nilainya)
const SKILLS = {
  Programming: [
    { name: "JavaScript", value: 90, label: "Language" },
    { name: "TypeScript", value: 85, label: "Language" },
    { name: "Python", value: 80, label: "Language" },
    { name: "PHP", value: 75, label: "Language" },
    { name: "Java", value: 70, label: "Language" },
    { name: "C++", value: 65, label: "Language" },
  ],
  Frontend: [
    { name: "React", value: 85, label: "Library" },
    { name: "Next.js", value: 80, label: "Framework" },
    { name: "Tailwind CSS", value: 85, label: "CSS" },
    { name: "SCSS/Sass", value: 75, label: "CSS" },
    { name: "Vite", value: 70, label: "Tooling" },
    { name: "Redux/State Mgmt", value: 70, label: "State" },
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

// Render kartu skill ke grid
function renderSkills(category) {
  const items = SKILLS[category] || [];
  const html = items
    .map(
      ({ name, value, label }) => `
    <div class="skill-card">
      <div class="skill-top">
        <span class="skill-name">${name}</span>
        <span class="skill-value">${value}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" style="width:${value}%"></div>
      </div>
      <div class="skill-label">${label}</div>
    </div>
  `
    )
    .join("");
  skillsGrid.innerHTML = html;
}

// Set tab aktif (UI + ARIA)
function setActiveTab(nextTab) {
  skillsTabs.forEach((t) => {
    t.classList.toggle("active", t === nextTab);
    t.setAttribute("aria-selected", t === nextTab ? "true" : "false");
    t.tabIndex = t === nextTab ? 0 : -1;
  });
  renderSkills(nextTab.textContent.trim());
}

// Klik tab
skillsTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveTab(tab));
});

// Keyboard navigation (ArrowLeft/Right, Home, End)
document
  .querySelector("#skills .skills-tabs")
  ?.addEventListener("keydown", (e) => {
    const current = document.activeElement;
    const tabs = Array.from(skillsTabs);
    let idx = tabs.indexOf(current);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveTab(tabs[(idx + 1) % tabs.length]);
      tabs[(idx + 1) % tabs.length].focus();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveTab(tabs[(idx - 1 + tabs.length) % tabs.length]);
      tabs[(idx - 1 + tabs.length) % tabs.length].focus();
    }
    if (e.key === "Home") {
      e.preventDefault();
      setActiveTab(tabs[0]);
      tabs[0].focus();
    }
    if (e.key === "End") {
      e.preventDefault();
      setActiveTab(tabs[tabs.length - 1]);
      tabs[tabs.length - 1].focus();
    }
  });

// Inisialisasi pertama: ambil tab yang sudah punya .active
const initial =
  document.querySelector("#skills .skills-tabs .tab.active") || skillsTabs[0];
if (initial) setActiveTab(initial);

// Testimonial slider (simple)
document.querySelectorAll("#testimonial .avatar").forEach((el) => {
  const init = el.getAttribute("data-initials") || "";
  el.textContent = init.toUpperCase().slice(0, 2);
});

// Tombol Add Testimonial (placeholder)
document.getElementById("addTestimonialBtn")?.addEventListener("click", () => {
  alert(
    'Form "Add Testimonial" belum dihubungkan. Nanti bisa diarahkan ke Google Form atau modal custom. 😉'
  );
});

// Contact form (demo only)
const RECEIVER_EMAIL = "email@gmail.com"; // ganti dengan email kamu
const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(contactForm);
  const name = (fd.get("name") || "").toString().trim();
  const email = (fd.get("email") || "").toString().trim();
  const subject = (fd.get("subject") || "New message from portfolio")
    .toString()
    .trim();
  const message = (fd.get("message") || "").toString().trim();

  if (!name || !email || !message) {
    alert("Please fill in Name, Email, and Message.");
    return;
  }

  const body = `Name : ${name}
Email: ${email}

${message}`;

  const mailto = `mailto:${encodeURIComponent(
    RECEIVER_EMAIL
  )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
});

// Tahun berjalan
document.getElementById("year").textContent = new Date().getFullYear();
