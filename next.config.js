const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  return withPWA(
    withBundleAnalyzer({
      env: {
        NEXT_PUBLIC_API_URL: 'https://api.yanceyleo.com/graphql',
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
      // All features take effect need to support babel configuration.
      swcMinify: true,
      reactStrictMode: true,
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      productionBrowserSourceMaps: true,
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
      images: {
        domains: ['edge.yancey.app'],
        formats: ['image/avif', 'image/webp'],
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
    }),
  )
}
