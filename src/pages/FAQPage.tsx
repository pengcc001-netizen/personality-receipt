import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Ad from '../components/Ad'

const FAQS = [
  {
    q: "What is a personality receipt?",
    a: "A personality receipt is a quiz result formatted as a store receipt. Instead of giving you a personality label like 'introvert' or 'INFP', it itemizes your personality traits as line items with quantities and prices. The format makes your personality feel tangible, measurable, and shareable."
  },
  {
    q: "How does the personality receipt quiz work?",
    a: "You answer 12 questions about your daily behavior — how you handle social situations, stress, decision-making, and downtime. Based on your answers, we calculate which of 8 personality types best matches you and generate a receipt with specific line items representing your tendencies."
  },
  {
    q: "Is the personality receipt accurate?",
    a: "The receipt is based on personality patterns drawn from real behavioral psychology, but it is designed for entertainment. It captures genuine tendencies — overthinking, people-pleasing, spontaneity — but it is not a clinical assessment. Use it for self-reflection and social sharing, not for life decisions."
  },
  {
    q: "Can I share my personality receipt?",
    a: "Yes. After completing the quiz, you get a shareable URL that encodes your answers. You can share this link on social media, and anyone who opens it will see your receipt. The encoded data stays in the URL — we do not store any personal information."
  },
  {
    q: "What are the 8 personality types?",
    a: "The 8 types are: The Overthinker, Golden Retriever, Swiss Army Knife, Storm Cloud, Disco Ball, Spreadsheet, Wildcard, and Cozy Blanket. Each represents a distinct pattern of behaviors, strengths, and tendencies. You can browse all types on the Types page."
  },
  {
    q: "How is this different from MBTI or Big Five?",
    a: "MBTI gives you a 4-letter label. Big Five gives you percentile scores. A personality receipt gives you a bill — it itemizes your behaviors with quantities and prices. The format is more engaging, more specific, and more shareable. It focuses on observable behavior rather than abstract traits."
  },
  {
    q: "Can my receipt change over time?",
    a: "Yes. Your receipt is based on your current behaviors, which shift over time. Take the quiz again in a few months and you may see different line items, different quantities, or even a different type. The receipt is a snapshot, not a permanent label."
  },
  {
    q: "Is my data stored?",
    a: "No. Your quiz answers are encoded directly into the shareable URL. We do not use accounts, logins, or databases. The quiz data never leaves your browser. Read our Privacy Policy for details."
  },
  {
    q: "Why does my receipt have a 'total'?",
    a: "The total represents the emotional cost of being you — the energy you spend navigating the world with your particular personality. A high total does not mean you are broken. It means you invest a lot of energy in self-awareness, social navigation, or emotional processing."
  },
  {
    q: "Can I compare my receipt with friends?",
    a: "Yes. Share your receipt URL with friends and compare line items. The comparison is designed for humor and connection — whose anxiety costs more? Who has more instances of 'Saying Yes When You Mean No'? Comparing receipts is the most fun part of the format."
  },
]

export default function FAQPage() {
  return (
    <div className="fade-in">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | Personality Receipt</title>
        <meta name="description" content="Answers to common questions about personality receipts, the quiz, how it works, privacy, and sharing. 10 questions answered." />
        <meta property="og:title" content="FAQ - Frequently Asked Questions | Personality Receipt" />
        <meta property="og:description" content="Answers to common questions about personality receipts, the quiz, how it works, privacy, and sharing. 10 questions answered." />
        <meta property="og:url" content="https://receipt.csskey.com/faq" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}</script>
      </Helmet>

      <h2 className="label" style={{ marginBottom: 8 }}>Frequently Asked</h2>
      <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-mono)' }}>
        Questions & Answers
      </h1>
      <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 560, marginBottom: 32, fontFamily: 'var(--font-mono)' }}>
        Everything you need to know about personality receipts, the quiz, sharing, and privacy.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
        {FAQS.map((faq, i) => (
          <div key={i} className="receipt-card" style={{ padding: '24px 28px' }}>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--ink)', marginBottom: 8, fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>
              {faq.q}
            </h2>
            <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.7, fontFamily: 'var(--font-mono)' }}>
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <Ad />

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <Link to="/" className="btn btn-stamp">Take the Quiz →</Link>
      </div>
    </div>
  )
}
