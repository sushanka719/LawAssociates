'use client'

import { ArrowRight } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadInsight } from '../types/payload'

interface InsightsProps {
  insights?: PayloadInsight[] | null
}

function formatDate(dateStr: string, lang: 'en' | 'ne') {
  try {
    return new Date(dateStr).toLocaleDateString(lang === 'ne' ? 'ne-NP' : 'en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export function Insights({ insights }: InsightsProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const hasData = insights !== null && insights !== undefined && insights.length > 0
  const featured = hasData ? (insights!.find((i) => i.featured) || null) : null
  const list = hasData ? insights!.filter((i) => !i.featured).slice(0, 4) : null

  return (
    <section className="la-section" id="insights" data-screen-label="Insights">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">{t.insights.eyebrow}</p>
            <h2 className="display d-lg">{t.insights.headline}</h2>
          </div>
          <p className="lead reveal d1">{t.insights.lead}</p>
        </div>

        <div className="insights-layout">
          <article className="feat-article reveal">
            <div className="feat-article-img">
              {featured?.coverImage?.url ? (
                <img
                  src={featured.coverImage.url}
                  alt={featured.coverImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                  alt="Business meeting — merger review article"
                  style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block', borderRadius: 12 }}
                />
              )}
            </div>
            <div className="art-meta">
              <span className="cat">
                {featured?.category?.title ?? t.insights.defaultCategory}
              </span>
              <span className="dot" aria-hidden="true" />
              <span>{featured ? formatDate(featured.publishedDate, language) : t.insights.defaultDate}</span>
              <span className="dot" aria-hidden="true" />
              <span>{featured?.readTime ? `${featured.readTime} ${t.insights.minRead}` : t.insights.defaultReadTime}</span>
            </div>
            <h3>
              {featured?.title ?? t.insights.defaultFeaturedTitle}
            </h3>
            <p>
              {featured?.excerpt ?? t.insights.defaultFeaturedExcerpt}
            </p>
            <a href="#" className="linkarrow" style={{ marginTop: 18 }}>
              {t.insights.readMore} <ArrowRight />
            </a>
          </article>

          <div className="art-list reveal d1">
            {list && list.length > 0
              ? list.map((article) => (
                  <a key={String(article.id)} className="art-row" href="#">
                    <div className="art-meta">
                      <span className="cat">{article.category?.title ?? ''}</span>
                      <span className="dot" aria-hidden="true" />
                      <span>{article.readTime ? `${article.readTime} ${t.insights.minRead}` : ''}</span>
                    </div>
                    <h4>{article.title}</h4>
                  </a>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  )
}
