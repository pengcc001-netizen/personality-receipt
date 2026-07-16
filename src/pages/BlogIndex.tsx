import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import Ad from '../components/Ad'

export default function BlogIndex() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>Blog - Personality & Psychology Guides | Personality Receipt</title>
        <meta name="description" content={`Articles about personality types, receipt format psychology, and internet culture. ${blogPosts.length} guides covering personality tests, MBTI comparison, and self-improvement.`} />
        <link rel="canonical" href="https://receipt.csskey.com/blog" />
        <meta property="og:title" content="Blog - Personality & Psychology Guides | Personality Receipt" />
        <meta property="og:description" content={`Articles about personality types, receipt format psychology, and internet culture. ${blogPosts.length} guides covering personality tests, MBTI comparison, and self-improvement.`} />
        <meta property="og:url" content="https://receipt.csskey.com/blog" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Blog - Personality & Psychology Guides",
          "description": `Articles about personality types, receipt format psychology, and internet culture. ${blogPosts.length} guides covering personality tests, MBTI comparison, and self-improvement.`,
          "url": "https://receipt.csskey.com/blog"
        })}</script>
      </Helmet>

      <h2 className="label" style={{ marginBottom: 8 }}>Blog</h2>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: 16 }}>
        Articles & Guides
      </h1>
      <p style={{ color: 'var(--ink-soft)', fontSize: 14, lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
        Deep dives into personality tests, receipt psychology, and the science of self-categorization.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
        {blogPosts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <article className="paper-card" style={{ padding: '24px 28px' }}>
              <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span className="chip chip-accent">{post.category}</span>
                <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', alignSelf: 'center', letterSpacing: '0.05em' }}>
                  {post.date}
                </span>
              </div>
              <h2 className="mono" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8, lineHeight: 1.3 }}>
                {post.title}
              </h2>
              <p className="mono" style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', marginTop: 10 }}>READ MORE →</div>
            </article>
          </Link>
        ))}
      </div>

      <Ad />
    </div>
  )
}
