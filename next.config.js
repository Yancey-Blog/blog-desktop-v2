const withSourceMaps = require('@zeit/next-source-maps')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

module.exports = (phase, { defaultConfig }) =>
  withBundleAnalyzer(
    withSourceMaps({
      compress: true,
      pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
      webpack: (config, options) => {
        config.module.rules.push({
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/, /\.cur$/],
          use: [
            {
              loader: 'url-loader',
            },
          ],
        })

        config.plugins.push(
          new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
          new webpack.DefinePlugin({
            versionCommand: 'describe --always --tags --dirty',
            __YANCEY_BLOG_VERSION__: `"${require('./package.json').version}"`,
            __GIT_HASH__: JSON.stringify(new GitRevisionPlugin().commithash()),
          }),
        )

        return config
      },
    }),
  )
