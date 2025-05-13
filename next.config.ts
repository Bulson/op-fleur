import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  // statyczny eksport
  output: 'export',
  // trailing slash, by każdy katalog miał index.html
  trailingSlash: true,
  reactStrictMode: true,

  // tylko w produkcji ustawiamy ścieżki pod GitHub Pages
  ...(isProd
    ? {
        basePath: '/op-fleur',
        assetPrefix: '/op-fleur/',
      }
    : {}),
}

export default nextConfig
