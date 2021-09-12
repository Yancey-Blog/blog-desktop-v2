const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase, { defaultConfig }) => {
  const { host } = new URL(process.env.NEXT_PUBLIC_STATIC_FILE_URL)

  return withPWA(
    withBundleAnalyzer({
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      productionBrowserSourceMaps: true,
      pwa: {
        dest: 'public',
        runtimeCaching,
      },
      images: {
        // TODO: 清洗完数据下掉 'static.yancey.app'
        domains: [host, 'static.yancey.app'],
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
