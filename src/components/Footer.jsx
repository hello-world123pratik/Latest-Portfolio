export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      position: 'relative', zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <div>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem',
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Pratik Shirsath</span>
          <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
            Full-Stack Developer · Pune, India
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          {[
            ['GitHub', 'https://github.com/hello-world123pratik'],
            ['LinkedIn', 'https://linkedin.com/in/pratik-shirsath-6524aa284'],
            ['Email', 'mailto:pratikshirsath45@gmail.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >{label}</a>
          ))}
        </div>

        <p style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
