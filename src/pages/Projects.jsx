import projects from '../data/projects.js';
import { useState } from 'react';

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const delay = `${index * 0.1}s`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? project.color + '44' : 'var(--border)'}`,
        borderRadius: 20, padding: '2.5rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 20px 60px ${project.color}18` : 'none',
        animation: `fadeUp 0.65s ${delay} ease both`,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '1rem' }}>
        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: '1.3rem', marginBottom: '0.35rem', lineHeight: 1.2,
          }}>{project.title}</h3>
          <p style={{ color: project.color, fontSize: '0.82rem', fontWeight: 500 }}>{project.tagline}</p>
        </div>
        <div style={{ display: 'flex', gap: '0.6rem', flexShrink: 0 }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              width: 36, height: 36, borderRadius: 8,
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)', fontSize: '0.8rem',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}
          >GH</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer"
            style={{
              width: 36, height: 36, borderRadius: 8,
              background: project.color + '22',
              border: `1px solid ${project.color}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: project.color, fontSize: '0.9rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = project.color + '33'}
            onMouseLeave={e => e.currentTarget.style.background = project.color + '22'}
          >↗</a>
        </div>
      </div>

      {/* Description */}
      <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        {project.highlights.map(h => (
          <li key={h} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
            <span style={{ color: project.color, flexShrink: 0, marginTop: '0.1em' }}>✦</span>
            {h}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '0.2rem 0.65rem', borderRadius: 100,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            fontSize: '0.75rem', color: 'var(--muted)',
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div className="container">
        <p className="section-label fade-up">Work</p>
        <h1 className="section-title fade-up-d1">Projects I've Built</h1>
        <p className="fade-up-d2" style={{
          color: 'var(--muted)', fontSize: '1rem', maxWidth: 520,
          marginBottom: '4rem', lineHeight: 1.8,
        }}>
          Real-world applications built with modern stacks, deployed and live. Each project solves a concrete problem.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>

        {/* GitHub CTA */}
        <div style={{
          marginTop: '4rem', textAlign: 'center',
          padding: '2.5rem', borderRadius: 16,
          border: '1px solid var(--border)',
          background: 'var(--bg-glass)',
        }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            See more experiments, tools and open-source work on GitHub.
          </p>
          <a href="https://github.com/hello-world123pratik" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.75rem 1.75rem', borderRadius: 10,
              border: '1px solid rgba(124,106,247,0.4)',
              color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,106,247,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            github.com/hello-world123pratik ↗
          </a>
        </div>
      </div>
    </section>
  );
}
