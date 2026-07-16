import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { quizQuestions } from '../data/questions'
import { personalityTypes } from '../data/personalityTypes'
import Ad from '../components/Ad'
import ShareButtons from '../components/ShareButtons'

type Phase = 'intro' | 'quiz' | 'result'

export default function Home() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const navigate = useNavigate()

  const handleAnswer = (typeSlug: string) => {
    const newAnswers = [...answers, typeSlug]
    setAnswers(newAnswers)

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      // Count type occurrences
      const counts: Record<string, number> = {}
      newAnswers.forEach(slug => { counts[slug] = (counts[slug] || 0) + 1 })
      const encoded = btoa(newAnswers.join(','))
      window.history.replaceState(null, '', `/r/${encoded}`)
      setPhase('result')
    }
  }

  const resetQuiz = () => {
    setPhase('intro')
    setCurrentQ(0)
    setAnswers([])
    navigate('/')
  }

  // ---------- INTRO ----------
  if (phase === 'intro') {
    return (
      <div className="fade-in">
        <Helmet>
          <title>Personality Receipt - What Type of Person Are You? [2026]</title>
          <meta name="description" content="Take a personality test and get your result as a receipt. 8 brutally honest personality types. Free, no sign-up. Share your personality receipt." />
          <meta property="og:title" content="Personality Receipt - Your Personality, Itemized" />
          <meta property="og:description" content="Get your personality receipt. 8 types, 30+ careers, relationship dynamics, and more." />
          <meta property="og:url" content="https://receipt.csskey.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Personality Receipt",
            "url": "https://receipt.csskey.com",
            "applicationCategory": "EntertainmentApplication",
            "operatingSystem": "Any",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Take a personality test and get your result as a receipt. 8 brutally honest personality types."
          })}</script>
        </Helmet>

        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '20px 0 48px' }}>
          <h2 className="label" style={{ marginBottom: 16 }}>Personality Test · Receipt Format</h2>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            marginBottom: 20,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            What Type of<br />Person Are You?
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: 'var(--ink-soft)',
            maxWidth: 480,
            margin: '0 auto 32px',
            lineHeight: 1.7,
            fontFamily: 'var(--font-mono)',
          }}>
            Answer 12 questions. Get your personality as a receipt. See exactly what your traits cost. 8 brutally honest types, each with a receipt total.
          </p>
          <button onClick={() => setPhase('quiz')} className="btn btn-stamp" style={{ padding: '14px 40px', fontSize: 13 }}>
            Get My Receipt →
          </button>
          <div style={{ marginTop: 12 }}>
            <span className="mono" style={{ color: 'var(--ink-faint)', fontSize: 11 }}>
              12 questions · ~2 minutes · Free, no sign-up
            </span>
          </div>
        </section>

        {/* Sample receipt preview */}
        <section style={{ marginBottom: 48 }}>
          <div className="receipt" style={{ maxWidth: 400, margin: '0 auto', padding: '32px 28px 40px' }}>
            <div className="receipt-header" style={{ marginBottom: 4 }}>PERSONALITY RECEIPT</div>
            <div className="mono" style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-faint)', marginBottom: 12 }}>
              DATE: 2026-07-14 · TYPE: SAMPLE
            </div>
            <hr className="dashed-line" />
            <div className="receipt-line"><span className="label-text">Overthinking</span><span className="leader"></span><span className="price">47x $4.70</span></div>
            <div className="receipt-line"><span className="label-text">3 AM Existential Dread</span><span className="leader"></span><span className="price">1x $13.00</span></div>
            <div className="receipt-line"><span className="label-text">Re-reading texts for tone</span><span className="leader"></span><span className="price">23x $1.50</span></div>
            <div className="receipt-line"><span className="label-text">Spiraling about email</span><span className="leader"></span><span className="price">8x $5.20</span></div>
            <hr className="dashed-line" />
            <div className="receipt-line" style={{ fontWeight: 700, fontSize: '1rem' }}>
              <span className="label-text">TOTAL</span><span className="leader"></span><span className="price" style={{ color: 'var(--accent)' }}>$470.60</span>
            </div>
            <hr className="dashed-line" />
            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>🧠 THE OVERTHINKER</div>
              <div className="hand" style={{ fontSize: 16, color: 'var(--accent)', marginTop: 8 }}>thank you for being you *</div>
            </div>
          </div>
        </section>

        <Ad />

        {/* Types preview */}
        <section>
          <h2 className="label" style={{ marginBottom: 8 }}>8 Personality Types</h2>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.75rem)', marginBottom: 24 }}>Which One Are You?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {personalityTypes.map(t => (
              <Link key={t.slug} to={`/types/${t.slug}`} style={{ textDecoration: 'none' }}>
                <div className="paper-card" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: '1.75rem' }}>{t.emoji}</span>
                    <div>
                      <div className="mono" style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div>
                      <div className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>TOTAL: ${t.receiptTotal.toFixed(2)}</div>
                    </div>
                  </div>
                  <p className="mono" style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{t.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    )
  }

  // ---------- QUIZ ----------
  if (phase === 'quiz') {
    const q = quizQuestions[currentQ]
    const progress = ((currentQ + 1) / quizQuestions.length) * 100

    return (
      <div className="fade-in">
        <Helmet>
          <title>Personality Quiz - Question {currentQ + 1} of {quizQuestions.length}</title>
          <meta name="description" content={`Answer question ${currentQ + 1} to get your personality receipt.`} />
        </Helmet>

        {/* Progress */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: '0.1em' }}>
              Q{currentQ + 1} / {quizQuestions.length}
            </span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--accent)' }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{ height: 3, background: 'var(--bg-shade)', border: '1px solid var(--line)' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--accent)',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>

        {/* Question */}
        <h2 className="mono" style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: 700,
          lineHeight: 1.4,
          marginBottom: 28,
          color: 'var(--ink)',
        }}>
          {q.question}
        </h2>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt.typeSlug)}
              className="paper-card"
              style={{
                padding: '18px 22px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                color: 'var(--ink)',
                fontSize: 14,
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.5,
                border: '1px solid var(--line)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'var(--accent-soft)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--line)'
                e.currentTarget.style.background = 'var(--bg-paper)'
              }}
            >
              <span className="mono" style={{ color: 'var(--accent)', fontWeight: 700, marginRight: 12 }}>
                {String.fromCharCode(65 + i)}
              </span>
              {opt.text}
            </button>
          ))}
        </div>

        {currentQ > 0 && (
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <button
              onClick={() => { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)) }}
              className="mono"
              style={{ background: 'none', border: 'none', color: 'var(--ink-faint)', cursor: 'pointer', fontSize: 12 }}
            >
              ← Previous
            </button>
          </div>
        )}
      </div>
    )
  }

  // ---------- RESULT ----------
  if (phase === 'result') {
    const counts: Record<string, number> = {}
    answers.forEach(slug => { counts[slug] = (counts[slug] || 0) + 1 })
    const winnerSlug = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
    const type = personalityTypes.find(t => t.slug === winnerSlug)!

    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://receipt.csskey.com'

    return (
      <div className="fade-in">
        <Helmet>
          <title>I am {type.name} - Personality Receipt (${type.receiptTotal.toFixed(2)})</title>
          <meta name="description" content={`My personality receipt: ${type.name}. Total: $${type.receiptTotal.toFixed(2)}. ${type.tagline}`} />
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>

        {/* The Receipt */}
        <div className="receipt" style={{ padding: '40px 32px 48px', marginBottom: 32 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <div className="receipt-header" style={{ fontSize: 16, marginBottom: 4 }}>PERSONALITY RECEIPT</div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
              DATE: {new Date().toISOString().split('T')[0]} · ID: {Math.random().toString(36).substring(2, 8).toUpperCase()}
            </div>
          </div>

          <hr className="dashed-line" />

          {/* Type name */}
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 8 }}>{type.emoji}</div>
            <div className="mono" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--ink)' }}>{type.name}</div>
            <div className="hand" style={{ fontSize: 18, color: 'var(--accent)', marginTop: 4 }}>{type.tagline}</div>
          </div>

          <hr className="dashed-line" />

          {/* Receipt items */}
          <div style={{ margin: '16px 0' }}>
            <div className="receipt-header" style={{ textAlign: 'left', marginBottom: 8, fontSize: 11 }}>ITEM</div>
            {type.receiptItems.map((item, i) => (
              <div key={i} className="receipt-line print-line" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="label-text">{item.label}</span>
                <span className="leader"></span>
                <span className="price">{item.qty}x ${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="double-line" />

          {/* Total */}
          <div className="receipt-line" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
            <span className="label-text">TOTAL</span>
            <span className="leader"></span>
            <span className="price" style={{ color: 'var(--accent)', fontSize: '1.25rem' }}>${type.receiptTotal.toFixed(2)}</span>
          </div>

          <hr className="dashed-line" />

          {/* Strengths/weaknesses summary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, margin: '16px 0' }}>
            <div>
              <h2 className="label" style={{ color: 'var(--highlight)', marginBottom: 8 }}>Strengths</h2>
              {type.strengths.map((s, i) => (
                <div key={i} className="mono" style={{ fontSize: 12, color: 'var(--ink-soft)', padding: '2px 0' }}>
                  + {s}
                </div>
              ))}
            </div>
            <div>
              <h2 className="label" style={{ color: 'var(--accent)', marginBottom: 8 }}>Weaknesses</h2>
              {type.weaknesses.map((w, i) => (
                <div key={i} className="mono" style={{ fontSize: 12, color: 'var(--ink-soft)', padding: '2px 0' }}>
                  − {w}
                </div>
              ))}
            </div>
          </div>

          <hr className="dashed-line" />

          {/* Footer */}
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-faint)' }}>
              PERSONALITY TYPE: {type.name.toUpperCase()}
            </div>
            <div className="hand" style={{ fontSize: 20, color: 'var(--accent)', marginTop: 12 }}>
              thank you for being you *
            </div>
            <div className="mono" style={{ fontSize: 9, color: 'var(--ink-light)', marginTop: 8 }}>
              · · · · · · · · · · · · · ·
            </div>
          </div>
        </div>

        {/* Share */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 className="label" style={{ marginBottom: 12 }}>Share Your Receipt</h2>
          <ShareButtons url={shareUrl} title={`I'm ${type.name}! My personality receipt total: $${type.receiptTotal.toFixed(2)}. Take yours:`} />
        </div>

        <Ad />

        {/* Retake */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <button onClick={resetQuiz} className="btn btn-ghost">← Retake the Test</button>
        </div>

        {/* Explore */}
        <div style={{ textAlign: 'center' }}>
          <h2 className="label" style={{ marginBottom: 12 }}>Explore More</h2>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/types" className="btn btn-outline" style={{ fontSize: 11 }}>All 8 Types</Link>
            <Link to="/compare" className="btn btn-outline" style={{ fontSize: 11 }}>Compare Types</Link>
            <Link to="/blog/the-8-personality-types-explained" className="btn btn-outline" style={{ fontSize: 11 }}>Learn More</Link>
          </div>
        </div>
      </div>
    )
  }

  return null
}
