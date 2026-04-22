const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const contactLinks = [
  { icon: '✉', label: 'Email', value: 'pratikshirsath45@gmail.com', href: 'mailto:pratikshirsath45@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 8177850079', href: 'tel:+918177850079' },
  { icon: '💼', label: 'LinkedIn', value: 'pratik-shirsath-6524aa284', href: 'https://linkedin.com/in/pratik-shirsath-6524aa284' },
  { icon: '⌗', label: 'GitHub', value: 'hello-world123pratik', href: 'https://github.com/hello-world123pratik' },
];

export default function Contact() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div className="container">
        <p className="section-label fade-up">Contact</p>
        <h1 className="section-title fade-up-d1">Let's Build Together</h1>
        <p className="fade-up-d2" style={{
          color: 'var(--muted)', fontSize: '1rem', maxWidth: 540,
          marginBottom: '4rem', lineHeight: 1.8,
        }}>
          I'm actively seeking full-time opportunities in full-stack, backend, or product engineering. 
          Reach out — I respond within 24 hours.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '3rem', alignItems: 'start',
        }} className="contact-grid">
          {/* Left — info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {contactLinks.map(({ icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'center',
                  padding: '1.25rem 1.5rem', borderRadius: 14,
                  border: '1px solid var(--border)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.2s ease',
                  color: 'inherit',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,106,247,0.4)'; e.currentTarget.style.background = 'rgba(124,106,247,0.07)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              >
                <span style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'rgba(124,106,247,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', flexShrink: 0,
                }}>{icon}</span>
                <div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>{label}</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500 }}>{value}</p>
                </div>
              </a>
            ))}

            {/* Resume download */}
            <div style={{
              padding: '1.25rem 1.5rem', borderRadius: 14,
              border: '1px solid rgba(124,106,247,0.3)',
              background: 'rgba(124,106,247,0.07)',
              marginTop: '0.5rem',
            }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                Want my resume? Download the PDF directly.
              </p>
              <a href="/Pratik_Shirsath_Resume.pdf" download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.25rem', borderRadius: 8,
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  color: '#fff', fontWeight: 600, fontSize: '0.85rem',
                }}
              >⬇ Download Resume</a>
            </div>
          </div>

          {/* Right — form */}
          <form
            action={FORMSPREE_URL}
            method="POST"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid var(--border)',
              borderRadius: 20, padding: '2.5rem',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '2rem' }}>
              Send a Message
            </h3>

            {[
              { name: 'name', label: 'Your Name', type: 'text' },
              { name: 'email', label: 'Email Address', type: 'email' },
            ].map(({ name, label, type }) => (
              <div key={name} style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</label>
                <input
                  type={type} name={name} required
                  style={{
                    width: '100%', padding: '0.85rem 1rem', borderRadius: 10,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)', fontSize: '0.9rem',
                    outline: 'none', transition: 'border-color 0.2s',
                    fontFamily: 'var(--font-body)',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
            ))}

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
              <textarea
                name="message" rows={5} required
                style={{
                  width: '100%', padding: '0.85rem 1rem', borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)', fontSize: '0.9rem',
                  outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                  fontFamily: 'var(--font-body)',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(124,106,247,0.6)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                placeholder="Tell me about the role, company, or project..."
              />
            </div>

            <button type="submit"
              style={{
                width: '100%', padding: '0.9rem', borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(124,106,247,0.35)',
                transition: 'opacity 0.2s, transform 0.2s',
                fontFamily: 'var(--font-body)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
            >Send Message →</button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
