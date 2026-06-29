'use client'

import { ArrowRight } from 'lucide-react'

import { useLanguage } from '@/providers/Language'
import { resolveMediaUrl } from '@/utilities/getMediaUrl'
import { getTranslations } from '../translations'
import type { PayloadSiteSettings } from '../types/payload'

interface HeroProps {
  siteSettings?: PayloadSiteSettings | null
}

function renderHeadline(text: string, emphasis: string) {
  const idx = text.toLowerCase().indexOf(emphasis.toLowerCase())
  if (idx === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, idx)}
      <em>{text.slice(idx, idx + emphasis.length)}</em>
      {text.slice(idx + emphasis.length)}
    </>
  )
}

export function Hero({ siteSettings }: HeroProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const eyebrow = language === 'ne' ? t.hero.eyebrow : (siteSettings?.heroEyebrow || t.hero.eyebrow)
  const headlineText = language === 'ne' ? t.hero.headline : (siteSettings?.heroHeadline || t.hero.headline)
  const headlineEmphasis = language === 'ne' ? t.hero.headlineEmphasis : (siteSettings?.heroHeadlineEmphasis || t.hero.headlineEmphasis)
  const lead = language === 'ne' ? t.hero.lead : (siteSettings?.heroLead || t.hero.lead)
  const ctaPrimary = language === 'ne' ? t.hero.ctaPrimary : (siteSettings?.heroCtaPrimary || t.hero.ctaPrimary)
  const ctaSecondary = language === 'ne' ? t.hero.ctaSecondary : (siteSettings?.heroCtaSecondary || t.hero.ctaSecondary)
  const statSatisfaction = language === 'ne' ? t.hero.statSatisfaction : (siteSettings?.heroStatSatisfaction || t.hero.statSatisfaction)
  const statRecovered = language === 'ne' ? t.hero.statRecovered : (siteSettings?.statRecovered || t.hero.statRecovered)
  const statYears = language === 'ne' ? t.hero.statYears : (siteSettings?.statYears || t.hero.statYears)
  const statCases = language === 'ne' ? t.hero.statCases : (siteSettings?.statCases || t.hero.statCases)
  const statYearsLabel = language === 'ne' ? t.hero.statYearsLabel : t.hero.statYearsLabel
  const statCasesLabel = language === 'ne' ? t.hero.statCasesLabel : t.hero.statCasesLabel
  const statRecoveredLabel = language === 'ne' ? t.hero.statRecoveredLabel : t.hero.statRecoveredLabel
  const statSatisfactionLabel = language === 'ne' ? t.hero.statSatisfactionLabel : t.hero.statSatisfactionLabel

  return (
    <section className="hero la-section" data-screen-label="Hero">
      <div className="hero-bg">
        {siteSettings?.heroBgImage ? (
          <img
            src={resolveMediaUrl(siteSettings.heroBgImage)}
            alt={siteSettings.heroBgImage.alt || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1920&q=80"
            alt="Law office interior"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        )}
      </div>
      <div className="la-container">
        <div className="hero-grid">
          <div className="hero-col-text reveal">
            <p className="eyebrow hero-eyebrow">{eyebrow}</p>
            <h1 className="display">
              {renderHeadline(headlineText, headlineEmphasis)}
            </h1>
            <p className="lead measure">{lead}</p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                {ctaPrimary} <ArrowRight />
              </a>
              <a href="#practice" className="btn btn-outline">{ctaSecondary}</a>
            </div>
            <div className="hero-trustline">
              <span><b>{statYears}</b>{statYearsLabel}</span>
              <span className="sep" aria-hidden="true" />
              <span><b>{statCases}</b>{statCasesLabel}</span>
              <span className="sep" aria-hidden="true" />
              <span><b>{statRecovered}</b>{statRecoveredLabel}</span>
            </div>
          </div>
          <div className="hero-media reveal d1" aria-hidden="true">
            <span className="frame" />
            <div className="hero-portrait">
              {siteSettings?.heroPortraitImage ? (
                <img
                  src={resolveMediaUrl(siteSettings.heroPortraitImage)}
                  alt={siteSettings.heroPortraitImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Senior Partner"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}
            </div>
            <div className="hero-plate">
              <span className="big">{statSatisfaction}</span>
              <span className="vr" />
              <span className="lab">{statSatisfactionLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
