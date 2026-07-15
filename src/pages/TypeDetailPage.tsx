import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { personalityTypes } from '../data/personalityTypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function TypeDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const type = personalityTypes.find(t => t.slug === slug)

  if (!type) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://receipt.csskey.com/types/${type.slug}`
  const compatible = personalityTypes.filter(t => type.compatibleWith.includes(t.slug))

  return (
    <div className="fade-in">
      <Helmet>
        <title>{type.name} (${type.receiptTotal.toFixed(2)}) - Personality Receipt</title>
        <meta name="description" content={`${type.name}: ${type.tagline} Receipt total: $${type.receiptTotal.toFixed(2)}. Strengths, weaknesses, and habits.`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${type.name} — Personality Receipt`,
          "description": type.tagline,
          "url": url,
          "author": { "@type": "Person", "name": "Maya Chen" },
          "publisher": { "@type": "Organization", "name": "Personality Receipt" },
          "datePublished": "2026-07-01",
          "mainEntityOfPage": url
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 20 }}>
        <Link to="/types" className="mono" style={{ color: 'var(--ink-faint)', fontSize: 12 }}>← All Types</Link>
      </div>

      {/* The Receipt */}
      <div className="receipt" style={{ padding: '36px 28px 44px', marginBottom: 32 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div className="receipt-header" style={{ fontSize: 14, marginBottom: 4 }}>PERSONALITY RECEIPT</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)' }}>
            TYPE: {type.name.toUpperCase()}
          </div>
        </div>

        <hr className="dashed-line" />

        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{type.emoji}</div>
          <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>{type.name}</div>
          <div className="hand" style={{ fontSize: 18, color: 'var(--accent)', marginTop: 4 }}>{type.tagline}</div>
        </div>

        <hr className="dashed-line" />

        {/* Items */}
        <div style={{ margin: '16px 0' }}>
          <div className="receipt-header" style={{ textAlign: 'left', marginBottom: 8, fontSize: 10 }}>ITEM</div>
          {type.receiptItems.map((item, i) => (
            <div key={i} className="receipt-line">
              <span className="label-text">{item.label}</span>
              <span className="leader"></span>
              <span className="price">{item.qty}x ${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="double-line" />

        <div className="receipt-line" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
          <span className="label-text">TOTAL</span>
          <span className="leader"></span>
          <span className="price" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>${type.receiptTotal.toFixed(2)}</span>
        </div>

        <hr className="dashed-line" />

        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <div className="hand" style={{ fontSize: 18, color: 'var(--accent)' }}>thank you for being you *</div>
        </div>
      </div>

      {/* Description */}
      <article className="prose" style={{ marginBottom: 32 }}>
        <div className="label" style={{ marginBottom: 12 }}>About This Type</div>
        {type.description.split('\n').map((para, i) => (
          <p key={i} className={i === 0 ? 'dropcap' : ''} style={{
            fontSize: 15, lineHeight: 1.8, color: 'var(--ink)', margin: '8px 0',
            fontFamily: 'var(--font-mono)', textAlign: 'justify', hyphens: 'auto',
          }}>{para}</p>
        ))}
      </article>

      {/* Strengths & Weaknesses */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        <div className="paper-card" style={{ padding: '20px 24px' }}>
          <div className="label" style={{ color: 'var(--highlight)', marginBottom: 10 }}>Strengths</div>
          {type.strengths.map((s, i) => (
            <div key={i} className="mono" style={{ fontSize: 13, color: 'var(--ink)', padding: '3px 0' }}>
              <span style={{ color: 'var(--highlight)' }}>+</span> {s}
            </div>
          ))}
        </div>
        <div className="paper-card" style={{ padding: '20px 24px' }}>
          <div className="label" style={{ color: 'var(--accent)', marginBottom: 10 }}>Weaknesses</div>
          {type.weaknesses.map((w, i) => (
            <div key={i} className="mono" style={{ fontSize: 13, color: 'var(--ink)', padding: '3px 0' }}>
              <span style={{ color: 'var(--accent)' }}>−</span> {w}
            </div>
          ))}
        </div>
      </div>

      {/* Habits */}
      <div className="paper-card" style={{ padding: '20px 24px', marginBottom: 32 }}>
        <div className="label" style={{ marginBottom: 10 }}>Typical Habits</div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {type.habits.map((h, i) => (
            <li key={i} className="mono" style={{ fontSize: 13, color: 'var(--ink-soft)', padding: '4px 0', paddingLeft: 16, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>·</span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      <Ad />

      {/* Compatible types */}
      {compatible.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <div className="label" style={{ marginBottom: 10 }}>Most Compatible With</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {compatible.map(p => (
              <Link key={p.slug} to={`/types/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div className="paper-card" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1.25rem' }}>{p.emoji}</span>
                  <span className="mono" style={{ fontSize: 13, color: 'var(--ink)' }}>{p.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div style={{ marginTop: 32 }}>
        <ShareButtons url={url} title={`${type.name} — $${type.receiptTotal.toFixed(2)} receipt total`} />
      </div>

      {/* Take test */}
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/" className="btn btn-stamp">Take the Test →</Link>
      </div>
    </div>
  )
}
