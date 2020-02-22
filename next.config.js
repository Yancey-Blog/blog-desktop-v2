module.exports = (phase, { defaultConfig }) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'developemnt'
  const isEnvProduction = process.env.NODE_ENV === 'production'

  return {
    env: {
      BASE_URL: isEnvProduction
        ? 'https://api.yanceyleo.com/graphql'
        : 'http://localhost:3002/graphql',
    },
    assetPrefix: isEnvProduction ? 'https://cdn.yanceyleo.com' : '',
    compress: false,
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      })

      return config
    },
  }
}
