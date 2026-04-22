import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        <NavLink to="/" style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.25rem',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-0.02em',
        }}>
          PS
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
             className="desktop-nav">
          {[['/', 'Home'], ['/projects', 'Projects'], ['/contact', 'Contact'], ['/resume', 'Resume']].map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem', fontWeight: 500,
                padding: '0.5rem 1rem',
                borderRadius: 8,
                color: isActive ? '#fff' : 'var(--muted)',
                background: isActive ? 'rgba(124,106,247,0.15)' : 'transparent',
                border: isActive ? '1px solid rgba(124,106,247,0.3)' : '1px solid transparent',
                transition: 'all 0.2s ease',
              })}
            >{label}</NavLink>
          ))}
          <a href="/contact" style={{
            marginLeft: '0.5rem',
            padding: '0.5rem 1.25rem',
            borderRadius: 8,
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            color: '#fff', fontWeight: 600, fontSize: '0.88rem',
            fontFamily: 'var(--font-body)',
            boxShadow: '0 4px 15px rgba(124,106,247,0.35)',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(m => !m)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--text)',
          }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <div style={{ width: 22, height: 2, background: 'currentColor', marginBottom: 5, borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 22, height: 2, background: 'currentColor', marginBottom: 5, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: 22, height: 2, background: 'currentColor', borderRadius: 2, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(10,10,15,0.97)', backdropFilter: 'blur(20px)',
          padding: '1.5rem 2rem 2rem',
          borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
        }}>
          {[['/', 'Home'], ['/projects', 'Projects'], ['/contact', 'Contact'], ['/resume', 'Resume']].map(([path, label]) => (
            <NavLink key={path} to={path} end={path === '/'}
              style={({ isActive }) => ({
                padding: '0.75rem 1rem', borderRadius: 8,
                color: isActive ? 'var(--accent)' : 'var(--text)',
                fontWeight: isActive ? 600 : 400,
                fontSize: '1.05rem',
              })}
            >{label}</NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
