import { FC } from 'react'
import { Skeleton } from '@material-ui/core'
import styled from 'styled-components'

const Top7PVPostsSkeletonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.9rem;
  background-color: ${({ theme }) => theme.background.blurCard};
  border-radius: 0.6rem;

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const Top7PVPostsSkeleton: FC = () => {
  return (
    <Top7PVPostsSkeletonWrapper>
      <div>
        <Skeleton
          animation="wave"
          variant="text"
          width="12rem"
          height="0.8rem"
          style={{ marginBottom: '2rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="17rem"
          height="0.8rem"
        />
      </div>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="4rem"
        height="4rem"
        style={{ borderRadius: '0.6rem' }}
      />
    </Top7PVPostsSkeletonWrapper>
  )
}

export default Top7PVPostsSkeleton
