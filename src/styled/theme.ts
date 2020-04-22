const light = {
  background: {
    primary: '#ffffff',
    secondary: '#fbfbfb',
    postCard: '#ffffff',
    blurCard: 'rgba(245, 245, 245, .8)',
  },
  text: {
    primary: '#666666',
    secondary: '#969696',
    header: '#504e4e',
  },
  link: {
    primary: '#666666',
    secondary: '#ffa500',
  },
  border: '#e6e6e6',

  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

const dark = {
  background: {
    primary: '#181a1b',
    secondary: '#1d1f27',
    postCard: '#1d1f27',
    blurCard: 'rgba(27, 29, 30, .8)',
  },
  text: {
    primary: '#f5f6f7',
    secondary: '#cbc8c0',
    header: '#f5f6f7',
  },
  link: {
    primary: '#f5f6f7',
    secondary: '#ffa500',
  },
  border: '#5b5b5b',

  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}

const defaultTheme = {
  fontWeights: {
    normal: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  colors: {
    heartRed: '#f05228',
    white: '#ffffff',
    black: '#000000',
    orange: '#ffa500',
    pink: '#d62b6b',
    green: '#35c0c0',
    linkBlue: '#0070ba',
    sloganBlue: '#00a7e0',
    archiveBlue: '#6ecaf5',
    sloganRed: '#ff3f1a',
    oneOpcityBlack: 'rgba(0, 0, 0, .1)',
    threeOpcityBlack: 'rgba(0, 0, 0, .3)',
    fiveOpcityBlack: 'rgba(0, 0, 0, .5)',
    sixOpcityBlack: 'rgba(0, 0, 0, .6)',
    sevenOpcityBlack: 'rgba(0, 0, 0, .7)',
  },
  zIndex: {
    fixed: 200,
    overlay: 400,
  },
  headerHeight: '4.5rem',
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
