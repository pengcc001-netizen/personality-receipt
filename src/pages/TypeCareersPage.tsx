import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom"
import { personalityTypes } from "../data/personalityTypes"
import { careers } from "../data/careers"
import Ad from "../components/Ad"

export default function TypeCareersPage() {
  const { slug } = useParams<{ slug: string }>()
  const type = personalityTypes.find((t) => t.slug === slug)
  if (!type) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const bestCareers = careers.filter((c) => c.bestTypes.some((bt) => bt.slug === type.slug))
  const worstCareers = careers.filter((c) => c.worstTypes.some((wt) => wt.slug === type.slug))
  const neutralCareers = careers.filter((c) => !c.bestTypes.some((bt) => bt.slug === type.slug) && !c.worstTypes.some((wt) => wt.slug === type.slug))

  const url = `https://receipt.csskey.com/types/${type.slug}/careers`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>Best Careers for {type.name} - Career Guide | Personality Receipt</title>
        <meta name="description" content={`The best and worst careers for ${type.name}. See which jobs fit your personality type and why.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `Best Careers for ${type.name}`,
            description: `Career recommendations for the ${type.name} personality type.`,
            url: url,
            author: { "@type": "Person", name: "Dr. Emily Hart" },
            publisher: { "@type": "Organization", name: "Personality Receipt" },
            datePublished: "2026-07-15",
            mainEntityOfPage: url,
          })}
        </script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to={`/types/${type.slug}`} style={{ color: "var(--ink-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
          ← {type.emoji} {type.name}
        </Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: "3rem", marginBottom: 8 }}>{type.emoji}</div>
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
          Best Careers for {type.name}
        </h1>
        <p style={{ fontSize: 14, color: "var(--ink-soft)", fontFamily: "var(--font-mono)" }}>{type.tagline}</p>
      </div>

      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ color: "var(--highlight)", marginBottom: 16 }}>✓ {bestCareers.length} Careers Where You Thrive</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {bestCareers.map((career) => {
            const match = career.bestTypes.find((bt) => bt.slug === type.slug)
            return (
              <Link key={career.slug} to={`/careers/${career.slug}`} style={{ textDecoration: "none" }}>
                <div className="paper-card" style={{ padding: "16px 20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: "1.25rem" }}>{career.emoji}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{career.title}</span>
                    <span className="stamp-chip" style={{ fontSize: 10, marginLeft: "auto" }}>{career.salary}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--ink-soft)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{match?.why}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <Ad />

      {worstCareers.length > 0 && (
        <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
          <h2 className="label" style={{ color: "var(--accent)", marginBottom: 16 }}>✗ {worstCareers.length} Careers That May Drain You</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {worstCareers.map((career) => {
              const match = career.worstTypes.find((wt) => wt.slug === type.slug)
              return (
                <Link key={career.slug} to={`/careers/${career.slug}`} style={{ textDecoration: "none" }}>
                  <div className="paper-card" style={{ padding: "16px 20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "1.25rem", opacity: 0.5 }}>{career.emoji}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--ink-soft)" }}>{career.title}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "var(--ink-soft)", fontFamily: "var(--font-body)", lineHeight: 1.6 }}>{match?.why}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {neutralCareers.length > 0 && (
        <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
          <h2 className="label" style={{ marginBottom: 16 }}>○ Also Consider</h2>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {neutralCareers.map((career) => (
              <Link key={career.slug} to={`/careers/${career.slug}`} style={{ textDecoration: "none" }}>
                <span className="stamp-chip" style={{ fontSize: 12 }}>{career.emoji} {career.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <Link to={`/types/${type.slug}/relationships`} className="btn btn-outline" style={{ fontSize: 12 }}>View Relationship Dynamics →</Link>
        <Link to="/careers" className="btn btn-outline" style={{ fontSize: 12 }}>All Careers</Link>
      </div>
    </div>
  )
}
