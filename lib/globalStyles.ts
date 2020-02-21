import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Ubuntu';
  src: url('https://static.yanceyleo.com/fonts/Ubuntu-Regular.woff2') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    -webkit-font-smoothing: antialiased
  }
`

export default GlobalStyle
