import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom"
import { typeComparisons } from "../data/typeComparisons"
import { personalityTypes } from "../data/personalityTypes"
import ShareButtons from "../components/ShareButtons"
import Ad from "../components/Ad"

export default function CompareDetailPage() {
  const { a, b } = useParams<{ a: string; b: string }>()

  const comparison = typeComparisons.find(
    (c) => (c.slugA === a && c.slugB === b) || (c.slugA === b && c.slugB === a),
  )

  if (!comparison) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const typeA = personalityTypes.find((t) => t.slug === comparison.slugA)
  const typeB = personalityTypes.find((t) => t.slug === comparison.slugB)
  if (!typeA || !typeB) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://receipt.csskey.com/compare/${comparison.slugA}-vs-${comparison.slugB}`

  return (
    <div className="fade-in" style={{ maxWidth: 720, margin: "0 auto" }}>
      <Helmet>
        <title>{typeA.name} × {typeB.name} - Type Compatibility Analysis | Personality Receipt</title>
        <meta
          name="description"
          content={`How do ${typeA.name} and ${typeB.name} interact? Deep analysis of compatibility, friction, communication tips, and real-world scenarios.`}
        />
        <meta property="og:title" content={`${typeA.name} × ${typeB.name} - Type Compatibility Analysis | Personality Receipt`} />
        <meta property="og:description" content={`How do ${typeA.name} and ${typeB.name} interact? Deep analysis of compatibility, friction, communication tips, and real-world scenarios.`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${typeA.name} × ${typeB.name} — Type Compatibility Analysis`,
            description: `Deep analysis of how ${typeA.name} and ${typeB.name} interact.`,
            url: url,
            author: { "@type": "Person", name: "Dr. Emily Hart" },
            publisher: { "@type": "Organization", name: "Personality Receipt" },
            datePublished: "2026-07-15",
            dateModified: "2026-07-15",
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/compare" style={{ color: "var(--ink-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
          ← All Comparisons
        </Link>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: 8 }}>{typeA.emoji}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>{typeA.name}</div>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, color: "var(--ink-red)", fontWeight: 700 }}>×</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: 8 }}>{typeB.emoji}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700, color: "var(--ink)" }}>{typeB.name}</div>
          </div>
        </div>
        <div className="mono" style={{ fontSize: 12, color: "var(--ink-red)", marginTop: 16, letterSpacing: "0.1em" }}>
          COMBINED RECEIPT TOTAL: ${comparison.combinedTotal.toFixed(2)}
        </div>
      </div>

      {/* Complement */}
      <section className="prose" style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", marginBottom: 16, color: "var(--ink-red)" }}>
          How They Complement Each Other
        </h2>
        {comparison.complement.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", margin: "12px 0", fontFamily: "var(--font-body)", textAlign: "justify" }}>
            {para}
          </p>
        ))}
      </section>

      <Ad />

      {/* Friction */}
      <section className="prose" style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", marginBottom: 16, color: "var(--ink-red)" }}>
          Where They Clash
        </h2>
        {comparison.friction.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", margin: "12px 0", fontFamily: "var(--font-body)", textAlign: "justify" }}>
            {para}
          </p>
        ))}
      </section>

      {/* Communication Tips */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", marginBottom: 16, color: "var(--ink-red)" }}>
          Communication Tips
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {comparison.communicationTips.map((tip, i) => (
            <div key={i} className="receipt-card" style={{ padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span className="mono" style={{ color: "var(--ink-red)", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 14, color: "var(--ink)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>{tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Best & Worst */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
        <div className="receipt-card" style={{ padding: "24px 28px" }}>
          <div className="eyebrow" style={{ color: "var(--ink-red)", marginBottom: 8 }}>Best Scenario</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink)", fontFamily: "var(--font-body)" }}>{comparison.bestScenario}</p>
        </div>
        <div className="receipt-card" style={{ padding: "24px 28px" }}>
          <div className="eyebrow" style={{ color: "var(--ink-faint)", marginBottom: 8 }}>Worst Scenario</div>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink)", fontFamily: "var(--font-body)" }}>{comparison.worstScenario}</p>
        </div>
      </div>

      {/* Combined Receipt */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem", marginBottom: 16, color: "var(--ink-red)" }}>
          Combined Receipt
        </h2>
        <div className="receipt-card" style={{ padding: "24px 28px" }}>
          {comparison.combinedReceipt.map((item, i) => (
            <div key={i} className="receipt-line" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: i < comparison.combinedReceipt.length - 1 ? "1px dashed var(--border)" : "none" }}>
              <div>
                <div style={{ fontSize: 14, color: "var(--ink)", fontFamily: "var(--font-mono)" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", fontFamily: "var(--font-body)", marginTop: 2 }}>{item.note}</div>
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-faint)", textAlign: "right", whiteSpace: "nowrap" }}>
                {item.fromType}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: "2px solid var(--ink)", display: "flex", justifyContent: "space-between" }}>
            <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", letterSpacing: "0.1em" }}>COMBINED TOTAL</span>
            <span className="mono" style={{ fontSize: 16, fontWeight: 700, color: "var(--ink-red)" }}>${comparison.combinedTotal.toFixed(2)}</span>
          </div>
        </div>
      </section>

      <div style={{ marginBottom: 32 }}>
        <ShareButtons url={url} title={`${typeA.name} × ${typeB.name} compatibility analysis`} />
      </div>

      {/* Links to individual types */}
      <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
        <Link to={`/types/${typeA.slug}`} className="btn btn-outline" style={{ fontSize: 12 }}>
          {typeA.emoji} {typeA.name}
        </Link>
        <Link to={`/types/${typeB.slug}`} className="btn btn-outline" style={{ fontSize: 12 }}>
          {typeB.emoji} {typeB.name}
        </Link>
      </div>
    </div>
  )
}
