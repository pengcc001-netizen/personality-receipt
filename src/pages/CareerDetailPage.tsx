import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom"
import { careers } from "../data/careers"
import { personalityTypes } from "../data/personalityTypes"
import Ad from "../components/Ad"
import ShareButtons from "../components/ShareButtons"

export default function CareerDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const career = careers.find((c) => c.slug === slug)
  if (!career) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Personality Receipt</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://receipt.csskey.com/careers/${career.slug}`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{career.title} - Career Guide by Personality Type | Personality Receipt</title>
        <meta name="description" content={`Is ${career.title} right for your personality type? Salary: ${career.salary}. See which types thrive and which struggle in this career.`} />
        <meta property="og:title" content={`${career.title} - Career Guide by Personality Type | Personality Receipt`} />
        <meta property="og:description" content={`Is ${career.title} right for your personality type? Salary: ${career.salary}. See which types thrive and which struggle in this career.`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${career.title} 鈥?Career Guide by Personality Type`,
            description: career.description,
            url: url,
            author: { "@type": "Person", name: "Dr. Emily Hart" },
            publisher: { "@type": "Organization", name: "Personality Receipt" },
            datePublished: "2026-07-15",
            dateModified: "2026-07-15",
            mainEntityOfPage: url,
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://receipt.csskey.com/" },
            { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://receipt.csskey.com/careers" },
            { "@type": "ListItem", "position": 3, "name": career.title, "item": url }
          ]
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to="/careers" style={{ color: "var(--ink-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
          鈫?All Careers
        </Link>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: "3rem", marginBottom: 12 }}>{career.emoji}</div>
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
          {career.title}
        </h1>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <span className="stamp-chip">{career.category}</span>
          <span className="stamp-chip" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>{career.salary}</span>
        </div>
      </div>

      {/* Description */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ marginBottom: 8 }}>Overview</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", fontFamily: "var(--font-body)" }}>{career.description}</p>
      </div>

      {/* Best types */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ color: "var(--highlight)", marginBottom: 16 }}>鉁?Best Personality Types for This Career</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {career.bestTypes.map((bt, i) => {
            const type = personalityTypes.find((t) => t.slug === bt.slug)
            if (!type) return null
            return (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <Link to={`/types/${type.slug}`} style={{ textDecoration: "none", flexShrink: 0 }}>
                  <div style={{ fontSize: "2rem" }}>{type.emoji}</div>
                </Link>
                <div>
                  <Link to={`/types/${type.slug}`} style={{ textDecoration: "none" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{type.name}</span>
                  </Link>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", fontFamily: "var(--font-body)", marginTop: 4 }}>{bt.why}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Worst types */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ color: "var(--accent)", marginBottom: 16 }}>鉁?Types That May Struggle</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {career.worstTypes.map((wt, i) => {
            const type = personalityTypes.find((t) => t.slug === wt.slug)
            if (!type) return null
            return (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <Link to={`/types/${type.slug}`} style={{ textDecoration: "none", flexShrink: 0 }}>
                  <div style={{ fontSize: "2rem", opacity: 0.5 }}>{type.emoji}</div>
                </Link>
                <div>
                  <Link to={`/types/${type.slug}`} style={{ textDecoration: "none" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--ink-soft)" }}>{type.name}</span>
                  </Link>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--ink-soft)", fontFamily: "var(--font-body)", marginTop: 4 }}>{wt.why}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Ad />

      {/* Daily reality */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ marginBottom: 8 }}>Daily Reality</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", fontFamily: "var(--font-body)" }}>{career.dailyReality}</p>
      </div>

      {/* Growth path */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ marginBottom: 8 }}>Growth Path</h2>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--ink)", fontFamily: "var(--font-body)" }}>{career.growthPath}</p>
      </div>

      {/* Skills */}
      <div className="paper-card" style={{ padding: "24px 28px", marginBottom: 24 }}>
        <h2 className="label" style={{ marginBottom: 12 }}>Key Skills</h2>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {career.skills.map((s, i) => (
            <span key={i} className="stamp-chip">{s}</span>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <ShareButtons url={url} title={`${career.title} 鈥?Career Guide by Personality Type`} />
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="/careers" className="btn btn-outline" style={{ fontSize: 12 }}>鈫?All Career Guides</Link>
      </div>
    </div>
  )
}
