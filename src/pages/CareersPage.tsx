import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { careers } from "../data/careers"
import Ad from "../components/Ad"

export default function CareersPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Career Guide by Personality Type - {careers.length} Careers | Personality Receipt</title>
        <meta name="description" content={`Find the right career for your personality type. ${careers.length} careers analyzed by personality compatibility, salary, daily reality, and growth path.`} />
        <meta property="og:title" content={`Career Guide by Personality Type - ${careers.length} Careers | Personality Receipt`} />
        <meta property="og:description" content={`Find the right career for your personality type. ${careers.length} careers analyzed by personality compatibility, salary, daily reality, and growth path.`} />
        <meta property="og:url" content="https://receipt.csskey.com/careers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Career Guide by Personality Type",
          "description": `Find the right career for your personality type. ${careers.length} careers analyzed by personality compatibility, salary, daily reality, and growth path.`,
          "url": "https://receipt.csskey.com/careers"
        })}</script>
      </Helmet>

      <div className="label" $$$ >$$$</div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, marginBottom: 16, fontFamily: "var(--font-mono)" }}>
        Careers by Personality Type
      </h1>
      <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: "var(--font-mono)" }}>
        {careers.length} careers analyzed for personality type compatibility. Find out which types thrive, which struggle, and what daily life is really like in each role.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, marginBottom: 40 }}>
        {careers.map((career) => (
          <Link key={career.slug} to={`/careers/${career.slug}`} style={{ textDecoration: "none" }}>
            <div className="paper-card" style={{ padding: "20px 24px", height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: "1.5rem" }}>{career.emoji}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{career.title}</span>
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span className="stamp-chip" style={{ fontSize: 10 }}>{career.category}</span>
                <span className="stamp-chip" style={{ fontSize: 10, color: "var(--accent)", borderColor: "var(--accent)" }}>{career.salary}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Ad />

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link to="/" className="btn btn-stamp">Take the Personality Quiz →</Link>
      </div>
    </div>
  )
}
