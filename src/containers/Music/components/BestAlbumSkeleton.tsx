import { FC } from 'react'
import { Skeleton } from '@material-ui/core'
import styled from 'styled-components'

const BestAlbumSkeletonWrapper = styled.div`
  box-shadow: 1px 1px 10px 0 ${({ theme }) => theme.background.bestAlbumCard};

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const BestAlbumSkeletonMeta = styled.div`
  padding: 1.5rem 2rem;
`

const BestAlbumSkeleton: FC = () => {
  return (
    <BestAlbumSkeletonWrapper>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height="25.2rem"
      />

      <BestAlbumSkeletonMeta>
        <Skeleton
          animation="wave"
          variant="text"
          width="6rem"
          height="0.8rem"
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="12rem"
          height="0.8rem"
          style={{ margin: '2rem 0 1.5rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="12rem"
          height="0.8rem"
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="8rem"
          height="2.5rem"
          style={{ marginTop: '5.8rem', borderRadius: '2rem' }}
        />
      </BestAlbumSkeletonMeta>
    </BestAlbumSkeletonWrapper>
  )
}

export default BestAlbumSkeleton
