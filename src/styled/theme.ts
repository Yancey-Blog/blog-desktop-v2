const light = {
  background: {
    primary: '#ffffff',
    secondary: '#fbfbfb',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)',
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
    secondary: '#181a1b',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)',
  },
  text: {
    primary: '#f5f6f7',
    secondary: '#e3e4e8',
    header: '#cbc8c0',
  },
  link: {
    primary: '#f5f6f7',
    secondary: '#ffa500',
  },
  border: '#383838',

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
    red: '#f05228',
    white: '#ffffff',
    black: '#000000',
    orange: '#ffa500',
    sloganBlue: '#00a7e0',
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
