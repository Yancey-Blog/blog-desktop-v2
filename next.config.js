const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withSourceMaps = require('@zeit/next-source-maps')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = (phase, { defaultConfig }) =>
  withBundleAnalyzer(
    withSourceMaps({
      env: {
        BASE_URL:
          phase === PHASE_DEVELOPMENT_SERVER
            ? 'http://localhost:3002/graphql'
            : 'https://api.yanceyleo.com/graphql',
      },
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      webpack: (config, options) => {
        config.module.rules.push({
          test: [
            /\.svg/,
            /\.bmp$/,
            /\.gif$/,
            /\.jpe?g$/,
            /\.png$/,
            /\.webp$/,
            /\.cur$/,
          ],
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
