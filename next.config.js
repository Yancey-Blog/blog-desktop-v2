const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
]

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  return withPWA(
    withBundleAnalyzer({
      env: {
        NEXT_PUBLIC_API_URL: 'https://api.yanceyleo.com/beg/graphql',
        NEXT_PUBLIC_DOMAIN_URL: 'https://yanceyleo.com',
        NEXT_PUBLIC_STATIC_FILE_URL: 'https://edge.yancey.app/beg',
        NEXT_PUBLIC_GA_KEY: 'UA-114532340-1',
        NEXT_PUBLIC_SENTRY_DSN:
          'https://2998f0f7a05044969a7859a2596e6977@o265404.ingest.sentry.io/1468725',
        NEXT_PUBLIC_HOTJAR_ID: '1514017',
        NEXT_PUBLIC_HOTJAR_SV: '6',
        NEXT_PUBLIC_DISCUSSION_KEY: 'yancey-blog',
        NEXT_PUBLIC_ALGOLIA_SEARCH_APP_ID: '5Y6Y04WE04',
        NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY: '46f32897c2a83b6495111a68bd1cd8c7',
        NEXT_PUBLIC_ALGOLIA_SEARCH_INDEX_NAME: 'prod_YANCEY_BLOG',
      },
      reactStrictMode: true,
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      productionBrowserSourceMaps: true,
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
      images: {
        // TODO: 清洗完数据下掉 'static.yancey.app'
        domains: ['edge.yancey.app', 'static.yancey.app'],
      },
      webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, webpack },
      ) => {
        config.module.rules.push({
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.cur$/],
          use: [
            {
              loader: 'url-loader',
            },
          ],
        })

        return config
      },
      async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: '/(.*)',
            headers: securityHeaders,
          },
        ]
      },
    }),
  )
}
