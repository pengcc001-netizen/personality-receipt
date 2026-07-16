import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { personalityTypes } from '../data/personalityTypes'
import Ad from '../components/Ad'

export default function TypesPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>All {personalityTypes.length} Personality Types - Personality Receipt</title>
        <meta name="description" content={`Browse all ${personalityTypes.length} personality types. From The Overthinker to The Wildcard. Each type comes with a receipt showing the cost of being that person.`} />
        <link rel="canonical" href="https://receipt.csskey.com/types" />
        <meta property="og:title" content={`All ${personalityTypes.length} Personality Types - Personality Receipt`} />
        <meta property="og:description" content={`Browse all ${personalityTypes.length} personality types. From The Overthinker to The Wildcard. Each type comes with a receipt showing the cost of being that person.`} />
        <meta property="og:url" content="https://receipt.csskey.com/types" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": `All ${personalityTypes.length} Personality Types`,
          "description": `Browse all ${personalityTypes.length} personality types. From The Overthinker to The Wildcard. Each type comes with a receipt showing the cost of being that person.`,
          "url": "https://receipt.csskey.com/types"
        })}</script>
      </Helmet>

      <h2 className="label" style={{ marginBottom: 8 }}>Personality Types</h2>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: 16 }}>
        All {personalityTypes.length} Types
      </h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
        Each personality type comes with a receipt — a list of traits rendered as line items with prices. The total is the cost of being you.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {personalityTypes.map((type, i) => (
          <Link key={type.slug} to={`/types/${type.slug}`} style={{ textDecoration: 'none' }}>
            <div className="paper-card" style={{ padding: '24px 28px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: 16, alignItems: 'center' }}>
                <div style={{ fontSize: '2rem' }}>{type.emoji}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>#{i + 1}</span>
                    <h2 className="mono" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink)' }}>{type.name}</h2>
                  </div>
                  <p className="mono" style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 8 }}>{type.tagline}</p>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {type.strengths.slice(0, 2).map((s, j) => <span key={j} className="chip chip-positive">{s}</span>)}
                    {type.weaknesses.slice(0, 1).map((w, j) => <span key={j} className="chip chip-accent">{w}</span>)}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <h2 className="label" style={{ marginBottom: 4 }}>Receipt Total</h2>
                  <div className="mono nums" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }}>${type.receiptTotal.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/" className="btn btn-stamp">Take the Test →</Link>
      </div>
    </div>
  )
}
