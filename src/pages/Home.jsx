import { Link } from 'react-router-dom';

const skills = {
  Frontend: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
  Backend:  ['Node.js', 'Express.js', 'Django', 'REST APIs'],
  Database: ['MongoDB', 'MySQL', 'SQL (Joins, CTEs, Indexing)'],
  'Data & Tools': ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Git', 'Postman', 'Vercel', 'Render'],
};

const stats = [
  { value: '3+', label: 'Production Projects' },
  { value: '2', label: 'Tech Stacks (MERN & Django)' },
  { value: 'A', label: 'Final Grade (BCS)' },
  { value: '∞', label: 'Lines of Caffeine' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ maxWidth: 780 }}>
            <div className="fade-up" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(124,106,247,0.12)',
              border: '1px solid rgba(124,106,247,0.3)',
              borderRadius: 100, padding: '0.4rem 1rem',
              marginBottom: '2rem',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', display: 'block' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 500 }}>Available for full-time roles</span>
            </div>

            <h1 className="fade-up-d1" style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.0,
              letterSpacing: '-0.03em', marginBottom: '1.5rem',
            }}>
              Pratik<br />
              <span style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Shirsath</span>
            </h1>

            <p className="fade-up-d2" style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: 'var(--muted)', lineHeight: 1.8,
              maxWidth: 580, marginBottom: '2.5rem',
              fontWeight: 300,
            }}>
              Full-Stack Developer building scalable MERN & Django applications.
              Passionate about clean architecture, real-time systems, and data-driven UIs.
            </p>

            <div className="fade-up-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" style={{
                padding: '0.85rem 2rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                color: '#fff', fontWeight: 600, fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(124,106,247,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(124,106,247,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(124,106,247,0.35)'; }}
              >View Projects →</Link>

              <a href="https://github.com/hello-world123pratik" target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '0.85rem 2rem', borderRadius: 10,
                  border: '1px solid var(--border)',
                  color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,106,247,0.5)'; e.currentTarget.style.background = 'rgba(124,106,247,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'transparent'; }}
              >GitHub ↗</a>
            </div>

            {/* social links */}
            <div className="fade-up-d4" style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', color: 'var(--muted)', fontSize: '0.82rem' }}>
              {[
                ['linkedin.com/in/pratik-shirsath', 'https://linkedin.com/in/pratik-shirsath-6524aa284'],
                ['pratikshirsath45@gmail.com', 'mailto:pratikshirsath45@gmail.com'],
                ['+91 8177850079', 'tel:+918177850079'],
              ].map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >{label}</a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        padding: '3rem 2rem',
      }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2rem', textAlign: 'center',
          }}>
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '2.5rem', lineHeight: 1,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  marginBottom: '0.4rem',
                }}>{value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center',
          }} className="about-grid">
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">CS Graduate with a bias for action</h2>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                I'm a Computer Science graduate from Savitribai Phule Pune University with hands-on experience 
                building production-ready full-stack applications. I love solving real-world problems through 
                clean, scalable software.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                My experience spans the entire stack — from crafting responsive UIs with React and Tailwind, 
                to designing REST APIs and database schemas, to deploying on Render and Vercel. 
                I'm actively looking for full-time engineering roles.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1rem', borderRadius: 8,
                  border: '1px solid var(--border)',
                  fontSize: '0.82rem', color: 'var(--muted)',
                }}>
                  📍 Pune, Maharashtra
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1rem', borderRadius: 8,
                  border: '1px solid var(--border)',
                  fontSize: '0.82rem', color: 'var(--muted)',
                }}>
                  🎓 BCS — CGPA 7.26 / 10
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 1rem', borderRadius: 8,
                  border: '1px solid rgba(74,222,128,0.3)',
                  background: 'rgba(74,222,128,0.07)',
                  fontSize: '0.82rem', color: '#4ade80',
                }}>
                  ✦ Open to work
                </div>
              </div>
            </div>

            {/* Skills grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat} style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border)',
                  borderRadius: 14, padding: '1.25rem',
                }}>
                  <p style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{cat}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {items.map(skill => (
                      <span key={skill} style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: 100,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        fontSize: '0.8rem', color: 'var(--text)',
                      }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 780px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
        `}</style>
      </section>

      {/* ── EDUCATION & CERT ── */}
      <section style={{
        padding: '4rem 2rem',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="edu-grid">
            <div style={{
              background: 'var(--bg-glass)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '2rem',
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>🎓</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Bachelor of Computer Science
              </h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                Savitribai Phule Pune University
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>
                CGPA 7.26 / 10 &nbsp;·&nbsp; Final Grade: A &nbsp;·&nbsp; 61.32%
              </p>
            </div>

            <div style={{
              background: 'var(--bg-glass)', border: '1px solid var(--border)',
              borderRadius: 16, padding: '2rem',
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>📜</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                Crash Course on Python
              </h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                Coursera — Authorized by Google
              </p>
              <a href="https://coursera.org/verify/76MBKY3QNPQV" target="_blank" rel="noopener noreferrer"
                style={{ color: 'var(--accent2)', fontSize: '0.8rem', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >Verify Certificate ↗</a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) { .edu-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '7rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 620 }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(124,106,247,0.12), rgba(79,195,247,0.08))',
            border: '1px solid rgba(124,106,247,0.25)',
            borderRadius: 24, padding: '4rem 3rem',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem',
            }}>Ready to build something great?</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              I'm actively looking for full-time opportunities in full-stack, backend, or product engineering.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{
                padding: '0.85rem 2rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                color: '#fff', fontWeight: 600, fontSize: '0.95rem',
                boxShadow: '0 8px 25px rgba(124,106,247,0.35)',
              }}>Get in Touch</Link>
              <Link to="/resume" style={{
                padding: '0.85rem 2rem', borderRadius: 10,
                border: '1px solid var(--border)',
                color: 'var(--text)', fontWeight: 500, fontSize: '0.95rem',
              }}>View Resume</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
