import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { flexMixin } from 'src/styled/mixins'
import breakpoints from 'src/styled/breakpoints'
import { IPostItem } from 'src/containers/Post/types'

const Wrapper = styled.section`
  ${flexMixin()}

  @media only screen and ${breakpoints.device.laptop} {
    flex-direction: column;
    gap: 1rem;
  }

  a {
    display: block;
    width: 100%;
  }
`

const PictureContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 2rem auto;
  padding: 2rem;
  height: 10rem;
  color: ${({ theme }) => theme.colors.white};

  @media only screen and ${breakpoints.device.laptop} {
    margin: 0;
  }

  picture {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndex.negative};
  }

  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
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
  const PrevAndNextItem = (
    id: string,
    posterUrl: string,
    title: string,
    type: ItemType,
  ) => (
    <Link href={`/post/${id}`}>
      <a>
        <PictureContainer>
          <Image src={posterUrl} alt={title} />
          <Title>{type} POST</Title>
          <Title>{title}</Title>
        </PictureContainer>
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
