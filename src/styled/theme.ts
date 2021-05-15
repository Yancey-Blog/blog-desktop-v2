const light = {
  background: {
    primary: '#ffffff',
    secondary: '#fbfbfb',
    postCard: '#ffffff',
    blurCard: 'rgba(245, 245, 245, .8)',
    bestAlbumCard: '#e6e6e6',
    skeleton: 'rgba(0, 0, 0, 0.04)',
    tooltip: 'rgba(0, 0, 0, .7)',
  },
  text: {
    primary: '#666666',
    secondary: '#969696',
    header: '#504e4e',
    post: '#3b454e',
    tooltip: '#fff',
  },
  link: {
    primary: '#666666',
    secondary: '#ffa500',
  },
  border: '#e6e6e6',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  postSvg: '#fcf8db',
  codeEl: '#f0f0f0',
}

const dark = {
  background: {
    primary: '#181a1b',
    secondary: '#1d1f27',
    postCard: '#1d1f27',
    blurCard: 'rgba(27, 29, 30, .8)',
    bestAlbumCard: '#000000',
    skeleton: 'rgba(255, 255, 255, 0.08)',
    tooltip: 'rgba(255, 255, 255, .7)',
  },
  text: {
    primary: '#f5f6f7',
    secondary: '#cbc8c0',
    header: '#f5f6f7',
    post: '#f5f6f7',
    tooltip: '#000',
  },
  link: {
    primary: '#f5f6f7',
    secondary: '#ffa500',
  },
  border: '#5b5b5b',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  postSvg: '#181a1b',
  codeEl: '#181a1b',
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
    sloganRed: '#ff3f1a',
    heartRed: '#f05228',
    white: '#ffffff',
    black: '#000000',
    orange: '#ffa500',
    pink: '#d62b6b',
    green: '#35c0c0',
    postTagColor: '#00965e',
    postTagBg: 'rgba(0, 150, 94, 0.1)',
    postTagBgHover: 'rgba(0, 150, 94, 0.2)',
    linkBlue: '#0070ba',
    sloganBlue: '#00a7e0',
    archiveBlue: '#6ecaf5',
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
