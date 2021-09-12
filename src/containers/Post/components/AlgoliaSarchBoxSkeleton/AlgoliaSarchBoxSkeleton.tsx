import { FC } from 'react'
import { Skeleton } from '@material-ui/core'
import styled from 'styled-components'
import SkeletonIterator from 'src/components/SkeletonIterator/SkeletonIterator'

const AlgoliaSarchBoxSkeletonWrapper = styled.div`
  margin: 1rem 0;
  padding: 0 1rem 1rem;

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const TitleSkeletonWrapper = styled.p`
  margin: 1.8rem 0;
`

const ContentSkeletonWrapper = styled.div`
  width: 100%;
`

const AlgoliaSarchBoxSkeleton: FC = () => {
  const ContentSkeleton = () => (
    <Skeleton
      animation="wave"
      variant="text"
      width="100%"
      height="0.8rem"
      style={{ marginBottom: '0.6rem' }}
    />
  )
  return (
    <AlgoliaSarchBoxSkeletonWrapper>
      <TitleSkeletonWrapper>
        <Skeleton animation="wave" variant="text" width="60%" height="0.8rem" />
      </TitleSkeletonWrapper>
      <ContentSkeletonWrapper>
        <SkeletonIterator count={8} skeletonComponent={ContentSkeleton} />
        <Skeleton
          animation="wave"
          variant="text"
          width="90%"
          height="0.8rem"
          style={{ marginBottom: '0.6rem' }}
        />
      </ContentSkeletonWrapper>
    </AlgoliaSarchBoxSkeletonWrapper>
  )
}

export default AlgoliaSarchBoxSkeleton
