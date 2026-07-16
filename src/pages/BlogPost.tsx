import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blog'
import ShareButtons from '../components/ShareButtons'
import Ad from '../components/Ad'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) return <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><h1 style={{ fontSize: 48, fontWeight: 800 }}>404</h1><p>Page not found</p><Link to="/" style={{ textDecoration: 'none', fontWeight: 600 }}>Go Home</Link></div>

  const url = `https://receipt.csskey.com/blog/${post.slug}`
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="fade-in">
      <Helmet>
        <title>{post.title} | Personality Receipt Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "url": url,
          "author": { "@type": "Person", "name": post.author },
          "publisher": { "@type": "Organization", "name": "Personality Receipt" },
          "datePublished": post.date,
          "dateModified": post.date,
          "mainEntityOfPage": url,
          "keywords": post.tags.join(', ')
        })}</script>
      </Helmet>

      <div style={{ marginBottom: 20 }}>
        <Link to="/blog" className="mono" style={{ color: 'var(--ink-faint)', fontSize: 12 }}>← All Articles</Link>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <span className="chip chip-accent">{post.category}</span>
        <span className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', alignSelf: 'center', letterSpacing: '0.05em' }}>
          {post.date} · BY {post.author.toUpperCase()}
        </span>
      </div>

      <h1 className="mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: 'var(--ink)' }}>
        {post.title}
      </h1>

      <p className="mono" style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 28, fontStyle: 'italic' }}>
        {post.excerpt}
      </p>

      <article className="prose">
        {post.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return (
            <h2 key={i} className="mono" style={{ fontSize: '1.25rem', margin: '1.8em 0 0.6em', fontWeight: 700, color: 'var(--ink)' }}>
              {line.replace('## ', '')}
            </h2>
          )
          if (line.startsWith('### ')) return (
            <h3 key={i} className="mono" style={{ fontSize: '1.0625rem', margin: '1.6em 0 0.5em', fontWeight: 600, color: 'var(--ink)' }}>
              {line.replace('### ', '')}
            </h3>
          )
          if (line.trim() === '') return <div key={i} style={{ height: 14 }} />
          return (
            <p key={i} className="mono" style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--ink)', margin: '8px 0', textAlign: 'justify', hyphens: 'auto' }}>
              {line}
            </p>
          )
        })}
      </article>

      <Ad />

      <div style={{ marginTop: 28, marginBottom: 36 }}>
        <ShareButtons url={url} title={post.title} />
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="label" style={{ marginBottom: 10 }}>Keep Reading</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {related.map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div className="paper-card" style={{ padding: '14px 20px' }}>
                  <div className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)', marginBottom: 4 }}>{p.date}</div>
                  <div className="mono" style={{ fontSize: 13, color: 'var(--ink)', fontWeight: 600 }}>{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
