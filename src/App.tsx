import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import TypesPage from './pages/TypesPage'
import TypeDetailPage from './pages/TypeDetailPage'
import TypeCareersPage from './pages/TypeCareersPage'
import TypeRelationshipsPage from './pages/TypeRelationshipsPage'
import ComparePage from './pages/ComparePage'
import CompareDetailPage from './pages/CompareDetailPage'
import CareersPage from './pages/CareersPage'
import CareerDetailPage from './pages/CareerDetailPage'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import FAQPage from './pages/FAQPage'
import StaticPage from './pages/StaticPage'
import ResultPage from './pages/ResultPage'
import Ad from './components/Ad'
import CookieConsent from './components/CookieConsent'

function NotFound() {
  return (
    <div style={{ minHeight: '55vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, textAlign: 'center' }}>
      <Helmet><meta name="robots" content="noindex,nofollow" /><title>{`404 - Page Not Found`}</title></Helmet>
      <div className="label">Error 404</div>
      <div className="mono" style={{ fontSize: 'clamp(4rem,12vw,8rem)', fontWeight: 700, color: 'var(--accent)', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em' }}>404</div>
      <p style={{ color: 'var(--ink-soft)', maxWidth: 360, fontSize: 14, fontFamily: 'var(--font-mono)' }}>This receipt was not found in our system.</p>
      <Link to="/" className="btn btn-stamp">Return Home</Link>
    </div>
  )
}

const navLinks = [
  { to: '/types', label: 'Types' },
  { to: '/compare', label: 'Compare' },
  { to: '/careers', label: 'Careers' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
]

function Layout({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  useEffect(() => { setMenuOpen(false) }, [loc.pathname])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* ---------- Header ---------- */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'var(--bg-overlay)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px dashed var(--line-dashed)',
        }}
      >
        <div style={{
          maxWidth: 720,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          height: 60,
          padding: '0 24px',
          gap: 20,
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <span className="mono" style={{ fontSize: 18, fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
              PERSONALITY
            </span>
            <span className="mono" style={{
              fontSize: 9,
              fontWeight: 600,
              color: 'var(--accent)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderLeft: '1px dashed var(--line-dashed)',
              paddingLeft: 8,
            }}>Receipt</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: 4, alignItems: 'center', marginLeft: 'auto' }} className="nav-desktop">
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="nav-link" style={{ padding: '6px 10px' }}>
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/" className="btn btn-stamp nav-desktop" style={{ padding: '6px 16px', fontSize: 11 }}>
            Take Test
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'var(--bg-paper)',
              border: '1px solid var(--line)',
              padding: 6,
              cursor: 'pointer',
              color: 'var(--ink)',
              marginLeft: 'auto',
            }}
            className="menu-toggle"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></>}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav className="slide-down nav-mobile" style={{
            display: 'flex',
            flexDirection: 'column',
            borderBottom: '1px dashed var(--line-dashed)',
            padding: '12px 24px',
            gap: 2,
            background: 'var(--bg-paper)',
          }}>
            {navLinks.map(l => (
              <Link key={l.to} to={l.to} className="nav-link" style={{ padding: '12px 0', borderBottom: '1px solid var(--line)' }}>
                {l.label}
              </Link>
            ))}
            <Link to="/" className="btn btn-stamp" style={{ marginTop: 12, padding: '10px 24px' }}>
              Take the Test
            </Link>
          </nav>
        )}
      </header>

      {/* ---------- Main ---------- */}
      <main style={{ flex: 1, maxWidth: 720, margin: '0 auto', padding: '40px 24px', width: '100%' }}>
        {children}
      </main>

      {/* ---------- Footer ---------- */}
      <footer style={{
        borderTop: '1px dashed var(--line-dashed)',
        background: 'var(--bg-shade)',
        padding: '48px 24px 32px',
        marginTop: 64,
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 32,
            marginBottom: 32,
          }}>
            <div style={{ maxWidth: 280 }}>
              <span className="mono" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>PERSONALITY RECEIPT</span>
              <p style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.7, marginTop: 8, fontFamily: 'var(--font-mono)' }}>
                Take a personality test and get your result as a receipt. 8 brutally honest types. Free, no sign-up.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="label" style={{ marginBottom: 4 }}>Explore</span>
              <Link to="/types" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>All Types</Link>
              <Link to="/compare" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Compare</Link>
              <Link to="/blog" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Blog</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="label" style={{ marginBottom: 4 }}>Site</span>
              <Link to="/about" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>About</Link>
              <Link to="/privacy" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Privacy</Link>
              <Link to="/terms" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Terms</Link>
              <Link to="/contact" style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 13, fontFamily: 'var(--font-mono)' }}>Contact</Link>
            </div>
          </div>
          <div style={{ borderTop: '1px dashed var(--line-dashed)', paddingTop: 20, textAlign: 'center' }}>
            <p className="mono" style={{ color: 'var(--ink-faint)', fontSize: 11, letterSpacing: '0.05em' }}>
              PERSONALITY RECEIPT · 2026 · For entertainment purposes only.
            </p>
            <p className="hand" style={{ color: 'var(--accent)', fontSize: 16, marginTop: 8 }}>
              thank you for being you *
            </p>
          </div>
          <div style={{borderTop:'1px solid currentColor',padding:'16px 8px',marginTop:'24px',fontSize:'13px',lineHeight:1.8,opacity:0.85}}>
            <div style={{fontWeight:600,marginBottom:'8px'}}>Network Sites</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'4px 12px'}}>
              {[
                {name:'CSS Reference',url:'https://csskey.com',desc:'Complete CSS property, selector & function reference'},
                {name:'AI Tools',url:'https://ai.csskey.com',desc:'40+ free AI-powered online tools'},
                {name:'Free Online Tools',url:'https://tools.aiprh.com',desc:'160+ free utility tools and calculators'},
                {name:'JS Reference',url:'https://js.csskey.com',desc:'JavaScript API reference with examples'},
                {name:'Python Reference',url:'https://python.csskey.com',desc:'Python standard library reference'},
                {name:'HTML Reference',url:'https://html.csskey.com',desc:'HTML element and attribute reference'},
                {name:'SQL Reference',url:'https://sql.csskey.com',desc:'SQL syntax reference for multiple databases'},
                {name:'Linux Reference',url:'https://linux.csskey.com',desc:'Linux command reference and examples'},
                {name:'Emoji Kitchen',url:'https://emoji.csskey.com',desc:'Mix and create custom emoji combinations'},
                {name:'Font Fusion',url:'https://font.csskey.com',desc:'Google Fonts preview and pairing tool'},
                {name:'Prompt Vault',url:'https://prompt.csskey.com',desc:'Curated AI prompt library'},
                {name:'Quiz Hub',url:'https://quiz.csskey.com',desc:'Interactive quizzes on programming topics'},
                {name:'Curious Lens',url:'https://curious.csskey.com',desc:'Daily curious facts and trivia'},
                {name:'Would You Rather',url:'https://wyr.csskey.com',desc:'Fun would-you-rather questions game'},
                {name:'Spark Site',url:'https://spark.csskey.com',desc:'Creative writing prompts and ideas'},
                {name:'Vibes',url:'https://vibes.csskey.com',desc:'Mood and aesthetic content generator'},
                {name:'Words',url:'https://words.csskey.com',desc:'Word tools and language games'},
                {name:'Brand',url:'https://brand.csskey.com',desc:'Brand name and logo idea generator'},
                {name:'Calckit',url:'https://calc.csskey.com',desc:'Collection of free online calculators'},
                {name:'Mix',url:'https://mix.csskey.com',desc:'Content mixing and blending tools'},
                {name:'Aura Score',url:'https://aura.csskey.com',desc:'Personal energy and aura reading'},
                {name:'Squad Audit',url:'https://squad.csskey.com',desc:'Team and squad analysis tools'},
                {name:'Your Lore',url:'https://lore.csskey.com',desc:'Personal story and lore generator'},
                {name:'Rot Report',url:'https://rot.csskey.com',desc:'Daily rot and decay content'},
                {name:'Draw Perfect',url:'https://draw.csskey.com',desc:'Drawing and sketching tools'},
              ].map(s=>(
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" title={s.desc} style={{color:'inherit',textDecoration:'none'}}>{s.name}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .menu-toggle { display: flex !important; }
        }
      `}</style>
      <CookieConsent />
    </div>
  )
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/types" element={<TypesPage />} />
        <Route path="/types/:slug" element={<TypeDetailPage />} />
        <Route path="/types/:slug/careers" element={<TypeCareersPage />} />
        <Route path="/types/:slug/relationships" element={<TypeRelationshipsPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/compare/:a-vs-:b" element={<CompareDetailPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<CareerDetailPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<StaticPage page="about" />} />
        <Route path="/privacy" element={<StaticPage page="privacy" />} />
        <Route path="/terms" element={<StaticPage page="terms" />} />
        <Route path="/contact" element={<StaticPage page="contact" />} />
        <Route path="/disclaimer" element={<StaticPage page="disclaimer" />} />
        <Route path="/r/:code" element={<ResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Ad />
    </Layout>
  )
}
