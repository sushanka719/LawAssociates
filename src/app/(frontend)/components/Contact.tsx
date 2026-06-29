'use client'

import { AlertCircle, CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useLanguage } from '@/providers/Language'
import { getTranslations } from '../translations'
import type { PayloadSiteSettings } from '../types/payload'

interface FormValues {
  name: string
  email: string
  phone?: string
  practiceArea?: string
  message: string
  _honeypot?: string
}

interface ContactProps {
  siteSettings?: PayloadSiteSettings | null
}

export function Contact({ siteSettings }: ContactProps) {
  const { language } = useLanguage()
  const t = getTranslations(language)

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { register, handleSubmit, reset, setError, formState: { errors, isSubmitted } } = useForm<FormValues>({
    mode: 'onTouched',
  })

  const address =
    [siteSettings?.addressLine1, siteSettings?.addressLine2].filter(Boolean).join('\n') ||
    '400 Park Avenue, 28th Floor\nNew York, NY 10022'
  const phone = siteSettings?.phone || '(212) 555-1840'
  const email = siteSettings?.email || 'counsel@aureliuslegal.com'
  const hours =
    [siteSettings?.officeHours, siteSettings?.officeHoursNote].filter(Boolean).join('\n') ||
    'Mon–Fri · 8:30am – 6:00pm\nEvenings by appointment'
  const mapImage = siteSettings?.officeMapImage

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    try {
      const body = { ...data }
      if (!body.practiceArea) delete body.practiceArea
      const res = await fetch('/api/consultation-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
      reset()
    } catch {
      setError('root', { message: t.contact.errorMsg })
    } finally {
      setSubmitting(false)
    }
  }

  const infoRows = [
    { icon: MapPin, key: t.contact.addressLabel, val: address },
    { icon: Phone, key: t.contact.phoneLabel, val: phone },
    { icon: Mail, key: t.contact.emailLabel, val: email },
    { icon: Clock, key: t.contact.hoursLabel, val: hours },
  ]

  return (
    <section className="la-section subtle-bg" id="contact" data-screen-label="Contact">
      <div className="la-container">
        <div className="sec-split">
          <div className="reveal">
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 className="display d-lg">{t.contact.headline}</h2>
          </div>
          <p className="lead reveal d1">{t.contact.lead}</p>
        </div>

        <div className="contact-layout">
          <form className="reveal" onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" {...register('_honeypot')} />
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-name">{t.contact.labelName} <span className="req">{t.contact.required}</span></label>
                <input
                  className={`la-input${errors.name ? ' is-invalid' : ''}`}
                  id="f-name"
                  type="text"
                  placeholder={t.contact.placeholderName}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'err-name' : undefined}
                  {...register('name', {
                    required: t.contact.errNameRequired,
                    minLength: { value: 2, message: t.contact.errNameMin },
                    maxLength: { value: 100, message: t.contact.errNameMax },
                  })}
                />
                {errors.name && (
                  <p className="field-error" id="err-name" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="field">
                <label htmlFor="f-email">{t.contact.labelEmail} <span className="req">{t.contact.required}</span></label>
                <input
                  className={`la-input${errors.email ? ' is-invalid' : ''}`}
                  id="f-email"
                  type="email"
                  placeholder={t.contact.placeholderEmail}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'err-email' : undefined}
                  {...register('email', {
                    required: t.contact.errEmailRequired,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: t.contact.errEmailPattern,
                    },
                  })}
                />
                {errors.email && (
                  <p className="field-error" id="err-email" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-phone">{t.contact.labelPhone}</label>
                <input
                  className={`la-input${errors.phone ? ' is-invalid' : ''}`}
                  id="f-phone"
                  type="tel"
                  placeholder={t.contact.placeholderPhone}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'err-phone' : undefined}
                  {...register('phone', {
                    pattern: {
                      value: /^[\d\s\-+().]{7,20}$/,
                      message: t.contact.errPhonePattern,
                    },
                  })}
                />
                {errors.phone && (
                  <p className="field-error" id="err-phone" role="alert">
                    <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="field">
                <label htmlFor="f-area">{t.contact.labelArea}</label>
                <select className="la-select" id="f-area" {...register('practiceArea')}>
                  <option value="">{t.contact.selectPlaceholder}</option>
                  {t.contact.areas.map((a) => (
                    <option key={a.value} value={a.value}>{a.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="f-msg">{t.contact.labelMessage} <span className="req">{t.contact.required}</span></label>
              <textarea
                className={`la-textarea${errors.message ? ' is-invalid' : ''}`}
                id="f-msg"
                placeholder={t.contact.placeholderMessage}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'err-msg' : undefined}
                {...register('message', {
                  required: t.contact.errMessageRequired,
                  minLength: { value: 10, message: language === 'ne' ? 'कम्तिमा १० अक्षर लेख्नुहोस्।' : 'Please provide at least 10 characters.' },
                  maxLength: { value: 5000, message: language === 'ne' ? 'सन्देश ५,००० अक्षर वा कम हुनुपर्छ।' : 'Message must be 5,000 characters or fewer.' },
                })}
              />
              {errors.message && (
                <p className="field-error" id="err-msg" role="alert">
                  <AlertCircle style={{ width: 13, height: 13, flexShrink: 0 }} />
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={submitting}
            >
              {submitting ? t.contact.submittingBtn : t.contact.submitBtn}
            </button>
            <p className="form-note">
              {language === 'ne'
                ? 'यो फारम पेश गर्नाले वकिल–ग्राहक सम्बन्ध सिर्जना गर्दैन। कृपया गोपनीय जानकारी समावेश नगर्नुहोस्।'
                : 'Submitting this form does not create an attorney–client relationship. Please do not include confidential information.'}
            </p>
            {errors.root && (
              <p className="field-error" style={{ marginTop: 10, fontSize: 14 }} role="alert">
                <AlertCircle style={{ width: 14, height: 14, flexShrink: 0 }} />
                {errors.root.message}
              </p>
            )}
            {isSubmitted && Object.keys(errors).filter(k => k !== 'root').length > 0 && !errors.root && (
              <p className="field-error" style={{ marginTop: 10, fontSize: 14 }} role="alert">
                <AlertCircle style={{ width: 14, height: 14, flexShrink: 0 }} />
                {language === 'ne' ? 'माथिका त्रुटिहरू सच्याएर पुनः पेश गर्नुहोस्।' : 'Please fix the errors above before submitting.'}
              </p>
            )}
            <div className={`form-ok${submitted ? ' show' : ''}`} role="status">
              <CheckCircle2 style={{ width: 18, height: 18, color: 'var(--gold)' }} />
              {t.contact.successBody}
            </div>
          </form>

          <aside className="contact-aside reveal d1">
            <div className="contact-card">
              <div className="contact-map">
                {mapImage?.url ? (
                  <img
                    src={mapImage.url}
                    alt={mapImage.alt || 'Office location'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src="https://images.unsplash.com/photo-1546422401-cdfefd070342?auto=format&fit=crop&w=900&q=80"
                    alt="400 Park Avenue, New York"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                )}
              </div>
              <div className="contact-rows">
                {infoRows.map(({ icon: Icon, key, val }) => (
                  <div key={key} className="crow">
                    <span className="ci"><Icon /></span>
                    <div>
                      <div className="ck">{key}</div>
                      <div className="cv" style={{ whiteSpace: 'pre-line' }}>{val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
