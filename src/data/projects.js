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
    title: "JobBoard — Django Job Portal",
    tagline: "Role-based platform for seekers, employers & admins",
    description:
      "A full-featured job portal built with Django supporting three distinct roles: job seekers, employers, and administrators. Employers can post and manage listings; admins approve postings; seekers can apply and track applications — all with protected routing and media uploads.",
    tech: ["Django", "Python", "PostgreSQL", "Render", "HTML/CSS", "Bootstrap"],
    live: "https://dijango-project.onrender.com",
    github: "https://github.com/hello-world123pratik/dijango_project",
    highlights: [
      "Role-based authentication: seeker, employer, admin",
      "Employer dashboards for posting, editing, viewing applicants",
      "Admin job-approval workflow with access control",
      "Profile management with media file uploads",
      "Deployed on Render with static/media configuration",
    ],
    color: "#4fc3f7",
  },
  {
    id: 3,
    title: "SkillSync — Collaboration Platform",
    tagline: "MERN real-time chat, profiles & scheduling",
    description:
      "A real-time collaboration platform built on the MERN stack featuring group chat rooms, user profiles, and calendar-based scheduling. Designed for skill-sharing communities and remote teams.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    live: "https://skillchat-frontend.onrender.com",
    github: "https://github.com/hello-world123pratik/Skillchat",
    highlights: [
      "Real-time messaging with Socket.io group chat rooms",
      "User profiles with skills and availability status",
      "Calendar scheduling for collaborative sessions",
      "Responsive mobile-first design",
    ],
    color: "#a78bfa",
  },
];

export default projects;
