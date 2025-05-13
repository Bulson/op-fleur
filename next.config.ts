import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // generujemy statyczne pliki
  output: 'export',

  // jeśli chcesz, możesz zostawić basePath i assetPrefix
  basePath: '/op-fleur',
  assetPrefix: '/op-fleur/',

  // generuj foldery z index.html
  trailingSlash: true,

  reactStrictMode: true,
}

export default nextConfig
