import { createGlobalStyle } from 'styled-components'
import { ALI_OSS_URL } from 'src/shared/constants'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Ubuntu';
  src: url('${ALI_OSS_URL}/fonts/Ubuntu-Regular.woff2') format('woff');
  font-style: normal;
  font-weight: 400;
  font-display: fallback;
}

@font-face {
  font-family: 'Ubuntu';
  src: url('${ALI_OSS_URL}/fonts/Ubuntu-Bold.ttf') format('truetype');
  font-style: normal;
  font-weight: bold;
  font-display: fallback;
}

  html {
    font-size: 15px;
  }


  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
    -webkit-font-smoothing: antialiased;  
    background: ${({ theme }: { theme: any }) => theme.background.primary};
    color: ${({ theme }: { theme: any }) => theme.text.primary};
    transition: background-color 250ms linear;
  }

  a {
    text-decoration: none;
  }  

  p, figure {
    margin: 0
  } 

  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
    margin-bottom: 1rem;
  }

  button {
    outline: none;
  }
`

export default GlobalStyle
