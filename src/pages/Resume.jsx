const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Django', 'RESTful APIs'],
  Database: ['MongoDB', 'SQL (Joins, Indexing, Subqueries, CTEs)'],
  'Data Analytics': ['Python', 'NumPy', 'Pandas', 'Seaborn', 'Matplotlib', 'MS Excel'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook', 'Render', 'Vercel'],
  Other: ['Responsive Design', 'Authentication', 'Debugging', 'Version Control'],
};

const experience = [
  {
    title: 'SplitWise — Smart Expense Splitter',
    type: 'Full-Stack Project',
    period: '2026',
    color: '#7c6af7',
    bullets: [
      'MERN stack app for tracking group expenses with debt-simplification algorithm',
      'Real-time updates via Socket.io; JWT/bcrypt authentication',
      'Chart.js analytics dashboards (monthly + category charts)',
      'Multiple split modes: equal, exact, percentage-based',
    ],
  },
  {
    title: 'JobBoard — Django Job Portal',
    type: 'Full-Stack Project',
    period: '2025',
    color: '#4fc3f7',
    bullets: [
      'Role-based portal (seeker, employer, admin) built with Django',
      'Employer dashboards for job posting and applicant management',
      'Admin approval workflow with protected routing',
      'Deployed on Render with media/static file config',
    ],
  },
  {
    title: 'SkillSync — Collaboration Platform',
    type: 'Full-Stack Project',
    period: '2024',
    color: '#a78bfa',
    bullets: [
      'MERN platform with real-time group chat via Socket.io',
      'User profiles, skill tags, and calendar scheduling',
    ],
  },
];

export default function Resume() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div className="container" style={{ maxWidth: 860 }}>
        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem',
          padding: '2.5rem', borderRadius: 20,
          background: 'linear-gradient(135deg, rgba(124,106,247,0.1), rgba(79,195,247,0.06))',
          border: '1px solid rgba(124,106,247,0.2)',
        }}>
          <div>
            <p className="section-label" style={{ marginBottom: '0.5rem' }}>Resume</p>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.5rem',
            }}>Pratik Pramod Shirsath</h1>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Full-Stack Developer · Pune, Maharashtra
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', fontSize: '0.82rem', color: 'var(--muted)' }}>
              <span>pratikshirsath45@gmail.com</span>
              <span>+91 8177850079</span>
              <a href="https://linkedin.com/in/pratik-shirsath-6524aa284" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent2)' }}>LinkedIn</a>
              <a href="https://github.com/hello-world123pratik" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent2)' }}>GitHub</a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/Pratik_Shirsath_Resume.pdf" download
              style={{
                padding: '0.75rem 1.75rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                textAlign: 'center', whiteSpace: 'nowrap',
              }}
            >⬇ Download PDF</a>
            <a href="/Pratik_Shirsath_Resume.pdf" target="_blank" rel="noopener noreferrer"
              style={{
                padding: '0.75rem 1.75rem', borderRadius: 10,
                border: '1px solid var(--border)',
                color: 'var(--text)', fontWeight: 500, fontSize: '0.9rem',
                textAlign: 'center',
              }}
            >View PDF ↗</a>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Summary</p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
            Computer Science graduate with hands-on experience in building scalable full-stack web applications 
            and data-driven solutions. Proficient in React.js, Node.js, Django, MongoDB, MySQL, and Python libraries 
            like NumPy and Pandas. Skilled in developing responsive UIs, integrating REST APIs, and deploying 
            production-ready applications on cloud platforms such as Render.
          </p>
        </div>

        {/* Projects */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Projects</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {experience.map(exp => (
              <div key={exp.title} style={{
                padding: '1.75rem', borderRadius: 14,
                border: '1px solid var(--border)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{exp.title}</h3>
                    <span style={{ fontSize: '0.77rem', color: exp.color, fontWeight: 500 }}>{exp.type}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--muted)', alignSelf: 'flex-start' }}>{exp.period}</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {exp.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                      <span style={{ color: exp.color, flexShrink: 0 }}>—</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label">Skills</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} style={{
                padding: '1.25rem', borderRadius: 12,
                border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)',
              }}>
                <p style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{cat}</p>
                <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.8 }}>{items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Cert */}
        <div>
          <p className="section-label">Education & Certifications</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="edu-grid-r">
            <div style={{ padding: '1.5rem', borderRadius: 12, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>Bachelor of Computer Science</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.82rem', marginBottom: '0.3rem' }}>Savitribai Phule Pune University</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>CGPA 7.26 / 10 · Grade A · 61.32%</p>
            </div>
            <div style={{ padding: '1.5rem', borderRadius: 12, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>Crash Course on Python</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.82rem', marginBottom: '0.3rem' }}>Coursera — Authorized by Google</p>
              <a href="https://coursera.org/verify/76MBKY3QNPQV" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--accent2)', fontSize: '0.78rem' }}
              >Verify ↗</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) { .edu-grid-r { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
