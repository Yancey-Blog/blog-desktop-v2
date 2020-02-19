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
    // target: 'serverless',
    compress: false,
  }
}