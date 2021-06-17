const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = (phase, { defaultConfig }) =>
  withBundleAnalyzer({
    compress: true,
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    productionBrowserSourceMaps: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
  })
