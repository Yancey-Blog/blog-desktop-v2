import React, { FC } from 'react'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import { ILiveTour } from '../types'

const LiveTourWrapper = styled.div`
  height: 38rem;
`

const LiveTourMeta = styled.div`
  background: rgba(255, 255, 255, 0.9);
`

interface Props {
  liveTours: ILiveTour[]
}

const LiveTour: FC<Props> = ({ liveTours }) => {
  return (
    <LiveTourWrapper>
      <Carousel
        autoplay
        autoplayInterval={2000}
        transitionMode="fade"
        wrapAround
      >
        {liveTours.map((liveTour) => (
          <LiveTourMeta key={liveTour._id}>
            <img
              key={liveTour._id}
              src={liveTour.posterUrl}
              alt={liveTour.title}
            />
            <div>
              <time>{liveTour.showTime}</time>
              <p>{liveTour.title}</p>
            </div>
          </LiveTourMeta>
        ))}
      </Carousel>
    </LiveTourWrapper>
  )
}

export default LiveTour
