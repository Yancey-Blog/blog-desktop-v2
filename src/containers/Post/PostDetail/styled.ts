import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'

export const PostDetailWrapper = styled.article`
  position: relative;
  margin: 12rem auto 0;
  font-family: 'Ubuntu', sans-serif;
  color: ${({ theme }) => theme.text.post};
`

export const Poster = styled.figure<PosterProps>`
  ${flexMixin()}
  height: 32rem;
  border-radius: 1rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  ${backgroundMixin()}
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0 ,0, 0, .05);
`

export const Svg = styled.svg`
  position: absolute;
  top: -4%;
  z-index: -1;

  & path {
    fill: ${({ theme }) => theme.postSvg};
  }
`

export const Title = styled.h1`
  margin: 2rem 0;
  font-size: 2.6rem;
  text-align: center;
`

export const Summary = styled.blockquote`
  margin: 2rem 0 4rem 0;
  padding: 1.2rem;
  font-size: 1.2rem;
  border-radius: 10px;
  line-height: 1.8;
  background: 0 0;
  border: none;
  border: 2px solid ${({ theme }) => theme.text.secondary};
  box-shadow: 0.4rem 0.4rem 0 0 ${({ theme }) => theme.text.secondary};
`

export const Content = styled.article`
  max-width: 60rem;
  margin: 0 auto;

  h2 {
    margin: 2rem 0;
    font-size: 2rem;
  }

  h3 {
    margin: 2rem 0;
    font-size: 1.6rem;
  }

  p {
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    line-height: 1.8;

    code {
      background: ${({ theme }) => theme.codeEl};
      color: #ef3b7d;
      border-radius: 2px;
      padding: 1px 6px;
    }
  }

  pre {
    margin: 2rem 0;
    border-radius: 0.8rem;
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

  a {
    position: relative;
    color: ${({ theme }) => theme.colors.linkBlue};
  }
`
