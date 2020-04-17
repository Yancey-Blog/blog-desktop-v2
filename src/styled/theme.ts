const light = {
  background: {
    primary: '#ffffff',
    secondary: '#ffffff',
    inset: '#e2e4e8',
    input: 'rgba(65,67,78,0.12)',
  },
  text: {
    primary: '#1c1e21',
    secondary: '#eaeadf',
    tertiary: '#525560',
    quarternary: '#9194a1',
    placeholder: 'rgba(82,85,96,0.5)',
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
    tertiary: '#a9abb6',
    quarternary: '#6c6f7e',
    placeholder: 'rgba(145,148,161,0.5)',
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
  },
  zIndex: {
    fixed: 200,
    verlay: 400,
  },
  headerHeight: '4rem',
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
