import React, { FC } from 'react'
import styled from 'styled-components'
import { formatDate } from 'src/shared/utils'
import { transitionMixin } from 'src/styled/mixins'
import { IBestAlbum } from '../types'

const BestAlbumWrapper = styled.div`
  width: 100%;
  box-shadow: 1px 1px 10px 0 ${({ theme }) => theme.border};
`

const Img = styled.img`
  width: 100%;
  height: 25.2rem;
  object-fit: cover;
`

const Meta = styled.div`
  padding: 1.5rem 2rem;
`

const Date = styled.time`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.pink};
`

const Title = styled.p`
  padding: 1rem 0;
  color: ${({ theme }) => theme.text.header};
  font-size: 1.2rem;
  line-height: 1.4;
`

const Artist = styled.p``

const Divider = styled.hr`
  margin: 3.6rem auto 2rem 0;
  width: 3rem;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.pink};
`

const Btn = styled.button`
  padding: 0.6rem 1.8rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.green};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: 2rem;
  ${transitionMixin('all', 200, 'ease')}
  cursor: pointer;
`

interface Props {
  bestAlbum: IBestAlbum
}

const BestAlbum: FC<Props> = ({ bestAlbum }) => {
  const { title, artist, coverUrl, mvUrl, releaseDate } = bestAlbum

  return (
    <BestAlbumWrapper>
      <Img src={coverUrl} alt={title} />

      <Meta>
        <Date>{formatDate(releaseDate, 'YYYY-MM-DD')}</Date>
        <Title>{title}</Title>
        <Artist>{artist}</Artist>
        <Divider />
        <a href={mvUrl} target="_blank" rel="noopener noreferrer">
          <Btn>YOUTUBE</Btn>
        </a>
      </Meta>
    </BestAlbumWrapper>
  )
}

export default BestAlbum
