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
    onPrimary: '#ffffff',
  },
  link: {
    primary: '#666666',
    secondary: '#ffa500',
  },
}

const dark = {
  background: {
    primary: '#181a1b',
    secondary: '#111111',
    inset: '#111111',
    input: 'rgba(191,193,201,0.12)',
  },
  text: {
    primary: '#f5f6f7',
    secondary: '#e3e4e8',
    onPrimary: '#050505',
  },
  link: {
    primary: '#c3bfb6',
    secondary: '#ffa500',
  },
}

const defaultTheme = {
  fontWeights: {
    body: 400,
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
    sloganBlue: '#00a7e0',
    sloganRed: '#ff3f1a',
    halfOpcityBlack: 'rgba(0, 0, 0, .5)',
    border: '#e6e6e6',
  },
  zIndex: {
    fixed: 200,
    verlay: 400,
  },
  headerHeight: '4.5rem',
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
