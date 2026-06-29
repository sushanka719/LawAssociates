type MediaRef = { url?: string | null; filename?: string | null } | null | undefined

/**
 * Resolves a media object to its public URL, preferring filename + CDN base
 * over the stored URL. Covers existing uploads with stale private R2 URLs.
 */
export const resolveMediaUrl = (media: MediaRef): string => {
  if (!media) return ''
  const pub = process.env.NEXT_PUBLIC_R2_PUBLIC_URL
  if (pub && media.filename) return `${pub}/${media.filename}`
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

  const publicR2 = process.env.NEXT_PUBLIC_R2_PUBLIC_URL
  if (publicR2 && filename) {
    resolvedUrl = `${publicR2}/${filename}`
  }

  if (cacheTag && cacheTag !== '') {
    cacheTag = encodeURIComponent(cacheTag)
  }

  return cacheTag ? `${resolvedUrl}?${cacheTag}` : resolvedUrl
}
