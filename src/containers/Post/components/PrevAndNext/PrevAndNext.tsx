import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { backgroundMixin, flexMixin } from 'src/styled/mixins'
import { useEnableWebp } from 'src/hooks/useEnableWebp'
import { WEBP_SUFFIX } from 'src/shared/constants'
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

enum ItemType {
  prev = 'PREVIOUS',
  next = 'NEXT',
}

interface Props {
  prev: IPostItem | null
  next: IPostItem | null
}

const PrevAndNext: FC<Props> = ({ prev, next }) => {
  const { enableWebp } = useEnableWebp()

  const PrevAndNextItem = (
    id: string,
    posterUrl: string,
    title: string,
    type: ItemType,
  ) => (
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>
        <Container
          imageUrl={enableWebp ? `${posterUrl}${WEBP_SUFFIX}` : posterUrl}
        >
          <Title>{type} POST</Title>
          <Title>{title}</Title>
        </Container>
      </a>
    </Link>
  )

  return (
    <Wrapper>
      {prev &&
        PrevAndNextItem(prev._id, prev.posterUrl, prev.title, ItemType.prev)}
      {next &&
        PrevAndNextItem(next._id, next.posterUrl, next.title, ItemType.next)}
    </Wrapper>
  )
}

export default PrevAndNext
