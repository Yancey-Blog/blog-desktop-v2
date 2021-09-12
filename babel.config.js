const isEnvDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        pure: true,
        displayName: isEnvDevelopment,
        fileName: isEnvDevelopment,
        minify: true,
        transpileTemplateLiterals: true,
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          transform: '@material-ui/core/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
}
