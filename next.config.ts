import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 1) generujemy statyczne pliki
  output: 'export',

  // 2) ścieżka bazowa (twój repozytorium to bulson/op-fleur)
  basePath: '/op-fleur',

  // 3) prefix do zasobów statycznych
  assetPrefix: '/op-fleur/',

  // 4) dodatkowo: generuj foldery z index.html
  trailingSlash: true,

  // (opcjonalnie) włącz tryb ścisły Reacta
  reactStrictMode: true,
}

export default nextConfig
