import React, { FC } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { formatDate, generateAliOSSSuffix } from 'src/shared/utils'
import { AliOSSSuffix } from 'src/shared/constants'
import { ILiveTour } from '../types'

const LiveTourContent = styled.div`
  position: relative;
  height: 38rem;
`

const LiveTourMeta = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  padding: 2rem 3rem;
  width: 100%;
  height: 10rem;
  background: ${({ theme }) => theme.background.blurCard};
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Date = styled.time`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.pink};
`

const Title = styled.p`
  padding: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.text.header};
  font-size: 1.8rem;
`

interface Props {
  liveTours: ILiveTour[]
}

const LiveTour: FC<Props> = ({ liveTours }) => {
  return (
    <Carousel
      autoplay
      autoplayInterval={2000}
      transitionMode="fade"
      wrapAround
      withoutControls
    >
      {liveTours.map((liveTour) => (
        <LiveTourContent key={liveTour._id}>
          <picture>
            <source
              srcSet={`${liveTour.posterUrl}${generateAliOSSSuffix(
                AliOSSSuffix.WEBP_SUFFIX,
              )}`}
              type="image/webp"
            />
            <Img src={liveTour.posterUrl} alt={liveTour.title} />
          </picture>

          <LiveTourMeta>
            <Date>{formatDate(liveTour.showTime, 'YYYY-MM-DD')}</Date>
            <Title>{liveTour.title}</Title>
          </LiveTourMeta>
        </LiveTourContent>
      ))}
    </Carousel>
  )
}

export default LiveTour
