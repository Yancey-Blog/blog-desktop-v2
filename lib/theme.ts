const basicTheme = {
  colors: {
    orange: '#ffa500',
    black: '#000000',
  },
}

export const lightTheme = {
  colors: {
    text: '#666666',
    background: '#ffffff',
    ...basicTheme.colors,
  },
}

export const darkTheme = {
  colors: {
    text: '#c3bfb6',
    background: '#181a1b',
    ...basicTheme.colors,
  },
}
