import { FC } from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'

const CardSkeletonWrapper = styled.div`
  height: 18.2rem;

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const CardSkeletonMeta = styled.div`
  padding: 1.5rem 2rem;
`

const CardSkeleton: FC = () => {
  return (
    <CardSkeletonWrapper>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="9.1rem"
      />

      <CardSkeletonMeta>
        <Skeleton
          animation="wave"
          variant="text"
          width="10rem"
          height="0.8rem"
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          height="0.8rem"
          style={{ margin: '2rem 0 1rem' }}
        />
        <Skeleton animation="wave" variant="text" width="80%" height="0.8rem" />
      </CardSkeletonMeta>
    </CardSkeletonWrapper>
  )
}

export default CardSkeleton
