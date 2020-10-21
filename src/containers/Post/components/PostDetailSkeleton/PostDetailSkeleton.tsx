import { FC } from 'react'
import { Skeleton } from '@material-ui/lab'
import styled from 'styled-components'

const BlogDetailSkeletonWrapper = styled.div`
  margin: 10rem auto 0;
  max-width: 60rem;
  text-align: center;

  .MuiSkeleton-root {
    background: ${({ theme }) => theme.background.skeleton};
  }
`

const BlogDetailSkeletonPoster = styled.div`
  height: 32rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.oneOpcityBlack},
    0 4px 6px -2px ${({ theme }) => theme.colors.oneOpcityBlack};
`

const BlogDetailSkeletonMeta = styled.div`
  display: flex;
  justify-content: center;
`

const BlogDetailSkeleton: FC = () => {
  return (
    <BlogDetailSkeletonWrapper>
      <BlogDetailSkeletonPoster>
        <Skeleton animation="wave" variant="rect" width="100%" height="100%" />
      </BlogDetailSkeletonPoster>

      <Skeleton
        animation="wave"
        variant="text"
        width="40rem"
        height="0.8rem"
        style={{ margin: '2rem auto' }}
      />

      <BlogDetailSkeletonMeta>
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
      </BlogDetailSkeletonMeta>

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
    </BlogDetailSkeletonWrapper>
  )
}

export default BlogDetailSkeleton
