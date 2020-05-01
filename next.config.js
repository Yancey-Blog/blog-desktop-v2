const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = (phase, { defaultConfig }) =>
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
        test: [/\.svg/, /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
        use: [
          {
            loader: 'url-loader',
          },
        ],
      })

      return config
    },
    experimental: {
      jsconfigPaths: true,
    },
  })
