import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string
      secondary: string
      postCard: string
      blurCard: string
      bestAlbumCard: string
      skeleton: string
      tooltip: string
      inlineCode: string
      searchBox: string
      summaryBg: string
    }
    text: {
      primary: string
      secondary: string
      header: string
      post: string
      tooltip: string
      base: string
    }
    link: {
      primary: string
      secondary: string
    }
    border: string
    toggleBorder: string
    gradient: string
    postSvg: string
    codeEl: string
    fontWeights: {
      normal: number
      subheading: number
      link: number
      bold: number
      heading: number
    }
    lineHeights: {
      body: number
      heading: number
      code: number
    }
    colors: {
      sloganRed: string
      heartRed: string
      white: string
      black: string
      orange: string
      pink: string
      green: string
      postTagColor: string
      postTagBg: string
      postTagBgHover: string
      summaryBar: string
      linkBlue: string
      sloganBlue: string
      archiveBlue: string
      oneOpcityBlack: string
      threeOpcityBlack: string
      fiveOpcityBlack: string
      sixOpcityBlack: string
      sevenOpcityBlack: string
      linkBase: string
    }
    zIndex: {
      negative: number
      root: number
      positive: number
      fixed: number
      overlay: number
    }
    headerHeight: string
  }
}
