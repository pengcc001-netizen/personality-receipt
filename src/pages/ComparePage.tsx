import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { personalityTypes } from '../data/personalityTypes'
import { typeComparisons } from '../data/typeComparisons'
import Ad from '../components/Ad'

export default function ComparePage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Compare Personality Types - Side by Side | Personality Receipt</title>
        <meta name="description" content={`Compare all ${personalityTypes.length} personality types side by side. See receipt totals, strengths, weaknesses, and ${typeComparisons.length} detailed compatibility analyses.`} />
      </Helmet>

      <h2 className="label" style={{ marginBottom: 8 }}>Comparison</h2>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: 16 }}>
        Compare All Types
      </h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
        See how the {personalityTypes.length} personality types compare on receipt totals, strengths, and weaknesses. Click any pair below for a deep compatibility analysis.
      </p>

      {/* Comparison table */}
      <div className="paper-card" style={{ overflow: 'auto', marginBottom: 32 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, fontFamily: 'var(--font-mono)' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--ink)' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--ink)' }}>Type</th>
              <th style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--accent)' }}>Total</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--highlight)' }}>Top Strength</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--accent)' }}>Top Weakness</th>
            </tr>
          </thead>
          <tbody>
            {personalityTypes.map((t) => (
              <tr key={t.slug} style={{ borderBottom: '1px dashed var(--line-dashed)' }}>
                <td style={{ padding: '10px 16px' }}>
                  <Link to={`/types/${t.slug}`} style={{ textDecoration: 'none', color: 'var(--ink)' }}>
                    <span style={{ marginRight: 8 }}>{t.emoji}</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{t.name}</span>
                  </Link>
                </td>
                <td style={{ textAlign: 'right', padding: '10px 16px', color: 'var(--accent)', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
                  ${t.receiptTotal.toFixed(2)}
                </td>
                <td style={{ padding: '10px 16px', color: 'var(--ink-soft)' }}>{t.strengths[0]}</td>
                <td style={{ padding: '10px 16px', color: 'var(--ink-soft)' }}>{t.weaknesses[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Ad />

      {/* Pairwise comparisons */}
      <section style={{ marginBottom: 40 }}>
        <h2 className="label" style={{ marginBottom: 10 }}>Pairwise Compatibility Analysis ({typeComparisons.length} pairs)</h2>
        <p style={{ color: 'var(--ink-soft)', fontSize: 13, marginBottom: 20, fontFamily: 'var(--font-mono)' }}>
          Click any pair for a deep analysis of how two types interact — complement, friction, communication tips, and real-world scenarios.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
          {typeComparisons.map((c, i) => {
            const typeA = personalityTypes.find(t => t.slug === c.slugA)
            const typeB = personalityTypes.find(t => t.slug === c.slugB)
            if (!typeA || !typeB) return null
            return (
              <Link key={i} to={`/compare/${c.slugA}-vs-${c.slugB}`} style={{ textDecoration: 'none' }}>
                <div className="paper-card" style={{ padding: '16px 20px', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: '1.5rem' }}>{typeA.emoji}</span>
                    <span className="mono" style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 700 }}>×</span>
                    <span style={{ fontSize: '1.5rem' }}>{typeB.emoji}</span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--ink)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {typeA.name} × {typeB.name}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 4 }}>
                    COMBINED: ${c.combinedTotal.toFixed(2)}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Ranked by total */}
      <section>
        <h2 className="label" style={{ marginBottom: 10 }}>Ranked by Receipt Total (Highest Cost)</h2>
        <div className="paper-card" style={{ padding: '8px 20px' }}>
          {[...personalityTypes].sort((a, b) => b.receiptTotal - a.receiptTotal).map((t, i) => (
            <div key={t.slug} className="receipt-line" style={{ padding: '8px 0' }}>
              <span className="mono" style={{ color: 'var(--ink-faint)', width: 24 }}>{i + 1}</span>
              <span className="label-text">{t.emoji} {t.name}</span>
              <span className="leader"></span>
              <span className="price" style={{ color: 'var(--accent)', fontWeight: 700 }}>${t.receiptTotal.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
