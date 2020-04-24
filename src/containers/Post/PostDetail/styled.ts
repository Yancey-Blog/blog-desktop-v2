import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'

export const PostDetailWrapper = styled.article`
  position: relative;
  margin-top: 12rem;
  color: #3b454e;
`

export const Poster = styled.figure<PosterProps>`
  ${flexMixin()}
  margin: 0 auto;
  width: 100%;
  height: 32rem;
  border-radius: 1rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  ${backgroundMixin()}
`

export const Svg = styled.svg`
  position: absolute;
  top: -4%;
  z-index: -1;
`

export const Title = styled.h1`
  margin-top: 2rem;
  font-size: 2.6rem;
  text-align: center;
`

export const Summary = styled.blockquote`
  margin: 0;
  padding: 1rem;
  font-size: 1.375rem;
  border-radius: 10px;
  line-height: 1.55;
  margin-bottom: 55px !important;
  background: 0 0;
  border: none;
  border: 2px solid #696969;
  -webkit-box-shadow: 6px 6px 0 0 #696969;
  box-shadow: 6px 6px 0 0 #696969;
`

export const Content = styled.article`
  max-width: 60rem;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin: 2rem 0;
  }

  h3 {
    font-size: 1.6rem;
    margin: 2rem 0;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    line-height: 1.8;

    code {
      background: #f0f0f0;
      color: #ef3b7d;
      border-radius: 2px;
      padding: 1px 6px;
    }
  }

  pre {
    margin: 2rem 0;
  }

  li {
    line-height: 4;
  }

  img {
    display: block;
    margin: 3rem auto;
    width: 100%;
    max-height: 40rem;
    object-fit: contain;
  }

  iframe {
    margin: 2rem 0;
    height: 35rem;
  }
`
