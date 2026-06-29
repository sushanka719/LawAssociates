import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)
import { redirects } from './redirects'

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.__NEXT_PRIVATE_ORIGIN || 'http://localhost:3000'

const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || ''
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID || ''

function buildR2RemotePatterns() {
  const patterns: { hostname: string; protocol: 'https' }[] = []

  // R2 public bucket URL (pub-xxxx.r2.dev or custom domain)
  if (R2_PUBLIC_URL) {
    try {
      const url = new URL(R2_PUBLIC_URL)
      patterns.push({ hostname: url.hostname, protocol: 'https' })
    } catch {}
  }

  // R2 storage endpoint (used when no public URL is set)
  if (R2_ACCOUNT_ID) {
    patterns.push({
      hostname: `${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      protocol: 'https',
    })
  }

  return patterns
}

const nextConfig: NextConfig = {
  // Temporarily required on Windows until Next.js fixes Turbopack Sass resolution.
  // See: https://github.com/vercel/next.js/issues/86431
  sassOptions: {
    loadPaths: ['./node_modules/@payloadcms/ui/dist/scss/'],
  },
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
    qualities: [100],
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
      ...buildR2RemotePatterns(),
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
