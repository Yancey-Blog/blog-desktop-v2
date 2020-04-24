import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'

export const PostDetailWrapper = styled.article`
  position: relative;
  margin-top: 12rem;
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
  margin-top: 1.6rem;
  font-size: 2.6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`

export const Summary = styled.blockquote``

export const Tag = styled.span``

export const Content = styled.article`
  max-width: 60rem;
  margin: 0 auto;
  color: #1c1e21;

  p {
    font-size: 1.1rem;
    line-height: 1.8;

    code {
      padding: 0.2rem 0.4rem;
      border-radius: 0.4rem;
      background: #f5f6f7;
    }
  }

  li {
    line-height: 4;
  }
`
