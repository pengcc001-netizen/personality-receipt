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

This privacy policy explains how Personality Receipt ("we", "us", or "our") handles information when you visit receipt.csskey.com (the "Site"). We are committed to being transparent about what we collect, how we use it, and the choices you have.

### Information We Collect

Personality Receipt does not collect personal information. We do not require accounts, logins, email addresses, or any form of registration. When you take the personality quiz, your answers are converted into an encoded string that is stored entirely in the URL of your browser. This encoded string is never transmitted to our server, never written to a database, and never associated with your identity or device. We do not collect your IP address for tracking purposes, and we do not build user profiles.

### How the Quiz Works

When you take the personality quiz, your answers are converted to an encoded string stored in the URL. This allows you to share your result by copying and pasting the link, without us storing any data on a server. The encoded string is processed entirely in your browser, meaning your answers remain on your device. If you close the page without sharing the link, your quiz results are gone.

### Cookies

We do not set cookies directly. The only cookies that may be set on your browser come from third-party advertising partners, specifically Google AdSense, as part of their ad-serving process. These cookies allow Google to display relevant ads and measure ad performance. You can review and opt out of personalized advertising at https://www.google.com/settings/ads. You can also clear cookies in your browser settings at any time.

### Google AdSense

We use Google AdSense to display ads on the Site. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet. You may learn more about how Google handles data and your privacy options by reviewing Google's Privacy Policy at https://policies.google.com/privacy. You may also opt out of personalized advertising by visiting Google Ads Settings.

### Data Security

All quiz data stays in your browser. Nothing is sent to a server, which means there is no central database that could be breached or leaked. The only data that leaves your device is what you voluntarily choose to share by copying a result URL. We cannot recover lost result links because we never store them.

### Children's Privacy

The Site is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. Because we do not collect personal information from any users, children are not at risk of having their data stored. If you believe a child has provided information through a shared result URL, please note that we have no way to access or delete that data, as it lives only in the link itself.

### Contact

If you have any questions about this Privacy Policy, please contact us at support@csskey.com. We will do our best to respond within a reasonable timeframe.`,
  },
  terms: {
    title: 'Terms of Service',
    content: `## Terms of Service

**Last updated: July 2026**

These Terms of Service ("Terms") govern your use of receipt.csskey.com (the "Site") operated by Personality Receipt ("we", "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you should not access or use the Site.

### Acceptance of Terms

By visiting, browsing, or otherwise using the Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and any future modifications. We may update these Terms from time to time without prior notice. Your continued use of the Site after any changes constitutes acceptance of the revised Terms. It is your responsibility to review these Terms periodically.

### Use of Service

This site is for entertainment purposes only. The personality types, receipt items, and receipt totals are creative interpretations of personality patterns, not scientific measurements, psychological assessments, or diagnostic tools. They are intentionally subjective and humorous. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the Site.

### Intellectual Property

All content on this Site, including but not limited to the personality types, receipt formats, blog posts, design, layout, and underlying code, is owned by us and protected by applicable intellectual property laws. You may share links to the Site freely. You may not copy, republish, reproduce, modify, distribute, or otherwise exploit the content without our prior written permission.

### Disclaimer of Warranties

The Site is provided "as is" and "as available", without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantees about the accuracy, reliability, completeness, or timeliness of the content. Your reliance on the Site is at your sole risk.

### Limitation of Liability

To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site. The framework is designed for humor and self-reflection, not for guiding real-world decisions about yourself or others.

### Contact

If you have any questions about these Terms, please contact us at support@csskey.com.`,
  },
  contact: {
    title: 'Contact',
    content: `## Contact

Found a bug, have a personality type suggestion, or want to share feedback about the site? Email works best. I read every message and try to respond personally when I can.

### Email

support@csskey.com

### Response Time

Most emails get a reply within two business days. If your message is complex or requires research on my end, it may take a little longer. I appreciate your patience.

### What to Include

To help me respond quickly, please include the following in your email: a clear description of the issue or suggestion, the page or feature it relates to, and any screenshots or examples if relevant. The more context you provide, the faster I can help.

### Bug Reports

If you found a bug, please include the browser and device you are using, the URL of the page where it happened, and a description of what you expected versus what actually happened. Steps to reproduce the issue are especially helpful.

### Feature Requests

Have an idea for a new personality type, receipt item, or quiz question? Send it along. I cannot promise to implement every suggestion, but I keep a running list and prioritize based on what would help the most users.

### Submit a Type

Have an idea for a new personality type? Send it with a tagline, 3-5 receipt items, and a brief description.`,
  },
  disclaimer: {
    title: 'Disclaimer',
    content: `## Disclaimer

**Last updated: July 2026**

### Entertainment Purposes Only

Personality Receipt is an entertainment website. The personality types, receipt items, and totals are creative interpretations, not scientific measurements. The framework was inspired by Receiptify and the broader culture of visualizing personal data in familiar formats. The categories are intentionally subjective, humorous, and playful in spirit.

### Not Professional Advice

The content on this site is not psychological, medical, legal, or professional advice. We are not licensed therapists, counselors, or consultants. If you are concerned about your mental health, self-image, or interpersonal relationships, please consult a qualified professional. The quiz and receipts on this site are not a substitute for professional guidance.

### No Liability

We are not liable for any decisions made based on personality types or receipt totals. The framework is designed for humor and self-reflection, not for guiding real-world decisions about yourself, your career, or your relationships. The "cost" figures on receipts are symbolic and carry no financial meaning.

### Cultural Context

The receipt format draws on the visual language of everyday transactions. It is a metaphor, not a measurement. The prices and quantities assigned to personality traits are arbitrary creative choices made for entertainment value.

### Contact

If you have questions about this disclaimer, please contact us at support@csskey.com.`,
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
