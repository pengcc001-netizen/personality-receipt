import { Helmet } from 'react-helmet-async'
import { personalityTypes } from '../data/personalityTypes'
import Ad from '../components/Ad'

export default function ComparePage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Compare Personality Types - Side by Side | Personality Receipt</title>
        <meta name="description" content={`Compare all ${personalityTypes.length} personality types side by side. See receipt totals, strengths, weaknesses, and compatibility.`} />
      </Helmet>

      <div className="label" style={{ marginBottom: 8 }}>Comparison</div>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: 16 }}>
        Compare All Types
      </h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
        See how the {personalityTypes.length} personality types compare on receipt totals, strengths, and weaknesses.
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
                  <span style={{ marginRight: 8 }}>{t.emoji}</span>
                  <span style={{ color: 'var(--ink)', fontWeight: 600 }}>{t.name}</span>
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

      {/* Ranked by total */}
      <section>
        <div className="label" style={{ marginBottom: 10 }}>Ranked by Receipt Total (Highest Cost)</div>
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
