const projects = [
  {
    id: 1,
    title: "SplitWise Smart Expense Splitter",
    tagline: "Real-time group expense tracking & debt simplification",
    description:
      "Full-stack MERN app that helps groups manage shared expenses for trips, rent, or dining. Features an optimized debt-simplification algorithm, Socket.io real-time updates, and interactive Chart.js analytics dashboards showing monthly and category-based spending patterns.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Chart.js", "JWT", "Tailwind CSS"],
    live: "https://expense-splitter-xi-one.vercel.app",
    github: "https://github.com/hello-world123pratik/expense-splitter",
    highlights: [
      "Debt simplification algorithm reduces total settlement transactions",
      "Real-time notifications via Socket.io when expenses are added",
      "Multiple split modes: equal, exact amounts, percentage-based",
      "Interactive analytics with bar & doughnut charts",
      "JWT + bcrypt authentication with persistent sessions",
    ],
    color: "#7c6af7",
  },
  {
  id: 2,
  title: "JobBoard — Scalable Django Job Portal",
  tagline: "Role-based recruitment platform with custom admin dashboard",
  description:
    "Engineered a full-stack job portal using Django, enabling structured interaction between job seekers, employers, and administrators. Implemented secure role-based authentication, a custom-built admin dashboard for moderation, and a complete job application lifecycle. Integrated cloud-based media storage for resume handling and deployed the application on Render with PostgreSQL, ensuring scalability and reliability.",
  tech: ["Django", "Python", "PostgreSQL", "Cloudinary", "Render", "HTML", "CSS", "Bootstrap"],
  live: "https://django-jobboard-hox1.onrender.com/",
  github: "https://github.com/hello-world123pratik/django-jobboard",
  highlights: [
    "Implemented role-based access control for Job Seekers, Employers, and Administrators",
    "Developed a custom admin dashboard for managing users, job listings, categories, and applications",
    "Built an employer dashboard to create, edit, and manage job postings and review applicants",
    "Designed an end-to-end job application workflow with resume upload and Cloudinary integration",
    "Enabled real-time application tracking for job seekers",
    "Created a moderation system for approving and rejecting job listings",
    "Enforced secure routing and authorization across all user roles",
    "Deployed the application on Render with PostgreSQL and optimized static and media handling"
  ],
  color: "#4fc3f7",
},
  {
  id: 3,
  title: "SkillSync — Collaboration Platform",
  tagline: "Real-time MERN chat, groups & scheduling platform",
  description:
    "A full-stack real-time collaboration platform built using the MERN stack with Socket.io. It enables group chat rooms, direct messaging, user profiles, notifications, and calendar-based scheduling for skill-sharing communities and remote teams.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
  live: "https://skillsync-app-five.vercel.app",
  github: "https://github.com/hello-world123pratik/skillsync-app",
  highlights: [
    "Real-time messaging with Socket.io (group chats + direct messages)",
    "Typing indicators and online/offline presence system",
    "Group creation with tags, visibility control, and membership system",
    "Interactive calendar for scheduling collaborative events",
    "User profiles with skills, bio, and social links",
    "JWT authentication with secure REST API backend",
    "Fully responsive UI built with Tailwind CSS"
  ],
  color: "#a78bfa",
},
];

export default projects;
