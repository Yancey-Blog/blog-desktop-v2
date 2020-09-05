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
            YANCEY_BLOG_VERSION: `"${require('./package.json').version}"`,
            GIT_HASH: JSON.stringify(new GitRevisionPlugin().commithash()),
          }),
        )

        return config
      },
    }),
  )
