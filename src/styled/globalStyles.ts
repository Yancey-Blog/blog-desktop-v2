import { createGlobalStyle } from 'styled-components'
import cur from 'public/images/normal.cur'
import breakpoints from './breakpoints'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media only screen and ${breakpoints.device.laptop} {
      font-size: 15px;
      overflow-x: hidden;
    }
  }

  body {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;  
    background: ${({ theme }: { theme: any }) => theme.background.primary};
    color: ${({ theme }: { theme: any }) => theme.text.base};  
    cursor: url(${cur}), auto;  
  }

  a {
    color: ${({ theme }: { theme: any }) => theme.text.secondary};
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

  code {
    font-family: Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  }

  /* aplayer CSS */
  .aplayer-list-title, .aplayer-title {
    color:#666 !important;
  }

  @media only screen and ${breakpoints.device.laptop} {
    .aplayer {
      display: none;
    }

    .spinner-icon {
      display: none!important;
    }
  }
`

export default GlobalStyle
