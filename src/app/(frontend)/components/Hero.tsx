import { ArrowRight } from 'lucide-react'

import type { PayloadSiteSettings } from '../types/payload'
import { FIRM_TAGLINE } from '../constants/content'
import { ImageSlot } from './ImageSlot'

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
  const eyebrow = siteSettings?.heroEyebrow || FIRM_TAGLINE
  const headlineText =
    siteSettings?.heroHeadline ||
    'Strategic counsel for the matters that define your future.'
  const headlineEmphasis = siteSettings?.heroHeadlineEmphasis || 'define'
  const lead =
    siteSettings?.heroLead ||
    'For more than two decades, Aurelius Legal Partners has guided corporations, founders, and families through their most consequential legal challenges — pairing rigorous strategy with the discretion and resolve our clients depend on.'
  const ctaPrimary = siteSettings?.heroCtaPrimary || 'Schedule a Consultation'
  const ctaSecondary = siteSettings?.heroCtaSecondary || 'Explore Practice Areas'
  const statSatisfaction = siteSettings?.heroStatSatisfaction || '98%'
  const statRecovered = siteSettings?.statRecovered || '$1.2B'
  const statYears = siteSettings?.statYears || '20+'
  const statCases = siteSettings?.statCases || '500+'

  return (
    <section className="hero la-section" data-screen-label="Hero">
      <div className="hero-bg">
        {siteSettings?.heroBgImage?.url ? (
          <img
            src={siteSettings.heroBgImage.url}
            alt={siteSettings.heroBgImage.alt || ''}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <ImageSlot placeholder="Drop a courtroom / office image" />
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
              <span><b>{statYears}</b>Years of practice</span>
              <span className="sep" aria-hidden="true" />
              <span><b>{statCases}</b>Matters resolved</span>
              <span className="sep" aria-hidden="true" />
              <span><b>{statRecovered}</b>Recovered &amp; protected</span>
            </div>
          </div>
          <div className="hero-media reveal d1" aria-hidden="true">
            <span className="frame" />
            <div className="hero-portrait">
              {siteSettings?.heroPortraitImage?.url ? (
                <img
                  src={siteSettings.heroPortraitImage.url}
                  alt={siteSettings.heroPortraitImage.alt || ''}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <ImageSlot placeholder="Drop an attorney portrait" />
              )}
            </div>
            <div className="hero-plate">
              <span className="big">{statSatisfaction}</span>
              <span className="vr" />
              <span className="lab">Client satisfaction across representations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
