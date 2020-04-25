import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { PosterProps } from 'src/shared/types'
import { IPostItem } from '../../types'

const Wrapper = styled.section`
  ${flexMixin()}

  a {
    display: block;
    width: 100%;
  }
`

const Container = styled.div<PosterProps>`
  box-sizing: border-box;
  position: relative;
  margin: 2rem auto;
  padding: 2rem;
  height: 10rem;
  color: ${({ theme }) => theme.colors.white};
  background-image: url(${({ imageUrl }) => imageUrl});
  ${backgroundMixin()}

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.sevenOpcityBlack};
  }

  &:hover::before {
    background: ${({ theme }) => theme.colors.threeOpcityBlack};
  }
`

const Title = styled.p`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.overlay};
`

interface Props {
  prev: IPostItem | null
  next: IPostItem | null
}

const PrevAndNext: FC<Props> = ({ prev, next }) => {
  return (
    <Wrapper>
      {prev && (
        <Link href="/post/[id]" as={`/post/${prev._id}`}>
          <a>
            <Container imageUrl={prev.posterUrl}>
              <Title>PREVIOUS POST</Title>
              <Title>{prev.title}</Title>
            </Container>
          </a>
        </Link>
      )}
      {next && (
        <Link href="/post/[id]" as={`/post/${next._id}`}>
          <a>
            <Container imageUrl={next.posterUrl}>
              <Title>NEXT POST</Title>
              <Title>{next.title}</Title>
            </Container>
          </a>
        </Link>
      )}
    </Wrapper>
  )
}

export default PrevAndNext
