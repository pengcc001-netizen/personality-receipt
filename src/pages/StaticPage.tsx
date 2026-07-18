import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const PAGES: Record<string, { title: string; content: string }> = {
  about: {
    title: 'About',
    content: `## About Personality Receipt

I built this site because personality tests take themselves too seriously. They give you four letters and expect you to feel understood. I wanted to give people something different: a receipt. A piece of paper that says, in plain numbers, what your personality costs.

My name is Maya Chen. I have been fascinated by personality tests since I first took one in high school and got a result that felt simultaneously accurate and useless. "You are an INFJ." Okay. What does that cost me? What does it look like on a Tuesday? The test did not say.

### The Idea

The receipt format came from watching Receiptify go viral. People loved seeing their Spotify listening history as a receipt. The format was the appeal — familiar, visual, shareable. I thought: what if personality worked the same way?

### What You Will Find Here

- 8 personality types, each with a receipt
- A 12-question quiz that generates your receipt
- Each receipt has 7-10 line items with quantities and prices
- A receipt total that represents the "cost" of being you
- Strengths, weaknesses, and habits for each type
- A blog about personality psychology and receipt culture

### Why 8 Types (Not 16)

16 types is too many. Nobody remembers 16 categories. 8 is manageable. You can hold all 8 in your head and compare yourself to friends. The trade-off is less granularity, but the gain is memorability and shareability.

### Contact

Email: support@csskey.com`,
  },
  privacy: {
    title: 'Privacy Policy',
    content: `## Privacy Policy

**Last updated: July 2026**

### Information We Collect

Personality Receipt does not collect personal information. Your quiz answers are encoded in your browser and never sent to a server. We do not use accounts, logins, or tracking cookies.

### How the Quiz Works

When you take the personality quiz, your answers are converted to an encoded string stored in the URL. This allows you to share your result without us storing any data. The encoded string is processed entirely in your browser.

### Cookies

We do not set cookies directly. Google AdSense may set cookies as part of their ad-serving process.

### Google AdSense

We use Google AdSense to display ads. Google uses cookies to serve ads based on your visit.

### Contact

Questions? Email support@csskey.com`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

By using this site, you agree to these terms.

### Use of Service

This site is for entertainment. The personality types and receipt totals are not scientific measurements. They are creative interpretations of personality patterns.

### Intellectual Property

All content is owned by us. You may share links freely.

### Disclaimer

The site is provided "as is" without warranties. The personality types are intentionally subjective and humorous.

### Contact

Questions? Email support@csskey.com`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Found a bug or have a personality type suggestion? Email works best.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days.

### Submit a Type

Have an idea for a new personality type? Send it with a tagline, 3-5 receipt items, and a brief description.`,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `## Disclaimer

**Last updated: July 2026**

### Entertainment Purposes Only

Personality Receipt is an entertainment website. The personality types, receipt items, and totals are creative interpretations, not scientific measurements.

### Not Professional Advice

The content on this site is not psychological, medical, or professional advice. If you are concerned about your mental health, please consult a qualified professional.

### No Liability

We are not liable for any decisions made based on personality types or receipt totals. The framework is designed for humor and self-reflection, not for guiding real-world decisions.

### Contact

Questions? Email support@csskey.com`,
  },
}

export default function StaticPage({ page }: { page: string }) {
  const info = PAGES[page]
  if (!info) return (
      <div className="fade-in" style={{ maxWidth: 680, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <Helmet>
          <title>Page Not Found</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <h1 className="mono" style={{ fontSize: '1.5rem', marginBottom: 16 }}>404 - Page Not Found</h1>
        <p style={{ marginBottom: 24, color: 'var(--text-soft)' }}>The page you are looking for does not exist.</p>
        <Link to="/" style={{ color: 'var(--green)' }}>← Back to Home</Link>
      </div>
    )

  let isFirstParagraph = true

  const canonicalUrl = `https://receipt.csskey.com/${page}`
  const pageDescription = info.content.substring(0, 155).replace(/\n/g, ' ').replace(/[#*]/g, '').trim()

  return (
    <div className="fade-in">
      <Helmet>
        <title>{info.title} - Personality Receipt</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${info.title} - Personality Receipt`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `${info.title} - Personality Receipt`,
          "description": pageDescription,
          "url": canonicalUrl
        })}</script>
      </Helmet>

      <article>
        {info.content.split('\n').map((line, i) => {
          if (line.startsWith('## ')) return (
            <h1 key={i} className="mono" style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--ink)',
              marginBottom: 28, paddingBottom: 20, borderBottom: '1px dashed var(--line-dashed)',
              letterSpacing: '-0.02em', lineHeight: 1.15,
            }}>{line.replace('## ', '')}</h1>
          )
          if (line.startsWith('### ')) return (
            <h2 key={i} className="mono" style={{
              fontSize: '1.125rem', fontWeight: 700, color: 'var(--ink)',
              margin: '32px 0 12px', letterSpacing: '-0.01em',
            }}>{line.replace('### ', '')}</h2>
          )
          if (line.startsWith('**')) return (
            <p key={i} className="mono" style={{
              fontWeight: 700, color: 'var(--accent)', margin: '20px 0 8px',
              fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>{line.replace(/\*\*/g, '')}</p>
          )
          if (line.trim() === '') { isFirstParagraph = false; return <div key={i} style={{ height: 14 }} /> }
          if (line.startsWith('Email')) return (
            <p key={i} className="mono" style={{ margin: '6px 0', fontSize: 14, lineHeight: 1.7, color: 'var(--ink)' }}>
              <a href="mailto:support@csskey.com" style={{ color: 'var(--accent)' }}>{line.split(': ')[1]}</a>
            </p>
          )

          const dropcapClass = isFirstParagraph ? 'dropcap' : ''
          isFirstParagraph = false
          return (
            <p key={i} className={`mono ${dropcapClass}`} style={{
              fontSize: 14, lineHeight: 1.8, color: 'var(--ink)', margin: '8px 0',
              textAlign: 'justify', hyphens: 'auto',
            }}>{line}</p>
          )
        })}
      </article>
    </div>
  )
}
