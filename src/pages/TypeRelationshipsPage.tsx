import { Helmet } from "react-helmet-async"
import { useParams, Link } from "react-router-dom"
import { personalityTypes } from "../data/personalityTypes"
import { typeComparisons } from "../data/typeComparisons"
import Ad from "../components/Ad"

export default function TypeRelationshipsPage() {
  const { slug } = useParams<{ slug: string }>()
  const type = personalityTypes.find((t) => t.slug === slug)
  if (!type) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Personality Receipt</title></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const comparisons = typeComparisons.filter((c) => c.slugA === type.slug || c.slugB === type.slug)

  const url = `https://receipt.csskey.com/types/${type.slug}/relationships`

  return (
    <div className="fade-in" style={{ maxWidth: 680, margin: "0 auto" }}>
      <Helmet>
        <title>{type.name} in Relationships - Compatibility Guide | Personality Receipt</title>
        <meta name="description" content={`How does ${type.name} interact with every other personality type? See ${comparisons.length} compatibility analyses with complement, friction, and communication tips.`} />
        <meta property="og:title" content={`${type.name} in Relationships - Compatibility Guide | Personality Receipt`} />
        <meta property="og:description" content={`How does ${type.name} interact with every other personality type? See ${comparisons.length} compatibility analyses with complement, friction, and communication tips.`} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${type.name} in Relationships`,
            description: `How ${type.name} interacts with every other personality type.`,
            url: url,
            author: { "@type": "Person", name: "Dr. Emily Hart" },
            publisher: { "@type": "Organization", name: "Personality Receipt" },
            datePublished: "2026-07-15",
            mainEntityOfPage: url,
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://receipt.csskey.com/" },
            { "@type": "ListItem", "position": 2, "name": "Types", "item": "https://receipt.csskey.com/types" },
            { "@type": "ListItem", "position": 3, "name": type.name, "item": `https://receipt.csskey.com/types/${type.slug}` },
            { "@type": "ListItem", "position": 4, "name": "Relationships", "item": url }
          ]
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 24 }}>
        <Link to={`/types/${type.slug}`} style={{ color: "var(--ink-faint)", fontSize: 12, fontFamily: "var(--font-mono)" }}>
          →{type.emoji} {type.name}
        </Link>
      </div>

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: "3rem", marginBottom: 8 }}>{type.emoji}</div>
        <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
          {type.name} in Relationships
        </h1>
        <p style={{ fontSize: 14, color: "var(--ink-soft)", fontFamily: "var(--font-mono)" }}>
          {comparisons.length} compatibility analyses with other types
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12, marginBottom: 32 }}>
        {comparisons.map((c) => {
          const otherSlug = c.slugA === type.slug ? c.slugB : c.slugA
          const otherType = personalityTypes.find((t) => t.slug === otherSlug)
          if (!otherType) return null
          const pairUrl = `/compare/${c.slugA}-vs-${c.slugB}`
          return (
            <Link key={c.slugA + c.slugB} to={pairUrl} style={{ textDecoration: "none" }}>
              <div className="paper-card" style={{ padding: "20px 24px", height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.5rem" }}>{type.emoji}</span>
                  <span className="mono" style={{ color: "var(--accent)", fontSize: 14, fontWeight: 700 }}>×</span>
                  <span style={{ fontSize: "1.5rem" }}>{otherType.emoji}</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, color: "var(--ink)", marginBottom: 4 }}>
                  × {otherType.name}
                </div>
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-faint)" }}>
                  COMBINED: ${c.combinedTotal.toFixed(2)}
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <Ad />

      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <Link to={`/types/${type.slug}/careers`} className="btn btn-outline" style={{ fontSize: 12 }}>View Career Guide →/Link>
        <Link to="/compare" className="btn btn-outline" style={{ fontSize: 12 }}>All Comparisons</Link>
      </div>
    </div>
  )
}
