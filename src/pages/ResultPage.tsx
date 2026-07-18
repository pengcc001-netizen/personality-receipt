import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { personalityTypes } from '../data/personalityTypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

export default function ResultPage() {
  const { code } = useParams<{ code: string }>()
  const [typeSlug, setTypeSlug] = useState<string | null>(null)

  useEffect(() => {
    try {
      const std = (code || '').replace(/-/g, '+').replace(/_/g, '/')
      const padded = std + '='.repeat((4 - std.length % 4) % 4)
      const decoded = atob(padded)
      const slugs = decoded.split(',')
      if (slugs.length === quizQuestions.length) {
        const counts: Record<string, number> = {}
        slugs.forEach(slug => { counts[slug] = (counts[slug] || 0) + 1 })
        const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
        setTypeSlug(winner)
      }
    } catch {
      setTypeSlug(null)
    }
  }, [code])

  if (!typeSlug) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <Helmet><meta name="robots" content="noindex,nofollow" /><title>404 - Not Found | Personality Receipt</title></Helmet>
        <p className="mono" style={{ color: 'var(--ink-soft)' }}>Invalid receipt link.</p>
        <Link to="/" className="btn btn-stamp" style={{ marginTop: 16 }}>Take the Test</Link>
      </div>
    )
  }

  const type = personalityTypes.find(t => t.slug === typeSlug)!
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://receipt.csskey.com'

  return (
    <div className="fade-in">
      <Helmet>
        <title>{type.name} - Personality Receipt (${type.receiptTotal.toFixed(2)})</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content={`My Personality Receipt: ${type.name} ($${type.receiptTotal.toFixed(2)})`} />
        <meta property="og:description" content={type.tagline} />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`My Personality Receipt: ${type.name}`} />
        <meta name="twitter:description" content={type.tagline} />
      </Helmet>

      {/* The Receipt */}
      <div className="receipt" style={{ padding: '36px 28px 44px', marginBottom: 32 }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div className="receipt-header" style={{ fontSize: 14, marginBottom: 4 }}>PERSONALITY RECEIPT</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-faint)' }}>SHARED RESULT</div>
        </div>

        <hr className="dashed-line" />

        <div style={{ textAlign: 'center', margin: '16px 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: 8 }}>{type.emoji}</div>
          <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>{type.name}</div>
          <div className="hand" style={{ fontSize: 18, color: 'var(--accent)', marginTop: 4 }}>{type.tagline}</div>
        </div>

        <hr className="dashed-line" />

        <div style={{ margin: '16px 0' }}>
          {type.receiptItems.map((item, i) => (
            <div key={i} className="receipt-line">
              <span className="label-text">{item.label}</span>
              <span className="leader"></span>
              <span className="price">{item.qty}x ${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="double-line" />

        <div className="receipt-line" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
          <span className="label-text">TOTAL</span>
          <span className="leader"></span>
          <span className="price" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>${type.receiptTotal.toFixed(2)}</span>
        </div>

        <hr className="dashed-line" />

        <div style={{ textAlign: 'center', marginTop: 12 }}>
          <div className="hand" style={{ fontSize: 18, color: 'var(--accent)' }}>thank you for being you *</div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <ShareButtons url={shareUrl} title={`I'm ${type.name}! Receipt total: $${type.receiptTotal.toFixed(2)}. Take yours:`} />
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Link to="/" className="btn btn-stamp">Get Your Own Receipt →/Link>
      </div>
    </div>
  )
}
