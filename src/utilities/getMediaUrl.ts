type MediaRef = { url?: string | null; filename?: string | null } | null | undefined

/**
 * Resolves a media object to its public URL, preferring filename + CDN base
 * over the stored URL. Covers existing uploads with stale private R2 URLs.
 */
export const resolveMediaUrl = (media: MediaRef): string => {
  if (!media) return ''
  const pub = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, '')
  if (pub) {
    // Stored URL is a relative R2 key (prefix/filename) — prepend public base
    if (media.url && !media.url.startsWith('http')) return `${pub}/${media.url}`
    // Stored URL is already a full URL (uploaded after R2_PUBLIC_URL was set)
    if (media.url?.startsWith('http')) return media.url
    // Fallback to filename only
    if (media.filename) return `${pub}/${media.filename}`
  }
  return media.url || ''
}

/**
 * Resolves a media URL from either the stored URL or filename + public CDN base.
 *
 * When NEXT_PUBLIC_R2_PUBLIC_URL is set and a filename is provided, the URL is
 * always constructed from filename to cover existing uploads whose stored URL
 * may point to the private R2 endpoint (uploaded before generateFileURL was set).
 */
export const getMediaUrl = (
  url: string | null | undefined,
  cacheTag?: string | null,
  filename?: string | null,
): string => {
  if (!url && !filename) return ''

  let resolvedUrl = url || ''

  const publicR2 = process.env.NEXT_PUBLIC_R2_PUBLIC_URL?.replace(/\/$/, '')
  if (publicR2) {
    // Relative R2 key stored in url field (prefix/filename) — prepend public base
    if (url && !url.startsWith('http')) {
      resolvedUrl = `${publicR2}/${url}`
    } else if (!url?.startsWith('http') && filename) {
      resolvedUrl = `${publicR2}/${filename}`
    }
  }

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  return cacheTag ? `${resolvedUrl}?${cacheTag}` : resolvedUrl
}
