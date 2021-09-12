module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        pure: true,
        displayName: process.env.NODE_ENV !== 'production',
        fileName: false,
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
