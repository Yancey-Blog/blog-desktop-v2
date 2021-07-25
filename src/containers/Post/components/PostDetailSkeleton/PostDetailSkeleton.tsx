import { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import styled from 'styled-components'
import breakpoints from 'src/styled/breakpoints'

const PostDetailSkeletonWrapper = styled.div`
  margin: 10rem auto 0;
  max-width: 60rem;
  text-align: center;

  @media only screen and ${breakpoints.device.laptop} {
    margin: 1rem;
    max-width: auto;

    .headerSkeleton {
      width: 100% !important;
    }
  }

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const PostDetailSkeletonPoster = styled.div`
  height: 32rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.oneOpcityBlack},
    0 4px 6px -2px ${({ theme }) => theme.colors.oneOpcityBlack};

  @media only screen and ${breakpoints.device.laptop} {
    height: 20rem;
  }
`

const PostDetailSkeletonMeta = styled.div`
  display: flex;
  justify-content: center;
`

const PostDetailSkeleton: FC = () => {
  return (
    <PostDetailSkeletonWrapper>
      <PostDetailSkeletonPoster>
        <Skeleton animation="wave" variant="rect" width="100%" height="100%" />
      </PostDetailSkeletonPoster>

      <Skeleton
        animation="wave"
        variant="text"
        width="40rem"
        height="0.8rem"
        style={{ margin: '2rem auto' }}
        className="headerSkeleton"
      />

      <PostDetailSkeletonMeta>
        <Skeleton
          animation="wave"
          variant="text"
          width="4rem"
          height="0.8rem"
          style={{ margin: '0 1rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="4rem"
          height="0.8rem"
          style={{ margin: '0 1rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="4rem"
          height="0.8rem"
          style={{ margin: '0 1rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="4rem"
          height="0.8rem"
          style={{ margin: '0 1rem' }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          width="4rem"
          height="0.8rem"
          style={{ margin: '0 1rem 2rem' }}
        />
      </PostDetailSkeletonMeta>

      <Skeleton animation="wave" variant="text" width="100%" height="0.8rem" />
      <Skeleton
        animation="wave"
        variant="text"
        width="100%"
        height="0.8rem"
        style={{ margin: '1rem 0' }}
      />
      <Skeleton animation="wave" variant="text" width="100%" height="0.8rem" />
      <Skeleton
        animation="wave"
        variant="text"
        width="100%"
        height="0.8rem"
        style={{ margin: '1rem 0' }}
      />
      <Skeleton animation="wave" variant="text" width="100%" height="0.8rem" />
      <Skeleton
        animation="wave"
        variant="text"
        width="100%"
        height="0.8rem"
        style={{ margin: '1rem 0' }}
      />
      <Skeleton animation="wave" variant="text" width="80%" height="0.8rem" />
    </PostDetailSkeletonWrapper>
  )
}

export default PostDetailSkeleton
