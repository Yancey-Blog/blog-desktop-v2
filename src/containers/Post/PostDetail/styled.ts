import styled from 'styled-components'
import { backgroundMixin } from 'src/styled/mixins'

interface PosterProps {
  readonly imageUrl: string
}

export const Poster = styled.figure<PosterProps>`
  width: 100%;
  height: 40rem;
  background-image: url(${({ imageUrl }) => imageUrl});
  ${backgroundMixin()}
`

export const Title = styled.h1``

export const Summary = styled.blockquote``

export const Tag = styled.span``
