const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase, { defaultConfig }) =>
  withPWA(
    withBundleAnalyzer({
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      productionBrowserSourceMaps: true,
      pwa: {
        dest: 'public',
        runtimeCaching,
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
