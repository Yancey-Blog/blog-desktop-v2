import { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import styled from 'styled-components'

const LiveTourSkeletonWrapper = styled.div`
  height: 38rem;

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const LiveTourSkeletonMeta = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 3rem;
  height: 19rem;
`

const LiveTourSkeleton: FC = () => {
  return (
    <LiveTourSkeletonWrapper>
      <Skeleton animation="wave" variant="rect" width="100%" height="19rem" />

      <LiveTourSkeletonMeta>
        <Skeleton
          animation="wave"
          variant="text"
          width="10rem"
          height="0.8rem"
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="20rem"
          height="0.8rem"
          style={{ marginTop: '2rem' }}
        />
      </LiveTourSkeletonMeta>
    </LiveTourSkeletonWrapper>
  )
}

export default LiveTourSkeleton
